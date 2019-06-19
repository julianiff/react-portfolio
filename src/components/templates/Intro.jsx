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
  height: 100vh;
`;

const Intro = (data: introTemplate) => {

  return (
    <AllCenter>
      <div>{data.content.title}</div>
      <div>{data.content.subtitle}</div>
    </AllCenter>
  );
};

export default Intro;
