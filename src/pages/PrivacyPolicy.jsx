import React from "react";
import ReactMarkdown from "react-markdown";


import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";
import SectionHeading from "../components/ui/SectionHeading";

import privacyPolicyMarkdown from "../docs/privacy-policy.md?raw";

import "../styles/legal.css";
import "../styles/privacy-policy.css";

const PrivacyPolicy = () => {
  const isLoading = usePageSkeleton();

  return (
    <div className="privacy-policy-page">
      {isLoading && <PageSkeleton variant="default" />}
      {!isLoading && (
        <>
          <section className="privacy-policy-hero">
            <Container>
              <SectionHeading
                center={true}
                title={
                  <>
                    <span className="legal-hero-title-line">
                      <span className="outline-text">P</span>rivacy Policy
                    </span>
                  </>
                }
              />
            </Container>
          </section>

          <section className="privacy-policy-content">
            <Container>
              <div className="privacy-policy-markdown">
                <ReactMarkdown>{privacyPolicyMarkdown}</ReactMarkdown>
              </div>
            </Container>
          </section>
        </>
      )}
    </div>
  );
};

export default PrivacyPolicy;

