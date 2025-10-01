import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import api from "../../api/axios";

const Address = () => {
  const [addresses, setAddresses] = useState([]);
  const [formVisible, setFormVisible] = useState(false);
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
        console.error("❌ Failed to load addresses:", error);
      }
    };
    fetchAddresses();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ✅ Add or update
  const handleSave = async () => {
    if (
      !form.name || !form.phone || !form.street ||
      !form.city || !form.state || !form.zip || !form.country
    ) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      let res;
      if (editing) {
        // ✏️ Update existing address
        res = await api.put(`/user/address/${form.id}`, form);
      } else {
        // ➕ Add new address
        res = await api.post("/user/address", form);
      }

      setAddresses(res.data.addresses);
      alert(editing ? "✅ Address updated" : "✅ Address added");

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
    } catch (error) {
      console.error("❌ Failed to save address:", error);
    }
  };

  // ✏️ Edit
  const handleEdit = (addr) => {
    setForm(addr);
    setEditing(true);
    setFormVisible(true);
  };

  // 🗑 Delete
  const handleDelete = async (id) => {
    try {
      const res = await api.delete(`/user/address/${id}`);
      setAddresses(res.data.addresses);
      alert("🗑 Address removed");
    } catch (error) {
      console.error("❌ Failed to delete address:", error);
    }
  };

  // ⭐ Set Default
  const handleSetDefault = async (id) => {
    try {
      const res = await api.patch(`/user/address/${id}`);
      setAddresses(res.data.addresses);
      alert("⭐ Default address set");
    } catch (error) {
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
        <div className="mt-10 p-8 bg-[#ffffff] shadow-md">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            {editing ? "Edit Address" : "Add New Address"}
          </h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none col-span-2 sm:col-span-1"
            />

            <label className="text-sm text-gray-600">Phone Number</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none col-span-2 sm:col-span-1"
            />

            <label className="text-sm text-gray-600 col-span-2">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={form.street}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none col-span-2"
            />

            <label className="text-sm text-gray-600">City</label>
            <input
              type="text"
              name="city"
              value={form.city}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            <label className="text-sm text-gray-600">State</label>
            <input
              type="text"
              name="state"
              value={form.state}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            <label className="text-sm text-gray-600">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={form.zip}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />

            <label className="text-sm text-gray-600">Country</label>
            <input
              type="text"
              name="country"
              value={form.country}
              onChange={handleChange}
              className="p-3 border rounded-md focus:ring-2 focus:ring-orange-400 focus:outline-none"
            />
          </div>

          <div className="mt-6 flex gap-4">
            <button
              onClick={handleSave}
              className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600 transition"
            >
              {editing ? "Save Changes" : "Add Address"}
            </button>
            <button
              onClick={() => {
                setFormVisible(false);
                setEditing(false);
              }}
              className="px-6 py-3 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition"
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
