import complement from 'ramda/src/complement';

export const isArray = (possibleArray: any) => possibleArray instanceof Array ? true : false;
export const isArrayEmpty = (array: any[]) => array.length === 0;
export const isArrayNotEmpty = complement(isArrayEmpty);