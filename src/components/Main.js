import React, { Component } from "react";
import STapi from "./STapi";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      series: "Star Trek: The Original Series",
      season: "",
      epTitle: ""
    };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {}

  render() {
    // return (
    //   <form onSubmit={this.handleSubmit}>
    //     {/* series 선택 */}
    //     <label>
    //       <select value={this.state.series} onChange={this.handleChange}>
    //         <option value="">The Original Series</option>
    //         <option value="">The Animated Series</option>
    //         <option value="">The Next Generation</option>
    //         <option value="">Deep Space Nine</option>
    //         <option value="">Voyager</option>
    //         <option value="">Discovery</option>
    //       </select>
    //     </label>
    //     <label>
    //       Episode Title:
    //       <textarea value={this.state.epTitle} onChange={this.handleChange} />
    //     </label>
    //     <input type="submit" value="변환" />
    //   </form>
    // );

    return <STapi />;
  }
}

export default Main;
