import React from "react";
import Container from "../layout/Container";
import "../../styles/ServicesSection.css";

const services = [
  {
    number: "01",
    title: "Website Design & Development",
    desc: "Professional websites built for startups, businesses, and emerging brands with modern design systems and responsive experiences.",
  },
  {
    number: "02",
    title: "Frontend Engineering",
    desc: "Fast, scalable, and maintainable interfaces engineered using modern development practices and performance-focused architecture.",
  },
  {
    number: "03",
    title: "Product Development",
    desc: "From concept validation to functional digital products, we help transform ideas into usable technology solutions.",
  },
  {
    number: "04",
    title: "Landing Pages & Launch Experiences",
    desc: "Purpose-built pages and digital experiences designed to support product launches, campaigns, and business growth.",
  },
];

const ServicesSection = () => {
  return (
    <section className="services-section">
      <Container>
        <div className="services-wrapper">

          {/* HERO SECTION */}

          <div className="services-hero">

            {/* LEFT CONTENT */}

            <div className="services-content">

              <span className="services-tag">
                SERVICES
              </span>

              <h2 className="services-title">
                Solutions Designed for Modern
                <br />
                <span>Businesses & Startups</span>
              </h2>

              <p className="services-description">
                Technology experiences that help businesses
                communicate, grow and deliver value.
              </p>

            </div>

            {/* RIGHT VISUAL */}

            <div className="services-visual">

              {/* HOLOGRAPHIC FLOOR */}

              <div className="services-floor"></div>

              {/* FLOOR GLOW */}

              <div className="services-floor-glow"></div>

              {/* IMAGE HOLDER */}

              <div className="services-blob">

                <div className="services-image-wrapper">

                  <img
                    src="/images/services-visual.png"
                    alt="Services Visual"
                    className="services-visual-image"
                  />

                </div>

              </div>

            </div>

          </div>

          {/* DIVIDER */}

          <div className="services-divider"></div>

          {/* SERVICES GRID */}

          <div className="services-grid">

            {services.map((service) => (
              <div
                key={service.number}
                className="service-card"
              >

                <div className="service-header">

                  <div className="service-number">
                    {service.number}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                </div>

                <div className="service-line"></div>

                <p>
                  {service.desc}
                </p>

              </div>
            ))}

          </div>

        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;