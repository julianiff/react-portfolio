import React from "react";
import "./App.css";
import { Header } from "./components/Header.jsx";
import { Portfolio } from "./components/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />
    </div>
  );
}

export default App;
