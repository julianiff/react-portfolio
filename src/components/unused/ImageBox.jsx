import React from "react";
import styled from "styled-components";
import { GlobalStyles } from "../../utils/global";


const ContentBox = styled.img`
  position: absolute;
  left: 10vw;
  top: 50px;
  color: ${GlobalStyles.color.colorPalette.prim};
  border: solid 5px ${GlobalStyles.color.colorPalette.prim};
  max-width: 350px;
  width: 250px;
  height: 250px;
`;

const ImageBox = () => {

  return (
    <ContentBox
      src="https://www.aprilairepartners.com/images/default-source/default-album/04-homepage-sliders_header---dehumidifier-promo.jpg?Status=Master&sfvrsn=12"
      alt=""/>
  );
};

export default ImageBox;
