import React from "react";
import { GlobalStyles } from "../../utils/global";
// @ts-ignore
import styled from "styled-components";


export type cardData = {
  heading: String,
  body: String,
  img: String
}


const CardWrapper = styled.div`
  padding: 3rem;
  background-color: ${GlobalStyles.color.background};
`;

const CardItem = (data: cardData) => {

  const { heading, body, img } = data;

  return (
    <CardWrapper>
      <div>{heading}</div>
      <div>{body}</div>
      <div>{img}</div>
    </CardWrapper>
  );
};

export default CardItem;
