import React from "react";
import ReactMarkdown from "react-markdown";


import PageSkeleton from "../components/ui/PageSkeleton";
import usePageSkeleton from "../hooks/usePageSkeleton";

import Container from "../components/layout/Container";
import SectionHeading from "../components/ui/SectionHeading";

import termsOfUseMarkdown from "../docs/terms-of-use.md?raw";

import "../styles/legal.css";
import "../styles/privacy-policy.css";

const TermsOfUse = () => {
  const isLoading = usePageSkeleton();

  return (
    <div className="terms-of-use-page">
      {isLoading && <PageSkeleton variant="default" />}
      {!isLoading && (
        <>
          <section className="terms-of-use-hero">
            <Container>
              <SectionHeading
                center={true}
                title={
                  <>
                    <span className="legal-hero-title-line">
                      <span className="outline-text">T</span>erms of Use
                    </span>
                  </>
                }
              />
            </Container>
          </section>

          <section className="terms-of-use-content">
            <Container>
              <div className="terms-of-use-markdown">
                <ReactMarkdown>{termsOfUseMarkdown}</ReactMarkdown>
              </div>
            </Container>

          </section>
        </>
      )}
    </div>
  );
};

export default TermsOfUse;

