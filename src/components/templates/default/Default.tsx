import * as React from "react";
import { FunctionComponent } from "react";
// @ts-ignore
import styled from "styled-components";
import Hovering from "../../anmiations/Hovering";
import { GlobalStyles } from "../../../utils/global";
import { IntroTemplate } from "../../../interfaces/Interfaces";


const AllCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 7rem);
  padding: 3.5rem;
`;

const Title = styled.h1`
  font-size: ${GlobalStyles.font.from30To60};
  line-height: 1.5em;
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.2em + 0.6 * ((100vw - 20em) / 60));
  font-weight: 500;
  margin: 0;
  text-align: center;
`;

const ImgLeft = styled.img`
  width: ${GlobalStyles.image.width.fluid45to50};
`;

const SideBySide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65vw;
`;

const ImageLabel = styled.div`
  color: ${GlobalStyles.color.colorPalette.prim}
  text-align: center;
  font-size: ${GlobalStyles.font.small}
  font-family: ${GlobalStyles.fontFamily.fontFamilyCabin}
`;

const PaperBox = styled.div`
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;



const Default: FunctionComponent<IntroTemplate> = ({content}) => {

  const { img, title, subtitle } = content;
  return (
    <AllCenter>
      {img &&
      <Hovering>
        <PaperBox>
          <ImgLeft src={img.src} alt=""/>
          <ImageLabel>{img.label}</ImageLabel>
        </PaperBox>
      </Hovering>}
      <SideBySide>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </SideBySide>

    </AllCenter>
  );
};

export default Default;
