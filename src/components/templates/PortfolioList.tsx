import React from "react";
import CardItem, { cardData } from "../CardItem";


const Portfliolist = (data: Array<cardData>) => {

  const renderList = (list: Array<cardData>) => {
    return list.map(item => <CardItem {...item}/>);
  };

  return (
    <>{renderList(data)}</>
  );
};

export default Portfliolist;
