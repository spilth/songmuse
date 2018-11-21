import React, { Component } from "react";
import strategies from "./data/strategies";

export default class ObliqueStrategies extends Component {
  constructor(props) {
    super(props);

    this.state = { strategy: this.getRandomStrategy() };
  }

  newStrategy() {
    this.setState({ strategy: this.getRandomStrategy() });
  }

  getRandomStrategy() {
    return strategies[Math.floor(Math.random() * strategies.length)];
  }

  render() {
    return (
      <div>
        <h1>Oblique Strategies</h1>

        <div className="jumbotron">
          <h1 className="display-4">{this.state.strategy}</h1>
          <hr className="my-4" />
          <button
            className="btn btn-primary mb-4"
            onClick={() => this.newStrategy()}
          >
            Try Another
          </button>
        </div>

        <h2>What are Oblique Strategies?</h2>

        <p>
          The Oblique Strategies constitute a set of over 100 cards, each of
          which is a suggestion of a course of action or thinking to assist in
          creative situations.
        </p>

        <p>
          Oblique Strategies was created by created by{" "}
          <a href="https://www.enoshop.co.uk/product/oblique-strategies.html">
            Brian Eno and Peter Schmidt
          </a>
          .
        </p>
      </div>
    );
  }
}
