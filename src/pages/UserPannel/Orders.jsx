import React, { useState, useEffect } from "react";
import { Package, Clock, CheckCircle, Truck, MapPin, Phone } from "lucide-react";
import api from "../../api/axios";



export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        setLoading(true);
        const res = await api.get('/order');
        console.log(res.data)
        setOrders(res.data.orders);
      } catch (error) {
        console.log(error);
        alert("Unable to fetch Orders");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusConfig = (status) => {
    switch (status) {
      case "Delivered":
        return {
          color: "bg-green-50 text-green-700 border-green-200",
          icon: CheckCircle,
          iconColor: "text-green-600"
        };
      case "Shipped":
        return {
          color: "bg-blue-50 text-blue-700 border-blue-200",
          icon: Truck,
          iconColor: "text-blue-600"
        };
      case "Processing":
        return {
          color: "bg-yellow-50 text-yellow-700 border-yellow-200",
          icon: Clock,
          iconColor: "text-yellow-600"
        };
      default:
        return {
          color: "bg-gray-50 text-gray-700 border-gray-200",
          icon: Package,
          iconColor: "text-gray-600"
        };
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto p-6">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-gray-200 rounded w-48"></div>
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white border rounded-xl p-6 h-64"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {orders?.length === 0 ? (
          <div className="bg-white rounded-2xl shadow-sm border p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders yet</h3>
            <p className="text-gray-600 mb-6">Start shopping to see your orders here</p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
              Start Shopping
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            {orders?.map((order) => {
              const statusConfig = getStatusConfig(order.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={order._id}
                  className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Order Header */}
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Package className="w-5 h-5 text-gray-600" />
                          <span className="text-sm font-semibold text-gray-900">
                            Order #{order._id.slice(-8).toUpperCase()}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span>Placed on {formatDate(order.createdAt)}</span>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
                        <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold border ${statusConfig.color}`}>
                          <StatusIcon className={`w-4 h-4 ${statusConfig.iconColor}`} />
                          {order.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    {/* Items */}
                    <div className="space-y-4 mb-6">
                      {order?.items?.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                        >
                          <div className="flex-shrink-0">
                            <img
                              src={item.productId?.images[0] || "https://via.placeholder.com/100"}
                              alt={item.productId?.name}
                              className="w-24 h-24 object-cover rounded-lg border-2 border-white shadow-sm"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg font-semibold text-gray-900 mb-1">
                              {item?.productId?.name}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                              Category: {item?.productId?.category}
                            </p>
                            <div className="flex items-center gap-4 text-sm">
                              <span className="text-gray-600">Qty: {item?.quantity}</span>
                              <span className="text-gray-400">•</span>
                              <span className="text-gray-600">₹{item?.price} each</span>
                            </div>
                          </div>
                          <div className="flex-shrink-0 text-right">
                            <p className="text-lg font-bold text-gray-900">
                              ₹{item?.price * item?.quantity}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Shipping Address */}
                    {order.shippingAddress && (
                      <div className="bg-blue-50 rounded-xl p-4 mb-6 border border-blue-100">
                        <div className="flex items-start gap-3">
                          <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-2">Delivery Address</h4>
                            <div className="text-sm text-gray-700 space-y-1">
                              <p className="font-medium">{order.shippingAddress.name}</p>
                              <p>{order.shippingAddress.addressLine1}</p>
                              <p>
                                {order.shippingAddress.city}, {order.shippingAddress.state} - {order.shippingAddress.pincode}
                              </p>
                              <div className="flex items-center gap-2 mt-2">
                                <Phone className="w-4 h-4 text-gray-600" />
                                <p>{order.shippingAddress.phone}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-gray-200 gap-4">
                      <div className="flex items-baseline gap-2">
                        <span className="text-gray-600 text-sm">Order Total:</span>
                        <span className="text-2xl font-bold text-gray-900">₹{order.totalAmount}</span>
                      </div>
                      <div className="flex gap-3 w-full sm:w-auto">
                        <button className="flex-1 sm:flex-none px-6 py-2.5 border-2 border-gray-300 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition">
                          Track Order
                        </button>
                        <button className="flex-1 sm:flex-none px-6 py-2.5 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-sm hover:shadow-md">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}