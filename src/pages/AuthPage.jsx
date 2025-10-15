import React, { useState } from "react";
import api from "../api/axios";
import { useNavigate } from "react-router";
import { LogIn, UserPlus, Mail, Lock, User } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";

export default function AuthPage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        const res = await api.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        toast.success(`✅ Welcome back, ${res.data.name}`)
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token", res.data.token);
        navigate("/account");
      } else {
        const res = await api.post("/auth/register", form);
        toast.success(`🎉 Account created for ${res.data.name}`)
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong");
      toast.error(err.response?.data?.message || "❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-200 px-4">
      <div className="w-full max-w-md backdrop-blur-lg bg-white/80 border border-gray-200 rounded-2xl shadow-xl p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => setIsLogin(true)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                isLogin
                  ? "bg-orange-500 text-white shadow-md"
                  : "text-gray-600 hover:text-orange-500"
              }`}
            >
              <LogIn className="w-4 h-4" /> Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                !isLogin
                  ? "bg-black text-white shadow-md"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              <UserPlus className="w-4 h-4" /> Register
            </button>
          </div>
        </div>

        {/* Message */}
        {message && (
          <p className="mb-4 text-center text-sm text-red-500 font-medium">
            {message}
          </p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Email address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
              <input
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-400 focus:outline-none text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className={`w-full py-2.5 mt-2 rounded-lg font-semibold text-white shadow-md transition-all duration-300 ${
              isLogin
                ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                : "bg-gradient-to-r from-gray-800 to-black hover:from-black hover:to-gray-900"
            }`}
          >
            {isLogin ? "Log In" : "Create Account"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-xs text-gray-500 mt-6">
          By continuing, you agree to our{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Terms
          </a>{" "}
          &{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
