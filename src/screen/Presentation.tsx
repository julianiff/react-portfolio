import React, { useReducer } from "react";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer } from "../components/hooks/PresentationReducer";


type StateFlow = {
  inputState: {
    current: string
  },
  inputDataFlow: any,
}

const Presentation = (props: StateFlow) => {

  const [state, dispatch] = useReducer(PresentationReducer, props.inputState);
  const current = props.inputDataFlow[state.current];

  return (
    <TemplateWrapper
      dispatch={dispatch}
      {...current} />
  );
};

export default Presentation;
