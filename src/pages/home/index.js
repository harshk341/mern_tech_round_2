import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Statistics from "./Statistics";
import About from "./About";
import Work from "./Work";
import Testimonial from "./Testimonial";
import Brands from "./Brands";
import Footer from "./Footer";
import Faq from "./Faq";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <About />
      <Work />
      <Testimonial />
      <Faq />
      <Brands />
      <Footer />
    </>
  );
};

export default Home;
