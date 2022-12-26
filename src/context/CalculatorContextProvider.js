import React, { createContext, useReducer, useState } from "react";
import { actionTypes } from "../data/data";
export const CalculateContext = createContext();

const initialState = {
  operation: "",
  number: "",
  decimalNumber: "",
};
const reducer = (state, action) => {
  if (action.type === actionTypes.changeOperation) {
    switch (state.operation) {
      case "+":
        const sum =
          parseInt(state.number, 2) + parseInt(action.payload.number, 2);
        return {
          ...state,
          operation: action.payload.operation,
          number: sum.toString(2),
          decimalNumber: sum,
        };
      case "-":
        const min =
          parseInt(state.number, 2) - parseInt(action.payload.number, 2);
        return {
          ...state,
          operation: action.payload.operation,
          number: min.toString(2),
          decimalNumber: min,
        };
      case "/":
        const div =
          parseInt(state.number, 2) / parseInt(action.payload.number, 2);
        return {
          ...state,
          operation: action.payload.operation,
          number: div.toString(2),
          decimalNumber: div,
        };
      case "*":
        const mul =
          parseInt(state.number, 2) * parseInt(action.payload.number, 2);
        return {
          ...state,
          operation: action.payload.operation,
          number: mul.toString(2),
          decimalNumber: mul,
        };
      default:
        return {
          ...state,
          operation: action.payload.operation,
          number: action.payload.number,
        };
    }
  }
};

function CalculatorContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState();
  return (
    <CalculateContext.Provider
      value={{ calc, setCalc, result, setResult, state, dispatch }}
    >
      {children}
    </CalculateContext.Provider>
  );
}

export default CalculatorContextProvider;
