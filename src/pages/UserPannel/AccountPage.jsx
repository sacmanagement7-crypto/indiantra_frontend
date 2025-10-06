import { useEffect, useState } from "react";
import {
  ShoppingBag,
  Shield,
  MapPin,
  Headphones,
  Briefcase,
  Heart,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AccountPage() {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (e) {
        console.error("Error parsing user:", e);
      }
    }
  }, []);

  const sections = [
    {
      id: "orders",
      label: "Your Orders",
      desc: "Track, return, or buy things again",
      icon: ShoppingBag,
      bg: "bg-orange-100",
      color: "text-orange-600",
      path: "/account/orders",
    },
    {
      id: "wishlist",
      label: "Your Wishlist",
      desc: "Save items you love for later",
      icon: Heart,
      bg: "bg-pink-100",
      color: "text-pink-600",
      path: "/wishlist",
    },
    {
      id: "login",
      label: "Login & Security",
      desc: "Edit login, name, and mobile number",
      icon: Shield,
      bg: "bg-gray-100",
      color: "text-gray-700",
      path: "/account/settings",
    },
    {
      id: "address",
      label: "Your Addresses",
      desc: "Edit addresses for orders and gifts",
      icon: MapPin,
      bg: "bg-yellow-100",
      color: "text-yellow-600",
      path: "/account/address",
    },
    {
      id: "business",
      label: "Your Business Account",
      desc: "Sign up for GST invoice & bulk discounts",
      icon: Briefcase,
      bg: "bg-purple-100",
      color: "text-purple-600",
      path: "/seller-login",
    },
    {
      id: "support",
      label: "Contact Us",
      desc: "Customer service via phone or chat",
      icon: Headphones,
      bg: "bg-green-100",
      color: "text-green-600",
      path: "/support",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Header */}
      <h1 className="text-2xl md:text-3xl font-extrabold mb-10 text-gray-800">
        👋 Hello, {user.name}
      </h1>

      {/* Grid of sections */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sections.map(({ id, label, desc, icon: Icon, bg, color, path }) => (
          <div
            key={id}
            onClick={() => navigate(path)}
            className="relative flex items-start space-x-4 p-5 sm:p-6 rounded-2xl border bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition cursor-pointer group overflow-hidden"
          >
            {/* Icon Circle */}
            <div
              className={`${bg} ${color} w-12 h-12 flex items-center justify-center rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>

            {/* Content */}
            <div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                {label}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">{desc}</p>
            </div>

            {/* Decorative Glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-100/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
