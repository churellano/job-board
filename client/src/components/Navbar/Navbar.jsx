import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {

  render() {
    return (
      <nav className='navbar'>
          <h3> co-Operate </h3>
          <ul className='navbar-list'>
            <Link className='navbar-links' to='/'>
              <li>Home</li>
            </Link>
            <Link className='navbar-links' to='/profile'>
              <li>Profile</li>
            </Link>
            <Link className='navbar-links' to='/listings'>
              <li>Listings</li>
            </Link> 
          </ul>
      </nav>
    );
  }
}

export default Navbar;
