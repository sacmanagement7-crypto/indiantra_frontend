import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";


const statesList = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
  "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
  "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
  "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
];

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    id: null,
    name: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    isDefault: false,
  });
  const [editing, setEditing] = useState(false);

  // ✅ Load addresses from backend
  useEffect(() => {
    const fetchAddresses = async () => {
      try {
        const res = await api.get("/user/address");
        setAddresses(res.data.addresses);
        console.log(res.data.addresses)
      } catch (error) {
        toast.error("Failed to load addresses");
        console.error("❌ Failed to load addresses:", error);
      }
    };
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" })); // clear error on change
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!form.name) tempErrors.name = "Full Name is required";
    if (!form.phone) tempErrors.phone = "Phone Number is required";
    if (!form.street) tempErrors.street = "Street Address is required";
    if (!form.city) tempErrors.city = "City is required";
    if (!form.state) tempErrors.state = "State is required";
    if (!form.zip) tempErrors.zip = "ZIP Code is required";
    if (!form.country) tempErrors.country = "Country is required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // ✅ Add or update
  const handleSave = async () => {
    if (!validate()) return;

    try {
      let res;
      if (editing) {
        // ✏️ Update existing address
        res = await api.put(`/user/address/${form.id}`, form);
        toast.success("Address updated successfully");
      } else {
        // ➕ Add new address
        res = await api.post("/user/address", form);
        toast.success("Address added successfully");
      }

      setAddresses(res.data.addresses);

      setForm({
        id: null,
        name: "",
        phone: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        isDefault: false,
      });
      setEditing(false);
      setFormVisible(false);
      setErrors({});
    } catch (error) {
      console.error("❌ Failed to save address:", error);
      toast.error("Failed to save address");
    }
  };

  // ✏️ Edit
  const handleEdit = (addr) => {
    setForm({
      id: addr._id,
      name: addr.name,
      phone: addr.phone,
      street: addr.street,
      city: addr.city,
      state: addr.state,
      zip: addr.zip,
      country: addr.country,
      isDefault: addr.isDefault,
    });
    setEditing(true);
    setFormVisible(true);
  };

  // 🗑 Delete
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/user/address/${id}`);
      setAddresses(res.data.addresses);
      toast.info("Address removed");
    } catch (error) {
      toast.error("Failed to delete address");
      console.error("❌ Failed to delete address:", error);
    }
  };

  // ⭐ Set Default
  const handleSetDefault = async (id) => {
    try {
      const res = await api.patch(`/user/address/${id}`);
      setAddresses(res.data.addresses);
      toast.success("Default address set");
    } catch (error) {
      toast.error("Failed to set default address");
      console.error("❌ Failed to set default address:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-gray-800">
        Manage Your Addresses
      </h1>

      {/* Address Grid */}
      <div className="grid sm:grid-cols-2 gap-6">
        {/* Add Address Card */}
        <div
          onClick={() => {
            setFormVisible(true);
            setEditing(false);
          }}
          className="border-2 border-dashed border-gray-300 h-52 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 hover:border-orange-400 transition"
        >
          <Plus className="w-10 h-10 text-gray-400" />
          <span className="mt-3 text-gray-700 font-medium text-lg">
            Add Address
          </span>
        </div>

        {/* Saved Addresses */}
        {addresses.map((addr) => (
          <div
            key={addr._id}
            className="p-5 bg-white hover:shadow-lg hover:scale-[1.01] transition"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-lg text-gray-800">
                {addr.name}
              </h3>
              {addr.isDefault && (
                <span className="text-xs px-2 py-1 rounded bg-orange-100 text-orange-600 font-medium">
                  Default
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {addr.street}, {addr.city}, {addr.state} - {addr.zip},{" "}
              {addr.country}
            </p>
            <p className="text-sm text-gray-600 mt-2">📞 {addr.phone}</p>

            <div className="mt-3 text-sm text-blue-600">
              <button
                onClick={() => handleEdit(addr)}
                className="hover:underline mr-3"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(addr._id)}
                className="hover:underline mr-3"
              >
                Remove
              </button>
              {!addr.isDefault && (
                <button
                  onClick={() => handleSetDefault(addr._id)}
                  className="hover:underline"
                >
                  Set as default
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Address Form */}
      {formVisible && (
        <div className="mt-10 p-8 bg-white shadow-lg rounded-xl max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">
            {editing ? "Edit Address" : "Add New Address"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {/** Full Name **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={form.name}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.name ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name}</span>}
            </div>

            {/** Phone **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Phone Number</label>
              <input
                type="text"
                name="phone"
                placeholder="+91 9876543210"
                value={form.phone}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.phone ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.phone && <span className="text-red-500 text-sm mt-1">{errors.phone}</span>}
            </div>

            {/** Street **/}
            <div className="flex flex-col sm:col-span-2">
              <label className="text-sm font-medium text-gray-700 mb-2">Street Address</label>
              <input
                type="text"
                name="street"
                placeholder="123 Main Street"
                value={form.street}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.street ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.street && <span className="text-red-500 text-sm mt-1">{errors.street}</span>}
            </div>

            {/** City **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">City</label>
              <input
                type="text"
                name="city"
                placeholder="Mumbai"
                value={form.city}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.city ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.city && <span className="text-red-500 text-sm mt-1">{errors.city}</span>}
            </div>

            {/** State Dropdown **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">State</label>
              <select
                name="state"
                value={form.state}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.state ? "border-red-500" : "border-gray-300"}`}
              >
                <option value="">Select State</option>
                {statesList.map((st) => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
              {errors.state && <span className="text-red-500 text-sm mt-1">{errors.state}</span>}
            </div>

            {/** ZIP **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">ZIP Code</label>
              <input
                type="text"
                name="zip"
                placeholder="400001"
                value={form.zip}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.zip ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.zip && <span className="text-red-500 text-sm mt-1">{errors.zip}</span>}
            </div>

            {/** Country **/}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-2">Country</label>
              <input
                type="text"
                name="country"
                placeholder="India"
                value={form.country}
                onChange={handleChange}
                className={`p-3 border rounded-lg focus:ring-2 focus:ring-orange-300 outline-none transition ${errors.country ? "border-red-500" : "border-gray-300"}`}
              />
              {errors.country && <span className="text-red-500 text-sm mt-1">{errors.country}</span>}
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-orange-500 text-white font-semibold rounded-lg hover:from-orange-500 hover:to-orange-600 transition shadow-md"
            >
              {editing ? "Save Changes" : "Add Address"}
            </button>
            <button
              onClick={() => { setFormVisible(false); setEditing(false); setErrors({}); }}
              className="px-6 py-3 bg-gray-100 text-gray-800 font-semibold rounded-lg hover:bg-gray-200 transition"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Address;
