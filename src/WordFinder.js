import React, { Component } from "react";
import axios from "axios";
import { Results } from "./Results";

export default class WordFinder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      word: "",
      nouns: [],
      verbs: [],
      adverbs: [],
      adjectives: [],
      rhymes: []
    };
  }

  render() {
    return (
      <div>
        <h1>Word Finder</h1>

        <div className="jumbotron">
          <form className="form-inline mb-4">
            <div className="form-group">
              <input
                id="word"
                name="word"
                type="text"
                className="form-control mr-2"
                placeholder="Enter word"
                value={this.state.word}
                onChange={e => this.wordChanged(e)}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary mr-2"
              onClick={e => this.findWords(e)}
            >
              Find Other Words
            </button>
          </form>

          <Results title="Rhymes" entries={this.state.rhymes} />
          <Results
            title="Noun Synonyms"
            entries={this.state.nouns}
            description="a word (other than a pronoun) used to identify any of a class of people, places, or things common noun, or to name a particular one of these proper noun"
          />
          <Results
            title="Verb Synonyms"
            entries={this.state.verbs}
            description="a word used to describe an action, state, or occurrence, and forming the main part of the predicate of a sentence, such as hear, become, happen"
          />
          <Results
            title="Adverb Synonyms"
            entries={this.state.adverbs}
            description="a word or phrase that modifies or qualifies an adjective, verb, or other adverb or a word group, expressing a relation of place, time, circumstance, manner, cause, degree, etc. (e.g., gently, quite, then, there )."
          />
          <Results
            title="Adjective Synonyms"
            entries={this.state.adjectives}
            description="a word or phrase naming an attribute, added to or grammatically related to a noun to modify or describe it."
          />
        </div>

        <h2>What is Word Finder?</h2>

        <p>Word Finder helps you find rhymes and synonyms for words.</p>

        <p>
          Rhymes provided by the{" "}
          <a href="https://www.datamuse.com/api/">Datamuse API</a>. Synonyms
          provided by the{" "}
          <a href="https://words.bighugelabs.com/api.php">
            Big Huge Thesaurus API
          </a>
          .
        </p>
      </div>
    );
  }

  findWords(event) {
    axios
      .get(
        `https://words.bighugelabs.com/api/2/b239421c3013579d71da631af6ece495/${
          this.state.word
        }/json`
      )
      .then(response => {
        let nouns = [];
        let verbs = [];
        let adverbs = [];
        let adjectives = [];

        if (response.data.noun && response.data.noun.syn) {
          nouns = response.data.noun.syn;
        }

        if (response.data.verb && response.data.verb.syn) {
          verbs = response.data.verb.syn;
        }

        if (response.data.adverb && response.data.adverb.syn) {
          adverbs = response.data.adverb.syn;
        }

        if (response.data.adjective && response.data.adjective.syn) {
          adjectives = response.data.adjective.syn;
        }

        this.setState({
          nouns,
          verbs,
          adverbs,
          adjectives
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          nouns: [],
          verbs: [],
          adverbs: [],
          adjectives: []
        });
      })
      .then(() => {
        // always executed
      });

    axios
      .get(`https://api.datamuse.com/words?rel_rhy=${this.state.word}`)
      .then(response => {
        let rhymes = [];

        if (response.data) {
          rhymes = response.data.map(rhyme => rhyme.word);
        }

        this.setState({ rhymes });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });

    event.preventDefault();
  }

  wordChanged(event) {
    this.setState({
      word: event.target.value
    });
  }
}
