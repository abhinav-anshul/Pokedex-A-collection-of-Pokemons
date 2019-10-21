import React from "react";
import "../style/PokemonDetails2.scss";
import Navbar from "./Navbar";
import "normalize.css/normalize.css";
import "../style/base/_base.scss";
import axios from "axios";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";

const TYPE_COLORS = {
  bug: "B1C12E",
  dark: "4F3A2D",
  dragon: "755EDF",
  electric: "FCBC17",
  fairy: "F4B1F4",
  fighting: "823551D",
  fire: "E73B0C",
  flying: "A3B3F7",
  ghost: "6060B2",
  grass: "74C236",
  ground: "D3B357",
  ice: "A3E7FD",
  normal: "C8C4BC",
  poison: "934594",
  psychic: "ED4882",
  rock: "B9A156",
  steel: "B5B5C3",
  water: "3295F6"
};

class PokemonDetails2 extends React.Component {
  state = {
    name: "",
    pokemonIndex: "",
    imageUrl: "",
    types: [],
    description: "",
    stats: {
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      specialAttack: "",
      specialDefense: ""
    },

    height: "",
    weight: "",
    eggGroups: "",
    abilities: "",
    genderRatioMale: "",
    genderRatioFemale: "",
    evs: "",
    hatchSteps: ""
  };

  async componentDidMount() {
    const { pokemonIndex } = this.props.match.params;

    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}`;
    const pokemonSpeciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonIndex}`;

    // console.log(pokemonIndex);
    // console.log(pokemonUrl);
    // console.log(pokemonSpecies);

    const pokemonRes = await axios.get(pokemonUrl);

    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let { hp, attack, defense, speed, specialAttack, specialDefense } = "";

    pokemonRes.data.stats.map(stat => {
      switch (stat.stat.name) {
        case "hp":
          hp = stat["base_stat"];
          break;
        case "attack":
          attack = stat["base_stat"];
          break;
        case "defense":
          defense = stat["base_stat"];
          break;
        case "speed":
          speed = stat["base_stat"];
          break;
        case "special-attack":
          specialAttack = stat["base_stat"];
          break;
        case "special-defense":
          specialDefense = stat["base_stat"];
          break;
      }
    });

    const height =
      Math.round((pokemonRes.data.height * 0.328084 + 0.0001) * 100) / 100;

    const weight = Math.round(pokemonRes.data.weight / 10);

    const types = pokemonRes.data.types.map(type => type.type.name);

    const abilities = pokemonRes.data.abilities.map(ability => {
      return ability.ability.name
        .toLowerCase()
        .split("-")
        .map(s => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
    });

    const evs = pokemonRes.data.stats
      .filter(stat => {
        if (stat.effort > 0) {
          return true;
        }
        return false;
      })
      .map(stat => {
        return `${stat.effort} ${stat.stat.name}`
          .toLowerCase()
          .split("-")
          .map(s => s.charAt(0).toUpperCase() + s.substring(1))
          .join(" ");
      })
      .join(", ");

    //Get pokemon description,catch rate, egggroups, gender ratio, hatch steps
    await axios.get(pokemonSpeciesUrl).then(res => {
      let description = "";
      res.data.flavor_text_entries.some(flavor => {
        if (flavor.language.name === "en") {
          description = flavor.flavor_text;
          return;
        }
      });

      const femaleRate = res.data["gender_rate"];
      const genderRatioFemale = 12.5 * femaleRate;
      const genderRatioMale = 12.5 * (8 - femaleRate);

      const catchRate = Math.round(100 / 255) * res.data["capture_rate"];

      const eggGroups = res.data["egg_groups"]
        .map(group => {
          return group.name
            .toLowerCase()
            .split("-")
            .map(s => s.charAt(0).toUpperCase() + s.substring(1))
            .join(" ");
        })
        .join(", ");

      const hatchSteps = 255 * (res.data["hatch_counter"] + 1);

      this.setState({
        description,
        genderRatioFemale,
        genderRatioMale,
        catchRate,
        eggGroups,
        hatchSteps
      });
    });

    this.setState({
      imageUrl,
      pokemonIndex,
      name,
      types,
      stats: {
        hp,
        attack,
        defense,
        speed,
        specialAttack,
        specialDefense
      },
      height,
      weight,
      abilities,
      evs
    });
  }

  render() {
    return (
      <div>
        <Navbar />
        <div className="pokemonDetailsContainer">
          <div className="pokemonProfile">
            <h2>{this.state.name}</h2>
            <div className="button">
              <Link to="/">
                <button
                  style={{
                    color: "#6cbbf6",
                    border: "none",
                    textAlign: "center",
                    padding: "0.5rem",
                    textDecoration: "none",
                    display: "inline-block",
                    cursor: "4px 2px",
                    fontSize: "2rem"
                  }}
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
          <div className="pokemonType">
            <div className="type type-1">
              <p>
                {this.state.types.map(type => (
                  <span
                    key={type}
                    style={{
                      backgroundColor: `#${TYPE_COLORS[type]}`,
                      color: "white",
                      padding: "1rem 2rem 1rem 2rem"
                    }}
                  >
                    {type
                      .toLowerCase()
                      .split("-")
                      .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                      .join(" ")}
                  </span>
                ))}
              </p>
            </div>
          </div>
          <div className="imageAndStatsContainer">
            <div className="pokemonImage">
              <img src={this.state.imageUrl} />
            </div>
            <div className="stats">
              <div className="stat-prop HP">Hp: {this.state.stats.hp}</div>
              <div className="stat-prop ATTACK">
                Attack: {this.state.stats.attack}
              </div>
              <div className="stat-prop DEFENCE">
                Defence: {this.state.stats.defense}
              </div>
              <div className="stat-prop SPEED">
                Speed: {this.state.stats.speed}
              </div>
              <div className="stat-prop SPECIAL ATTACK">
                Special Attack: {this.state.stats.specialAttack}
              </div>
              <div className=" stat-prop SPECIAL DEFENCE">
                Special Defence: {this.state.stats.specialDefense}
              </div>
            </div>
          </div>

          <div className="pokemonDescription">
            <p>" {this.state.description} "</p>
          </div>

          <div className="pokemonProfileContainer">
            <div className="col-1">
              <div className="col height">Height: {this.state.height} ft.</div>
              <div className="col weight">Weight: {this.state.weight} kg</div>
              <div className="col catchRate">
                Catch Rate: {this.state.catchRate}
              </div>
              <div className="gender">
                <div className="col Male">
                  Male: {this.state.genderRatioMale}%
                </div>
                <div className="col Male">
                  Female: {this.state.genderRatioFemale}%
                </div>
              </div>
            </div>
            <div className="col-2">
              <div className="col eggGroups">
                Egg Groups: {this.state.eggGroups}
              </div>
              <div className="col hatchSteps">
                Hatch Steps: {this.state.hatchSteps}
              </div>
              <div className="col abilities">
                Abilities: {this.state.abilities}
              </div>
              <div className="col evs">EVs: {this.state.evs}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonDetails2;
