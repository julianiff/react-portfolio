// @flow
import * as React from "react";
import styled from "styled-components";


type introTemplate = {
  content: {
    title: String,
    subtitle: String
  }
}


const AllCenter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 5rem);
  padding: 2.5rem;
`;

const Title = styled.div`
  font-size: 5rem;
  line-height: 1.5em;
  font-weight: 500;
`;

const Intro = (data: introTemplate) => {

  return (
    <AllCenter>
      <Title>{data.content.title}</Title>
      <div>{data.content.subtitle}</div>
    </AllCenter>
  );
};

export default Intro;
