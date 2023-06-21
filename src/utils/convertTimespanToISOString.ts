const Long = require('long');
import { TimeSpanScale } from '../constants/enums/TimeSpanScale';
import { TTimeSpan } from '../types/TTimeSpan';

export default function convertTimespanToISOString(input: TTimeSpan): string | undefined {
    if(!input) return undefined;
    let { value, scale } = input;
    if(Long.isLong(value)) {
        // eslint-disable-next-line no-param-reassign
        value = value.toNumber();
    }

    let ms = value;
    if(scale === TimeSpanScale.TICKS) {
        ms = Math.floor(value / 10000);
    } else if(scale === TimeSpanScale.MILLISECONDS) {
        ms = value;
    } else if(scale === TimeSpanScale.SECONDS) {
        ms = value * 1000;
    } else if(scale === TimeSpanScale.MINUTES) {
        ms = Math.floor(value * 60 * 1000);
    } else if(scale === TimeSpanScale.HOURS) {
        ms = Math.floor(value * 60 * 60 * 1000);
    } else if(scale === TimeSpanScale.DAYS) {
        ms = Math.floor(value * 24 * 60 * 60 * 1000);
    }

    return new Date(ms).toISOString();
}
