import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import Grid from "../ui/Grid";
import SectionHeading from "../ui/SectionHeading";

const ServicesSection = () => {
  return (
    <section className="services-section">

      <Container>

        <SectionHeading
          center={true}
          tag="Services"
          title="Designed for Modern Startups"
          description="Technology and design services built for ambitious startups and digital brands."
        />

        <Grid columns={3}>

          <Card>

            <div className="service-number">
              01
            </div>

            <h3>Website Design</h3>

            <p>
              Premium startup and business websites
              with immersive UI systems.
            </p>

          </Card>

          <Card>

            <div className="service-number">
              02
            </div>

            <h3>Frontend Development</h3>

            <p>
              Responsive scalable frontend architecture
              optimized for performance.
            </p>

          </Card>

          <Card>

            <div className="service-number">
              03
            </div>

            <h3>Launch Experiences</h3>

            <p>
              High-conversion landing experiences
              built for product visibility and growth.
            </p>

          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default ServicesSection;