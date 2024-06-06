import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const AdminLogin = ({ onAdminLoginClose, setIsAuthenticated }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/admin/login', { username, password });
      const token = response.data.token;
      setIsAuthenticated(true);
      setRedirectToDashboard(true);
      localStorage.setItem('token', token);
    } catch (error) {
      console.error('Error:', error.message);
      setError('An error occurred. Please try again.'); // Set error message
    }
  };

  // Close the Admin Login overlay when redirected to the dashboard
  if (redirectToDashboard) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <div className='login-overlay-container'>
      <div className="login-overlay">
        <div className='login-form'>
          <form onSubmit={handleSubmit}>
            <h1>Admin Login</h1>
            <label>
              Admin Username:
              <input type="text" name="email" required value={username} onChange={(e) => setUsername(e.target.value)} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
            <br />
            {error && <div className="text-danger mb-3">{error}</div>}
            <div className='login-button'>
              <button className='button-1' type="submit">Login</button>
              <button className='button-1' onClick={onAdminLoginClose}>Close</button>
            </div>
          </form>
        </div>
        <div className='login-advertisement'></div>
      </div>
    </div>
  );
};

export default AdminLogin;
