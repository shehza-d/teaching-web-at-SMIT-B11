import { VscSend } from "react-icons/vsc";
import QrCodeImg from "../assets/images/footer_imges/Qr Code.png";
import GooglePlayImg from "../assets/images/footer_imges/GooglePlay.png";
import AppStoreImg from "../assets/images/footer_imges/AppStore.png";
import { LiaFacebookF } from "react-icons/lia";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { PiCopyright } from "react-icons/pi";

export default function Footer() {
  return (
    <div className="bg-black text-white min-h-96 ">
      <div className="  mx-4 md:mx-16 xl:mx-[92px] flex flex-wrap justify-start md:justify-between items-baseline text-start pt-8 sm:pt-10 md:pt-12 lg:pt-[72px]">
        <div className="w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4">
          <h2 className="font-bold md:text-xl lg:text-2xl ">Exclusive</h2>
          <p className="md:text-base lg:text-[20px] font-medium md:pt-1 lg:pt-1.5">Subscribe</p>
          <p className="  footer_text_mobile lg:footer_text_desktop lg:text-sm xl:text-base">Get 10% off your first order</p>
          <div className="flex w-full h-9 sm:h-10 lg:h-11 xl:h-12 items-center text-center rounded border-2 border-white px-2 xl:px-4">
            <input
              type="search"
              className="w-full bg-transparent outline-none border-none placeholder-zinc-600 text-sm xl-text-base"
              placeholder="Enter your email"
            />
            <VscSend className=" text-2xl" />
          </div>
        </div>
        <div className="w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4 ml-12 xl:pl-8">
          <h3 className=" md:text-base lg:text-[20px] font-medium">Support</h3>
          <p className="md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop">
            111 Bijoy sarani, Dhaka,
            <br /> DH 1515, Bangladesh.
          </p>
          <p className="  footer_text_mobile lg:footer_text_desktop">exclusive@gmail.com</p>
          <p className="  footer_text_mobile lg:footer_text_desktop">+88015-88888-9999</p>
        </div>
        <div className="w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4  pt-5 md:pl-8">
          <h3 className=" md:text-base lg:text-[20px] font-medium">Account</h3>
          <p className="md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop">My Account</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Login / Register</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Cart</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Wishlist</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Shop</p>
        </div>
        <div className="w-[calc(50%-32px)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4  pt-5 pl-12 sm:pl-0 md:pl-6">
          <h3 className=" md:text-base lg:text-[20px] font-medium">Quick Link</h3>
          <p className="md:pt-1 lg:pt-1.5  footer_text_mobile lg:footer_text_desktop">Privacy Policy</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Terms Of Use</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">FAQ</p>
          <p className= "footer_text_mobile lg:footer_text_desktop">Contact</p>
        </div>
        <div className="w-[calc(100%)] sm:w-[calc(33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(20%-16px)] flex items-center justify-center sm:justify-normal sm:items-baseline flex-col gap-2 sm:gap-[10px] lg:gap-3 xl:gap-4 pt-5">
          <h3 className="mr-20 sm:mr-0 md:text-base lg:text-[20px] font-medium">Download App</h3>
          <p className="mr-2 sm:mr-0 md:pt-1 lg:pt-1.5 text-xs font-medium text-zinc-400">
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
      
      <div className="flex justify-center items-center text-center gap-[6px] mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-[70px] text-zinc-500 pb-6 text-xs sm:text-base">
        <PiCopyright className="" />
        <p>Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  );
}