import './login.css';
// Login.js

import React from 'react';

const Login = ({ onLoginClose }) => {
  return (
    <div className='login-overlay-container'>
    <div className="login-overlay">
      <div className='login-form'>
      <form>
        <h1>Login</h1>
        <label>
          Email Adress:
          <input type="email" name="email" required/>
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" required />
        </label>
    
        <br />
        <div className='login-button'>
        <button className='button-1' type="submit">Login</button>
        <button className='button-1' onClick={onLoginClose}>Close</button>
        </div>
      </form>
      
    </div>
    <div className='login-advertisement'></div>
    </div>
    </div>
  );
};

export default Login;