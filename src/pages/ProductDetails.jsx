import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import api from "../api/axios";
// import { AuthContext } from "../context/AuthContext"; // 🔹 for login check

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const { addToCart } = useContext(ShopContext);
  const { cart } = useContext(ShopContext);
  const [index, setIndex] = useState(0);

  const { wishlist, addToWishlist } = useContext(ShopContext);
  // const { user } = useContext(AuthContext); // 🔹 get logged-in user

  const [user, setUser] = useState("I am");

  const product = products.find((p) => p._id === id);
  // const product = products.find((p) => p._id === Number(id));

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
  const [reviews, setReviews] = useState([]);

  // ⭐ New Review State
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

   useEffect(() => {
    const fetchReviews = async () => {
      if (!product) return;
      try {
        const res = await api.get(`/${product._id}/review`);
        setReviews(res.data.reviews || []);
      } catch (error) {
        console.error("Failed to fetch reviews:", error);
      }
    };
    fetchReviews();
  }, [product]);

 const handleReviewSubmit = async (e) => {
  e.preventDefault();

  if (!comment.trim() || rating === 0) {
    alert("Please provide a rating and comment.");
    return;
  }

  try {
    const newReview = {
      rating: rating,
      comment,
      date: new Date().toISOString(), // ISO format ensures MongoDB Date works
    };

    const token = localStorage.getItem("token");

    // Send productId in the URL, not in the body
    const res = await api.post(
      `/${product._id}/review`, // assuming backend route: /reviews/:productId
      newReview,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setReviews([res.data.review, ...reviews]);
    setComment("");
    setRating(0);
  } catch (error) {
    console.error("Failed to submit review:", error);
    alert("Failed to submit review. Try again later.");
  }
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
      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 bg-white p-6 shadow-lg rounded-md">
        {/* ==== Left Image Section ==== */}
        <div className="flex flex-col items-center">
          {/* Main Image */}
          <div className="w-full border rounded-lg p-3 flex justify-center">
            <img
              src={product.images[index]}
              alt={product.name}
              className="w-[280px] h-[320px] object-contain"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => setIndex(idx)}
                className="w-14 h-14 border rounded cursor-pointer hover:border-orange-500 object-contain"
              />
            ))}
          </div>
        </div>

        {/* ==== Right Details Section ==== */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-lg font-medium text-gray-900 leading-snug">
            {product.name}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-2 mt-2">
            <span className="text-yellow-400 text-sm">⭐ ⭐ ⭐ ⭐ ☆</span>
            <span className="text-xs text-gray-500">
              {reviews.length} ratings
            </span>
            <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">
              Amazon's Choice
            </span>
          </div>

          {/* Price Section */}
          <div className="mt-3 flex items-end gap-2">
            <p className="text-2xl font-bold text-orange-600">
              ₹{product.price}
            </p>
            <p className="line-through text-gray-400 text-sm">
              ₹{product.oldPrice}
            </p>
            <span className="bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded font-medium">
              -{product.discount}%
            </span>
          </div>
          <p className="text-xs text-gray-500">Inclusive of all taxes</p>

          {/* Offers Section */}
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <div className="border rounded p-2">
              <p className="font-medium text-gray-700">Cashback</p>
              <p className="text-gray-500">Up to ₹809 as Amazon Pay Balance</p>
            </div>
            <div className="border rounded p-2">
              <p className="font-medium text-gray-700">Partner Offers</p>
              <p className="text-gray-500">Save up to 18% on GST invoice</p>
            </div>
          </div>

          {/* Delivery & Stock Info */}
          <p className="mt-4 text-sm text-green-700 font-medium">
            In stock · Free delivery Tomorrow
          </p>
          <p className="text-xs text-gray-600">
            Sold by <span className="text-blue-600">Clicktech Retail Pvt Ltd</span>
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-col gap-3">
            <button
              onClick={() => addToCart(product)}
              className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded shadow"
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => addToWishlist(product)}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded shadow"
            >
              ❤️ Add To Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Product Details Section */}
      <div className="mt-12 bg-[#ffffff] shadow p-6">
        {/* 🔹 Product Image */}

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
      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
          💬 Customer Reviews
        </h2>

        {/* Review Form */}
        {user ? (
          <form
            onSubmit={handleReviewSubmit}
            className="mb-10 bg-gradient-to-br from-orange-50 to-yellow-50 border border-orange-200 rounded-xl p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Write a Review ✍️
            </h3>

            {/* Rating */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rating
              </label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="w-36 border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value={0}>-- Select Rating --</option>  {/* ✅ Not disabled */}
                <option value={5}>⭐⭐⭐⭐⭐ (Excellent)</option>
                <option value={4}>⭐⭐⭐⭐ (Good)</option>
                <option value={3}>⭐⭐⭐ (Average)</option>
                <option value={2}>⭐⭐ (Poor)</option>
                <option value={1}>⭐ (Terrible)</option>
              </select>
            </div>

            {/* Comment */}
            <div className="mb-5">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Share your experience with this product..."
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                rows={3}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={rating === 0 || !comment.trim()}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold shadow 
    ${rating === 0 || !comment.trim()
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-[1.02] transition-transform duration-200"}
  `}
            >
              🚀 Submit Review
            </button>
          </form>
        ) : (
          <p className="text-gray-500 mb-8 text-sm bg-gray-50 border border-gray-200 p-4 rounded-lg text-center">
            🔒 Please{" "}
            <span className="text-orange-600 font-medium cursor-pointer hover:underline">
              login
            </span>{" "}
            to write a review.
          </p>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <div className="text-center py-10 text-gray-500 bg-gray-50 rounded-xl border border-gray-200">
              No reviews yet. Be the first to share your thoughts! 🌟
            </div>
          ) : (
            reviews.map((review) => (
              <div
                key={review._id}
                className="border border-gray-200 bg-gradient-to-br from-gray-50 to-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-9 h-9 bg-orange-100 text-orange-600 flex items-center justify-center rounded-full font-bold">
                      {review.userId?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {review.userId.name}
                      </h3>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-yellow-400 text-sm">
                    <span className="text-gray-300">
                      {"⭐".repeat(review.rating)}
                    </span>
                  </div>
                </div>

                {/* Comment */}
                <p className="mt-3 text-gray-700 text-sm leading-relaxed">
                  {review.comment}
                </p>
              </div>
            ))
          )}
        </div>
      </div>

    </div>
  );
}
