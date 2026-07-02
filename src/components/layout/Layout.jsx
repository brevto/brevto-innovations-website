import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [showTopButton, setShowTopButton] = useState(false);
  const location = useLocation();

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