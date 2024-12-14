import { ImPhone } from "react-icons/im";
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationSharp } from "react-icons/io5";
import { RiFacebookFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import { useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const onChange = (value) => {
    console.log("value=>",value);
  };
  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div
        className={`text-center mx-4 md:mx-16 xl:mx-52 ${
          darkMode ? "text-white" : ""
        }`}
      >
        <h1 className="font-semibold text-2xl md:text-4xl pt-6 sm:pt-12">
          Hi! Let's Start A Conversation.
        </h1>
        <p className="pt-4 sm:pt-5 md:pt-6 text-sm text-start">
          If you're looking for exceptional products to enhance your lifestyle,
          Logoipsum is here to help you. Fill in the form below to send us a
          message or call us to learn more about our available products,
          shipping options, and how we can make your shopping experience
          seamless and enjoyable.
        </p>
        <div className="mt-11 sm:mt-12">
          <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-12 gap-8">
            <input
              type="text"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="First Name"
            />
            <input
              type="text"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="Last Name"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-12 gap-8">
            <input
              type="email"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="Email"
            />
            <input
              type="number"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="Phone"
            />
          </div>
          <div className="flex flex-col sm:flex-row justify-between mt-8 sm:mt-12 gap-8">
            <input
              type="text"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="Address"
            />
            <input
              type="text"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile sm:contact_input`}
              placeholder="Subject"
            />
          </div>
          <div className="flex justify-start mt-8 sm:mt-12 ">
            <input
              type="text"
              className={`${
                darkMode ? "bg-slate-900 !border-b !border-b-slate-50 " : ""
              } contact_input_mobile  sm:!pb-8 `}
              placeholder="Message"
            />
          </div>
        </div>
        <div className="flex items-center justify-center py-12">
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
        </div>
      </div>

      {/* contact info */}
      <div className="mx-4 md:mx-16 xl:mx-[92px] flex flex-col md:flex-row justify-between md:items-center pt-6 sm:pt-8 md:py-10 lg:py-12 xl:py-16  md:h-[calc(100vh-133px)]">
        <div className="flex flex-col gap-[22px] w-full md:w-[calc(45%-22px)] ">
          <h3
            className={`text-2xl sm:text-3xl lg:text-4xl font-semibold  lg:mb-2 ${
              darkMode ? "text-white" : ""
            }`}
          >
            Contact Info
          </h3>
          <div className="flex items-center gap-7">
            <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
              <ImPhone />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-primary font-semibold ">Phone Number</h4>{" "}
              <a
                href=""
                className={`link_hover hover:text-black text-sm ${
                  darkMode ? "!text-white" : ""
                }`}
              >
                +88015-88888-9999
              </a>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
              <HiOutlineMail />{" "}
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-primary font-semibold ">Email</h4>{" "}
              <a
                href=""
                className={`link_hover hover:text-black text-sm ${
                  darkMode ? "!text-white" : ""
                }`}
              >
                exclusive@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-7">
            <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
              <IoLocationSharp />
            </div>
            <div className="flex flex-col gap-1">
              <h4 className="text-primary font-semibold ">Address</h4>{" "}
              <p className={`text-sm ${darkMode ? "!text-white" : ""} `}>
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-2">
            <h4 className="text-primary font-semibold ">Follow Us</h4>

            <div className="flex gap-4">
              <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
                <RiFacebookFill />
              </div>
              <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
                <FaWhatsapp />{" "}
              </div>
              <div className="text-primary text-xl border border-primary rounded-full p-2 hover:text-white hover:bg-primary">
                <FaInstagram />{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  md:w-[55%] my-10 md:my-0 lg:mt-0 ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.509547419515!2d90.3815337723888!3d23.764862941080942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7585c9dd8fd%3A0xcf7109ddcfaf80fa!2sBijoy%20Sarani%2C%20Dhaka%2C%20Bangladesh!5e0!3m2!1sen!2s!4v1733767016098!5m2!1sen!2s"
            width="100%"
            height={360}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}
