import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import "./Header.scoped.scss";

function HeaderAuth() {
  const pages = [
    { to: "/header", title: "sign in" },
    { to: "/header", title: "sign up" },
  ];
  return (
    <ul className="header__auth">
      {pages.map((page) => (
        <li className="header__auth--item">
          <HeaderMenuItem to={page.to} title={page.title} />
        </li>
      ))}
    </ul>
  );
}

export default HeaderAuth;
