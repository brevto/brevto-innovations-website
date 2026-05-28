import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const ProductSpotlight = () => {
  return (
    <section className="product-spotlight-section">

      <Container>

        <SectionHeading
          tag="Flagship Product"
          title="Brevto"
          description="A modern social media platform built with mobile-first architecture and trust-focused infrastructure."
        />

        <Card className="product-spotlight-card">

          <div className="product-content">

            <div className="product-left">

              <h3>
                Modern Social Media Platform
              </h3>

              <p>
                Built with analytics systems,
                monetization capabilities,
                scalable infrastructure,
                and premium user experience architecture.
              </p>

              <Button variant="primary">
                Explore Product
              </Button>

            </div>

            <div className="product-right">

              <div className="product-feature">
                Mobile-First Architecture
              </div>

              <div className="product-feature">
                Blockchain-Backed Trust
              </div>

              <div className="product-feature">
                Analytics & Monetization
              </div>

              <div className="product-feature">
                Premium UX Systems
              </div>

            </div>

          </div>

        </Card>

      </Container>

    </section>
  );
};

export default ProductSpotlight;