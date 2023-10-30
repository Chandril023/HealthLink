import React from "react";
import About from "./components/about";
import Appointment from "./components/appointment";
import Contact from "./components/contact";
import Counts from "./components/counts";
import Department from "./components/department";
import Doctors from "./components/doctors";
import Faq from "./components/faq";
import Footer from "./components/footer";
import Gallery from "./components/gallery";
import Topper from "./components/topper";
import Hero from "./components/hero";
import Services from "./components/services";
import Testimonials from "./components/testimonials";
import Whyus from "./components/whyus";

function App() {
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

export default App;
