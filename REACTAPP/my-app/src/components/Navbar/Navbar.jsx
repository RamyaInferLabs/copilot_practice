import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">DevFlow</div>
      <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#docs">Docs</a>
        <a href="#github">GitHub</a>
        <a href="#support">Support</a>
      </div>
      <button className="get-started-btn">Get Started</button>
    </nav>
  );
};

export default Navbar;
