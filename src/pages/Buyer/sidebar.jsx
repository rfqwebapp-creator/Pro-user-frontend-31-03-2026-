import React, { useState } from 'react';
import { 
  LayoutGrid, FileText, Users, ShoppingCart, BarChart2, 
  FileBarChart, MessageSquare, FilePlus, Eye, Home, Gavel, CheckSquare 
} from 'lucide-react';
import { useNavigate } from "react-router-dom";

// Sidebar Item
const BuyerSidebarItem = ({ icon: Icon, label, active, badge, onClick }) => (
  <div 
    onClick={onClick}
    className={`relative flex flex-col items-center justify-center py-3 cursor-pointer transition-colors w-full flex-shrink-0
      ${active ? 'bg-[#333333] text-white border-r-[3px] border-red-500' : 'text-gray-400 hover:text-white'}`}
  >
    <Icon size={20} strokeWidth={1.5} />
    <span className="text-[10px] mt-1 font-medium text-center px-1 leading-tight whitespace-nowrap">
      {label}
    </span>

    {badge && (
      <div className="absolute top-5 right-6 w-2 h-2 bg-red-500 rounded-full border border-[#1e1e1e]" />
    )}
  </div>
);

export default function Sidebar() {

  const [openMenu, setOpenMenu] = useState(null);
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Home' },
    // { icon: LayoutGrid, label: 'Purchase Request' },
    { icon: FileText, label: 'RFQ/RFP' },
    { icon: Users, label: 'RFQ/RFP Status' },
    { icon: Gavel, label: 'Reverse Auction' },
    { icon: CheckSquare, label: 'Internal Approval' },
    { icon: ShoppingCart, label: 'Purchase Orders' },
    { icon: BarChart2, label: 'Analytics' },
    { icon: FileBarChart, label: 'Reports' },
    { icon: MessageSquare, label: 'Messages', badge: true },
  ];

  const dropdownItems = [
    { label: 'Create', icon: FilePlus },
    { label: 'View', icon: Eye }
  ];

  const isDropdownItem = (label) =>
    ["RFQ/RFP", "Purchase Orders"].includes(label);

  const handleNavigation = (label) => {

    const routes = {
     "Home": "/buyer/dashboard",
    "Analytics": "/buyer/Analytics-page",
    "Messages": "/buyer/message-page",
    "Reports": "/buyer/report-page",
    "Status": "/buyer/supplier-responses",
    "Reverse Auction": "/buyer/reverse-auction",
    "Internal Approval": "/buyer/internal-approval"
    };

    if (routes[label]) {
      navigate(routes[label]);
    }
  };

  const handleDropdownNavigation = (menuLabel, action) => {

  const routes = {

  // "Purchase Request": {
  //   "Create": "/buyer/create-requisition",
  //   "View": "/buyer/view-requisition"
  // },

  "RFQ/RFP": {
    "Create": "/buyer/create-rfx",
    "View": "/buyer/view-rfx"
  },

  "Purchase Orders": {
    "Create": "/buyer/create-purchaseOrder",
    "View": "/buyer/view-purchaseOrder"
  }

};

    const path = routes[menuLabel]?.[action];

    if (path) {
      navigate(path);
    }

    setOpenMenu(null);
  };

  return (
    <aside className="fixed left-0 top-0 w-[85px] h-screen bg-[#1e1e1e] flex flex-col overflow-visible z-50">

      <nav className="flex flex-col items-center w-full h-full">

        {menuItems.map((item, idx) => {

          const hasDropdown = isDropdownItem(item.label);
          const isOpen = openMenu === item.label;

          return (

            <div
              key={idx}
              className="relative w-full flex-shrink-0"
              onMouseEnter={() => hasDropdown && setOpenMenu(item.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >

             <BuyerSidebarItem 
  {...item}
  onClick={() => handleNavigation(item.label)}
/>

              {hasDropdown && isOpen && (

                <div className="absolute left-[85px] top-0 w-40 bg-white rounded-r-lg shadow-xl py-2 z-50 border border-gray-200">

                  {dropdownItems.map((dropItem, i) => {

                    const DropIcon = dropItem.icon;

                    return (

                      <div
                        key={i}
                        className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer text-gray-700 transition-colors"
                        onClick={(e) => {
  e.stopPropagation();
  handleDropdownNavigation(item.label, dropItem.label);
}}
                      >

                        <DropIcon size={18} />

                        <span className="text-sm font-medium">
                          {dropItem.label}
                        </span>

                      </div>

                    );

                  })}

                </div>

              )}

            </div>

          );

        })}

      </nav>

    </aside>
  );
}