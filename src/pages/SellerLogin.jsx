import { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function SellerLogin() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    shopName: "",
    gst: "",
    address: "",
    bankName: "",
    accountNumber: "",
    ifsc: "",
  });

  const steps = ["Account", "Business", "Bank"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Seller Data:", formData);
    alert("Seller Registration Completed ✅");
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-2xl rounded-2xl p-10 mt-12 relative overflow-hidden">
      {/* Progress Bar */}
      <div className="flex items-center mb-10 relative">
        {steps.map((label, index) => (
          <div key={index} className="flex-1 flex items-center">
            <div
              className={`relative flex items-center justify-center w-10 h-10 rounded-full border-2 text-sm font-semibold z-10 transition-all duration-300
                ${
                  step > index + 1
                    ? "bg-orange-500 border-orange-500 text-white"
                    : step === index + 1
                    ? "border-orange-500 text-orange-600"
                    : "border-gray-300 text-gray-400"
                }`}
            >
              {step > index + 1 ? <CheckCircleIcon className="w-6 h-6" /> : index + 1}
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-1 transition-all duration-300 ${
                  step > index + 1 ? "bg-orange-500" : "bg-gray-300"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Title */}
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {step === 1 && "👤 Account Information"}
        {step === 2 && "🏬 Business Details"}
        {step === 3 && "🏦 Bank Information"}
      </h2>
      <p className="text-gray-500 mb-6">
        {step === 1 && "Let’s start by creating your account."}
        {step === 2 && "Tell us more about your business."}
        {step === 3 && "Finally, add your bank details for payments."}
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step 1: Account */}
        {step === 1 && (
          <div className="space-y-4 animate-fadeIn">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>
        )}

        {/* Step 2: Business */}
        {step === 2 && (
          <div className="space-y-4 animate-fadeIn">
            <input
              type="text"
              name="shopName"
              placeholder="Shop Name"
              value={formData.shopName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="text"
              name="gst"
              placeholder="GST Number (optional)"
              value={formData.gst}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
            <textarea
              name="address"
              placeholder="Business Address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
            />
          </div>
        )}

        {/* Step 3: Bank */}
        {step === 3 && (
          <div className="space-y-4 animate-fadeIn">
            <input
              type="text"
              name="bankName"
              placeholder="Bank Name"
              value={formData.bankName}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="text"
              name="accountNumber"
              placeholder="Account Number"
              value={formData.accountNumber}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
            <input
              type="text"
              name="ifsc"
              placeholder="IFSC Code"
              value={formData.ifsc}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-orange-500 outline-none"
              required
            />
          </div>
        )}

        {/* Buttons */}
        <div className="flex justify-between pt-6">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
            >
              Back
            </button>
          )}
          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="ml-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow hover:bg-orange-600 transition"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="ml-auto px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow hover:bg-green-700 transition"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
