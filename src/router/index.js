import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home, Streamer } from "../pages";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/:name/:id" exact component={Streamer} />
      <Route path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
