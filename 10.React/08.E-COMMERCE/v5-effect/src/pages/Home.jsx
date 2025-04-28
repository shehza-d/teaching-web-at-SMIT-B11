import Button from "../components/Button";
import NewArrivalGrid from "../components/NewArrivalGrid";
import ProductCard from "../components/ProductCard";
import SectionTitle from "../components/SectionTitle";
import Slider from "../components/Slider";
import { FaArrowUp } from "react-icons/fa";

export default function Home() {
  return (
    <div className="container-x">
      <SectionTitle text="Today's" />
      <h3 className="heading">Flash Sales</h3>
      <Slider></Slider>

      <Button className="h-14 w-56 mx-auto my-16"> View All Products </Button>

      <SectionTitle text="Categories" />

      <h3 className="heading">Browse By Category</h3>

      {/* todo */}
      <SectionTitle text="This Month" />

      <div className="flex justify-between my-16">
        <h3 className="heading">Best Selling Products</h3>
        <Button className="h-14 w-40">View All</Button>
      </div>
      <div className="flex gap-7">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <SectionTitle text="Our Products" />
      <SectionTitle text="Featured" />
      <h3 className="heading">new arrival</h3>

      <NewArrivalGrid />

      <a
        href="#top"
        className="my-5 w-12 h-12 bg-gray-200 rounded-full block center text-2xl ml-auto"
      >
        <FaArrowUp />
      </a>
    </div>
  );
}
