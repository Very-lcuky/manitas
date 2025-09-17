import React from "react";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Delivery from "./components/Delivery";
import Testimonials from "./components/Testimonials";
import Partners from "./components/Partners";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Preloader />
      <Header />
      <Hero />
      <Services />
      <About />
      <Delivery />
      <Testimonials />
      <Partners />
      <Footer />
    </>
  );
}

export default App;

