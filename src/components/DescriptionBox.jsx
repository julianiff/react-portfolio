import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../styles/global";


const ContentBox = styled.div`
  position: absolute;
  left: 10vw;
  top: 50px;
  color: ${GlobalStyles.color.colorPalette.prim};
  border: solid 5px ${GlobalStyles.color.colorPalette.prim};
  max-width: 350px;
  background-color: ${GlobalStyles.color.colorPalette.quint};
  padding: 1rem;
  
  font-size: 20px;
  hyphens: auto;
  line-height: 1.40em;
  text-align: left;
`;

const DescriptionBox = (props) => {

  return (
    <ContentBox>
      {props.children}
    </ContentBox>
  );

};

export default DescriptionBox;
