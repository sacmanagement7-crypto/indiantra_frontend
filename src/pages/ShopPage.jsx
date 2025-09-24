import { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

export default function ShopPage() {
  const [view, setView] = useState("grid");

  const products = [
    {
      id: 1,
      name: "7-Piece Wooden Tangram Puzzle Game with Cards",
      price: 299,
      oldPrice: 480,
      discount: 38,
      image: "https://via.placeholder.com/200x200?text=Product+1",
    },
    {
      id: 2,
      name: "Best Practical Handwriting Improvement Course at Home",
      price: 380,
      oldPrice: 400,
      discount: 24,
      image: "https://via.placeholder.com/200x200?text=Product+2",
    },
    {
      id: 3,
      name: "Brain Development Worksheets for Kids",
      price: 299,
      oldPrice: 450,
      discount: 34,
      image: "https://via.placeholder.com/200x200?text=Product+3",
    },
    {
      id: 4,
      name: "Mini Automatic Aarti Machine with Nagada Machine",
      price: 5800,
      oldPrice: 13000,
      discount: 59,
      image: "https://via.placeholder.com/200x200?text=Product+4",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-4 gap-6 text-base">
      {/* Sidebar */}
      <aside className="col-span-1 border-r pr-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Filter Products By Price
        </h3>
        <input type="range" min="200" max="6000" className="w-full accent-orange-500" />
        <p className="text-sm text-gray-600 mt-1">₹280 – ₹5,800</p>
        <button className="mt-2 px-3 py-2 bg-orange-500 text-white rounded-md text-sm">
          Filter
        </button>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Filter By Size</h3>
        <select className="w-full border rounded-md px-2 py-2 text-sm">
          <option>Any Size</option>
        </select>

        <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Product Categories</h3>
        <ul className="space-y-2 text-gray-700 text-sm">
          {[
            "Best Indian Products",
            "Best Seller Products",
            "Home Decor Products",
            "Handmade & Handicraft",
            "Jewellery & Accessories",
            "Life Hacks",
            "Organic & Herbal",
            "Special Offers",
            "Toys & Baby Products",
          ].map((cat, i) => (
            <li key={i} className="flex items-center gap-2">
              <input type="radio" name="category" />
              <span>{cat}</span>
            </li>
          ))}
        </ul>
      </aside>

      {/* Product Section */}
      <main className="col-span-3">
        {/* Sorting & View */}
        <div className="flex justify-between items-center mb-4 border-b pb-2 text-sm">
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded ${view === "grid" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
              onClick={() => setView("grid")}
            >
              <FaTh size={14} />
            </button>
            <button
              className={`p-2 rounded ${view === "list" ? "bg-orange-500 text-white" : "bg-gray-100"}`}
              onClick={() => setView("list")}
            >
              <FaList size={14} />
            </button>
          </div>

          <select className="border rounded-md px-2 py-2 text-sm">
            <option>Default sorting</option>
            <option>Sort by price</option>
            <option>Sort by popularity</option>
          </select>
        </div>

        {/* Product Grid */}
        <div
          className={`grid gap-5 ${
            view === "grid" ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
          }`}
        >
          {products.map((p) => (
            <div
              key={p.id}
              className="relative border rounded-md p-4 hover:shadow-md transition text-sm"
            >
              {/* Discount Badge */}
              <span className="absolute top-2 left-2 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full">
                -{p.discount}%
              </span>
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover rounded-md"
              />
              <h3 className="mt-2 font-medium text-gray-800 text-base">{p.name}</h3>
              <div className="mt-1 flex items-center gap-2">
                <span className="text-lg font-bold text-green-600">₹{p.price}</span>
                <span className="text-sm line-through text-gray-500">₹{p.oldPrice}</span>
              </div>
              <button className="mt-3 w-full py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 text-sm">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
