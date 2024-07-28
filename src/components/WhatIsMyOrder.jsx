import React, { useState } from "react";
import { useSelector } from "react-redux";
import { speakOrder } from "../api/index.js";

function WhatIsMyOrder() {
  const orders = useSelector((state) => state.orders);
  const [orderText, setOrderText] = useState("");

  const handleSpeakOrder = async () => {
    const text = orders
      .map((order) => `${order.product} with quantity ${order.quantity}`)
      .join(", ");
    const fullText = `Your order is ${text}`;
    setOrderText(fullText);
    await speakOrder(fullText);
  };

  return (
    <div>
      <button
        className="bg-gray-300 text-white px-4 py-2 rounded-md hover:bg-gray-400"
        onClick={handleSpeakOrder}
      >
        What is my Order?
      </button>
      {orderText && <p>{orderText}</p>}
    </div>
  );
}

export default WhatIsMyOrder;
