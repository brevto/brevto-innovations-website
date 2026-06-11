import React from "react";

import Container from "../layout/Container";

import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";

const CareersSection = () => {
  return (
    <section className="careers-section">

      <Container>

        <div className="careers-content">

          <div>

            <SectionHeading
              tag="CAREERS"
              title="Build the Future With Us"
              description="We're building an environment where learners, creators, developers, and innovators can contribute, grow, and create meaningful technology."
            />

          </div>

          <Button variant="primary">
            View Opportunities
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default CareersSection;