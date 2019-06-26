import React, { useReducer } from "react";
import styled from "styled-components";
import { portfolioReducer } from "../../hooks/portfolioReducer";
import { HoverBox } from "../../HoverShapes";
import Turning from "../../anmiations/Turning";
import { GlobalStyles } from "../../../utils/global";
import DescriptionBox from "./DescriptionBox";
import TitleBox from "./TitleBox";
import { useAutomaticCarousel } from "../../hooks/useAutomaticCarousel";
import { Category } from "../../types/Types";

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

type Active = {
  active: any
}

const BackgroundReckRight = styled.div`
  width: 550px;
  height: 550px;
  position: absolute;
  border: 10px solid ${GlobalStyles.color.colorPalette.sec}30;
  transform: translateX(${(props: Active) => (props.active) ? "250px" : ""});
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

type PortfolioShape = {
  active: number, // Pointer to the active foil id
  isInAutomatic: boolean, // If the carusell is automatically going to the next foil
  delay: number, // delay after each foil
  category: Category[],
}

interface PortfolioData {
  content: {
    template: string
    data: PortfolioShape
  }
}


export const Portfolio = (props: PortfolioData) => {

  const [state, dispatch] = useReducer(portfolioReducer, props.content.data);
  const { active, isInAutomatic, delay, category } = state;

  useAutomaticCarousel(active, isInAutomatic, delay, category, dispatch);

  const createSwitch = (data: Category[], dispatch: any) => {
    return data.map((item: Category, index: number) => (
      <Turning key={item.id} data={item} dispatch={dispatch}>
        <HoverBox
          ratio={document.documentElement.clientWidth / data.length}
          index={index}/>
      </Turning>));
  };

  const item = category.find((item: Category) => item.id === state.active) || { title: "", content: "" };

  return <Bg>

    <TitleBox>{state.active && item.title}</TitleBox>
    <DescriptionBox>{state.active && item.content}</DescriptionBox>

    <PortfolioContainer>
      <BackgroundReckRight active={state.active}/>
      <BackgroundReckLeft/>
      {createSwitch(category, dispatch)}
    </PortfolioContainer>
  </Bg>;
};
