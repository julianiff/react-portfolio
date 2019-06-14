import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../hooks/portfolioReducer";
import { portfolioData } from "../data/initialPortfolio";
import HoveringCard from "./HoveringCard";
import TriangleUp from "./TriangleUp";
import Hovering from "../hoc/Hovering";
import { GlobalStyles } from "../styles/global";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

export const Portfolio = () => {

  const [state, dispatch] = useReducer(portfolioReducer, portfolioData);

  const createShards = () => {
    const { category } = state;
    return category.map(item => <HoveringCard key={item.title}>{item.title}</HoveringCard>);
  };

  return (
    <PortfolioContainer>
      <Hovering>
        <TriangleUp ratio={250} color={GlobalStyles.color.prim}/>
      </Hovering>
    </PortfolioContainer>
  );
};
