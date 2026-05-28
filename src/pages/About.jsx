import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Grid from "../components/ui/Grid";
import FinalCTASection from "../components/sections/FinalCTASection";

import company from "../data/company";

import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">

      <section className="about-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="About Us"
            title="Building Innovation Through Technology"
            description={company.description}
          />

        </Container>

      </section>

      <section className="about-story-section">

        <Container>

          <Grid columns={2}>

            <Card>

              <h3>Our Mission</h3>

              <p>
                {company.mission}
              </p>

            </Card>

            <Card>

              <h3>Our Vision</h3>

              <p>
                {company.vision}
              </p>

            </Card>

          </Grid>

        </Container>

      </section>

      <section className="about-values">

        <Container>

          <SectionHeading
            tag="Principles"
            title="What Drives Our Company"
          />

          <Grid columns={3}>

            <Card>

              <h3>Innovation</h3>

              <p>
                Creating modern scalable solutions
                with product-first thinking.
              </p>

            </Card>

            <Card>

              <h3>Premium Design</h3>

              <p>
                Building polished user experiences
                with cinematic visual systems.
              </p>

            </Card>

            <Card>

              <h3>Startup Execution</h3>

              <p>
                Helping startups launch strong
                digital foundations and products.
              </p>

            </Card>

          </Grid>

        </Container>

      </section>

      <FinalCTASection />

    </div>
  );
};

export default About;