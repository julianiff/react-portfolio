import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/global";


const ContentBox = styled.div`
  color: ${GlobalStyles.color.colorPalette.prim};
  border: solid 5px ${GlobalStyles.color.colorPalette.prim};
  max-width: 550px;
  background-color: ${GlobalStyles.color.colorPalette.quint};
  padding: 1.5rem;
  
  font-size: ${GlobalStyles.font.from14to20};
  hyphens: auto;
  line-height: 1.40em;
  text-align: left;
  z-index: 100;
  align-self: flex-end;
`;

const DescriptionBox = (props) => {

  return (
    <ContentBox>
      {props.children}
    </ContentBox>
  );

};

export default DescriptionBox;
