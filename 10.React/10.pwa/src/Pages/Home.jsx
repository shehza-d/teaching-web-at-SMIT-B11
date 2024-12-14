import Hero from "../Components/Hero";
import Timer from "../Components/Timer";
import FlashSale from "../Components/FlashSale";
import SellingProduct from "../Components/SellingProduct";
import BrowserCategories from "../Components/BrowserCategories";
import Categories from "../Components/Categories";
import ExploreProduct from "../Components/ExploreProduct";
import Feature from "../Components/Feature";
import DeliverySection from "../Components/DeliverySection";

export default function Home() {
  return (
    <div>
      <Hero />
      <Timer />
      <FlashSale />
      <BrowserCategories />
      <SellingProduct />
      <Categories />
      <ExploreProduct />
      <Feature />
      <DeliverySection />
    </div>
  );
}
