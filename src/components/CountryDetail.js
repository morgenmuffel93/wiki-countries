import React, { Component } from 'react';
import countries from '../data/countries'
import { BrowserRouter as Router, Route, Switch, Link, withRouter } from "react-router-dom";

class CountryDetail extends Component {

  render() {
    const country = countries.filter(item => {
      return item.cca3.includes(this.props.match.params.id);
    }
      );
    
     return (
        <div class="col-7">
          <h1>Info {country[0].name.official}</h1>
          <p>Capital: {country[0].capital}</p>
          <p>Area: {country[0].area} km<sup>2</sup></p>
          <ul>
            <li>Borders:</li>
            {country[0].borders.map((border, index) => {
              return (
                <Link to={`/${border}`}><li>{border}</li></Link>
              )
            })}
          </ul>
        </div>
    )
  }

}

export default CountryDetail;