import React from "react";
import { Link } from "react-router-dom";
import Error from "../assets/Error.jpg";

const Support = () => {
  return (
    <div className="bg-gray-50 min-h-[100vh] px-4 sm:px-6 lg:px-8 py-12">
      {/* 404 Section */}
      <div className="flex items-center justify-center mb-12">
        <div className="text-center max-w-md">
          <img
            src={Error}
            alt="Error"
            className="max-w-sm mx-auto rounded-md shadow-md"
          />
          <h2 className="mt-6 text-2xl sm:text-3xl font-bold text-gray-800">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-500 mt-2">
            The page you are looking for doesn’t exist, has been moved, or is
            temporarily unavailable.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => window.history.back()}
              className="px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white font-medium rounded-md shadow-md transition"
            >
              Go Back
            </button>
            <Link
              to="/"
              className="px-5 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-md shadow-md transition"
            >
              Go Home
            </Link>
          </div>
          <div className="mt-8 text-gray-500 text-sm space-y-1">
            <p>Or try one of these pages:</p>
            <ul className="space-y-1">
              <li>
                <Link to="/shop" className="hover:text-yellow-500 underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 underline">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-yellow-500 underline">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dummy Support Section */}
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800">Customer Support</h2>
        <p className="text-gray-600">
          If you need any help, we are here 24/7. Reach out to us using any of
          the channels below and our support team will assist you as soon as
          possible.
        </p>

        {/* Contact Info */}
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-700">Email</h3>
            <p className="text-gray-500">support@example.com</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Phone</h3>
            <p className="text-gray-500">+91 98765 43210</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-700">Live Chat</h3>
            <p className="text-gray-500">Click on the chat icon at bottom right to start a conversation</p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong>Q:</strong> How can I track my order? <br />
              <strong>A:</strong> You can track your order in your account under "My Orders".
            </li>
            <li>
              <strong>Q:</strong> What is your return policy? <br />
              <strong>A:</strong> We accept returns within 14 days of delivery.
            </li>
            <li>
              <strong>Q:</strong> How can I contact customer support? <br />
              <strong>A:</strong> Email us at support@example.com or use the live chat.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Support;
