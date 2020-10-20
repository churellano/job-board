import React, { Component } from 'react';
import './Login.css';
import { API, USER_ACCOUNTS_API } from '../../constants';
import store from 'store';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import { debounce } from "lodash";

// Example POST method implementation:
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

// Example POST method implementation:
async function getData(url = '') {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'include', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

const Roles = {
  Administrator: 1,
  Student: 2,
  Employer: 3
}

class Login extends Component {
  constructor() {
    super();
    this.state = {
      existingUsername: '',
      existingPassword: '',
      newUsername: '',
      newPassword: '',
      confirmPassword: '',
      roleId: Roles.Student,
      firstName: '',
      lastName: '',
      contactEmail: '',
      contactPhone: '',
      login: true,
      passwordsMatch: false,
      isUsernameUnique: null,
      isUsernameFormTouched: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.toggleView = this.toggleView.bind(this);
    this.isUsernameUnique = debounce(this.isUsernameUnique, 500);
  }

  isLoggedIn() {
    return !!store.get('loggedIn');
  }

  handleChange(event) {
    const { name, value } = event.target;
    // console.log(name, value);
    this.setState({ [name]: value }, () => {
      if (name === 'newUsername' && value) {
        this.setState(prevState => ({ isUsernameFormTouched: true }));
        this.isUsernameUnique();
        // this.setState(prevState => ({ isUserNameUnique: this.isUserNameUnique() }));
      } else if (name === 'password' || name === 'confirmPassword') {
        this.setState(prevState => ({ passwordsMatch: this.passwordsMatch() }));
      }
    });
  }

  handleLogin(event) {
    alert('A username was submitted: ' + this.state.existingUsername);
    postData(API + 'login', {
      username: this.state.existingUsername,
      password: this.state.existingPassword
    }).then(response => {
        if (response.username) {
          store.set('loggedIn', true);
          this.props.history.push('/home')
        } else if (response.error) {
          console.error('ERROR AT LOGIN: ', response.error);
          alert(response.error);
        }
      });
    event.preventDefault();
  }

  handleSignup(event) {
    alert('A username was submitted: ' + this.state.existingUsername);

    if (!this.state.isUsernameUnique) {
      alert('ERROR: Username is already taken.');
      return;
    }

    if (!this.state.passwordsMatch) {
      alert('ERROR: Passwords do not match.');
      return;
    }

    postData(USER_ACCOUNTS_API + 'register', {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.existingUsername,
        password: this.state.existingPassword,
        roleId: this.state.roleId,
        contactEmail: this.state.contactEmail,
        contactPhone: this.state.contactPhone,
    }).then(response => {
        console.log(response);
        if (response.username) {
          store.set('loggedIn', true);
          this.props.history.push('/home')
        } else if (response.error) {
          console.error('ERROR AT LOGIN: ', response.error);
          alert(response.error);
        }
      });
    event.preventDefault();
  }

  toggleView(event) {
    this.setState(prevState => ({ login: !prevState.login }));
  }

  passwordsMatch() {
    console.log('passwordsMatch', this.state.existingPassword === this.state.confirmPassword);

    return this.state.existingPassword === this.state.confirmPassword;
  }

  isUsernameUnique() {
    getData(USER_ACCOUNTS_API + 'username/' + this.state.newUsername).then(response => {
      console.log(response);
      if (response.body) {
        this.setState(prevState => ({ isUsernameUnique: false }));
        console.log('not unique', this.state);
      } else {
        this.setState(prevState => ({ isUsernameUnique: true }));
        console.log('unique', this.state);
      }
    });
  }

  render() {
    let form, buttonMessage, tabs, props;
    if (this.state.login) {
      props = {
        handleChange: this.handleChange,
        handleLogin: this.handleLogin,
        username: this.state.existingUsername,
        password: this.state.existingPassword
      };
      form = <LoginForm {...props}/>;
      buttonMessage = 'Create new account';
      tabs = (
        <ul>
          <li className='is-active'><a>Login</a></li>
          <li><a onClick={this.toggleView}>Sign up</a></li>
        </ul>
      );
    } else {
      props = {
        handleChange: this.handleChange,
        handleSignup: this.handleSignup,        
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.newUsername,
        password: this.state.newPassword,
        confirmPassword: this.state.confirmPassword,
        roleId: this.state.roleId,
        contactEmail: this.state.contactEmail,
        contactPhone: this.state.contactPhone,
        isUsernameUnique: this.state.isUsernameUnique,
        isUsernameFormTouched: this.state.isUsernameFormTouched
      };
      form = <SignupForm {...props} />
      buttonMessage = 'Login instead';
      tabs = (
        <ul>
          <li><a onClick={this.toggleView}>Login</a></li>
          <li className='is-active'><a>Sign up</a></li>
        </ul>
      );
    }

    return (
      <div className='login-form'>
        <div className='box'>
          <div className="tabs is-centered is-fullwidth">
            {tabs}
          </div>
          { form }  
          <button className="button is-text" onClick={this.toggleView}>{buttonMessage}</button>
        </div>  
      </div>
    );
  }
}

export default Login;
