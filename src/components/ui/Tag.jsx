import React from "react";

const Tag = ({ children, className = "" }) => {
  return (
    <span className={`ui-tag ${className}`.trim()}>
      {children}
    </span>
  );
};

export default Tag;