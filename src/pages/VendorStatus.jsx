import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CheckCircle, XCircle, Clock, AlertCircle } from "lucide-react";
import api from "../api/axios";

export default function VendorStatus() {
  const { id } = useParams(); // vendor ID from URL or localStorage
  const [vendor, setVendor] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(id)

  useEffect(() => {
    const fetchVendor = async () => {
      try {
        const res = await api.get(`/vendor/status/${id}`);
        setVendor(res.data.vendor);
      } catch (err) {
        console.error("Error fetching vendor:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchVendor();
  }, [id]);

  if (loading) return <div className="text-center mt-10 text-gray-600">Loading your application...</div>;
  if (!vendor) return <div className="text-center mt-10 text-red-600">Vendor not found!</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
      <div className="bg-white p-10 rounded-3xl shadow-2xl w-full max-w-2xl border border-gray-100">
        <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Vendor Application Status
        </h1>

        <div className="mb-8 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            {vendor.shopName || vendor.name}
          </h2>
          <p className="text-sm text-gray-500">
            Email: {vendor.email} • Phone: {vendor.phone}
          </p>
          <p className="text-sm text-gray-500">
            Business Type: {vendor.businessType}
          </p>
          <p className="text-sm text-gray-500">
            GST: {vendor.gst || "N/A"}
          </p>
        </div>

        {/* STATUS CARD */}
        <div className="text-center">
          <div
            className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-lg font-medium ${
              vendor.status === "approved"
                ? "bg-green-100 text-green-700"
                : vendor.status === "pending"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {vendor.status === "approved" && <CheckCircle size={22} />}
            {vendor.status === "pending" && <Clock size={22} />}
            {vendor.status === "rejected" && <XCircle size={22} />}
          </div>

          {vendor.status === "rejected" && vendor.reason && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-2xl">
              <div className="flex items-center gap-2 text-red-700 font-semibold mb-1">
                <AlertCircle size={18} />
                Rejection Reason
              </div>
              <p className="text-gray-700 text-sm">{vendor.reason}</p>
            </div>
          )}

          {vendor.status === "pending" && (
            <p className="mt-6 text-gray-600 text-sm">
              ⏳ Your application is under review. You will be notified once approved.
            </p>
          )}

          {vendor.status === "approved" && (
            <p className="mt-6 text-green-700 text-sm font-medium">
              🎉 Congratulations! Your vendor profile has been approved.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
