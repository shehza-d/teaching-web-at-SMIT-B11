import { useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import ProductCard from "./ProductCard";
// import controller1_img from "../assets/images/card_images/controller1.png";
// import keyboard_img from "../assets/images/card_images/keyboard.png";
// import screen_img from "../assets/images/card_images/screen.png";
// import chair_img from "../assets/images/card_images/chair.png";
import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function FlashSale() {
  const { products, isLoading, error } = useProducts("limit=4");
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}> 
    <div className={` mx-4 md:mx-16 xl:mx-[92px] ${darkMode ? "bg-slate-900" : ""}`}>
      {isLoading ? "Loading..." : ""}
      {error}

      <div className="flex flex-wrap gap-2 sm:gap-2 xl:gap-7 sm:py-4 md:py-6 lg:py-10">
        {products?.map((item) => {
          return (
            <ProductCard
              id={item.id}
              cardImage={item.thumbnail}
              cardDiscount={`-${Math.round(item.discountPercentage)}%`}
              cardName={item.title}
              oldRate={`$${item.price}`}
              discountedRate={`$${(
                item.price -
                (item.price * item.discountPercentage) / 100
              ).toFixed(2)}`}
              percent={item.rating}
              rating={item.rating}
            />
          );
        })}
      </div>
      <div className={`bg-primary  text-white w-40 h-12 text-sm sm:text-base sm:w-60 sm:h-14 rounded mt-10 sm:my-10 mx-auto text-center p-[15px] sm:p-[18px] hover:cursor-pointer `}>
        <Link to="api-product" className="">
          View All Products
        </Link>
      </div>
      {/* <div className="border-b border-y-gray-300 pb-5 mx-8 md:mx-16 lg:mx-[92px] pt-6 sm:pt-10"></div> */}

      <div className={` border-b border-y-gray-300   pt-8 sm:pt-5 mx-4 sm:mx-0`}></div>
    </div>
      </div>
  );
}
