import React from "react";
import '../App.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="/client">Client</a></li>
        <li><a className="nav-link" href="/about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
