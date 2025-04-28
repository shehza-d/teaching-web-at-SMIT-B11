import { CiMobile3 } from "react-icons/ci";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { FiHeadphones } from "react-icons/fi";
import { TbDeviceGamepad } from "react-icons/tb";
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";

function Test(Props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div
      className={`${darkMode ? "bg-gray-300" : ""} border  border-[#0000004D] w-[calc(50%-15px)] sm:w-[calc(33.33%-18px)] md:w-[calc(25%-19px)] lg:w-[calc(16.66%-14px)] xl:w-[calc(16.66%-27px)] h-36  md:h-32 lg:h-[130px] xl:h-36 rounded flex flex-col text-center items-center justify-center lg:pt-3  xl:pt-6 gap-4`}
    >
      <span className="text-6xl">{Props.CategoriesIcon}</span>
      <p className="font-medium">{Props.CategoriesName}</p>
    </div>
  );
}

export default function BrowserCategories() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="mx-4 md:mx-16 xl:mx-[92px] pt-12 sm:pt-14 md:pt-16">
        <div className="flex gap-3 md:gap-4 items-center">
          <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-sm md:text-base">
            Categories
          </span>
        </div>

        <div className="flex  justify-between items-center text-center mt-3 sm:mt-5">
          <div className=" ">
            <h3
              className={`flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold ${
                darkMode ? "text-white" : ""
              }`}
            >
              Browse By Category
            </h3>
          </div>

          {/* arrow */}
          <div className="hidden sm:flex gap-2 sm:-mt-2 lg:-mt-1 ">
            <BsArrowLeftShort className="sm:arrow_desktop" />
            <BsArrowRightShort className="sm:arrow_desktop" />
          </div>
        </div>
      </div>
      <div className="flex  mx-4 md:mx-16 xl:mx-[92px] my-5 sm:pt-6 lg:pt-8 xl:pt-10  flex-wrap gap-6 lg:gap-4 xl:gap-8">
        <Test CategoriesIcon={<CiMobile3 />} CategoriesName="Phones" />
        <Test CategoriesIcon={<RiComputerLine />} CategoriesName="Computers" />
        <Test CategoriesIcon={<BsSmartwatch />} CategoriesName="SmartWatch" />
        <Test CategoriesIcon={<CiCamera />} CategoriesName="Camera" />
        <Test CategoriesIcon={<FiHeadphones />} CategoriesName="HeadPhones" />
        <Test CategoriesIcon={<TbDeviceGamepad />} CategoriesName="Gaming" />
      </div>
      <div className="border-b border-y-gray-300 pb-5 mx-8 md:mx-16 xl:mx-[92px]  sm:pt-10"></div>
    </div>
  );
}
