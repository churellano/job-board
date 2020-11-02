import React, { Component } from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Jobs from '../Jobs/Jobs';

class Home extends Component {
  render() {
    return (
      <Router>
        <div className="Home">
          <Navbar className='navbar'/>
          <Switch>
            <Route path='/jobs' component={Jobs} />
            <Route path='/profile' component={Profile} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Home;
