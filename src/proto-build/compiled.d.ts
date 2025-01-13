import * as $protobuf from "protobufjs";
import Long = require("long");
/** Properties of an AddUserToGroupResponse. */
export interface IAddUserToGroupResponse {

    /** AddUserToGroupResponse isPending */
    isPending?: (boolean|null);
}

/** Represents an AddUserToGroupResponse. */
export class AddUserToGroupResponse implements IAddUserToGroupResponse {

    /**
     * Constructs a new AddUserToGroupResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IAddUserToGroupResponse);

    /** AddUserToGroupResponse isPending. */
    public isPending: boolean;

    /**
     * Creates a new AddUserToGroupResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AddUserToGroupResponse instance
     */
    public static create(properties?: IAddUserToGroupResponse): AddUserToGroupResponse;

    /**
     * Encodes the specified AddUserToGroupResponse message. Does not implicitly {@link AddUserToGroupResponse.verify|verify} messages.
     * @param m AddUserToGroupResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IAddUserToGroupResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AddUserToGroupResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns AddUserToGroupResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): AddUserToGroupResponse;

    /**
     * Gets the default type url for AddUserToGroupResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a Decimal. */
export interface IDecimal {

    /** Decimal lo */
    lo?: (number|Long|null);

    /** Decimal hi */
    hi?: (number|null);

    /** Decimal signScale */
    signScale?: (number|null);
}

/** Represents a Decimal. */
export class Decimal implements IDecimal {

    /**
     * Constructs a new Decimal.
     * @param [p] Properties to set
     */
    constructor(p?: IDecimal);

    /** Decimal lo. */
    public lo: (number|Long);

    /** Decimal hi. */
    public hi: number;

    /** Decimal signScale. */
    public signScale: number;

    /**
     * Creates a new Decimal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Decimal instance
     */
    public static create(properties?: IDecimal): Decimal;

    /**
     * Encodes the specified Decimal message. Does not implicitly {@link Decimal.verify|verify} messages.
     * @param m Decimal message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IDecimal, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Decimal message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Decimal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Decimal;

    /**
     * Gets the default type url for Decimal
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GroupInvitation. */
export interface IGroupInvitation {

    /** GroupInvitation id */
    id?: (number|null);

    /** GroupInvitation userGroupId */
    userGroupId?: (number|null);

    /** GroupInvitation siteId */
    siteId?: (string|null);

    /** GroupInvitation personId */
    personId?: (string|null);

    /** GroupInvitation status */
    status?: (InvitationStatus|null);

    /** GroupInvitation groupName */
    groupName?: (string|null);

    /** GroupInvitation admissionFee */
    admissionFee?: (IDecimal|null);

    /** GroupInvitation subscriptionPrice */
    subscriptionPrice?: (IDecimal|null);

    /** GroupInvitation subscriptionInterval */
    subscriptionInterval?: (SubscriptionIntervalType|null);

    /** GroupInvitation createdBy */
    createdBy?: (string|null);

    /** GroupInvitation firstname */
    firstname?: (string|null);

    /** GroupInvitation lastname */
    lastname?: (string|null);

    /** GroupInvitation type */
    type?: (number|null);
}

/** Represents a GroupInvitation. */
export class GroupInvitation implements IGroupInvitation {

    /**
     * Constructs a new GroupInvitation.
     * @param [p] Properties to set
     */
    constructor(p?: IGroupInvitation);

    /** GroupInvitation id. */
    public id: number;

    /** GroupInvitation userGroupId. */
    public userGroupId: number;

    /** GroupInvitation siteId. */
    public siteId: string;

    /** GroupInvitation personId. */
    public personId: string;

    /** GroupInvitation status. */
    public status: InvitationStatus;

    /** GroupInvitation groupName. */
    public groupName: string;

    /** GroupInvitation admissionFee. */
    public admissionFee?: (IDecimal|null);

    /** GroupInvitation subscriptionPrice. */
    public subscriptionPrice?: (IDecimal|null);

    /** GroupInvitation subscriptionInterval. */
    public subscriptionInterval: SubscriptionIntervalType;

    /** GroupInvitation createdBy. */
    public createdBy: string;

    /** GroupInvitation firstname. */
    public firstname: string;

    /** GroupInvitation lastname. */
    public lastname: string;

    /** GroupInvitation type. */
    public type: number;

    /**
     * Creates a new GroupInvitation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupInvitation instance
     */
    public static create(properties?: IGroupInvitation): GroupInvitation;

    /**
     * Encodes the specified GroupInvitation message. Does not implicitly {@link GroupInvitation.verify|verify} messages.
     * @param m GroupInvitation message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGroupInvitation, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupInvitation message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GroupInvitation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GroupInvitation;

    /**
     * Gets the default type url for GroupInvitation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a GroupInvitations. */
export interface IGroupInvitations {

    /** GroupInvitations groupInvitations */
    groupInvitations?: (IGroupInvitation[]|null);
}

/** Represents a GroupInvitations. */
export class GroupInvitations implements IGroupInvitations {

    /**
     * Constructs a new GroupInvitations.
     * @param [p] Properties to set
     */
    constructor(p?: IGroupInvitations);

    /** GroupInvitations groupInvitations. */
    public groupInvitations: IGroupInvitation[];

    /**
     * Creates a new GroupInvitations instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupInvitations instance
     */
    public static create(properties?: IGroupInvitations): GroupInvitations;

    /**
     * Encodes the specified GroupInvitations message. Does not implicitly {@link GroupInvitations.verify|verify} messages.
     * @param m GroupInvitations message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGroupInvitations, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupInvitations message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GroupInvitations
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GroupInvitations;

    /**
     * Gets the default type url for GroupInvitations
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** InvitationStatus enum. */
export enum InvitationStatus {
    Pending = 0,
    Accepted = 1,
    Declined = 2,
    Revoked = 3
}

/** SubscriptionIntervalType enum. */
export enum SubscriptionIntervalType {
    ZERO = 0,
    Daily = 1,
    Weekly = 7,
    Monthly = 30,
    Yearly = 365
}

/** Represents a GroupMember. */
export class GroupMember implements IGroupMember {

    /**
     * Constructs a new GroupMember.
     * @param [p] Properties to set
     */
    constructor(p?: IGroupMember);

    /** GroupMember personId. */
    public personId: string;

    /** GroupMember creationTime. */
    public creationTime?: (ITimestamp|null);

    /** GroupMember expirationTime. */
    public expirationTime?: (ITimestamp|null);

    /** GroupMember firstname. */
    public firstname: string;

    /** GroupMember lastname. */
    public lastname: string;

    /** GroupMember userGroupId. */
    public userGroupId: number;

    /** GroupMember creationUser. */
    public creationUser?: (IPerson|null);

    /** GroupMember siteId. */
    public siteId: string;

    /** GroupMember subscriptionId. */
    public subscriptionId: (number|Long);

    /** GroupMember membercardUid. */
    public membercardUid: string;

    /**
     * Creates a new GroupMember instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupMember instance
     */
    public static create(properties?: IGroupMember): GroupMember;

    /**
     * Encodes the specified GroupMember message. Does not implicitly {@link GroupMember.verify|verify} messages.
     * @param m GroupMember message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGroupMember, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupMember message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GroupMember
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GroupMember;

    /**
     * Gets the default type url for GroupMember
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a GroupMembers. */
export class GroupMembers implements IGroupMembers {

    /**
     * Constructs a new GroupMembers.
     * @param [p] Properties to set
     */
    constructor(p?: IGroupMembers);

    /** GroupMembers groupMembers. */
    public groupMembers: IGroupMember[];

    /**
     * Creates a new GroupMembers instance using the specified properties.
     * @param [properties] Properties to set
     * @returns GroupMembers instance
     */
    public static create(properties?: IGroupMembers): GroupMembers;

    /**
     * Encodes the specified GroupMembers message. Does not implicitly {@link GroupMembers.verify|verify} messages.
     * @param m GroupMembers message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IGroupMembers, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a GroupMembers message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns GroupMembers
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): GroupMembers;

    /**
     * Gets the default type url for GroupMembers
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Timestamp. */
export class Timestamp implements ITimestamp {

    /**
     * Constructs a new Timestamp.
     * @param [p] Properties to set
     */
    constructor(p?: ITimestamp);

    /** Timestamp value. */
    public value: (number|Long);

    /** Timestamp scale. */
    public scale: number;

    /**
     * Creates a new Timestamp instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Timestamp instance
     */
    public static create(properties?: ITimestamp): Timestamp;

    /**
     * Encodes the specified Timestamp message. Does not implicitly {@link Timestamp.verify|verify} messages.
     * @param m Timestamp message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ITimestamp, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Timestamp message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Timestamp
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Timestamp;

    /**
     * Gets the default type url for Timestamp
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an InGroup. */
export class InGroup implements IInGroup {

    /**
     * Constructs a new InGroup.
     * @param [p] Properties to set
     */
    constructor(p?: IInGroup);

    /** InGroup inGroup. */
    public inGroup: boolean;

    /**
     * Creates a new InGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns InGroup instance
     */
    public static create(properties?: IInGroup): InGroup;

    /**
     * Encodes the specified InGroup message. Does not implicitly {@link InGroup.verify|verify} messages.
     * @param m InGroup message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IInGroup, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an InGroup message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns InGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): InGroup;

    /**
     * Gets the default type url for InGroup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Person. */
export class Person implements IPerson {

    /**
     * Constructs a new Person.
     * @param [p] Properties to set
     */
    constructor(p?: IPerson);

    /** Person personId. */
    public personId: string;

    /** Person firstname. */
    public firstname: string;

    /** Person lastname. */
    public lastname: string;

    /**
     * Creates a new Person instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Person instance
     */
    public static create(properties?: IPerson): Person;

    /**
     * Encodes the specified Person message. Does not implicitly {@link Person.verify|verify} messages.
     * @param m Person message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IPerson, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Person message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns Person
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): Person;

    /**
     * Gets the default type url for Person
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a RemoveUserResponse. */
export class RemoveUserResponse implements IRemoveUserResponse {

    /**
     * Constructs a new RemoveUserResponse.
     * @param [p] Properties to set
     */
    constructor(p?: IRemoveUserResponse);

    /** RemoveUserResponse expirationTime. */
    public expirationTime?: (ITimestamp|null);

    /**
     * Creates a new RemoveUserResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RemoveUserResponse instance
     */
    public static create(properties?: IRemoveUserResponse): RemoveUserResponse;

    /**
     * Encodes the specified RemoveUserResponse message. Does not implicitly {@link RemoveUserResponse.verify|verify} messages.
     * @param m RemoveUserResponse message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IRemoveUserResponse, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RemoveUserResponse message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns RemoveUserResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): RemoveUserResponse;

    /**
     * Gets the default type url for RemoveUserResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SiteInfo. */
export class SiteInfo implements ISiteInfo {

    /**
     * Constructs a new SiteInfo.
     * @param [p] Properties to set
     */
    constructor(p?: ISiteInfo);

    /** SiteInfo siteId. */
    public siteId: string;

    /** SiteInfo locationId. */
    public locationId: number;

    /** SiteInfo siteName. */
    public siteName: string;

    /**
     * Creates a new SiteInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SiteInfo instance
     */
    public static create(properties?: ISiteInfo): SiteInfo;

    /**
     * Encodes the specified SiteInfo message. Does not implicitly {@link SiteInfo.verify|verify} messages.
     * @param m SiteInfo message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISiteInfo, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SiteInfo message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SiteInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SiteInfo;

    /**
     * Gets the default type url for SiteInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a SiteInfos. */
export class SiteInfos implements ISiteInfos {

    /**
     * Constructs a new SiteInfos.
     * @param [p] Properties to set
     */
    constructor(p?: ISiteInfos);

    /** SiteInfos siteInfos. */
    public siteInfos: ISiteInfo[];

    /**
     * Creates a new SiteInfos instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SiteInfos instance
     */
    public static create(properties?: ISiteInfos): SiteInfos;

    /**
     * Encodes the specified SiteInfos message. Does not implicitly {@link SiteInfos.verify|verify} messages.
     * @param m SiteInfos message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ISiteInfos, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SiteInfos message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns SiteInfos
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): SiteInfos;

    /**
     * Gets the default type url for SiteInfos
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an UpdateUacMemberRequest. */
export class UpdateUacMemberRequest implements IUpdateUacMemberRequest {

    /**
     * Constructs a new UpdateUacMemberRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IUpdateUacMemberRequest);

    /** UpdateUacMemberRequest expirationTime. */
    public expirationTime?: (ITimestamp|null);

    /**
     * Creates a new UpdateUacMemberRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UpdateUacMemberRequest instance
     */
    public static create(properties?: IUpdateUacMemberRequest): UpdateUacMemberRequest;

    /**
     * Encodes the specified UpdateUacMemberRequest message. Does not implicitly {@link UpdateUacMemberRequest.verify|verify} messages.
     * @param m UpdateUacMemberRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUpdateUacMemberRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an UpdateUacMemberRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UpdateUacMemberRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UpdateUacMemberRequest;

    /**
     * Gets the default type url for UpdateUacMemberRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CreateUserGroupRequest. */
export class CreateUserGroupRequest implements ICreateUserGroupRequest {

    /**
     * Constructs a new CreateUserGroupRequest.
     * @param [p] Properties to set
     */
    constructor(p?: ICreateUserGroupRequest);

    /** CreateUserGroupRequest users. */
    public users: string[];

    /**
     * Creates a new CreateUserGroupRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CreateUserGroupRequest instance
     */
    public static create(properties?: ICreateUserGroupRequest): CreateUserGroupRequest;

    /**
     * Encodes the specified CreateUserGroupRequest message. Does not implicitly {@link CreateUserGroupRequest.verify|verify} messages.
     * @param m CreateUserGroupRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: ICreateUserGroupRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CreateUserGroupRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns CreateUserGroupRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): CreateUserGroupRequest;

    /**
     * Gets the default type url for CreateUserGroupRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserGroup. */
export class UserGroup implements IUserGroup {

    /**
     * Constructs a new UserGroup.
     * @param [p] Properties to set
     */
    constructor(p?: IUserGroup);

    /** UserGroup id. */
    public id: number;

    /** UserGroup showName. */
    public showName: string;

    /** UserGroup description. */
    public description: string;

    /** UserGroup siteId. */
    public siteId: string;

    /** UserGroup pageId. */
    public pageId: number;

    /** UserGroup parentGroupId. */
    public parentGroupId: number;

    /** UserGroup userCount. */
    public userCount: number;

    /** UserGroup invitationCount. */
    public invitationCount: number;

    /** UserGroup isSystemGroup. */
    public isSystemGroup: boolean;

    /** UserGroup enableMembercard. */
    public enableMembercard: boolean;

    /** UserGroup isInternal. */
    public isInternal?: (boolean|null);

    /** UserGroup enforceTwoFactorAuth. */
    public enforceTwoFactorAuth?: (boolean|null);

    /** UserGroup isWorkspace. */
    public isWorkspace: boolean;

    /** UserGroup workspaceManagerGroupId. */
    public workspaceManagerGroupId?: (number|null);

    /** UserGroup workspaceAgentGroupId. */
    public workspaceAgentGroupId?: (number|null);

    /** UserGroup isWorkspaceChild. */
    public isWorkspaceChild: boolean;

    /** UserGroup walletReservationGroupId. */
    public walletReservationGroupId: number;

    /** UserGroup createUserGroupRequest. */
    public createUserGroupRequest?: (ICreateUserGroupRequest|null);

    /** UserGroup userGroupMeta. */
    public userGroupMeta?: (IUserGroupMeta|null);

    /** UserGroup _isInternal. */
    public _isInternal?: "isInternal";

    /** UserGroup _enforceTwoFactorAuth. */
    public _enforceTwoFactorAuth?: "enforceTwoFactorAuth";

    /** UserGroup _workspaceManagerGroupId. */
    public _workspaceManagerGroupId?: "workspaceManagerGroupId";

    /** UserGroup _workspaceAgentGroupId. */
    public _workspaceAgentGroupId?: "workspaceAgentGroupId";

    /** UserGroup _createUserGroupRequest. */
    public _createUserGroupRequest?: "createUserGroupRequest";

    /** UserGroup _userGroupMeta. */
    public _userGroupMeta?: "userGroupMeta";

    /**
     * Creates a new UserGroup instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGroup instance
     */
    public static create(properties?: IUserGroup): UserGroup;

    /**
     * Encodes the specified UserGroup message. Does not implicitly {@link UserGroup.verify|verify} messages.
     * @param m UserGroup message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserGroup, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGroup message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserGroup
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserGroup;

    /**
     * Gets the default type url for UserGroup
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserGroupMeta. */
export class UserGroupMeta implements IUserGroupMeta {

    /**
     * Constructs a new UserGroupMeta.
     * @param [p] Properties to set
     */
    constructor(p?: IUserGroupMeta);

    /** UserGroupMeta admissionFee. */
    public admissionFee?: (IDecimal|null);

    /** UserGroupMeta admissionFeeArticleId. */
    public admissionFeeArticleId: (number|Long);

    /** UserGroupMeta subscriptionPrice. */
    public subscriptionPrice?: (IDecimal|null);

    /** UserGroupMeta subscriptionArticleId. */
    public subscriptionArticleId: (number|Long);

    /** UserGroupMeta membercardCancellationDescription. */
    public membercardCancellationDescription: string;

    /** UserGroupMeta subscriptionInterval. */
    public subscriptionInterval: number;

    /** UserGroupMeta memberLimit. */
    public memberLimit?: (number|null);

    /** UserGroupMeta walletReservationGroupId. */
    public walletReservationGroupId: number;

    /** UserGroupMeta _memberLimit. */
    public _memberLimit?: "memberLimit";

    /**
     * Creates a new UserGroupMeta instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGroupMeta instance
     */
    public static create(properties?: IUserGroupMeta): UserGroupMeta;

    /**
     * Encodes the specified UserGroupMeta message. Does not implicitly {@link UserGroupMeta.verify|verify} messages.
     * @param m UserGroupMeta message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserGroupMeta, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGroupMeta message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserGroupMeta
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserGroupMeta;

    /**
     * Gets the default type url for UserGroupMeta
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserGroups. */
export class UserGroups implements IUserGroups {

    /**
     * Constructs a new UserGroups.
     * @param [p] Properties to set
     */
    constructor(p?: IUserGroups);

    /** UserGroups userGroups. */
    public userGroups: IUserGroup[];

    /**
     * Creates a new UserGroups instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGroups instance
     */
    public static create(properties?: IUserGroups): UserGroups;

    /**
     * Encodes the specified UserGroups message. Does not implicitly {@link UserGroups.verify|verify} messages.
     * @param m UserGroups message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserGroups, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGroups message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserGroups
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserGroups;

    /**
     * Gets the default type url for UserGroups
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserGroupUpdateRequest. */
export class UserGroupUpdateRequest implements IUserGroupUpdateRequest {

    /**
     * Constructs a new UserGroupUpdateRequest.
     * @param [p] Properties to set
     */
    constructor(p?: IUserGroupUpdateRequest);

    /** UserGroupUpdateRequest showName. */
    public showName: string;

    /** UserGroupUpdateRequest description. */
    public description: string;

    /** UserGroupUpdateRequest pageId. */
    public pageId: number;

    /** UserGroupUpdateRequest parentGroupId. */
    public parentGroupId: number;

    /** UserGroupUpdateRequest enableMembercard. */
    public enableMembercard: boolean;

    /** UserGroupUpdateRequest membercardCancellationDescription. */
    public membercardCancellationDescription: string;

    /** UserGroupUpdateRequest enforceTwoFactorAuth. */
    public enforceTwoFactorAuth?: (boolean|null);

    /** UserGroupUpdateRequest memberLimit. */
    public memberLimit?: (number|null);

    /** UserGroupUpdateRequest isWorkspace. */
    public isWorkspace?: (boolean|null);

    /** UserGroupUpdateRequest _enforceTwoFactorAuth. */
    public _enforceTwoFactorAuth?: "enforceTwoFactorAuth";

    /** UserGroupUpdateRequest _memberLimit. */
    public _memberLimit?: "memberLimit";

    /** UserGroupUpdateRequest _isWorkspace. */
    public _isWorkspace?: "isWorkspace";

    /**
     * Creates a new UserGroupUpdateRequest instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserGroupUpdateRequest instance
     */
    public static create(properties?: IUserGroupUpdateRequest): UserGroupUpdateRequest;

    /**
     * Encodes the specified UserGroupUpdateRequest message. Does not implicitly {@link UserGroupUpdateRequest.verify|verify} messages.
     * @param m UserGroupUpdateRequest message or plain object to encode
     * @param [w] Writer to encode to
     * @returns Writer
     */
    public static encode(m: IUserGroupUpdateRequest, w?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserGroupUpdateRequest message from the specified reader or buffer.
     * @param r Reader or buffer to decode from
     * @param [l] Message length if known beforehand
     * @returns UserGroupUpdateRequest
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): UserGroupUpdateRequest;

    /**
     * Gets the default type url for UserGroupUpdateRequest
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
