import React from "react";
import "./App.css";
import Presentation from "./screen/Presentation";
import { presentationFlowData, presentationState } from "./data/presentationFlowData";
import { presentationSampleFlow, presentationSampleState } from "./dataSample/presentationSampleData";

function App() {
  return <Presentation
    inputState={(presentationState) ? presentationState : presentationSampleState}
    inputDataFLow={(presentationFlowData) ? presentationFlowData : presentationSampleFlow}
  />;
}

export default App;
