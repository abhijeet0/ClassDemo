import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "../pages/About";
import { Home } from "../pages/Home/Home";
import { Users } from "../pages/Users";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
