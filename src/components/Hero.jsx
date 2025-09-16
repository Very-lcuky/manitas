import React from "react";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="hero-content">
            <h1>You're Using <span>Free Lite Version</span></h1>
            <p>Please, purchase full version of the template to remove footer credits, documentation and support.</p>
            <a href="https://rebrand.ly/delivery-ud/" className="main-btn btn-hover">Purchase Now</a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-img">
            <img src="assets/img/hero/hero-img.jpg" alt="Hero" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
