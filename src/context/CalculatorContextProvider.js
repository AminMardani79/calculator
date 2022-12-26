import React, { createContext, useState } from "react";
export const CartContext = createContext();

function CalculatorContextProvider({ children }) {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState();
  return (
    <CartContext.Provider value={{ calc, setCalc, result, setResult }}>
      {children}
    </CartContext.Provider>
  );
}

export default CalculatorContextProvider;
