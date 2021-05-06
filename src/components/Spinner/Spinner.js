import React from "react";
import "./Spinner.scoped.scss";

function Spinner() {
  return (
    <div className="spinner">
      <div className="spinner--spin" />
      <div className="spinner--spin-dotted" />
      <div className="spinner--spin-double" />
      <div className="spinner--ease-spin" />
      <div className="spinner--radar" />
    </div>
  );
}

export default Spinner;
