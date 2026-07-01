import React, { useEffect, useRef } from "react";
import "../../styles/dots.css";
// Simple connecting-dots canvas background (very light gray lines/dots)
// No external libraries required.

const DotsBackground = ({
  dotColor = "rgba(230, 230, 230, 0.73)",
  lineColor = "rgba(255,255,255,0.99)",

  minDistance = 90,
  maxDistance = 400,
  connectionDistance = 270,
  density = 0.0005,
  className = "",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    let raf = 0;
    let w = 0;
    let h = 0;
    let dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));

    const rand = (min, max) => min + Math.random() * (max - min);

    const buildDots = () => {
  const area = w * h;
  const count = Math.max(24, Math.floor(area * density));

  const dots = [];
  const maxAttempts = count * 100;

  let attempts = 0;

  while (dots.length < count && attempts < maxAttempts) {
    attempts++;

    const candidate = {
      x: rand(0, w),
      y: rand(0, h),
      r: rand(1.4, 2.4),
      vx: rand(-0.5, 0.5),
      vy: rand(-0.5, 0.5),
    };

    let valid = true;

    for (const p of dots) {
      const dx = candidate.x - p.x;
      const dy = candidate.y - p.y;

      if (Math.hypot(dx, dy) < minDistance) {
        valid = false;
        break;
      }
    }

    if (valid) {
      dots.push(candidate);
    }
  }

  return dots;
};

    let dots = [];

    const resize = () => {
      // Measure the parent container (usually the hero section) and size
      // the canvas pixel buffer accordingly. Use canvas.width/height
      // (device pixels) and keep CSS at 100% so it always covers the parent.
      // Prefer the hero section ancestor so the canvas fills the entire hero
      const hero = canvas.closest 
        ? canvas.closest('.hero-section') || canvas.parentElement || canvas
        : canvas.parentElement || canvas;
      const rect = hero.getBoundingClientRect();
      const targetW = Math.max(300, Math.floor(rect.width || window.innerWidth));
      const targetH = Math.max(150, Math.floor(rect.height || window.innerHeight));
      // Set the backing buffer at DPR scale and set explicit CSS pixel size
      canvas.width = Math.floor(targetW * dpr);
      canvas.height = Math.floor(targetH * dpr);
      // Set CSS pixel size to exactly match measured rect to avoid scaling mismatches
      canvas.style.width = `${targetW}px`;
      canvas.style.height = `${targetH}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      w = targetW;
      h = targetH;
      dots = buildDots();
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      // Move dots gently
      for (const p of dots) {
        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < -20) p.x = w + 20;
        if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        if (p.y > h + 20) p.y = -20;
      }

      // Lines (subtle, low opacity for non-distracting background)
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i];
          const b = dots[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist <= connectionDistance && dist >= minDistance && dist <= maxDistance) {
            const t = 1 - dist / connectionDistance;
            const alpha = (0.008 + 0.05 * t).toFixed(3);
            // Use configurable lineColor; supports rgba(...) with alpha placeholder
            // If a plain rgb(...) is provided, it will still render (browser ignores alpha part).
            ctx.strokeStyle = lineColor.includes("rgba")
              ? lineColor.replace(/rgba\(([^)]+),\s*[^)]+\)/, `rgba($1, ${alpha})`)
              : `rgba(200,200,200,${alpha})`;

            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      // Dots
      for (const p of dots) {
        ctx.fillStyle = dotColor;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = window.requestAnimationFrame(draw);
    };


    // Use ResizeObserver to react to layout changes of the parent (hero)
    let ro;
    try {
      const parent = canvas.parentElement || canvas;
      ro = new ResizeObserver(resize);
      ro.observe(parent);
    } catch (e) {
      // Fallback to window resize if ResizeObserver is not available
      window.addEventListener("resize", resize);
    }

    // Give the layout a tick and then resize to avoid zero-sized measurements
    setTimeout(resize, 40);
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      if (ro && ro.disconnect) ro.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [dotColor, lineColor, minDistance, maxDistance, connectionDistance, density]);

  return (
    <div className={`dots-bg ${className}`} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>

  );
};

export default DotsBackground;

