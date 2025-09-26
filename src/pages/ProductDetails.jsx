import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
// import { AuthContext } from "../context/AuthContext"; // 🔹 for login check

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const { addToCart } = useContext(ShopContext);
  const { cart } = useContext(ShopContext);
  const { wishlist, addToWishlist } = useContext(ShopContext);
  // const { user } = useContext(AuthContext); // 🔹 get logged-in user

  const [user, setUser] = useState("I am");

  console.log(typeof (wishlist.length))

  const product = products.find((p) => p.id === Number(id));

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  // ⭐ Reviews State
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "Amit Sharma",
      rating: 5,
      comment: "Amazing product! Great quality and fast delivery.",
      date: "Jan 15, 2025",
    },
    {
      id: 2,
      name: "Sneha Patel",
      rating: 4,
      comment: "Very useful, worth the price. Packaging could be better.",
      date: "Feb 5, 2025",
    },
    {
      id: 3,
      name: "Rahul Verma",
      rating: 3,
      comment: "Good but expected a bit more durability.",
      date: "Feb 20, 2025",
    },
  ]);

  // ⭐ New Review State
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    const newReview = {
      id: reviews.length + 1,
      name: user?.name || "Guest",
      rating,
      comment,
      date: new Date().toLocaleDateString(),
    };

    setReviews([newReview, ...reviews]);
    setComment("");
    setRating(5);
  };

  if (!product) {
    return (
      <h2 className="text-center text-gray-600 mt-20 text-xl font-medium">
        ❌ Product not found
      </h2>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* 🔹 Product Info Section (same as before) */}
      <div className="grid grid-cols-1 md:grid-cols-[180px_1fr] gap-6 bg-[#ffffff] p-4 shadow-lg">
        {/* Left Image */}
        <div className="flex justify-center items-start">
          <img
            src={product.image}
            alt={product.name}
            className="w-[160px] h-[180px] object-contain"
          />
        </div>

        {/* Right Details */}
        <div className="flex flex-col justify-between">
          <div>
            {/* Product Name */}
            <h1 className="text-base font-medium text-gray-900 leading-snug">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mt-1">
              <span className="text-yellow-400 text-sm">⭐ ⭐ ⭐ ⭐ ☆</span>
              <span className="text-xs text-gray-500">
                ({reviews.length} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="mt-2 flex items-center gap-2">
              <p className="text-lg font-bold text-orange-600">
                ₹{product.price}
              </p>
              <p className="line-through text-gray-400 text-sm">
                ₹{product.oldPrice}
              </p>
              <span className="bg-red-100 text-red-600 text-[11px] px-2 py-0.5 rounded font-medium">
                -{product.discount}%
              </span>
            </div>

            {/* Description */}
            <p className="mt-3 text-xs text-gray-600 leading-snug">
              {product.description ||
                "This is a premium product with excellent quality and durability."}
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-gray-600">
            <button
              onClick={() => {
                addToCart(product);
              }}
              className="px-3 py-1 border rounded hover:bg-gray-50 transition"
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => {
                addToWishlist(product);
              }}
              className="px-3 py-1 border rounded hover:bg-gray-50 transition"
            >
              ❤️ Add to Wishlist
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 transition">
              Save for later
            </button>
            <button className="px-3 py-1 border rounded hover:bg-gray-50 transition">
              See more like this
            </button>
          </div>
        </div>
      </div>



      {/* 🔹 Product Details Section */}
      <div className="mt-12 bg-[#ffffff] shadow p-6">
        {/* 🔹 Product Image */}
        <div className="w-full h-[300px] flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        </div>

        {/* 🔹 Product Description */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed text-sm">
          {product.description ||
            "This product is crafted with top-quality materials ensuring long-lasting performance. Ideal for both daily use and special occasions. You’ll love its design, durability, and value for money."}
        </p>

        {/* 🔹 Specifications */}
        <h2 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          Specifications
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-lg overflow-hidden">
            <tbody>
              {product.specifications?.map((spec, idx) => (
                <tr
                  key={idx}
                  className="odd:bg-gray-50 even:bg-white border-b border-gray-200"
                >
                  <td className="px-4 py-2 font-medium text-gray-700 w-1/3">
                    {spec.label}
                  </td>
                  <td className="px-4 py-2 text-gray-600">{spec.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ⭐ Reviews Section */}
      <div className="mt-12 bg-[#ffffff] shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Customer Reviews</h2>

        {/* 🔹 Review Form (only if logged in) */}
        {user ? (
          <form onSubmit={handleReviewSubmit} className="mb-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-32 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value={5}>⭐⭐⭐⭐⭐</option>
                <option value={4}>⭐⭐⭐⭐</option>
                <option value={3}>⭐⭐⭐</option>
                <option value={2}>⭐⭐</option>
                <option value={1}>⭐</option>
              </select>
            </div>

            <div>
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your review..."
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-orange-500 text-white text-sm font-medium rounded-lg shadow hover:bg-orange-600 transition"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p className="text-gray-500 mb-6 text-sm">
            🔒 Please{" "}
            <span className="text-orange-600 font-medium cursor-pointer hover:underline">
              login
            </span>{" "}
            to write a review.
          </p>
        )}

        {/* 🔹 Show All Reviews */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border border-gray-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Top Row: User + Date */}
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              {/* Star Rating */}
              <div className="flex items-center mt-1 text-yellow-400 text-sm">
                {"⭐".repeat(review.rating)}{" "}
                <span className="text-gray-300">
                  {"⭐".repeat(5 - review.rating)}
                </span>
              </div>

              {/* Comment */}
              <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                {review.comment}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
