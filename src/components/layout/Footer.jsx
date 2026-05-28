import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

const Footer = () => {
  return (
    <footer className="main-footer">

      <Container>

        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">

            <h2>Brevto Innovations Pvt Ltd</h2>

            <p>
              Building premium digital products,
              startup-focused web experiences,
              and scalable technology solutions.
            </p>

          </div>

          {/* LINKS */}
          <div className="footer-links">

            <h3>Company</h3>

            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/products-services">
              Products & Services
            </Link>
            <Link to="/careers">Careers</Link>

          </div>

          {/* RESOURCES */}
          <div className="footer-links">

            <h3>Resources</h3>

            <Link to="/blogs">Blogs</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/legal">Legal</Link>

          </div>

          {/* CONTACT */}
          <div className="footer-links">

            <h3>Contact</h3>

            <p>business@brevto.com</p>
            <p>support@brevto.com</p>
            <p>India</p>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Brevto Innovations Pvt Ltd.
            All rights reserved.
          </p>

        </div>

      </Container>

    </footer>
  );
};

export default Footer;