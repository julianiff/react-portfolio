import React from "react";
import "./App.css";
import Presentation from "./screen/Presentation";
import { presentationState } from "./data/presentationFlowData";

function App() {
  return <Presentation
  initialData={presentationState}
  />;
}

export default App;
