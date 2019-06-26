import React, { useReducer } from "react";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer } from "../components/hooks/PresentationReducer";


const Presentation = ({inputState, inputDataFLow}) => {

  const [state, dispatch] = useReducer(PresentationReducer, inputState);

  const current = inputDataFLow[state.current];

  return (
    <TemplateWrapper
      dispatch={dispatch}
      {...current} />
  );
};

export default Presentation;
