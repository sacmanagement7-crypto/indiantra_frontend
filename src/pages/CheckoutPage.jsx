import React, { useState } from "react";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("online");

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Billing Details */}
      <div className="border rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">
          Billing Details
        </h2>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="First name *"
              className="w-full border p-2 rounded"
              required
            />
            <input
              type="text"
              placeholder="Last name *"
              className="w-full border p-2 rounded"
              required
            />
          </div>

          <input
            type="text"
            placeholder="Company name (optional)"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Country / Region"
            value="India"
            disabled
            className="w-full border p-2 rounded bg-gray-100"
          />

          <input
            type="text"
            placeholder="Street address *"
            className="w-full border p-2 rounded"
            required
          />
          <input
            type="text"
            placeholder="Apartment, suite, unit, etc. (optional)"
            className="w-full border p-2 rounded"
          />

          <input
            type="text"
            placeholder="Town / City *"
            className="w-full border p-2 rounded"
            required
          />

          <select className="w-full border p-2 rounded" defaultValue="Goa">
            <option>Goa</option>
            <option>Maharashtra</option>
            <option>Karnataka</option>
            <option>Delhi</option>
          </select>

          <input
            type="text"
            placeholder="PIN Code *"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="text"
            placeholder="Phone *"
            className="w-full border p-2 rounded"
            required
          />

          <input
            type="email"
            placeholder="Email address *"
            className="w-full border p-2 rounded"
            required
          />

          <div className="flex items-center space-x-2">
            <input type="checkbox" id="account" className="w-4 h-4" />
            <label htmlFor="account" className="text-sm">
              Create an account?
            </label>
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div className="border rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Your Order</h2>

        <div className="flex justify-between mb-2 text-sm">
          <span>7-Piece Wooden Tangram Puzzle Game With Cards × 1</span>
          <span className="font-semibold text-green-600">₹299.00</span>
        </div>

        <div className="flex justify-between border-t pt-2 text-sm">
          <span>Subtotal</span>
          <span>₹299.00</span>
        </div>

        <div className="flex justify-between text-sm">
          <span>Shipping</span>
          <span>Ship Charge</span>
        </div>

        <div className="flex justify-between border-t pt-2 font-semibold">
          <span>Total</span>
          <span className="text-green-600">₹299.00</span>
        </div>

        {/* Payment Methods */}
        <div className="mt-6 space-y-3">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={payment === "cod"}
              onChange={() => setPayment("cod")}
            />
            <span>Cash On Delivery</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="radio"
              checked={payment === "online"}
              onChange={() => setPayment("online")}
            />
            <span>Pay Online</span>
          </label>
          {payment === "online" && (
            <p className="text-xs text-gray-500 ml-6">
              Pay by Credit Card / Debit Card / Net Banking / UPI
            </p>
          )}
        </div>

        {/* Place Order Button */}
        <button className="mt-6 w-full bg-[#ffb938] hover:bg-[#e89e22] text-white font-semibold py-3 rounded-lg">
          Place Order
        </button>

        <p className="text-xs text-gray-500 mt-4">
          Your personal data will be used to process your order, support your
          experience throughout this website, and for other purposes described
          in our{" "}
          <a href="#" className="text-blue-600 underline">
            privacy policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
