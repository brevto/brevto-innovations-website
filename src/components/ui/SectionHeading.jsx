import React from "react";

const SectionHeading = ({
  tag,
  title,
  description,
  center = false,
}) => {
  return (
    <div
      className={`
        section-heading
        ${center ? "center" : ""}
      `}
    >

      {tag && (
        <p className="section-tag">
          {tag}
        </p>
      )}

      <h2>{title}</h2>

      {description && (
        <p className="section-description">
          {description}
        </p>
      )}

    </div>
  );
};

export default SectionHeading;