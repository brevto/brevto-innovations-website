import React, { useState } from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";

import legal from "../data/legal";

import "../styles/legal.css";

const Legal = () => {
  const isLoading = usePageSkeleton();
  const [openIndex, setOpenIndex] = useState(null);

  const sections = [
    {
      title: "Privacy Policy",
      content: legal.privacyPolicy,
    },
    {
      title: "Terms of Service",
      content: legal.termsOfService,
    },
    {
      title: "Cookie Policy",
      content: legal.cookiePolicy,
    },
    {
      title: "Data Security",
      content: legal.dataSecurity,
    },
    {
      title: "Intellectual Property",
      content: legal.intellectualProperty,
    },
    {
      title: "Disclaimer",
      content: legal.disclaimer,
    },
    {
      title: "Limitation of Liability",
      content: legal.limitationOfLiability,
    },
    {
      title: "Company Notice",
      content: legal.companyNotice,
    },
  ];

  const toggleSection = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="legal-page">
      {isLoading && <PageSkeleton variant="default" />}
      {!isLoading && (
        <>

      <section className="legal-hero">

        <Container>

          <SectionHeading
            center={true}
            title={
              <>
                <span className="legal-hero-title-line"><span className="outline-text">P</span>rivacy</span>
                <span className="legal-hero-title-line legal-hero-title-offset"><span className="outline-text">T</span>erms</span>
                <span className="legal-hero-title-line legal-hero-title-offset-large"><span className="outline-text">P</span>olicies</span>
              </>
            }
          />

        </Container>

      </section>

      <section className="legal-content">

        <Container>

          <div className="legal-accordion">
            {sections.map((section, index) => (
              <Card className={`legal-accordion-card ${openIndex === index ? "open" : ""}`} key={section.title}>
                <button
                  type="button"
                  className="legal-accordion-header"
                  onClick={() => toggleSection(index)}
                >
                  <h3>{section.title}</h3>
                  <span className={`legal-accordion-arrow ${openIndex === index ? "open" : ""}`}>
                    ›
                  </span>
                </button>

                <div className={`legal-accordion-body ${openIndex === index ? "open" : ""}`}>
                  <p>{section.content}</p>
                </div>
              </Card>
            ))}
          </div>

        </Container>

      </section>

        </>
      )}
    </div>
  );
};

export default Legal;