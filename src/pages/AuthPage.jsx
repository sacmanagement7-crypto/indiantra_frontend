import React, { useState } from "react";
import api from "../api/axios"; // ✅ import axios instance

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  // Form state
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // 🔑 Login API
        const res = await api.post("/auth/login", {
          email: form.email,
          password: form.password,
        });
        setMessage(`✅ Welcome back, ${res.data.name}`);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("token",JSON.stringify(res.data.token))
        console.log(res.data) 
      } else {
        // 🆕 Register API
        const res = await api.post("/auth/register", form);
        setMessage(`🎉 Account created for ${res.data.name}`);
      }
    } catch (err) {
      setMessage(err.response?.data?.message || "❌ Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl shadow-md p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8 space-x-6 text-2xl font-bold">
          <button
            onClick={() => setIsLogin(true)}
            className={`transition ${
              isLogin ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Login
          </button>
          <span className="text-gray-400 font-light">OR</span>
          <button
            onClick={() => setIsLogin(false)}
            className={`transition ${
              !isLogin ? "text-gray-900" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            Register
          </button>
        </div>

        {/* Message */}
        {message && (
          <p className="mb-4 text-center text-sm text-red-500">{message}</p>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className={`w-full ${
              isLogin
                ? "bg-orange-500 hover:bg-orange-600"
                : "bg-black hover:bg-gray-800"
            } text-white font-semibold py-2 rounded-md transition`}
          >
            {isLogin ? "Log In" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
}
