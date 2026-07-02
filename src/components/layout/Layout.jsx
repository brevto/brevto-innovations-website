import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Container from "./Container";

const routeLabels = {
  "/about": "About",
  "/products-services": "Products & Services",
  "/careers": "Careers",
  "/blogs": "Blogs",
  "/contact": "Contact",
  "/legal": "Legal",
  "/privacy-policy": "Privacy Policy",
  "/terms-of-use": "Terms of Use",
  "/cookie-policy": "Cookie Policy",
  "/data-security-policy": "Data Security Policy",
  "/intellectual-property-policy": "Intellectual Property Policy",
};

const Layout = ({ children }) => {
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

  const breadcrumbs = React.useMemo(() => {
    const segments = location.pathname.split("/").filter(Boolean);

    if (segments.length === 0) {
      return [];
    }

    const items = [{ label: "Home", path: "/" }];
    let accumulatedPath = "";

    segments.forEach((segment) => {
      accumulatedPath += `/${segment}`;
      items.push({
        label:
          routeLabels[accumulatedPath] ||
          segment
            .replace(/-/g, " ")
            .replace(/\b\w/g, (char) => char.toUpperCase()),
        path: accumulatedPath,
      });
    });

    return items;
  }, [location.pathname]);

  useEffect(() => {
    const getHeroThreshold = () => {
      const hero = document.querySelector(
        "main .hero-section, main section[class*='hero']"
      );

      if (!hero) {
        return window.innerHeight;
      }

      return hero.getBoundingClientRect().bottom + window.scrollY;
    };

    let heroThreshold = getHeroThreshold();

    const updateVisibility = () => {
      setShowTopButton(window.scrollY > heroThreshold + 40);
    };

    const handleScroll = () => {
      updateVisibility();
    };

    const handleResize = () => {
      heroThreshold = getHeroThreshold();
      updateVisibility();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);

    updateVisibility();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <div className="app-layout">
      <Header />

      <main className="main-content">
        {breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <div className="breadcrumbs-container">
              <ol className="breadcrumbs-list">
                {breadcrumbs.map((crumb, index) => {
                  const isLast = index === breadcrumbs.length - 1;

                  return (
                    <li key={crumb.path} className="breadcrumb-item">
                      {isLast ? (
                        <span className="breadcrumb-current">{crumb.label}</span>
                      ) : (
                        <>
                          <Link to={crumb.path} className="breadcrumb-link">
                            {crumb.label}
                          </Link>
                          <span className="breadcrumb-separator" aria-hidden="true">
                            /
                          </span>
                        </>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </nav>
        )}

        {children}
      </main>

      <Footer />

      <button
        type="button"
        className={`back-to-top-button ${showTopButton ? "visible" : "hidden"}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        ↑
      </button>

    </div>
  );
};

export default Layout;