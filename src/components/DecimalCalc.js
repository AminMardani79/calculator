import React, { useContext } from "react";
// components
import {
  DecimalItem,
  DecimalLayout,
  DecimalInputItem,
  Small,
} from "./styled-components";
// context
import { CartContext } from "../context/CalculatorContextProvider";
// validation
import { isReapetedOps } from "../helpers/validate";
// data
import { operations } from "../data/data";

function DecimalCalc() {
  const { calc, setCalc, result, setResult } = useContext(CartContext);

  const updateCalc = (value) => {
    if (isReapetedOps(value, calc)) {
      return;
    }
    setCalc(calc + value);
    if (!operations.includes(value)) {
      // eslint-disable-next-line no-eval
      setResult(eval(calc + value).toString());
    }
  };
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setCalc(eval(calc).toString());
  };
  const deleteHandler = () => {
    if (calc === "") {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const cleareHandler = () => {
    setCalc("");
    setResult(0);
  };
  const rootHandler = () => {
    // eslint-disable-next-line no-eval
    setCalc(Math.sqrt(eval(calc)).toString());
    setResult(Math.sqrt(result).toString());
  };
  const powHandler = () => {
    // eslint-disable-next-line no-eval
    setCalc(Math.pow(eval(calc), 2).toString());
    setResult(Math.pow(result, 2).toString());
  };
  const createDigits = () => {
    const digits = [];
    for (let i = 0; i < 10; i++) {
      digits.push(
        <DecimalItem onClick={() => updateCalc(i)} key={i}>
          {i}
        </DecimalItem>
      );
    }
    return digits;
  };
  return (
    <DecimalLayout>
      <DecimalInputItem>
        <Small>({result ? result : 0})</Small>
        {calc}
      </DecimalInputItem>
      {createDigits()}
      {operations.map((item) => (
        <DecimalItem key={item} onClick={() => updateCalc(item)}>
          {item}
        </DecimalItem>
      ))}
      <DecimalItem onClick={calculate}>=</DecimalItem>
      <DecimalItem onClick={rootHandler}>√</DecimalItem>
      <DecimalItem onClick={powHandler}>^</DecimalItem>
      <DecimalItem onClick={cleareHandler}>CLear</DecimalItem>
      <DecimalItem onClick={deleteHandler}>Delete</DecimalItem>
    </DecimalLayout>
  );
}

export default DecimalCalc;
