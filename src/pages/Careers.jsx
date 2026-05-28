import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Grid from "../components/ui/Grid";
import Button from "../components/ui/Button";

import careers from "../data/careers";

import "../styles/careers.css";

const Careers = () => {
  return (
    <div className="careers-page">

      <section className="careers-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="Careers & Internships"
            title="Grow With A Modern Technology Company"
            description="Work on premium digital products and startup-oriented web experiences."
          />

        </Container>

      </section>

      <section className="roles-section">

        <Container>

          <Grid columns={3}>

            {careers.map((career) => (

              <Card key={career.id}>

                <span className="career-type">
                  {career.type}
                </span>

                <h3>
                  {career.role}
                </h3>

                <p>
                  {career.description}
                </p>

                <small>
                  {career.location}
                </small>

                <Button variant="primary">
                  Apply Now
                </Button>

              </Card>

            ))}

          </Grid>

        </Container>

      </section>

    </div>
  );
};

export default Careers;