import React from "react";
import { useSpring, animated } from "react-spring";

const Hovering = entry => {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 500, friction: 115 }
  }));

  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1.1
  ];

  const trans = (x, y, s) =>
    `perspective(400px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  return (
    <>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: props.xys.interpolate(trans) }}
      >
        {entry.children}
      </animated.div>
    </>
  );
};

export default Hovering;
