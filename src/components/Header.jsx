import React, { useState } from "react";
import styled from "styled-components";

const BackgroundWidth = styled.div`
  background-color: papayawhip;
  border: 2px solid #0000ff;
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 100vw;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  text-align: center;
`;

export const Header = () => {
  const [title, setTitle] = useState("Title");


  return (
    <BackgroundWidth>
      <HeaderWrapper>
        <StyledInput type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
      </HeaderWrapper>
    </BackgroundWidth>
  );
};
