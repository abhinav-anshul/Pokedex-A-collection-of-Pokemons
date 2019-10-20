import React from "react";
import Navbar from "./Navbar";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <PokemonList />
      </div>
    );
  }
}

export default Dashboard;
