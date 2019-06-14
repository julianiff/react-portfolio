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
    config: { mass: 5, tension: 550, friction: 115 }
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
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
