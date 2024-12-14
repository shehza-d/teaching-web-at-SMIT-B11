import { useSelector } from "react-redux";
import first_img from "../assets/images/about_images/first_img.jpg";
import second_img from "../assets/images/about_images/second_img.jpg";
import mobileLogo from "../assets/images/logo_mobile.svg";

export default function About() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="mx-4 md:mx-16 xl:mx-[92px]">
        {/* about us */}
        <div className="flex flex-col md:flex-row justify-between gap-3 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-14 items-start pt-6 sm:pt-8 md:pt-10 lg:pt-12 xl:pt-16  md:h-[calc(100vh-133px)]">
          <div className={`${darkMode ? "text-white" : ""} flex flex-col  md:w-[50%] lg:w-[53%] gap-3 md:gap-2 lg:gap-3 xl:gap-4 text-sm items-start`}>
            <h1 className="text-3xl lg:text-4xl font-semibold mb-2 md:mb-[6px] lg:mb-3 xl:mb-6">About Us</h1>
            <p className="text-sm">
              Shoptimized™ is a community of likeminded e-commerce entrepreneurs
              who have come together to learn how to upscale their businesses
              and outmaneuver their competition at every turn.
            </p>
            <p className="text-sm">
              Founded by Conversion Rate Expert, Bradley Long – Shoptimized™
              cuts out all the noise and bullshit and shows you what’s really
              working in the world of e-commerce.
            </p>
            <p className="text-sm">
              After working with some of the world’s most sophisticated brands
              as a conversion rate optimization consultant and helping them
              achieve double and sometimes triple-digit growth in under
              12-months.
            </p>
          </div>
          <div className=" sm:w-[65%] md:w-[50%] lg:w-[47%] mt-5 lg:mt-0">
            <img
              src={first_img}
              alt=""
              className="rounded-xl object-cover w-full md:h-[330px] lg:h-[320px] xl:h-[345px]"
              // h-[300px] xl:
            />
          </div>
        </div>
        {/* our mission */}

        <div className={`${darkMode ? "text-white" : ""} flex flex-col md:flex-row justify-between gap-10 py-12 sm:pt-16 pb-11 sm:pb-16 md:pb-24 lg:pb-28`}>
          <div className="w-[100%] md:w-[50%] lg:w-[40%] relative">
            <img src={second_img} alt="" className="w-full md:w-96 md:h-96 object-cover lg:h-72 rounded-xl" />
            <div className="bg-white shadow-xl  absolute sm:right-0 md:-right-8 sm:-bottom-12 md:-bottom-12 lg:-right-8 xl:right-0 lg:-bottom-12 sm:w-32 sm:h-[105px] md:h-24 lg:w-36 lg:h-28 xl:w-44 xl:h-36 rounded-[15px] hidden sm:flex flex-col justify-center items-center text-center">
              <img src={mobileLogo} alt="" className="sm:w-11 lg:w-12 xl:w-16" />
              <p className={`${darkMode ? "text-black" : ""} text-base lg:text-lg font-semibold`}>Logoipsum</p>
            </div>
          </div>
          <div className=" md:w-[50%] lg:w-[60%] ">
            <h1 className="text-3xl lg:text-4xl font-semibold mb-4 md:mb-3 lg:mb-3 xl:mb-6">Our Mission</h1>
            <div className="text-sm flex flex-col gap-3 lg:gap-4">
              <p>
                At Logoipsum, we aim to transform online shopping into an
                effortless, enjoyable, and trustworthy experience. Our mission
                is to provide high-quality, innovative, and sustainable products
                that cater to your lifestyle, all while ensuring exceptional
                customer service. We are committed to creating a seamless
                digital marketplace that not only meets but exceeds your
                expectations, connecting you to the things you love with just a
                click.
              </p>

              <p>
                Our goal is to empower shoppers with an intuitive platform that
                combines convenience, transparency, and excellent customer
                service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
