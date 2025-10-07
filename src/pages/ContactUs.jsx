import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import api from "../api/axios"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try{
       const res = api.post('/contact',{formData});
       alert('Contact Form Successfully submitted');
       console.log(res)
    }catch(error){
      alert('Unable to  sent message!');
    }
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-400 via-amber-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">
            Get In Touch With Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Email Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all hover:border-yellow-300">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 mb-3">
                Send us an email anytime!
              </p>
              <a
                href="mailto:support@dealzone.com"
                className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
              >
                support@dealzone.com
              </a>
            </div>

            {/* Phone Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all hover:border-yellow-300">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <Phone className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 mb-3">
                Mon-Fri from 8am to 5pm
              </p>
              <a
                href="tel:+911234567890"
                className="text-orange-600 font-semibold text-sm hover:text-orange-700 transition-colors"
              >
                +91 123 456 7890
              </a>
            </div>

            {/* Location Card */}
            <div className="bg-white rounded-2xl p-6 border-2 border-amber-100 shadow-lg hover:shadow-xl transition-all hover:border-yellow-300">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600 mb-3">
                Come say hello at our office
              </p>
              <p className="text-orange-600 font-semibold text-sm">
                Lucknow, Uttar Pradesh, India
              </p>
            </div>

            {/* Working Hours Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-6 h-6 text-orange-600" />
                <h3 className="text-lg font-bold text-gray-900">Working Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border-2 border-amber-100 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <MessageCircle className="w-8 h-8 text-orange-600" />
                <h2 className="text-2xl font-black text-gray-900">Send us a Message</h2>
              </div>
              
              <div className="space-y-6">
                {/* Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Phone & Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    placeholder="Tell us what you're thinking about..."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-yellow-400 focus:outline-none transition-colors resize-none text-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 text-base"
                >
                  Send Message
                  <Send className="w-5 h-5" />
                </button>
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t-2 border-gray-100">
                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our{' '}
                  <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                    Privacy Policy
                  </a>{' '}
                  and{' '}
                  <a href="#" className="text-orange-600 font-semibold hover:text-orange-700">
                    Terms of Service
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 border-2 border-amber-100 shadow-lg">
          <h2 className="text-2xl font-black text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">How fast do you respond?</h3>
              <p className="text-sm text-gray-600">
                We typically respond within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">Do you offer phone support?</h3>
              <p className="text-sm text-gray-600">
                Yes! Our phone support is available Monday to Friday, 8am to 5pm IST. Call us at +91 123 456 7890.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">Can I visit your office?</h3>
              <p className="text-sm text-gray-600">
                Absolutely! We welcome visitors. Please schedule an appointment beforehand to ensure availability.
              </p>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-5 border border-yellow-200">
              <h3 className="font-bold text-gray-900 mb-2">What about weekends?</h3>
              <p className="text-sm text-gray-600">
                We're open on Saturdays 9am-6pm. Messages sent on Sunday will be answered on Monday morning.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;