import React from "react";
import '../App.css'; // ✅ This is now the only CSS you need

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><a className="nav-link" href="/">Home</a></li>
        <li><a className="nav-link" href="/client">Client</a></li>
        <li><a className="nav-link" href="/editor">Editor</a></li>
        <li><a className="nav-link" href="/admin">Admin</a></li>
        <li><a className="nav-link" href="/about">About Us</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
