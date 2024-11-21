import img from "../assets/images/game.png";

export default function ProductCard(Props) {
  return (
    <div className="group border-2 flex gap-4 flex-col relative bg-[#F5F5F5] w-64 h-[350px]">
      <div className="discount absolute top-3 left-3 bg-primary w-14 h-6 rounded flex items-center text-xs justify-center text-white ">
        -40%
      </div>

      <div className="">
        <img
          src={Props.image}
          alt="product img"
          className="m-auto group-hover:scale-110 transition-all duration-300"
        />
      </div>

      <h3 className="font-medium group-hover:text-primary transition-all duration-300">
       {Props.name}
      </h3>

      <p>
        <span>$120</span> <span>$160</span>
      </p>

      <p>stars</p>
    </div>
  );
}
