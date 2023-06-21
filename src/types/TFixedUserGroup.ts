import type { UserGroup } from '../proto-build/compiled';

export type TFixedUserGroup = Omit<UserGroup, 'userGroupMeta'> & { admissionFee: number; subscriptionPrice: number; };
