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
              tag="Careers & Internships"
              title="Build Innovative Products With Us"
              description="Join a growing technology company focused on premium digital experiences and startup innovation."
            />

          </div>

          <Button variant="primary">
            Explore Opportunities
          </Button>

        </div>

      </Container>

    </section>
  );
};

export default CareersSection;