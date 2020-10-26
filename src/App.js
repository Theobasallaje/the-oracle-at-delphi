import React, { Component } from "react";
import "./App.css";
import delphi from "./assets/delphi.jpg";
import axios from "axios";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      erse: null,
      errorMsg: null,
    };
    this.getVerse = this.getVerse.bind(this);
  }

  // state = {
  //   verse: null,
  //   errorMsg: null,
  // };

  // getVerse = () => {
  getVerse () {
    let verse = axios
      .get(`http://quotes.rest/bible/vod.json`)
      .then(function (response) {
        // handle success
        console.log(response);
        this.setState({
          verse: response.contents.verse,
        });
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        this.setState({
          errorMsg: `Too many requests, wait an hour to get 10 more: ${error}`,
        });
      });
    console.log("verse", verse);
  };

  render() {
    return (
      <div className="homeContainer">
        {console.log(this.state.verse)}
        {this.state.verse ? (
          <h1>{this.state.verse}</h1>
        ) : (
          <h1>{this.state.errorMsg}</h1>
        )}
        <img src={delphi} alt="Oracle at Delphi" onClick={this.getVerse} />
      </div>
    );
  }
}

export default App;
