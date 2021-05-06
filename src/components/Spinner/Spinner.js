import React from "react";
import "./Spinner.scoped.scss";

function Spinner() {
  const spinnerTypes = [
    "spin",
    "spin-dotted",
    "spin-double",
    "ease-spin",
    "radar",
  ];

  return (
    <div className="spinner">
      {spinnerTypes.map((spinner) => (
        <div className={`spinner--${spinner}`} />
      ))}
    </div>
  );
}

export default Spinner;
