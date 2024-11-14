import img1 from "../assets/images/ps5.png";
import img2 from "../assets/images/baji.png";
import img3 from "../assets/images/speaker.png";
import img4 from "../assets/images/perfume.png";

export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-4 gap-8 grid-rows-2">
      <div className="bg-[#0D0D0D] rounded col-span-2 row-span-2">
        <img src={img1} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded col-span-2">
        <img src={img2} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded">
        <img src={img3} alt="product image" />
      </div>
      <div className="bg-[#0D0D0D] rounded">
        <img src={img4} alt="product image" />
      </div>
    </div>
  );
}
