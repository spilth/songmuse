import React, {Component} from 'react';
import WordFinder from "./WordFinder";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
import ObjectWriting from "./ObjectWriting";
import ObliqueStrategies from "./ObliqueStrategies";

export default class App extends Component {
  render() {
    return <div>
        <Router>
          <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
              <Link className="navbar-brand" to="/">
                SongMuse
              </Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/object-writing/">
                      Object Writing
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/oblique-strategies/">
                      Oblique Strategies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/word-finder/">
                      Word Finder
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/word-finder/" component={WordFinder} />
            <Route path="/object-writing/" component={ObjectWriting} />
            <Route path="/oblique-strategies/" component={ObliqueStrategies} />
          </div>
        </Router>
      </div>;
  }
}