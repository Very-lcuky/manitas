import React from "react";

const Header = () => (
  <header className="header">
    <div className="navbar-area">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="assets/img/logo/logo.svg" alt="Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#home">Home</a></li>
              <li className="nav-item"><a href="#services">Services</a></li>
              <li className="nav-item"><a href="#about">About</a></li>
              <li className="nav-item"><a href="#how">How It Works</a></li>
              <li className="nav-item"><a href="#testimonial">Testimonials</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
