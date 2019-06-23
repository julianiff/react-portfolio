import React from "react";
import styled from "styled-components";
import Hovering from "../anmiations/Hovering";


const Edge = styled.div`
  border: 3px solid white;
  background-color: black;
  padding: 5.5rem;
  color: white;
  transition: box-shadow 550ms;
  margin-bottom: 50px;
  will-change: transform;
  width: 250px;
`;


const HoveringCard = (entry, action = () => console.log("nothing")) => {


  return (
      <Hovering>
        <Edge onClick={() => action}>
          {entry.children}
        </Edge>
      </Hovering>
  );
};

export default HoveringCard;
