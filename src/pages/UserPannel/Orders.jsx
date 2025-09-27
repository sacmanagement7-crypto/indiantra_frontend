import React, { useState, useEffect } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  // ✅ Mock orders (real app में API से आएंगे)
  useEffect(() => {
    const mockOrders = [
      {
        id: "ORD12345",
        date: "2025-09-20",
        status: "Delivered",
        total: 1299,
        items: [
          {
            name: "Handmade Jute Bag",
            img: "https://via.placeholder.com/80",
            qty: 1,
            price: 699,
          },
          {
            name: "Clay Tea Cups (Set of 6)",
            img: "https://via.placeholder.com/80",
            qty: 1,
            price: 600,
          },
        ],
      },
      {
        id: "ORD67890",
        date: "2025-09-25",
        status: "Shipped",
        total: 499,
        items: [
          {
            name: "Organic Honey 500g",
            img: "https://via.placeholder.com/80",
            qty: 1,
            price: 499,
          },
        ],
      },
    ];
    setOrders(mockOrders);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-700";
      case "Shipped":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl font-bold text-gray-800 mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found.</p>
      ) : (
        <div className="space-y-6">
          {orders.map((order) => (
            <div
              key={order.id}
              className="bg-white border rounded-xl shadow-sm hover:shadow-md transition p-6"
            >
              {/* Order header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                <div>
                  <p className="text-sm text-gray-500">
                    Order ID: <span className="font-medium">{order.id}</span>
                  </p>
                  <p className="text-sm text-gray-500">
                    Ordered on: {order.date}
                  </p>
                </div>
                <span
                  className={`mt-2 sm:mt-0 px-3 py-1 text-sm rounded-full font-medium ${getStatusColor(
                    order.status
                  )}`}
                >
                  {order.status}
                </span>
              </div>

              {/* Items */}
              <div className="divide-y">
                {order.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center py-4 space-x-4"
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg border"
                    />
                    <div className="flex-1">
                      <h3 className="text-gray-800 font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <p className="text-gray-800 font-semibold">
                      ₹{item.price}
                    </p>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="flex flex-col sm:flex-row justify-between items-center mt-4 pt-4 border-t">
                <p className="text-gray-800 font-medium">
                  Total: ₹{order.total}
                </p>
                <button className="mt-3 sm:mt-0 px-5 py-2 border rounded-lg text-sm font-medium bg-white hover:bg-gray-100 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
