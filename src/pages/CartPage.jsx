import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useContext(ShopContext);

  // 🧮 Calculate total price
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">
        🛒 Your Shopping Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-xl shadow-md max-w-xl mx-auto">
          <p className="text-gray-600 text-lg">Your cart is empty!</p>
          <NavLink
            to="/shop"
            className="inline-block mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition shadow-md"
          >
            Continue Shopping
          </NavLink>
        </div>
      ) : (
        <div className="grid lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* 🟢 Left: Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-5 rounded-xl shadow-sm border hover:shadow-lg transition"
              >
                {/* Product Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-cover rounded-lg border"
                />

                {/* Product Details */}
                <div className="flex-1 ml-5">
                  <h2 className="font-semibold text-gray-800 text-lg">
                    {item.name}
                  </h2>
                  <p className="text-orange-600 font-bold mt-1">
                    ₹{item.price}
                  </p>

                  {/* Quantity Control */}
                  <div className="flex items-center mt-3">
                    <button
                      onClick={() =>
                        updateQuantity(item.id, Math.max(1, item.qty - 1))
                      }
                      className="px-3 py-1 bg-gray-200 rounded-l-lg hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="px-5 py-1 border-t border-b font-medium">
                      {item.qty}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.qty + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r-lg hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-600 ml-5 p-2 rounded-full hover:bg-red-100 transition"
                  title="Remove Item"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>

          {/* 🟡 Right: Order Summary */}
          <div className="bg-white p-6 rounded-xl shadow-md border h-fit sticky top-24">
            <h2 className="text-xl font-bold mb-6 text-gray-800">
              Order Summary
            </h2>

            <div className="space-y-3 text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-medium">₹{total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold pt-3 border-t">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
            </div>

            <button className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-medium transition shadow-md">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
