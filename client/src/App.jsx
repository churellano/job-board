import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import Splash from './components/Splash/Splash';
// import Profile from './components/Profile/Profile';
// import Listings from './components/Listings/Listings';

import store from 'store';

export default class App extends Component {
  
  constructor() {
    super();
    this.state = {
      isLoggedIn: store.get('isLoggedIn'),
    };
  }

  shouldComponentUpdate() {
    console.log(this.state);
  }

  render() {
    // console.log(this.state);
    const props = {
      isLoggedIn: this.state.isLoggedIn,
    }

    return (
      <Router>
        <div className="App">
          <Switch>
            <PrivateRoute path="/home">
              <Home/>
            </PrivateRoute>
            <Route path='/login' component={() => <Login {...props}/>} />
            <Route path='/' component={Splash} />
          </Switch>
        </div>
      </Router>
        
    );
  }
}

// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
function PrivateRoute({ children, ...rest }) {
  console.log('STORE', store.get('isLoggedIn'))
  return (
    <Route
      {...rest}
      render={({ location }) =>
        store.get('isLoggedIn') ? (children) : (<Redirect to={{ pathname: "/login",  state: { from: location } }}/>)
      }
    />
  );
}

// Clear isLoggedIn when tab/window is closed
window.onunload = function() {
  // store.remove('isLoggedIn');
  return '';
};
