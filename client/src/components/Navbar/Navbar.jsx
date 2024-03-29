import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import 'react-bulma-components/dist/react-bulma-components.min.css';
// import './Navbar.css';

class Navbar extends Component {
  render() {
    return (        
      <nav className='navbar' role='navigation' aria-label='main navigation'>
        <div className='navbar-brand'>
          <a class="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28"/  >
          </a>
          <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div className='navbar-menu'> 
          <div className='navbar-start'>
            <Link class='navbar-item' to='/'>
              Home
            </Link>
            <Link class='navbar-item' to='/profile'>
              Profile
            </Link>
            <Link class='navbar-item' to='/listings'>
              Listings
            </Link>
          </div>
          <div className='navbar-end'>
            
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
