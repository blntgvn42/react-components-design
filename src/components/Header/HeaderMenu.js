import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import "./Header.scoped.scss";

function HeaderMenu() {
  const pages = [
    { to: "/", title: "home" },
    { to: "/contact", title: "contact" },
    { to: "/about-us", title: "about us" },
    { to: "/references", title: "references" },
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
