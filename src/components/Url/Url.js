import React from "react";
import { Link } from "react-router-dom";
import "./Url.scoped.scss";

function Url() {
  const links = [
    { class: "link--underline", title: "Underline" },
    { class: "link--double-line", title: "Double Line" },
    { class: "link--highlight", title: "HighLight" },
    { class: "link--fill-up", title: "Fill Up" },
    { class: "link--fill-down", title: "Fill Down" },
    { class: "link--bounce-up", title: "Bounce Up" },
    { class: "link--bounce-down", title: "Bounce Down" },
  ];
  return (
    <div className="link">
      {links.map((link) => (
        <Link to="/url" className={link.class}>
          {link.title}
        </Link>
      ))}
    </div>
  );
}

export default Url;
