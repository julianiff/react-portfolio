import Hovering from "./anmiations/Hovering";
import { AnimatedBox, TriangleDown, TriangleUp } from "./Shapes";
import React from "react";
import { colorPicker } from "../utils/colorPicker";


const HoverShapes = ({ index = 1, ratio = 250 }) => {

  const goDown = () => {
    return <Hovering>
      <TriangleDown ratio={ratio} color={colorPicker(index)} />
    </Hovering>;
  };

  const goUp = () => {
    return <Hovering>
      <TriangleUp ratio={ratio} color={colorPicker(index)}/>
    </Hovering>;
  };

  return (
    (index % 2 !== 0) ? goDown() : goUp()
  );
};

const HoverBox = ({ index = 1, ratio = 250}) => (
  <Hovering><AnimatedBox ratio={ratio} color={colorPicker(index)}/></Hovering>);

export { HoverShapes, HoverBox };
