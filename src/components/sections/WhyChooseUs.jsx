import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <Container>

        <SectionHeading
          tag="Why Choose Us"
          title="Execution Built Around Innovation"
        />

        <Grid columns={4}>

          <Card>

            <h3>Premium UI/UX</h3>

            <p>
              Polished design systems with
              immersive interaction experiences.
            </p>

          </Card>

          <Card>

            <h3>Scalable Systems</h3>

            <p>
              Modern frontend architecture
              built for long-term scalability.
            </p>

          </Card>

          <Card>

            <h3>Startup Focus</h3>

            <p>
              Technology execution tailored
              for startups and emerging brands.
            </p>

          </Card>

          <Card>

            <h3>Product Thinking</h3>

            <p>
              Strategy-driven development
              balancing technology and branding.
            </p>

          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default WhyChooseUs;