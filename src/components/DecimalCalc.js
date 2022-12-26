import React, { useContext } from "react";
// components
import { Item, DecimalLayout, InputItem, Small } from "./styled-components";
// context
import { CalculateContext } from "../context/CalculatorContextProvider";
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
  const { calc, setCalc, result, setResult } = useContext(CalculateContext);
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
        <Item onClick={() => updateCalc(i)} key={i}>
          {i}
        </Item>
      );
    }
    return digits;
  };
  return (
    <DecimalLayout>
      <InputItem>
        <Small>({result ? result : 0})</Small>
        {calc}
      </InputItem>
      {createDigits()}
      {operations.map((item) => (
        <Item key={item} onClick={() => updateCalc(item)}>
          {item}
        </Item>
      ))}
      <Item onClick={calculate}>=</Item>
      <Item onClick={rootHandler}>√</Item>
      <Item onClick={powHandler}>^</Item>
      <Item onClick={cleareHandler}>CLear</Item>
      <Item onClick={deleteHandler}>Delete</Item>
    </DecimalLayout>
  );
}

export default DecimalCalc;
