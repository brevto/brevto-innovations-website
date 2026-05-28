import React from "react";

const Card = ({
  children,
  className = "",
  hover = true,
}) => {
  return (
    <div
      className={`
        ui-card
        ${hover ? "hover-card" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Card;