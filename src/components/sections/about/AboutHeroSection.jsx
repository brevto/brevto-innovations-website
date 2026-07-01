import React from "react";

import Container from "../../layout/Container";

import company from "../../../data/company";

import "../../../styles/aboutHeroSection.css";

const AboutHeroSection = () => {
  return (
    <section className="about-hero-section">

      <Container>

        <div className="about-hero-content">

          <h1 className="about-hero-title">
            <span className="hero-filled-text">Building</span>
            <span className="outline-word">
              Innovation
            </span>
            <span className="hero-filled-text">Through Technology</span>
          </h1>

          <p className="about-hero-description">
            {company.description}
          </p>

        </div>

      </Container>

    </section>
  );
};

export default AboutHeroSection;