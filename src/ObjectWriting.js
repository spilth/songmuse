import React, { Component } from "react";
import words from "./data/words";

export default class ObjectWriting extends Component {
  constructor(props) {
    super(props);

    this.state = { word: this.getRandomWord() };
  }

  newWord() {
    this.setState({ word: this.getRandomWord() });
  }

  getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
  }

  render() {
    return (
      <div>
        <h1>Object Writing</h1>

        <div className="jumbotron">
          <p className="lead">Write for 10 minutes about...</p>
          <h1 className="display-4">{this.state.word}</h1>

          <hr className="my-4" />

          <button
            className="btn btn-primary mb-4"
            onClick={() => this.newWord()}
          >
            Try Another
          </button>
        </div>

        <h2>What is Object Writing?</h2>

        <p>Use your senses:</p>

        <ul>
          <li>Sight</li>
          <li>Hearing</li>
          <li>Smell</li>
          <li>Taste</li>
          <li>Touch</li>
          <li>Organic</li>
          <li>Kinesthetic</li>
        </ul>

        <p>
          Object Writing is a practice developed by{" "}
          <a href="http://www.patpattison.com/news/">Pat Pattison.</a>
        </p>
      </div>
    );
  }
}
