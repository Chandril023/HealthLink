import React from 'react';
import {BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from './components/login';
import RegistrationPage from './components/signup';
import Home from './components/home.jsx';

function App () {
  return (
      <BrowserRouter>
      <Routes>
        <Route path='/login' element={<LoginPage/>}/>
        <Route path='/registration' element={<RegistrationPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route
            path="/"
            element={<Navigate to="/login" replace />}
          />
      </Routes>
      </BrowserRouter>
      
  )
}

export default App