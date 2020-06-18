const isZero = (value: number) => value === 0;
const lengthIsZero = (value: Array<any>) => value.length === 0;
const lengthIsOne = (value: Array<any>) => value.length === 1;
const notZero = (value: number) => value !== 0;
const notZeroAndUndefined = (value: number) =>
  value !== undefined && value !== 0;

export { isZero, notZero, lengthIsZero, lengthIsOne, notZeroAndUndefined };
