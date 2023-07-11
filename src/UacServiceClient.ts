import {
    UserGroups,
    GroupMembers,
    GroupMember,
    GroupInvitations,
    InGroup,
    SiteInfos,
    AddUserToGroupResponse,
    UserGroup,
    RemoveUserResponse,
    UserGroupUpdateRequest, UpdateUacMemberRequest
} from './proto-build/compiled';
import { BaseUrl } from './constants/url';
import ChaynsError from './utils/error/ChaynsError';
import isChaynsError from './utils/error/isChaynsError';
import IChaynsLogger from './utils/logger/IChaynsLogger';
import ConsoleLogger from './utils/logger/ConsoleLogger';
import { TChaynsErrorResponse } from './utils/error/TChaynsErrorResponse';
import convertTimespanToISOString from './utils/convertTimespanToISOString';
import convertDateToProtoTimespan from './utils/convertDateToTimespan';
import type { TTimeSpan } from './types/TTimeSpan';
import { ApiRoles } from './constants/enums/ApiRoles';
import { TFixedGroupMember } from './types/TFixedGroupMember';
import { convertDecimalToNumber } from './utils/convertDecimalToNumber';
import { TFixedUserGroup } from './types/TFixedUserGroup';

type UacServiceClientBaseOptions = {
    baseUrl?: string;
    logger?: IChaynsLogger;
    getDefaultSiteId?: () => string;
};

type UacServiceClientOptionsWithSiteId = {
    getDefaultSiteId: () => string;
}

type UacServiceClientBrowserOptions = UacServiceClientBaseOptions & {
    getToken: () => Promise<string>;
    getDefaultPersonId: () => string;
};

type UacServiceClientServerOptions = UacServiceClientBaseOptions & {
    getApiToken: (roles: string[]) => Promise<string>;
    getDefaultPersonId?: never;
};

type UacServiceClientOptions = UacServiceClientBrowserOptions | UacServiceClientServerOptions;

type RemoveSiteId<T extends UacServiceClientOptions, O extends { siteId: string }> = (T extends UacServiceClientOptionsWithSiteId ? (Omit<O, 'siteId'> & {
    siteId?: string;
}) : O);

type RemovePersonId<T extends UacServiceClientOptions, O extends { personId: string }> = (T extends UacServiceClientBrowserOptions ? Omit<O, 'personId'> : O);

class UacServiceClient<T extends UacServiceClientOptions> {
    private getToken: (() => Promise<string>) | undefined;

    private getDefaultSiteId: (() => string) | undefined;

    private logger: IChaynsLogger;

    private baseUrl: string;

    private getApiToken: ((roles: string[]) => Promise<string>) | undefined;

    private getDefaultPersonId;

    private testBaseUrlPromise: Promise<void>;

    private isInNode: boolean;

    constructor({ getDefaultSiteId, logger, baseUrl, getDefaultPersonId, ...rest }: T) {
        if ("getToken" in rest) this.getToken =  rest.getToken as UacServiceClientBrowserOptions["getToken"];
        if ("getApiToken" in rest) this.getApiToken = rest.getApiToken as UacServiceClientServerOptions["getApiToken"];
        this.getDefaultSiteId = getDefaultSiteId;
        this.logger = logger || new ConsoleLogger();

        this.baseUrl = BaseUrl;
        this.isInNode = typeof window === 'undefined';

        const notFoundMessage = "could not reach baseurl, fallback to default " + BaseUrl;

        if (baseUrl) {
            this.testBaseUrlPromise = new Promise(r => {
                fetch(`${baseUrl}/_health`).then(x => {
                    if (x.ok) {
                        logger?.info({
                            message: 'Using custom baseUrl for uac-service',
                        });
                        this.baseUrl = baseUrl + "/";
                    } else {
                        logger?.info({
                            message: notFoundMessage
                        });
                        console.log(notFoundMessage)
                    }
                }).catch(() => {
                    logger?.info({
                        message: notFoundMessage
                    });
                    console.log(notFoundMessage)
                }).finally(() => {
                    r();
                });
            })
        } else {
            this.testBaseUrlPromise = Promise.resolve();
        }

        this.getDefaultPersonId = getDefaultPersonId;
    }

    private getTokenForFetch(roles: string[]): Promise<string> {
        if(this.getToken) return this.getToken();
        if(this.getApiToken) return this.getApiToken(roles);
        throw new Error("No api token function provided");
    }

    private async logFetch(url: string, params = {}, options: { siteId?: string; withoutSiteId?: boolean; roles: ApiRoles[]; }): Promise<Uint8Array> {
        const headers: {
            authorization: string;
            accept: string;
            'content-type': string;
            'user-agent'?: string;
        } = {
            authorization: `Bearer ${await this.getTokenForFetch(options.roles)}`,
            accept: 'application/protobuf',
            'content-type': 'application/protobuf'
        }

        if(this.isInNode) {
            headers['user-agent'] = '@chayns/uac-service package';
        }

        await this.testBaseUrlPromise;
        const fetchUrl = `${this.baseUrl}${options.withoutSiteId ? '' : (options?.siteId || (this.getDefaultSiteId && this.getDefaultSiteId())) || ""}/${url}`;
        try {
            const result = await fetch(fetchUrl, { headers, ...params });

            if(!result.ok) {
                if(result.headers.get('content-type')?.includes('json')) {
                    const exceptionData = await result.json() as TChaynsErrorResponse;

                    const exception = ChaynsError.Parse(exceptionData);
                    this.logger.error({
                        message:`Failed to fetch ${fetchUrl}`
                    }, exception);

                    throw exception;
                }
            }

            if(result.headers.get('Deprecation')) {
                this.logger.error({
                    message: "Deprecated endpoint called",
                    customText: fetchUrl,
                    data: {
                        deprecation: result.headers.get('Deprecation')
                    }
                })
            }
            return new Uint8Array(await result.arrayBuffer());
        } catch(e) {
            if(!isChaynsError(e)) {
                this.logger.error({
                    message:`Failed to fetch ${fetchUrl}`
                }, e as Error);
            }

            throw e;
        }
    }

    /**
     * Get all uac groups of a site
     * @param siteId
     * @param countUsers
     * @param countInvitations
     * @param withMeta
     */
    async getUserGroups({ siteId, countUsers = false, countInvitations = false, withMeta = false }: RemoveSiteId<T, { siteId: string, countUsers?: boolean, countInvitations?: boolean, withMeta?: boolean }>) {
        const query = new URLSearchParams();

        if(countUsers) query.set('countUsers', String(countUsers));
        if(countInvitations) query.set('countInvitations', String(countInvitations));
        if(withMeta) query.set('withMeta', String(withMeta));

        const res = await this.logFetch(`UserGroup?${query.toString()}`, {}, {
            siteId,
            roles: [ApiRoles.Read, ApiRoles.Manage],
        });

        if(withMeta) {
            return UserGroups.decode(res).userGroups.map((x) => ({
                ...x,
                admissionFee: convertDecimalToNumber(x.userGroupMeta.admissionFee),
                subscriptionPrice: convertDecimalToNumber(x.userGroupMeta.subscriptionPrice),
                membercardCancellationDescription: x.userGroupMeta.membercardCancellationDescription,
                subscriptionInterval: x.userGroupMeta.subscriptionInterval,
                userGroupMeta: undefined
            })) as TFixedUserGroup[];
        } else {
            return UserGroups.decode(res).userGroups as UserGroup[]
        }
    }
    /**
     * Get a uac group by id
     * @param groupId
     * @param siteId
     * @param countUsers
     * @param countInvitations
     */
    async getUserGroup({ groupId, siteId, countUsers = false, countInvitations = false}: RemoveSiteId<T, {groupId: number, siteId: string, countInvitations?: boolean, countUsers?: boolean }>) {
        const query = new URLSearchParams();

        if(countUsers) query.set('countUsers', String(countUsers));
        if(countInvitations) query.set('countInvitations', String(countInvitations));

        const res = await this.logFetch(`UserGroup/${groupId.toString()}?${query.toString()}`, {}, {
            siteId,
            roles: [ApiRoles.Read, ApiRoles.Manage],
        });

        return UserGroup.decode(res);
    }

    /**
     * Get the members of a uac group
     * @param groupId
     * @param siteId
     * @param skip
     * @param take
     */
    async getGroupMembers({ groupId, siteId, skip, take, sortByDate }: RemoveSiteId<T, { groupId: number; siteId: string; skip?: number; take?: number; sortByDate?: boolean; }>): Promise<TFixedGroupMember[]> {
        const query = new URLSearchParams();

        if (skip) {
            query.set('skip', String(skip));
        }
        if (take) {
            query.set('take', String(take));
        }
        if (sortByDate) {
            query.set('sortByDate', String(sortByDate));
        }

        const res = await this.logFetch(`UserGroup/${groupId}/Users?${query.toString()}`, {}, {
            siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        const { groupMembers } = GroupMembers.decode(res);

        return groupMembers.map(x => ({
            ...x,
            creationTime: convertTimespanToISOString(x.creationTime),
            expirationTime: convertTimespanToISOString(x.expirationTime)
        }));
    }

    /**
     * Get a single group membership
     * @param personId
     * @param siteId
     * @param groupId
     */
    async getMembership({ personId, siteId, groupId }: RemoveSiteId<T, { personId: string, siteId: string, groupId: number }>) {
        const res = await this.logFetch(`UserGroup/${groupId.toString()}/Users/${personId?.toString() || (this.getDefaultPersonId && this.getDefaultPersonId()) || ""}`, {}, {
            siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        const decoded = GroupMember.decode(res);
        return {
            ...decoded,
            creationTime: convertTimespanToISOString(decoded.creationTime),
            expirationTime: convertTimespanToISOString(decoded.expirationTime)
        }
    }

    /**
     * Get all pending invitations for a group
     * @param siteId
     * @param groupId
     */
    async getGroupInvitations({ siteId, groupId }: RemoveSiteId<T, { siteId: string, groupId: number }>) {
        const res = await this.logFetch(`UserGroup/${groupId.toString()}/Invitations`, {}, {
            siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        return GroupInvitations.decode(res).groupInvitations;
    }

    /**
     * Get all groups for a user
     * @param options
     */
    async getGroupsForUser(options: RemovePersonId<T, RemoveSiteId<T, { siteId: string; personId: string; }>>) {
        const query = new URLSearchParams();

        const queryPersonId = this.getPersonId(options);
        if (queryPersonId) {
            query.set('personId', queryPersonId)
        }

        const res = await this.logFetch(`UserGroup/User?${query.toString()}`, {}, {
            siteId: options.siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        return UserGroups.decode(res).userGroups;
    }

    /**
     * Check if the current user is a member of the given uac group
     * @param groupId
     * @param siteId
     * @param personId
     */
    async isUserInGroup({ groupId, siteId, personId }: RemoveSiteId<T, { groupId: number; siteId: string, personId: string }>) {
        const query = new URLSearchParams({ personId });

        const res = await this.logFetch(`UserGroup/${groupId.toString()}/InGroup?${query.toString()}`, {}, {
            siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        return {
            inGroup: InGroup.decode(res)?.inGroup ?? false
        };
    }

    /**
     * Get all sites where the current user is in the given uac group
     * @param options
     */
    async getMembershipSites(options: RemovePersonId<T, { groupId: number, personId: string }>) {
        const query = new URLSearchParams();

        const queryPersonId = this.getPersonId(options);
        if (queryPersonId) {
            query.set('personId', queryPersonId)
        }

        const res = await this.logFetch(`UserGroup/${options.groupId.toString()}/Sites?${query.toString()}`, {}, {
            withoutSiteId: true,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        return SiteInfos.decode(res).siteInfos;
    }

    /**
     * Search for members of all site groups
     * @param siteId
     * @param searchTerm
     * @param userGroupIds - optional list of usergroup ids to search in
     */
    async searchMembers({ siteId, searchTerm, userGroupIds }: RemoveSiteId<T, { siteId: string, searchTerm: string, userGroupIds?: number[] }>): Promise<TFixedGroupMember[]> {
        if(searchTerm.length < 3) {
            throw new Error("Parameter searchTerm must at least 3 characters");
        }

        const query = new URLSearchParams({ query: searchTerm });

        if(userGroupIds) {
            query.set('userGroupIds', userGroupIds.join(','));
        }

        const res = await this.logFetch(`UserGroup/Users/Search?${query.toString()}`, {}, {
            siteId,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        const { groupMembers } = GroupMembers.decode(res);
        return groupMembers.map((x) => ({
            ...x,
            creationTime: convertTimespanToISOString(x.creationTime),
        }));
    }

    /**
     * Get all groups where a user has a pending invite
     * @param siteId
     * @param personId
     */
    async getInvitedGroups({ siteId, personId }: RemoveSiteId<T, { siteId: string, personId: string }>) {
        const query = new URLSearchParams();

        const queryPersonId = personId || (this.getDefaultPersonId && this.getDefaultPersonId());
        if(queryPersonId) query.set('personId', queryPersonId)

        let mainSiteId = siteId;
        if(!mainSiteId && this.getDefaultSiteId) {
            mainSiteId = this.getDefaultSiteId();
        }
        const res = await this.logFetch(`Invitation/${mainSiteId}/Groups?${query.toString()}`, {}, {
            withoutSiteId: true,
            roles: [ApiRoles.ReadMembers, ApiRoles.ManageMembers],
        });

        return UserGroups.decode(res).userGroups;
    }

    /**
     * Create a new user group
     * @param siteId
     * @param showName
     * @param description
     * @param pageId
     * @param parentGroupId
     * @param users
     */
    async createUserGroup({
        siteId,
        showName,
        description,
        pageId,
        parentGroupId,
        users = [],
    }: RemoveSiteId<T, {
        siteId: string;
        showName: string;
        description?: string;
        pageId?: number;
        parentGroupId?: number;
        users?: string[];
    }>) {
        const userGroup = {
            showName,
            description,
            pageId,
            parentGroupId,
            createUserGroupRequest: {
                users,
            },
        };

        const message = UserGroup.create(userGroup);

        const buffer  = UserGroup.encode(message).finish();

        const res = await this.logFetch(`UserGroup`, {body: buffer, method: 'POST'}, {
            siteId,
            roles: [ApiRoles.Create, ApiRoles.Manage],
        });

        return UserGroup.decode(res);
    }

    /**
     * Copy a user group and its members
     * @param groupId
     * @param siteId
     */
    async copyUserGroup({ groupId, siteId }: RemoveSiteId<T, { groupId: number, siteId: string }>) {
        const res = await this.logFetch(`UserGroup/${groupId.toString()}/Copy`, {method: 'POST'}, {
            siteId,
            roles: [ApiRoles.Create, ApiRoles.Manage],
        });

        return UserGroup.decode(res);
    }

    /**
     * Add a user to a uac group
     * @param personId
     * @param groupId
     * @param siteId
     * @param expirationTime
     * @param force
     * @param ignoreConflict
     */
    async addUserToGroup({
        personId,
        groupId,
        siteId,
        expirationTime,
        force,
        ignoreConflict,
    }: RemoveSiteId<T, {
        personId: string;
        groupId: number;
        siteId: string;
        expirationTime: string;
        force: boolean;
        ignoreConflict: boolean;
    }>): Promise<{ success: boolean }> {
        const query = new URLSearchParams();

        if(force) query.set('force', String(force));

        const groupMember: { personId: string; expirationTime?: TTimeSpan } = {
            personId,
        };

        if(expirationTime) {
            groupMember.expirationTime = convertDateToProtoTimespan(expirationTime);
        }

        const message = GroupMember.create(groupMember);

        const buffer  = GroupMember.encode(message).finish();

        try {
            await this.logFetch(`UserGroup/${groupId.toString()}/Users?${query.toString()}`, {
                body: buffer,
                method: 'POST',
            }, {
                siteId,
                roles: [ApiRoles.AddMembers, ApiRoles.ManageMembers],
            });

            return {
                success: true
            };
        } catch(e) {
            if(!ignoreConflict) throw e;
            return {
                success: false
            };
        }
    }

    /**
     * Add multiple users to a uac group
     * @param groupId
     * @param siteId
     * @param members
     */
    async addUsersToGroup({ groupId, siteId, members }: RemoveSiteId<T, { groupId: number, siteId: string, members: GroupMember[] }>) {
        const message = GroupMembers.create({groupMembers: members});

        const buffer  = GroupMembers.encode(message).finish();

        const res = await this.logFetch(`UserGroup/${groupId.toString()}/Users/Bulk`, {
            body: buffer,
            method: 'POST',
        }, {
            siteId,
            roles: [ApiRoles.AddMembers, ApiRoles.ManageMembers],
        });

        return AddUserToGroupResponse.decode(res);
    }

    /**
     * Update a uac group
     * @param groupId
     * @param siteId
     * @param values
     */
    async updateUserGroup({
        groupId,
        siteId,
        values,
    }: RemoveSiteId<T, {
        groupId: number;
        siteId: string;
        values: {
            showName: string;
            description: string;
            pageId: number;
            parentGroupId: number;
            enableMembercard: boolean;
        };
    }>) {
        const message = UserGroupUpdateRequest.create(values);

        const buffer  = UserGroupUpdateRequest.encode(message).finish();

        const res = await this.logFetch(`UserGroup/${groupId.toString()}`, {body: buffer, method: 'PATCH'}, {
            siteId,
            roles: [ApiRoles.Edit, ApiRoles.Manage],
        });

        return UserGroup.decode(res);
    }

    /**
     * Update the expiration time of a membership
     * @param personId
     * @param groupId
     * @param siteId
     * @param expirationTime
     */
    async updateMembership({ personId, groupId, siteId, expirationTime }: RemoveSiteId<T, { personId: string; groupId: number; siteId: string; expirationTime: string; }>) {
        const message = UpdateUacMemberRequest.create({
            expirationTime: expirationTime ? convertDateToProtoTimespan(expirationTime) : null
        });

        const queryPersonId = personId || (this.getDefaultPersonId && this.getDefaultPersonId());

        const buffer  = UpdateUacMemberRequest.encode(message).finish();

        // function buf2hex(buffer2) { // buffer is an ArrayBuffer
        //     return [...new Uint8Array(buffer2)]
        //         .map(x => x.toString(16).padStart(2, '0'))
        //         .join('');
        // }
        // console.log("buf", buf2hex(buffer))
        const res = await this.logFetch(`UserGroup/${groupId.toString()}/Users/${queryPersonId || ""}`, {
            body: buffer,
            method: 'PATCH',
        }, {
            siteId,
            roles: [ApiRoles.ManageMembers],
        });

        const decoded = GroupMember.decode(res);
        return {
            ...decoded,
            creationTime: convertTimespanToISOString(decoded.creationTime),
            expirationTime: convertTimespanToISOString(decoded.expirationTime)
        };
    }

    /**
     * Delete a usergroup
     * @param groupId
     * @param siteId
     */
    async deleteUserGroup({ groupId, siteId }: RemoveSiteId<T, { groupId: number, siteId: string }>) {
        await this.logFetch(`UserGroup/${groupId.toString()}`, { method: 'DELETE' }, {
            siteId,
            roles: [ApiRoles.Manage],
        });

        return null;
    }

    /**
     * Remove a user from a uac group
     * @param personId
     * @param groupId
     * @param siteId
     * @param ignoreConflict
     */
    async removeUserFromGroup({
        personId,
        groupId,
        siteId,
        ignoreConflict,
    }: RemoveSiteId<T, {
        groupId: number;
        siteId: string;
        personId: string;
        ignoreConflict: boolean;
    }>): Promise<{ success: boolean, expirationTime: string | undefined }> { // TODO: why is here no exception?
        try {
            const queryPersonId = personId || (this.getDefaultPersonId && this.getDefaultPersonId());
            const response = await this.logFetch(`UserGroup/${groupId.toString()}/Users/${queryPersonId}`, {
                method: 'DELETE'
            }, {
                siteId,
                roles: [ApiRoles.ManageMembers],
            });
            const decoded = RemoveUserResponse.decode(response);

            return {
                success: true,
                expirationTime: convertTimespanToISOString(decoded.expirationTime)
            };
        } catch(e) {
            if(!ignoreConflict) throw e;
            return {
                success: false,
                expirationTime: undefined
            }
        }
    }

    /**
     * Gets the personId either from the provided options or from the client-settings
     * @param options
     * @private
     */
    private getPersonId(options: { personId: string } | Omit<{ personId: string }, 'personId'>): string {
        if ('personId' in options && options.personId) {
            return options.personId;
        }

        if (this.getDefaultPersonId && this.getDefaultPersonId()) {
            return this.getDefaultPersonId();
        }

        return ''; // TODO: maybe throw an exception
    }
}

export { UacServiceClient };
//
// const client = new UacServiceClient({
//     // eslint-disable-next-line @typescript-eslint/require-await
//     getApiToken: async () => '',
//     // getDefaultSiteId: () => '',
//     // getDefaultPersonId: () => '',
// });
//
// void client.getGroupsForUser({
//
// });
