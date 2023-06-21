import { TChaynsErrorResponse } from './TChaynsErrorResponse';

export default class ChaynsError extends Error {
    public static Parse(response: TChaynsErrorResponse): ChaynsError {
        if (!response.errorCode) {
            throw new Error('response does not contain a chayns-exception');
        }

        const error = new ChaynsError(response.errorCode, response.innerException);
        if (response.parameters) {
            Object.entries(response.parameters).forEach(([key, value]) => {
                error.addParameter(key, value);
            });
        }

        if (response.displayMessage) {
            // eslint-disable-next-line no-underscore-dangle
            error._displayMessage = response.displayMessage;
        }

        return error;
    }

    private readonly errorCode: string;

    private readonly innerError: Error | undefined;

    public readonly statusCode: number | undefined;

    private readonly parameters = new Map<string, any>();

    private _displayMessage: string | undefined;

    constructor(errorCode: string, inner?: Error, statusCode?: number) {
        super(errorCode);

        this.innerError = inner;
        this.errorCode = errorCode;
        this.statusCode = statusCode;
    }

    /**
     * @internal
     */
    getErrorCode(): string {
        return this.errorCode;
    }

    /**
     * @internal
     */
    getInnerError(): Error | undefined {
        return this.innerError;
    }

    getParameters(): Record<string, any> | null {
        if (!this.parameters.size) {
            return null;
        }

        const parameters: Record<string, any> = {};

        this.parameters.forEach((value, key) => {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            parameters[key] = value;
        });

        return parameters;
    }

    get innerException(): Error | undefined {
        return this.innerError;
    }

    get displayMessage(): string | undefined {
        // eslint-disable-next-line no-underscore-dangle
        return this._displayMessage;
    }

    addParameter(key: string, value: any, updateIfExists = false): ChaynsError {
        if (!updateIfExists && this.parameters.has(key)) {
            return this;
        }

        this.parameters.set(key, value);

        return this;
    }

    toJSON() {
        const retVal: TChaynsErrorResponse = {
            errorCode: this.errorCode,
        };

        if (this.parameters.size) {
            const parameters: Record<string, any> = {};

            this.parameters.forEach((value, key) => {
                // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                parameters[key] = value;
            });

            retVal.parameters = parameters;
        }

        if (this.displayMessage) {
            retVal.displayMessage = this.displayMessage;
        }

        if (process.env.NODE_ENV === 'development') {
            retVal.innerException = this.innerError;
        }

        return retVal;
    }
}
