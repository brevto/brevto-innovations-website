import React from "react";

import Container from "../components/layout/Container";

import services from "../data/services";

import "../styles/productsservices.css";

const ProductsServices = () => {
  return (
    <div className="products-page">

      {/* HERO */}

      <section className="products-hero">

        <Container>

          <div className="products-hero-content">

            <h1 className="products-title">
              Digital <span className="outline-text">PRODUCTS</span>

              <br />

              <span className="product-title-and">&</span>

              <br />
                STARTUP <span className="outline-text">SOLUTIONS
              </span>
            </h1>

            <p className="products-description">
              Modern digital experiences built for startups
              and ambitious brands.
            </p>

          </div>

        </Container>

      </section>

      {/* SERVICES */}

      <section className="services-showcase">

  <Container>

    {services.map((service, index) => (

      <div
        key={service.id}
        className={`service-showcase-item ${
          index % 2 ? "reverse" : ""
        }`}
      >

        <div className="service-content">

          <div className="service-number product-service-number">
            {service.icon}
          </div>

          <h2>
            {service.title}
          </h2>

          <p>
            {service.description}
          </p>

          {/* put a "Learn more button here" which is associated with opening a modal when click which have respective info. create learn-more-button.js in data folder and add some repective one.*/}

        </div>

        <div className="service-image-wrapper">

          <img
            src={service.image}
            alt={service.title}
            className="service-image"
          />

        </div>

      </div>

    ))}

  </Container>

</section>

    </div>
  );
};

export default ProductsServices;