import React from "react";

import Container from "../../layout/Container";
import Card from "../../ui/Card";
import Grid from "../../ui/Grid";
import "../../../styles/WhyChooseUs.css";

import {
  FiTarget,
  FiCpu,
  FiPenTool,
  FiTrendingUp,
  FiLayers,
  FiBox,
  FiCode,
  FiZap
} from "react-icons/fi";

const features = [
  {
    number: "01",
     icon: <FiTarget />,
    title: "Product-First Thinking",
    desc: "Every solution begins with understanding the problem before writing the code first.",
  },
  {
    number: "02",
    icon: <FiCpu />,
    title: "Modern Technology Stack",
    desc: "Built with modern technologies, scalable architectures, and proven development practices.",
  },
  {
    number: "03",
    icon: <FiPenTool />,
    title: "Design With Purpose",
    desc: "User experiences are crafted to be intuitive, accessible, and aligned with business goals.",
  },
  {
    number: "04",
    icon: <FiTrendingUp />,
    title: "Long-Term Perspective",
    desc: "We focus on creating systems that can evolve as products, and grow businesses.",
  },
  {
    number: "05",
    icon: <FiLayers />,
    title: "Projects Completed",
    desc: "Building solutions across websites, applications, and digital products.",
  },
  {
    number: "06",
    icon: <FiBox />,
    title: "Products & Initiatives",
    desc: "Exploring and developing technology-driven ideas and platforms.",
  },
  {
    number: "07",
    icon: <FiCode />,
    title: "Modern Development Practices",
    desc: "Focused on performance, maintainability, and scalable architecture.",
  },
  {
    number: "08",
    icon: <FiZap />,
    title: "Continuous Learning Culture",
    desc: "Committed to improvement, experimentation, and innovation.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">

      <Container>

        <div className="why-wrapper">

          <div className="why-decoration"></div>

          <div className="why-header-section">

            <span className="why-tag">
              WHY CHOOSE US
            </span>

            <h2 className="why-title">
              Why Organizations Work{" "}
              <span>
                With Us
              </span>
            </h2>

            <p className="why-description">
              We combine strategy, design, and technology to build solutions
              that drive real impact and long-term success.
            </p>

          </div>

          <div className="why-divider"></div>

          <Grid columns={4} className="why-grid">

            {features.map((item) => (

              <Card
                key={item.number}
                className="why-card"
              >

                <span className="why-watermark">
                  {item.number}
                </span>

                <div className="why-card-header">
                  <div className="why-icon">
                    {item.icon}
                  </div>

                  <h3>
                    {item.title}
                  </h3>
                </div>

                <div className="why-line"></div>

                <p>
                  {item.desc}
                </p>

              </Card>

            ))}

          </Grid>

        </div>

      </Container>

    </section>
  );
};

export default WhyChooseUs;