import React, { Component } from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Route path="/" exact component={Home} />
        </Router>
      </>
    );
  }
}

export default App;
