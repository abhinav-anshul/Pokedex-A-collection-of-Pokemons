import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

class PokemonDetails extends React.Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: ""
  };

  componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpecies = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    console.log(pokemonIndex);
    console.log(pokemonUrl);
    console.log(pokemonSpecies);
  }

  render() {
    return (
      <div>
        <Navbar />
      </div>
    );
  }
}

export default PokemonDetails;
