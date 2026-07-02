import React from "react";

import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";

import legal from "../data/legal";

import "../styles/legal.css";

const Legal = () => {
  const isLoading = usePageSkeleton();

  const sections = [
    {
      title: "Privacy Policy",
      content: legal.privacyPolicy,
      linkTo: "/privacy-policy",
    },
    {
      title: "Terms of Use",
      content: legal.termsOfService,
      linkTo: "/terms-of-use",
    },
    {
      title: "Cookie Policy",
      content: legal.cookiePolicy,
      linkTo: "/cookie-policy",
    },
    {
      title: "Data Security",
      content: legal.dataSecurity,
      linkTo: "/data-security-policy",
    },
    {
      title: "Intellectual Property",
      content: legal.intellectualProperty,
      linkTo: "/intellectual-property-policy",
    },


  ];

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
            {sections.map((section) => (
              <Card className="legal-accordion-card" key={section.title}>
                {section.linkTo ? (
                  <>
                    <a
                      className="legal-accordion-header legal-accordion-link-wrapper"
                      href={section.linkTo}
                    >
                      <h3>{section.title}</h3>

                      <span className="legal-accordion-arrow">›</span>
                    </a>

                    <div className="legal-accordion-body open"></div>
                  </>
                ) : (
                  <>
                    <div className="legal-accordion-header">
                      <h3>{section.title}</h3>
                      <span className="legal-accordion-arrow">›</span>
                    </div>

                    <div className="legal-accordion-body open">
                      <p>{section.content}</p>
                    </div>
                  </>
                )}

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