import React from 'react';

export default function LoginForm(props) {
  return (
    <form onSubmit={props.handleLogin}>

      <div className='field'>
        <label className='label'>
          Username
        </label>
        <div className='control has-icons-left'>
          <input className='input' type="text" name="existingUsername" value={props.username} onChange={props.handleChange}/>
          <span className="icon is-small is-left">
            <i className="fas fa-user"></i>
          </span>
        </div>
      </div>

      <div className='field'>
        <label className='label'>
          Password
        </label>
        <div className='control has-icons-left'>
          <input className='input' type="password" name="existingPassword" value={props.password} onChange={props.handleChange}/>
          <span className="icon is-small is-left">
      <i className="fas fa-lock"></i>
    </span>
        </div>
      </div>

      <div className="field is-grouped">
        <div className="control">
          <input type='submit' value='Sign in' className="button is-link"/>
        </div>
      </div>

    </form>
  );
}