import React from "react";
import styled from "styled-components";


const Up = styled.div`
  width: 0; 
  height: 0; 
  border-left: ${props => props.ratio}px solid transparent;
  border-right: ${props => props.ratio}px solid transparent;
  
  border-bottom: ${props => props.ratio}px solid black;
`;

const TriangleUp = ({ratio = 5}) => {

  return (
    <Up
    ratio={ratio}
    />
  );
};

export default TriangleUp;
