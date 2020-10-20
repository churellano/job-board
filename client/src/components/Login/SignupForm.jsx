import React, { Component } from 'react';
import './SignupForm.css';

const Roles = {
  Administrator: 1,
  Student: 2,
  Employer: 3
}

export default class SignupForm extends Component {

  passwordsMatch() {
    return this.props.password === this.props.confirmPassword;
  }

  render() {
    let usernameMessage;
    if (this.props.isUsernameUnique && this.props.isUsernameFormTouched && this.props.username) {
      usernameMessage = <p className="help is-success">Username is available.</p>;
    } else if (!this.props.isUsernameUnique && this.props.isUsernameFormTouched && this.props.username) {
      usernameMessage = <p className="help is-danger">Username is already taken.</p>;
    } else {
      usernameMessage = null;
    }

    return (
      <form onSubmit={this.props.handleSignup}>
        
        <div className='form-row'>
          <div className='field'>
            <label className='label'>First name</label>
            <div className='control'>
              <input className='input' type="text" name="firstName" value={this.props.firstName} onChange={this.props.handleChange}/>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Last name</label>
            <div className='control'>
              <input className='input' type="text" name="lastName" value={this.props.lastName} onChange={this.props.handleChange}/>
            </div>
          </div>
        </div>

        <div className='form-row'>
          <div className='field'>
            <label className='label'>Username</label>
            <div className='control has-icons-left'>
              <input className='input' type="text" name="newUsername" value={this.props.username} onChange={this.props.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-user"></i>
              </span>
            </div>
            { usernameMessage }
          </div>
          <div className="field">
            <label className="label">Role</label>
            <div className="select">
              <select className='select-dropdown' name='roleId' value={this.props.roleId} onChange={this.props.handleChange}>
                <option value={Roles.Student}>Student</option>
                <option value={Roles.Employer}>Employer/Recruiter</option>
              </select>
            </div>
          </div>
        </div>

        <div className='form-row'>
          <div className='field'>
            <label className='label'>Password</label>
            <div className='control has-icons-left'>
              <input className='input' type="password" name="newPassword" value={this.props.password} onChange={this.props.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock-open"></i>
              </span>
            </div>
          </div>
        </div>

        <div className='form-row'>
          <div className='field'>
            <label className='label'>Confirm password</label>
            <div className='control has-icons-left'>
              <input className='input' type="password" name="confirmPassword" value={this.props.confirmPassword} onChange={this.props.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-lock"></i>
              </span>
            </div>
            { this.passwordsMatch() ? null : <p className="help is-danger">Password does not match.</p> }
          </div>
        </div>

        <div className='form-row'>
          <div className='field'>
            <label className='label'>Email</label>
            <div className='control has-icons-left'>
              <input className='input' type="text" name="contactEmail" value={this.props.contactEmail} onChange={this.props.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className='field'>
            <label className='label'>Phone number</label>
            <div className='control has-icons-left'>
              <input className='input' type="text" name="contactPhone" value={this.props.contactPhone} onChange={this.props.handleChange}/>
              <span className="icon is-small is-left">
                <i className="fas fa-phone"></i>
              </span>
            </div>
          </div>
        </div>
  
        <div className="field is-grouped">
          <div className="control">
            <input type='submit' value='Register' className="button is-link"/>
          </div>
        </div>
  
      </form>
    );
  }
}