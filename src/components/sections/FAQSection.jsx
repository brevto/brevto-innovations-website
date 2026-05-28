import React from "react";

import Container from "../layout/Container";

import Card from "../ui/Card";
import SectionHeading from "../ui/SectionHeading";

const FAQSection = () => {
  return (
    <section className="faq-section">

      <Container>

        <SectionHeading
          center={true}
          tag="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="faq-grid">

          <Card>

            <h3>
              What services does the company offer?
            </h3>

            <p>
              Startup website development,
              digital products,
              frontend systems,
              and premium web experiences.
            </p>

          </Card>

          <Card>

            <h3>
              Is Brevto a product or the company?
            </h3>

            <p>
              Brevto is a flagship product
              under Brevto Innovations Pvt Ltd.
            </p>

          </Card>

          <Card>

            <h3>
              Do you work with startups?
            </h3>

            <p>
              Yes. The company is focused heavily
              on startup-oriented execution.
            </p>

          </Card>

        </div>

      </Container>

    </section>
  );
};

export default FAQSection;