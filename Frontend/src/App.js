import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/adminlogin.jsx';
import Home from './components/home.jsx';
import Signup from './components/signup';
import Success from './components/success.jsx';
import ProtectedRoute from './components/protected.jsx';
import AdminDashboard from './components/admindashboard';

function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin/login" element={<AdminLogin  setIsAuthenticated={setIsAuthenticated}/>} />
        <Route path="/success" element={<Success />} />
        <Route path="/registration" element={<Signup/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/admin/dashboard" element={<ProtectedRoute isAuthenticated={isAuthenticated}><AdminDashboard setIsAuthenticated={setIsAuthenticated} /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
