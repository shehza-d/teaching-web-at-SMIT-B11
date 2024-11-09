import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Banner />
      <Navbar />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
