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
        <Route path="/Black-Jack-Live" exact component={Intro} />
        <Route path="/Black-Jack-Live/play" component={Play} />
        <Route path="/Black-Jack-Live/play" component={Bet} />
        <Route path="/Black-Jack-Live/about" component={About} />
        <Route path="/Black-Jack-Live/rules" component={Rules} />
      </BrowserRouter>
    </div>
  );
}

export default App;
