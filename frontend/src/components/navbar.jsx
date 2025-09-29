import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href ="#home">Home</a></li>
        <li><a href ="#client">Client</a></li>
        <li><a href ="#about">About</a></li>

      </ul>
    </nav>
  );
}

export default Navbar;