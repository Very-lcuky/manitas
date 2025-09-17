import React from "react";

const Hero = () => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6">
          <div className="hero-content">
            <h1>¡Tu <span>Manitas de Confianza</span> al Instante!</h1>
            <p>Encuentra y contrata profesionales para limpieza, electricidad, fontanería, jardinería, mensajería y carpintería.</p>
            {/* Botón de descarga */}
            <a href="/downloads/mi-app.apk" className="main-btn btn-hover" download>
              Descargar App
            </a>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="hero-img">
            <img src="assets/img/hero/hero-img.jpg" alt="Manitas" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;

