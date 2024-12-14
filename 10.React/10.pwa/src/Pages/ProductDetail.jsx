import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactStars from "react-stars";
import useSWR from "swr";

import { IoHeartOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { HiArrowPath } from "react-icons/hi2";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const params = useParams();
  console.log("params", params);
  const { data, error, isLoading } = useSWR(
    `https://dummyjson.com/products/${params.id}`,
    axios
  );
  const product = data?.data;
  console.log("data ha ye mera", product);

  const [selectedImage, setSelectedImage] = useState(null);
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(product?.minimumOrderQuantity);
  }, [data]);
  
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <main className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className=" mx-4 md:mx-16 xl:mx-[92px] ">
        <div className="product md:h-[calc(100vh-133px)]  lg:mb-0 w-[calc(100%)] flex flex-col md:flex-row items-center  gap-6 lg:gap-0 justify-between">
          {/* produt images */}
          <div className="product-images flex gap-3 sm:gap-6 md:gap-3 lg:gap-6 sm:items-center justify-center w-[100%] md:w-[50%] lg:w-[60%] py-6 sm:py-8 md:py-0 h-[calc(100vh-133px)] md:h-[300px] lg:h-[400px] xl:h-[450px] ">
            {product?.images?.length > 1 ? (
              <div className="w-[25%] sm:w-[20%] md:w-[30%] lg:w-[20%] h-full  ">
                <div className="w-full flex flex-col gap-3 ">
                  {product?.images?.map((image, i) => (
                    <img
                      key={i}
                      src={image}
                      alt=""
                      className={`${darkMode ? "bg-gray-300":"bg-secondary"} rounded h-[85px] sm:h-[105px] md:h-[92px] lg:h-[125px] xl:h-[142px] object-contain`}
                      onClick={() => setSelectedImage(image)}
                    />
                  ))}
                </div>
              </div>
            ) : null}
            <div className={`${darkMode ? "bg-gray-300":"bg-secondary"} w-[75%] sm:w-[80%] md:w-[400px] rounded flex items-center justify-center h-[280px] sm:h-full`}>
              <img
                src={selectedImage || product?.images[0]}
                alt=""
                className="h-full object-cover "
              />
            </div>
          </div>
          {/* product details */}
          <div className="product-detail w-[100%] md:w-[50%] lg:w-[40%] h-[480px]  flex flex-col gap-1 md:gap-0 lg:gap-[2px] xl:gap-1 md:py-[85px] lg:py-9 xl:py-3">
            <h2 className={`${darkMode ? "text-white":""} sm:text-lg md:text-base lg:text-lg font-semibold`}>{product?.title}</h2>
            <div className="flex text-center items-center text-[#FFAD33] gap-2 ">
              <ReactStars
                count={5}
                value={product?.rating}
                edit={false}
                size={20}
                color2={"#FFAD33"}
              />
              <span className=" text-gray-500 font-semibold text-sm">
                ({product?.rating})
              </span>
              <p className="text-gray-700 ml-2">|</p>
              <p className="text-[#00FF66] text-sm ml-2">{product?.availabilityStatus}</p>
            </div>
            <p className="text-primary text-xl sm:text-2xl md:text-xl lg:text-2xl">{`$${(product?.price * count).toFixed(
              2
            )}`}</p>
            <p className={`${darkMode ? "text-white":""} text-xs sm:text-sm md:text-xs lg:text-sm mt-1 sm:mt-2 md:mt-1 lg:mt-3 w-full md:max-w-[400px] border-b border-y-gray-400 pb-2 lg:pb-4`}>
              {product?.description}
            </p>
            <div className="flex gap-3 items-center mt-4 lg:mt-5">
              <div className="w-32 sm:w-40 md:w-32 lg:w-40 h-10 sm:h-11 md:h-10 lg:h-11 border border-gray-400 rounded flex ">
                <button
                  className={`${darkMode ? "text-white":""} w-[40%] text-3xl border-r border-r-gray-400`}
                  onClick={() => {
                    if (count < 2 || count <= product?.minimumOrderQuantity)
                      return;
                    setCount(count - 1);h
                  }}
                >
                  -
                </button>
                <p className={`${darkMode ? "text-white":""} w-[50%] text-center text-xl font-medium pt-2`}>
                  {count}
                </p>
                <button
                  className="w-[40%] bg-primary text-3xl text-white"
                  onClick={() => setCount(count + 1)}
                >
                  +
                </button>
              </div>
              <div>
                <button className="w-32 sm:w-44 md:w-32 lg:w-44 h-10 sm:h-11 md:h-10 lg:h-11 bg-primary rounded text-white">
                  Buy Now
                </button>
              </div>
              <div>
                <a
                  href=""
                  className={`${darkMode ? "text-white hover:text-black":""} w-10 sm:w-10 md:w-9 lg:w-10 h-9 sm:h-10 md:h-9 lg:h-10 text-2xl icons flex items-center justify-center border border-gray-400 rounded`}
                >
                  <IoHeartOutline className=" text-2xl " />
                </a>
              </div>
            </div>

            <div className={`${darkMode ? "text-white":""} border border-gray-400 rounded lg:w[100%] xl:w-[87%] mt-4 md:mt-4 xl:mt-6`}>
              <div className="flex gap-4 xl:gap-4  items-center p-2 md:p-1 lg:p-2 xl:p-3 border-b border-b-gray-400">
                <TbTruckDelivery className="text-2xl lg:text-3xl"/>
                <div className="flex flex-col gap-1 xl:gap-2">
                  <h4 className="font-medium">Free Delivery</h4>
                  <p className="text-xs border-b border-b-gray-700">Enter your postal code for Delivery Availability</p>
                </div>
              </div>
              <div className="flex gap-4 xl:gap-4  items-center p-2 md:p-1 lg:p-3">
                <HiArrowPath className="text-2xl lg:text-3xl"/>
                <div className="flex flex-col gap-1 xl:gap-2">
                  <h4 className="font-medium">Return Delivery</h4>
                  <p className="text-xs">{product?.returnPolicy}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
