import React from "react";

import Container from "../layout/Container";

import Grid from "../ui/Grid";
import StatCard from "../ui/StatCard";

const StatsSection = () => {
  return (
    <section className="stats-section">

      <Container>

        <Grid columns={4}>

          <StatCard
            number="10+"
            label="Projects"
          />

          <StatCard
            number="5+"
            label="Products"
          />

          <StatCard
            number="100%"
            label="Modern Architecture"
          />

          <StatCard
            number="24/7"
            label="Innovation Mindset"
          />

        </Grid>

      </Container>

    </section>
  );
};

export default StatsSection;