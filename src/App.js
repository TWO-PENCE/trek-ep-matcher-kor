import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./pages/Main";
import STapi from "./pages/STapi";
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
