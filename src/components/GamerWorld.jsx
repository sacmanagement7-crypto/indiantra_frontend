import React, { useState, useEffect, useContext } from 'react';
import { ShoppingCart, Trash2, Plus, Minus, Tag, Clock, X } from 'lucide-react';
import { ShopContext } from "../context/ShopContext";

// Timer Component
const TimerDisplay = ({ offerEndsAt }) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0, expired: false });

  useEffect(() => {
    if (!offerEndsAt) return;

    const offerTime = typeof offerEndsAt === 'string' ? new Date(offerEndsAt).getTime() : offerEndsAt;

    const interval = setInterval(() => {
      const remaining = offerTime - Date.now();
      if (remaining > 0) {
        const hours = Math.floor(remaining / (1000 * 60 * 60));
        const minutes = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((remaining % (1000 * 60)) / 1000);
        setTimeLeft({ hours, minutes, seconds, expired: false });
      } else {
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0, expired: true });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [offerEndsAt]);

  if (timeLeft.expired) {
    return (
      <div className="flex items-center gap-1 text-red-600 text-xs font-bold">
        <Clock className="w-3 h-3" />
        <span>EXPIRED</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2">
      <Clock className="w-4 h-4 text-orange-600 animate-pulse" />
      <div className="flex gap-1 text-xs font-bold">
        <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white px-2 py-1 rounded shadow-md min-w-[28px] text-center">
          {String(timeLeft.hours).padStart(2, '0')}
        </span>
        <span className="text-orange-600 font-black">:</span>
        <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white px-2 py-1 rounded shadow-md min-w-[28px] text-center">
          {String(timeLeft.minutes).padStart(2, '0')}
        </span>
        <span className="text-orange-600 font-black">:</span>
        <span className="bg-gradient-to-br from-orange-500 to-amber-600 text-white px-2 py-1 rounded shadow-md min-w-[28px] text-center">
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      </div>
    </div>
  );
};

// Main Component
const GamerWorld = () => {
  const { products, addToCart } = useContext(ShopContext);

  // Show only 4 products
  const onlyFour = products?.slice(0, 4) || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 z-1">

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero Banner */}
        <div className="bg-gradient-to-r from-yellow-400 via-orange-400 to-amber-500 rounded-3xl shadow-2xl p-8 mb-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-black opacity-5"></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold text-white mb-1">🔥 Lightning Deals!</h2>
            <p className="text-sm text-white font-medium">Grab them before time runs out!</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {onlyFour.map(product => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all border-2 border-amber-100 flex flex-col"
            >
              {/* Product Image */}
              <div className="w-full h-48 relative">
                <img
                  src={product.images?.[0]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-3 right-3 px-2 py-1 bg-gradient-to-r from-orange-100 to-amber-100 text-orange-700 text-xs font-bold rounded-full border border-orange-200">
                  {product.category}
                </span>
              </div>

              {/* Product Details */}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-gray-800 mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-gray-600 mb-3 line-clamp-2">{product.shortdescription}</p>

                {/* Timer */}
                {product.offerEndsAt && (
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 px-2 py-1.5 rounded-lg border border-orange-200 flex items-center gap-1.5 mb-3">
                    <span className="text-orange-700 font-semibold text-xs">Ends in:</span>
                    <TimerDisplay offerEndsAt={product.offerEndsAt} />
                  </div>
                )}

                {/* Price & Discount */}
                <div className="mb-3 flex-grow">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xl font-black bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                      ₹{product.price}
                    </span>
                    {product.oldPrice && (
                      <span className="text-xs text-gray-400 line-through font-medium">
                        ₹{product.oldPrice}
                      </span>
                    )}
                  </div>
                  {product.discount && (
                    <span className="inline-flex items-center gap-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-2 py-0.5 rounded-full text-xs font-bold shadow-sm mt-1">
                      <Tag className="w-3 h-3" />
                      {product.discount}
                    </span>
                  )}
                </div>

                {/* Add to Cart */}
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-4 py-2 rounded-lg font-bold text-sm hover:shadow-lg transition-all hover:scale-105"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default GamerWorld;
