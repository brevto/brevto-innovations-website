import React from "react";

import Container from "../../layout/Container";
import founders from "../../../data/founders";

import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";

import "../../../styles/foundersSection.css";

const FoundersSection = () => {
  return (
    <section className="founders-section">
      <Container>
        <div className="founders-header">

          <span className="founders-tag">
            Leadership
          </span>

          <h2>
            <span className="founders-main-text">
              Meet The
            </span>{" "}
            <span className="founders-outlined">
              Founders
            </span>
          </h2>

          <p className="founders-subtitle">
            A team of builders, operators, and dreamers
            driven to create extraordinary digital experiences.
          </p>

        </div>

        <div className="founders-grid">

          {founders.map((founder, index) => (
            <article
              className="founder-card"
              key={index}
            >
              <div className="founder-image-wrapper">

                <div className="founder-glow"></div>

                <img
                  src={founder.image}
                  alt={founder.name}
                />

              </div>

              <div className="founder-content">

                <h3>{founder.name}</h3>

                <span className="founder-role">
                  {founder.role}
                </span>

                <div className="founder-divider"></div>

                <p>
                  {founder.bio}
                </p>

                <div className="founder-socials">

                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin />
                  </a>

                  <a
                    href={founder.twitter}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaXTwitter />
                  </a>

                  <a
                    href={founder.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaGithub />
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>
      </Container>
    </section>
  );
};

export default FoundersSection;