import React from "react";
import NewsletterBanner from "./NewsletterBanner";
import Homemade from "../assets/Homemade.webp";
import Homedecor from "../assets/Homedecor.webp";
import Toys from "../assets/Toys.webp";
import natural from "../assets/natural.webp"; // 👈 add a new image here

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-12">
      {/* Left Big Banner */}
      <div className="md:col-span-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl flex items-center justify-between p-8 shadow-md">
        {/* Text Content */}
        <div className="max-w-md space-y-4">
          <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
            🎉 New Release
          </span>
          <h2 className="text-lg font-medium text-gray-600">Toys Collection</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fun & Learning <br /> For Every Kid
          </h1>
          <a
            href="#"
            className="inline-block mt-6 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
          >
            Shop Now →
          </a>
        </div>
        <img
          src={Toys}
          alt="Toys"
          className="w-1/2 object-contain drop-shadow-lg"
        />
      </div>

      {/* Right Top Banner */}
      <div className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl flex items-center justify-between p-6 shadow-md">
        <div className="space-y-3">
          <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
            🏡 Home Decor
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Stylish & Cozy</h2>
          <a
            href="#"
            className="inline-block mt-4 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow transition"
          >
            Explore →
          </a>
        </div>
        <img
          src={Homedecor}
          alt="Home Decor"
          className="w-1/3 object-contain drop-shadow-md"
        />
      </div>

      {/* Right Bottom Banner */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 rounded-2xl flex items-center justify-between p-6 shadow-md">
        <div className="space-y-3">
          <span className="bg-yellow-400 text-gray-900 text-xs font-semibold px-3 py-1 rounded-full shadow">
            🍯 Homemade
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Fresh & Authentic <br /> Best Deals
          </h2>
          <a
            href="#"
            className="inline-block mt-4 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-semibold px-5 py-2 rounded-lg shadow transition"
          >
            Shop Now →
          </a>
        </div>
        <img
          src={Homemade}
          alt="Homemade"
          className="w-1/3 object-contain drop-shadow-md"
        />
      </div>

      {/* New Bottom Full-Width Banner */}
     <div className="md:col-span-2 bg-gradient-to-r from-green-100 to-green-200 rounded-2xl flex items-center justify-between p-8 shadow-md">
  <div className="max-w-md space-y-4">
    <span className="bg-white text-gray-800 text-xs font-semibold px-3 py-1 rounded-full shadow">
      🌿 Limited-Time Deal
    </span>
    <h2 className="text-3xl font-bold text-gray-900 leading-tight">
      Unlock Huge Savings <br /> on Premium Products
    </h2>
    <a
      href="#"
      className="inline-block mt-6 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition"
    >
      Shop Now →
    </a>
  </div>
  <img
    src={natural}
    alt="Exclusive Offers"
    className="w-1/2 object-contain drop-shadow-lg"
  />
</div>

    </section>
  );
}
