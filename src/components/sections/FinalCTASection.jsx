import React from "react";

import Container from "../layout/Container";

import Button from "../ui/Button";

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">

      <Container>

        <div className="final-cta-card">

          <h2>
            Let’s Build Something Exceptional
          </h2>

          <p>
            Whether you're launching a startup,
            building a product,
            or scaling your digital presence —
            Brevto Innovations Pvt Ltd helps transform
            ideas into premium experiences.
          </p>

          <Button variant="primary">
            Contact Us
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default FinalCTASection;