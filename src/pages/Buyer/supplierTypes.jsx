// import React, { useState } from 'react';
// import { Search, ChevronUp, ChevronDown, MoreHorizontal } from 'lucide-react';
// import BuyerSettingsSidebar from "./sidebar-settings";

// const BuyerSupplierTypesTable = () => {
//   const [entries, setEntries] = useState(50);
//   const [searchTerm, setSearchTerm] = useState('');

//   const supplierData = [
//     { type: "Authorized Distributor", desc: "Licensed or authorized local distributor or reseller of a product produced by an OEM" },
//     { type: "Manufacturer", desc: "Suppliers that are original or direct manufacturers of the product being offered" },
//     { type: "Producer", desc: "Non-manufacturing producers of goods, such as farms, mining firms, or extraction businesses" },
//     { type: "Retailer", desc: "Seller of goods in small quantities direct to end consumer" },
//     { type: "Service Provider", desc: "Suppliers or vendor that primarily provides a service as opposed to products or goods" },
//     { type: "Wholesaler", desc: "Seller or provider of goods in bulk, direct from the manufacturer" },
//   ];

//   return (
//      <div className="flex min-h-screen bg-[#F5F2EA]">
//       <BuyerSettingsSidebar />
    
//     <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 flex items-center justify-center font-sans">
//       <div className="max-w-6xl w-full bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-[#7A9C83]/20 overflow-hidden">
//         <div className="p-6 md:p-8 flex flex-col lg:flex-row gap-8">
          
//           {/* Left Sidebar Info */}
//           <div className="lg:w-1/4 space-y-4">
//             <h2 className="text-2xl font-bold text-[#2A2A2A]">Supplier Types</h2>
//             <p className="text-sm text-[#43624A] leading-relaxed">
//               Add labels and qualifiers to your supplier to enable faceted search. 
//               Multiple supplier type labels can be applied to a single supplier.
//             </p>
//           </div>

//           {/* Right Table Section */}
//           <div className="lg:w-3/4">
//             {/* Table Controls */}
//             <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
//               <div className="flex items-center gap-2 text-sm text-[#43624A]">
//                 <span>Show</span>
//                 <select 
//                   value={entries} 
//                   onChange={(e) => setEntries(e.target.value)}
//                   className="bg-white border border-[#7A9C83] rounded px-2 py-1 outline-none focus:ring-2 focus:ring-[#43624A]/20"
//                 >
//                   <option value={10}>10</option>
//                   <option value={25}>25</option>
//                   <option value={50}>50</option>
//                 </select>
//                 <span>entries</span>
//               </div>

//               <div className="relative w-full sm:w-64">
//                 <input
//                   type="text"
//                   placeholder="Search..."
//                   className="w-full pl-10 pr-4 py-2 bg-white border border-[#7A9C83] rounded-lg text-sm focus:ring-2 focus:ring-[#43624A] outline-none transition-all"
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                 />
//                 <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#7A9C83]" />
//               </div>
//             </div>

//             {/* Responsive Table Wrapper */}
//             <div className="overflow-x-auto rounded-lg border border-[#7A9C83]/30">
//               <table className="w-full text-left border-collapse bg-white/50">
//                 <thead>
//                   <tr className="border-b-2 border-[#43624A]">
//                     <th className="p-4 text-sm font-semibold text-[#2A2A2A] cursor-pointer hover:bg-[#7A9C83]/10 transition-colors">
//                       <div className="flex items-center gap-2">
//                         Supplier Type <ChevronUp className="h-4 w-4 text-[#43624A]" />
//                       </div>
//                     </th>
//                     <th className="p-4 text-sm font-semibold text-[#2A2A2A]">
//                       Description
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-[#7A9C83]/20">
//                   {supplierData.map((item, index) => (
//                     <tr key={index} className="hover:bg-[#7A9C83]/5 transition-colors group">
//                       <td className="p-4 text-sm font-medium text-[#2A2A2A] align-top whitespace-nowrap">
//                         {item.type}
//                       </td>
//                       <td className="p-4 text-sm text-[#43624A] leading-relaxed">
//                         {item.desc}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>

//             {/* Pagination */}
//             <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
//               <p className="text-sm text-[#43624A]">
//                 Showing 1 to 6 of 6 entries
//               </p>
//               <div className="flex items-center gap-1">
//                 <button className="px-4 py-2 text-sm font-medium text-white bg-[#7A9C83] rounded-lg opacity-50 cursor-not-allowed">
//                   Previous
//                 </button>
//                 <button className="h-9 w-9 flex items-center justify-center text-sm font-medium text-white bg-[#43624A] rounded-lg shadow-md shadow-[#43624A]/20">
//                   1
//                 </button>
//                 <button className="px-4 py-2 text-sm font-medium text-white bg-[#7A9C83] rounded-lg hover:bg-[#43624A] transition-colors shadow-md shadow-[#7A9C83]/20">
//                   Next
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BuyerSupplierTypesTable;