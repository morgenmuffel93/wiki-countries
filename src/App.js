import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";
import countries from './data/countries';
import 'bootstrap/dist/css/bootstrap.css';
import CountryDetail from './components/CountryDetail'
import './App.css';

class App extends Component {
  render() {
    const styled = {
      maxHeight: '90vh',
      overflow: 'scroll',
    }

    return (
      <div className="App">
          <div>
            <nav class="navbar navbar-dark bg-primary mb-3">
              <div class="container">
                <a href="/" class="navbar-brand">WikiCountries</a>
              </div>
            </nav>
          </div>
          <Router>
          <div className="container">
            <aside>
              <div class="col-5" style={styled}>
                <div class="list-group">
                  {countries.map((country, index) => {
                    return (
                      <li key={`id=${index}`} class="list-group-item list-group-item-action" >
                        <Link to={country.cca3}>{country.name.official}</Link>
                      </li>
                    )
                  })}
                </div>
              </div>
            </aside>
            <div class="info-container">
              <Switch>
                <Route path={'/:id'} component={CountryDetail} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

