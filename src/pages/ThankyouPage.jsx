import React from "react";
import {
  CheckCircle,
  Package,
  CreditCard,
  MapPin,
  Hash,
  ShoppingBag,
  Home,
} from "lucide-react";
import { useLocation } from "react-router-dom";

const ThankyouPage = () => {
  const location = useLocation();
  const order = location.state?.order; // ✅ get order from navigation state
  console.log(order);

  console.log(order)
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50 px-4 py-12 pt-24">
      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 max-w-2xl w-full relative overflow-hidden">
        {/* Decorative Blur Circles */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full blur-2xl opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full blur-2xl opacity-50"></div>

        <div className="relative z-1 text-center">
          {/* Success Animation */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-3 shadow-lg">
                <CheckCircle
                  className="text-white w-14 h-14 md:w-16 md:h-16"
                  strokeWidth={2.5}
                />
              </div>
            </div>
          </div>

          {/* Headings */}
          <h1 className="text-2xl md:text-3xl font-semibold mb-2 text-gray-800">
            ✅ Order Placed Successfully!
          </h1>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
            Thank you for shopping with us! Your order is confirmed and will be
            delivered soon.
          </p>

          {/* Order Info */}
          {order && (
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-5 mb-6 border border-gray-200 shadow-sm text-left">
              <div className="flex items-center gap-2 mb-4 border-b border-gray-300 pb-2">
                <Package className="w-5 h-5 text-emerald-600" />
                <h2 className="text-lg font-semibold text-gray-800">
                  Order Details
                </h2>
              </div>

              <div className="space-y-3 text-sm md:text-base">
                {/* Order ID */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow transition-all">
                  <div className="bg-emerald-100 p-2 rounded-md">
                    <Hash className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 font-medium mb-1">Order ID</p>
                    <p className="text-gray-800 font-mono text-sm bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
                      {order._id}
                    </p>
                  </div>
                </div>

                {/* Total */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow transition-all">
                  <div className="bg-green-100 p-2 rounded-md">
                    <CreditCard className="w-4 h-4 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 font-medium mb-1">
                      Total Amount
                    </p>
                    <p className="text-xl font-bold text-green-600">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                </div>

                {/* Payment */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow transition-all">
                  <div className="bg-blue-100 p-2 rounded-md">
                    <ShoppingBag className="w-4 h-4 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 font-medium mb-1">
                      Payment Method
                    </p>
                    <p className="text-gray-800 font-semibold capitalize">
                      {order.paymentMethod === "cod"
                        ? "💵 Cash on Delivery"
                        : "💳 Online Payment"}
                    </p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow transition-all">
                  <div className="bg-orange-100 p-2 rounded-md">
                    <MapPin className="w-4 h-4 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-500 font-medium mb-1">
                      Delivery Address
                    </p>
                    <p className="text-gray-800 text-sm leading-relaxed">
                      {order.shippingAddress.street}, <br />
                      {order.shippingAddress.city}, {order.shippingAddress.state}{" "}
                      <br />
                      <span className="font-semibold">
                        PIN: {order.shippingAddress.zip}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Email Info */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
            <p className="text-blue-700 text-xs md:text-sm font-medium">
              📧 A confirmation email has been sent to your registered address.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="/shop"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Home className="w-5 h-5" />
              Continue Shopping
            </a>

            <a
              href="/account/orders"
              className="flex-1 flex items-center justify-center gap-2 px-5 py-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5"
            >
              <Package className="w-5 h-5" />
              View Orders
            </a>
          </div>

          <p className="text-center text-gray-500 text-xs mt-5">
            Need help? Contact our support team anytime 💬
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThankyouPage;
