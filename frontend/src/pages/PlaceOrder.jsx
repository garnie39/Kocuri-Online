import React, { useContext, useState } from "react";
import Title from "../components/Title";
import CartTotal from "../components/CartTotal";
import { assets } from "../assets/assets.js";
import { ShopContext } from "../context/ShopContext.jsx";

const PlaceOrder = () => {
  const [method, setMethod] = useState("card");

  const { navigate } = useContext(ShopContext);

  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t">
      {/* Left side */}

      <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
        <div className="text-xl sm:text-2xl my-3">
          <Title text1={"DELIVERY"} text2={"INFORMATION"} />
        </div>
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="First name"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="Last name"
          />
        </div>

        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="email"
          placeholder="Email address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="number"
          placeholder="Phone number"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Address"
        />
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="City"
        />
        <div className="flex gap-3">
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="text"
            placeholder="State"
          />
          <input
            className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
            type="number"
            placeholder="Postcode"
          />
        </div>
        <input
          className="border border-gray-300 rounded py-1.5 px-3.5 w-full"
          type="text"
          placeholder="Country"
        />
      </div>

      {/* right side */}

      <div className="mt-8 ">
        <div className="mt-8 min-w-80">
          <CartTotal />
        </div>
        <div className="mt-12 ">
          <Title text1={"PAYMENT"} text2={"METHOD"} />

          {/* Payment method selection */}

          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("card")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-5 h-5 border rounded-full ${
                  method === "card" ? "bg-[#FFA851]" : ""
                }`}
              ></p>
              <img className="h-8 mx-4" src={assets.cardIcon} alt="" />
            </div>
            <div
              onClick={() => setMethod("paypal")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-5 h-5 border rounded-full ${
                  method === "paypal" ? "bg-[#FFA851]" : ""
                }`}
              ></p>
              <img className="h-10 mx-4" src={assets.paypalIcon} alt="" />
            </div>
          </div>
          <div className="w-full text-end mt-8">
            <button
              onClick={() => navigate("/order")}
              className="bg-[#FFA851] text-white text-sm px-16 py-3"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
