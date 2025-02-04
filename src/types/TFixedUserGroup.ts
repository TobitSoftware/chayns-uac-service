import type { UserGroup } from '../proto-build/compiled';

export type TFixedUserGroup = Omit<UserGroup, 'userGroupMeta'> & {
    admissionFee: number;
    subscriptionPrice: number;
    membercardCancellationDescription: string;
    subscriptionInterval?: number;
    memberLimit?: number;
    customMetadata?: { key: string; value: string }[];
};
