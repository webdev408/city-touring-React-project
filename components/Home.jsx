import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center my-4">Welcome to Universal Tours & Travels</h1>
        <div className="jumbotron">
  <h1 className="display-4 text-center">Hello Tourist world!</h1>
  <p className="lead">Universal Travel & Tours(UTT) Ltd. is the foremost authority in providing mega city and most desirable city travel services for a single traveller or groups of travellers. Here you will find information on some of the largest cities of the world and ways and means to get and enjoy the sites in an economical as well as most luxurious ways.simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  <hr className="my-4" />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
</div>
      </div>
    );
  }
}
