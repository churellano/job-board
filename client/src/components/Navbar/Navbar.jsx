import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
          <h3> Logo </h3>
          <ul className='navbar-links'>
              <li>Home</li>
              <li>Profile</li>
              <li>Listings</li>
          </ul>
      </nav>
    );
  }
}

export default Navbar;
