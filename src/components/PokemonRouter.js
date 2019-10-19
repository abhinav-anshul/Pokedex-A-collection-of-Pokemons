import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import PokemonDetails from "./PokemonDetails";

const Route = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/pokemon" component={PokemonDetails} />
    </Switch>
  </BrowserRouter>
);

export default Route;
