import React from "react";

const partners = ["partner-1.svg","partner-2.svg","partner-3.svg","partner-4.svg"];

const Partners = () => (
  <section id="partner" className="partner-section pt-60 pb-60">
    <div className="container">
      <div className="row">
        {partners.map((p, index) => (
          <div className="col-lg-3 col-sm-6" key={index}>
            <img src={`assets/img/partners/${p}`} alt="Partner" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Partners;
