import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import { Routes, Route, Outlet, Link, Navigate } from "react-router-dom";
import Slider from "./components/Slider";

function App() {
  const isLoggedIn = true;

  return (
    <>
      <Banner />
      <Navbar />

      <Slider/>

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/about" element={<About />} />

        {isLoggedIn ? (
          <>
            <Route
              path="/profile"
              element={<div>this is my profile page</div>}
            />

            <Route path="/login" element={<Navigate to="/" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </>
  );
}

export default App;
