export type TChaynsErrorResponse = {
    errorCode: string;

    parameters?: Record<string, any>;

    innerException?: Error;

    displayMessage?: string;
};
