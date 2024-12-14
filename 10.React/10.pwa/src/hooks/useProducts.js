import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts(query) {
    const API_URL = `https://dummyjson.com/products?${query}`;

    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const getProductData = async () => {
      try {
        setError(null)
        setIsLoading(true)
        const response = await axios(API_URL);
  
        // console.log("response=>", response.data.products);
        setProducts(response?.data?.products);
      } catch (error) {
        setError(error?.response?.statusText || "Unkown error, please try again")
        console.log("error ha koi",error?.response?.statusText);
      }
      finally{
        setIsLoading(false)
  
      }
  
    };
  
    useEffect(() => {
      getProductData();
    }, []);

    return{
        products : products,
        isLoading : isLoading,
        error : error
    }
}
