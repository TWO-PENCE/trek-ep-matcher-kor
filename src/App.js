import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./components/Main";
import STapi from "./components/STapi";
import "./css/scss/App.scss";

class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component={Main} />
        <Route path="/result" component={STapi} />
      </Router>
    );
  }
}

export default App;
