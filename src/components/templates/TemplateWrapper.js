// @flow

import React from "react";
import Intro from "./Intro.jsx";

export type ListObject = {
  previous: String,
  next: String,
  content: Object
};

const templates = {
  Intro: Intro
};

const TemplateWrapper = (current: ListObject) => {
  const { template } = current.content;

  const SpecificTemplate = templates[template];

  return <SpecificTemplate {...current}/>;
};

export default TemplateWrapper;
