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
          <div className="flex flex-wrap border-b border-gray-100 bg-gray-50/50">
            {['Basic Info', 'Security', 'Permissions', 'Entity Rights'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium transition-colors ${
                  activeTab === tab 
                  ? 'bg-white shadow-sm border-b-2' 
                  : 'text-gray-500 hover:text-gray-700'
                }`}
                style={activeTab === tab ? { borderBottomColor: colors.primary, color: colors.primary } : {}}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-10">
            {/* Conditional Rendering based on activeTab */}
            {activeTab === 'Basic Info' && <BasicInfoView colors={colors} />}
            {activeTab === 'Security' && <SecurityView colors={colors} />}
            {activeTab === 'Permissions' && <PermissionsView colors={colors} />}
            {activeTab === 'Entity Rights' && <EntityRightsView colors={colors} />}

            {/* Common Footer Actions */}
            <div className="mt-12 flex justify-end gap-4 border-t pt-8">
              <button className="px-8 py-2 border rounded-md text-sm font-semibold transition-all border-gray-200 text-gray-600 hover:bg-gray-50">
                Cancel
              </button>
              <button 
                className="px-8 py-2 rounded-md text-sm font-semibold text-white transition-all shadow-md active:scale-95"
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

// 1. ENTITY RIGHTS VIEW
const EntityRightsView = ({ colors }) => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const entities = [
    { id: 1, name: "YATEEM AIRCONDITIONING COMPANY WLL", code: "YAC" },
    { id: 2, name: "YATEEM OXYGEN", code: "YOX" },
    { id: 3, name: "YATEEM COMMERCIAL", code: "YCM" },
    { id: 4, name: "YATEEM PROJECTS DIVISION", code: "YPD" }
  ];

  return (
    <div className="animate-fadeIn space-y-6">
      <div className="max-w-md">
        <label className="text-sm font-semibold text-gray-600 mb-2 block">Search Entity</label>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search by company name or code..."
            className="w-full p-2.5 pl-10 border rounded-md outline-none focus:border-[#43624A]"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="absolute left-3 top-3 text-gray-400">🔍</span>
        </div>
      </div>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="p-4 font-semibold w-12">
                <input type="checkbox" className="w-4 h-4 rounded" style={{ accentColor: colors.primary }} />
              </th>
              <th className="p-4 font-semibold">Entity Name</th>
              <th className="p-4 font-semibold">Code</th>
              <th className="p-4 font-semibold text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {entities.filter(e => e.name.toLowerCase().includes(searchTerm.toLowerCase())).map((entity) => (
              <tr key={entity.id} className="hover:bg-gray-50/50 transition-colors">
                <td className="p-4">
                  <input 
                    type="checkbox" 
                    defaultChecked={entity.id === 1}
                    className="w-4 h-4 rounded" 
                    style={{ accentColor: colors.primary }} 
                  />
                </td>
                <td className="p-4 font-medium text-gray-700">{entity.name}</td>
                <td className="p-4 text-gray-500 font-mono">{entity.code}</td>
                <td className="p-4 text-right">
                  <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                    entity.id === 1 ? 'bg-emerald-100 text-emerald-700' : 'bg-gray-100 text-gray-500'
                  }`}>
                    {entity.id === 1 ? 'Active' : 'Inactive'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// 2. PERMISSIONS VIEW (With Accordion Logic)
const PermissionsView = ({ colors }) => {
  const permissionData = [
    { title: "Purchase Request", count: "3 / 3", subTasks: ["Manage", "View", "Approve"] },
    { title: "RFX", count: "3 / 3", subTasks: ["Manage", "View", "Approve"] },
    { title: "Supplier Responses", count: "4 / 4", subTasks: ["Manage", "View", "Approve", "Reveal"] },
    { title: "Purchase Order", count: "3 / 3", subTasks: ["Manage", "View", "Approve"] },
    { title: "Delivery Note", count: "2 / 2", subTasks: ["Manage", "View"] },
    { title: "Bills", count: "2 / 2", subTasks: ["Manage", "View"] },
    { title: "Analytics", count: "2 / 2", subTasks: ["Manage", "View"] },
    { title: "Offline transactions", count: "3 / 3", subTasks: ["Manage", "View", "Approve"] },
  ];

  return (
    <div className="space-y-3 animate-fadeIn">
      {permissionData.map((item, index) => (
        <PermissionRow key={index} data={item} colors={colors} />
      ))}
    </div>
  );
};

const PermissionRow = ({ data, colors }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-sm overflow-hidden">
      <div className="flex items-center p-3 bg-gray-50/30 hover:bg-gray-50 transition-colors">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`mr-4 transition-transform duration-200 text-[#43624A] font-bold ${isOpen ? 'rotate-90' : ''}`}
        >
          <span className="text-[10px]">▶</span>
        </button>
        <input 
          type="checkbox" 
          defaultChecked 
          className="w-4 h-4 rounded border-gray-300 mr-3 cursor-pointer"
          style={{ accentColor: colors.primary }}
        />
        <span className="text-sm font-medium text-gray-700 flex-1 flex items-center gap-2">
          <span className="opacity-50 text-lg">📄</span> {data.title}
        </span>
        <span className="text-xs text-gray-500 font-mono font-bold bg-gray-100 px-2 py-1 rounded">{data.count}</span>
      </div>
      {isOpen && (
        <div className="bg-white border-t border-gray-100 divide-y divide-gray-50">
          {data.subTasks.map((task, idx) => (
            <div key={idx} className="flex items-center px-12 py-3 hover:bg-gray-50/50">
              <input 
                type="checkbox" 
                defaultChecked 
                className="w-4 h-4 rounded border-gray-300 mr-4 cursor-pointer"
                style={{ accentColor: colors.primary }}
              />
              <span className="text-sm text-gray-600">{task}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// 3. BASIC INFO VIEW
const BasicInfoView = ({ colors }) => (
  <div className="animate-fadeIn">
    <div className="flex items-center gap-4 mb-10">
      <div 
        className="w-16 h-16 rounded-full flex items-center justify-center text-white text-3xl"
        style={{ backgroundColor: colors.secondary }}
      >
        👤
      </div>
      <div>
        <button className="text-sm font-semibold hover:underline" style={{ color: colors.primary }}>
          Upload Your photo
        </button>
       </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <FormField label="First Name" defaultValue="rosita" colors={colors} />
      <FormField label="Last Name" defaultValue="evora" colors={colors} />
      <FormField label="Designation" colors={colors} />

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-600">Phone Number</label>
        <div className="flex gap-2">
          <select className="p-2.5 border rounded-md bg-white text-sm w-24">
            <option>+973</option>
          </select>
          <input type="text" defaultValue="35542585" className="w-full p-2.5 border rounded-md outline-none focus:border-[#43624A]" />
        </div>
      </div>

      <FormField label="Company" defaultValue="YATEEM AIRCONDITIONING COMPANY WLL" disabled colors={colors} />

      <div className="space-y-1">
        <div className="flex justify-between items-center">
          <label className="text-sm font-semibold text-gray-600">Email</label>
          <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider">Verified</span>
        </div>
        <input type="email" defaultValue="rosita.evora@yateemac.net" className="w-full p-2.5 border rounded-md bg-gray-50 text-gray-500 cursor-not-allowed" disabled />
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-600">Home Number</label>
        <div className="flex gap-2">
          <select className="p-2.5 border rounded-md bg-white text-sm w-24">
            <option>Code(+1)</option>
          </select>
          <input type="text" className="w-full p-2.5 border rounded-md outline-none focus:border-[#43624A]" />
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-sm font-semibold text-gray-600">Work Number</label>
        <div className="flex gap-2 mb-2">
          <input type="text" defaultValue="209" className="w-20 p-2.5 border rounded-md outline-none focus:border-[#43624A]" />
          <span className="self-center">-</span>
        </div>
        <input type="text" defaultValue="17253177" className="w-full p-2.5 border rounded-md outline-none focus:border-[#43624A]" />
      </div>

      <FormField label="Employee Code" colors={colors} />
    </div>

    <div className="mt-10">
      <h3 className="text-sm font-semibold text-gray-600 mb-4">Cost Center(s)</h3>
      <div className="flex flex-wrap gap-2">
        {['Human Resources', 'City Center Tower', 'General', 'M26', 'PLUMBING', 'Villa Projects'].map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1.5 rounded text-xs font-medium text-white"
            style={{ backgroundColor: '#408d60' }}
          >
            {tag}
          </span>
        ))}
        <span className="text-gray-400 text-xs self-center ml-2 italic">+ many more</span>
      </div>
    </div>
  </div>
);

// 4. SECURITY VIEW
const SecurityView = ({ colors }) => (
  <div className="animate-fadeIn">
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
      <div className="md:col-span-4">
        <h2 className="text-lg font-bold mb-4" style={{ color: colors.dark }}>Change password</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Use 8 or more characters with a mix of letters, numbers, one capital letter & symbols. 
          Never share your password with anyone within or outside your organization.
        </p>
      </div>
      <div className="md:col-span-8 space-y-6 max-w-xl">
        <FormField label="Old Password" type="password" colors={colors} />
        <div className="space-y-1">
          <FormField label="New Password" type="password" colors={colors} />
          <p className="text-xs text-red-500 font-medium">Use 8 or more characters with a mix of letters, numbers, one capital letter & symbols</p>
        </div>
        <FormField label="Repeat Password" type="password" colors={colors} />
        <div className="pt-4">
          <p className="text-sm font-medium mb-4" style={{ color: colors.primary }}>
            Last signed in: <span className="text-gray-600 font-normal">03-09-2026 01:20:38</span>
          </p>
          <label className="flex items-center gap-3 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300" style={{ accentColor: colors.primary }} />
            <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">Sign out from all active sessions</span>
          </label>
        </div>
      </div>
    </div>
  </div>
);

// HELPER COMPONENT: FORM FIELD
const FormField = ({ label, defaultValue = "", type = "text", disabled = false, colors }) => (
  <div className="space-y-1">
    <label className="text-sm font-semibold text-gray-600">{label}</label>
    <input 
      type={type} 
      defaultValue={defaultValue} 
      disabled={disabled}
      className={`w-full p-2.5 border rounded-md outline-none transition-all focus:border-[#43624A] ${
        disabled ? 'bg-gray-50 text-gray-500 cursor-not-allowed' : 'bg-white'
      }`}
    />
  </div>
);

export default BuyerProfileBasic;