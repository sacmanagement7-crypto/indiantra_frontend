import React, { useState } from "react";
import { Link } from "react-router-dom";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Home, 
  ArrowLeft, 
  ShoppingBag, 
  HelpCircle,
  Package,
  RefreshCw,
  Search,
  Clock,
  CheckCircle
} from "lucide-react";
import Error from "../assets/Error.jpg";

const Support = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order in your account under 'My Orders'. Click on the order number to see real-time tracking information and delivery status."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 14 days of delivery. Items must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive the returned item."
    },
    {
      question: "How can I contact customer support?",
      answer: "You can reach us via email at support@example.com, call us at +91 98765 43210, or use our live chat feature available 24/7 at the bottom right of your screen."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like Paytm, PhonePe, and Google Pay."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery takes 3-5 business days. Express delivery is available for 1-2 day delivery in select locations."
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email",
      contact: "info@indiantra.com",
      link: "mailto:info@indiantra.com",
      availability: "Response within 24 hours"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Talk to our team",
      contact: "+91 9235558887",
      link: "tel:+919235558887",
      availability: "Mon-Sat, 9 AM - 8 PM"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with us now",
      contact: "Available 24/7",
      link: "#chat",
      availability: "Instant response"
    }
  ];

  const quickLinks = [
    { icon: ShoppingBag, label: "Shop", path: "/shop" },
    { icon: Package, label: "Track Order", path: "/orders" },
    { icon: HelpCircle, label: "FAQ", path: "/faq" },
    { icon: Mail, label: "Contact", path: "/contact" }
  ];

  return (
    <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 min-h-screen">

      {/* Customer Support Section */}
      <div className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Support Header */}
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-700 text-xs font-bold px-5 py-2 rounded-full border border-yellow-200 shadow-sm mb-4">
              <HelpCircle className="w-4 h-4" />
              24/7 Support
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-3">
              How Can We Help You?
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Our support team is here 24/7 to assist you. Choose your preferred way to reach out.
            </p>
          </div>

          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.link}
                className="group bg-white rounded-2xl p-6 border-2 border-amber-100 hover:border-yellow-400 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <method.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                <p className="text-orange-600 font-bold text-base mb-2">{method.contact}</p>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Clock className="w-4 h-4" />
                  {method.availability}
                </div>
              </a>
            ))}
          </div>

          {/* FAQ Section */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-100">
            <div className="flex items-center gap-3 mb-6">
              <HelpCircle className="w-8 h-8 text-orange-600" />
              <h3 className="text-2xl font-black text-gray-900">Frequently Asked Questions</h3>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-2 border-gray-200 rounded-xl overflow-hidden hover:border-yellow-300 transition-colors"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between p-4 bg-gradient-to-r from-gray-50 to-white hover:from-yellow-50 hover:to-amber-50 transition-colors"
                  >
                    <span className="text-left font-bold text-gray-900 text-base pr-4">
                      {faq.question}
                    </span>
                    <div
                      className={`w-8 h-8 flex items-center justify-center bg-yellow-400 rounded-lg transition-transform duration-300 flex-shrink-0 ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        className="w-5 h-5 text-gray-900"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </button>
                  {openFaq === index && (
                    <div className="p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-t-2 border-yellow-200">
                      <p className="text-gray-700 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Additional Help Section */}
          <div className="mt-8 bg-gradient-to-r from-orange-100 to-amber-100 rounded-2xl p-8 border-2 border-orange-200 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Still need help?</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is ready to help you with any questions or concerns.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </Link>
              <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white hover:bg-yellow-50 text-gray-900 font-bold rounded-xl shadow-md hover:shadow-lg border-2 border-gray-200 hover:border-yellow-400 transition-all">
                <Search className="w-5 h-5" />
                Search Help Center
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;