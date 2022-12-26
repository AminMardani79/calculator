import { operations } from "../data/data";

export const isReapetedOps = (value, calc) =>
  (operations.includes(value) && calc === "") ||
  (operations.includes(value) && operations.includes(calc.slice(-1)));
export const checkNumberLength = (number) => {
  return number.length < 5 ? false : true;
};
