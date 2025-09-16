import React from "react";

const partners = [
  "assets/img/partners/partner-1.svg",
  "assets/img/partners/partner-2.svg",
  "assets/img/partners/partner-3.svg",
  "assets/img/partners/partner-4.svg",
];

const Partners = () => {
  return (
    <section id="partner" className="partner-section pt-60 pb-60">
      <div className="container">
        <div className="row">
          {partners.map((partner, index) => (
            <div className="col-lg-3 col-sm-6" key={index}>
              <div className="single-partner wow fadeInUp" data-wow-delay={`${0.2 + index * 0.2}s`}>
                <img src={partner} alt={`Partner ${index + 1}`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
