import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Make sure this file exists

const Navbar = () => {
  return (
    <div id="nav_bar">
      <h1>Zomato</h1>

      <div id="nav_1">
        <Link to="/home" className="nav-link">
          Home
        </Link>
        <Link to="/about" className="nav-link">
          About
        </Link>
        <Link to="/services" className="nav-link">
          Services
        </Link>
        <Link to="/products" className="nav-link">
          Products
        </Link>
        <Link to="/contact" className="nav-link">
          Contact
        </Link>
      </div>

      <div id="nav_2">
        <button className="auth-btn">Login</button>
        <button className="auth-btn">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
