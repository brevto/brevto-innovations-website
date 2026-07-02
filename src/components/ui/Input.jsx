import React from "react";

const Input = ({
  type = "text",
  placeholder,
  value,
  onChange,
  name,
  id,
  required = false,
}) => {
  return (
    <input
      className="ui-input"
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      required={required}
    />
  );
};

export default Input;