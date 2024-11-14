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

const links = [
  { title: "home", link: "/" },
  { title: "about", link: "/about" },
  { title: "contact us", link: "/contact" },
];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";
  return (
    <div className="h-28 relative flex justify-around items-center">
      <img src={logoMobile} alt="" width={60} height={60} />

      <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>

      {/* desktop navbar */}
      <ul className="hidden md:flex gap-3">
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

      <div className="icons center text-2xl gap-3">
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
