import React, { useState } from 'react';
import { Shield, User, CreditCard, Truck, RefreshCw, Copyright, AlertCircle, Mail, FileText, ChevronDown, ChevronUp, Clock } from 'lucide-react';

export default function TermsPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  const sections = [
    {
      id: 1,
      icon: FileText,
      title: "Introduction",
      text: "Welcome to DealZone! By accessing or using our platform, you agree to be bound by these Terms & Conditions. These terms govern your use of our website, mobile applications, and all related services. Please read them carefully before proceeding.",
      details: "Your continued use of our services constitutes acceptance of these terms. If you do not agree with any part of these terms, you should discontinue use immediately."
    },
    {
      id: 2,
      icon: User,
      title: "User Accounts",
      text: "You may need to create an account to access certain features of our platform. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.",
      details: "You must provide accurate, current, and complete information during registration. You agree to update your information to keep it accurate and current. Never share your password with others."
    },
    {
      id: 3,
      icon: CreditCard,
      title: "Orders & Payments",
      text: "All orders placed through our platform are subject to acceptance and availability. We reserve the right to refuse or cancel any order. Please ensure that your billing information is accurate and up to date.",
      details: "Payment must be received before order processing. We accept major credit cards, debit cards, and digital payment methods. All prices are in Indian Rupees (INR) unless otherwise stated."
    },
    {
      id: 4,
      icon: Truck,
      title: "Shipping & Delivery",
      text: "Delivery times provided are estimates only and may vary based on location, carrier availability, and other factors. We are not responsible for delays caused by shipping carriers or circumstances beyond our control.",
      details: "Standard shipping takes 5-7 business days. Express shipping available in select areas. You will receive tracking information once your order ships. Risk of loss passes to you upon delivery."
    },
    {
      id: 5,
      icon: RefreshCw,
      title: "Returns & Refunds",
      text: "Return requests must be initiated within 7 days of delivery for most products. Items must be in original condition with tags attached. Refunds will be processed according to our refund policy.",
      details: "Certain items like perishables, personalized products, and intimate items are not eligible for returns. Refunds typically process within 7-10 business days after we receive the returned item."
    },
    {
      id: 6,
      icon: Copyright,
      title: "Intellectual Property",
      text: "All content on our platform, including text, graphics, logos, images, and software, is protected by copyright and other intellectual property laws. Unauthorized use, reproduction, or distribution is strictly prohibited.",
      details: "You may not copy, modify, distribute, sell, or lease any part of our services without explicit written permission. All trademarks are property of their respective owners."
    },
    {
      id: 7,
      icon: AlertCircle,
      title: "Limitation of Liability",
      text: "We are not liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the specific service or product.",
      details: "We provide our services 'as is' without warranties of any kind. We do not guarantee uninterrupted or error-free service. Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you."
    },
    {
      id: 8,
      icon: Clock,
      title: "Changes to Terms",
      text: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
      details: "We will notify users of significant changes via email or prominent notice on our platform. We recommend reviewing these terms periodically to stay informed of any updates."
    },
    {
      id: 9,
      icon: Mail,
      title: "Contact Us",
      text: "If you have any questions, concerns, or feedback about these Terms & Conditions, please don't hesitate to reach out to us. We're here to help!",
      link: "support@dealzone.com",
      details: "Our support team is available Monday-Friday, 8am-8pm IST. You can also call us at +91 123 456 7890 or visit our office in Lucknow, Uttar Pradesh."
    }
  ];

  const toggleSection = (id) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block p-4 bg-white/20 rounded-2xl mb-6">
            <Shield className="w-16 h-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Please read these terms carefully before using our platform. Your use of DealZone signifies your acceptance of these terms.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-xl text-white/90 text-sm">
            <Clock className="w-4 h-4" />
            <span>Last updated: October 6, 2025</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Quick Overview */}
        <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl p-8 border-2 border-yellow-200 shadow-lg mb-12">
          <h2 className="text-2xl font-black text-gray-900 mb-4">Quick Overview</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            These Terms & Conditions outline the rules and regulations for using DealZone's services. By accessing this website, we assume you accept these terms in full. Do not continue to use DealZone if you do not agree to all of the terms stated on this page.
          </p>
          <div className="flex items-start gap-3 bg-white/80 rounded-xl p-4 border border-yellow-300">
            <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-gray-600">
              <strong className="text-gray-900">Important:</strong> These terms are legally binding. If you have questions or concerns, please contact our legal team before using our services.
            </p>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-4">
          {sections.map((section) => {
            const Icon = section.icon;
            const isExpanded = expandedSection === section.id;
            
            return (
              <div
                key={section.id}
                className="bg-white rounded-2xl border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl font-bold text-gray-900">
                          {section.id}. {section.title}
                        </h3>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="text-orange-600 hover:text-orange-700 transition-colors flex-shrink-0"
                        >
                          {isExpanded ? (
                            <ChevronUp className="w-6 h-6" />
                          ) : (
                            <ChevronDown className="w-6 h-6" />
                          )}
                        </button>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-3">
                        {section.text}
                        {section.link && (
                          <a
                            href={`mailto:${section.link}`}
                            className="text-orange-600 font-semibold hover:text-orange-700 underline ml-1"
                          >
                            {section.link}
                          </a>
                        )}
                      </p>

                      {isExpanded && section.details && (
                        <div className="mt-4 pt-4 border-t border-gray-100">
                          <p className="text-sm text-gray-600 leading-relaxed bg-gradient-to-br from-yellow-50 to-amber-50 p-4 rounded-xl border border-yellow-200">
                            {section.details}
                          </p>
                        </div>
                      )}

                      {section.details && (
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="text-sm text-orange-600 font-semibold hover:text-orange-700 transition-colors mt-2"
                        >
                          {isExpanded ? 'Show less' : 'Read more...'}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Notice */}
        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-amber-100 shadow-lg text-center">
          <div className="inline-block p-3 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl mb-4">
            <FileText className="w-8 h-8 text-orange-600" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Need Help Understanding These Terms?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team is here to help clarify any questions you may have about our Terms & Conditions. Don't hesitate to reach out.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:support@dealzone.com"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Support
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-900 font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-yellow-300 inline-flex items-center gap-2"
            >
              <Shield className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>

        {/* Legal Notice */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            By using DealZone, you acknowledge that you have read, understood, and agree to be bound by these Terms & Conditions.
          </p>
        </div>
      </div>
    </div>
  );
}