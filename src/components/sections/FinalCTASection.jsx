import React from "react";

import Container from "../layout/Container";
import "../../styles/FinalCTASection.css";

import Button from "../ui/Button";

const FinalCTASection = () => {
  return (
    <section className="final-cta-section">

      <Container>

        <div className="final-cta-card">

          {/* LEFT DOTS */}
          <div className="cta-dots cta-dots-left"></div>

          {/* RIGHT DOTS */}
          <div className="cta-dots cta-dots-right"></div>


          <h2>
            Let's Build What's Next
          </h2>

          <p>
            Whether you're launching a startup,
            developing a new product, or strengthening
            your digital presence, Brevto Innovations Pvt Ltd
            is ready to help transform ideas into practical,
            modern technology solutions.
          </p>

          <div className="cta-divider">
            <span></span>
          </div>

          <Button variant="primary">
            Start a Conversation
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default FinalCTASection;