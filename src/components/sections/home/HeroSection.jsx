import React from "react";
import { useNavigate } from "react-router-dom";

import Container from "../../layout/Container";

import Button from "../../ui/Button";
import Badge from "../../ui/Badge";
import GradientText from "../../ui/GradientText";
import GlowOrb from "../../ui/GlowOrb";
import DotsBackground from "../../ui/DotsBackground";

const HeroSection = () => {
  const navigate = useNavigate();

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
            Building Digital Products <GradientText>{" "}That Move Ideas Forward{" "}</GradientText>
          </h1>

          <p>
            Brevto Innovations Pvt Ltd is a technology company focused on building modern digital products, scalable web experiences, and startup-ready technology solutions. We combine product thinking, design, and engineering to transform ideas into meaningful digital experiences.
          </p>


          <div className="hero-buttons">

            <Button variant="primary" onClick={() => navigate("/products-services")}> 
              Explore Services
            </Button>

            <Button variant="secondary" onClick={() => navigate("/products-services")}>
              Discover Products
            </Button>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default HeroSection;