import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
// import "../../index.css";just 
import "../../styles/index.css";
import "../../styles/header.css";



const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="main-header">

      <Container className="header-container">

        {/* LOGO */}
        <Link to="/" className="logo" onClick={closeMenu}>
          <img className="logo-img" src="/assets/icons/company-logo.png" alt="Brevto" />
          {/* <span>Brevto</span>
          <p>Innovations Pvt Ltd</p> */}
        </Link>



        {/* NAVIGATION */}
        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>

          <NavLink to="/" onClick={closeMenu}>
            Home
          </NavLink>

          <NavLink to="/about" onClick={closeMenu}>
            About
          </NavLink>

          <NavLink to="/products-services" onClick={closeMenu}>
            Products & Services
          </NavLink>

          <NavLink to="/careers" onClick={closeMenu}>
            Careers
          </NavLink>

          <NavLink to="/blogs" onClick={closeMenu}>
            Blogs
          </NavLink>

          <NavLink to="/contact" onClick={closeMenu}>
            Contact
          </NavLink>

          <NavLink to="/legal" onClick={closeMenu}>
            Legal
          </NavLink>

        </nav>

        {/* CTA */}
        <div className="header-actions">

          <Link to="/contact">
            <button className="header-btn">
              Get Started
            </button>
          </Link>

          {/* MOBILE TOGGLE */}
          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </Container>

    </header>
  );
};

export default Header;