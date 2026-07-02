import React from "react";

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        ui-btn
        ${variant}
        ${size}
        ${fullWidth ? "full-width" : ""}
      `}
    >
      {children}
    </button>
  );
};

export default Button;