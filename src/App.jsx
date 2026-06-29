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
import "./styles/global.css";

const App = () => {
  return (
    <BrowserRouter>

      <ScrollToTop />

      <Layout>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/products-services"
            element={<ProductsServices />}
          />

          <Route
            path="/careers"
            element={<Careers />}
          />

          <Route
            path="/blogs"
            element={<Blogs />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/legal"
            element={<Legal />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
};

export default App;