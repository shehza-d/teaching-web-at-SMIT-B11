import QrCodeImg from "../assets/images/footer/Qrcode.png";
import GooglePlayImg from "../assets/images/footer/google-play-store.png";
import AppStoreImg from "../assets/images/footer/appstore.png";

import { LiaFacebookF } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiCopyright } from "react-icons/pi";
import { VscSend } from "react-icons/vsc";

export default function Footer() {
  return (
    <footer className="bg-black text-white min-h-96">
      <div className="container-x flex-wrap gap-3 flex justify-between items-baseline text-start pt-[72px]">
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl ">Exclusive</h2>
          <p className="text-[20px] font-medium pt-1.5">Subscribe</p>
          <p className=" footer_text">Get 10% off your first order</p>
          <div className="flex w-[215px] h-12 items-center text-center rounded border-2 border-white px-4">
            <input
              type="search"
              className="w-full bg-transparent outline-none border-none placeholder-zinc-600"
              placeholder="Enter your email"
            />
            <VscSend />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className=" text-[20px] font-medium">Support</h3>
          <p className="pt-1.5 footer_text">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className=" footer_text">exclusive@gmail.com</p>
          <p className=" footer_text">+88015-88888-9999</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className=" text-[20px] font-medium">Account</h3>
          <p className="pt-1.5 footer_text">My Account</p>
          <p className="footer_text">Login / Register</p>
          <p className="footer_text">Cart</p>
          <p className="footer_text">Wishlist</p>
          <p className="footer_text">Shop</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className=" text-[20px] font-medium">Quick Link</h3>
          <p className="pt-1.5 footer_text">Privacy Policy</p>
          <p className="footer_text">Terms Of Use</p>
          <p className="footer_text">FAQ</p>
          <p className="footer_text">Contact</p>
        </div>
        <div className="flex flex-col gap-4">
          <h3 className=" text-[20px] font-medium">Download App</h3>
          <p className="pt-1.5 text-xs font-medium text-zinc-400">
            Save $3 with App New User Only{" "}
          </p>
          <div className="flex gap-2 items-center">
            <div>
              <img src={QrCodeImg} alt="" />
            </div>
            <div className="flex flex-col gap-1">
              <img src={GooglePlayImg} alt="" />
              <img src={AppStoreImg} alt="" />
            </div>
          </div>
          <div className="flex gap-6 text-xl pt-2">
            <LiaFacebookF />
            <FiTwitter />
            <FaInstagram />
            <RiLinkedinLine />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center text-center gap-[6px] mt-[70px] text-zinc-500 pb-6">
        <PiCopyright className="text-[22px]" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </footer>
  );
}
