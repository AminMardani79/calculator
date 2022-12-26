import { operations } from "../data/data";

export const isReapetedOps = (value, calc) => {
  return (
    (operations.includes(value) && calc === "") ||
    (operations.includes(value) && operations.includes(calc.slice(-1)))
  );
};
