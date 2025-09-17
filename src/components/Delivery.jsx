import React from "react";

const Delivery = () => (
  <section id="how" className="delivery-section pt-150">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-5">
          <h1>Pide Ahora, Recibe en 30 Minutos</h1>
          <p>
            Nuestros mensajeros llevan tus compras, medicamentos o cualquier encargo 
            directamente a tu puerta de manera rápida y confiable.
          </p>
          <a href="#" className="main-btn btn-hover">
            Descargar App
          </a>
        </div>
        <div className="col-lg-7">
          <img
            src="assets/img/delivery/delivery-img.jpg"
            alt="Entrega Rápida"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Delivery;

