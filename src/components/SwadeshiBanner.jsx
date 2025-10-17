import React from 'react';
import { ArrowRight, Sparkles, Heart, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export default function SwadeshiBanner() {
  return (
    <div className="w-full bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-6 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Main Banner */}
        <div className="relative bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl overflow-hidden shadow-xl border border-orange-100">
          {/* Decorative Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-10 left-10 text-6xl">🌿</div>
            <div className="absolute top-20 right-20 text-5xl">🪔</div>
            <div className="absolute bottom-10 left-32 text-5xl">⚱️</div>
            <div className="absolute bottom-20 right-40 text-4xl">🧵</div>
          </div>

          <div className="relative grid md:grid-cols-2 gap-6 items-center p-8 md:p-10">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white text-orange-600 px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                <Sparkles className="w-3.5 h-3.5" />
                Made in India
              </div>

              <div>
                <h1 className="text-5xl md:text-6xl font-black text-amber-900 leading-tight mb-2">
                  SWADESHI
                  <br />
                  <span className="text-orange-600">PRODUCT</span>
                </h1>
                
                <NavLink to={'/shop'}>
                    <div className="inline-block bg-gradient-to-r from-orange-500 to-amber-600 text-white px-6 py-2 rounded-lg text-base font-bold shadow-md mt-2">
                  BUY LOCAL
                </div>
                </NavLink>
              </div>

              <p className="text-sm text-amber-800 leading-relaxed max-w-md">
                Support indigenous craftsmanship and empower local artisans
              </p>

              <div className="flex items-center gap-3 pt-2">
                <NavLink to={'/shop'}>
                    <button className="group flex items-center gap-2 bg-amber-900 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-amber-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5">
                  Shop Now
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                </NavLink>
                <NavLink to={'/about'}>
                    <button className="flex items-center gap-2 bg-white text-amber-900 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-amber-50 transition-all shadow-md border border-orange-200">
                  Learn More
                </button>
                </NavLink>
              </div>
            </div>

            {/* Right Visual */}
            <div className="flex items-center justify-center">
              <div className="grid grid-cols-2 gap-3">
                {/* Fabric */}
                <div className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1">
                  <div className="relative bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg h-24 flex items-center justify-center text-4xl mb-2">
                    📦
                    <button className="absolute top-1 right-1 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-orange-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-900">4.8</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-900">Handwoven Fabric</p>
                  <p className="text-xs text-orange-600 font-bold">₹899</p>
                </div>

                {/* Spice Jar */}
                <div className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 mt-6">
                  <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 rounded-lg h-24 flex items-center justify-center text-4xl mb-2">
                    🏺
                    <button className="absolute top-1 right-1 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-orange-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-900">4.9</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-900">Organic Spices</p>
                  <p className="text-xs text-orange-600 font-bold">₹299</p>
                </div>

                {/* Herbal Extract */}
                <div className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 -mt-3">
                  <div className="relative bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg h-24 flex items-center justify-center text-4xl mb-2">
                    🧴
                    <button className="absolute top-1 right-1 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-orange-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-900">4.7</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-900">Herbal Extract</p>
                  <p className="text-xs text-orange-600 font-bold">₹549</p>
                </div>

                {/* Tea Pot */}
                <div className="group bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all cursor-pointer hover:-translate-y-1 mt-3">
                  <div className="relative bg-gradient-to-br from-orange-100 to-amber-200 rounded-lg h-24 flex items-center justify-center text-4xl mb-2">
                    🫖
                    <button className="absolute top-1 right-1 bg-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity shadow-sm">
                      <Heart className="w-3.5 h-3.5 text-orange-500" />
                    </button>
                  </div>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                    <span className="text-xs font-semibold text-amber-900">4.9</span>
                  </div>
                  <p className="text-xs font-semibold text-amber-900">Clay Tea Pot</p>
                  <p className="text-xs text-orange-600 font-bold">₹699</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats Bar */}
          <div className="bg-gradient-to-r from-amber-900 to-orange-800 px-8 py-4">
            <div className="grid grid-cols-3 gap-6 text-center text-white">
              <div>
                <div className="text-xl font-bold">10,000+</div>
                <div className="text-xs text-orange-200">Local Artisans</div>
              </div>
              <div>
                <div className="text-xl font-bold">100% Authentic</div>
                <div className="text-xs text-orange-200">Indigenous Products</div>
              </div>
              <div>
                <div className="text-xl font-bold">28 States</div>
                <div className="text-xs text-orange-200">Pan India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}