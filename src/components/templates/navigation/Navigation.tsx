import React, { FunctionComponent, useState } from "react";
import { updateEntry } from "../../hooks/PresentationReducer";
// @ts-ignore
import styled from "styled-components";
import { animated, useSpring } from "react-spring";
import { NavigationElements } from "../../../interfaces/Interfaces";


const NavigationElement = styled(animated.div)`
  position: absolute;
  top: 50%;
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
  z-index: 1500;
  padding: 1rem;
`;


const RightNavigation = styled(NavigationElement)`
  right: 5px;
`;

const LeftNavigation = styled(NavigationElement)`
  left: 5px;
`;


const Navigation: FunctionComponent<NavigationElements>  = (NavigationElement) => {

  const { dispatch, updateEl, next, previous } = NavigationElement;

  const [transformation, setTransformation] = useState(true);
  const props = useSpring({
    transform: (transformation) ? "translateX(0px)" : "translateX(10px)",
    color: (transformation) ? "black" : "#00559d",
    from: { transform: "translateX(10px)", color: "black" }
  });


  return (
    <>
      <RightNavigation
        style={props}
        onMouseOver={() => setTransformation(!transformation)}
        onMouseOut={() => setTransformation(!transformation)}
        onClick={() => {
          dispatch(updateEl(next));
        }}
      >
        <nav aria-label="Navigation Next" title="Nächste Folie anzeigen" role='navigation'> ></nav>
      </RightNavigation>
      {previous && <LeftNavigation
        style={props}
        onMouseOver={() => setTransformation(!transformation)}
        onMouseOut={() => setTransformation(!transformation)}
        onClick={() =>
          dispatch(updateEl(previous))}
      >
        <nav aria-label="Navigation Back" title="Letzte Folie anzeigen" role='navigation'>{"<"}</nav>
      </LeftNavigation>}
      {NavigationElement.children}
    </>
  );
};

Navigation.defaultProps = {
  updateEl: updateEntry
};

export default Navigation;
