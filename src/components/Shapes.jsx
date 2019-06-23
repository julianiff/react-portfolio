import React from "react";
import styled from "styled-components";


const Shapes = styled.div`
  width: 0; 
  height: 0; 
  border-left: ${props => props.ratio}px solid transparent;
  border-right: ${props => props.ratio}px solid transparent;
      ::after {
        opacity: 0;
        content: '';
        position: absolute;
        width: 0; 
        height: 0; 
        border-left: ${props => props.ratio}px solid transparent;
        border-right: ${props => props.ratio}px solid transparent;
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
  border-bottom: ${props => props.ratio}px solid ${props => props.color};
  ::after {
    border-bottom: ${props => props.ratio}px solid ${props => props.color}57;
    transform: translateX(-${props => props.ratio}px) scale(1.1);
  }
`;

const Down = styled(Shapes)`
  border-top: ${props => props.ratio}px solid ${props => props.color};
    ::after {
      border-top: ${props => props.ratio}px solid ${props => props.color}57;
      transform: translateY(-${props => props.ratio}px) translateX(-${props => props.ratio}px) scale(1.1);
    }
`;

const Box = styled.div`
  width: calc((${props => props.ratio}px ) / 2 );
  height: 15px;
  background-color: ${props => props.color};
  margin: calc((${props => props.ratio}px) / 8 );
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
