import React from "react";
import Container from "../../layout/Container";
import "../../../styles/companyPrinciplesSection.css";

const principles = [
  {
    title: "Innovation",
    description:
      "Creating modern scalable solutions with product-first thinking.",
  },
  {
    title: "Premium Design",
    description:
      "Building polished user experiences with cinematic visual systems.",
  },
  {
    title: "Startup Execution",
    description:
      "Helping startups launch strong digital foundations and products.",
  },
];

const CompanyPrinciplesSection = () => {
  return (
    <section className="principles-section">
      <Container>
        <div className="principles-header">
          <span className="principles-tag">Principles</span>
          <h2>
            <span className="principles-main-text">
              What Drives Our
            </span>{" "}
            <span className="text-outlined">
              Company
            </span>
          </h2>
        </div>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-card-inner">
                <span className="principle-number">0{index + 1}</span>

                <h3 className="principle-card-heading">
                  {["Innovation", "Premium Design", "Startup Execution"].includes(
                    item.title
                  ) ? (
                    <>
                      <span className="principle-heading-first-letter">
                        {item.title.slice(0, 1)}
                      </span>
                      {item.title.slice(1)}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>

                <div className="principle-divider"></div>

                <p className="principle-description">
                  {item.description}
                </p>

                <div className="card-corner-rings"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyPrinciplesSection;