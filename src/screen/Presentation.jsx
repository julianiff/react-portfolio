import React, { useReducer } from "react";
import { presentationData, presentationState } from "../data/presentationData";
import TemplateWrapper from "../components/templates/TemplateWrapper";
import { PresentationReducer, SET_CURRENT_ITEM } from "../hooks/PresentationReducer";


const Presentation = () => {

  const [state, dispatch] = useReducer(PresentationReducer, presentationState);

  const current = presentationData[state.current];
  console.log(current);
  return (
    <div
      onClick={() => dispatch({ type: SET_CURRENT_ITEM, current: current.next })}
    >
      <TemplateWrapper
        {...current} />
    </div>
  );
};

export default Presentation;
