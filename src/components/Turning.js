import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import { SET_ELEMENT_FOCUS, SET_TEXT_BOX } from "../hooks/portfolioReducer";

const Flippering = styled(animated.div)`
  will-change: transform, opacity;
`;

const Turning = entry => {
  const { dispatch, data } = entry;
  const { transform, opacity } = useSpring({
    opacity: data.focus ? 0 : 0,
    transform: `perspective(600px) rotateX(${data.focus ? 180 : 0}deg) scale(${
      data.focus ? 1.5 : 1
    })`,
    config: { mass: 5, tension: 400, friction: 80 }
  });

  return (
    <Flippering
      className="flipped"
      onClick={() => {
        const focus = !data.focus;
        const dataset = { ...data, focus };

        dispatch({ type: SET_ELEMENT_FOCUS, dataset });
        dispatch({ type: SET_TEXT_BOX, active: dataset.id });
      }}
      style={{ opacity: opacity.interpolate(o => 1 - o), transform }}
    >
      {entry.children}
    </Flippering>
  );
};

export default Turning;
