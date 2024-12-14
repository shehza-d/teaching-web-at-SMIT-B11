import { CiSearch } from "react-icons/ci";
import { IoHeartOutline } from "react-icons/io5";
import { IoCartOutline } from "react-icons/io5";
import { HiMiniUserCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
// theme icon
import { IoMdSunny } from "react-icons/io";
import { IoMoon } from "react-icons/io5";

import desktopLogo from "../assets/images/logo_desktop.svg";
import mobileLogo from "../assets/images/logo_mobile.svg";
import profileImg from "../assets/images/profile_img.jpg";
import { useState } from "react";

import { toggleDarkMode } from "../redux/darkModeSlice";
import { useDispatch, useSelector } from "react-redux";

const links = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact Us", link: "/contact" },
];
export default function Navbar() {
  // {for redux}
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;
  return (
    <div
      className={` shadow-md border-b-gray-300  sticky z-10 top-10 sm:top-12 ${
        darkMode ? "bg-slate-900" : "bg-white"
      }  `}
    >
      <div className="h-[65px] sm:h-[85px] flex justify-between items-center text-center mx-4 sm:mx-4 md:mx-16 xl:mx-[92px] pt-2 sm:pt-5  ">
        <Link to={"/"}><img src={desktopLogo} alt="" className="hidden sm:flex" /></Link> 
        <Link to={"/"}><img src={mobileLogo} alt="" className="w-10 sm:w-12 flex sm:hidden " /></Link>

        {/* for desktop */}
        <ul className=" hidden lg:flex gap-10 font-normal ">
          {links.map((item, i) => {
            return (
              <li className={`link_hover `} key={i}>
                <Link
                  to={item.link}
                  className={`${
                    darkMode ? "text-white hover:text-primary" : ""
                  }`}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
          {!isLoggedIn ? (
            <li className="link_hover">
              <Link
                to="/signup"
                className={`${
                  darkMode ? "text-white hover:text-primary" : ""
                } `}
              >
                Sign Up
              </Link>
            </li>
          ) : null}
        </ul>

        <div className="flex items-center gap-6 text-center">
          <div className="flex bg-secondary color-black w-40 ml-3 sm:ml-8 lg:ml-0 sm:w-56 md:w-60 h-[30px] sm:h-9  justify-around items-center  text-sm rounded px-4">
            <input
              type="search"
              className="nav_input bg-transparent outline-none w-full"
              placeholder="What are you looking for?"
            />
            <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" />
          </div>
          {/* for theme */}
          <button
            className={`text-xl ${darkMode ? "text-white " : ""}`}
            onClick={() => dispatch(toggleDarkMode())}
          >
            {darkMode ? <IoMdSunny /> : <IoMoon />}
          </button>
          <div className="flex items-center gap-2 md:gap-4">
            {isLoggedIn ? (
              <div className={`hidden  sm:flex gap-2 md:gap-4 items-center text-center `}>
                <a
                  href=""
                  className={`w-9 h-9 text-2xl icons flex items-center justify-center ${darkMode ? "text-white hover:text-black":""}`}
                >
                  <IoHeartOutline className=" text-2xl " />
                </a>
                <a
                  href=""
                  className={`w-9 h-9 text-2xl icons flex items-center justify-center ${darkMode ? "text-white hover:text-black":""}`}
                >
                  <IoCartOutline className="text-2xl" />
                </a>
              </div>
            ) : null}
            <div className={`-ml-3 sm:-ml-0  h-8 w-8 text-4xl ${darkMode ? "bg-slate-900": "bg-white"} rounded-full  overflow-hidden text-primary flex`}>
              {isLoggedIn ? (
                <img src={profileImg} alt="" />
              ) : (
                <HiMiniUserCircle className="w-full h-full "/>
              )}
            </div>
          </div>
        </div>

        {/* for mobile */}
        {!isHamburgerOpen && (
          <button
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
            className={`text-3xl lg:hidden order-3 w-9 h-9  icons flex items-center justify-center ${darkMode ? 'text-white hover:text-black':''}`}
          >
            <IoMenu className="" />
          </button>
        )}
        {isHamburgerOpen && (
          <div className="bg-white fixed h-[100%] w-96 sm:w-[350px] z-10 top-0 right-0 pt-[95px]  border-l border-l-gray-100 shadow-xl	">
            <button
              onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
              className=" w-9 h-9 icons flex justify-center items-center ml-72 sm:ml-[270px] relative bottom-10 sm:8"
            >
              <IoClose className="text-3xl  absolute" />
            </button>

            <ul className=" flex flex-col gap-4 text-start ">
              {links.map((item, i) => {
                return (
                  <li className="border-b border-b-gray-300 pb-3 " key={i}>
                    <Link className="pl-6 hover:text-primary" to={item.link}>
                      {item.title}
                    </Link>
                  </li>
                );
              })}
              {!isLoggedIn ? (
                <li className="border-b border-b-gray-300 pb-3">
                  <Link className="pl-6 hover:text-primary" to="/signup">
                    Sign Up
                  </Link>
                </li>
              ) : null}
              {isLoggedIn ? (
                <div className="flex sm:hidden justify-center gap-6 mt-2">
                  <a
                    href=""
                    className="w-9 h-9 text-2xl icons flex items-center justify-center"
                  >
                    <IoHeartOutline className=" text-2xl " />
                  </a>
                  <a
                    href=""
                    className="w-9 h-9 text-2xl icons flex items-center justify-center"
                  >
                    <IoCartOutline className="text-2xl" />
                  </a>
                </div>
              ) : null}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
