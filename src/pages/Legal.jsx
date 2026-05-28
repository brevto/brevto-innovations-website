import React from "react";

import Container from "../components/layout/Container";

import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";

import legal from "../data/legal";

import "../styles/legal.css";

const Legal = () => {
  return (
    <div className="legal-page">

      <section className="legal-hero">

        <Container>

          <SectionHeading
            center={true}
            tag="Legal"
            title="Privacy, Terms & Policies"
            description="Important company-related legal information and usage terms."
          />

        </Container>

      </section>

      <section className="legal-content">

        <Container>

          <div className="legal-grid">

            <Card>

              <h3>
                Privacy Policy
              </h3>

              <p>
                {legal.privacyPolicy}
              </p>

            </Card>

            <Card>

              <h3>
                Terms of Service
              </h3>

              <p>
                {legal.termsOfService}
              </p>

            </Card>

            <Card>

              <h3>
                Company Notice
              </h3>

              <p>
                {legal.companyNotice}
              </p>

            </Card>

          </div>

        </Container>

      </section>

    </div>
  );
};

export default Legal;