import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../../hooks/portfolioReducer";
import { portfolioData } from "../../data/initialPortfolio";
import { HoverTriangle } from "../HoverTriangle";
import Turning from "../Turning";
import { GlobalStyles } from "../../styles/global";
import DescriptionBox from "../DescriptionBox";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: ${props => props.position};
  justify-content: center;
  flex-direction: column;
  
`;

const Bg = styled.div`
  position: relative;
  overflow: hidden;
  text-align: center;
  background-color: ${GlobalStyles.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Titlebox = styled.div`
  position: absolute;
  right: 5vw;
  color: ${GlobalStyles.color.colorPalette.prim};
  padding: 5rem;
  background-color: ${GlobalStyles.color.colorPalette.quint};
  border: solid 5px ${GlobalStyles.color.colorPalette.prim};
  max-width: 350px;
  bottom: 100px;
`;

const BackgroundReckRight = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border: 10px solid ${GlobalStyles.color.colorPalette.sec};
  transform: translateX(${props => (props.active) ? "250px" : ""});
  transition: transform 250ms ease-in;
`;

const BackgroundReckLeft = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border: 10px solid ${GlobalStyles.color.colorPalette.quint};    
  transform: translateX(-350px) translateY(-150px);
  transition: transaform 250ms ease-in;
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
        <BackgroundReckRight
          active={state.active}
        />
        <BackgroundReckLeft/>
        {
          createTriangles(category, dispatch)
        }
      </PortfolioContainer>
      <Titlebox>{(state.active) ? category[state.active - 1].title : ""}</Titlebox>
      <DescriptionBox>{(state.active) ? category[state.active - 1].content : ""}</DescriptionBox>
    </Bg>

  );
};
