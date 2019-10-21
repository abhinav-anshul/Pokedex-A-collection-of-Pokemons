import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import PokemonDetails2 from "./PokemonDetails2";
import NotFoundPage from "./NotFoundPage";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={Dashboard} />
      <Route path="/pokemon/:pokemonIndex" component={PokemonDetails2} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
