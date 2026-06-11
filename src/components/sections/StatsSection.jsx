import React from "react";

import Container from "../layout/Container";

import Grid from "../ui/Grid";
import Card from "../ui/Card";

const StatsSection = () => {
  return (
    <section className="stats-section">

      <Container>

        <Grid columns={4}>

          <Card>
            <h3>Projects Completed</h3>
            <p>Building solutions across websites, applications, and digital products.</p>
          </Card>

          <Card>
            <h3>Products & Initiatives</h3>
            <p>Exploring and developing technology-driven ideas and platforms.</p>
          </Card>

          <Card>
            <h3>Modern Development Practices</h3>
            <p>Focused on performance, maintainability, and scalable architecture.</p>
          </Card>

          <Card>
            <h3>Continuous Learning Culture</h3>
            <p>Committed to improvement, experimentation, and innovation.</p>
          </Card>

        </Grid>

      </Container>

    </section>
  );
};

export default StatsSection;
