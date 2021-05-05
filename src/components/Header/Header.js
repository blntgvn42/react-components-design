import React from "react";
import HeaderMenu from "./HeaderMenu";
import "./Header.scoped.scss";
import HeaderAuth from "./HeaderAuth";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">blntgvn42</div>
      <HeaderMenu />
      <HeaderAuth />
    </div>
  );
}

export default Header;
