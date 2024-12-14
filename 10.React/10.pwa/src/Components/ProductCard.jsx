import { TiHeartOutline } from "react-icons/ti";
import { FiEye } from "react-icons/fi";
import ReactStars from "react-stars";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function ProductCard(Props) {
  //   console.log(Props);
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <Link to={`/product/${Props.id}`} className={`w-[calc(50%-8px)] sm:w-[calc(32%)] lg:w-[calc(25%-10px)] xl:w-[calc(25%-28px)] h-auto mt-5 rounded mx-auto ${darkMode ? "bg-gray-300":""}`}>
      <div className={`w-full ${darkMode ? "bg-gray-300":"bg-secondary"}  rounded flex items-center justify-center `}>
        <div className="relative  w-full p-2 sm:p-3">
          <div className="absolute top-2 sm:top-3">
            {Props.cardDiscount ? (
              <p className="bg-primary rounded text-white text-xs  py-1 px-2 sm:py-[5px] sm:px-3 ">
                {Props.cardDiscount}
              </p>
            ) : Props.newItem ? (
              <p className="bg-[#00FF66] rounded text-white text-xs  py-1 px-2 sm:py-[5px] sm:px-3">
                {Props.newItem}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col gap-[3px] sm:gap-2 absolute right-2 sm:right-3">
            <TiHeartOutline className="card_icon_mobile sm:card_icon_desktop" />
            <FiEye className="card_icon_mobile sm:card_icon_desktop" />
          </div>
          <div className="flex items-center justify-center min-h-[147px] sm:min-h-[170px] md:min-h-[180px] lg:min-h-[190px] xl:min-h-[230px]">
            <img src={Props.cardImage} className="" alt="controller" />
          </div>
        </div>
      </div>
      <div className={`flex flex-col ${darkMode ? "px-3":""}`}>
        <p className=" pt-3 sm:pt-4 font-normal  sm:font-medium text-sm sm:text-base text-start">
          {Props.cardName}
        </p>
        <p className="flex gap-2 sm:gap-3 pt-[6px] sm:pt-2">
          <span className="text-primary  text-sm sm:text-base font-medium">
            {Props.discountedRate}
          </span>
          <span className="text-sm sm:text-base font-medium text-gray-500 line-through">
            {Props.oldRate}
          </span>
        </p>
        <div className="flex text-center items-center text-[#FFAD33] gap-2 ">
          <ReactStars
            className="react-stars"
            count={5}
            value={Props.rating}
            edit={false}
            size={20}
            color2={"#FFAD33"}
          />
          <span className=" text-gray-500 font-semibold text-sm">
            ({Props.percent})
          </span>
        </div>
      </div>
    </Link>
  );
}
