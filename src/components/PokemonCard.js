import React from "react";

export default class PokemonCard extends React.Component {
  state = {
    name: "",
    imageUrl: "",
    pokemonIndex: ""
  };

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split("/")[url.split("/").length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({
      name,
      imageUrl,
      pokemonIndex
    });
  }

  render() {
    return (
      <div>
        <h5>{this.state.pokemonIndex}</h5>
        <h1>
          {this.state.name
            .toUpperCase()
            .split("-")
            .map(letter => letter.charAt(0).toUpperCase() + letter.substring(1))
            .join(" ")}
        </h1>
        <img src={this.state.imageUrl} alt="IMAGENOTLOADED" />
      </div>
    );
  }
}