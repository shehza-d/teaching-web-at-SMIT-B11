import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import AddProduct from "./pages/AddProduct";
import Search from "./pages/Search";

// 404 routes not found after hosting
// UI responsive

function App() {
  const isLoggedIn = false;

  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/not-found" element={<div>not foundddd</div>} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/product/add" element={<AddProduct />} />
        <Route path="/search" element={<Search />} />

        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />

            <Route path="/login" element={<Navigate to="/" />} />
            <Route path="*" element={<Navigate to="/not-found" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
      {<Footer />}
    </>
  );
}

export default App;
