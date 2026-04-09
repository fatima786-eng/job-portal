import React, { useState } from "react";
import logo from "../assets/jobs log.jpeg";
import "./Navbar.css";
import {
  FaHome,
  FaUserCircle,
  FaInfoCircle,
  FaPhone,
  FaGlobe,
  FaBlog,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* LEFT: Logo */}
      <div className="navbar-left">
        <Link to="/">
          <img src={logo} alt="EasyJobs Logo" className="logo" />
        </Link>
      </div>

      {/* Always visible icons */}
      <ul className="navbar-icons">
        <li className="menu-item">
          <Link to="/" className="menu-link">
            <FaHome className="icon" />
            <span className="text">Home</span>
          </Link>
        </li>

        <li className="menu-item">
          <Link to="/mypanel" className="menu-link">
            <FaUserCircle className="icon" />
            <span className="text">My Panel</span>
          </Link>
        </li>
      </ul>

      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Hamburger menu items */}
     <ul className={`navbar-menu ${menuOpen ? "active" : ""}`}>
  <li className="menu-item">
    <Link to="/about" className="menu-link">
      <FaInfoCircle className="icon" />
      <span className="text">About</span>
    </Link>
  </li>

  <li className="menu-item">
    <Link to="/contact" className="menu-link">
      <FaPhone className="icon" />
      <span className="text">Contact</span>
    </Link>
  </li>

  <li className="menu-item">
  <Link to="/overseas" className="menu-link">
    <FaGlobe className="icon" />
    <span className="text">Overseas</span>
  </Link>
</li>

  <li className="menu-item">
  <Link to="/blog" className="menu-link">
    <FaBlog className="icon" />
    <span className="text">Blog</span>
  </Link>
</li>
</ul>
    </nav>
  );
}

export default Navbar;