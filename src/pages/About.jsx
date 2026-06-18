import React from "react";

import FinalCTASection from "../components/sections/FinalCTASection";

import AboutHeroSection from "../components/sections/about/AboutHeroSection";
import MissionVisionValuesSection from "../components/sections/about/MissionVisionValuesSection";
import CompanyPrinciplesSection from "../components/sections/about/CompanyPrinciplesSection";
import FoundersSection from "../components/sections/about/FoundersSection";

import "../styles/about.css";

const About = () => {
  return (
    <div className="about-page">

      <AboutHeroSection />

      <MissionVisionValuesSection />

      <CompanyPrinciplesSection />

      <FoundersSection />

      <FinalCTASection />

    </div>
  );
};

export default About;