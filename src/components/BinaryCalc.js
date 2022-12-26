import React, { useContext, useState } from "react";
// context
import { CalculateContext } from "../context/CalculatorContextProvider";
// components
import { BinaryLayout, InputItem, Small, Item } from "./styled-components";
// data
import {
  actionTypes,
  binaryButtons,
  binaryNumbers,
  operations,
} from "../data/data";
import { checkNumberLength } from "../helpers/validate";
function BinaryCalc({ type }) {
  const { state, dispatch } = useContext(CalculateContext);
  const [number, setNumber] = useState("");
  const clickHandler = (event) => {
    if (binaryNumbers.includes(+event.target.innerHTML)) {
      console.log(checkNumberLength(number));
      if (checkNumberLength(number)) {
        alert("number length is invalid. It should be less than 32 character");
        return;
      }
      setNumber((prev) => prev + event.target.innerHTML + "");
    }
    if (operations.includes(event.target.innerHTML)) {
      dispatch({
        type: actionTypes.changeOperation,
        payload: {
          operation: event.target.innerHTML,
          number: number,
        },
      });
      setNumber("");
    }
  };
  return (
    <BinaryLayout>
      <InputItem type={type}>
        <Small>
          (binary : {state.number}) (decimal result : {state.decimalNumber})
        </Small>
        {number}
      </InputItem>
      {binaryButtons.map((item) => (
        <Item key={item} onClick={clickHandler}>
          {item}
        </Item>
      ))}
    </BinaryLayout>
  );
}

export default BinaryCalc;
