import React, { useState } from 'react';
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerProfileBasic = () => {
  const [activeTab, setActiveTab] = useState('Basic Info');

  // Custom brand color palette
  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A', // Brand Green
    secondary: '#7A9C83', // Muted Green
    light: '#F5F2EA'    // Page Background
  };

  const tabs = ['Basic Info', 'Security'];

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      {/* Sidebar - Integrated component */}
      <BuyerSettingsSidebar />

      <div className="flex-1 min-h-screen p-4 md:p-8 font-sans" style={{ backgroundColor: colors.light }}>
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          
          {/* Header */}
          <div className="p-6 border-b border-gray-100">
            <h1 className="text-xl font-bold" style={{ color: colors.dark }}>Your Profile Settings</h1>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium transition-all border-b-2 ${
                  activeTab === tab 
                  ? 'text-white' 
                  : 'text-gray-600 hover:text-gray-700 border-b-transparent'
                }`}
                style={activeTab === tab ? { 
                  backgroundColor: colors.primary, 
                  color: 'white',
                  borderBottomColor: colors.primary 
                } : { borderBottomColor: 'transparent' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10">
            {/* Conditional Rendering based on activeTab */}
            {activeTab === 'Basic Info' && <BasicInfoView colors={colors} />}
            {activeTab === 'Security' && <SecurityView colors={colors} />}

            {/* Common Footer Actions */}
            <div className="mt-12 flex justify-end gap-4 border-t pt-8">
              <button className="px-8 py-2 border-2 rounded-lg text-sm font-semibold transition-all border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-gray-400">
                Cancel
              </button>
              <button 
                className="px-8 py-2 rounded-lg text-sm font-semibold text-white transition-all shadow-md hover:shadow-lg active:scale-95"
                style={{ backgroundColor: colors.primary }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- SUB-COMPONENTS ---

// BASIC INFO VIEW
const BasicInfoView = ({ colors }) => (
  <div className="animate-fadeIn">
    {/* Profile Photo Section */}
    <div className="mb-12 pb-8 border-b border-gray-100">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        <div 
          className="w-24 h-24 rounded-full flex items-center justify-center text-white text-5xl shadow-md flex-shrink-0"
          style={{ backgroundColor: colors.secondary }}
        >
          👤
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-semibold mb-2" style={{ color: colors.dark }}>Profile Photo</h3>
          <p className="text-sm text-gray-500 mb-4">Update your profile picture to personalize your account</p>
          <button 
            className="px-6 py-2 rounded-lg text-sm font-semibold transition-all"
            style={{ 
              color: colors.primary, 
              backgroundColor: colors.light,
              border: `2px solid ${colors.primary}`
            }}
          >
            Upload Photo
          </button>
        </div>
      </div>
    </div>

    {/* Personal Information Section */}
    <div>
      <h3 className="text-lg font-semibold mb-6" style={{ color: colors.dark }}>Personal Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FormField label="First Name" defaultValue="rosita" colors={colors} />
        <FormField label="Last Name" defaultValue="evora" colors={colors} />
        <FormField label="Designation" placeholder="Enter your designation" colors={colors} />

        {/* Phone Number Field */}
        <div className="lg:col-span-1">
          <label className="text-sm font-semibold text-gray-700 mb-2 block">Phone Number</label>
          <div className="flex gap-2">
            <select className="p-3 border border-gray-300 rounded-lg bg-white text-sm font-medium w-24 focus:outline-none focus:border-[#43624A] transition-colors">
              <option>+973</option>
            </select>
            <input 
              type="text" 
              defaultValue="35542585" 
              className="flex-1 p-3 border border-gray-300 rounded-lg outline-none focus:border-[#43624A] focus:ring-1 focus:ring-[#43624A] transition-all"
            />
          </div>
        </div>

        {/* Company Field */}
        <FormField 
          label="Company" 
          defaultValue="YATEEM AIRCONDITIONING COMPANY WLL" 
          disabled 
          colors={colors} 
        />

        {/* Email Field */}
        <div className="lg:col-span-1">
          <div className="flex justify-between items-center mb-2">
            <label className="text-sm font-semibold text-gray-700">Email</label>
            <span className="text-xs bg-emerald-600 text-white px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider">Verified</span>
          </div>
          <input 
            type="email" 
            defaultValue="rosita.evora@yateemac.net" 
            className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-600 cursor-not-allowed"
            disabled 
          />
        </div>
      </div>
    </div>
  </div>
);


// SECURITY VIEW
const SecurityView = ({ colors }) => (
  <div className="animate-fadeIn">
    <div className="max-w-3xl">
      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-2" style={{ color: colors.dark }}>Change Password</h3>
        <p className="text-sm text-gray-600">
          Keep your account secure by using a strong password. Use 8 or more characters with a mix of letters, numbers, one capital letter, and symbols.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        <FormField label="Current Password" type="password" placeholder="Enter your current password" colors={colors} />
        
        <div>
          <FormField label="New Password" type="password" placeholder="Enter your new password" colors={colors} />
          <p className="text-xs text-gray-500 mt-2">Use 8 or more characters with a mix of letters, numbers, one capital letter, and symbols</p>
        </div>
        
        <FormField label="Confirm Password" type="password" placeholder="Re-enter your new password" colors={colors} />
      </div>

      <div className="pt-8 border-t border-gray-100">
        <p className="text-sm text-gray-700 mb-6">
          <span className="font-semibold" style={{ color: colors.primary }}>Last signed in:</span> 03-09-2026 01:20:38
        </p>
        
        <label className="flex items-center gap-3 cursor-pointer group">
          <input 
            type="checkbox" 
            className="w-4 h-4 rounded border-gray-300 cursor-pointer" 
            style={{ accentColor: colors.primary }} 
          />
          <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Sign out from all active sessions</span>
        </label>
      </div>
    </div>
  </div>
);

// HELPER COMPONENT: FORM FIELD
const FormField = ({ label, defaultValue = "", placeholder = "", type = "text", disabled = false, colors }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-gray-700">{label}</label>
    <input 
      type={type} 
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full p-3 border border-gray-300 rounded-lg outline-none transition-all focus:border-[#43624A] focus:ring-1 focus:ring-[#43624A] ${
        disabled ? 'bg-gray-50 text-gray-600 cursor-not-allowed' : 'bg-white'
      }`}
    />
  </div>
);

export default BuyerProfileBasic;