import React, { useEffect } from "react";
import Container from "../../layout/Container";
import "../../../styles/CompanyIntroSection.css";

const features = [
  {
    icon: "📦",
    title: "Product Development",
    desc: "Building digital products with a focus on usability, scalability, and sustainable growth.",
  },
  {
    icon: "🌐",
    title: "Modern Web Experiences",
    desc: "Creating websites and web applications that balance performance, branding, and user experience.",
  },
  {
    icon: "🚀",
    title: "Startup Enablement",
    desc: "Helping startups establish a professional digital presence and launch with confidence.",
  },
  {
    icon: "💡",
    title: "Innovation-Led Execution",
    desc: "Approaching every project with curiosity, adaptability, and a commitment to continuous improvement.",
  },
];

const CompanyIntroSection = () => {

  
useEffect(() => {
  document.documentElement.style.setProperty(
    "--dot-fade-1",
    `${(1.4 + Math.random() * 0.5).toFixed(2)}px`
  );

  document.documentElement.style.setProperty(
    "--dot-fade-2",
    `${(1.5 + Math.random() * 0.6).toFixed(2)}px`
  );

  document.documentElement.style.setProperty(
    "--dot-fade-3",
    `${(1.8 + Math.random() * 0.8).toFixed(2)}px`
  );
}, []);

  return (
    <section className="company-intro-section">
      <Container>
        <div className="company-wrapper">

          <div className="company-dot-pattern"></div>

          <div className="company-header">

            <span className="company-tag">
              WHO WE ARE
            </span>

            <h2 className="company-title">
              Technology Company.
              <br />
              Product Builders.
              <br />
              <span>Problem Solvers.</span>
            </h2>

            <p className="company-description">
              Our work spans product development, web experiences,
              digital platforms, and innovation-led solutions
              designed for modern users and growing organizations.
            </p>

          </div>

          <div className="divider"></div>

          <div className="company-grid">

            {features.map((item, index) => (
              <div key={index} className="feature-card">

                <div className="feature-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <div className="card-line"></div>

                <p>{item.desc}</p>

                <button className="arrow-btn">
                  →
                </button>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default CompanyIntroSection;