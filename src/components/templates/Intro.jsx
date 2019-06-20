// @flow
import * as React from "react";
import styled from "styled-components";
import Hovering from "../../hoc/Hovering";


type introTemplate = {
  content: {
    title: String,
    subtitle: String,
    img: String
  }
}


const AllCenter = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  padding: 3.5rem;
`;

const Title = styled.h1`
  font-size: 5rem;
  line-height: 1.5em;
  font-weight: 500;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: calc(14px + (30 - 14) * ((100vw - 300px) / (1600 - 300)));
  line-height: calc(1.2em + 0.6 * ((100vw - 20em) / 60));
  font-weight: 500;
  margin: 0;
`;

const ImgLeft = styled.img`
  width: 25vw;
  min-width: 170px;
  padding: 1rem;
  margin: 2rem;
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
`;

const SideBySide = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 65vw;
`;

const Intro = (data: introTemplate) => {

  const { img, title, subtitle } = data.content;
  return (
    <AllCenter>
      {img && <Hovering><ImgLeft src={img} alt=""/> </Hovering>}
      <SideBySide>
        {title && <Title>{title}</Title>}
        {subtitle && <SubTitle>{subtitle}</SubTitle>}
      </SideBySide>

    </AllCenter>
  );
};

export default Intro;
