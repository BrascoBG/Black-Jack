import React from "react";
import Play from "./components/Play/Play";
import Bet from "./components/Bet/Bet";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Rules from "./components/Rules/Rules";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Intro} />
        <Route path="/play" component={Play} />
        <Route path="/play" component={Bet} />
        <Route path="/about" component={About} />
        <Route path="/rules" component={Rules} />
      </BrowserRouter>
    </div>
  );
}

export default App;
