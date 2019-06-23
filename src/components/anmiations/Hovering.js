import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const ZIndexHover = styled(animated.div)`
  &:hover {
    z-index: 100;
  }
`;

const Hovering = entry => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 100, friction: 115 }
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 4) / 20,
    (x - window.innerWidth / 4) / 20,
    0.9
  ];


  const trans = (x, y, s) =>
    `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <>
      <ZIndexHover
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {entry.children}
      </ZIndexHover>
    </>
  );
};

export default Hovering;
