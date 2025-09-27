import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube, FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcDiscover } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-[#ffb938] text-white font-sans">
      {/* 🔹 Main Footer */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-8 py-14 max-w-7xl mx-auto">
        {/* About */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">About Us</h3>
          <p className="text-sm leading-relaxed text-orange-50">
            We bring you the best deals on books and products, blending quality
            with unbeatable prices. Your trusted store for smart shopping.
          </p>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Features</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">About Us</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Terms & Conditions</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Best Products</a></li>
          </ul>
        </div>

        {/* General Links */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">General Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Track Order</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Become a Seller</a></li>
          </ul>
        </div>

        {/* Helpful */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Helpful</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-yellow-300 transition">Flash Sale</a></li>
            <li><a href="/faqs" className="hover:text-yellow-300 transition">FAQ</a></li>
            <li><a href="#" className="hover:text-yellow-300 transition">Support</a></li>
          </ul>
        </div>
      </div>

      {/* 🔹 Bottom Bar */}
      <div className="border-t border-orange-400 px-8 py-6 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto text-sm">
        {/* Social + Copy */}
        <div className="flex items-center space-x-5 mb-4 md:mb-0">
          <a href="#" className="hover:text-yellow-300 transition text-lg"><FaInstagram /></a>
          <a href="#" className="hover:text-yellow-300 transition text-lg"><FaFacebookF /></a>
          <a href="#" className="hover:text-yellow-300 transition text-lg"><FaYoutube /></a>
          <span className="ml-4 text-orange-50">
            © 2025 <span className="font-semibold">SwadeshiEmall</span> · All rights reserved
          </span>
        </div>

        {/* Payments (React Icons) */}
        <div className="flex space-x-4 text-2xl">
          <FaCcVisa className="text-white hover:text-yellow-300 transition" />
          <FaCcMastercard className="text-white hover:text-yellow-300 transition" />
          <FaCcPaypal className="text-white hover:text-yellow-300 transition" />
          <FaCcDiscover className="text-white hover:text-yellow-300 transition" />
        </div>
      </div>
    </footer>
  );
}
