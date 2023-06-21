import type { LogObject } from './LogObject';

export type LogErrorObject = LogObject & {
    ex?: {
        message: string;
        stackTrace?: string;
        errorCode?: number;
    };
    alertThreshold?: number;
};
