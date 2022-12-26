import { operations, calcKeys } from "../data/data";

export const isReapetedOps = (value, calc) =>
  (operations.includes(value) && calc === "") ||
  (operations.includes(value) && operations.includes(calc.slice(-1)));
/* export const isValidKey = (value) =>
  calcKeys.includes(value.toUpperCase()) &&
  operations.includes(value) &&
  !isNaN(+value); */
