import React, { useEffect, useState } from "react";
import axios from "axios";
import BuyerSettingsSidebar from "./sidebar-settings";

export default function BuyerPointOfContact() {
  const API = import.meta.env.VITE_API_BASE_URL;
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    primary_contact_email: "",
    billing_contact_email: "",
  });

  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const fetchContacts = async () => {
    try {
      const res = await axios.get(`${API}/buyer/points-contact`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setFormData({
        primary_contact_email: res.data.primary_contact_email || "",
        billing_contact_email: res.data.billing_contact_email || "",
      });
    } catch (error) {
      console.error("Fetch contacts error:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleCancel = () => {
    fetchContacts();
  };

  const handleSave = async () => {
    if (!formData.primary_contact_email || !formData.billing_contact_email) {
      alert("Please enter both contact emails");
      return;
    }

    if (!isValidEmail(formData.primary_contact_email)) {
      alert("Please enter a valid primary contact email");
      return;
    }

    if (!isValidEmail(formData.billing_contact_email)) {
      alert("Please enter a valid billing contact email");
      return;
    }

    try {
      setLoading(true);

      await axios.post(`${API}/buyer/points-contact`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Points of contact saved successfully");
    } catch (error) {
      console.error("Save contacts error:", error);
      alert("Failed to save points of contact");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />

      <main className="flex-1 p-10">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-[#2A2A2A] mb-6">
            Points of Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <p className="text-[#2A2A2A] text-sm leading-relaxed opacity-80">
              Points of Contact are people that have access to your account's
              configurations. Different contacts will be able to manage and can
              receive updates related to usage, billing and renewals.
              <br />
              <br />
              For enabling or disabling app-specific permissions, you can manage
              users and roles on the{" "}
              <span className="text-[#43624A] font-bold cursor-pointer underline">
                Users & Teams
              </span>{" "}
              page.
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">
                  Primary contact email
                </label>

                <input
                  type="email"
                  name="primary_contact_email"
                  value={formData.primary_contact_email}
                  onChange={handleChange}
                  placeholder="Enter primary contact email"
                  className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">
                  Billing contact email
                </label>

                <input
                  type="email"
                  name="billing_contact_email"
                  value={formData.billing_contact_email}
                  onChange={handleChange}
                  placeholder="Enter billing contact email"
                  className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none"
                />
              </div>

              <div className="flex gap-4 pt-4">
                <button
                  type="button"
                  onClick={handleCancel}
                  disabled={loading}
                  className="px-6 py-2 border border-gray-300 rounded-md text-[#2A2A2A] hover:bg-gray-50 transition disabled:opacity-60"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={loading}
                  className="px-6 py-2 bg-[#43624A] text-white rounded-md hover:bg-[#3D523E] transition shadow-md disabled:opacity-60"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}