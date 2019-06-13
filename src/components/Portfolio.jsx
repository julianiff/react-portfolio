import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../hooks/portfolioReducer";
import { portfolioData } from "../data/initialPortfolio";
import Shard from "./Shard";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 90vh;
`;

export const Portfolio = () => {

  const [state, dispatch] = useReducer(portfolioReducer, portfolioData);

  const createShards = () => {
    const { category } = state;
    return category.map(item => <Shard key={item.title} content={item.title}/>);
  };

  return (
    <PortfolioContainer>
      {createShards()}
    </PortfolioContainer>
  );
};
