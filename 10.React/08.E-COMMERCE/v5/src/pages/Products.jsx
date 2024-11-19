import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const API_KEY = "https://dummyjson.com/products";

  const [products, setProducts] = useState(null);

  const getProductData = async () => {
    const response = await axios(API_KEY);

    setProducts(response?.data?.products);
  };

  // useEffect ak bar call hoga (in this case)
  useEffect(() => {
    getProductData();
  }, []);

  console.log("products ", products);

  return (
    <div>
      {products === null ? "Loading...." : null}

      <div className="flex flex-wrap gap-4">
        {products?.map((item) => (
          <ProductCard key={item.id} image={item.thumbnail} />
        ))}
      </div>
    </div>
  );
}
