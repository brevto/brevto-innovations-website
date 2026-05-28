import React from "react";

const Grid = ({
  children,
  columns = 3,
  className = "",
}) => {
  return (
    <div
      className={`
        ui-grid
        columns-${columns}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Grid;