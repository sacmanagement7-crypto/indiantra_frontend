import React from "react";
import Homemade from "../assets/Homemade.webp";
import Homedecor from "../assets/Homedecor.webp";
import Toys from "../assets/Toys.webp";
import natural from "../assets/natural.webp";

export default function HeroSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 py-14">
      {/* Left Big Banner */}
      <div className="group md:col-span-2 bg-gradient-to-r from-[#fffdf9] to-[#fff9f0] border border-[#ffb938]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between p-10 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="max-w-md space-y-4 text-center md:text-left">
          <span className="bg-[#ffb938] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            🎉 New Release
          </span>
          <h2 className="text-lg font-medium text-gray-500">Toys Collection</h2>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Fun & Learning <br /> For Every Kid
          </h1>
          <a
            href="#"
            className="inline-block mt-6 bg-black hover:bg-[#ffb938] hover:text-black text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300"
          >
            Shop Now →
          </a>
        </div>
        <img
          src={Toys}
          alt="Toys"
          className="w-2/3 md:w-1/2 object-contain drop-shadow-lg transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Right Top Banner */}
      <div className="group bg-gradient-to-r from-[#fffdf7] to-[#fff8ec] border border-[#ffb938]/30 rounded-2xl flex items-center justify-between p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="space-y-3">
          <span className="bg-[#ffb938] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            🏡 Home Decor
          </span>
          <h2 className="text-2xl font-bold text-gray-900">Stylish & Cozy</h2>
          <a
            href="#"
            className="inline-block mt-4 bg-black hover:bg-[#ffb938] hover:text-black text-white text-sm font-semibold px-5 py-2 rounded-lg shadow transition-all duration-300"
          >
            Explore →
          </a>
        </div>
        <img
          src={Homedecor}
          alt="Home Decor"
          className="w-1/3 object-contain drop-shadow-md transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Right Bottom Banner */}
      <div className="group bg-gradient-to-r from-[#fffdf7] to-[#fffaf3] border border-[#ffb938]/30 rounded-2xl flex items-center justify-between p-6 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="space-y-3">
          <span className="bg-[#ffb938] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            🍯 Homemade
          </span>
          <h2 className="text-2xl font-bold text-gray-900 leading-snug">
            Fresh & Authentic <br /> Best Deals
          </h2>
          <a
            href="#"
            className="inline-block mt-4 bg-black hover:bg-[#ffb938] hover:text-black text-white text-sm font-semibold px-5 py-2 rounded-lg shadow transition-all duration-300"
          >
            Shop Now →
          </a>
        </div>
        <img
          src={Homemade}
          alt="Homemade"
          className="w-1/3 object-contain drop-shadow-md transform group-hover:scale-105 transition-all duration-300"
        />
      </div>

      {/* Bottom Wide Banner */}
      <div className="group md:col-span-2 bg-gradient-to-r from-[#fffdf8] to-[#fff9f0] border border-[#ffb938]/30 rounded-2xl flex flex-col md:flex-row items-center justify-between p-10 shadow-md hover:shadow-xl transition-all duration-300">
        <div className="max-w-md space-y-4 text-center md:text-left">
          <span className="bg-[#ffb938] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
            🌿 Limited-Time Deal
          </span>
          <h2 className="text-3xl font-bold text-gray-900 leading-tight">
            Unlock Huge Savings <br /> on Premium Products
          </h2>
          <a
            href="#"
            className="inline-block mt-6 bg-black hover:bg-[#ffb938] hover:text-black text-white text-sm font-semibold px-6 py-3 rounded-lg shadow transition-all duration-300"
          >
            Shop Now →
          </a>
        </div>
        <img
          src={natural}
          alt="Exclusive Offers"
          className="w-2/3 md:w-1/2 object-contain drop-shadow-lg transform group-hover:scale-105 transition-all duration-300"
        />
      </div>
    </section>
  );
}
