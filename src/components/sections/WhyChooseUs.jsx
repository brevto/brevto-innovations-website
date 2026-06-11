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
          tag="WHY CHOOSE US"
          title="Why Organizations Work With Brevto"
        />

        <Grid columns={4}>

          <Card>

            <h3>Product-First Thinking</h3>

            <p>
              Every solution begins with understanding the problem before writing the first line of code.
            </p>

          </Card>

          <Card>

            <h3>Modern Technology Stack</h3>

            <p>
              Built using contemporary technologies, scalable architectures, and industry-standard development practices.
            </p>

          </Card>

          <Card>

            <h3>Design With Purpose</h3>

            <p>
              User experiences are crafted to be intuitive, accessible, and aligned with business goals.
            </p>

          </Card>

          <Card>

            <h3>Long-Term Perspective</h3>

            <p>
              We focus on creating systems that can evolve as products, businesses, and audiences grow.
            </p>

          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default WhyChooseUs;