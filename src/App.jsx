import React, { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Layout from "./components/layout/Layout";

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return null;
};

import Home from "./pages/Home";
import About from "./pages/About";
import ProductsServices from "./pages/ProductsServices";
import Careers from "./pages/Careers";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import CookiePolicy from "./pages/CookiePolicy";
import DataSecurityPolicy from "./pages/DataSecurityPolicy";
import IntellectualPropertyPolicy from "./pages/IntellectualPropertyPolicy";
import "./styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />

      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products-services" element={<ProductsServices />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/data-security-policy" element={<DataSecurityPolicy />} />
          <Route
            path="/intellectual-property-policy"
            element={<IntellectualPropertyPolicy />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;

