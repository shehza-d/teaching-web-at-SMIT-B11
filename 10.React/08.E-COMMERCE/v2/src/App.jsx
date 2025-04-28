import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <>
      {/* <div className="h-screen lg:bg-orange-500 bg-red-500 md:bg-green-500"> */}
      {/* <div className="h-screen lg:bg-orange-500 testing:bg-purple-500 bg-red-500 md:bg-green-500"></div> */}
      <Banner />
      <Navbar />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </>
  );
}

export default App;
