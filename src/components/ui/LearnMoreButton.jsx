import React from "react";

const LearnMoreButton = ({ label = "Learn more", onClick }) => {
  return (
    <button className="learn-more-btn" onClick={onClick} aria-label={label}>
      {label}
    </button>
  );
};

export default LearnMoreButton;
