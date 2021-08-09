export const isValueInvalid = (value) => isValueZero(value) || isValueNegative(value);
export const isValueZero = (value) => value !== "" && Number(value) === 0;
export const isValueNegative = (value) => value !== "" && Number(value) < 0;