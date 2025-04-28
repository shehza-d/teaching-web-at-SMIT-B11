import delivery_img from "../assets/images/deliverySec_images/delivery.png";
import customer_img from "../assets/images/deliverySec_images/customer.png";
import moneyBag_img from "../assets/images/deliverySec_images/moneyBag.png";
import { BsArrowUpShort } from "react-icons/bs";
import { useSelector } from "react-redux";

function Delivery(props) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className="flex flex-col items-center text-center gap-2 sm:gap-4 pt-8 lg:pt-16  sm:mb-10">
      <img
        src={props.deliveryImage}
        alt=""
        className={`${darkMode ? "bg-gray-300 rounded-full" : ""}`}
      />
      <h3
        className={`${darkMode ? "text-white" : ""} text-lg lg:text-xl font-semibold mt-4`}
      >
        {props.deliveryName}
      </h3>
      <p
        className={`${darkMode ? "text-white" : ""} text-xs lg:text-sm flex items-center sm:h-4 lg:h-0`}
      >
        {props.deliveryTitle}
      </p>
    </div>
  );
}
export default function DeliverySection() {
  const darkMode = useSelector((state) => state.darkMode.darkMode);

  return (
    <div className={`${darkMode ? "bg-slate-900" : ""}`}>
      <div className="flex flex-col sm:flex-row mx-4 md:mx-16 xl:mx-[92px] items-center justify-between xl:justify-evenly sm:gap-3">
        <Delivery
          deliveryImage={delivery_img}
          deliveryName="FREE AND FAST DELIVERY"
          deliveryTitle="Free delivery for all orders over $140"
        />
        <Delivery
          deliveryImage={customer_img}
          deliveryName="24/7 CUSTOMER SERVICE"
          deliveryTitle="Friendly 24/7 customer support"
        />
        <Delivery
          deliveryImage={moneyBag_img}
          deliveryName="MONEY BACK GUARANTEE"
          deliveryTitle="We reurn money within 30 days"
        />
      </div>
      <a
        href="#"
        className="flex justify-end mt-6 mr-4 md:mr-16 xl:mr-[92px] pb-8"
      >
        <BsArrowUpShort className="arrow_mobile sm:arrow_desktop" />
      </a>
    </div>
  );
}
