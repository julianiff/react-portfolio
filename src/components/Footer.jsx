import React from "react";
import styled from "styled-components";


const DownLeft = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 250px;
  color: white;
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
