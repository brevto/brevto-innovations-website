import React from "react";

const TextArea = ({
  placeholder,
  value,
  onChange,
  rows = 6,
  name,
}) => {
  return (
    <textarea
      className="ui-textarea"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      rows={rows}
      name={name}
    />
  );
};

export default TextArea;