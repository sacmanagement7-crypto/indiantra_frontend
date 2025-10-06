import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function BestDeals() {
  const { products, addToCart} = useContext(ShopContext);

  const bestDeals = products.filter((p) => p.isBestDeal).slice(0, 4);

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-4 py-1 rounded-full">
          🔥 Best Deals
        </span>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-gray-900">
          Grab Them Before They’re Gone
        </h2>
        <p className="text-gray-500 mt-2 text-sm">
          Limited-time offers on top-rated books
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {bestDeals.map((product) => (
          <div
            key={product._id}
            className="group bg-white hover:shadow-md transition p-3 flex flex-col relative"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-green-600 text-white text-[10px] font-semibold px-2 py-0.5  z-5 rounded">
              {product.discount}
            </span>

          
          <Link key={product._id} to={`/product/${product._id}`}>

            {/* Image */}
            <div className="overflow-hidden rounded-md">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            </Link>

            {/* Details */}
            <div className="flex flex-col flex-grow mt-3">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-2 min-h-[36px]">
                {product.name}
              </h3>

              {/* Price */}
              <div className="mt-2 flex items-baseline gap-2">
                <p className="text-gray-500 text-xs line-through">
                  ₹{product.oldPrice}
                </p>
                <p className="text-lg font-bold text-orange-600">
                  ₹{product.price}
                </p>
              </div>

              {/* Add to Cart */}
              <button onClick={()=>{
                addToCart(product)
              }} className="mt-auto w-full bg-yellow-400 hover:bg-yellow-500 text-black text-sm font-semibold py-2 rounded-md transition flex items-center justify-center border border-yellow-600">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
