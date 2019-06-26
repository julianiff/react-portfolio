import React, { useReducer } from "react";
import { presentationFlowData } from "../data/presentationFlowData";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer } from "../components/hooks/PresentationReducer";


const Presentation = ({initialData}) => {

  const [state, dispatch] = useReducer(PresentationReducer, initialData);

  const current = presentationFlowData[state.current];

  return (
    <TemplateWrapper
      dispatch={dispatch}
      {...current} />
  );
};

export default Presentation;
