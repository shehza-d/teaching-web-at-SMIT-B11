import { BsFillMoonFill } from "react-icons/bs";
import { AiOutlineSun } from "react-icons/ai";
import logo from "../assets/logo/logo.svg";
import logoMobile from "../assets/logo/logo-mobile.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { IoCloseCircleOutline } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../store/darkModeSlice";
import { useNavigate } from "react-router";

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Navbar() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = true;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";

  const handleSearch = (e) => {
    e.preventDefault();

    const searchTerm = e?.target?.children?.[0]?.value;

    if (!searchTerm) return;

    navigate(`/search?query=${searchTerm}`);
  };

  return (
    <div
      id="top"
      className={`container-x ${
        darkMode ? "bg-slate-900" : ""
      } h-28 transition-colors duration-300 relative flex justify-between items-center`}
    >
      <Link to="/">
        <img src={logoMobile} alt="" width={60} height={60} />
      </Link>

      <form
        onSubmit={handleSearch}
        className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]"
      >
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <button type="submit">
          <CiSearch className="text-3xl" />
        </button>
      </form>

      {/* desktop navbar */}
      <ul className={`hidden md:flex gap-3 ${darkMode ? "text-white" : ""}`}>
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        {!isLoggedIn ? (
          <li className={navLinkStyle}>
            <Link to="/login">Login</Link>
          </li>
        ) : null}
      </ul>

      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="md:hidden order-1 text-4xl"
      >
        {isHamburgerOpen ? <IoCloseCircleOutline /> : <IoMenu />}
      </button>

      {isHamburgerOpen && (
        // mobile navbar
        <ul className="absolute bg-gray-200 w-full z-10 gap-3 flex flex-col p-6 top-28">
          {links.map((item, i) => (
            <li className={navLinkStyle} key={i}>
              <Link onClick={() => setIsHamburgerOpen(false)} to={item.link}>
                {item.title}
              </Link>
            </li>
          ))}

          {!isLoggedIn ? (
            <li className={navLinkStyle}>
              <Link onClick={() => setIsHamburgerOpen(false)} to="/login">
                Login
              </Link>
            </li>
          ) : null}
        </ul>
      )}

      <div
        className={`${
          darkMode ? "text-white" : ""
        } icons center text-2xl gap-3`}
      >
        <button
          onClick={() => {
            dispatch(toggleDarkMode());
          }}
        >
          {darkMode ? <AiOutlineSun /> : <BsFillMoonFill />}
        </button>

        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}

        <Link
          to={"/profile"}
          className="bg-primary rounded-full overflow-hidden h-8 w-8 center text-base text-white"
        >
          {isLoggedIn ? (
            <img
              src="https://avatars.githubusercontent.com/u/93990677?v=4"
              alt=""
            />
          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>
    </div>
  );
}
