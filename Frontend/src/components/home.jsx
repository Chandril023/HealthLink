import React from "react";
import About from "./about";
import Appointment from "./appointment";
import Contact from "./contact";
import Counts from "./counts";
import Department from "./department";
import Doctors from "./doctors";
import Gallery from "./gallery";
import Hero from "./hero";
import Faq from "./faq";
import Footer from "./footer";
import Testimonials from "./testimonials";
import Topper from "./topper";
import Services from "./services";
import Whyus from "./whyus";

export default function Home() {
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
