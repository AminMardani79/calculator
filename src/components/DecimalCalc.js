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
// operations
import {
  backSpace,
  evalValue,
  powNumber,
  sqrtNumber,
} from "../helpers/operation";

function DecimalCalc() {
  const { calc, setCalc, result, setResult } = useContext(CartContext);
  const updateCalc = (value) => {
    if (isReapetedOps(value, calc)) {
      return;
    }
    setCalc(calc + value);
    if (!operations.includes(value)) {
      setResult(evalValue(calc + value).toString());
    }
  };
  const calculate = () => {
    setCalc(evalValue(calc).toString());
  };
  const deleteHandler = () => {
    const value = backSpace(calc);
    setCalc(value);
  };
  const cleareHandler = () => {
    setCalc("");
    setResult(0);
  };
  const rootHandler = () => {
    setCalc(sqrtNumber(evalValue(calc)));
    setResult(sqrtNumber(result));
  };
  const powHandler = () => {
    setCalc(powNumber(evalValue(calc)));
    setResult(powNumber(result));
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
