// @flow
import * as React from "react";

type IntroData = {
  foo: number
}

const Intro = (props: IntroData) => {

  return (
    <div>{props.foo}</div>
  );
};

export default Intro;
