import React from "react";
import { HashRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import HomePage from "./pages/HomePage";

import "./styles/base.css";

const App = () => {
  return (
    <Router>
      <main>
        <div className="frame">
          <div className="frame__title-wrap">
            <h1 className="frame__title">ENSPIRE 2022</h1>
            <p className="frame__tagline"></p>
          </div>
          <div className="frame__links">
            <a href="#home">Home</a>
            <a href="#events">Events</a>
            <a href="#sponsors">Our Sponsors</a>
            <a href="#team">Team</a>
          </div>
          <div className="frame__demos">
            <NavLink
              to="#"
              activeClassName="frame__demo--current"
              className="frame__demo"
            >
              DISCORD
            </NavLink>
          </div>
        </div>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage/>
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
