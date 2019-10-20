import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const Heading = styled.h1`
  font-size: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;
  font-weight: 100;
`;

class NotFoundPage extends React.Component {
  render() {
    return (
      <div>
        <Heading>Page not found</Heading>

        <Link to="/">Go to HOME</Link>
      </div>
    );
  }
}

export default NotFoundPage;
