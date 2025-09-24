import React from "react";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";

const books = [
  {
    id: 1,
    title: "The Chola Tigers: Avengers of Somnath",
    author: "Amish Tripathi",
    img: img1,
    price: 474,
    oldPrice: 499,
    discount: "5% OFF",
  },
  {
    id: 2,
    title: "You Had Me At Annyeong!",
    author: "Malini Banerjee",
    img: img2,
    price: 308,
    oldPrice: 399,
    discount: "23% OFF",
  },
  {
    id: 3,
    title: "A Shimla Affair",
    author: "Srishti Chaudhary",
    img: img3,
    price: 272,
    oldPrice: 350,
    discount: "22% OFF",
  },
  {
    id: 4,
    title: "The Career Edge",
    author: "Kaushik Mitra",
    img: img4,
    price: 399,
    oldPrice: 499,
    discount: "20% OFF",
  },
];

export default function BestDeails() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      {/* Section Header */}
      <div className="text-center mb-10">
        <span className="bg-orange-100 text-orange-600 text-xs font-semibold px-4 py-1 rounded-full">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-3 flex flex-col relative"
          >
            {/* Discount Badge */}
            <span className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-md">
              {book.discount}
            </span>

            {/* Image */}
            <img
              src={book.img}
              alt={book.title}
              className="w-full h-48 object-cover rounded-lg mb-3"
            />

            {/* Details */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-sm font-semibold text-gray-800 line-clamp-2">
                {book.title}
              </h3>
              <p className="text-xs text-gray-500 mt-1">{book.author}</p>

              {/* Price */}
              <div className="mt-3 flex items-baseline gap-2">
                <p className="text-gray-400 text-xs line-through">
                  ₹{book.oldPrice}
                </p>
                <p className="text-lg font-bold text-gray-900">
                  ₹{book.price}
                </p>
              </div>

              {/* Add to Cart */}
              <button className="mt-auto w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold py-2 rounded-lg transition">
                Add to Cart →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
