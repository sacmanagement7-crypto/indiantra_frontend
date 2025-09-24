import React from "react";
import { FiTruck, FiRotateCcw, FiShield, FiAward } from "react-icons/fi";

export default function FeaturesBar() {
  const features = [
    {
      icon: <FiTruck className="text-yellow-500 text-3xl" />,
      title: "Free Shipping",
      desc: "When ordering over $100",
    },
    {
      icon: <FiRotateCcw className="text-yellow-500 text-3xl" />,
      title: "Free Return",
      desc: "Get Return within 30 days",
    },
    {
      icon: <FiShield className="text-yellow-500 text-3xl" />,
      title: "Secure Payment",
      desc: "100% Secure Online Payment",
    },
    {
      icon: <FiAward className="text-yellow-500 text-3xl" />,
      title: "Best Quality",
      desc: "Original Product Guaranteed",
    },
  ];

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-center space-x-4">
            {/* Icon */}
            <div>{feature.icon}</div>

            {/* Text */}
            <div>
              <h4 className="font-semibold text-gray-900">{feature.title}</h4>
              <p className="text-gray-500 text-sm">{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
