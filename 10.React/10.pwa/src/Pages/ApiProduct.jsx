import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import { CiSearch } from "react-icons/ci";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";

export default function ApiProduct() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const {products,isLoading,error} = useProducts("limit=30&skip=4")

  // console.log("products=>", products);
  const [searchTerm, setSearchTerm] = useState("");
  console.log("searchTerm", searchTerm);

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title
        .toLocaleLowerCase()
        .includes(searchTerm.toLocaleLowerCase());
    });
    console.log("result", result);

    return result || [];
  };
  const searchResult = searchProducts();

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="flex items-center border border-gray-300 rounded-md h-10 container-x mt-10 mb-5 bg-secondary pl-1 pr-5">
        <input
          type="search"
          onChange={(event) => {
            setSearchTerm(event.target.value?.toLowerCase());
          }}
          className="w-full outline-none bg-transparent"
        />
        <CiSearch className="text-xl sm:text-2xl font-extrabold text-black" />
      </div>
      <div className="flex flex-wrap gap-2 sm:gap-2 xl:gap-7 justify-center items-center text-center  mx-4 md:mx-16 lg:mx-[92px]  sm:py-4 md:py-6 lg:py-10">

        {searchResult.length === 0 ? "product not found..." : ""}

        {searchResult?.map((item) => {
          return (
            <ProductCard
              id={item.id}
              cardImage={item.thumbnail}
              cardDiscount={`-${Math.round(item.discountPercentage)}%`}
              cardName={item.title}
              oldRate={`$${item.price}`}
              discountedRate={`$${(item.price - (item.price * item.discountPercentage) / 100).toFixed(2)}`}
              percent={item.rating}
              rating={item.rating}
            />

            
          );
        })}
      </div>
    </div>
  );
}
