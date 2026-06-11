// ProductSpotlight.jsx (updated)
import React from "react";
import Container from "../layout/Container";
import "../../styles/ProductSpotlight.css";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ProductSpotlight = () => {
  return (
    <section className="product-spotlight-section">
      <Container>
        <Card className="product-spotlight-card">
          <div className="product-content">

            {/* LEFT SIDE (Glass Panel) */}
            <div className="product-left glass-panel">
              <span className="product-tag">FEATURED PRODUCT</span>
              <h2>Brevto</h2>
              <h3>A Modern Social Platform Built For Meaningful Connections</h3>
              <p>
                Brevto is a modern social platform focused on creating engaging, intuitive, 
                and community-driven digital experiences. Built with a mobile-first mindset 
                and modern technology infrastructure, it is designed to help people connect, 
                share, and grow through seamless social interactions.
              </p>
              <Button variant="primary"> Explore Brevto </Button>
            </div>

            {/* RIGHT SIDE (Glass Preview) */}
            <div className="product-right glass-preview">
              {/* Floating Particles */}
              <span className="particle particle-1"></span>
              <span className="particle particle-2"></span>
              <span className="particle particle-3"></span>
              <span className="particle particle-4"></span>

              {/* Glass Reflection */}
              <div className="phone-reflection"></div>

               <div class="phone-back-glow"></div>

              {/* Product Image */}
              <img
                src="/images/brevto-preview.png"
                alt="Brevto Platform"
                className="product-image"
              />
            </div>

          </div>
        </Card>
      </Container>
    </section>
  );
};

export default ProductSpotlight;
