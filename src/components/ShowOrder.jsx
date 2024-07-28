import React from "react";
import { useSelector } from "react-redux";
import WhatIsMyOrder from "./WhatIsMyOrder";

function ShowOrder() {
  const orders = useSelector((state) => state.orders);

  return (
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Product</th>
            <th className="border border-gray-300 p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">{order.product}</td>
              <td className="border border-gray-300 p-2">{order.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <WhatIsMyOrder />
    </div>
  );
}

export default ShowOrder;
