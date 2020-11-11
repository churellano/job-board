import React, { Component } from 'react';
import './Splash.css';

export default class Splash extends Component {
  render() {
    return (
      <div className='container splash-container'>
        <h1 className='title'> Employ </h1>
        <h2 className='subtitle'> Enriching student careers </h2>
        <div>
          <a className='button is-link' href='/login'>Login or Register</a>
        </div>
      </div>
    );
  }
}