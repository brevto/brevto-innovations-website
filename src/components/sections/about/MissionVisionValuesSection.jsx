import React from "react";

import Container from "../../layout/Container";

import company from "../../../data/company";

import "../../../styles/missionVisionValues.css";

const MissionVisionValuesSection = () => {
  return (
    <section className="mvv-section">

      <Container>

        <div className="mvv-grid">

          <article className="mvv-card">

            <h3 className="mvv-title">
              <span>OUR</span>
              MISSION
            </h3>

            <p>
              {company.mission}
            </p>

            {/* IMAGE */}
            <img
              src="/images/about/our-mission.png"
              alt="Mission"
              className="mvv-image"
            />

          </article>

          <article className="mvv-card">

            <h3 className="mvv-title">
              <span>OUR</span>
              VISION
            </h3>

            <p>
              {company.vision}
            </p>

            {/* IMAGE */}
            <img
              src="/images/about/our-vision.png"
              alt="Vision"
              className="mvv-image"
            />

          </article>

          <article className="mvv-card">

            <h3 className="mvv-title">
              <span>OUR</span>
              VALUES
            </h3>

            <p>
              Innovation, Quality, Ownership,
              Excellence and Long-Term Thinking.
            </p>

            {/* IMAGE */}
            <img
              src="/images/about/our-values.png"
              alt="Values"
              className="mvv-image"
            />

          </article>

        </div>

      </Container>

    </section>
  );
};

export default MissionVisionValuesSection;