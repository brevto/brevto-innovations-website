import React, { useState } from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";

import services from "../data/services";

import "../styles/productsservices.css";
import LearnMoreButton from "../components/ui/LearnMoreButton";
import ServiceModal from "../components/ui/ServiceModal";
import learnMoreData from "../data/learn-more-button";

const ProductsServices = () => {
  const isLoading = usePageSkeleton();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  if (isLoading) return <PageSkeleton variant="cards" />;

  return (
    <div className="products-page">

      {/* HERO */}

      <section className="products-hero">

        <Container>

          <div className="products-hero-content">

            <h1 className="products-title">
              <span className="hero-filled-text">Digital</span>{" "}
              <span className="outline-text">PRODUCTS</span>

              <br />

              <span className="product-title-and hero-filled-text">&</span>

              <br />
              <span className="hero-filled-text">STARTUP</span>{" "}
              <span className="outline-text">SOLUTIONS</span>
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

          {/* Learn more button — opens modal (placeholder onClick) */}
          <div style={{ marginTop: 18 }}>
            <LearnMoreButton
              onClick={() => {
                setSelectedService(service.id);
                setModalOpen(true);
              }}
            />
          </div>

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

  <ServiceModal
    open={modalOpen}
    onClose={() => setModalOpen(false)}
    data={learnMoreData[selectedService]}
  />

    </div>
  );
};

export default ProductsServices;