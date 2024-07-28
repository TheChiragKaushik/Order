import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOrder, updateOrder, resetOrder } from "../features/orderSlice";
import ShowOrder from "./ShowOrder";

function NewOrder() {
  const products = [
    "Pencil",
    "Eraser",
    "Pens",
    "Ruler",
    "Notebook",
    "Scissors",
    "Sharpener",
    "Marker",
  ];
  const quantities = [1, 2, 3, 4, 5];

  const initialOrdersState = [
    { selectedProduct: "", selectedQuantity: 0, disabled: false },
  ];

  const [orders, setOrders] = useState(initialOrdersState);
  const [showOrder, setShowOrder] = useState(false);

  const dispatch = useDispatch();
  const existingOrders = useSelector((state) => state.orders);

  const add = (index) => {
    const order = orders[index];
    if (order.selectedProduct && order.selectedQuantity > 0) {
      const existingOrder = existingOrders.find(
        (o) => o.product === order.selectedProduct
      );

      if (existingOrder) {
        dispatch(
          updateOrder({
            id: existingOrder.id,
            product: order.selectedProduct,
            quantity: order.selectedQuantity,
          })
        );
      } else {
        dispatch(
          addOrder({
            product: order.selectedProduct,
            quantity: order.selectedQuantity,
          })
        );
      }

      const newOrders = orders.map((order, idx) =>
        idx === index ? { ...order, disabled: true } : order
      );

      if (newOrders.length < 8) {
        newOrders.push({
          selectedProduct: "",
          selectedQuantity: 0,
          disabled: false,
        });
      }

      setOrders(newOrders);
    } else {
      alert("Please choose both a product and a quantity.");
    }
  };

  const handleProductChange = (index, value) => {
    const newOrders = [...orders];
    const existingOrderIndex = orders.findIndex(
      (order) => order.selectedProduct === value
    );

    if (existingOrderIndex !== -1 && existingOrderIndex !== index) {
      alert(
        "This product is already selected. Please change the quantity in the existing row."
      );
      newOrders.splice(index, 1);
      newOrders[existingOrderIndex].disabled = false;
    } else {
      newOrders[index].selectedProduct = value;
    }

    setOrders(newOrders);
  };

  const handleQuantityChange = (index, value) => {
    const newOrders = [...orders];
    newOrders[index].selectedQuantity = value;
    setOrders(newOrders);
  };

  const handleShowOrder = () => {
    const filledOrders = orders.filter(
      (order) => order.selectedProduct && order.selectedQuantity > 0
    );

    if (filledOrders.length > 0) {
      setOrders(filledOrders);
      setShowOrder(true);
    } else {
      alert(
        "Please fill in the product and quantity fields before proceeding."
      );
    }
  };

  const handleReset = () => {
    const filledOrders = orders.filter(
      (order) => order.selectedProduct && order.selectedQuantity > 0
    );

    if (filledOrders.length > 0) {
      dispatch(resetOrder());
      setOrders(initialOrdersState);
      setShowOrder(false);
    } else {
      alert(
        "Please fill in the product and quantity fields before proceeding."
      );
    }
  };

  return (
    <div className="p-4">
      <table className="w-full mb-4 border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 p-2">Product Name</th>
            <th className="border border-gray-300 p-2">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td className="border border-gray-300 p-2">
                <select
                  value={order.selectedProduct}
                  onChange={(e) => handleProductChange(index, e.target.value)}
                  disabled={order.disabled || showOrder}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option disabled value="">
                    Choose Product
                  </option>
                  {products.map((product, idx) => (
                    <option key={idx} value={product}>
                      {product}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <select
                  value={order.selectedQuantity}
                  onChange={(e) =>
                    handleQuantityChange(index, Number(e.target.value))
                  }
                  disabled={order.disabled || showOrder}
                  className="w-full p-2 border border-gray-300 rounded"
                >
                  <option disabled value={0}>
                    Choose
                  </option>
                  {quantities.map((q, idx) => (
                    <option key={idx} value={q}>
                      {q}
                    </option>
                  ))}
                </select>
              </td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => add(index)}
                  disabled={order.disabled || showOrder}
                  className="bg-green-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
                >
                  ADD
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={handleShowOrder}
        disabled={showOrder}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 disabled:bg-gray-300"
      >
        Show Order
      </button>
      {showOrder && <ShowOrder />}

      <div className="fixed inset-x-0 bottom-0 mb-20 w-full flex justify-center">
        <button
          onClick={handleReset}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default NewOrder;
