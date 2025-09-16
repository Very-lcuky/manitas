import React from "react";

const testimonials = [
  { name: "Ena Shah", role: "Teacher", img: "testimonial-1.png", text: "Lorem ipsum dolor sit amet..." },
  { name: "Mrs. Gosh", role: "Actor", img: "testimonial-2.png", text: "Lorem ipsum dolor sit amet..." },
  { name: "John Doe", role: "Model", img: "testimonial-3.png", text: "Lorem ipsum dolor sit amet..." },
];

const Testimonials = () => (
  <section id="testimonial" className="testimonial-section pt-150 pb-40">
    <div className="container">
      <div className="row">
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
