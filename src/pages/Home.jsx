import React from "react";

import HeroSection from "../components/sections/HeroSection";
import CompanyIntroSection from "../components/sections/CompanyIntroSection";
import ServicesSection from "../components/sections/ServicesSection";
import ProductSpotlight from "../components/sections/ProductSpotlight";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import StatsSection from "../components/sections/StatsSection";
import CareersSection from "../components/sections/CareersSection";
import BlogPreviewSection from "../components/sections/BlogPreviewSection";
import FinalCTASection from "../components/sections/FinalCTASection";

import "../styles/home.css";

const Home = () => {
  return (
    <>

      <HeroSection />

      <CompanyIntroSection />

      <ServicesSection />

      <ProductSpotlight />

      <WhyChooseUs />

      <StatsSection />

      <CareersSection />

      <BlogPreviewSection />

      <FinalCTASection />

    </>
  );
};

export default Home;