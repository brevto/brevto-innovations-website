import React from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import FinalCTASection from "../components/sections/FinalCTASection";

import AboutHeroSection from "../components/sections/about/AboutHeroSection";
import MissionVisionValuesSection from "../components/sections/about/MissionVisionValuesSection";
import CompanyPrinciplesSection from "../components/sections/about/CompanyPrinciplesSection";
import FoundersSection from "../components/sections/about/FoundersSection";

import "../styles/about.css";

const About = () => {
  const isLoading = usePageSkeleton();

  if (isLoading) return <PageSkeleton variant="default" />;

  return (
    <div className="about-page">

      <AboutHeroSection />

      <MissionVisionValuesSection />

      <CompanyPrinciplesSection />

      <FoundersSection />

      <FinalCTASection className="bw-cta" />
      
    </div>
  );
};

export default About;