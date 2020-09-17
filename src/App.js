import React from "react";
import Play from "./components/Play/Play";
import Bet from "./components/Bet/Bet";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Play />
      <Bet />
    </div>
  );
}

export default App;
