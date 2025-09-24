import React, { useState } from "react";
import { FaSyncAlt, FaHeart, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdKeyboardArrowRight } from "react-icons/md";
import { NavLink } from "react-router";
import logo from "../assets/logo.png"

export default function Header() {
    // Example categories (can be fetched from API instead)
    const categories = [
        "All Categories",
        "Clothing",
        "Handmade",
        "Home Decor",
        "Groceries",
        "Ayurvedic Products",
    ];

    const [user, setUser] = useState(null)
    const [isLogin, setIsLogin] = useState(true);
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full font-sans text-sm text-gray-700">

            {/* 🔹 Middle Section */}
            <div className="flex items-center justify-between px-8 py-5 ">
                {/* Logo */}
                <NavLink to="/">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-[55px] w-auto" />
                    </div>
                </NavLink>

                {/* Search */}
                <div className="flex w-1/2 border border-gray-200">
                    <input
                        type="text"
                        placeholder="Search Product..."
                        className="flex-1 px-3 py-2 outline-none text-gray-600 placeholder-gray-400"
                    />


                    <select className="border-l px-3 py-2 outline-none text-gray-600">
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>

                    <button className="bg-yellow-500 px-5 text-white font-medium">
                        Search
                    </button>
                </div>

                {/* Icons */}
                <div className="flex items-center space-x-6 text-lg">
                    <div className="relative cursor-pointer">
                        <FaSyncAlt className="text-gray-700" />
                        {/* <span className="absolute -top-2 -right-3 bg-[#ffb938] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"></span> */}
                    </div>
                    <div className="relative cursor-pointer">
                        <FaHeart className="text-gray-700" />
                        {/* <span className="absolute -top-2 -right-3 bg-[#ffb938] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"></span> */}
                    </div>
                    <div className="relative cursor-pointer">
                        <FaShoppingBag className="text-gray-700" />
                        {/* <span className="absolute -top-2 -right-3 bg-[#ffb938] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"></span> */}
                    </div>
                    <FaUser className="text-gray-700 cursor-pointer" onClick={() => setOpen(!open)} />
                    {
                        open && (
                            <div className="absolute top-[66px] right-[40px] mt-3 w-48 rounded-2xl border border-gray-200 bg-white shadow-lg shadow-gray-200/50 ring-1 ring-black/5">
                                <div className="py-2">
                                    <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                                        {
                                            isLogin ? (
                                                <NavLink>MyAccount</NavLink>
                                            ) :
                                                <NavLink to={'/auth'}>Login/Register</NavLink>
                                        }
                                    </button>
                                    <button className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors">
                                        Settings
                                    </button>
                                    <button className="block w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                        Logout
                                    </button>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>

            {/* 🔹 Bottom Nav */}
            <nav className="flex items-center justify-between bg-[#ffb938] px-8 py-3 text-gray-800">
                <div className="flex items-center space-x-6 font-medium">
                    <button className="flex items-center space-x-2">
                        <span className="text-lg">☰</span>
                        <span>All Categories</span>
                    </button>
                    <NavLink to='/' className="hover:text-white transition" >Homepage</NavLink>
                    <NavLink to='/shop' className="hover:text-white transition" >Shop</NavLink>
                    <NavLink to='/pages' className="hover:text-white transition" >Pages</NavLink>
                    <NavLink to='/about' className="hover:text-white transition" >About</NavLink>
                    <NavLink to='/blog' className="hover:text-white transition" >Blog</NavLink>
                    <NavLink to='/contact' className="hover:text-white transition" >Contact</NavLink>
                </div>

                <NavLink to={'/seller-login'}>
                    <button className="bg-black text-white px-5 py-2 flex items-center font-medium">
                        Become a Seller <MdKeyboardArrowRight className="ml-1 text-lg" />
                    </button>
                </NavLink>
            </nav>
        </header>
    );
}
