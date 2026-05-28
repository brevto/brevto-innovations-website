import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";

const CompanyIntroSection = () => {
  return (
    <section className="company-intro-section">

      <Container>

        <SectionHeading
          tag="Who We Are"
          title="Technology-Led Innovation Company"
          description="Building premium digital products and startup-focused technology experiences."
        />

        <Grid columns={3}>

          <Card>

            <h3>Digital Products</h3>

            <p>
              Modern scalable platforms built with
              premium product thinking and architecture.
            </p>

          </Card>

          <Card>

            <h3>Startup Websites</h3>

            <p>
              Brand-first website systems engineered
              for launch-ready startups and businesses.
            </p>

          </Card>

          <Card>

            <h3>Innovation Focus</h3>

            <p>
              Combining design, development,
              scalability, and startup execution.
            </p>

          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default CompanyIntroSection;