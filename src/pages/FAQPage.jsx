import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "How do I purchase a product?",
    answer:
      "To purchase a product, simply browse through the categories, add the product to your cart, and proceed to checkout.",
  },
  {
    question: "I haven’t received my receipt or login details?",
    answer:
      "If you haven’t received your receipt, please check your spam folder. You can also log into your account to download your invoices.",
  },
  {
    question: "Which payment types do you accept?",
    answer:
      "We accept UPI, Credit/Debit Cards, Net Banking, Wallets, and Cash on Delivery (COD).",
  },
  {
    question: "Can I store more than one payment method?",
    answer:
      "Yes, you can securely store multiple payment methods in your account settings.",
  },
  {
    question: "How do I disable auto-renewals?",
    answer:
      "You can disable auto-renewals anytime from your account under subscription settings.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Page Heading */}
      <h2 className="text-3xl font-bold mb-8 text-gray-900 border-b pb-3">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-sm hover:shadow-md transition-all bg-white"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-base font-semibold text-gray-800 hover:text-orange-600">
                {faq.question}
              </span>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            {/* Smooth expand animation */}
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-600 leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
