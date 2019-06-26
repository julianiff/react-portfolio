import React from "react";
import "./App.css";
import Presentation from "./screen/Presentation";
import { presentationState } from "./data/presentationFlowData";

function App() {
  return <Presentation
    inputData={presentationState}
  />;
}

export default App;
