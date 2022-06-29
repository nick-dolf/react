import React, { Component } from "react";

// Stateless Functional Component
const NavBar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");

  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand me-4" href="#">
        Navbar{" "}
        <span className="badge bg-pill bg-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default NavBar;
