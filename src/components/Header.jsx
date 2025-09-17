import React from "react";

const Header = () => (
  <header className="header">
    <div className="navbar-area">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="#home">
            <img src="assets/img/logo/logo.svg" alt="tumanitas" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
            <span className="toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><a href="#home">Inicio</a></li>
              <li className="nav-item"><a href="#services">Servicios</a></li>
              <li className="nav-item"><a href="#about">Sobre Nosotros</a></li>
              <li className="nav-item"><a href="#how">Cómo Funciona</a></li>
              <li className="nav-item"><a href="#testimonial">Testimonios</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;

