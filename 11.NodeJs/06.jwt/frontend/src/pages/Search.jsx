import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  const [searchParams] = useSearchParams();
  const searchTerm = searchParams.get("query");

  const { products, isLoading, error } = useProducts(
    `/search?q=${searchTerm}&limit=50`,
  );

  return (
    <div
      className={`container-x transition-colors duration-300 ${
        darkMode ? "bg-slate-900" : ""
      } `}
    >
      {products === null ? "Loading...." : null}

      <div className="flex flex-wrap justify-center gap-4">
        {products?.length === 0 ? "product not found" : ""}

        {products?.map((item) => (
          <ProductCard
            darkMode={darkMode}
            id={item.id}
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
