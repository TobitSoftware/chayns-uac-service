import type LogLevel from "./LogLevels";

export type LogObject = {
    message: string;
    type?: number;
    section?: string;
    customNumber?: number;
    customText?: string;
    personId?: string;
    locationId?: number;
    siteId?: string;
    fileName?: string;
    lineNumber?: number;
    identifier?: string;
    team?: string;
    level?: LogLevel;
    data?: {
        [key: string]: any
    },
};

