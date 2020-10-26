import React, { Component } from "react";
import "./Home.scss";
import delphi from "../assets/delphi.jpg";
import axios from "axios";

class Home extends Component {
  
  state = {
    verse: null,
    errorMsg: null,
  };

  getVerse = () => {
    axios
      .get(`http://quotes.rest/bible/vod.json`)
      .then((response) => {
        // handle success
        console.log(response);
        this.setState({
          verse: response.data.contents.verse,
          errorMsg: null,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
        this.setState({
          verse: null,
          errorMsg: `Too Many Requests: Rate limit of 10 requests per hour exceeded`,
          // errorMsg: `${error.message}`,
        });
      });
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

export default Home;
