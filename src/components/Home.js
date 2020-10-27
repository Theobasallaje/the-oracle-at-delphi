import React, { Component } from "react";
import "./Home.scss";
import delphi from "../assets/delphi.jpg";
import axios from "axios";

class Home extends Component {
  
  state = {
    joke: null,
    errorMsg: null,
  };

  getJoke = () => {
    axios
    //   .get(`http://quotes.rest/bible/vod.json`) // only 10 calls an hour
      .get(`https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single`)
      .then((response) => {
        // handle success
        console.log('response: ', response);
        console.log('joke: ', response.data.joke);
        this.setState({
        //   verse: response.data.contents.verse,
          joke: response.data.joke,
          errorMsg: null,
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
        this.setState({
          joke: null,
        //   errorMsg: `Too Many Requests: Rate limit of 10 requests per hour exceeded`,
          errorMsg: error,
        });
      });
  };

  render() {
    return (
      <div className="homeContainer">
        {console.log(this.state.joke)}
        {this.state.joke ? (
          <h2>{this.state.joke}</h2>
        ) : (
          <h1>{this.state.errorMsg}</h1>
        )}
        <img src={delphi} alt="Oracle at Delphi" onClick={this.getJoke} />
      </div>
    );
  }
}

export default Home;
