import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../hooks/portfolioReducer";
import { portfolioData } from "../data/initialPortfolio";
import { HoverTriangle } from "./HoverTriangle";
import Turning from "../hoc/Turning";
import { GlobalStyles } from "../styles/global";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: ${props => props.position};
  justify-content: center;
  flex-direction: column;
  
`;

const Bg = styled.div`
  text-align: center;
  background-color: ${GlobalStyles.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Textbox = styled.div`
  background-color: blue;
`;


export const Portfolio = () => {

  const [state, dispatch] = useReducer(portfolioReducer, portfolioData);

  const createTriangles = (data, dispatch) => {
    return data.map((item, index) => (
      <Turning key={item.id} data={item} dispatch={dispatch}><HoverTriangle
        ratio={document.documentElement.clientHeight / data.length}
        index={index}>{item.content}</HoverTriangle></Turning>));
  };

  const { category } = state;
  return (
    <Bg>
      <PortfolioContainer>
        {
          createTriangles(category, dispatch)
        }
      </PortfolioContainer>
      <Textbox>{category[state.active].title}</Textbox>
    </Bg>
  );
};
