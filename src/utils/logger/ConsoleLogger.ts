import IChaynsLogger from './IChaynsLogger';
import { LogErrorObject } from './LogErrorObject';
import { LogObject } from './LogObject';

export default class ConsoleLogger implements IChaynsLogger {
    critical(logObject: LogErrorObject, exception?: Error): void {
        console.error(logObject, exception);
    }

    debug(logObject: LogObject): void {
        console.debug(logObject)
    }

    error(logObject: LogErrorObject, exception?: Error): void {
        console.error(logObject, exception)
    }

    info(logObject: LogObject): void {
        console.info(logObject)
    }

    warning(logObject: LogErrorObject, exception?: Error): void {
        console.warn(logObject, exception)
    }

}
