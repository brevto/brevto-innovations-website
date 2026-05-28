import React from "react";

const SectionWrapper = ({
  children,
  className = "",
}) => {
  return (
    <section className={`section-wrapper ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;