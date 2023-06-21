export const convertDecimalToNumber = (decimal? : {lo: number, hi: number, signScale: number}): number | undefined => {
    if(!decimal) return undefined;
    const { lo, hi, signScale} = decimal;
    if(hi !== 0) {
        throw new Error("Number too big");
    }
    const sign = signScale < 0 ? -1 : 1;
    const decimals = signScale < 0 ? ~signScale : signScale;
    return lo / (10 ** decimals) * sign;
}


