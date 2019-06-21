// @flow

import React from "react";
import Intro from "./Intro";
import Navigation from "./Navigation";
import { Portfolio } from "./Portfolio";

export type ListObject = {
  previous: String,
  next: String,
  content: any,
  dispatch: Function
};

const templates = {
  Intro: Intro,
  Portfolio: Portfolio
};

const addNavgiation = (TemplateComponent: any) => {
  return (props: any) => (<Navigation {...props}>{TemplateComponent}</Navigation>);
};

const TemplateWrapper = (current: ListObject) => {
  const { template } = current.content;
  // @ts-ignore
  const SpecificTemplate = templates[template];
  const Nav = addNavgiation(<SpecificTemplate {...current}/>);

  return <Nav {...current}/>;
};


export default TemplateWrapper;
