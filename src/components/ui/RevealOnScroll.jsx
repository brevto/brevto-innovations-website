import { useEffect } from "react";

// Lightweight reveal-on-scroll helper.
// Adds `.is-visible` to elements with the `.reveal` class when they enter view.
const RevealOnScroll = () => {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const els = Array.from(document.querySelectorAll('.reveal'));
    if (!els.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });

    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return null;
};

export default RevealOnScroll;
