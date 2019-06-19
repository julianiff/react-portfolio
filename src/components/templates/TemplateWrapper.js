// @flow

import React from "react";
import Intro from "./Intro.jsx";
import Navigation from "./Navigation";

export type ListObject = {
  previous: String,
  next: String,
  content: Object,
  dispatch: Function
};

const templates = {
  Intro: Intro
};

const TemplateWrapper = (current: ListObject) => {
  const { template } = current.content;
  const SpecificTemplate = templates[template];

  return <Navigation {...current}><SpecificTemplate {...current}/></Navigation> ;
};

export default TemplateWrapper;
