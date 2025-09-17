import React from "react";

const testimonials = [
  { name: "Ena Shah", role: "Profesora", img: "testimonial-1.png", text: "Excelente servicio y puntualidad." },
  { name: "Mrs. Gosh", role: "Actriz", img: "testimonial-2.png", text: "Muy confiables y profesionales." },
  { name: "John Doe", role: "Modelo", img: "testimonial-3.png", text: "Entrega rápida y servicio amable." },
];

const Testimonials = () => (
  <section id="testimonial" className="testimonial-section pt-150 pb-40">
    <div className="container">
      <div className="row justify-content-center">
        {testimonials.map((t, index) => (
          <div className="col-lg-4 col-md-6" key={index}>
            <div className="single-testimonial">
              <p>{t.text}</p>
              <div className="info">
                <img src={`assets/img/testimonial/${t.img}`} alt={t.name} />
                <h5>{t.name}</h5>
                <p>{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

