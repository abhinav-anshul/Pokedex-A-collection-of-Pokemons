import React from "react";
import "../style/PokemonCard.scss";
import "../style/base/_base.scss";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;

class PokemonCard extends React.Component {
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
      <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
        <div className="pokemonCardContainer">
          <img src={this.state.imageUrl} alt="IMAGENOTLOADED" />
          <div className="wrapperIndexName">
            <h3>{this.state.pokemonIndex}.</h3>
            <h1 style={{ fontWeight: 300 }}>
              {this.state.name
                .toUpperCase()
                .split("-")
                .map(
                  letter => letter.charAt(0).toUpperCase() + letter.substring(1)
                )
                .join(" ")}
            </h1>
          </div>
        </div>
      </StyledLink>
    );
  }
}

export default PokemonCard;
