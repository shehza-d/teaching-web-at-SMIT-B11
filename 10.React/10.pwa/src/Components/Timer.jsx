import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function Timer() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className=" mx-4 md:mx-16 xl:mx-[92px] sm:pt-24 md:pt-32 lg:pt-12 xl:pt-0">
        <div className="flex gap-3 md:gap-4 items-center">
          <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
          <span className="text-primary font-semibold text-sm md:text-base">
            Today’s
          </span>
        </div>
        
        <h3 className={`flex sm:hidden  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-3 ${darkMode ? 'text-white':''}`}>
          Flash Sales
        </h3>
        <div className="flex   justify-between items-center text-center mt-5 ">
          <div className="flex items-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 mt-2">
            <h3 className={`hidden sm:flex text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold ${darkMode ? 'text-white':''}` }>
              Flash Sales
            </h3>

            <div className={`flex flex-col items-start sm:ml-8 md:ml-10 lg:ml-16 ${darkMode ? 'text-white':''} `}>
              <p className="text-xs font-medium -mt-3">Days</p>
              <p className="text-xl sm:text-3xl md:text-3xl lg:text-[32px] font-semibold sm:font-semibold md:font-bold lg:font-bold">
                03
              </p>
            </div>
            <span className="text-primary text-lg font-bold">:</span>

            <div className={`flex flex-col items-start ${darkMode ? 'text-white':''} `}>
              <p className="text-xs font-medium -mt-3">Hours</p>
              <p className="text-xl sm:text-3xl md:text-3xl lg:text-[32px] font-semibold sm:font-semibold md:font-bold lg:font-bold">
                23
              </p>
            </div>
            <span className="text-primary text-lg font-bold">:</span>

            <div className={`flex flex-col items-start ${darkMode ? 'text-white':''} `}>
              <p className="text-xs font-medium -mt-3">Minutes</p>
              <p className="text-xl sm:text-3xl md:text-3xl lg:text-[32px] font-semibold sm:font-semibold md:font-bold lg:font-bold">
                19
              </p>
            </div>
            <span className="text-primary text-lg font-bold">:</span>

            <div className={`flex flex-col items-start ${darkMode ? 'text-white':''} `}>
              <p className="text-xs font-medium -mt-3">Seconds</p>
              <p className="text-xl sm:text-3xl md:text-3xl lg:text-[32px] font-semibold sm:font-semibold md:font-bold lg:font-bold">
                56
              </p>
            </div>
          </div>

          {/* arrow */}
          <div className="hidden sm:flex gap-2 -mt-[120px] sm:-mt-2 lg:-mt-1">
            <BsArrowLeftShort className="sm:arrow_desktop" />
            <BsArrowRightShort className="sm:arrow_desktop" />
          </div>
        </div>
      </div>
    </div>
  );
}
