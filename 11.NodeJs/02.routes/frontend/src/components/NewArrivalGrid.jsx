import img1 from "../assets/images/ps5.png";
import img2 from "../assets/images/baji.png";
import img3 from "../assets/images/speaker.png";
import img4 from "../assets/images/perfume.png";

export default function NewArrivalGrid() {
  return (
    <div className="main grid grid-cols-4 gap-8 grid-rows-2">
      <div className="bg-[#0D0D0D] relative text-gray-200 rounded col-span-2 row-span-2">
        <img
          className="object-contain w-full h-full "
          src={img1}
          alt="product image"
        />

        <div className="absolute gap-3 flex-col flex bottom-0 p-6">
          <h3 className="font-semibold text-2xl">Women's Collections</h3>
          <p className="w-3/5 line-clamp-3">
            Featured woman collections that give you another vibe.
          </p>
          <a className="underline" href="#">
            Shop Now
          </a>
        </div>
      </div>
      <div className="relative bg-[#0D0D0D] text-gray-200 rounded col-span-2">
        <img
          className="object-contain  h-full w-full"
          src={img2}
          alt="product image"
        />

        <div className="absolute gap-3 flex-col flex bottom-0 p-6">
          <h3 className="font-semibold text-2xl">Women's Collections</h3>
          <p className="w-3/5 line-clamp-3">
            Featured woman collections that give you another vibe.
          </p>
          <a className="underline" href="#">
            Shop Now
          </a>
        </div>
      </div>
      <div className="bg-[#0D0D0D] relative group text-gray-200 rounded">
        <img
          className="object-contain group-hover:scale-110 transition duration-300 h-full w-full"
          src={img3}
          alt="product image"
        />
        <div className="absolute gap-2 flex-col flex bottom-0 p-6">
          <h3 className="S_Underline relative inline-block w-fit after:bg-white group-hover:after:left-0 after:-bottom-1 group-hover:after:w-[100%] font-semibold text-2xl">
            Speakers
          </h3>
          <p className="line-clamp-3">Amazon wireless speakers</p>
          <a className="underline" href="#">
            Shop Now
          </a>
        </div>{" "}
      </div>

      <div className="bg-black">
        <div
          style={{
            backdropFilter: "blur(300px)",
            backgroundColor: "rgba(217, 217, 217, 0.2)",
          }}
          className="bg-[#0D0D0D] h-full relative text-gray-200 rounded"
        >
          <img
            className="object-contain  h-full w-full"
            src={img4}
            alt="product image"
          />

          <div className="absolute gap-2 flex-col flex bottom-0 p-6">
            <h3 className="font-semibold text-2xl">Perfume</h3>
            <p className="line-clamp-3">GUCCI INTENSE OUD EDP </p>
            <a className="underline" href="#">
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
