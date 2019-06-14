import React from "react";
import styled from "styled-components";
import Hovering from "../hoc/Hovering";


const Edge = styled.div`
  border: 3px solid white;
  background-color: black;
  padding: 5.5rem;
  color: white;
  transition: box-shadow 550ms;
  margin-bottom: 50px;
  will-change: transform;
  width: 250px;
  &:hover {
    box-shadow: 0 30px 100px -10px rgba(0, 0, 0, 0.4);
  }
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
