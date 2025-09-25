import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContext";
// import { AuthContext } from "../context/AuthContext"; // 🔹 for login check

export default function ProductDetails() {
  const { id } = useParams();
  const { products } = useContext(ShopContext);
  const {addToCart} = useContext(ShopContext);
  const {cart} = useContext(ShopContext);
  // const { user } = useContext(AuthContext); // 🔹 get logged-in user
  
  const [user,setUser] = useState("I am");

  const product = products.find((p) => p.id === Number(id));

  console.log(cart)

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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-white p-6 rounded-2xl shadow-lg">
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-w-md h-[400px] object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-snug">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-2">
              <span className="text-yellow-400">⭐ ⭐ ⭐ ⭐ ☆</span>
              <span className="text-sm text-gray-500">({reviews.length} reviews)</span>
            </div>

            <div className="mt-4 flex items-center gap-3">
              <p className="text-2xl font-bold text-orange-600">₹{product.price}</p>
              <p className="line-through text-gray-400">₹{product.oldPrice}</p>
              <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                -{product.discount}%
              </span>
            </div>

            <p className="mt-6 text-gray-700 leading-relaxed">
              {product.description ||
                "This is a premium product with excellent quality and durability. Perfect choice for your needs!"}
            </p>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button onClick={()=>{
              addToCart(product)
            }}className="flex-1 py-3 bg-orange-500 text-white rounded-lg font-medium hover:bg-orange-600 transition">
              🛒 Add to Cart
            </button>
            <button className="flex-1 py-3 border border-orange-500 text-orange-500 rounded-lg font-medium hover:bg-orange-50 transition">
              ❤️ Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* 🔹 Product Details Section */}
      <div className="mt-12 bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-3">Product Details</h2>
        <p className="text-gray-600 leading-relaxed">
          This product is crafted with top-quality materials ensuring long-lasting performance.
          Ideal for both daily use and special occasions. You’ll love its design, durability,
          and value for money.
        </p>
      </div>

      {/* ⭐ Reviews Section */}
      <div className="mt-12 bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-5">Customer Reviews</h2>

        {/* 🔹 Review Form (only if logged in) */}
        {user ? (
          <form onSubmit={handleReviewSubmit} className="mb-8 space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Rating:</label>
              <select
                value={rating}
                onChange={(e) => setRating(Number(e.target.value))}
                className="mt-1 border rounded-lg px-3 py-2"
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
                className="w-full border rounded-lg px-3 py-2"
                rows={3}
              />
            </div>

            <button
              type="submit"
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
            >
              Submit Review
            </button>
          </form>
        ) : (
          <p className="text-gray-500 mb-6">
            🔒 Please <span className="text-orange-600 font-medium cursor-pointer">login</span> to write a review.
          </p>
        )}

        {/* 🔹 Show All Reviews */}
        <div className="space-y-6">
          {reviews.map((review) => (
            <div key={review.id} className="border-b pb-4 last:border-none last:pb-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900">{review.name}</h3>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>
              <div className="text-yellow-400 text-sm mt-1">
                {"⭐".repeat(review.rating)} {"☆".repeat(5 - review.rating)}
              </div>
              <p className="mt-2 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
