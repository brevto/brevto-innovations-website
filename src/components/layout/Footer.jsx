import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import "../../styles/footer.css";

import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaMediumM,
  FaYoutube
} from "react-icons/fa";

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

            {/* SOCIALS */}

            <div className="footer-socials">

              {/* Global SVG Gradient Definition */}
              <svg width="0" height="0" className="footer-gradient-defs">
                <defs>
                  <linearGradient
                    id="brevtoGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#22E7FF" />
                    <stop offset="50%" stopColor="#1D7DFF" />
                    <stop offset="100%" stopColor="#003BFF" />
                  </linearGradient>
                </defs>
              </svg>

              <a href="#" aria-label="Instagram">
                <FaInstagram className="gradient-icon" />
              </a>

              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn className="gradient-icon" />
              </a>

              <a href="#" aria-label="Twitter">
                <FaTwitter className="gradient-icon" />
              </a>

              <a href="#" aria-label="Medium">
                <FaMediumM className="gradient-icon" />
              </a>

              <a href="#" aria-label="YouTube">
                <FaYoutube className="gradient-icon" />
              </a>

            </div>
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