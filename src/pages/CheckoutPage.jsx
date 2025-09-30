import React, { useState } from "react";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("online");

  return (
    <div className="max-w-6xl mx-auto p-6 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Billing Details */}
      <div className="border rounded-2xl shadow-md p-6 lg:p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          Billing Details
        </h2>

        <form className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name *"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
            <input
              type="text"
              placeholder="Last name *"
              className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Company name (optional)"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="Country / Region"
            value="India"
            disabled
            className="w-full border p-3 rounded-lg bg-gray-100 text-gray-600"
          />

          <input
            type="text"
            placeholder="Street address *"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
          />

          <input
            type="text"
            placeholder="Town / City *"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />

          <select className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none">
            <option>Goa</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Delhi</option>
          </select>

          <input
            type="text"
            placeholder="PIN Code *"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />

          <input
            type="text"
            placeholder="Phone *"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />

          <input
            type="email"
            placeholder="Email address *"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-yellow-400 outline-none"
            required
          />

          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="account"
              className="w-4 h-4 accent-yellow-500"
            />
            <label htmlFor="account" className="text-sm text-gray-700">
              Create an account?
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="border rounded-2xl shadow-md p-6 lg:p-8 bg-white">
        <h2 className="text-2xl font-semibold mb-6 border-b pb-3">
          Your Order
        </h2>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span>7-Piece Wooden Tangram Puzzle Game With Cards × 1</span>
            <span className="font-semibold text-green-600">₹299.00</span>
          </div>

          <div className="flex justify-between border-t pt-3">
            <span>Subtotal</span>
            <span>₹299.00</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span className="text-gray-600">Calculated at checkout</span>
          </div>

          <div className="flex justify-between border-t pt-3 font-semibold text-lg">
            <span>Total</span>
            <span className="text-green-600">₹299.00</span>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 space-y-4">
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
              className="accent-yellow-500"
            />
            <span>Cash On Delivery</span>
          </label>

          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="radio"
              checked={payment === "online"}
              onChange={() => setPayment("online")}
              className="accent-yellow-500"
            />
            <span>Pay Online</span>
          </label>
          {payment === "online" && (
            <p className="text-xs text-gray-500 ml-7">
              Pay securely via Credit Card, Debit Card, Net Banking, or UPI.
            </p>
          )}
        </div>

        {/* Place Order Button */}
        <button className="mt-8 w-full bg-yellow-500 hover:bg-yellow-600 transition-colors text-white font-semibold py-3 rounded-xl shadow-md">
          Place Order
        </button>

        <p className="text-xs text-gray-500 mt-5 leading-relaxed">
          Your personal data will be used to process your order, support your
          shopping experience, and for other purposes described in our{" "}
          <a href="#" className="text-blue-600 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
