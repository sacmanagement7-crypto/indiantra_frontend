import React, { useState } from "react";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

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

        {/* Login Form */}
        {isLogin ? (
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Username or email address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center space-x-2 text-sm text-gray-600">
                <input type="checkbox" className="rounded" />
                <span>Remember me</span>
              </label>
              <a href="#" className="text-sm text-orange-500 hover:underline">
                Lost your password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-md transition"
            >
              Log In
            </button>
          </form>
        ) : (
          /* Register Form */
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                className="mt-1 w-full border rounded-md px-3 py-2 text-sm focus:ring-2 focus:ring-orange-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-black hover:bg-gray-800 text-white font-semibold py-2 rounded-md transition"
            >
              Register
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
