import logo from "../assets/logo/logo.svg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const links = ["home", "about", "contact us"];

export default function Navbar() {
  const isLoggedIn = false;

  const navLinkStyle =
    "capitalize hover:underline cursor-pointer hover:text-primary";
  return (
    <div className="h-28 bdr flex justify-around items-center">
      <img src={logo} alt="" />

      <div className="w-60 px-2 h-10 rounded center bg-[#F5F5F5]">
        <input
          type="search"
          className="outline-none w-full text-sm bg-transparent"
          placeholder="What are you looking for?"
        />
        <CiSearch className="text-3xl" />
      </div>

      <ul className="flex gap-3">
        {links.map((item, i) => (
          <li className={navLinkStyle} key={i}>
            {item}
          </li>
        ))}

        {!isLoggedIn ? <li className={navLinkStyle}>Login</li> : null}
      </ul>

      <div className="icons center text-2xl gap-3">
        {isLoggedIn ? (
          <>
            <IoMdHeart className="" />
            <IoCart />
          </>
        ) : null}
        <div className="bg-primary rounded-full h-8 w-8 center text-base text-white">
          <FaRegUser />
        </div>
      </div>
    </div>
  );
}
