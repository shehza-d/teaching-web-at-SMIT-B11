import { useSelector } from "react-redux";
import category_img from "../assets/images/category.png";

export default function Categories() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="flex flex-col sm:flex-row justify-between items-center  mx-4 md:mx-16 xl:mx-[92px]  p-4 md:p-5 lg:p-6 xl:p-10  bg-[#000000] min-h-[500px] sm:min-h-[330px] md:min-h-[360px] lg:min-h-[450px] xl:h-[480px] text-white rounded">
        <div className="w-[calc(100%)] sm:w-[calc(55%)] flex flex-col  gap-2 md:gap-3 lg:gap-4 xl:gap-8 mt-2 items-start">
          <p className="text-[#00FF66] text-sm sm:text-[15px] md:text-base">
            Categories
          </p>
          <p className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium flex flex-col gap- sm:gap-1 md:gap-3">
            <span>Enhance Your</span> <span>Music Experience</span>{" "}
          </p>
          <div className="flex  gap-2 md:gap-3 lg:gap-5 xl:gap-6">
            <div className="flex flex-col text-center items-center justify-center bg-white text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16  rounded-full">
              <span className="font-semibold text-base">23</span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px]">
                Hours
              </span>
            </div>

            <div className="flex flex-col text-center items-center justify-center bg-white text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16  rounded-full">
              <span className="font-semibold text-base">05</span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px]">
                Days
              </span>
            </div>

            <div className="flex flex-col text-center items-center justify-center bg-white text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16  rounded-full">
              <span className="font-semibold text-base">59</span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px]">
                Minutes
              </span>
            </div>

            <div className="flex flex-col text-center items-center justify-center bg-white text-black w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16  rounded-full">
              <span className="font-semibold text-base">35</span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px]">
                Seconds
              </span>
            </div>
          </div>
          <div className="mt-3 hidden sm:flex">
            <button className="bg-[#00FF66] sm:w-32 md:w-36 lg:w-44 sm:h-10 md:h-12 lg:h-14 rounded ">
              Buy Now!
            </button>
          </div>
        </div>
        <div className="sm:rotate-2 w-[100%] sm:w-[45%] pt-6 ">
          <img src={category_img} className="" alt="category_img" />
        </div>
        <div className="mt-3 flex sm:hidden ">
          <button className="bg-[#00FF66] w-32 h-11 rounded ">Buy Now!</button>
        </div>
      </div>
    </div>
  );
}
