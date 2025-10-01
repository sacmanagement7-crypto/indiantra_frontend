import React, { useState } from "react";
import { FaHeart, FaShoppingBag, FaUser, FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import logo from "../assets/logo.png";
import { ShopContext } from "../context/ShopContext";
import { useEffect } from "react";

export default function Header() {
  const { categories, products, cart, wishlist } = useContext(ShopContext);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [catOpen, setCatOpen] = useState(false);
  const [user, setUser] = useState(null);


  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Invalid JSON in localStorage user:", error);
        localStorage.removeItem("user"); // cleanup bad data
      }
    }
  }, []);


  const handleSearch = () => {
    if (!searchText.trim()) return;
    const match = products.find((p) => {
      if (p.name == searchText) {
        return p
      } else {
        return undefined
      }
    })

    if (match) {
      navigate(`/product/${match._id}`)
      setSearchText("");
    } else {
      alert("❌ No product found!");
    }
  }
  console.log(user);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setMessage("👋 Logged out");
  };
  return (
    <header className="w-full font-sans text-sm text-gray-700 border-b bg-[#ffffff] sticky top-0 z-10">
      {/* 🔹 Middle Section */}
      <div className="flex items-center justify-between px-4 lg:px-8 py-0.5">
        {/* Logo */}
        <NavLink to="/">
          <div className="flex items-center">
            <img src={logo} alt="Logo" className="h-[45px] lg:h-[55px] w-auto mb-3" />
          </div>
        </NavLink>

        {/* 🔍 Search (hidden on mobile + tablet) */}
        <div className="hidden lg:flex w-1/2 border border-gray-200">
          <input
            type="text"
            placeholder="Search Product..."
            value={searchText}
            className="flex-1 px-3 py-2 outline-none text-gray-600 placeholder-gray-400"
            onChange={(e) => {
              setSearchText(e.target.value)
              console.log(e.target.value)
            }}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />

          <select className="border-l px-3 py-2 outline-none text-gray-600">
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category.name}
              </option>
            ))}
          </select>

          <button onClick={() => handleSearch()} className="bg-yellow-500 px-5 text-white font-medium">
            Search
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4 lg:space-x-6 text-lg">

          <div className="relative">
            <NavLink to={'/wishlist'}><FaHeart className="cursor-pointer" /></NavLink>
            {wishlist.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </div>
          <div className="relative">
            <NavLink to={'/cart'}><FaShoppingBag className="cursor-pointer" /></NavLink>
            {cart.length > 0 && (
              <span className="absolute -top-3 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cart.reduce((sum, item) => sum + item.qty, 0)}
              </span>
            )}
          </div>
          <FaUser
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />

          {/* Mobile + Tablet Hamburger */}
          <button
            className="lg:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* User Dropdown */}
          {open && (
            <div className="absolute top-[70px] right-4 mt-3 w-48 z-10 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 ring-1 ring-black/5">
              <div className="py-2">
                <button
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setOpen(false); // 👈 menu close
                    window.location.href = user ? "/account" : "/auth"; // 👈 redirect + reload
                  }}
                >
                  {user ? "My Account" : "Login/Register"}
                </button>

                <button
                  className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => {
                    setOpen(false); // close menu
                    window.location.href = "/setting"; // redirect + reload
                  }}
                >
                  Settings
                </button>

                <button
                  onClick={() => {
                    handleLogout();
                    setOpen(false); // close menu
                    window.location.reload(); // full reload after logout
                  }}
                  className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                >
                  Logout
                </button>
              </div>
            </div>
          )}

        </div>
      </div>

      {/* 🔹 Bottom Nav */}
      <nav className="hidden lg:flex items-center justify-between bg-[#ffb938] px-8 py-2 text-gray-800 relative">
        <div className="flex items-center space-x-6 font-medium relative">
          {/* All Categories Button */}
          <button
            className="flex items-center space-x-2 relative"
            onClick={() => setCatOpen(!catOpen)}
          >
            <span className="text-lg">☰</span>
            <span>All Categories</span>
          </button>

          {/* Categories Dropdown */}
          {catOpen && (
            <div className="fixed top-0 left-0 w-72 h-full bg-white shadow-xl z-50 overflow-y-auto transform transition-transform duration-300 translate-x-0">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-tr-lg rounded-br-lg shadow-md">
                <h2 className="font-semibold text-lg text-gray-900">
                  Hello, {user?.name || "Sign In"}
                </h2>
                <FaTimes
                  className="cursor-pointer text-2xl text-gray-700 hover:text-red-600 transition transform hover:scale-110"
                  onClick={() => setCatOpen(false)}
                />
              </div>

              {/* Search Box (optional, modern touch) */}
              <div className="p-4">
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-yellow-400 focus:outline-none"
                />
              </div>

              {/* Categories */}
              <ul className="p-4 space-y-2">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="group flex justify-between items-center py-3 px-3 rounded-lg cursor-pointer hover:bg-yellow-50 transition-all duration-200 shadow-sm"
                  >
                    <NavLink
                      to={`/shop?category=${cat.name}`}
                      onClick={() => setCatOpen(false)}
                      className="w-full font-medium text-gray-700 group-hover:text-yellow-700 transition"
                    >
                      {cat.name}
                    </NavLink>
                    <MdKeyboardArrowRight className="text-gray-400 group-hover:text-yellow-700 group-hover:translate-x-1 transition-transform duration-200" />
                  </li>
                ))}
              </ul>

              {/* Footer / Extra Links */}
              <div className="mt-auto p-4 border-t space-y-2">
                <NavLink
                  to="/contact"
                  className="block text-gray-700 hover:text-yellow-600 font-medium transition"
                >
                  Contact Us
                </NavLink>
                <NavLink
                  to="/faq"
                  className="block text-gray-700 hover:text-yellow-600 font-medium transition"
                >
                  FAQ
                </NavLink>
              </div>
            </div>
          )}


          <NavLink to="/" className="hover:text-white transition">
            Homepage
          </NavLink>
          <NavLink to="/shop" className="hover:text-white transition">
            Shop
          </NavLink>
          <NavLink to="/about" className="hover:text-white transition">
            About
          </NavLink>
          <NavLink to="/blog" className="hover:text-white transition">
            Blog
          </NavLink>
          <NavLink to="/contact" className="hover:text-white transition">
            Contact
          </NavLink>
        </div>

        <NavLink to="/seller-login">
          <button className="bg-black text-white px-5 py-2 flex items-center font-medium">
            Become a Seller <MdKeyboardArrowRight className="ml-1 text-lg" />
          </button>
        </NavLink>
      </nav>

      {/* 🔹 Mobile + Tablet Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-[#ffb938] px-6 py-4 space-y-4 text-gray-800 font-medium">
          <NavLink to="/" className="block hover:text-white transition">
            Homepage
          </NavLink>
          <NavLink to="/shop" className="block hover:text-white transition">
            Shop
          </NavLink>
          <NavLink to="/about" className="block hover:text-white transition">
            About
          </NavLink>
          <NavLink to="/blog" className="block hover:text-white transition">
            Blog
          </NavLink>
          <NavLink to="/contact" className="block hover:text-white transition">
            Contact
          </NavLink>
          <NavLink to="/seller-login">
            <button className="w-full bg-black text-white px-5 py-2 flex items-center justify-center font-medium">
              Become a Seller <MdKeyboardArrowRight className="ml-1 text-lg" />
            </button>
          </NavLink>
        </div>
      )}
    </header>
  );
}
