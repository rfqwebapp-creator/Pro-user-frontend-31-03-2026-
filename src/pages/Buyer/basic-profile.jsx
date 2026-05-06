import React, { useEffect, useState } from "react";
import BuyerSettingsSidebar from "./sidebar-settings";
import API from "../../api";

const BuyerProfileBasic = () => {
  const [activeTab, setActiveTab] = useState("Basic Info");
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    designation: "",
    phone_country_code: "+973",
    phone: "",
    companyName: "",
    email: "",
    profile_photo: "",
  });

  const [passwordForm, setPasswordForm] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    signOutAllSessions: false,
  });

  const colors = {
    dark: "#2A2A2A",
    primary: "#43624A",
    secondary: "#7A9C83",
    light: "#F5F2EA",
  };

  const tabs = ["Basic Info", "Security"];

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      const res = await API.get("/buyer/profile");

      if (res.data.success) {
        setForm({
          firstName: res.data.data.firstName || "",
          lastName: res.data.data.lastName || "",
          designation: res.data.data.designation || "",
          phone_country_code: res.data.data.phone_country_code || "+973",
          phone: res.data.data.phone || "",
          companyName: res.data.data.companyName || "",
          email: res.data.data.email || "",
          profile_photo: res.data.data.profile_photo || "",
        });
      }
    } catch (error) {
      console.error("❌ Fetch profile error:", error);
      alert(error.response?.data?.message || "Failed to fetch profile");
    } finally {
      setLoading(false);
    }
  };

  const handleBasicChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert("Please upload only image files");
      return;
    }

    const reader = new FileReader();

    reader.onloadend = () => {
      setForm((prev) => ({
        ...prev,
        profile_photo: reader.result,
      }));
    };

    reader.readAsDataURL(file);
  };

  const handlePasswordChange = (e) => {
    const { name, value, type, checked } = e.target;

    setPasswordForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSaveBasicInfo = async () => {
    try {
      if (!form.firstName.trim() || !form.lastName.trim()) {
        alert("First name and last name are required");
        return;
      }

      if (!form.email.trim()) {
        alert("Company email is required");
        return;
      }

      setSaving(true);

      const res = await API.put("/buyer/profile", {
        firstName: form.firstName,
        lastName: form.lastName,
        designation: form.designation,
        phone_country_code: form.phone_country_code,
        phone: form.phone,
        email: form.email,
        profile_photo: form.profile_photo,
      });

      if (res.data.success) {
        alert("Profile updated successfully");
        setActiveTab("Basic Info");
        fetchProfile();
      }
    } catch (error) {
      console.error("❌ Update profile error:", error);
      alert(error.response?.data?.message || "Failed to update profile");
    } finally {
      setSaving(false);
    }
  };

  const handleSavePassword = async () => {
    try {
      if (
        !passwordForm.currentPassword ||
        !passwordForm.newPassword ||
        !passwordForm.confirmPassword
      ) {
        alert("Please fill all password fields");
        return;
      }

      if (passwordForm.newPassword !== passwordForm.confirmPassword) {
        alert("New password and confirm password do not match");
        return;
      }

      if (passwordForm.newPassword.length < 8) {
        alert("New password must be at least 8 characters long");
        return;
      }

      setSaving(true);

      const res = await API.put("/buyer/profile/password", passwordForm);

      if (res.data.success) {
        alert("Password changed successfully");

        setPasswordForm({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
          signOutAllSessions: false,
        });

        setActiveTab("Security");
      }
    } catch (error) {
      console.error("❌ Update password error:", error);
      alert(error.response?.data?.message || "Failed to update password");
    } finally {
      setSaving(false);
    }
  };

  const handleCancel = () => {
    if (activeTab === "Basic Info") {
      fetchProfile();
    } else {
      setPasswordForm({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        signOutAllSessions: false,
      });
    }
  };

  const handleSave = () => {
    if (activeTab === "Basic Info") {
      handleSaveBasicInfo();
    } else {
      handleSavePassword();
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />

      <div
        className="flex-1 min-h-screen p-4 md:p-8 font-sans"
        style={{ backgroundColor: colors.light }}
      >
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-bold" style={{ color: colors.dark }}>
              Your Profile Settings
            </h1>
          </div>

          <div className="flex flex-wrap border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab
                    ? "text-white"
                    : "text-gray-600 hover:text-gray-700 border-b-transparent"
                }`}
                style={
                  activeTab === tab
                    ? {
                        backgroundColor: colors.primary,
                        color: "white",
                        borderBottomColor: colors.primary,
                      }
                    : { borderBottomColor: "transparent" }
                }
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10">
            {loading ? (
              <div className="text-center py-20 text-gray-500">
                Loading profile...
              </div>
            ) : (
              <>
                {activeTab === "Basic Info" && (
                  <BasicInfoView
                    colors={colors}
                    form={form}
                    handleChange={handleBasicChange}
                    handleImageUpload={handleImageUpload}
                  />
                )}

                {activeTab === "Security" && (
                  <SecurityView
                    colors={colors}
                    passwordForm={passwordForm}
                    handleChange={handlePasswordChange}
                  />
                )}

                <div className="mt-12 flex justify-end gap-4 border-t pt-8">
                  <button
                    type="button"
                    onClick={handleCancel}
                    disabled={saving}
                    className="px-8 py-2 border-2 rounded-lg text-sm font-semibold transition-all border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400 disabled:opacity-60"
                  >
                    Cancel
                  </button>

                  <button
                    type="button"
                    onClick={handleSave}
                    disabled={saving}
                    className="px-8 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-md hover:shadow-lg active:scale-95 disabled:opacity-60"
                    style={{ backgroundColor: colors.primary }}
                  >
                    {saving ? "Saving..." : "Save"}
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const BasicInfoView = ({ colors, form, handleChange, handleImageUpload }) => {
  return (
    <div className="animate-fadeIn">
      <div className="mb-12 pb-8 border-b border-gray-100">
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-5xl shadow-md flex-shrink-0 overflow-hidden"
            style={{ backgroundColor: colors.secondary }}
          >
            {form.profile_photo ? (
              <img
                src={form.profile_photo}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>👤</span>
            )}
          </div>

          <div className="text-center sm:text-left">
            <h3
              className="text-lg font-semibold mb-2"
              style={{ color: colors.dark }}
            >
              Profile Photo
            </h3>

            <p className="text-sm text-gray-500 mb-4">
              Upload your profile picture to personalize your account
            </p>

            <input
              type="file"
              id="profileUpload"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            <label
              htmlFor="profileUpload"
              className="inline-block px-5 py-2 rounded-lg text-sm font-semibold text-white cursor-pointer shadow-md hover:shadow-lg active:scale-95 transition-all"
              style={{ backgroundColor: colors.primary }}
            >
              Upload Image
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3
          className="text-lg font-semibold mb-6"
          style={{ color: colors.dark }}
        >
          Personal Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FormField
            label="First Name"
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            colors={colors}
          />

          <FormField
            label="Last Name"
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            colors={colors}
          />

          <FormField
            label="Designation"
            name="designation"
            value={form.designation}
            onChange={handleChange}
            placeholder="Enter your designation"
            colors={colors}
          />

          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Phone Number
            </label>

            <div className="flex gap-2">
              <select
                name="phone_country_code"
                value={form.phone_country_code}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg bg-white text-sm font-medium w-28 focus:outline-none focus:border-[#43624A] transition-colors"
              >
                <option value="+973">+973</option>
                <option value="+91">+91</option>
                <option value="+971">+971</option>
                <option value="+966">+966</option>
                <option value="+974">+974</option>
                <option value="+965">+965</option>
                <option value="+968">+968</option>
              </select>

              <input
                type="text"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
                className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:border-[#43624A] focus:ring-1 focus:ring-[#43624A] transition-all"
              />
            </div>
          </div>

          <FormField
            label="Company"
            name="companyName"
            value={form.companyName}
            disabled
            colors={colors}
          />

          <div>
            <div className="flex justify-between items-center mb-2">
              <label className="text-sm font-semibold text-gray-700">
                Company Email
              </label>

              <span className="text-xs bg-emerald-600 text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">
                Verified
              </span>
            </div>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter company email"
              className="w-full p-3 border border-gray-300 rounded-lg outline-none focus:border-[#43624A] focus:ring-1 focus:ring-[#43624A] transition-all bg-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SecurityView = ({ colors, passwordForm, handleChange }) => {
  return (
    <div className="animate-fadeIn">
      <div className="max-w-3xl">
        <div className="mb-10">
          <h3
            className="text-lg font-semibold mb-2"
            style={{ color: colors.dark }}
          >
            Change Password
          </h3>

          <p className="text-sm text-gray-600">
            Keep your account secure by using a strong password. Use 8 or more
            characters with a mix of letters, numbers, one capital letter, and
            symbols.
          </p>
        </div>

        <div className="space-y-6 mb-8">
          <FormField
            label="Current Password"
            name="currentPassword"
            type="password"
            value={passwordForm.currentPassword}
            onChange={handleChange}
            placeholder="Enter your current password"
            colors={colors}
          />

          <div>
            <FormField
              label="New Password"
              name="newPassword"
              type="password"
              value={passwordForm.newPassword}
              onChange={handleChange}
              placeholder="Enter your new password"
              colors={colors}
            />

            <p className="text-xs text-gray-500 mt-2">
              Use 8 or more characters with a mix of letters, numbers, one
              capital letter, and symbols
            </p>
          </div>

          <FormField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={passwordForm.confirmPassword}
            onChange={handleChange}
            placeholder="Re-enter your new password"
            colors={colors}
          />
        </div>

        <div className="pt-8 border-t border-gray-100">
          <label className="flex items-center gap-3 cursor-pointer group">
            <input
              type="checkbox"
              name="signOutAllSessions"
              checked={passwordForm.signOutAllSessions}
              onChange={handleChange}
              className="w-4 h-4 rounded border-gray-300 cursor-pointer"
              style={{ accentColor: colors.primary }}
            />

            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
              Sign out from all active sessions
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

const FormField = ({
  label,
  name,
  value = "",
  placeholder = "",
  type = "text",
  disabled = false,
  onChange,
}) => {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-gray-700">{label}</label>

      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={`w-full p-3 border border-gray-300 rounded-lg outline-none transition-all focus:border-[#43624A] focus:ring-1 focus:ring-[#43624A] ${
          disabled
            ? "bg-gray-50 text-gray-600 cursor-not-allowed"
            : "bg-white"
        }`}
      />
    </div>
  );
};

export default BuyerProfileBasic;