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
function BinaryCalc({ type }) {
  const { state, dispatch } = useContext(CalculateContext);
  const [number, setNumber] = useState("");
  const clickHandler = (event) => {
    if (binaryNumbers.includes(+event.target.innerHTML)) {
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
  console.log(state);
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
