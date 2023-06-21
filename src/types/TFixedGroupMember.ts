import type { GroupMember } from '../proto-build/compiled';

export type TFixedGroupMember = Omit<GroupMember, 'creationTime'> & { creationTime: string; };
