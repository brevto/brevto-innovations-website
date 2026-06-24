import React, { useMemo, useState } from "react";

import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import JobModal from "../components/ui/JobModal";

import careersData from "../data/careers";

import "../styles/careers.css";
import "../styles/jobModal.css";

const Careers = () => {
const [query, setQuery] = useState("");
const [selectedDepartment, setSelectedDepartment] = useState("All");
const [modalOpen, setModalOpen] = useState(false);
const [selectedJob, setSelectedJob] = useState(null);

const careers = careersData;

const departments = [
"All",
...new Set(careers.map((job) => job.department))
];

const filtered = useMemo(() => {
const q = query.trim().toLowerCase();


return careers.filter((career) => {
  const matchesDepartment =
    selectedDepartment === "All" ||
    career.department === selectedDepartment;

  const matchesSearch =
    !q ||
    career.role.toLowerCase().includes(q) ||
    career.description.toLowerCase().includes(q) ||
    career.department.toLowerCase().includes(q) ||
    career.techStack?.some((tech) =>
      tech.toLowerCase().includes(q)
    );

  return matchesDepartment && matchesSearch;
});


}, [careers, query, selectedDepartment]);

return ( <div className="careers-page">


  <section className="careers-hero">
    <Container>

      <div className="careers-hero-content">

        <h1 className="careers-title">
          <span className="careers-title-first-line">
            Come <span className="outline-text">build</span>
          </span>

          <br />

          <span className="careers-title-second-line">
            the <span className="outline-text">things</span>
          </span>

          <br />

          <span className="careers-title-third-line">
            we'll be <span className="outline-text">proud of</span>
          </span>
        </h1>

        <p className="careers-description">
          We're hiring designers, engineers and storytellers who can care about taste, time and trust. Small team, big stakes, real ownership. 
        </p>

      </div>

    </Container>
  </section>

  <section className="roles-section">
    <Container>

      <div className="jobs-grid">

        <aside className="jobs-left">

          <div className="search-box">
            <input
              type="search"
              placeholder="Search roles, skills, technologies..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div className="filters">

            <h4>2026 Internship Cohort</h4>

            <div className="internship-summary">

              <div className="summary-item">
                <span>Program</span>
                <strong>Remote Internship</strong>
              </div>

              <div className="summary-item">
                <span>Duration</span>
                <strong>3 Months</strong>
              </div>

              <div className="summary-item">
                <span>Projects</span>
                <strong>Live Client Work</strong>
              </div>

              <div className="summary-item">
                <span>Open Roles</span>
                <strong>{careers.length}</strong>
              </div>

            </div>

            <h4 style={{ marginTop: 28 }}>
              Teams
            </h4>

            <div className="department-filters">

              {departments.map((dept) => (
                <button
                  key={dept}
                  className={
                    selectedDepartment === dept
                      ? "department-pill active"
                      : "department-pill"
                  }
                  onClick={() =>
                    setSelectedDepartment(dept)
                  }
                >
                  {dept}
                </button>
              ))}

            </div>

          </div>

        </aside>

        <div className="jobs-right">

          {filtered.map((career) => (

            <div
              className="job-card"
              key={career.id}
            >

              <div className="job-card-row">

                <div className="job-main">

                  <div className="job-role-row">

                    <h3 className="job-role">
                      {career.role}
                    </h3>

                  </div>

                  <div className="job-meta">

                    <span>{career.department}</span>

                    <span>•</span>

                    <span>{career.duration}</span>

                  </div>


                </div>

                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedJob(career);
                    setModalOpen(true);
                  }}
                >
                  Explore Role
                </Button>

              </div>

              <p className="job-desc">
                {career.shortdescription}
              </p>

              <div className="job-tech-stack">

                {career.techStack
                  ?.slice(0, 5)
                  .map((tech) => (
                    <span
                      key={tech}
                      className="job-tech-badge"
                    >
                      {tech}
                    </span>
                  ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </Container>
  </section>

  <JobModal
    open={modalOpen}
    onClose={() => setModalOpen(false)}
    job={selectedJob}
  />

</div>


);
};

export default Careers;
