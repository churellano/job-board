import React, { Component } from 'react';
import { API_URL } from '../../constants';

class Profile extends Component {
  constructor() {
    super();
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit(event) {
    alert('Submit');

    await fetch(API_URL + 'protected', { credentials: 'include'  })
      .then(response => response.json())
      .then(data => console.log(data));
    // event.preventDefault();
  }
 
  render() {
    return (
      <div className="profile">
        <h1> Student profile </h1>
        <input type='submit' value="Submit" onClick={this.handleSubmit}/>
      </div>
    );
  }
}

export default Profile;
