import React from "react";

const Badge = ({ children }) => {
  return (
    <span className="ui-badge">
      {children}
    </span>
  );
};

export default Badge;