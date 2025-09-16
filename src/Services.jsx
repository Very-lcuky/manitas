import React from "react";

const servicesData = [
  { title: "Limpieza", description: "Servicios de limpieza para hogar y oficina, rápidos y confiables.", icon: "assets/img/service/service-icon-1.svg" },
  { title: "Electricista", description: "Reparaciones y mantenimientos eléctricos, instalación de enchufes y más.", icon: "assets/img/service/service-icon-2.svg" },
  { title: "Fontanero", description: "Soluciones de plomería: grifos, tuberías, desagües y fugas.", icon: "assets/img/service/service-icon-3.svg" },
  { title: "Jardinero", description: "Mantenimiento de jardines, corte de césped y cuidado de plantas.", icon: "assets/img/service/service-icon-4.svg" },
  { title: "Mensajero", description: "Entrega rápida de compras, medicamentos o cualquier encargo a tu puerta.", icon: "assets/img/service/service-icon-5.svg" },
  { title: "Carpintero", description: "Muebles, reparaciones y proyectos de madera a medida.", icon: "assets/img/service/service-icon-6.svg" },
];

const Services = () => {
  return (
    <section id="services" className="service-section pt-150">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <div className="section-title text-center mb-70">
              <span className="wow fadeInUp" data-wow-delay=".2s">Nuestros Servicios</span>
              <h1 className="wow fadeInUp" data-wow-delay=".4s">Todo lo que necesitas a un clic</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {servicesData.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-service wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <div className="icon">
                  <img src={service.icon} alt={service.title} />
                </div>
                <div className="content">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

