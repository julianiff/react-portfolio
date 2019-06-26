import React from "react";
import Default from "./default/Default";
import Navigation from "./navigation/Navigation";
import { Portfolio } from "./portfolio/Portfolio";
import Advertisement from "./advertisement/Advertisement";
import { ListObject } from "../../interfaces/Interfaces";

const templates: any = {
  Default: Default,
  Portfolio: Portfolio,
  Advertisement: Advertisement
};

const addNavgiation = (TemplateComponent: any) => {
  return (props: any) => (<Navigation {...props}>{TemplateComponent}</Navigation>);
};

const TemplateWrapper = (current: ListObject) => {
  const { template } = current.content;

  const SpecificTemplate = templates[template];
  const NavTemplate = addNavgiation(<SpecificTemplate {...current}/>);

  return <NavTemplate {...current}/>;
};


export default TemplateWrapper;
