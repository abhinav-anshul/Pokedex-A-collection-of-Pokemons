import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import Navbar from "./components/Navbar";
import PokemonList from "./components/PokemonList";
import "../src/style/base/_base.scss";
import "../src/style/base/_settings.scss";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <PokemonList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
