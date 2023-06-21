import type { LogObject } from './LogObject';
import type { LogErrorObject } from './LogErrorObject';

export default interface IChaynsLogger {
    debug(logObject: LogObject): void;
    info(logObject: LogObject): void;

    warning(logObject: LogErrorObject, exception?: Error): void;
    error(logObject: LogErrorObject, exception?: Error): void;
    critical(logObject: LogErrorObject, exception?: Error): void;
}
