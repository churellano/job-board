import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Profile from './components/Profile/Profile';
import Listings from './components/Listings/Listings';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar className='navbar'/>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/profile' component={Profile} />
            <Route path='/listings' component={Listings} />
          </Switch>
        </div>
      </Router>
        
    );
  }
}

export default App;
