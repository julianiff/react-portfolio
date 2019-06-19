import React from "react";
import { updateEntry } from "../../hooks/PresentationReducer";
import styled from "styled-components";


type NavigationElements = {
  dispatch: Function,
  previous: String,
  next: String,
  updateEl: Function,
  children: any
}


const RightNavigation = styled.div`
  position: absolute;
  right: 15px;
  top: 50%;
  width: 15px;
  height: 15px;
  background-color: green;
`;

const LeftNavigation = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  width: 15px;
  height: 15px;
  background-color: green;
`;


const Navigation = (NavigationElement: NavigationElements) => {

  const { dispatch, updateEl, next, previous } = NavigationElement;
  return (
    <>
      <RightNavigation
        onClick={() =>
          dispatch(updateEl(next))}
      />
      <LeftNavigation
        onClick={() =>
          dispatch(updateEl(previous))}
      />

      {NavigationElement.children}
    </>
  );
};

Navigation.defaultProps = {
  updateEl: updateEntry,
};

export default Navigation;
