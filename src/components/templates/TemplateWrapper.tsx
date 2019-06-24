import React from "react";
import Default from "./default/Default";
import Navigation from "./navigation/Navigation";
import { Portfolio } from "./portfolio/Portfolio";
import Advertisement from "./advertisement/Advertisement";

export type ListObject = {
  previous: String,
  next: String,
  content: any,
  dispatch: Function
};

const templates = {
  Default: Default,
  Portfolio: Portfolio,
  Advertisement: Advertisement
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
