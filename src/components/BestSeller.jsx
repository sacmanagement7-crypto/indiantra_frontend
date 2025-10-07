import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BestSeller() {
  const { products, wishlist, addToCart, addToWishlist } = useContext(ShopContext);

  const bestSellers = products.filter((p) => p.isRecommended).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-sans z-1">
      {/* Section Header */}
      <div className="text-center mb-12">
        <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 text-xs font-bold px-5 py-2 rounded-full border border-yellow-200 shadow-sm">
          <span className="text-base">📚</span>
          Recommended
        </span>
        <h2 className="mt-5 text-3xl md:text-4xl font-black text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text">
          Handpicked Just For You
        </h2>
        <p className="text-gray-600 mt-3 text-base max-w-2xl mx-auto">
          Discover bestselling books at unbeatable prices
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <div
            key={product._id}
            className="group bg-white border-2 border-gray-100 rounded-2xl hover:border-yellow-300 hover:shadow-2xl transition-all duration-300 p-5 flex flex-col relative overflow-hidden"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg z-10">
              {product.discount}
            </span>

            {/* Wishlist Button */}
            <button
              onClick={() => {
                addToWishlist(product);
              }}
              className="absolute top-3 right-3 bg-white border-2 border-gray-200 rounded-full p-2 hover:bg-red-50 hover:border-red-300 transition-all shadow-md z-10 group-hover:scale-110"
            >
              <FaHeart
                size={16}
                className={`${
                  wishlist.find((w) => w._id === product._id)
                    ? "text-red-500"
                    : "text-gray-500"
                } transition-colors`}
              />
            </button>

            {/* Image */}
            <Link key={product._id} to={`/product/${product._id}`}>
              <div className="flex justify-center items-center mb-5 bg-gradient-to-b from-gray-50 to-white rounded-xl p-4 group-hover:scale-105 transition-transform duration-300">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  className="w-32 h-44 object-contain drop-shadow-lg"
                />
              </div>
            </Link>

            {/* Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px] leading-snug group-hover:text-yellow-700 transition-colors">
                {product.name}
              </h3>
              
              <h5 className="text-sm font-bold text-gray-800 line-clamp-2 min-h-[40px] leading-snug group-hover:text-yellow-700 transition-colors">
                {product.shortdescription}
              </h5>
              {/* Price */}
              <div className="mt-3 mb-4">
                <p className="text-gray-400 text-xs line-through font-medium">
                  ₹{product.oldPrice}
                </p>
                <p className="text-xl font-black text-gray-900 mt-0.5">
                  ₹{product.price}
                </p>
                <p className="text-xs text-green-600 font-semibold mt-1">
                  Save ₹{product.oldPrice - product.price}
                </p>
              </div>

              {/* Add to Cart */}
              <button
                onClick={() => {
                  addToCart(product);
                }}
                className="mt-auto w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 text-sm font-bold py-2.5 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Add to Cart
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}