export const powNumber = (value) => Math.pow(value, 2).toString();
export const sqrtNumber = (value) => Math.sqrt(value).toString();
// eslint-disable-next-line no-eval
export const evalValue = (value) => eval(value);
export const backSpace = (calc) => {
  if (calc === "") {
    return;
  }
  const value = calc.slice(0, -1);
  return value;
};
