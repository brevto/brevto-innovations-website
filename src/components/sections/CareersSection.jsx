import React from "react";

import Container from "../layout/Container";
import Button from "../ui/Button";

import "../../styles/CareersSection.css";

const CareersSection = () => {
  return (
    <section className="careers-section">

      <Container>

        <div className="careers-wrapper">

          <div className="careers-content">

            {/* LEFT SIDE */}

            <div className="careers-left">

              <span className="careers-tag">
                CAREERS
              </span>

              <h2 className="careers-title">
                Build the Future{" "}
                <span>
                  With Us
                </span>
              </h2>

              <p className="careers-description">
                We're building an environment where learners,
                creators, developers, and innovators can contribute,
                grow, and create meaningful technology.
              </p>

              <div className="careers-button">
                <Button variant="primary">
                  View Opportunities
                </Button>
              </div>

            </div>

            {/* RIGHT SIDE */}

            <div className="careers-right">

              <img
                src="/images/home/careers-image.png"
                alt="Careers"
                className="careers-image"
              />

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default CareersSection;