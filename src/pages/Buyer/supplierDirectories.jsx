import React, { useState } from 'react';
import { Search, Filter, Plus, ChevronDown, RotateCcw, Eye, Trash2, Mail, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
 import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerSupplierDirectory = () => {
  const navigate = useNavigate();
  const [showAdvanced, setShowAdvanced] = useState(false);

  const suppliers = [
    { id: 1, name: '.HYPEWAVE MEDIA', cr: '134150-3', vat: 'N/A', country: 'Bahrain', quotations: 0, contact: 'hype@media.com', initial: 'H', color: 'bg-purple-200' },
    { id: 2, name: 'ARVENTA TECHNIS W.L.L', cr: '191373-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '+973 33445566', initial: 'A', color: 'bg-blue-500' },
    { id: 3, name: 'BRONZE FIX SPARE PARTS & REPAIR', cr: '22755-4', vat: '000000000000000', country: 'Bahrain', quotations: 0, contact: 'info@bronzefix.com', initial: 'B', color: 'bg-pink-500' },
    { id: 4, name: 'CENTURY TRADING HOUSE CO W.L.L', cr: '58747-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '-', initial: 'C', color: 'bg-teal-500' },
  ];

  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />
    
    <div className="min-h-screen bg-[#F5F2EA] w-full font-sans text-[#2A2A2A] p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6 sm:mb-8">
        <div className="flex-1">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#2A2A2A]">Supplier Directory</h1>
          <p className="text-sm sm:text-base text-gray-600 mt-1 hidden sm:block">Manage your supplier relationships, contacts, and vetting status.</p>
        </div>
        <button 
          onClick={() => navigate('/add-supplier')} 
          className="bg-[#43624A] hover:bg-[#354d3a] text-white px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm font-medium text-sm sm:text-base whitespace-nowrap w-full sm:w-auto"
        >
          <Plus size={16} className="sm:size-18" /> Add Supplier
        </button>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Tabs & Advanced Filters Toggle */}
        <div className="p-4 sm:p-6 border-b border-gray-100">
          <div className="flex flex-col gap-4 sm:gap-6">
            {/* Tabs - Scrollable on mobile */}
            <div className="flex gap-4 sm:gap-8 pb-2 overflow-x-auto sm:overflow-visible border-b sm:border-none -mx-4 sm:mx-0 px-4 sm:px-0">
              <button className="pb-2 border-b-2 border-[#43624A] text-[#43624A] font-semibold text-sm sm:text-base whitespace-nowrap">All Suppliers</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm sm:text-base whitespace-nowrap">My Suppliers</button>
              <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm sm:text-base whitespace-nowrap">Deleted Suppliers</button>
            </div>
            
            <button 
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`w-full sm:w-auto border px-3 sm:px-4 py-2 rounded-lg flex items-center justify-center sm:justify-start gap-2 transition-all duration-200 text-sm sm:text-base ${
                showAdvanced ? 'bg-[#43624A] text-white border-[#43624A]' : 'border-[#7A9C83] text-[#43624A] hover:bg-gray-50'
              }`}
            >
              <Filter size={16} className="sm:size-18" /> Advanced Filters
            </button>
          </div>

          {/* Advanced Filters Section */}
          {showAdvanced && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gray-50 rounded-xl border border-gray-100 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex flex-col gap-4">
                <div className="flex-1 space-y-2 w-full">
                  <label className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-700">
                    Procurement Classification <Search size={14} className="text-gray-400" />
                  </label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 bg-white text-gray-600 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>No options(s) selected</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={16} />
                  </div>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <button className="flex-1 sm:flex-none p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <Search size={18} className="mx-auto" />
                  </button>
                  <button className="flex-1 sm:flex-none p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                    <RotateCcw size={18} className="mx-auto" />
                  </button>
                </div>

                <div className="flex-1 space-y-2 w-full">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Vetting Status</label>
                  <div className="relative">
                    <select className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 bg-white text-gray-600 text-xs sm:text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                      <option>select vetting status</option>
                      <option>Blacklist</option>
                      <option>Watchlist</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-2.5 text-gray-400" size={16} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Table - Responsive with horizontal scroll on mobile */}
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-full lg:min-w-full">
            <thead>
              <tr className="text-gray-500 text-xs uppercase tracking-wider border-b bg-gray-50/50">
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold w-10 sm:w-12 lg:w-16">/</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold text-xs sm:text-sm">Name</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold hidden md:table-cell text-xs sm:text-sm">Country</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold text-center text-xs sm:text-sm whitespace-nowrap"># Quotes</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold hidden lg:table-cell text-xs sm:text-sm">Contact</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold hidden md:table-cell text-xs sm:text-sm">Vetting</th>
                <th className="px-3 sm:px-4 lg:px-6 py-3 sm:py-4 font-bold text-right text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {suppliers.map((s) => (
                <tr key={s.id} className="hover:bg-gray-50/80 transition-colors group">
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5">
                    <div className={`w-8 sm:w-10 lg:w-10 h-8 sm:h-10 lg:h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-xs sm:text-sm`}>
                      {s.initial}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5">
                    <div className="font-bold text-xs sm:text-sm text-[#2A2A2A]">{s.name}</div>
                    <div className="text-[10px] sm:text-[11px] text-gray-500">CR: {s.cr}</div>
                    <div className="text-[10px] sm:text-[11px] text-gray-500 hidden sm:block">VAT: {s.vat}</div>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5 hidden md:table-cell">
                    <div className="flex items-center gap-1.5 text-xs sm:text-sm">
                      <span className="w-3 h-2 bg-[#BE1E2D] block rounded-[1px]"></span> {s.country}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5 text-center">
                    <span className="text-blue-600 font-bold bg-blue-50 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs whitespace-nowrap">
                      {s.quotations}
                    </span>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5 hidden lg:table-cell">
                    <div className="text-[10px] sm:text-xs text-gray-600 truncate max-w-[120px] lg:max-w-[150px]">
                      {s.contact}
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5 hidden md:table-cell">
                    <div className="relative inline-block w-full max-w-[100px] lg:max-w-[150px]">
                      <select className="appearance-none w-full border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none bg-white pr-6 focus:border-[#7A9C83]">
                        <option value="">Select Status</option>
                        <option>Blacklist</option>
                        <option>Watchlist</option>
                      </select>
                      <ChevronDown size={12} className="absolute right-1.5 top-2.5 text-gray-400 pointer-events-none" />
                    </div>
                  </td>
                  <td className="px-3 sm:px-4 lg:px-6 py-4 sm:py-5 text-right">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => navigate(`/view-supplier/${s.id}`)} className="p-1.5 sm:p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all">
                        <Eye size={16} className="sm:size-18" />
                      </button>
                      <button className="p-1.5 sm:p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                        <Trash2 size={16} className="sm:size-18" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer/Pagination */}
        <div className="p-4 sm:p-6 flex flex-col gap-4 sm:gap-0 sm:flex-row justify-between items-center border-t border-gray-100">
          <span className="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left">Showing 1 to 10 of 3,185 entries</span>
          <div className="flex items-center gap-1 overflow-x-auto">
            <button className="px-2 sm:px-4 py-1.5 sm:py-2 border rounded-l-xl bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold hover:bg-blue-100 whitespace-nowrap">Previous</button>
            {[1, 2, 3, 4, 5].map(page => (
              <button key={page} className={`px-2 sm:px-4 py-1.5 sm:py-2 border-y border-r text-xs sm:text-sm font-bold whitespace-nowrap ${page === 1 ? 'bg-blue-600 text-white border-blue-600' : 'text-blue-600 hover:bg-gray-50'}`}>
                {page}
              </button>
            ))}
            <button className="px-2 sm:px-4 py-1.5 sm:py-2 border border-l-0 rounded-r-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 whitespace-nowrap">Next</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerSupplierDirectory;