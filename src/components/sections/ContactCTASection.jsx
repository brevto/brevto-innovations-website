import React from "react";

const scrollToFooter = () => {
  const footer = document.querySelector("footer");

  if (footer) {
    footer.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

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

          <Button variant="primary" onClick={scrollToFooter}>
            Contact Now
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default ContactCTASection;