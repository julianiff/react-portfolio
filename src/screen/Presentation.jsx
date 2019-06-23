import React, { useReducer } from "react";
import { presentationFlowData, presentationState } from "../data/presentationFlowData";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer } from "../components/hooks/PresentationReducer";


const Presentation = () => {

  const [state, dispatch] = useReducer(PresentationReducer, presentationState);

  const current = presentationFlowData[state.current];

  return (
    <TemplateWrapper
      dispatch={dispatch}
      {...current} />
  );
};

export default Presentation;
