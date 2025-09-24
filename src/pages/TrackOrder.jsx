import React from "react";
import Error from "../assets/Error.jpg";

const TrackOrder = () => {
  return (
    <div className="flex items-center justify-center min-h-[80vh] bg-gray-50 mt-10">
      <div className="text-center">
        {/* Error Image */}
        <img
          src={Error}
          alt="Error"
          className="max-w-sm mx-auto rounded-md shadow-md"
        />

        {/* Message */}
        <h2 className="mt-6 text-xl font-semibold text-gray-800">
          Oops! Page not found
        </h2>
        <p className="text-gray-500 mt-2">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        {/* Back Button */}
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md shadow-md transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default TrackOrder;
