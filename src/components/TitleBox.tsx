import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/global";


const TitleBlock = styled.div`
  align-self: flex-start;
  border: solid 5px ${GlobalStyles.color.colorPalette.prim}30;
  color: ${GlobalStyles.color.colorPalette.prim};
  background-color: ${GlobalStyles.color.colorPalette.quint}60;
  font-size: ${GlobalStyles.font.from14To30};
  padding: 1rem;
  z-index: 100;
`;


type Props = {
  children: string,
}

const TitleBox = (props: Props) => {

  return <TitleBlock>{props.children}</TitleBlock>;
};

export default TitleBox;
