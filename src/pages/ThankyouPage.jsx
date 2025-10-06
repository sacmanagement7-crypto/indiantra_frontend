import React from "react"; 
import { CheckCircle, Package, CreditCard, MapPin, Hash, ShoppingBag, Home } from "lucide-react"; 
 
const ThankyouPage = ({ order }) => { 
  return ( 
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 px-4 py-12 pt-24"> 
      {/* Success Animation Container */}
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl w-full relative overflow-hidden z-1">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full -mr-20 -mt-20 opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-100 rounded-full -ml-16 -mb-16 opacity-50"></div>
        
        {/* Content */}
        <div className="relative z-10">
          {/* Success Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-25"></div>
              <div className="relative bg-gradient-to-br from-green-400 to-emerald-500 rounded-full p-4 shadow-xl">
                <CheckCircle className="text-white w-16 h-16 md:w-20 md:h-20" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800 text-center"> 
            Order Placed Successfully! 
          </h1> 
          <p className="text-gray-600 mb-8 text-center text-lg"> 
            🎉 Thank you for shopping with us! Your order is confirmed and will be delivered soon.
          </p> 
   
          {/* Order Details Card */}
          {order && ( 
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 mb-8 border-2 border-gray-200 shadow-md">
              <div className="flex items-center gap-2 mb-5 pb-3 border-b border-gray-300">
                <Package className="w-6 h-6 text-emerald-600" />
                <h2 className="text-xl font-bold text-gray-800">Order Details</h2>
              </div>
              
              <div className="space-y-4">
                {/* Order ID */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-emerald-100 p-2 rounded-lg">
                    <Hash className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Order ID</p>
                    <p className="text-gray-800 font-mono text-sm md:text-base break-all bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
                      {order._id}
                    </p>
                  </div>
                </div>

                {/* Total Amount */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <CreditCard className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Total Amount</p>
                    <p className="text-2xl font-bold text-green-600">
                      ₹{order.totalAmount}
                    </p>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <ShoppingBag className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Payment Method</p>
                    <p className="text-gray-800 font-semibold capitalize">
                      {order.paymentMethod === 'cod' ? '💵 Cash on Delivery' : '💳 Online Payment'}
                    </p>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-gray-500 font-medium mb-1">Delivery Address</p>
                    <p className="text-gray-800 leading-relaxed">
                      {order.shippingAddress.street},<br />
                      {order.shippingAddress.city}, {order.shippingAddress.state}<br />
                      <span className="font-semibold">PIN: {order.shippingAddress.zip}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div> 
          )} 

          {/* Email Confirmation Notice */}
          <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 mb-8 text-center">
            <p className="text-blue-800 text-sm font-medium">
              📧 Order confirmation has been sent to your email
            </p>
          </div>
   
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="/" 
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center" 
            > 
              <Home className="w-5 h-5" />
              <span>Continue Shopping</span>
            </a>

            <a 
              href="/orders" 
              className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-gray-800 hover:bg-gray-900 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-center" 
            > 
              <Package className="w-5 h-5" />
              <span>View Orders</span>
            </a>
          </div>

          {/* Support Text */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Need help? Contact our support team anytime 💬
          </p>
        </div>
      </div> 
    </div> 
  ); 
}; 
 
export default ThankyouPage;