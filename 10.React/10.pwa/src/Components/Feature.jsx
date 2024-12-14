import { useSelector } from "react-redux";
import feature1_img from "../assets/images/feature1.png";
import feature2_img from "../assets/images/feature2.png";

export default function Feature() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="mx-4 md:mx-16 xl:mx-[92px]  ">
        <div className="pt-12 sm:pt-14  xl:pt-20">
          <div className="flex gap-3 md:gap-4 items-center">
            <span className="bg-primary py-4 md:py-5 px-[8px] md:px-[10px] rounded"></span>
            <span className="text-primary font-semibold text-sm md:text-base">
              Featured
            </span>
          </div>
          <h3 className={`flex  text-lg sm:text-3xl md:text-3xl lg:text-4xl font-semibold mt-3 sm:mt-5 ${darkMode ? 'text-white':''}`}>
            New Arrival
          </h3>
        </div>

        <div className="flex gap-7 py-4 sm:py-10 lg:py-14">
          <div>
            <img src={feature1_img} alt="" />
          </div>
          <div>
            <img src={feature2_img} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
