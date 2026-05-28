import React from "react";

import Container from "../layout/Container";

import Button from "../ui/Button";

const ContactCTASection = () => {
  return (
    <section className="contact-cta-section">

      <Container>

        <div className="contact-cta-content">

          <h2>
            Ready To Start Your Project?
          </h2>

          <p>
            Connect with Brevto Innovations Pvt Ltd
            for startup websites, digital products,
            and premium technology experiences.
          </p>

          <Button variant="primary">
            Contact Now
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default ContactCTASection;