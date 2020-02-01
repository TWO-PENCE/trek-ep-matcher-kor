import React, { Component } from "react";
import axios from "axios";

const STapiAdd = "http://stapi.co/api/v1/rest/";
const seasonAdd = STapiAdd.concat("episode/search");

const qs = require("qs");

class STapi extends Component {
  constructor(props) {
    super(props);
    console.log("살려줘 : ", this.props.location.state.epTitle);

    this.state = {
      epTitle: this.props.location.state.epTitle,
      stApi: [],
      epInfoArr: [],
      epInfo: ""
    };
  }

  async componentDidMount() {
    let { data: stApi } = await axios.post(
      seasonAdd,
      qs.stringify({
        title: this.state.epTitle
      })
    );
    this.setState({ stApi });

    let jsStApi = JSON.stringify(stApi);
    let parseStApi = JSON.parse(jsStApi);

    this.epInfoArr = parseStApi.episodes; //에피소드 정보 배열
    console.log(this.epInfoArr);
    this.epInfo = this.epInfoArr.map((epi, i) => (
      <EpisodeInfo
        usAirDate={epi.usAirDate}
        season={epi.season.title}
        episodeNumber={epi.episodeNumber}
        title={epi.title}
        stardateTo={epi.stardateTo}
        yearTo={epi.yearTo}
        key={i}
      />
    ));
    this.setState({ elem: this.epInfo });
  }

  render() {
    return this.epInfo ? <div>{this.epInfo}</div> : <div>준비중</div>;
  }
}

class EpisodeInfo extends Component {
  render() {
    return (
      <div>
        <label>방영 날짜: {this.props.usAirDate} </label>
        <br></br>
        <label>시리즈, 시즌: {this.props.season} </label>
        <br></br>
        <label>에피소드 넘버: {this.props.episodeNumber}</label>
        <br></br>
        <label>제목: {this.props.title}</label>
        <br></br>
        <label>에피소드 시점 우주력: {this.props.stardateTo}</label>
        <br></br>
        <label>에피소드 시점 지구력: {this.props.yearTo}</label>
      </div>
    );
  }
}

export default STapi;
