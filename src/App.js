import React from "react";
import "./App.css";
import { Portfolio } from "./components/Portfolio";
import styled from "styled-components";
import { GlobalStyles } from "./styles/global";

const Bg = styled.div`
  text-align: center;
  background-color: ${GlobalStyles.color.background};
`;

function App() {
  return (
    <Bg>
      <Portfolio />
    </Bg>
  );
}

export default App;
