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
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
`;

const LeftNavigation = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  font-size: 45px;
  line-height: 1.5em;
  cursor: pointer;
`;


const Navigation = (NavigationElement: NavigationElements) => {

  const { dispatch, updateEl, next, previous } = NavigationElement;
  return (
    <>
      <RightNavigation
        onClick={() =>
          dispatch(updateEl(next))}
      > <nav aria-label="Navigation Next" title="Nächste Folie anzeigen" role='navigation'> > </nav></RightNavigation>
      <LeftNavigation
        onClick={() =>
          dispatch(updateEl(previous))}
      > <nav aria-label="Navigation Back" title="Letzte Folie anzeigen" role='navigation'>{"<"}</nav> </LeftNavigation>

      {NavigationElement.children}
    </>
  );
};

Navigation.defaultProps = {
  updateEl: updateEntry
};

export default Navigation;
