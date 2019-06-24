import * as React from "react";
// @ts-ignore
import styled from "styled-components";

interface introTemplate {
  content: {
    title: string,
    subtitle: string,
    img: {
      src: string,
      label: string
    }
  }
}

const BackgroundBlue = styled.div`
  background-color: #00559d;
  width: 100vw;
  height: 100vh;
  border: 2px solid white;
`;

const TitleText = styled.div`
  font-size: 25px;
  color: #00559d;
  
  
`;

const Advertisement = (data: introTemplate) => {

  return (
    <BackgroundBlue>
      <TitleText>Advertisement Block left top, with starts</TitleText>
      <div>Small text under the title</div>
      <div>Image that counts for the product</div>
      <div>Footer bottom left with website and things</div>
      This is the content
    </BackgroundBlue>
  );
};

export default Advertisement;
