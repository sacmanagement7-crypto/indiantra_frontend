import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { FaTrash, FaHeart, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


export default function CartPage() {
  const { cart, removeFromCart, addToCart, deleteFromCart, addToWishlist } =
    useContext(ShopContext);

  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('user');
    setUser(user)
  }, [])

  // 🧮 Calculate totals
  const subtotal = cart.reduce((sum, item) => {
    const product = item.productId;
    return sum + (product?.price || 0) * (item.quantity || 1);
  }, 0);
  const discount = subtotal > 2000 ? 200 : 0;
  const tax = subtotal * 0.05;
  const total = subtotal - discount + tax;

  const handleproceedtopay = () => {
    if (!user) {
      toast.warn("Please login first to proceed!", {
        position: "top-right",
      });
      return;
    }
    navigate('/checkout');
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Title */}

        {cart.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl shadow-md max-w-lg mx-auto border">
            <p className="text-gray-600 text-lg">Your cart is empty!</p>
            <NavLink
              to="/shop"
              className="inline-block mt-6 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-semibold transition"
            >
              Continue Shopping
            </NavLink>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 🟢 Left: Cart Items */}
            <div className="lg:col-span-2 space-y-5">
              {cart.map((item) => {
                const product = item.productId;
                 console.log(item);
                return (
                  <div key={item._id} className="flex bg-white p-5 border-b border-gray-200">
                    {/* Product Image */}
                    <img
                      src={product?.images?.[0] || "/placeholder.jpg"}
                      alt={product?.name}
                      className="w-32 h-32 object-contain"
                    />

                    {/* Product Details */}
                    <div className="flex-1 ml-6">
                      <h2 className="font-medium text-gray-900 text-lg line-clamp-2">
                        {product?.name}
                      </h2>
                      <p className="text-green-600 text-sm mt-1">In stock</p>
                      <p className="text-xs text-gray-600">Eligible for FREE Shipping</p>

                      <div className="flex items-center gap-4 mt-3">
                        {/* Quantity Control */}
                        <div className="flex items-center border border-yellow-500 rounded-md overflow-hidden">
                          <button
                            onClick={() => removeFromCart(product._id)}
                            className="px-3 py-1 hover:bg-yellow-100"
                          >
                            -
                          </button>
                          <span className="px-4 py-1 font-medium text-gray-800 bg-white">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="px-3 py-1 hover:bg-yellow-100"
                          >
                            +
                          </button>
                        </div>

                        <button
                          onClick={() => deleteFromCart(product._id)}
                          className="text-blue-600 text-sm hover:underline"
                        >
                          Delete
                        </button>
                        <button
                          onClick={() => {
                            addToWishlist(product);
                            deleteFromCart(product._id);
                          }}
                          className="text-blue-600 text-sm hover:underline"
                        >
                          Save for later
                        </button>
                      </div>
                    </div>

                    {/* Price */}
                    <div className="text-right ml-6">
                      <p className="text-lg font-bold text-gray-900">₹{product?.price}</p>
                      {product?.oldPrice && (
                        <p className="text-sm text-gray-500 line-through">₹{product?.oldPrice}</p>
                      )}
                      {product?.discount && (
                        <p className="text-xs text-red-600 font-semibold">{product?.discount}</p>
                      )}
                    </div>
                  </div>
                );
              })}

            </div>

            {/* 🟡 Right: Order Summary */}
            <div className="bg-white p-5 border-none rounded-md h-fit sticky top-20 space-y-4">
              {/* ✅ Free Delivery Strip */}
              <div className="bg-green-600 text-white text-sm font-medium px-3 py-1 rounded-full flex items-center justify-between">
                <span>Your order is eligible for FREE Delivery</span>
                <span className="ml-2">₹499</span>
              </div>
              <p className="text-sm text-gray-700">
                Choose <span className="text-blue-600 cursor-pointer hover:underline">FREE Delivery</span> option at checkout.
              </p>

              {/* ✅ Subtotal */}
              <div className="text-base font-semibold text-gray-900">
                Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""}):{" "}
                <span className="text-gray-900 font-bold">₹{subtotal}</span>
              </div>

              {/* ✅ Gift Checkbox */}
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <input type="checkbox" className="w-4 h-4" />
                <label>This order contains a gift</label>
              </div>

              {/* ✅ Checkout Button */}
              <button onClick={() => {
                handleproceedtopay()
              }} className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 py-2 rounded-md font-semibold transition">
                Proceed to Buy
              </button>

              {/* Continue Shopping */}
              <NavLink
                to="/shop"
                className="flex items-center justify-center gap-2 mt-2 text-sm text-blue-600 hover:underline"
              >
                <FaArrowLeft /> Continue Shopping
              </NavLink>
            </div>


          </div>
        )}
      </div>
    </div>
  );
}
