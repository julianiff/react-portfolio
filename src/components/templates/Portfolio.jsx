import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../../hooks/portfolioReducer";
import { portfolioData } from "../../data/initialPortfolio";
import { HoverBox } from "../HoverTriangle";
import Turning from "../Turning";
import { GlobalStyles } from "../../styles/global";
import DescriptionBox from "../DescriptionBox";
import TitleBox from "../TitleBox";

const PortfolioContainer = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-self: flex-end;
`;

const Bg = styled.div`
  position: relative;
  overflow: hidden;
  background-color: ${GlobalStyles.color.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: calc(100vh - 7rem);
  padding: 3.5rem;
`;


const BackgroundReckRight = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border: 10px solid ${GlobalStyles.color.colorPalette.sec}30;
  transform: translateX(${props => (props.active) ? "250px" : ""});
  transition: transform 250ms ease-in;
`;

const BackgroundReckLeft = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border: 10px solid ${GlobalStyles.color.colorPalette.quint}30;    
  transform: translateX(-350px) translateY(-150px);
  transition: transaform 250ms ease-in;
`;


export const Portfolio = () => {

  const [state, dispatch] = useReducer(portfolioReducer, portfolioData);

  const createTriangles = (data, dispatch) => {
    return data.map((item, index) => (
      <Turning key={item.id} data={item} dispatch={dispatch}><HoverBox
        ratio={document.documentElement.clientWidth / data.length}
        index={index}>{item.content}</HoverBox></Turning>));
  };

  const { category } = state;
  return (
    <Bg>

      <TitleBox>{(state.active) ? category[state.active - 1].title : ""}</TitleBox>
      <DescriptionBox>{(state.active) ? category[state.active - 1].content : ""}</DescriptionBox>

      <PortfolioContainer>
        <BackgroundReckRight active={state.active}/>
        <BackgroundReckLeft/>
        {createTriangles(category, dispatch)}
      </PortfolioContainer>

    </Bg>

  );
};
