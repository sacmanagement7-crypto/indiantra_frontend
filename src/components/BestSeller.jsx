import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaHeart } from "react-icons/fa";

export default function BestSeller() {
  const { products, wishlist ,addToCart,addToWishlist} = useContext(ShopContext);

  const bestSellers = products.filter((p) => p.isRecommended).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12 font-sans">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full">
          📚 Recommended
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Handpicked Just For You
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Discover bestselling books at unbeatable prices
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {bestSellers.map((b) => (
          <div
            key={b.id}
            className="bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all duration-300 p-4 flex flex-col relative"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded">
              {b.discount}
            </span>

            {/* Wishlist Button */}
            <button onClick={()=>{
              addToWishlist(b)
            }} className="absolute top-3 right-3 bg-white border border-gray-200 rounded-full p-1 hover:bg-red-50 transition">
              <FaHeart
                size={14}
                className={`${
                  wishlist.find((w) => w.id === b.id)
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              />
            </button>

            {/* Image */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={b.images[0]}
                alt={b.name}
                className="w-28 h-40 object-contain"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-sm font-medium text-gray-800 line-clamp-2 min-h-[38px]">
                {b.name}
              </h3>

              {/* Price */}
              <div className="mt-2">
                <p className="text-gray-400 text-xs line-through">₹{b.oldPrice}</p>
                <p className="text-lg font-semibold text-gray-900">₹{b.price}</p>
              </div>

              {/* Add to Cart */}
              <button onClick={()=>{
                addToCart(b)
              }} className="mt-4 w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 text-sm font-semibold py-2 rounded shadow-sm transition">
                Add to Cart →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
