import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../context/ShopContext";
import api from "../api/axios";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const [payment, setPayment] = useState("online");
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const { cart, checkoutCart } = useContext(ShopContext);

  const handleCheckout = async () => {
    const order = await checkoutCart({
      addressId: selectedAddress,
      paymentMethod: payment,
    })
    if (order) {
      navigate('/Thankyou', { state: { order } })
    }
  }
  useEffect(() => {
    const loggedUser = localStorage.getItem("user");
    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);
  // Fetch saved addresses on mount
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await api.get("/user/address");
        setAddresses(res.data.addresses);

        if (res.data.addresses.length > 0) {
          // Look for address marked as default
          const defaultAddress = res.data.addresses.find(addr => addr.isDefault) || res.data.addresses[0];
          setSelectedAddress(defaultAddress._id);
        }
      } catch (error) {
        console.error("❌ Failed to fetch addresses", error);
      }
    };
    fetchAddresses();
  }, []);


  // Calculate subtotal
  const subtotal = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-6 px-3">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-1">Checkout</h1>
          <p className="text-gray-600 text-sm">Complete your order in a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Billing Details */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-md">
                  1
                </div>
                <h2 className="text-xl font-bold text-gray-800">Delivery Address</h2>
              </div>

              {/* Saved Addresses */}
              {addresses.length > 0 ? (
                <div className="space-y-3 mb-6">
                  <h3 className="font-semibold text-gray-700 text-sm mb-2">Select Delivery Address</h3>
                  <div className="space-y-2">
                    {addresses.map((addr) => (
                      <label
                        key={addr._id}
                        className={`flex items-start space-x-3 border-2 p-3 cursor-pointer transition-all duration-200 text-sm ${selectedAddress === addr._id
                          ? "border-yellow-500 bg-yellow-50 shadow-md"
                          : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                          }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddress === addr._id}
                          onChange={() => setSelectedAddress(addr._id)}
                          className="mt-1 w-4 h-4 accent-yellow-500"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 mb-1">{addr.name}</p>
                          <p className="text-gray-600 leading-relaxed">{addr.street}, {addr.city}, {addr.state} - {addr.zip}</p>
                          <p className="text-gray-600 flex items-center gap-1"><span className="text-sm">📞</span>{addr.phone}</p>
                        </div>
                        {selectedAddress === addr._id && (
                          <div className="bg-yellow-500 text-white px-2 py-0.5 rounded-full text-xs font-semibold">Selected</div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 p-4 mb-6 text-sm text-center text-amber-800">
                  📍 No saved addresses found. Please add an address to continue.
                </div>
              )}

              {/* Manual Form */}
              <div className="border-t pt-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-2">Or Add New Address</h3>
                <input
                  type="text"
                  placeholder="First name *"
                  className="w-full border-2 border-gray-200 p-3 text-sm focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-xl p-6 border border-gray-100 sticky top-4 hover:shadow-2xl transition-shadow duration-300 text-sm">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-base shadow-md">
                  2
                </div>
                <h2 className="text-xl font-bold text-gray-800">Order Summary</h2>
              </div>

              {/* Cart Items */}
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2 mb-4 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center bg-gray-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="font-medium text-gray-800 block">{item.productId.name}</span>
                      <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                    </div>
                    <span className="font-bold text-green-600 text-sm ml-2">
                      ₹{item.productId.price * item.quantity}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t border-gray-200 pt-3 mb-4">
                <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 p-2 rounded-lg">
                  <span className="text-sm font-bold text-gray-800">Total</span>
                  <span className="text-lg font-bold text-green-600">₹{subtotal}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-4">
                <h3 className="font-semibold text-gray-700 text-sm mb-2 flex items-center gap-1">
                  💳 Payment Method
                </h3>
                <div className="space-y-2">
                  {["cod", "online"].map((method) => (
                    <label
                      key={method}
                      className={`flex items-center space-x-2 border-2 p-2 rounded-lg cursor-pointer transition-all ${payment === method
                        ? "border-yellow-500 bg-yellow-50 shadow-md"
                        : "border-gray-200 hover:border-yellow-300 hover:bg-gray-50"
                        }`}
                    >
                      <input
                        type="radio"
                        checked={payment === method}
                        onChange={() => setPayment(method)}
                        className="w-4 h-4 accent-yellow-500"
                      />
                      <span>{method === "cod" ? "💵 Cash On Delivery" : "💳 Pay Online"}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Place Order */}
              {user ? (
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 text-white font-bold py-3 rounded-lg shadow-lg flex items-center justify-center gap-1 text-sm"
                >
                  🛒 Place Order
                </button>
              ) : (
                <p className="text-center text-gray-500 text-sm">Unable To Place Order</p>
              )}

              <p className="text-xs text-center text-gray-500 mt-2">
                🔐 Secure checkout powered by SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}