import React from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import HeroSection from "../components/sections/home/HeroSection";
import CompanyIntroSection from "../components/sections/home/CompanyIntroSection";
import ServicesSection from "../components/sections/home/ServicesSection";
import ProductSpotlight from "../components/sections/products & Services/ProductSpotlight";
import WhyChooseUs from "../components/sections/home/WhyChooseUs";
import CareersSection from "../components/sections/CareersSection";
import FinalCTASection from "../components/sections/FinalCTASection";

import "../styles/home.css";

const Home = () => {
  const isLoading = usePageSkeleton();

  if (isLoading) return <PageSkeleton variant="default" />;

  return (
    <>

      <HeroSection />

      <CompanyIntroSection />

      <ServicesSection />

      {/* <ProductSpotlight /> */}

      <WhyChooseUs />

      <CareersSection />

      <FinalCTASection />

    </>
  );
};

export default Home;