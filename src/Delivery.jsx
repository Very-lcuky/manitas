import React from "react";

const Delivery = () => {
  return (
    <section id="how" className="delivery-section pt-150">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <div className="delivery-content">
              <div className="section-title">
                <span className="wow fadeInUp" data-wow-delay=".2s">Entrega Rápida</span>
                <h1 className="mb-35 wow fadeInUp" data-wow-delay=".4s">
                  Pide Ahora, Recibe en 30 min
                </h1>
                <p className="mb-35 wow fadeInUp" data-wow-delay=".6s">
                  Nuestros mensajeros llevan tus compras, medicamentos o encargos directamente a tu puerta de manera rápida y confiable.
                </p>
                <a href="javascript:void(0)" className="main-btn btn-hover wow fadeInUp" data-wow-delay=".8s">
                  Descargar App
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-7 order-first order-lg-last">
            <div className="delivery-img wow fadeInUp" data-wow-delay=".5s">
              <img src="assets/img/delivery/delivery-img.jpg" alt="Delivery" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Delivery;
