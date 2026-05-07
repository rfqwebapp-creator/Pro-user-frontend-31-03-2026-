// import React, { useState } from 'react';
// import {
//   Search,
//   Filter,
//   Plus,
//   ChevronDown,
//   RotateCcw,
//   Eye,
//   Trash2,
//   Menu,
//   X,
// } from 'lucide-react';
// import { useNavigate } from 'react-router-dom';
// import BuyerSettingsSidebar from './sidebar-settings';

// const BuyerSupplierDirectory = () => {
//   const navigate = useNavigate();
//   const [showAdvanced, setShowAdvanced] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const suppliers = [
//     { id: 1, name: '.HYPEWAVE MEDIA', cr: '134150-3', vat: 'N/A', country: 'Bahrain', quotations: 0, contact: 'hype@media.com', initial: 'H', color: 'bg-purple-200' },
//     { id: 2, name: 'ARVENTA TECHNIS W.L.L', cr: '191373-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '+973 33445566', initial: 'A', color: 'bg-blue-500' },
//     { id: 3, name: 'BRONZE FIX SPARE PARTS & REPAIR', cr: '22755-4', vat: '000000000000000', country: 'Bahrain', quotations: 0, contact: 'info@bronzefix.com', initial: 'B', color: 'bg-pink-500' },
//     { id: 4, name: 'CENTURY TRADING HOUSE CO W.L.L', cr: '58747-1', vat: '200011536600002', country: 'Bahrain', quotations: 0, contact: '-', initial: 'C', color: 'bg-teal-500' },
//   ];

//   return (
//     <div className="flex min-h-screen bg-[#F5F2EA] relative">
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black/50 lg:hidden z-30"
//           onClick={() => setSidebarOpen(false)}
//         />
//       )}

//       <div
//         className={`fixed lg:static left-0 top-0 h-screen w-64 lg:w-auto z-40 transform transition-transform duration-300 ${
//           sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
//         }`}
//       >
//         <BuyerSettingsSidebar />
//       </div>

//       <div className="min-h-screen bg-[#F5F2EA] w-full font-sans text-[#2A2A2A] p-4 sm:p-6 lg:p-8">
//         <div className="flex lg:hidden items-center gap-2 mb-4">
//           <button
//             onClick={() => setSidebarOpen(!sidebarOpen)}
//             className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
//           >
//             {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
//           <div>
//             <h1 className="text-3xl lg:text-4xl font-bold text-[#2A2A2A]">
//               Supplier Directory
//             </h1>
//             <p className="text-sm text-gray-600 mt-1">
//               Manage your supplier relationships, contacts, and vetting status.
//             </p>
//           </div>

//           <button
//             onClick={() => navigate('/add-supplier')}
//             className="inline-flex w-fit items-center justify-center gap-2 bg-[#43624A] hover:bg-[#354d3a] text-white px-5 py-2.5 rounded-lg transition-colors shadow-sm font-medium text-sm"
//           >
//             <Plus size={16} />
//             Add Supplier
//           </button>
//         </div>

//         <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
//           <div className="p-4 sm:p-6 border-b border-gray-100">
//             <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
//               <div className="flex gap-6 overflow-x-auto">
//                 <button className="pb-2 border-b-2 border-[#43624A] text-[#43624A] font-semibold text-sm whitespace-nowrap">
//                   All
//                 </button>
//                 <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm whitespace-nowrap">
//                   My Suppliers
//                 </button>
//                 <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm whitespace-nowrap">
//                   Deleted
//                 </button>
//               </div>

//               <button
//                 onClick={() => setShowAdvanced(!showAdvanced)}
//                 className={`inline-flex w-fit items-center justify-center gap-2 border px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
//                   showAdvanced
//                     ? 'bg-[#43624A] text-white border-[#43624A]'
//                     : 'border-[#7A9C83] text-[#43624A] hover:bg-gray-50'
//                 }`}
//               >
//                 <Filter size={16} />
//                 <span>Filters</span>
//               </button>
//             </div>

//             {showAdvanced && (
//               <div className="mt-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
//                 <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:items-end">
//                   <div className="space-y-2 w-full">
//                     <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
//                       Classification <Search size={14} className="text-gray-400" />
//                     </label>
//                     <div className="relative">
//                       <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
//                         <option>No options selected</option>
//                       </select>
//                       <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
//                     </div>
//                   </div>

//                   <div className="flex gap-2">
//                     <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
//                       <Search size={16} />
//                     </button>
//                     <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
//                       <RotateCcw size={16} />
//                     </button>
//                   </div>

//                   <div className="space-y-2 w-full">
//                     <label className="text-sm font-semibold text-gray-700">
//                       Vetting Status
//                     </label>
//                     <div className="relative">
//                       <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
//                         <option>Select vetting status</option>
//                         <option>Blacklist</option>
//                         <option>Watchlist</option>
//                       </select>
//                       <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           <div className="overflow-x-auto">
//             <table className="w-full text-left border-collapse min-w-full">
//               <thead className="hidden md:table-header-group">
//                 <tr className="text-gray-500 text-xs uppercase tracking-wider border-b bg-gray-50/50">
//                   <th className="px-6 py-4 font-bold w-16">·</th>
//                   <th className="px-6 py-4 font-bold">Name</th>
//                   <th className="px-6 py-4 font-bold">Country</th>
//                   <th className="px-6 py-4 font-bold text-center whitespace-nowrap">Quotes</th>
//                   <th className="px-6 py-4 font-bold">Contact</th>
//                   <th className="px-6 py-4 font-bold">Vetting</th>
//                   <th className="px-6 py-4 font-bold text-right">Actions</th>
//                 </tr>
//               </thead>

//               <tbody className="divide-y divide-gray-100">
//                 {suppliers.map((s) => (
//                   <tr
//                     key={s.id}
//                     className="hover:bg-gray-50/80 transition-colors group md:table-row block mb-4 md:mb-0 bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-none border-gray-200 p-4 md:p-0"
//                   >
//                     <td className="md:hidden block mb-3 pb-3 border-b border-gray-100">
//                       <div className="flex items-center justify-between">
//                         <div className="flex items-center gap-2">
//                           <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-sm`}>
//                             {s.initial}
//                           </div>
//                           <div>
//                             <div className="font-bold text-sm text-[#2A2A2A]">{s.name}</div>
//                             <div className="text-[10px] text-gray-500">CR: {s.cr}</div>
//                           </div>
//                         </div>

//                         <div className="flex justify-end gap-1">
//                           <button
//                             onClick={() => navigate(`/view-supplier/${s.id}`)}
//                             className="p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all"
//                           >
//                             <Eye size={14} />
//                           </button>
//                           <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
//                             <Trash2 size={14} />
//                           </button>
//                         </div>
//                       </div>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5">
//                       <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-sm`}>
//                         {s.initial}
//                       </div>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5">
//                       <div className="font-bold text-sm text-[#2A2A2A]">{s.name}</div>
//                       <div className="text-[10px] text-gray-500">CR: {s.cr}</div>
//                       <div className="text-[10px] text-gray-500">VAT: {s.vat}</div>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5">
//                       <div className="flex items-center gap-1 text-sm">
//                         <span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span>
//                         {s.country}
//                       </div>
//                     </td>

//                     <td className="md:hidden block before:content-['Country:'] before:font-bold before:mr-2 text-sm text-gray-600">
//                       <span className="inline-flex items-center gap-1">
//                         <span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span>
//                         {s.country}
//                       </span>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5 text-center">
//                       <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-xs whitespace-nowrap inline-block">
//                         {s.quotations}
//                       </span>
//                     </td>

//                     <td className="md:hidden block before:content-['Quotes:'] before:font-bold before:mr-2 text-sm">
//                       <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-full text-xs inline-block">
//                         {s.quotations}
//                       </span>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5">
//                       <div className="text-xs text-gray-600 truncate max-w-[150px]">
//                         {s.contact}
//                       </div>
//                     </td>

//                     <td className="md:hidden block before:content-['Contact:'] before:font-bold before:mr-2 text-xs text-gray-600 break-words">
//                       {s.contact}
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5">
//                       <div className="relative inline-block w-full max-w-[150px]">
//                         <select className="appearance-none w-full border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
//                           <option value="">Select Status</option>
//                           <option>Blacklist</option>
//                           <option>Watchlist</option>
//                         </select>
//                         <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </td>

//                     <td className="md:hidden block before:content-['Vetting:'] before:font-bold before:mr-2">
//                       <div className="relative inline-block w-full max-w-[120px]">
//                         <select className="appearance-none w-full border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
//                           <option value="">Select Status</option>
//                           <option>Blacklist</option>
//                           <option>Watchlist</option>
//                         </select>
//                         <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
//                       </div>
//                     </td>

//                     <td className="hidden md:table-cell px-6 py-5 text-right">
//                       <div className="flex justify-end gap-1">
//                         <button
//                           onClick={() => navigate(`/view-supplier/${s.id}`)}
//                           className="p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all"
//                         >
//                           <Eye size={14} />
//                         </button>
//                         <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
//                           <Trash2 size={14} />
//                         </button>
//                       </div>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>

//           <div className="p-4 sm:p-6 flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-100">
//             <span className="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left order-2 sm:order-1">
//               Showing 1 to 10 of 3,185 entries
//             </span>

//             <div className="flex items-center gap-1 overflow-x-auto order-1 sm:order-2">
//               <button className="px-3 sm:px-4 py-2 border rounded-l-xl bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold hover:bg-blue-100 whitespace-nowrap">
//                 Prev
//               </button>

//               {[1, 2, 3, 4, 5].map((page) => (
//                 <button
//                   key={page}
//                   className={`px-3 sm:px-4 py-2 border-y border-r text-xs sm:text-sm font-bold whitespace-nowrap ${
//                     page === 1
//                       ? 'bg-blue-600 text-white border-blue-600'
//                       : 'text-blue-600 hover:bg-gray-50'
//                   }`}
//                 >
//                   {page}
//                 </button>
//               ))}

//               <button className="px-3 sm:px-4 py-2 border border-l-0 rounded-r-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 whitespace-nowrap">
//                 Next
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerSupplierDirectory;





import React, { useState } from 'react';
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  RotateCcw,
  Eye,
  Trash2,
  Menu,
  X,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BuyerSettingsSidebar from './sidebar-settings';

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
    <div className="relative min-h-screen bg-[#F5F2EA]">

      {/* Blurred Page Content */}
      <div className="blur-sm pointer-events-none select-none">
        <div className="flex min-h-screen bg-[#F5F2EA] relative">
          {sidebarOpen && (
            <div
              className="fixed inset-0 bg-black/50 lg:hidden z-30"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <div
            className={`fixed lg:static left-0 top-0 h-screen w-64 lg:w-auto z-40 transform transition-transform duration-300 ${
              sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
            }`}
          >
            <BuyerSettingsSidebar />
          </div>

          <div className="min-h-screen bg-[#F5F2EA] w-full font-sans text-[#2A2A2A] p-4 sm:p-6 lg:p-8">
            <div className="flex lg:hidden items-center gap-2 mb-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
              >
                {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-[#2A2A2A]">
                  Supplier Directory
                </h1>
                <p className="text-sm text-gray-600 mt-1">
                  Manage your supplier relationships, contacts, and vetting status.
                </p>
              </div>

              <button
                onClick={() => navigate('/add-supplier')}
                className="inline-flex w-fit items-center justify-center gap-2 bg-[#43624A] hover:bg-[#354d3a] text-white px-5 py-2.5 rounded-lg transition-colors shadow-sm font-medium text-sm"
              >
                <Plus size={16} />
                Add Supplier
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                  <div className="flex gap-6 overflow-x-auto">
                    <button className="pb-2 border-b-2 border-[#43624A] text-[#43624A] font-semibold text-sm whitespace-nowrap">
                      All
                    </button>
                    <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm whitespace-nowrap">
                      My Suppliers
                    </button>
                    <button className="pb-2 text-gray-400 hover:text-[#7A9C83] transition-colors text-sm whitespace-nowrap">
                      Deleted
                    </button>
                  </div>

                  <button
                    onClick={() => setShowAdvanced(!showAdvanced)}
                    className={`inline-flex w-fit items-center justify-center gap-2 border px-4 py-2 rounded-lg transition-all duration-200 text-sm ${
                      showAdvanced
                        ? 'bg-[#43624A] text-white border-[#43624A]'
                        : 'border-[#7A9C83] text-[#43624A] hover:bg-gray-50'
                    }`}
                  >
                    <Filter size={16} />
                    <span>Filters</span>
                  </button>
                </div>

                {showAdvanced && (
                  <div className="mt-5 p-4 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 md:items-end">
                      <div className="space-y-2 w-full">
                        <label className="flex items-center gap-2 text-sm font-semibold text-gray-700">
                          Classification <Search size={14} className="text-gray-400" />
                        </label>
                        <div className="relative">
                          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                            <option>No options selected</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                          <Search size={16} />
                        </button>
                        <button className="p-2 border border-blue-200 bg-white rounded-lg text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
                          <RotateCcw size={16} />
                        </button>
                      </div>

                      <div className="space-y-2 w-full">
                        <label className="text-sm font-semibold text-gray-700">
                          Vetting Status
                        </label>
                        <div className="relative">
                          <select className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white text-gray-600 text-sm outline-none focus:ring-2 focus:ring-[#7A9C83]/50 appearance-none">
                            <option>Select vetting status</option>
                            <option>Blacklist</option>
                            <option>Watchlist</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-2.5 text-gray-400 pointer-events-none" size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-full">
                  <thead className="hidden md:table-header-group">
                    <tr className="text-gray-500 text-xs uppercase tracking-wider border-b bg-gray-50/50">
                      <th className="px-6 py-4 font-bold w-16">·</th>
                      <th className="px-6 py-4 font-bold">Name</th>
                      <th className="px-6 py-4 font-bold">Country</th>
                      <th className="px-6 py-4 font-bold text-center whitespace-nowrap">Quotes</th>
                      <th className="px-6 py-4 font-bold">Contact</th>
                      <th className="px-6 py-4 font-bold">Vetting</th>
                      <th className="px-6 py-4 font-bold text-right">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {suppliers.map((s) => (
                      <tr
                        key={s.id}
                        className="hover:bg-gray-50/80 transition-colors group md:table-row block mb-4 md:mb-0 bg-white md:bg-transparent rounded-lg md:rounded-none border md:border-none border-gray-200 p-4 md:p-0"
                      >
                        <td className="md:hidden block mb-3 pb-3 border-b border-gray-100">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-sm`}>
                                {s.initial}
                              </div>
                              <div>
                                <div className="font-bold text-sm text-[#2A2A2A]">{s.name}</div>
                                <div className="text-[10px] text-gray-500">CR: {s.cr}</div>
                              </div>
                            </div>

                            <div className="flex justify-end gap-1">
                              <button
                                onClick={() => navigate(`/view-supplier/${s.id}`)}
                                className="p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all"
                              >
                                <Eye size={14} />
                              </button>
                              <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </div>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5">
                          <div className={`w-10 h-10 rounded-full ${s.color} flex items-center justify-center text-white font-bold shadow-sm text-sm`}>
                            {s.initial}
                          </div>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5">
                          <div className="font-bold text-sm text-[#2A2A2A]">{s.name}</div>
                          <div className="text-[10px] text-gray-500">CR: {s.cr}</div>
                          <div className="text-[10px] text-gray-500">VAT: {s.vat}</div>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5">
                          <div className="flex items-center gap-1 text-sm">
                            <span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span>
                            {s.country}
                          </div>
                        </td>

                        <td className="md:hidden block before:content-['Country:'] before:font-bold before:mr-2 text-sm text-gray-600">
                          <span className="inline-flex items-center gap-1">
                            <span className="w-2.5 h-2 bg-[#BE1E2D] block rounded-[1px]"></span>
                            {s.country}
                          </span>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5 text-center">
                          <span className="text-blue-600 font-bold bg-blue-50 px-3 py-1 rounded-full text-xs whitespace-nowrap inline-block">
                            {s.quotations}
                          </span>
                        </td>

                        <td className="md:hidden block before:content-['Quotes:'] before:font-bold before:mr-2 text-sm">
                          <span className="text-blue-600 font-bold bg-blue-50 px-2 py-1 rounded-full text-xs inline-block">
                            {s.quotations}
                          </span>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5">
                          <div className="text-xs text-gray-600 truncate max-w-[150px]">
                            {s.contact}
                          </div>
                        </td>

                        <td className="md:hidden block before:content-['Contact:'] before:font-bold before:mr-2 text-xs text-gray-600 break-words">
                          {s.contact}
                        </td>

                        <td className="hidden md:table-cell px-6 py-5">
                          <div className="relative inline-block w-full max-w-[150px]">
                            <select className="appearance-none w-full border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
                              <option value="">Select Status</option>
                              <option>Blacklist</option>
                              <option>Watchlist</option>
                            </select>
                            <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
                          </div>
                        </td>

                        <td className="md:hidden block before:content-['Vetting:'] before:font-bold before:mr-2">
                          <div className="relative inline-block w-full max-w-[120px]">
                            <select className="appearance-none w-full border border-gray-200 rounded-lg px-2 py-1 text-xs outline-none bg-white pr-5 focus:border-[#7A9C83]">
                              <option value="">Select Status</option>
                              <option>Blacklist</option>
                              <option>Watchlist</option>
                            </select>
                            <ChevronDown size={10} className="absolute right-1 top-2 text-gray-400 pointer-events-none" />
                          </div>
                        </td>

                        <td className="hidden md:table-cell px-6 py-5 text-right">
                          <div className="flex justify-end gap-1">
                            <button
                              onClick={() => navigate(`/view-supplier/${s.id}`)}
                              className="p-2 text-gray-400 hover:text-[#43624A] hover:bg-gray-100 rounded-full transition-all"
                            >
                              <Eye size={14} />
                            </button>
                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-all">
                              <Trash2 size={14} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-4 sm:p-6 flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-gray-100">
                <span className="text-xs sm:text-sm text-gray-500 font-medium text-center sm:text-left order-2 sm:order-1">
                  Showing 1 to 10 of 3,185 entries
                </span>

                <div className="flex items-center gap-1 overflow-x-auto order-1 sm:order-2">
                  <button className="px-3 sm:px-4 py-2 border rounded-l-xl bg-blue-50 text-blue-600 text-xs sm:text-sm font-bold hover:bg-blue-100 whitespace-nowrap">
                    Prev
                  </button>

                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`px-3 sm:px-4 py-2 border-y border-r text-xs sm:text-sm font-bold whitespace-nowrap ${
                        page === 1
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'text-blue-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button className="px-3 sm:px-4 py-2 border border-l-0 rounded-r-xl bg-blue-600 text-white text-xs sm:text-sm font-bold hover:bg-blue-700 whitespace-nowrap">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
     {/* Popup Overlay */}
<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
  <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border border-gray-200">

    <h2 className="text-xl font-bold text-gray-800 mb-3">
      Feature Locked 🔒
    </h2>

    <p className="text-gray-600 text-sm leading-6 mb-6">
      Kindly mail us to{" "}
      <a
        href="mailto:hello@procubid.com"
        className="font-semibold text-[#43624A] underline"
      >
        hello@procubid.com
      </a>{" "}
      to activate this segment/feature.
    </p>

    <div className="flex gap-3 justify-center mt-4">
      <button
        onClick={() => navigate(-1)}
        className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-semibold"
      >
        Cancel
      </button>

      <a
        href="mailto:hello@procubid.com"
        className="px-6 py-2 rounded-lg text-white font-semibold bg-[#43624A] hover:opacity-90 transition"
      >
        Mail Now
      </a>
    </div>

  </div>
</div>
    </div>
  );
};

export default BuyerSupplierDirectory;