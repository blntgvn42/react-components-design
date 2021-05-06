import React from "react";
import { Link } from "react-router-dom";
import "./Home.scoped.scss";

function Home() {
  return (
    <div className="home">
      <Link to="header">Header Component</Link>
      <Link to="modal">Modal Component</Link>
      <Link to="button">Button Component</Link>
    </div>
  );
}

export default Home;
