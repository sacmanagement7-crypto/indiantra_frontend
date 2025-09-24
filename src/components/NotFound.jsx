import React from "react";
import ErrorImg from "../assets/Error.jpg"; // put your 404 image inside assets

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <img src={ErrorImg} alt="404 Not Found" className="w-80 mb-6" />
      <h1 className="text-3xl font-bold text-gray-800">404 - Page Not Found</h1>
      <p className="text-gray-500 mt-2">Oops! The page you’re looking for doesn’t exist.</p>
      <a
        href="/"
        className="mt-5 bg-yellow-500 text-white px-5 py-2 rounded-md hover:bg-yellow-600 transition"
      >
        Go Back Home
      </a>
    </div>
  );
}
