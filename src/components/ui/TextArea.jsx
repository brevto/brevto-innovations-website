import React from "react";

const TextArea = ({
  placeholder,
  value,
  onChange,
  rows = 6,
  name,
  id,
  required = false,
}) => {
  return (
    <textarea
      className="ui-textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      name={name}
      id={id}
      required={required}
    />
  );
};

export default TextArea;