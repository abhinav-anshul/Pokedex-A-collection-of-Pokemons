import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import PokemonDetails from "./PokemonDetails";
import NotFoundPage from "./NotFoundPage";

const Route = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pokemon" component={PokemonDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Route;
