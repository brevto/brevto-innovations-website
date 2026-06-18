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
            What Drives Our <span className="text-outlined">Company</span>
          </h2>
        </div>

        <div className="principles-grid">
          {principles.map((item, index) => (
            <div className="principle-card" key={index}>
              <div className="principle-card-inner">
                <span className="principle-number text-outlined">
                  0{index + 1}
                </span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CompanyPrinciplesSection;