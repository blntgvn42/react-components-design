import React from "react";
import { Link } from "react-router-dom";
import "./Header.scoped.scss";

function HeaderMenuItem({ to, title }) {
  return (
    <Link className="header--link" to={to}>
      {title}
    </Link>
  );
}

export default HeaderMenuItem;
