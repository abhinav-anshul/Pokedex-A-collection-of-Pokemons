import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
//import Dashboard from "./components/Dashboard";
import Routes from "./components/PokemonRouter";
class App extends React.Component {
  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
