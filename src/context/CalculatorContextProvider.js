import React, { createContext, useState } from "react";
export const CartContext = createContext();
function CalculatorContextProvider({ children }) {
  const [result, setResult] = useState(0);
  return (
    <CartContext.Provider value={{ result, setResult }}>
      {children}
    </CartContext.Provider>
  );
}

export default CalculatorContextProvider;
