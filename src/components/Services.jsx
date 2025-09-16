import React from "react";

const services = [
  { title: "Food", icon: "service-icon-1.svg" },
  { title: "Grocery", icon: "service-icon-2.svg" },
  { title: "Furniture", icon: "service-icon-3.svg" },
  { title: "Medicine", icon: "service-icon-4.svg" },
  { title: "Electronics", icon: "service-icon-5.svg" },
  { title: "Mensajero", icon: "service-icon-6.svg" }, // cambiado a Mensajero
];

const Services = () => (
  <section id="services" className="service-section pt-150">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-6 col-lg-8 text-center mb-70">
          <span>Delivery Services</span>
          <h1>All Essentials You Need</h1>
        </div>
      </div>
      <div className="row">
        {services.map((s, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="single-service">
              <div className="icon">
                <img src={`assets/img/service/${s.icon}`} alt={s.title} />
              </div>
              <div className="content">
                <h3>{s.title}</h3>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
