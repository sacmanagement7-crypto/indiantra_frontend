import { useState, useContext, useEffect } from "react";
import { FaTh, FaList } from "react-icons/fa";
import { ShopContext } from "../context/ShopContext";
import { Link, useLocation } from "react-router";

export default function ShopPage() {
  const { categories, products, addToCart } = useContext(ShopContext);
  const [view, setView] = useState("grid");
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] = useState("");
  const [priceRange, setPriceRange] = useState([200, 6000]);
  const [sortOption, setSortOption] = useState("");


  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category"); // 👉 will be null if not present

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
    } else {
      setSelectedCategory("");
    }
  }, [category, products]);

  // 👉 Filter products dynamically from context
  let filteredProducts = products.filter((p) => {
    const inCategory =
      selectedCategory === "All" || p.category === selectedCategory;
    const inPriceRange =
      p.price >= priceRange[0] && p.price <= priceRange[1];
    return inCategory && inPriceRange;
  });

  if (sortOption === "price") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortOption === "popularity") {
    filteredProducts = [...filteredProducts].sort(
      (a, b) => b.popularity - a.popularity
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-base">
      {/* Sidebar */}
      <aside className="col-span-1 bg-[#fffff] shadow p-5 space-y-6">
        {/* 🔹 Price Filter */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">
            Filter by Price
          </h3>

          <input
            type="range"
            min="200"
            max="6000"
            className="w-full accent-orange-500 cursor-pointer"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([200, Number(e.target.value)])}
          />

          <p className="text-sm text-gray-600 mt-2 font-medium text-center bg-gray-50 py-1 rounded">
            ₹{priceRange[0]} – ₹{priceRange[1]}
          </p>

          <button
            onClick={() => console.log("Applied Filter:", priceRange)}
            className="mt-4 w-full px-3 py-2 bg-orange-500 text-white rounded-lg text-sm font-medium shadow hover:bg-orange-600 transition"
          >
            Apply Filter
          </button>
        </div>

        {/* Divider */}
        <hr className="border-gray-200" />

        {/* 🔹 Categories */}
        <div>
          <h3 className="text-base font-semibold text-gray-800 mb-3">Categories</h3>
          <ul className="space-y-3 text-gray-700 text-sm">
            {categories.map((cat, i) => (
              <li
                key={i}
                className="flex items-center gap-2 cursor-pointer hover:text-orange-600"
                onClick={() => setSelectedCategory(cat.name)}
              >
                <input
                  type="radio"
                  name="category"
                  checked={selectedCategory === cat.name}
                  onChange={() => setSelectedCategory(cat.name)}
                  className="accent-orange-500 cursor-pointer"
                />
                <span>{cat.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </aside>


      {/* Product Section */}
      <main className="col-span-3">
        {/* 🔹 Sorting & View Controls */}
        <div className="flex justify-between items-center mb-6 border-b pb-3 text-sm">
          {/* View Toggle */}
          <div className="flex items-center gap-2">
            <button
              className={`p-2 rounded-lg shadow-sm transition ${view === "grid"
                ? "bg-orange-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
                }`}
              onClick={() => setView("grid")}
            >
              <FaTh size={14} />
            </button>
            {/* 👇 Uncomment if list view is needed */}
            {/* <button
        className={`p-2 rounded-lg shadow-sm transition ${
          view === "list"
            ? "bg-orange-500 text-white"
            : "bg-gray-100 hover:bg-gray-200"
        }`}
        onClick={() => setView("list")}
      >
        <FaList size={14} />
      </button> */}
          </div>

          {/* Sorting Dropdown */}
          <select
            className="border rounded-lg px-3 py-2 text-sm font-medium focus:ring-2 focus:ring-orange-400 focus:outline-none cursor-pointer"
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
          >
            <option value="default">Default sorting</option>
            <option value="price">Sort by price</option>
            <option value="popularity">Sort by popularity</option>
          </select>
        </div>

        {/* 🔹 Product Grid */}
        <div
          className={`grid gap-6 ${view === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : "grid-cols-1"
            }`}
        >
          {filteredProducts.map((p) => (
            <Link to={`/product/${p._id}`}>
              <div
                key={p._id}
                className="relative p-4 bg-[#ffffff] hover:shadow-xl hover:-translate-y-1 transition duration-200 text-sm"
              >
                {/* Discount Badge */}
                <span className="absolute top-3 left-3 bg-green-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow z-5">
                  -{p.discount}%
                </span>

                {/* Product Image */}
                <div className="w-full h-48 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="h-full w-full object-cover hover:scale-120 transition duration-300"
                  />
                </div>

                {/* Title */}
                <h3 className="mt-3 font-medium text-gray-900 text-base line-clamp-2 hover:text-orange-600 transition">
                  {p.name}
                </h3>

                {/* Price Section */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-orange-600">
                    ₹{p.price}
                  </span>
                  <span className="text-sm line-through text-gray-400">
                    ₹{p.oldPrice}
                  </span>
                </div>

                {/* CTA Buttons */}
                <button
                  onClick={() => addToCart(p)}
                  className="mt-4 w-full py-2 bg-orange-500 text-white rounded-lg shadow hover:bg-orange-600 transition text-sm font-medium"
                >
                  Add to Cart
                </button>

                <Link
                  to={`/product/${p._id}`}
                  className="mt-2 block w-full text-center py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition text-sm font-medium"
                >
                  View Details
                </Link>
              </div>
            </Link>
          ))}
        </div>
      </main>

    </div>
  );
}
