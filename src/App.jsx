import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Layout from "./components/layout/Layout";

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