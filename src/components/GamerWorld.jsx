import React from "react";
import { FiArrowRight } from "react-icons/fi";
import saree1 from "../assets/saree1.jpg"
import saree2 from "../assets/saree2.jpg"
import saree3 from "../assets/saree3.jpg"

export default function GamerWorld() {
  const products = [
    {
      id: 1,
      title: "Bannarsi Saree...",
      price: 18.73,
      oldPrice: 27.27,
      rating: 3,
      img: `${saree1}`, // replace with real img
    },
    {
      id: 2,
      title: "Silk Saree...",
      price: 17.79,
      oldPrice: 24.55,
      rating: 5,
      img: `${saree2}`,
    },
    {
      id: 3,
      title: "Wedding Saree...",
      price: 18.03,
      oldPrice: 32.63,
      rating: 5,
      tag: "POPULAR",
      img: `${saree3}`,
    },
  ];

  return (
    <section className="w-full py-14 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Saree</h2>
          <button className="flex items-center gap-2 text-gray-800 font-medium hover:text-yellow-500">
            View More <FiArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left category box */}
          <div className="bg-blue-100 rounded-lg p-6 flex flex-col justify-between relative">
            <div>
              <h3 className="font-semibold text-lg mb-4">Best Sarees</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Traditional</li>
                <li>Silk</li>
                <li>Paithani</li>
                <li>Wedding</li>
              </ul>
              <button className="mt-4 flex items-center gap-2 text-gray-900 font-medium hover:text-yellow-500">
                Shop Now <FiArrowRight />
              </button>
            </div>
            <img
              src="https://via.placeholder.com/200x200?text=Watch"
              alt="watch"
              className="absolute bottom-0 right-2 w-32"
            />
          </div>

          {/* Product cards */}
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition p-5 relative"
            >
              {/* Tag */}
              {product.tag && (
                <span className="absolute top-3 right-3 bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {product.tag}
                </span>
              )}

              {/* Image */}
              <img
                src={product.img}
                alt={product.title}
                className="mx-auto mb-4 h-40 object-contain"
              />

              {/* Stars */}
              <div className="flex text-yellow-500 text-sm mb-2">
                {Array.from({ length: product.rating }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
                {Array.from({ length: 5 - product.rating }).map((_, i) => (
                  <span key={i} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>

              {/* Title */}
              <h4 className="text-gray-800 font-medium text-sm mb-2">
                {product.title}
              </h4>

              {/* Price */}
              <div className="flex items-center gap-2">
                <span className="text-gray-400 line-through text-sm">
                  ${product.oldPrice}
                </span>
                <span className="text-red-500 font-semibold">
                  ${product.price}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
