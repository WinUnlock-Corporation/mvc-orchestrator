
/**
 * This method is used to get class methods
 * @param proto 
 * @returns 
 */
export function getPrototypeMethods(proto : any){
    return Object.getOwnPropertyNames(proto).filter(m => m !== "constructor");
}

/**
 * Checks if a string is null, undefined, or only whitespace
 * @param value
 * @returns
 */
export function isNullOrWhitespace(value: string | null | undefined): boolean {
    return value == undefined || 
           value.trim().length === 0;
}
