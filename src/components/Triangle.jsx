import React from "react";
import styled from "styled-components";


const Triangle = styled.div`
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

const Up = styled(Triangle)`  
  border-bottom: ${props => props.ratio}px solid ${props => props.color};
  ::after {
    border-bottom: ${props => props.ratio + 1}px solid ${props => props.color}57;
    transform: translateX(-${props => props.ratio}px) scale(1.03);
  }
`;

const Down = styled(Triangle)`
  border-top: ${props => props.ratio}px solid ${props => props.color};
    ::after {
      border-top: ${props => props.ratio}px solid ${props => props.color}57;
      transform: translateY(-${props => props.ratio}px) translateX(-${props => props.ratio}px) scale(1.03);
    }
`;

const TriangleUp = ({ ratio = 5, color = "black" }) => {

  return (
    <Up
      ratio={ratio}
      color={color}
    />
  );
};

const TriangleDown = ({ ratio = 5, color = "black" }) => {

  return (
    <Down
      ratio={ratio}
      color={color}
    />
  );
};
export { TriangleUp, TriangleDown };
