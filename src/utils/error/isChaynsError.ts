import ChaynsError from './ChaynsError';

export default function isChaynsError(value: any): value is ChaynsError {
    return !!value && value instanceof ChaynsError;
}

