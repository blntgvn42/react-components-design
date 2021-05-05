import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import "./Header.scoped.scss";

function HeaderMenu() {
  const pages = [
    { to: "/header", title: "home" },
    { to: "/header", title: "contact" },
    { to: "/header", title: "about us" },
    { to: "/header", title: "references" },
  ];

  return (
    <ul className="header__menu">
      {pages.map((page) => (
        <li className="header__menu--item">
          <HeaderMenuItem to={page.to} title={page.title} />
        </li>
      ))}
    </ul>
  );
}

export default HeaderMenu;
