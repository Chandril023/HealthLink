import React, { useState } from 'react';
import axios from 'axios';
import { Navigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AdminLogin({ setIsAuthenticated }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [redirectToDashboard, setRedirectToDashboard] = useState(false);
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('https://healthlink-a92n.onrender.com/admin/login', { username, password });
          console.log('Response:', response);
          const token = response.data.token; // Extract the token from the response
          console.log('Token:', token);
          localStorage.setItem('token', token); // Store the token in local storage
          setIsAuthenticated(true); // Update authentication state
          setRedirectToDashboard(true); // Redirect after successful login
      } catch (error) {
          console.error('Error:', error);
          setError('Incorrect username or password.'); // Set error message
      }
  };
  
  
    
    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh', backgroundColor: 'black' }}>
            {redirectToDashboard && <Navigate to="/admin/dashboard" replace />}
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <h2 className="text-center mb-4 text-white">Admin Login</h2>
                        <div className="form-group">
                            <label className="text-white">Username:</label>
                            <input className="form-control" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label className="text-white">Password:</label>
                            <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        {error && <div className="text-danger mb-3">{error}</div>}
                        <div className="form-group text-center">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <Link to="/" className="d-block text-center mt-2 text-white">Return to Home</Link>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;