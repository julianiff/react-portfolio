import React from "react";
import styled from "styled-components";
import { Shape } from "../interfaces/Types";


const Shapes = styled.div`
  width: 0; 
  height: 0; 
  border-left: ${(props: Shape) => props.ratio}px solid transparent;
  border-right: ${(props: Shape) => props.ratio}px solid transparent;
      ::after {
        opacity: 0;
        content: '';
        position: absolute;
        width: 0; 
        height: 0; 
        border-left: ${(props: Shape) => props.ratio}px solid transparent;
        border-right: ${(props: Shape) => props.ratio}px solid transparent;
        z-index: -1;
        transition: opacity 450ms ease-out;
    }
    
    &:Hover {
      ::after {
        opacity: 1;
     }
  }
`;

const Up = styled(Shapes)`  
  border-bottom: ${(props: Shape) => props.ratio}px solid ${(props: Shape) => props.color};
  ::after {
    border-bottom: ${(props: Shape) => props.ratio}px solid ${(props: Shape) => props.color}57;
    transform: translateX(-${(props: Shape) => props.ratio}px) scale(1.1);
  }
`;

const Down = styled(Shapes)`
  border-top: ${(props: Shape) => props.ratio}px solid ${(props: Shape) => props.color};
    ::after {
      border-top: ${(props: Shape) => props.ratio}px solid ${(props: Shape) => props.color}57;
      transform: translateY(-${(props: Shape) => props.ratio}px) translateX(-${(props: Shape) => props.ratio}px) scale(1.1);
    }
`;

const Box = styled.div`
  width: calc((${(props: Shape) => props.ratio}px ) / 2 );
  height: 15px;
  background-color: ${(props: Shape) => props.color};
  margin: calc((${(props: Shape) => props.ratio}px) / 8 );
  z-index: 150;
  border: solid 1px white;
  box-shadow: 0 0 20px #ffffff1a, 0 0 6px #ffffff1a;
  transition: box-shadow 250ms ease-in;
  
  &:hover {
    box-shadow: 0 0 28px ${props => props.color}, 0 0 10px ${props => props.color};  
  }
`;

const TriangleUp = ({ ratio = 5, color = "black" }) => (<Up ratio={ratio} color={color}/>);
const TriangleDown = ({ ratio = 5, color = "black" }) => (<Down ratio={ratio} color={color}/>);
const AnimatedBox = ({ ratio = 5, color = "black" }) => (<Box ratio={ratio} color={color}/>);

export { TriangleUp, TriangleDown, AnimatedBox };
