import { useState } from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import AdminLogin from './components/adminlogin.jsx';
import Home from './components/home.jsx';
import Signup from './components/signup';
import Success from './components/success.jsx';
import ProtectedRoute from './components/protected.jsx';
import AdminDashboard from './components/admindashboard';

function App () {
  const [isLoginOverlayVisible, setLoginOverlayVisibility] = useState(false);
  const handleLoginClick = () => {
    console.log('Login function triggered');
    setLoginOverlayVisibility(true);
  };

  const handleLoginClose = () => {
    setLoginOverlayVisibility(false);
  };
  const [isAdminLoginOverlayVisible, setAdminLoginOverlayVisibility] = useState(false);

  const handleAdminLoginClick = () => {
    console.log('Admin Login function triggered');
    setAdminLoginOverlayVisibility(true);
  };

  const handleAdminLoginClose = () => {
    setAdminLoginOverlayVisibility(false);
  };
  const [isSignupOverlayVisible, setSignupOverlayVisibility] = useState(false);

  const handleSignupClick = () => {
    console.log('Login function triggered');
    setSignupOverlayVisibility(true);
  };

  const handleSignnupClose = () => {
    setSignupOverlayVisibility(false);
  };
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/admin/login' element={<AdminLogin onAdminLoginClose={handleAdminLoginClose} setIsAuthenticated={setIsAuthenticated}/>}/>
        <Route path='/login' element={<Login onLoginClose={handleLoginClose}/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='/registration' element={<Signup onSignupCLose={handleSignnupClose}/>}/>
        <Route path='/' element={<Home onLoginClick={handleLoginClick}  onSignupClick={handleSignupClick} onAdminLoginClick={handleAdminLoginClick}/>}/>
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
                <AdminDashboard setIsAuthenticated={setIsAuthenticated} />
            </ProtectedRoute>
        }
        />
      </Routes>
      
      {isLoginOverlayVisible && (
        <Login onLoginClose={handleLoginClose} />
      )}
      
      {isAdminLoginOverlayVisible && (
        <AdminLogin onAdminLoginClose={handleAdminLoginClose} setIsAuthenticated={setIsAuthenticated} />
      )}
      
      {isSignupOverlayVisible && (
        <Signup onSignupClose={handleSignnupClose} />
      )}
    </BrowserRouter>
  )
}

export default App;
