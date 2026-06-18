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
            Building
            <span className="outline-word">
              Innovation
            </span>
            Through Technology
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