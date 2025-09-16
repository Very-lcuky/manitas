import React from "react";

const testimonialsData = [
  { name: "Ena Shah", role: "Teacher", text: "Excelente servicio y puntualidad.", image: "assets/img/testimonial/testimonial-1.png" },
  { name: "Mrs. Gosh", role: "Actor", text: "Muy confiables y profesionales.", image: "assets/img/testimonial/testimonial-2.png" },
  { name: "John Doe", role: "Model", text: "Entrega rápida y servicio amable.", image: "assets/img/testimonial/testimonial-3.png" },
  { name: "Jonathan Smith", role: "Creative Designer", text: "Super recomendable para cualquier encargo.", image: "assets/img/testimonial/testimonial-4.png" },
  { name: "Sara A. K.", role: "Heroine", text: "Muy eficiente y fácil de usar.", image: "assets/img/testimonial/testimonial-5.png" },
  { name: "David Smith", role: "Businessman", text: "Siempre cumplen con los tiempos de entrega.", image: "assets/img/testimonial/testimonial-6.png" },
];

const Testimonials = () => {
  return (
    <section id="testimonial" className="testimonial-section img-bg pt-150 pb-40">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title mb-60 text-center">
              <span className="wow fadeInUp" data-wow-delay=".2s">Testimonios</span>
              <h1 className="wow fadeInUp" data-wow-delay=".4s">Lo que dicen nuestros usuarios</h1>
            </div>
          </div>
        </div>
        <div className="row testimonial-wrapper">
          {testimonialsData.map((testimonial, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="single-testimonial wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <div className="rating">
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                  <i className="lni lni-star-filled"></i>
                </div>
                <div className="content">
                  <p>{testimonial.text}</p>
                </div>
                <div className="info">
                  <div className="image">
                    <img src={testimonial.image} alt={testimonial.name} />
                  </div>
                  <div className="text">
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
