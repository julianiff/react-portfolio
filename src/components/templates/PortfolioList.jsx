// @flow
import React from "react";
import CardItem from "../CardItem";


type listEntries = {
  listItems: any
};


const Portfliolist = (data: listEntries) => {

  const renderList = (list) => {
    return list.map(item => <CardItem {...item}/>);
  };

  return (
    <>{renderList(data)}</>
  );
};

export default Portfliolist;
