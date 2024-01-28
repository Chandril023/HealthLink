import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Contact from "./contact";
import Counts from "./counts";
import Department from "./department";
import Doctors from "./doctors";
import Faq from "./faq";
import Footer from "./footer";
import Gallery from "./gallery";
import Topper from "./topper";
import Hero from "./hero";
import Services from "./services";
import Testimonials from "./testimonials";
import Whyus from "./whyus";

function Home({ onLoginClick, onSignupClick }) {
  return (
    <>
    <Topper onLoginClick={onLoginClick} onSignupClick={onSignupClick}/>
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

export default Home;
