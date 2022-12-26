import { useContext, useState } from "react";
// components
import { App as AppComponent, Card } from "./components/styled-components";
import BinaryCalc from "./components/BinaryCalc";
import DecimalCalc from "./components/DecimalCalc";
// context
import { CartContext } from "./context/CalculatorContextProvider";

const App = () => {
  const [type, setType] = useState("decimal");
  const { setCalc } = useContext(CartContext);
  document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() === "B") {
      setType("binary");
      setCalc("");
    } else if (event.key.toUpperCase() === "D") {
      setType("decimal");
      setCalc("");
    }
  });
  return (
    <AppComponent>
      <Card>{type === "decimal" ? <DecimalCalc /> : <BinaryCalc />}</Card> 
    </AppComponent>
  );
};

export default App;
