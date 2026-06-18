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
            Meet The Founders
          </h2>

        </div>

        <div className="founders-grid">

          {founders.map((founder, index) => (
            <article
              className="founder-card"
              key={index}
            >
              <img
                src={founder.image}
                alt={founder.name}
              />

              <h3>{founder.name}</h3>

              <span>
                {founder.role}
              </span>

              <p>
                {founder.bio}
              </p>

              <div className="founder-socials">

                <a href={founder.linkedin}>
                  <FaLinkedin />
                </a>

                <a href={founder.twitter}>
                  <FaXTwitter />
                </a>

                <a href={founder.github}>
                  <FaGithub />
                </a>

              </div>

            </article>
          ))}

        </div>

      </Container>

    </section>
  );
};

export default FoundersSection;