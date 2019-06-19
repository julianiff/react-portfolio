import React, { useReducer } from "react";
import { presentationData, presentationState } from "../data/presentationData";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer } from "../hooks/PresentationReducer";


const Presentation = () => {

  const [state, dispatch] = useReducer(PresentationReducer, presentationState);

  const current = presentationData[state.current];

  return (
    <div>
      <TemplateWrapper
        dispatch={dispatch}
        {...current} />
    </div>
  );
};

export default Presentation;
