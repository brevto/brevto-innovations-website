import React from "react";
import { Link } from "react-router-dom";

const CTAButton = ({
  to = "/contact",
  children,
}) => {
  return (
    <Link to={to}>
      <button className="cta-button">
        {children}
      </button>
    </Link>
  );
};

export default CTAButton;