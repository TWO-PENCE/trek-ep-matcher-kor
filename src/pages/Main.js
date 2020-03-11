import React, { Component } from "react";
import { Link } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <div id="divEpInput">
        <label>
          Episode Title:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <Link
          to={{
            pathname: "/result",
            state: {
              epTitle: this.state.value
            }
          }}
        >
          <button disabled={!this.state.value}>변환</button>
        </Link>
        <Link to="/">
          <button>초기화</button>
        </Link>
      </div>
    );
  }
}

export default Main;
