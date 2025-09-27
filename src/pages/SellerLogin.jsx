import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User, Mail, Phone, Lock, Eye, EyeOff, Store, Building2,
  FileText, Hash, MapPin, Landmark, CreditCard, Image, Camera,
  Shield, File, Award, CheckCircle
} from "lucide-react";

export default function VendorRegister() {
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", phone: "", password: "",
    shopName: "", businessType: "Individual", gst: "", pan: "",
    address: "", pincode: "", state: "", city: "",
    bankName: "", accountHolderName: "", accountNumber: "", ifsc: "", branch: "",
    shopLogo: null, shopBanner: null, shopPhoto: null, idProof: null, addressProof: null,
    panCard: null, gstCertificate: null, cancelledCheque: null, bankPassbook: null,
    sampleProductImage1: null, sampleProductImage2: null,
  });

  const steps = [
    { id: 1, name: "Account", desc: "Create your vendor account" },
    { id: 2, name: "Business", desc: "Tell us about your shop" },
    { id: 3, name: "Banking", desc: "Add bank details for payments" },
    { id: 4, name: "Documents", desc: "Upload verification documents" }
  ];

  const states = ["Rajasthan", "Gujarat", "Maharashtra", "UP", "MP", "Delhi"];

  const handleChange = e => {
    const { name, value, files } = e.target;
    setData(p => ({ ...p, [name]: files ? files[0] : value }));
  };

  const Field = ({ icon: Icon, label, ...props }) => (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <div className="relative">
        <Icon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
        <input {...props}
          className="w-full pl-10 pr-4 py-2 border rounded-xl shadow-sm focus:ring-2 focus:ring-orange-400 outline-none transition bg-white/70 backdrop-blur"
        />
      </div>
    </div>
  );

  const FileBox = ({ name, label, icon: Icon }) => (
    <label className="flex flex-col items-center justify-center border-2 border-dashed rounded-xl p-6 cursor-pointer hover:border-orange-400 hover:bg-orange-50 transition shadow-sm">
      <input type="file" name={name} onChange={handleChange} className="hidden" />
      {data[name] ? (
        <img
          src={URL.createObjectURL(data[name])}
          alt={label}
          className="w-20 h-20 object-cover rounded-md mb-2 shadow"
        />
      ) : (
        <Icon className="w-10 h-10 mb-2 text-gray-400" />
      )}
      <span className="text-xs text-gray-600 text-center">{data[name]?.name || label}</span>
    </label>
  );

  const handleSubmit = () => {
    console.log("Vendor Data:", data);
    alert("✅ Registration Submitted!");
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-orange-100 via-yellow-50 to-orange-50 flex items-center justify-center p-6">
      {/* Header with Icon */}
      <div className="flex items-center justify-center mb-10">
        <div className="relative flex items-center space-x-4 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-400 px-8 py-4 rounded-3xl shadow-lg">
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-orange-300 to-yellow-200 opacity-30 blur-lg"></div>

          {/* Icon circle */}
          <div className="relative flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-md">
            <Store className="w-7 h-7 text-orange-600" />
          </div>

          {/* Title + subtitle */}
          <div className="relative">
            <h1 className="text-3xl font-extrabold text-white drop-shadow-sm">
              Vendor Registration
            </h1>
            <p className="text-sm text-orange-100">
              Start your journey as a trusted seller 🚀
            </p>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: "spring" }}
        className="max-w-5xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_10px_40px_rgba(255,165,0,0.15)] p-10 border border-orange-100 relative overflow-hidden"
      >
        {/* Decorative glow */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-yellow-400/20 rounded-full blur-3xl"></div>

        {/* Stepper */}
        <div className="relative mb-14">
          <div className="absolute top-5 left-0 w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(step - 1) / (steps.length - 1) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          <div className="flex justify-between relative z-10">
            {steps.map(s => (
              <div key={s.id} className="flex flex-col items-center flex-1 group">
                <motion.div
                  animate={{ scale: step === s.id ? 1.2 : 1 }}
                  className={`w-12 h-12 flex items-center justify-center rounded-full text-sm font-bold shadow-md transition 
            ${step >= s.id ? "bg-gradient-to-r from-orange-500 to-yellow-500 text-white" : "bg-gray-200 text-gray-500"}`}
                >
                  {s.id}
                </motion.div>
                <p
                  className={`mt-2 text-sm transition group-hover:scale-105 ${step === s.id ? "text-orange-600 font-semibold" : "text-gray-500"
                    }`}
                >
                  {s.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Step Title */}
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 tracking-tight">
            {steps[step - 1].name}
          </h2>
          <p className="text-gray-500 text-sm mt-1">{steps[step - 1].desc}</p>
        </div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Step 1: Account */}
            {step === 1 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Field icon={User} label="Full Name" name="name" value={data.name} onChange={handleChange} />
                <Field icon={Mail} label="Email" name="email" type="email" value={data.email} onChange={handleChange} />
                <Field icon={Phone} label="Phone" name="phone" value={data.phone} onChange={handleChange} />

                {/* Password field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type={showPass ? "text" : "password"}
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      className="w-full pl-10 pr-10 py-2 border rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none"
                    />
                    <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-3 text-gray-500">
                      {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business */}
            {step === 2 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Field icon={Store} label="Shop Name" name="shopName" value={data.shopName} onChange={handleChange} />
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700">Business Type</label>
                  <select
                    name="businessType"
                    value={data.businessType}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-orange-400 outline-none"
                  >
                    {["Individual", "Company", "Partnership"].map(v => (
                      <option key={v}>{v}</option>
                    ))}
                  </select>
                </div>
                <Field icon={FileText} label="PAN" name="pan" value={data.pan} onChange={handleChange} />
                <Field icon={Hash} label="GST (Optional)" name="gst" value={data.gst} onChange={handleChange} />
                <div className="md:col-span-2 space-y-1">
                  <label className="text-sm font-medium text-gray-700">Address</label>
                  <textarea
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className="w-full p-3 border rounded-xl shadow-sm bg-white/70 focus:ring-2 focus:ring-orange-400 outline-none"
                  />
                </div>
                <Field icon={Hash} label="Pincode" name="pincode" value={data.pincode} onChange={handleChange} />
                <div>
                  <label className="text-sm font-medium text-gray-700">State</label>
                  <select
                    name="state"
                    value={data.state}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-xl shadow-sm bg-white focus:ring-2 focus:ring-orange-400 outline-none"
                  >
                    <option value="">Select State</option>
                    {states.map(st => (
                      <option key={st}>{st}</option>
                    ))}
                  </select>
                </div>
                <Field icon={Building2} label="City" name="city" value={data.city} onChange={handleChange} />
              </div>
            )}

            {/* Step 3: Banking */}
            {step === 3 && (
              <div className="grid md:grid-cols-2 gap-6">
                <Field icon={Landmark} label="Bank Name" name="bankName" value={data.bankName} onChange={handleChange} />
                <Field icon={User} label="Account Holder" name="accountHolderName" value={data.accountHolderName} onChange={handleChange} />
                <Field icon={CreditCard} label="Account Number" name="accountNumber" value={data.accountNumber} onChange={handleChange} />
                <Field icon={Building2} label="IFSC" name="ifsc" value={data.ifsc} onChange={handleChange} />
                <Field icon={MapPin} label="Branch" name="branch" value={data.branch} onChange={handleChange} />
              </div>
            )}

            {/* Step 4: Documents */}
            {step === 4 && (
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  { name: "shopLogo", label: "Shop Logo", icon: Image },
                  { name: "shopBanner", label: "Shop Banner", icon: Image },
                  { name: "shopPhoto", label: "Shop Photo", icon: Camera },
                  { name: "idProof", label: "ID Proof", icon: Shield },
                  { name: "addressProof", label: "Address Proof", icon: Shield },
                  { name: "panCard", label: "PAN Card", icon: FileText },
                  { name: "gstCertificate", label: "GST Certificate", icon: File },
                  { name: "cancelledCheque", label: "Cancelled Cheque", icon: FileText },
                  { name: "bankPassbook", label: "Passbook", icon: FileText },
                  { name: "sampleProductImage1", label: "Sample Product 1", icon: Award },
                  { name: "sampleProductImage2", label: "Sample Product 2", icon: Award },
                ].map((f, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.05 }}>
                    <FileBox name={f.name} label={f.label} icon={f.icon} />
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          {step > 1 && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setStep(s => s - 1)}
              className="px-6 py-2 rounded-xl border shadow-sm bg-white hover:bg-gray-100 transition"
            >
              ← Back
            </motion.button>
          )}
          {step < 4 ? (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setStep(s => s + 1)}
              className="ml-auto px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-medium rounded-xl shadow-lg hover:opacity-90 transition"
            >
              Next →
            </motion.button>
          ) : (
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={handleSubmit}
              className="ml-auto flex items-center px-8 py-3 bg-gradient-to-r from-orange-500 to-yellow-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition"
            >
              <CheckCircle className="mr-2" size={18} /> Submit
            </motion.button>
          )}
        </div>
      </motion.div>

    </div>
  );
}
