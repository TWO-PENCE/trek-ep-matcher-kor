import React, { Component } from "react";
import axios from "axios";

const STapiAdd = "http://stapi.co/api/v1/rest/";
const seasonAdd = STapiAdd.concat("series/search");

const qs = require("qs");

class STapi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stApi: [],
      arr: [],
      elem: ""
    };
  }

  async componentDidMount() {
    let { data: stApi } = await axios.post(
      seasonAdd
      // ,
      // qs.stringify({
      //   abbreviation: "TOS"
      // })
    );

    this.setState({ stApi });
    console.log(stApi);

    let jsStApi = JSON.stringify(stApi);
    let parseStApi = JSON.parse(jsStApi);
    console.log(parseStApi);

    this.arr = parseStApi.series;
    this.elem = this.arr.map(item => {
      return item.title;
    });
    console.log(this.elem);
    this.setState({ elem: this.elem });
  }

  render() {
    return this.state.elem;
  }
}

export default STapi;
