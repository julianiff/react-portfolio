import Hovering from "../hoc/Hovering";
import { TriangleDown, TriangleUp } from "./Triangle";
import React from "react";
import { colorPicker } from "../styles/colorPicker";


const HoverTriangle = ({ index = 1, ratio = 250 }) => {

  const goDown = () => {
    return <Hovering>
      <TriangleDown ratio={ratio} color={colorPicker(index)}>children</TriangleDown>
    </Hovering>;
  };

  const goUp = () => {
    return <Hovering>
      <TriangleUp ratio={ratio} color={colorPicker(index)} />
    </Hovering>;
  };

  return (
    (index % 2 !== 0) ? goDown() : goUp()
  );
};

export { HoverTriangle };
