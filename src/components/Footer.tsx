import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../utils/global";


const DownLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 250px;
  color: ${GlobalStyles.color.colorPalette.prim};
  font-size: 9px;
`;

const Footer = () => {
  return (
    <DownLeft>
      jj - contact
    </DownLeft>
  );
};

export default Footer;
