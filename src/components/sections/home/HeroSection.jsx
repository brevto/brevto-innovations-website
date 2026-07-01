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
            {/* <span className="outline-text">B</span> */}
            <span className="hero-filled-text">Building</span>{" "}
            {/* <span className="outline-text">D</span> */}
            <span className="hero-filled-text">Digital</span>{" "}
            {/* <span className="outline-text">P</span> */}
            <span className="hero-filled-text">Products</span>{" "}
            <br />
            <span className="signature-text">That Move Ideas Forward</span>
          </h1>

          <p>
            Brevto Innovations Pvt Ltd builds modern digital products and scalable web experiences. We combine product thinking, design, and engineering to turn ideas into impact.
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