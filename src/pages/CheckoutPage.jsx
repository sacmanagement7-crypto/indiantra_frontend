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
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-white py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
          <p className="text-gray-600">Complete your order in a few simple steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Billing Details - Larger Column */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  1
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Delivery Address
                </h2>
              </div>

              {/* Saved Addresses */}
              {addresses.length > 0 ? (
                <div className="space-y-4 mb-8">
                  <h3 className="font-semibold text-gray-700 text-lg mb-4">Select Delivery Address</h3>
                  <div className="space-y-3">
                    {addresses.map((addr) => (
                      <label
                        key={addr._id}
                        className={`flex items-start space-x-4 border-2 p-5 cursor-pointer transition-all duration-200 ${selectedAddress === addr._id
                            ? 'border-yellow-500 bg-yellow-50 shadow-md'
                            : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
                          }`}
                      >
                        <input
                          type="radio"
                          name="address"
                          checked={selectedAddress === addr._id}
                          onChange={() => setSelectedAddress(addr._id)}
                          className="mt-1 w-5 h-5 accent-yellow-500"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-gray-800 text-lg mb-1">{addr.name}</p>
                          <p className="text-sm text-gray-600 leading-relaxed mb-2">
                            {addr.street}, {addr.city}, {addr.state} - {addr.zip}
                          </p>
                          <p className="text-sm text-gray-600 flex items-center gap-1">
                            <span className="text-lg">📞</span>
                            <span>{addr.phone}</span>
                          </p>
                        </div>
                        {selectedAddress === addr._id && (
                          <div className="bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Selected
                          </div>
                        )}
                      </label>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-amber-50 border border-amber-200 p-6 mb-8">
                  <p className="text-amber-800 text-center font-medium">
                    📍 No saved addresses found. Please add an address to continue.
                  </p>
                </div>
              )}

              {/* Manual Form (Hidden by default) */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-700 text-lg mb-4">Or Add New Address</h3>
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="First name *"
                    className="w-full border-2 border-gray-200 p-4 focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 outline-none transition-all"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow-xl p-8 border border-gray-100 sticky top-8 hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-md">
                  2
                </div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Order Summary
                </h2>
              </div>

              {/* Cart Items */}
              <div className="space-y-3 text-sm max-h-72 overflow-y-auto pr-2 mb-6 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                {cart.map((item) => (
                  <div
                    key={item._id}
                    className="flex justify-between items-center bg-gray-50 p-4 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex-1">
                      <span className="font-medium text-gray-800 block">{item.name}</span>
                      <span className="text-xs text-gray-500">Quantity: {item.qty}</span>
                    </div>
                    <span className="font-bold text-green-600 text-lg ml-4">
                      ₹{item.price * item.qty}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="border-t-2 border-gray-200 pt-5 mb-8">
                <div className="flex justify-between items-center bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl">
                  <span className="text-lg font-bold text-gray-800">Total Amount</span>
                  <span className="text-2xl font-bold text-green-600">₹{subtotal}</span>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="mb-8">
                <h3 className="font-semibold text-gray-700 text-lg mb-4 flex items-center gap-2">
                  <span className="text-xl">💳</span> Payment Method
                </h3>
                <div className="space-y-3">
                  <label className={`flex items-center space-x-4 border-2 p-4 rounded-xl cursor-pointer transition-all ${payment === "cod"
                      ? 'border-yellow-500 bg-yellow-50 shadow-md'
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
                    }`}>
                    <input
                      type="radio"
                      checked={payment === "cod"}
                      onChange={() => setPayment("cod")}
                      className="w-5 h-5 accent-yellow-500"
                    />
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xl">💵</span>
                      <span className="font-medium text-gray-800">Cash On Delivery</span>
                    </div>
                  </label>

                  <label className={`flex items-center space-x-4 border-2 p-4 rounded-xl cursor-pointer transition-all ${payment === "online"
                      ? 'border-yellow-500 bg-yellow-50 shadow-md'
                      : 'border-gray-200 hover:border-yellow-300 hover:bg-gray-50'
                    }`}>
                    <input
                      type="radio"
                      checked={payment === "online"}
                      onChange={() => setPayment("online")}
                      className="w-5 h-5 accent-yellow-500"
                    />
                    <div className="flex items-center gap-2 flex-1">
                      <span className="text-xl">💳</span>
                      <span className="font-medium text-gray-800">Pay Online</span>
                    </div>
                  </label>

                  {payment === "online" && (
                    <div className="bg-blue-50 border border-blue-200 p-4 rounded-xl ml-9">
                      <p className="text-xs text-blue-800 leading-relaxed">
                        🔒 Pay securely via Credit Card, Debit Card, Net Banking, or UPI.
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Place Order Button */}
              {user ? (
                <button
                  onClick={handleCheckout}
                  className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-lg"
                >
                  <span>🛒</span>
                  <span>Place Order</span>
                </button>
              ) : <p>Unable To PlaceOrder</p>}

              <p className="text-xs text-center text-gray-500 mt-4">
                🔐 Secure checkout powered by SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}