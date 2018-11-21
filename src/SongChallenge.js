import React, { Component } from "react";
import { sample } from "lodash";
import genres from "./data/genre";
import keys from "./data/key";

export default class SongChallenge extends Component {
  constructor(props) {
    super(props);

    this.state = {
      genre: sample(genres),
      key: sample(keys),
      tempo: this.getRandomTempo(),
      arrangement: this.getRandomArrangement()
    };
  }

  newChallenge() {
    this.getRandomChallenge();
  }

  getRandomChallenge() {
    this.setState({
      genre: sample(genres),
      key: sample(keys),
      tempo: this.getRandomTempo(),
      arrangement: this.getRandomArrangement()
    });
  }

  handleSelectChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    console.log(name + ": " + value);

    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <h1>Song Challenge</h1>

        <div className="jumbotron">
          <p className="lead">
            Write a{" "}
            <select
              name="genre"
              id="genre"
              className="madlib"
              value={this.state.genre}
              onChange={e => this.handleSelectChange(e)}
            >
              {genres.map(genre => {
                return <option key={genre}>{genre}</option>;
              })}
            </select>{" "}
            song in the key of{" "}
            <select
              name="key"
              id="key"
              className="madlib"
              value={this.state.key}
              onChange={e => this.handleSelectChange(e)}
            >
              {keys.map(key => {
                return <option key={key}>{key}</option>;
              })}
            </select>{" "}
            at a tempo of <span className="madlib">{this.state.tempo}</span>{" "}
            with the following arrangement:
          </p>

          <p className="lead">
            <span className="madlib">{this.state.arrangement}</span>
          </p>

          <hr className="my-4" />

          <button
            className="btn btn-primary mb-4"
            onClick={() => this.newChallenge()}
          >
            Try Another
          </button>
        </div>
      </div>
    );
  }

  getRandomKey() {
    return "C Major";
  }

  getRandomTempo() {
    return 120;
  }

  getRandomArrangement() {
    return "Verse Chorus Verse Chorus Chorus";
  }
}
