import React from "react";
import ReactDOM from "react-dom";
import "normalize.css/normalize.css";
import Dashboard from "./components/Dashboard";
class App extends React.Component {
  render() {
    return (
      <div>
        <Dashboard />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
