import React from "react";
import Button from "./Button";

const JobModal = ({ open, onClose, job }) => {
  if (!open || !job) return null;

  const handleApply = () => {
    const subject = encodeURIComponent(
      `Application for ${job.role}`
    );

    const body = encodeURIComponent(
      `Hello,

I'd like to apply for the ${job.role} position.

Please find my application attached.

Regards,`
    );

    window.location.href = `mailto:careers@brevto.com?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="job-modal-overlay"
      onClick={onClose}
    >
      <div
        className="job-modal"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="job-modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {/* HEADER */}
        <div className="job-modal-header">

          <h2 className="job-modal-title">
            {job.role}
          </h2>

          <div className="job-modal-meta">

            <span className="job-tag">
              {job.department}
            </span>

            <span className="job-tag">
              {job.type}
            </span>

            <span className="job-tag">
              {job.location}
            </span>

            {job.remote && (
              <span className="job-tag">
                Remote
              </span>
            )}

          </div>

        </div>

        {/* QUICK INFO */}
        <div className="job-overview-grid">

          <div className="overview-item">
            <span>Experience</span>
            <strong>{job.experience}</strong>
          </div>

          <div className="overview-item">
            <span>Duration</span>
            <strong>{job.duration}</strong>
          </div>

          <div className="overview-item">
            <span>Openings</span>
            <strong>{job.openings}</strong>
          </div>

          <div className="overview-item">
            <span>Compensation</span>
            <strong>{job.stipend}</strong>
          </div>

          <div className="overview-item">
            <span>Apply Before</span>
            <strong>
              {job.applicationDeadline}
            </strong>
          </div>

          <div className="overview-item">
            <span>Response Time</span>
            <strong>
              {job.averageResponseTime}
            </strong>
          </div>

        </div>

        {/* CONTENT */}
        <div className="job-modal-content">

          {/* ABOUT ROLE */}
          <section className="job-section">

            <h4>About The Role</h4>

            <p>{job.description}</p>

          </section>

          {/* PROJECTS */}
          {job.projects?.length > 0 && (
            <section className="job-section">

              <h4>What You'll Work On</h4>

              <ul>
                {job.projects.map((project, index) => (
                  <li key={index}>
                    {project}
                  </li>
                ))}
              </ul>

            </section>
          )}

          {/* RESPONSIBILITIES */}
          {job.responsibilities?.length > 0 && (
            <section className="job-section">

              <h4>Responsibilities</h4>

              <ul>
                {job.responsibilities.map((item, index) => (
                  <li key={index}>
                    {item}
                  </li>
                ))}
              </ul>

            </section>
          )}

          {/* REQUIRED */}
          {job.requiredQualifications?.length > 0 && (
            <section className="job-section">

              <h4>Required Qualifications</h4>

              <ul>
                {job.requiredQualifications.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}

          {/* PREFERRED */}
          {job.preferredQualifications?.length > 0 && (
            <section className="job-section">

              <h4>Preferred Qualifications</h4>

              <ul>
                {job.preferredQualifications.map(
                  (item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}

          {/* TECH STACK */}
          {job.techStack?.length > 0 && (
            <section className="job-section">

              <h4>Tools & Technologies</h4>

              <div className="job-tech-stack">

                {job.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="job-tech-badge"
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </section>
          )}

          {/* BENEFITS */}
          {job.benefits?.length > 0 && (
            <section className="job-section">

              <h4>What You'll Gain</h4>

              <ul>
                {job.benefits.map((benefit, index) => (
                  <li key={index}>
                    {benefit}
                  </li>
                ))}
              </ul>

            </section>
          )}

          {/* PROCESS */}
          {job.hiringProcess?.length > 0 && (
            <section className="job-section">

              <h4>Hiring Process</h4>

              <ul>
                {job.hiringProcess.map(
                  (step, index) => (
                    <li key={index}>
                      {step}
                    </li>
                  )
                )}
              </ul>

            </section>
          )}

          {/* COMPANY */}
          {job.about && (
            <section className="job-section">

              <h4>About Brevto</h4>

              <p>{job.about}</p>

            </section>
          )}

        </div>

        {/* FOOTER */}
        <div className="job-modal-footer">

          <div className="job-footer-info">

            <span>
              Applications reviewed within{" "}
              {job.averageResponseTime}
            </span>

          </div>

          <Button
            variant="primary"
            onClick={handleApply}
          >
            Apply Now
          </Button>

        </div>

      </div>
    </div>
  );
};

export default JobModal;