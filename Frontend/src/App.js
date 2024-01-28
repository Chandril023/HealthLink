import { useState } from 'react';
import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Login from './components/login';
import Home from './components/home.jsx';
import Signup from './components/signup';

function App () {
  const [isLoginOverlayVisible, setLoginOverlayVisibility] = useState(false);

  const handleLoginClick = () => {
    console.log('Login function triggered');
    setLoginOverlayVisibility(true);
  };

  const handleLoginClose = () => {
    setLoginOverlayVisibility(false);
  };
  const [isSignupOverlayVisible, setSignupOverlayVisibility] = useState(false);

  const handleSignupClick = () => {
    console.log('Login function triggered');
    setSignupOverlayVisibility(true);
  };

  const handleSignnupClose = () => {
    setSignupOverlayVisibility(false);
  };
  return (
    <>
    <Topper/>
    <Hero/>
      <main id="main">
        <Whyus/>
        <About/>
        <Counts/>
        <Services/>
        <Appointment/>
        <Department/>
        <Doctors/>
        <Faq/>
        <Testimonials/>
        <Gallery/>
        <Contact/>
      </main>
      <Footer/>
    </>
  );
}

export default App