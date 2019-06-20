import React, { useState } from "react";
import styled from "styled-components";
import { animated, useSpring } from "react-spring";


const RightNavigationStyle = styled(animated.div)`
  position: absolute;
  right: 15px;
  top: 50%;
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
  z-index: 1500;
`;


const NavigationElement = ({ onClickCallback, sign }) => {

  const [transformation, setTransformation] = useState(true);
  const props = useSpring({
    transform: (transformation) ? "translateX(0px)" : "translateX(10px)",
    color: (transformation) ? "black" : "green",
    from: { transform: "translateX(10px)", color: "black" }
  });

  return (
    <RightNavigationStyle
      style={props}
      onMouseOver={() => setTransformation(!transformation)}
      onMouseOut={() => setTransformation(!transformation)}
      onClick={() => onClickCallback()}
    >
      <nav aria-label="Navigation Next" title="Nächste Folie anzeigen" role='navigation'> {sign}</nav>
    </RightNavigationStyle>
  );
};

export default NavigationElement;
