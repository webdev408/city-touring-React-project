import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../../logo.svg';
import "./navbar.scss";

export default function Navbar() {
  return (
  <nav className="navbar">
      <img src={logo} alt="city tours company" />
      <ul className="nav-links">
      <Link to="/"><li><a href="/" className="nav-link">home</a></li></Link>
      <Link to="/about"><li><a href="/" className="nav-link">about</a></li></Link>
       <Link to="/tour"><li><a href="/" className="nav-link active">tours</a></li></Link>
      </ul>
   </nav>
  );
}
