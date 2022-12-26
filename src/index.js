import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/css/index.css";
import CalculatorContextProvider from "./context/CalculatorContextProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CalculatorContextProvider>
    <App />
  </CalculatorContextProvider>
);
