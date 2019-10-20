import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import PokemonDetails from "./PokemonDetails";
import NotFoundPage from "./NotFoundPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route path="/pokemon/:pokemonIndex" component={PokemonDetails} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
