import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { 
  ArrowLeft, ExternalLink, Home, Folder, Settings, 
  Eye, Send, User, LogOut, MessageSquare, BookOpen, FileCheck, 
  ShieldCheck, ListTree, SlidersHorizontal, LayoutGrid, 
  Users, Wallet, Bug, MessageCircle, Phone, UserCog2, Menu, X
} from "lucide-react";
import logo from "../../assets/LOGO-2.png";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
 const isBuyer = location.pathname.startsWith("/buyer");
const isSeller = location.pathname.startsWith("/seller");
const isHome = location.pathname === "/seller/home" || location.pathname === "/buyer/home";
  const toggleMode = () => {
    if (isBuyer) {
      navigate("/seller/dashboard");
    } else {
      navigate("/buyer/dashboard");
    }
  };

  return (
    <>
      <nav className="h-16 bg-[#F5F2EA] border-b border-gray-200 flex items-center justify-between px-4 md:px-6 fixed top-0 right-0 left-0 lg:left-20 z-50">
        
        {/* Left Section: Brand & Entity */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="flex items-center gap-0.5">
            <img src={logo} alt="Procubid Logo" className="h-7 w-auto sm:h-9 md:h-10" />
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold tracking-[0.05em]   xs:block">
              <span className="text-[#43624A]">PROCU</span>
              <span className="text-[#7A9C83]">BID</span>
            </span>
          </div>

          <div className="hidden sm:flex border border-gray-300 rounded-full px-4 py-1.5 bg-white items-center gap-2 cursor-pointer shadow-sm hover:border-[#43624A] transition-all">
            <span className="text-[10px] md:text-[11px] font-bold text-gray-600 uppercase tracking-wide truncate max-w-[140px] md:max-w-none">
              Yateem Airconditioning Company W.L.L
            </span>
            <span className="text-gray-400 text-[10px]">▼</span>
          </div>
        </div>

        {/* Right Section: Desktop Icons & Profile & Hamburger */}
        <div className="flex items-center gap-3 md:gap-5 text-gray-500">
          
          {/* Desktop-only Icon Group (Hidden on mobile) */}
          <div className="hidden md:flex items-center gap-2 md:gap-4 pr-3 border-r border-gray-200 h-10">
            
{/* Updated Home Icon Connection */}
 <div className="flex items-center gap-2">

  {/* Buyer */}
  <button
    onClick={() => navigate("/buyer/dashboard")}
    className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all
      ${isBuyer ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Buyer
  </button>

  {/* Home */}
  <button
    onClick={() => {
      if (isSeller) navigate("/seller/home");
      else navigate("/buyer/home");
    }}
    className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all
      ${isHome ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Home
  </button>

  {/* Seller */}
  <button
    onClick={() => navigate("/seller/dashboard")}
    className={`px-4 py-1.5 rounded-md text-sm font-semibold transition-all
      ${isSeller ? "bg-[#43624A] text-white animate-pulse" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
  >
    Seller
  </button>

</div>
            {/* Quote Dropdown */}
            <div className="relative h-full flex items-center group">
              <ExternalLink size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block animate-in fade-in zoom-in-95 duration-200">
                <DropdownWrapper width="w-[320px]">
                  <div className="grid grid-cols-3 gap-1 p-4">
                    <DropdownAction icon={<MessageSquare size={34} className="text-blue-600" />} label="Create Quote" path="/seller/create-quote" />
                    <DropdownAction icon={<BookOpen size={34} className="text-blue-600" />} label="Create Proposal" path="/seller/create-proposal" />
                    <DropdownAction icon={<FileCheck size={34} className="text-blue-600" />} label="Accept Order" path="/seller/orders" />
                  </div>
                </DropdownWrapper>
              </div>
            </div>


            {/* Directory Dropdown */}
            <div className="relative h-full flex items-center group">
              <Folder size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
                <DropdownWrapper width="w-[240px]">
                  <div className="grid grid-cols-2 gap-2 p-4">
                    <DropdownAction icon={<ShieldCheck size={34} className="text-blue-600" />} label="Customer Directory" path="/seller/customer-directory" />
                    {/* <DropdownAction icon={<ListTree size={34} className="text-blue-600" />} label="Catalog Library" path="/seller/catalog" /> */}
                  </div>
                </DropdownWrapper>
              </div>
            </div>

            {/* Settings Dropdown */}
            <div className="relative h-full flex items-center group">
              <Settings size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
                <DropdownWrapper width="w-[340px]">
                  <div className="grid grid-cols-4 gap-1 p-3">
                    <DropdownAction icon={<SlidersHorizontal size={28} className="text-blue-600" />} label="Account settings" path="/seller/company-information" />
                    {/* <DropdownAction icon={<LayoutGrid size={28} className="text-blue-600" />} label="Master Data" path="/seller/catalog" /> */}
                    <DropdownAction icon={<Users size={28} className="text-blue-600" />} label="User & Teams" path="/seller/users-Roles" />
                    <DropdownAction icon={<Wallet size={28} className="text-blue-600" />} label="Wallet" path="/seller/wallet-home" />
                  </div>
                </DropdownWrapper>
              </div>
            </div>

            {/* Support Dropdown */}
            <div className="relative h-full flex items-center group">
              <Send size={20} className="cursor-pointer group-hover:text-[#43624A]" />
              <div className="absolute top-full right-0 pt-2 hidden group-hover:block">
                <DropdownWrapper width="w-[280px]">
                  <div className="grid grid-cols-3 gap-1 p-4">
                    <DropdownAction icon={<Bug size={32} className="text-blue-600" />} label="Report a Bug" path="/report-bug" />
                    <DropdownAction icon={<MessageCircle size={32} className="text-blue-600" />} label="Live Chat" path="/chat" />
                    <DropdownAction icon={<Phone size={32} className="text-blue-600" />} label="Whatsapp" path="/whatsapp" />
                  </div>
                </DropdownWrapper>
              </div>
            </div>
            
            <Eye size={20} className="cursor-pointer hover:text-[#43624A]" />
          </div>

          {/* User Profile */}
          <div className="group relative flex items-center md:pl-6 h-full cursor-pointer">
            <div className="hidden lg:block mr-3 text-right">
              <div className="text-sm font-bold leading-tight text-gray-900 uppercase">ROSITA EVORA</div>
              <div className="text-[10px] uppercase text-gray-500">Admin | 1GB Used</div>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#43624A] text-white">
              <User size={20} />
            </div>
          </div>

          {/* MOBILE TOGGLE - FAR RIGHT */}
          <button 
            className="lg:hidden p-1 text-gray-600 hover:bg-gray-100 rounded ml-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE SIDEBAR (COMPLETE WITH ALL DROPDOWNS) --- */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] lg:hidden">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          
          <div className="fixed top-0 right-0 bottom-0 w-[300px] bg-white shadow-2xl flex flex-col animate-in slide-in-from-right duration-300">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b">
              <div className="font-extrabold text-[#43624A] text-xl tracking-wider">MENU</div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-1"><X size={24} /></button>
            </div>
            
            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <div className="p-6 flex flex-col gap-7">
                
                {/* Profile Summary */}
                <div className="bg-[#F5F2EA] p-4 rounded-xl">
                  <p className="text-[10px] font-bold text-gray-400 uppercase mb-1">Signed in as</p>
                  <p className="font-bold text-gray-800">ROSITA EVORA</p>
                  <p className="text-[10px] text-gray-500">Admin | 1GB of 5GB used</p>
                  <button 
                    onClick={() => {navigate("/profile-basic"); setIsMobileMenuOpen(false)}}
                    className="mt-3 text-xs font-bold text-[#43624A] flex items-center gap-1"
                  >
                    View Profile <ArrowLeft size={12} className="rotate-180" />
                  </button>
                </div>

                {/* Core Navigation */}
                <div className="space-y-4">
                  <MobileNavLink icon={<Home size={20}/>} label="Home" onClick={() => {navigate("/"); setIsMobileMenuOpen(false)}} />
                  <MobileNavLink 
                    icon={<UserCog2 size={20}/>} 
                    label={isBuyer ? "Switch to Seller Console" : "Switch to Buyer Console"} 
                    onClick={() => {toggleMode(); setIsMobileMenuOpen(false)}} 
                  />
                </div>

                <div className="h-px bg-gray-100" />

                {/* Main Actions (Quotes) */}
                <SectionHeader label="Quotes & Orders" />
                <div className="space-y-4">
                  <MobileNavLink icon={<MessageSquare size={20}/>} label="Create Quote" path="/seller/create-quote" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<BookOpen size={20}/>} label="Create Proposal" path="/seller/create-proposal" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<FileCheck size={20}/>} label="Accept Order" path="/seller/orders" close={() => setIsMobileMenuOpen(false)} />
                </div>

                <div className="h-px bg-gray-100" />

                {/* Directory & Master Data */}
                <SectionHeader label="Directories" />
                <div className="space-y-4">
                  <MobileNavLink icon={<ShieldCheck size={20}/>} label="Customer Directory" path="/seller/customer-directory" close={() => setIsMobileMenuOpen(false)} />
                  {/* <MobileNavLink icon={<ListTree size={20}/>} label="Catalog Library" path="/seller/catalog" close={() => setIsMobileMenuOpen(false)} /> */}
                  {/* <MobileNavLink icon={<LayoutGrid size={20}/>} label="Master Data" path="/seller/catalog" close={() => setIsMobileMenuOpen(false)} /> */}
                </div>

                <div className="h-px bg-gray-100" />

                {/* Account & Settings */}
                <SectionHeader label="Settings & Wallet" />
                <div className="space-y-4">
                  <MobileNavLink icon={<SlidersHorizontal size={20}/>} label="Account Settings" path="/seller/company-information" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<Users size={20}/>} label="Users & Teams" path="/seller/users-Roles" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<Wallet size={20}/>} label="Wallet" path="/seller/wallet-home" close={() => setIsMobileMenuOpen(false)} />
                </div>

                <div className="h-px bg-gray-100" />

                {/* Support Section */}
                <SectionHeader label="Support" />
                <div className="space-y-4">
                  <MobileNavLink icon={<Bug size={20}/>} label="Report a Bug" path="/report-bug" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<MessageCircle size={20}/>} label="Live Chat" path="/chat" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<Phone size={20}/>} label="Whatsapp Support" path="/whatsapp" close={() => setIsMobileMenuOpen(false)} />
                  <MobileNavLink icon={<Eye size={20}/>} label="Notifications" close={() => setIsMobileMenuOpen(false)} />
                </div>

                {/* Sign Out */}
                <div className="pt-4 border-t">
                  <MobileNavLink icon={<LogOut size={20}/>} label="Sign Out" className="text-red-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* --- Updated Helper Components --- */

const DropdownWrapper = ({ children, width }) => (
  <div className={`${width} bg-white rounded-lg shadow-[0_10px_40px_rgba(0,0,0,0.15)] border border-gray-100 overflow-hidden`}>
    {children}
  </div>
);

const DropdownAction = ({ icon, label, path = "#" }) => (
  <Link to={path} className="flex flex-col items-center justify-center gap-3 p-2 hover:bg-gray-50 rounded-lg no-underline transition-all">
    <div className="hover:scale-110 transition-transform">{icon}</div>
    <span className="text-[11px] font-semibold text-gray-500 text-center leading-tight">{label}</span>
  </Link>
);

const SectionHeader = ({ label }) => (
  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.1em]">{label}</p>
);

const MobileNavLink = ({ icon, label, onClick, path, close, className = "" }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (path) {
      navigate(path);
      if (close) close();
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <button 
      onClick={handleClick} 
      className={`flex items-center gap-4 w-full text-left text-gray-600 hover:text-[#43624A] font-semibold text-base transition-colors ${className}`}
    >
      <span className="text-gray-400">{icon}</span> {label}
    </button>
  );
};

const NotificationItem = ({ id, text }) => (
  <div className="text-left border-b border-gray-50 last:border-0 pb-3">
    <p className="text-[13px] font-bold text-gray-800">RFQ Received</p>
    <p className="text-[11px] text-gray-500 mt-1 leading-relaxed">#{id} - {text}</p>
  </div>
);

export default Navbar;