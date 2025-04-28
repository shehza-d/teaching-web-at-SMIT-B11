import "./App.css";
import Banner from "./Components/Banner";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import ApiProduct from "./Pages/ApiProduct";
import { Routes, Route, Outlet, Link, useLocation } from "react-router-dom";
import ProductDetail from "./Pages/ProductDetail";
import { useEffect } from "react";
import ProductAdd from "./Pages/ProductAdd";

export default function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/api-product" element={<ApiProduct />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/add" element={<ProductAdd />} />
      </Routes>

      <Footer />
    </>
  );
}
