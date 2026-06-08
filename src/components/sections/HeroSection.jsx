import React from "react";

import Container from "../layout/Container";

import Button from "../ui/Button";
import Badge from "../ui/Badge";
import GradientText from "../ui/GradientText";
import GlowOrb from "../ui/GlowOrb";
import DotsBackground from "../ui/DotsBackground";

const HeroSection = () => {
  return (
    <section className="hero-section">

      <DotsBackground />

      <GlowOrb className="hero-glow-1" />
      <GlowOrb className="hero-glow-2" />


      <Container>

        <div className="hero-content">

          {/* <Badge>
            Brevto Innovations Pvt Ltd
          </Badge> */}

          <h1>
            Building Modern
            <GradientText>
              {" "}Digital Products{" "}
            </GradientText>
            & Startup Experiences
          </h1>

          <p>
            Premium technology company focused on
            scalable digital products, startup websites,
            modern web experiences, and innovation-led execution.
          </p>

          <div className="hero-buttons">

            <Button variant="primary">
              Explore Services
            </Button>

            <Button variant="secondary">
              View Products
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default HeroSection;