import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../hooks/portfolioReducer";
import { portfolioData } from "../data/initialPortfolio";
import { HoverTriangle } from "./HoverTriangle";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Portfolio = () => {

  const [state, dispatch] = useReducer(portfolioReducer, portfolioData);

  const createTriangles = (data) => {
    return data.map((item, index) => <HoverTriangle index={index}/>);
  };

  const { category } = state;
  return (
    <PortfolioContainer>
      {
        createTriangles(category)
      }
    </PortfolioContainer>
  );
};
