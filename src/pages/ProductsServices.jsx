import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Grid from "../components/ui/Grid";

import ProductSpotlight from "../components/sections/ProductSpotlight";
import FinalCTASection from "../components/sections/FinalCTASection";

import services from "../data/services";

import "../styles/productsservices.css";

const ProductsServices = () => {
  return (
    <div className="products-page">

      <section className="products-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="Products & Services"
            title="Digital Products & Startup Solutions"
            description="Modern digital experiences built for startups and ambitious brands."
          />

        </Container>

      </section>

      <section className="services-list-section">

        <Container>

          <Grid columns={3}>

            {services.map((service) => (

              <Card key={service.id}>

                <div className="service-number">
                  {service.icon}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </Card>

            ))}

          </Grid>

        </Container>

      </section>

      {/* <ProductSpotlight /> */}

      <FinalCTASection />

    </div>
  );
};

export default ProductsServices;