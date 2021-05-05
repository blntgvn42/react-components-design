import React from "react";
import { Link } from "react-router-dom";
import "./Home.scoped.scss";

function Home() {
  return (
    <div className="home">
      <Link to="header">Header Component</Link>
    </div>
  );
}

export default Home;
