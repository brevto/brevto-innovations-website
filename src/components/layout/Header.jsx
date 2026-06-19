import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import navigation from "../../data/navigation";

import "../../styles/index.css";
import "../../styles/header.css";
import { GoStack } from "react-icons/go";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 540) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="main-header">
      <Container className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img
            className="logo-img"
            src="/icons/company-logo.png"
            alt="Brevto"
          />
        </Link>

        <nav className={`nav-menu ${menuOpen ? "active" : ""}`}>
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" onClick={closeMenu}>
            <button className="header-btn" type="button">
              Get Started
            </button>
          </Link>

          <button
            className={`menu-toggle ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            type="button"
            aria-label="Toggle navigation"
          >
            <GoStack />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;