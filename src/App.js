import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: '',
      nouns: [],
      verbs: [],
      adverbs: [],
      adjectives: [],
      rhymes: [],
    }
  }

  render() {
    return (
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <a className="navbar-brand" href="/">Word Finder</a>
        </nav>

        <form className="form-inline mb-4">
          <div className="form-group">
            <label htmlFor="word" className="mr-2"> Word</label>
            <input id="word" name="word" type="text" className="form-control mr-2" placeholder="Enter word" value={this.state.word} onChange={(e) => this.wordChanged(e)}/>
          </div>

          <button type="submit" className="btn btn-primary mr-2" onClick={(e) => this.findWords(e)}>Find Words</button>
        </form>

        <div className="row">
          <div className="col-md-2">
            <h3>Rhymes</h3>

            <ul className="list-group">
              {this.state.rhymes.map((rhyme) => <li key={rhyme.word} className="list-group-item">{rhyme.word}</li>)}
            </ul>
          </div>

          <div className="col-md-2">
            <h3 data-toggle="tooltip" data-placement="top" title="a word (other than a pronoun) used to identify any of a class of people, places, or things common noun, or to name a particular one of these proper noun">Nouns</h3>

            <ul className="list-group">
              {this.state.nouns.map((noun) => <li key={noun} className="list-group-item">{noun}</li>)}
            </ul>
          </div>

          <div className="col-md-2">
            <h3 data-toggle="tooltip" data-placement="top" title="a word used to describe an action, state, or occurrence, and forming the main part of the predicate of a sentence, such as hear, become, happen">Verbs</h3>

            <ul className="list-group">
              {this.state.verbs.map((verb) => <li key={verb} className="list-group-item">{verb}</li>)}
            </ul>
          </div>

          <div className="col-md-2">
            <h3 data-toggle="tooltip" data-placement="top" title="a word or phrase that modifies or qualifies an adjective, verb, or other adverb or a word group, expressing a relation of place, time, circumstance, manner, cause, degree, etc. (e.g., gently, quite, then, there ).">Adverbs</h3>

            <ul className="list-group">
              {this.state.adverbs.map((adverb) => <li key={adverb} className="list-group-item">{adverb}</li>)}
            </ul>
          </div>

          <div className="col-md-3">
            <h3 data-toggle="tooltip" data-placement="top" title="a word or phrase naming an attribute, added to or grammatically related to a noun to modify or describe it.">Adjectives</h3>

            <ul className="list-group">
              {this.state.adjectives.map((adjective) => <li key={adjective} className="list-group-item">{adjective}</li>)}
            </ul>
          </div>
        </div>
      </div>
    );
  }

  findWords(event) {
    axios.get(`http://words.bighugelabs.com/api/2/b239421c3013579d71da631af6ece495/${this.state.word}/json`)
      .then(response => {
        console.log(response.data);

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
          adjectives,
        });
      })
      .catch(error => {
        console.log(error);
      })
      .then(() => {
        // always executed
      });

    axios.get(`https://api.datamuse.com/words?rel_rhy=${this.state.word}`)
      .then(response => {
        console.log(response.data);
        this.setState({
          rhymes: response.data,
        })
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
    })
  }
}

export default App;
