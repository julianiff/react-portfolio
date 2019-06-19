// @flow
import * as React from "react";


type introTemplate = {
  previous: String,
  next: String,
  content: {
    title: String,
    subtitle: String
  }
}

const Intro = (data: introTemplate) => {

  return (
    <div>{data.content.title}</div>
  );
};

export default Intro;
