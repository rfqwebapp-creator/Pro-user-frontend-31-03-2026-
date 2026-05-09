import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Search,
  Home, 
  UserCog2,
  ChevronLeft, 
  SquarePen, 
  Folder, 
  Settings, 
  Eye, 
  Send, 
  User,
  LogOut,
  FileText,        
  FileSignature,   
  FileCheck,       
  ShieldCheck,     
  SlidersHorizontal, 
  ToggleRight,     
  LayoutGrid,      
  Users,           
  MessageCircle,    
  Menu,
  X
} from 'lucide-react';

import logo from "../../assets/LOGO-2.png";

const BuyerHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isBuyer = location.pathname.startsWith("/buyer");
  const isSeller = location.pathname.startsWith("/seller");
const isHome = location.pathname === "/buyer/home";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const toggleMode = () => {
    if (isBuyer) {
      navigate("/seller/dashboard");
    } else {
      navigate("/buyer/dashboard");
    }
  };

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  const handleNavigation = (path, event) => {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  if (!path) {
    console.warn("Navigation path missing");
    return;
  }

  if (location.pathname === path) {
    setOpenDropdown(null);
    setIsMobileMenuOpen(false);
    return;
  }

  setOpenDropdown(null);
  setIsMobileMenuOpen(false);
  navigate(path);
};
  // Shared utility classes for dropdown consistency
  const dropdownPanelStyle = "invisible absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 z-50";
  const dropdownPanelStyleMobile = "mt-2 w-full bg-gray-50 rounded-lg p-2 space-y-1";
  const cardStyle = "flex gap-4 sm:gap-8 rounded-xl border border-gray-100 bg-white p-4 sm:p-6 shadow-xl";
  const itemButtonStyle = "flex flex-col items-center gap-2 group/item w-20 sm:w-28";
  const iconContainerStyle = "rounded-lg bg-gray-50 p-2 sm:p-3 group-hover/item:bg-green-50 transition-colors";
  const primaryGreen = "#43624A";

  // Navigation items data
  const navItems = [
    {
      name: 'create',
      icon: SquarePen,
      label: 'Create',
      items: [
        { icon: FileText, label: 'Create Requisition', path: '/buyer/create-requisition' },
        { icon: FileSignature, label: 'Create RFX', path: '/buyer/create-rfx' },
        { icon: FileCheck, label: 'Create PO', path: '/buyer/create-purchaseOrder' },
      ]
    },
    {
      name: 'directory',
      icon: Folder,
      label: 'Directory',
      items: [
        { icon: ShieldCheck, label: 'Supplier Directory', path: '/buyer/supplierDirectories' },
        // { icon: SlidersHorizontal, label: 'Catalog Library', path: '/buyer/catlog-Library' },
      ]
    },
    {
      name: 'settings',
      icon: Settings,
      label: 'Settings',
      items: [
        { icon: ToggleRight, label: 'Account settings', path: '/buyer/company-information' },
        // { icon: LayoutGrid, label: 'Master Data', path: '/buyer/catlog-Library' },
        { icon: Users, label: 'User & Teams', path: '/buyer/user-teams' },
      ]
    },
    {
      name: 'notification',
      icon: Eye,
      label: 'Notifications',
      hasNotification: true,
      isNotification: true
    },
    {
      name: 'support',
      icon: Send,
      label: 'Support',
      items: [
        { icon: ShieldCheck, label: 'Report a Bug' },
        { icon: SlidersHorizontal, label: 'Live Chat' },
        { icon: MessageCircle, label: 'Whatsapp' },
      ]
    },
  ];

  // Render dropdown content
  const renderDropdownContent = (item) => {
    if (item.isNotification) {
      return (
        <div className="w-80 rounded-xl border border-gray-100 bg-white shadow-xl overflow-hidden">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50/50">
            <h3 className="text-sm font-bold text-[#43624A]">Notifications</h3>
          </div>
          <div className="max-h-64 overflow-y-auto">
            <button className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors border-b border-gray-50">
              <p className="text-xs font-bold text-gray-900">Request for RFQ Approval</p>
              <p className="text-[10px] text-gray-500 mt-0.5">You have received an approval request against RFQ #78835...</p>
            </button>
            <button className="w-full text-left px-4 py-3 hover:bg-green-50 transition-colors">
              <p className="text-xs font-bold text-gray-900">Request for PR Approval</p>
              <p className="text-[10px] text-gray-500 mt-0.5">You have received an approval request against Purchase Request #31802...</p>
            </button>
          </div>
          <button className="w-full py-2.5 bg-white text-center text-[11px] font-bold text-[#43624A] border-t border-gray-100 hover:bg-gray-50">
            View all (1182)
          </button>
        </div>
      );
    }

    return (
      <div className={cardStyle}>
        {item.items.map((subItem, idx) => (
        <button 
  key={idx}
  type="button"
  className={itemButtonStyle}
  onClick={(e) => handleNavigation(subItem.path, e)}
>
            <div className={iconContainerStyle}>
              <subItem.icon size={24} color={primaryGreen} strokeWidth={1.5} className="sm:size-7" />
            </div>
            <span className="text-center text-xs font-semibold text-gray-600">{subItem.label}</span>
          </button>
        ))}
      </div>
    );
  };

  // Render desktop navigation icons
  const renderDesktopNav = () => (
    <div className="hidden lg:flex items-center gap-4 xl:gap-6 text-gray-500">
 
      {navItems.map((item) => (
        <div key={item.name} className="group relative flex items-center">
          <button className="group-hover:text-gray-800 py-4">
            <item.icon size={20} strokeWidth={1.5} />
            {item.hasNotification && (
              <span className="absolute top-3.5 right-0 h-2 w-2 rounded-full bg-red-500 border border-white"></span>
            )}
          </button>
          <div className={dropdownPanelStyle}>
            {renderDropdownContent(item)}
          </div>
        </div>
      ))}
    </div>
  );

  // Render mobile/tablet navigation
  const renderMobileNav = () => (
    <div className="flex flex-col h-full p-4">
      

      {/* Company badge in mobile */}
      <div className="flex items-center justify-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-2 text-xs font-medium uppercase tracking-wide text-gray-700 mb-4">
        YATEEM AIRCONDITIONING C...
      </div>

      {/* Mode Switch Buttons for Mobile */}
      <div className="flex gap-2 mb-4">
        <button
          onClick={() => {
            navigate("/buyer/dashboard");
            setIsMobileMenuOpen(false);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold transition-all
            ${isBuyer ? "bg-[#43624A] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Buyer
        </button>
        <button
          onClick={() => {
            navigate("/buyer/home");
            setIsMobileMenuOpen(false);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold transition-all
            ${isHome ? "bg-[#43624A] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/seller/dashboard");
            setIsMobileMenuOpen(false);
          }}
          className={`flex-1 px-3 py-2 rounded-md text-xs font-semibold transition-all
            ${isSeller ? "bg-[#43624A] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          Seller
        </button>
      </div>

      {/* Navigation items scrollable area */}
      <div className="flex-1 overflow-y-auto space-y-2">
        
        {/* ADDED: Switch Mode Button for Mobile Drawer */}
        
{/* Home Button */}
  <button
    onClick={() => {
      navigate("/buyer/home");
      setIsMobileMenuOpen(false);
    }}
    className="flex w-full items-center gap-3 rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:bg-gray-50"
  >
    <Home size={20} strokeWidth={1.5} />
    <span className="font-medium">Home</span>
  </button>
        {navItems.map((item) => (
          <div key={item.name} className="relative">
            <button
              onClick={() => toggleDropdown(item.name)}
              className="flex w-full items-center justify-between rounded-lg border border-gray-200 bg-white px-4 py-3 text-gray-700 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3">
                <item.icon size={20} strokeWidth={1.5} />
                <span className="font-medium">{item.label}</span>
              </div>
              {!item.isNotification && (
                <span className={`transition-transform text-[10px] ${openDropdown === item.name ? 'rotate-180' : ''}`}>▼</span>
              )}
            </button>
            
            {openDropdown === item.name && !item.isNotification && (
              <div className={dropdownPanelStyleMobile}>
                {item.items.map((sub, i) => (
              <button 
  key={i}
  type="button"
  onClick={(e) => handleNavigation(sub.path, e)}
  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-600 hover:text-[#43624A]"
>
  <sub.icon size={16} />
  {sub.label}
</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Profile & Actions in mobile */}
      <div className="mt-auto border-t border-gray-200 pt-4 px-2">
        <div className="mb-4 space-y-1">
          <button
            onClick={() => {
              navigate("/buyer/profile-basic");
              setIsMobileMenuOpen(false);
            }}
            className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <User size={18} className="mr-3 text-gray-400" />
            My Account
          </button>
          
          <button onClick={signOut} className="flex items-center w-full px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors">
            <LogOut size={18} className="mr-3 text-gray-400" />
            Sign Out
          </button>
        </div>

        <div className="flex items-center bg-gray-50 p-2 rounded-lg">
          <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#43624A] text-white">
            <User size={20} />
          </div>
          <div className="ml-3 overflow-hidden">
            <div className="text-sm font-bold leading-tight text-gray-900 truncate uppercase">ROSITA EVORA</div>
            <div className="text-[10px] uppercase text-gray-500 truncate">Admin | 1GB of 5GB used</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header className="flex h-16 items-center border-b border-gray-200 bg-[#F5F2EA] px-4 font-sans text-gray-700 flex-shrink-0 relative z-50">
      
      {/* 1. Logo Section */}
      <div className="flex items-center gap-0.5">
        <img src={logo} alt="Procubid Logo" className="h-8 w-auto sm:h-10" />
        <span className="text-2xl sm:text-3xl font-extrabold tracking-[0.05em]">
          <span style={{ color: primaryGreen }}>PROCU</span>
          <span className="text-[#7A9C83]">BID</span>
        </span>
      </div>

      {/* 2. Search Section */}
      <div className="hidden md:flex flex-1 items-center gap-3 ml-4">
        
        <div className="hidden lg:flex items-center rounded-lg border border-gray-200 bg-[#F3F4F6] px-3 py-1.5 text-xs font-medium uppercase tracking-wide text-gray-700">
          YATEEM AIRCONDITIONING C...
        </div>
      </div>

      <div className="flex-1"></div>
<div className="hidden lg:flex items-center gap-2 mr-4">

  {/* Buyer */}
  <button
    onClick={() => navigate("/buyer/dashboard")}
    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all
      ${isBuyer ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Buyer
  </button>



  {/* Home */}
  <button
    onClick={() => navigate("/buyer/home")}
    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all
      ${isHome ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Home
  </button>
  {/* Seller */}
  <button
    onClick={() => navigate("/seller/dashboard")}
    className={`px-3 py-1 rounded-md text-xs font-semibold transition-all
      ${isSeller ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Seller
  </button>
</div>
      {/* 3. Desktop Navigation Icons Section */}
      {renderDesktopNav()}

      {/* Hamburger Menu Button for Mobile */}
      <button
        className="lg:hidden ml-4 p-2 rounded-md hover:bg-gray-100 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* 4. Profile Section with HOVER menu */}
<div className="hidden lg:flex group relative items-center border-l border-gray-300 pl-6 ml-4 h-full cursor-pointer">        <div className="mr-3 text-right">
          <div className="text-sm font-bold leading-tight text-gray-900 uppercase">ROSITA EVORA</div>
          <div className="text-[10px] uppercase text-gray-500">Admin <span className="mx-1">|</span> 1GB of 5GB used</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#43624A] text-white">
          <User size={20} />
        </div>

        {/* Hover Menu Box */}
        <div className="absolute top-full right-0 w-48 bg-white shadow-xl rounded-b-xl border border-gray-100 py-1 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 z-[60]">
          <button
            onClick={() => navigate("/buyer/profile-basic")}
            className="flex items-center w-full px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <User size={18} className="mr-3 text-gray-400" />
            My Account
          </button>
          
          <div className="border-t border-gray-100"></div>

          <button onClick={signOut} className="flex items-center w-full px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={18} className="mr-3 text-red-400" />
            Sign Out
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 z-50 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {renderMobileNav()}
      </div>

    </header>
  );
};

export default BuyerHeader;