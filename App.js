import React, { Component }from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import TourList from './components/TourList';
import Home from './components/Home';
import About from './components/About';

class App extends Component {
  render () {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tour" component={TourList} />
      </Switch>
    </div>
    </Router>
  );
}
}
export default App;
