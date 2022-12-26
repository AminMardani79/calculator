import { useState } from "react";
// components
import {
  App as AppComponent,
  Card,
  InfoComponent,
} from "./components/styled-components";
import BinaryCalc from "./components/BinaryCalc";
import DecimalCalc from "./components/DecimalCalc";
const App = () => {
  const [type, setType] = useState("decimal");
  document.addEventListener("keydown", (event) => {
    if (event.key.toUpperCase() === "B") {
      setType("binary");
    } else if (event.key.toUpperCase() === "D") {
      setType("decimal");
    }
  });
  return (
    <AppComponent>
      <InfoComponent>
        Click{" "}
        {type === "decimal"
          ? "b or B to use binary calculator"
          : "d or D to use decimal calculator"}
      </InfoComponent>
      <Card>
        {type === "decimal" ? <DecimalCalc /> : <BinaryCalc type={type} />}
      </Card>
       
    </AppComponent>
  );
};

export default App;
