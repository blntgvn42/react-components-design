import React from "react";
import "./Button.scoped.scss";

function Button() {
  const colors = [
    "blue",
    "brown",
    "cyan",
    "green",
    "grey",
    "indigo",
    "olive",
    "orange",
    "pink",
    "purple",
    "red",
    "teal",
    "violet",
    "yellow",
  ];

  return (
    <div className="button">
      <div>Normal Button</div>
      <div className="button__normal">
        {colors.map((color) => (
          <button key={color} className={`button__${color}`}>
            {color}
          </button>
        ))}
      </div>
      <div>Outline Button</div>
      <div className="button__outlined">
        {colors.map((color) => (
          <button key={color} className={`button__${color} outlined`}>
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}
export default Button;
