import React, { useState } from "react";
import { updateEntry } from "../../hooks/PresentationReducer";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";


type NavigationElements = {
  dispatch: Function,
  previous: String,
  next: String,
  updateEl: Function,
  children: any
}


const RightNavigation = styled(animated.div)`
  position: absolute;
  right: 15px;
  top: 50%;
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
  z-index: 1500;
`;

const LeftNavigation = styled(animated.div)`
  position: absolute;
  left: 15px;
  top: 50%;
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
  z-index: 1500;
`;


const Navigation = (NavigationElement: NavigationElements) => {

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
