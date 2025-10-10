import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash, FaCartPlus } from "react-icons/fa";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, addToCart } = useContext(ShopContext);

  // ✅ Normalize wishlist items (extract product data)
  const wishlistItems = wishlist.map((item) => ({
    ...item.productId,
    wishlistItemId: item._id,
    addedAt: item.addedAt,
  }));

  // ✅ Group items by category
  const categories = wishlistItems.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  // ✅ Track selected category
  const [selectedCategory, setSelectedCategory] = useState(null);
  const activeCategory = selectedCategory || Object.keys(categories)[0] || null;

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar Categories */}
      <aside className="bg-white shadow-md p-6 h-fit">
        <h3 className="text-sm font-semibold text-gray-800 mb-4 border-b pb-2">
          Categories
        </h3>
        <ul className="space-y-2">
          {Object.keys(categories).map((cat) => (
            <li key={cat}>
              <button
                onClick={() => setSelectedCategory(cat)}
                className={`w-full text-left px-4 py-2 transition font-medium ${
                  activeCategory === cat
                    ? "bg-orange-500 text-white shadow"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                {cat}{" "}
                <span className="text-sm text-gray-500">
                  ({categories[cat].length})
                </span>
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Wishlist Products */}
      <main className="md:col-span-3">
        <h4 className="text-2xl font-bold mb-6 text-gray-800 flex items-center gap-2">
          💖 My Wishlist
          <span className="text-sm font-medium text-gray-500">
            ({wishlistItems.length} items)
          </span>
        </h4>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-16 bg-white shadow-md">
            <p className="text-gray-500 text-sm">Your wishlist is empty.</p>
          </div>
        ) : (
          <div className="space-y-10">
            {activeCategory && (
              <>
                <h3 className="text-xl font-semibold text-gray-900 mb-5 border-b pb-2">
                  {activeCategory}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categories[activeCategory].map((item) => (
                    <div
                      key={item.wishlistItemId}
                      className="relative bg-white shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300 flex flex-col items-center p-5"
                    >
                      {/* Product Image */}
                      <div className="w-40 h-40 bg-gray-50 overflow-hidden flex items-center justify-center shadow-sm">
                        <img
                          src={item.images?.[0] || "/placeholder.jpg"}
                          alt={item.name}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      </div>

                      {/* Product Info */}
                      <h3 className="mt-4 font-semibold text-gray-900 text-sm text-center line-clamp-2">
                        {item.name}
                      </h3>
                      <p className="text-orange-600 font-bold text-base mt-1">
                        ₹{item.price}
                      </p>

                      {/* Actions */}
                      <div className="flex gap-3 mt-5 w-full">
                        <button
                          onClick={() => {
                            addToCart(item);
                          }}
                          className="flex-1 flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-2 text-sm font-medium shadow transition"
                        >
                          <FaCartPlus /> Add to Cart
                        </button>

                        <button
                          onClick={() => {
                            removeFromWishlist(item.wishlistItemId);
                          }}
                          className="flex items-center justify-center gap-2 bg-gray-100 hover:bg-red-500 hover:text-white text-gray-600 px-3 py-2 text-sm font-medium shadow-sm transition"
                        >
                          <FaTrash /> Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
