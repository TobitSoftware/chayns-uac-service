const Long = require('long');

export type TTimeSpan = {
    value: number | typeof Long;
    scale: number;
};
