import React, { useEffect, useState } from "react";
import axios from "axios";
import BuyerSettingsSidebar from "./sidebar-settings";

export default function BuyerPointOfContact() {
  const [users, setUsers] = useState([]);

  const [formData, setFormData] = useState({
    primary_contact_user_id: "",
    billing_contact_user_id: "",
  });

  const token = localStorage.getItem("token");

  // API BASE URL
  const API = import.meta.env.VITE_API_BASE_URL;

  // Fetch users for dropdown
  const fetchUsers = async () => {
    try {
      const res = await axios.get(
        `${API}/buyer/points-contact/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data || []);
    } catch (error) {
      console.error("Fetch users error:", error);
    }
  };

  // Fetch saved contact data
  const fetchSavedContacts = async () => {
    try {
      const res = await axios.get(
        `${API}/buyer/points-contact`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFormData({
        primary_contact_user_id:
          res.data.primary_contact_user_id || "",

        billing_contact_user_id:
          res.data.billing_contact_user_id || "",
      });
    } catch (error) {
      console.error("Fetch saved contacts error:", error);
    }
  };

  // Save contacts
  const handleSave = async () => {
    try {
      await axios.post(
        `${API}/buyer/points-contact`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Points of contact saved successfully");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save");
    }
  };

  // Handle select change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    fetchUsers();
    fetchSavedContacts();
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      {/* Sidebar */}
      <BuyerSettingsSidebar />

      {/* Main Content */}
      <main className="flex-1 p-10">
        <div className="max-w-3xl bg-white p-8 rounded-lg shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-[#2A2A2A] mb-6">
            Points of Contact
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Text */}
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

            {/* Form */}
            <div className="space-y-6">
              {/* Primary Contact */}
              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">
                  Primary contact
                </label>

                <select
                  name="primary_contact_user_id"
                  value={formData.primary_contact_user_id}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none"
                >
                  <option value="">Please Select</option>

                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.firstName} {user.lastName} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Billing Contact */}
              <div>
                <label className="block text-sm font-semibold text-[#2A2A2A] mb-2">
                  Billing contact
                </label>

                <select
                  name="billing_contact_user_id"
                  value={formData.billing_contact_user_id}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-200 rounded-md text-[#2A2A2A] bg-white focus:ring-2 focus:ring-[#7A9C83] outline-none"
                >
                  <option value="">Please Select</option>

                  {users.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.firstName} {user.lastName} ({user.email})
                    </option>
                  ))}
                </select>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() =>
                    setFormData({
                      primary_contact_user_id: "",
                      billing_contact_user_id: "",
                    })
                  }
                  className="px-6 py-2 border border-gray-300 rounded-md text-[#2A2A2A] hover:bg-gray-50 transition"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="px-6 py-2 bg-[#43624A] text-white rounded-md hover:bg-[#3D523E] transition shadow-md"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}