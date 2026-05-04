import React, { useState } from "react";
import { ChevronUp, Users, Settings, Grid, Hexagon } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BuyerSettingsSidebar() {
  const navigate = useNavigate();

  // State management for all dropdown sections
  const [openAccount, setOpenAccount] = useState(false);
  const [openUsers, setOpenUsers] = useState(false);
  const [openMasterData, setOpenMasterData] = useState(false);
  const [openDefault, setOpenDefault] = useState(false);

  return (
    <aside className="w-80 h-screen bg-[#3D523E] p-6 text-white font-sans overflow-y-auto custom-scrollbar">
      {/* Sidebar Label */}
      <p className="text-[10px] font-bold text-gray-300 mb-6 tracking-[0.2em]">
        SETTINGS
      </p>

      {/* 1. Account Settings Section */}
      <div className="mb-4">
        <div className={`rounded-xl overflow-hidden transition-all ${openAccount ? 'bg-[#F5F2EA] shadow-lg' : ''}`}>
          <div
            onClick={() => setOpenAccount(!openAccount)}
            className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors
              ${openAccount ? 'bg-[#8CA88E] text-white' : 'text-gray-200 hover:bg-[#4A634B]'}`}
          >
            <div className="flex items-center gap-3">
              <Hexagon size={20} className="opacity-80" />
              <span className="font-semibold text-base">Account Settings</span>
            </div>
            <ChevronUp 
              size={18} 
              className={`transition-transform duration-300 ${openAccount ? '' : 'rotate-180'}`} 
            />
          </div>

          {openAccount && (
            <div className="flex flex-col py-3 px-4 space-y-3">
              {[
  { label: "Company Information", path: "/buyer/company-information" },
  { label: "Profile Information", path: "/buyer/profile-basic" },
  { label: "Region Settings", path: "/buyer/regional-settings" },
  { label: "Points of Contact", path: "/buyer/points-contact" },
  { label: "Others", path: "/buyer/others" },
  { label: "Add Company", path: "/buyer/add-company" }
].map((item) => (
                <button
                  key={item.path}
                  onClick={() => navigate(item.path)}
                  className={`text-left text-[15px] transition-colors
                    ${item.label === "Region Settings" ? "text-[#43624A] font-bold" : "text-[#6B715E] hover:text-[#43624A]"}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="space-y-2">
        {/* 2. Users & Teams */}
        <MenuItem 
          icon={<Users size={20} />} 
          label="Users & Teams" 
          isOpen={openUsers}
          onClick={() => setOpenUsers(!openUsers)}
          navigate={navigate}
          children={[
          { label: "User Roles", path: "/buyer/user-teams" },
{ label: "Add User Roles", path: "/buyer/add-user" },
{ label: "Users", path: "/buyer/users" }
          ]}
        />

        {/* 3. Master Data Management (From Image 1) */}
        <MenuItem 
          icon={<Grid size={20} />} 
          label="Master Data Management" 
          isOpen={openMasterData}
          onClick={() => setOpenMasterData(!openMasterData)}
          navigate={navigate}
          children={[
          { label: "Cost Centers", path: "/buyer/cost-centers" },
// { label: "Catalog", path: "/buyer/catlog-Library" },
// { label: "Supplier Types", path: "/buyer/supplier-types" },
{ label: "Supplier Directory", path: "/buyer/supplierDirectories" },
{ label: "Email Subscription", path: "/buyer/email-subscription" },
// { label: "Supplier Questionnaire", path: "/buyer/supplier-questionnaire" },
// { label: "Questionnaire Responses", path: "/buyer/questionnaire-response" }
          ]}
        />
        
        {/* 4. Default (From Image 2) */}
        <MenuItem 
          icon={<Settings size={20} />} 
          label="Default" 
          isOpen={openDefault}
          onClick={() => setOpenDefault(!openDefault)}
          navigate={navigate}
          children={[
            { label: "BID Settings", path: "/buyer/bid-settings" },
{ label: "Purchase Order Defaults", path: "/buyer/purchase-order-default" },
{ label: "Purchase Order Approval Workflow", path: "/buyer/purchase-order-workflow" }
          ]}
        />
      </nav>
    </aside>
  );
}

/**
 * Reusable MenuItem Component
 * Handles both single links and dropdowns with sub-items
 */
function MenuItem({ icon, label, onClick, isOpen, children, navigate }) {
  const hasChildren = children && children.length > 0;

  return (
    <div className={`relative transition-all ${hasChildren && isOpen ? 'bg-white/5 rounded-xl pb-2' : ''}`}>
      {/* Blue Active Bar (matches your images) */}
      {hasChildren && isOpen && (
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600 rounded-l-md" />
      )}

      <div
        onClick={onClick}
        className={`flex items-center justify-between px-4 py-4 cursor-pointer transition-all group
          ${hasChildren && isOpen ? 'text-blue-400' : 'text-gray-100 hover:bg-[#4A634B] rounded-xl'}`}
      >
        <div className="flex items-center gap-4">
          <span className={`transition-opacity ${isOpen ? 'opacity-100' : 'opacity-80 group-hover:opacity-100'}`}>
            {icon}
          </span>
          <span className="text-[15px] font-medium">{label}</span>
        </div>
        
        {hasChildren && (
          <ChevronUp 
            size={18} 
            className={`transition-transform duration-300 ${isOpen ? '' : 'rotate-180'}`} 
          />
        )}
      </div>

      {/* Sub-menu Items */}
      {hasChildren && isOpen && (
        <div className="flex flex-col py-2 px-4 space-y-4 ml-10">
          {children.map((child) => (
            <button
              key={child.path}
              onClick={() => navigate(child.path)}
              className={`text-left text-[14px] transition-colors font-medium
                ${child.active ? 'text-blue-500' : 'text-gray-300 hover:text-white'}`}
            >
              {child.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}