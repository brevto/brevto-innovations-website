import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "../layout/Container";
import "../../styles/FinalCTASection.css";

import Button from "../ui/Button";

const FinalCTASection = ({ className = "" }) => {
  const navigate = useNavigate();

  return (
    <section className="final-cta-section">

      <Container>

        <div className={`final-cta-card ${className}`}>

          {/* LEFT DOTS */}
          <div className="cta-dots cta-dots-left"></div>

          {/* RIGHT DOTS */}
          <div className="cta-dots cta-dots-right"></div>


          <h2>
            Let's <span className="cta-outlined">Build</span> What's Next
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

          <Button variant="primary" onClick={() => navigate("/contact")}>
            Start a Conversation
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default FinalCTASection;