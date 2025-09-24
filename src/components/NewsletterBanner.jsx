import React from "react";
import { FiMail } from "react-icons/fi";
import saree from "../assets/sareeforbest.jpg"

export default function NewsletterBanner() {
  return (
    <section className="bg-[#00000] w-full py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        {/* Left Image */}
        <img
          src={saree}
          alt="Headphones"
          className="w-60 md:w-72 object-contain mb-6 md:mb-0 rounded-full"
        />

        {/* Right Content */}
        <div className="text-center md:text-left flex-1 md:ml-10">
          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Get <span className="text-yellow-500">20% Off</span> Discount Coupon
          </h2>
          <p className="text-gray-700 mb-6">
            by Subscribe our Newsletter
          </p>

          {/* Email Input + Button */}
          <div className="flex w-full max-w-lg mx-auto md:mx-0">
            <div className="flex items-center border border-gray-300 bg-white px-3 w-full">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Email Address"
                className="flex-1 py-3 outline-none text-sm text-gray-700"
              />
            </div>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-medium px-6 md:px-8 py-3 transition">
              Get the Coupon
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
