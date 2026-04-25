import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, RotateCcw, Eye, Trash2, Mail, Phone, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerSupplierDirectory = () => {
  const navigate = useNavigate();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const suppliers = [
    { id: 1, name: '.HYPEWAVE MEDIA', cr: '134150-3', vat: 'N/A', country: 'Bahrain', quotations: 0, contact: 'hype@media.com', initial: 'H', color: 'bg-purple-200' },
    { id: 2, name: 'ARVENTA TECHNIS W.L.L', cr: '191373-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '+973 33445566', initial: 'A', color: 'bg-blue-500' },
    { id: 3, name: 'BRONZE FIX SPARE PARTS & REPAIR', cr: '22755-4', vat: '000000000000000', country: 'Bahrain', quotations: 0, contact: 'info@bronzefix.com', initial: 'B', color: 'bg-pink-500' },
    { id: 4, name: 'CENTURY TRADING HOUSE CO W.L.L', cr: '58747-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '-', initial: 'C', color: 'bg-teal-500' },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA] relative">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 lg:hidden z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      {/* Sidebar - Hidden on mobile, visible on lg+ */}
      <div className={`fixed lg:static left-0 top-0 h-screen w-64 lg:w-auto z-40 transform transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <BuyerSettingsSidebar />
      </div>
    
    <div className="min-h-screen bg-[#F5F2EA] w-full font-sans text-[#2A2A2A] p-3 xs:p-4 sm:p-6 lg:p-8">
      {/* Mobile Header with Menu Toggle */}
      <div className="flex lg:hidden items-center gap-2 mb-4">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Header */}
      <div className="flex flex-col xs:flex-row xs:justify-between xs:items-start gap-3 xs:gap-4 mb-5 xs:mb-6 sm:mb-8">
        <div className="flex-1 min-w-0">
          <h1 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A2A2A] truncate">Supplier Directory</h1>
          <p className="text-xs xs:text-sm sm:text-base text-gray-600 mt-1 hidden xs:block line-clamp-2">Manage your supplier relationships, contacts, and vetting status.</p>
        </div>
        <button 
          onClick={() => navigate('/add-supplier')} 
          className="bg-[#43624A] hover:bg-[#354d3a] text-white px-3 xs:px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm font-medium text-xs xs:text-sm sm:text-base whitespace-nowrap w-full xs:w-auto flex-shrink-0"
        >
          <Plus size={14} className="xs:size-16 sm:size-18" /> 
          <span className="hidden xs:inline">Add Supplier</span>
          <span className="xs:hidden">Add</span>
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Tabs & Advanced Filters Toggle */}
        <div className="p-3 xs:p-4 sm:p-6 border-b border-gray-100">
          <div className="flex flex-col gap-3 xs:gap-4 sm:gap-6">
            {/* Tabs - Scrollable on mobile */}
            <div className="flex gap-3 xs:gap-4 sm:gap-8 pb-2 overflow-x-auto sm:overflow-visible border-b sm:border-none -mx-3 xs:-mx-4 sm:mx-0 px-3 xs:px-4 sm:px-0">
              <button className="pb-2 border-b-2 border-[#43624A] text-[#43624A] font-semibold text-xs xs:text-sm sm:text-base whitespace-nowrap">All</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-xs xs:text-sm sm:text-base whitespace-nowrap">My Suppliers</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-xs xs:text-sm sm:text-base whitespace-nowrap hidden xs:inline-block">Deleted</button>
            </div>
            
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`w-full xs:w-auto border px-3 xs:px-4 py-2 rounded-lg flex items-center justify-center xs:justify-start gap-2 transition-all duration-200 text-xs xs:text-sm sm:text-base ${
                showAdvanced ? 'bg-[#43624A] text-white border-[#43624A]' : 'border-[#7A9C83] text-[#43624A] hover:bg-gray-50'
              }`}
            >
              <Filter size={14} className="xs:size-16 sm:size-18" /> 
              <span>Filters</span>
            </button>
          </div>

          {/* Advanced Filters Section */}
          {showAdvanced && (
            <div className="mt-3 xs:mt-4 sm:mt-6 p-3 xs:p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-3 xs:gap-4">
                <div className="flex-1 space-y-1.5 xs:space-y-2 w-full">
                  <label className="flex items-center gap-2 text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-700">
                    Classification <Search size={12} className="text-gray-400" />
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-white text-gray-600 text-[10px] xs:text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>No options selected</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2 xs:top-2.5 text-gray-400" size={14} />
                  </div>
                </div>

                <div className="flex gap-1.5 xs:gap-2 w-full xs:w-auto">
                  <button className="flex-1 xs:flex-none p-1.5 xs:p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <Search size={14} className="mx-auto xs:size-16" />
                  </button>
                  <button className="flex-1 xs:flex-none p-1.5 xs:p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <RotateCcw size={14} className="mx-auto xs:size-16" />
                  </button>
                </div>

                <div className="flex-1 space-y-1.5 xs:space-y-2 w-full">
                  <label className="text-[10px] xs:text-xs sm:text-sm font-semibold text-gray-700">Vetting Status</label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-2 xs:px-3 sm:px-4 py-1.5 xs:py-2 bg-white text-gray-600 text-[10px] xs:text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>Select vetting status</option>
                      <option>Blacklist</option>
                      <option>Watchlist</option>
                    </select>
                    <ChevronDown className="absolute right-2 top-2 xs:top-2.5 text-gray-400" size={14} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Table - Responsive with card view on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-full">
            <thead className="hidden md:table-header-group">
              <tr className="text-gray-500 text-[10px] xs:text-xs uppercase tracking-wider border-b bg-gray-50/50">
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold w-8 xs:w-10 sm:w-12 lg:w-16">·</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold">Name</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold">Country</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold text-center whitespace-nowrap">Quotes</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold">Contact</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold">Vetting</th>
                <th className="px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-4 font-bold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {suppliers.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/80 transition-colors group md:table-row block mb-3 xs:mb-4 md:mb-0 bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-none border-gray-200 p-3 xs:p-4 md:p-0">
                  {/* Mobile Card Header */}
                  <td className="md:hidden block mb-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className={`w-8 xs:w-10 h-8 xs:h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-xs xs:text-sm`}>
                          {s.initial}
                        </div>
                        <div>
                          <div className="font-bold text-xs xs:text-sm text-[#2A2A2A]">{s.name}</div>
                          <div className="text-[9px] xs:text-[10px] text-gray-500">CR: {s.cr}</div>
                        </div>
                      </div>
                      <div className="flex justify-end gap-1">
                        <button onClick={() => navigate(`/view-supplier/${s.id}`)} className="p-1.5 xs:p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all">
                          <Eye size={14} className="xs:size-16" />
                        </button>
                        <button className="p-1.5 xs:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                          <Trash2 size={14} className="xs:size-16" />
                        </button>
                      </div>
                    </div>
                  </td>

                  {/* Desktop Table Rows */}
                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5">
                    <div className={`w-8 xs:w-10 lg:w-10 h-8 xs:h-10 lg:h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-xs xs:text-sm`}>
                      {s.initial}
                    </div>
                  </td>
                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5">
                    <div className="font-bold text-xs xs:text-sm text-[#2A2A2A]">{s.name}</div>
                    <div className="text-[9px] xs:text-[10px] text-gray-500">CR: {s.cr}</div>
                    <div className="text-[9px] xs:text-[10px] text-gray-500">VAT: {s.vat}</div>
                  </td>
                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5">
                    <div className="flex items-center gap-1 text-xs xs:text-sm">
                      <span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span> {s.country}
                    </div>
                  </td>
                  <td className="md:hidden block before:content-['Country:'] before:font-bold before:mr-2 text-xs xs:text-sm text-gray-600">
                    <span className="inline-flex items-center gap-1"><span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span>{s.country}</span>
                  </td>

                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5 text-center">
                    <span className="text-blue-600 font-bold bg-blue-50 px-1.5 xs:px-2 sm:px-3 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs whitespace-nowrap inline-block">
                      {s.quotations}
                    </span>
                  </td>
                  <td className="md:hidden block before:content-['Quotes:'] before:font-bold before:mr-2 text-xs xs:text-sm">
                    <span className="text-blue-600 font-bold bg-blue-50 px-1.5 xs:px-2 py-0.5 xs:py-1 rounded-full text-[10px] xs:text-xs inline-block">
                      {s.quotations}
                    </span>
                  </td>

                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5">
                    <div className="text-[9px] xs:text-xs text-gray-600 truncate max-w-[100px] lg:max-w-[150px]">
                      {s.contact}
                    </div>
                  </td>
                  <td className="md:hidden block before:content-['Contact:'] before:font-bold before:mr-2 text-[9px] xs:text-xs text-gray-600 break-words">
                    {s.contact}
                  </td>

                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5">
                    <div className="relative inline-block w-full max-w-[90px] lg:max-w-[150px]">
                      <select className="appearance-none w-full border border-gray-200 rounded-lg px-1.5 xs:px-2 py-1 text-[9px] xs:text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
                        <option value="">Select Status</option>
                        <option>Blacklist</option>
                        <option>Watchlist</option>
                      </select>
                      <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                  <td className="md:hidden block before:content-['Vetting:'] before:font-bold before:mr-2">
                    <div className="relative inline-block w-full max-w-[120px]">
                      <select className="appearance-none w-full border border-gray-200 rounded-lg px-1.5 xs:px-2 py-1 text-[9px] xs:text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
                        <option value="">Select Status</option>
                        <option>Blacklist</option>
                        <option>Watchlist</option>
                      </select>
                      <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
                    </div>
                  </td>

                  <td className="hidden md:table-cell px-2 xs:px-3 sm:px-4 lg:px-6 py-2 xs:py-3 sm:py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => navigate(`/view-supplier/${s.id}`)} className="p-1.5 xs:p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all">
                        <Eye size={14} className="xs:size-16" />
                      </button>
                      <button className="p-1.5 xs:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                        <Trash2 size={14} className="xs:size-16" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer/Pagination */}
        <div className="p-3 xs:p-4 sm:p-6 flex flex-col gap-3 xs:gap-4 sm:gap-0 sm:flex-row justify-between items-center border-t border-gray-100">
          <span className="text-[10px] xs:text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left order-2 sm:order-1">Showing 1 to 10 of 3,185 entries</span>
          <div className="flex items-center gap-0.5 xs:gap-1 overflow-x-auto order-1 sm:order-2">
            <button className="px-1.5 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-2 border rounded-l-xl bg-blue-50 text-blue-600 text-[9px] xs:text-xs sm:text-sm font-bold hover:bg-blue-100 whitespace-nowrap">Prev</button>
            {[1, 2, 3, 4, 5].map(page => (
              <button key={page} className={`px-1 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-2 border-y border-r text-[9px] xs:text-xs sm:text-sm font-bold whitespace-nowrap ${page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}>
                {page}
              </button>
            ))}
            <button className="px-1.5 xs:px-2 sm:px-4 py-1 xs:py-1.5 sm:py-2 border border-l-0 rounded-r-xl bg-blue-600 text-white text-[9px] xs:text-xs sm:text-sm font-bold hover:bg-blue-700 whitespace-nowrap">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerSupplierDirectory;