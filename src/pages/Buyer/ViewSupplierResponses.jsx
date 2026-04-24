// import React, { useState } from "react";
// import { Download, ChevronDown, MessageCircle } from "lucide-react";

// export default function BuyerViewSupplierResponses() {
//   const [search, setSearch] = useState("");
//   const [entries, setEntries] = useState(5);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [selectedType, setSelectedType] = useState("");
//   const [supplierFilter, setSupplierFilter] = useState("");

//   const data = [
//     {
//       id: "78835",
//       type: "RFQ",
//       bidType: "Open",
//       title: 'Aluminium Filter Sheet 40"x64"x1" (10/Box)',
//       issue: "26-Feb-2026 2:47 PM",
//       closing: "05-Mar-2026 2:43 PM",
//       required: "08-Mar-2026 2:43 PM",
//       quotes: 3,
//       invited: 86,
//       messages: 0,
//       supplier: "ABC Suppliers",
//     },
//     {
//       id: "78842",
//       type: "RFQ",
//       bidType: "Open",
//       title: "215/55 R17 TIRE",
//       issue: "26-Feb-2026 2:21 PM",
//       closing: "01-Mar-2026 2:18 PM",
//       required: "01-Mar-2026 2:18 PM",
//       quotes: 1,
//       invited: 32,
//       messages: 0,
//       supplier: "Global Traders",
//     },
//   ];

//   // Filtering
//   const filteredData = data.filter((item) => {
//     const matchesSearch = Object.values(item)
//       .join(" ")
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     const matchesType = selectedType
//       ? item.type === selectedType
//       : true;

//     const matchesSupplier = supplierFilter
//       ? item.supplier.toLowerCase().includes(supplierFilter.toLowerCase())
//       : true;

//     return matchesSearch && matchesType && matchesSupplier;
//   });

//   // Pagination
//   const indexOfLast = currentPage * entries;
//   const indexOfFirst = indexOfLast - entries;
//   const currentData = filteredData.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(filteredData.length / entries);

//   return (
//     <div className="bg-[#F5F2EA] min-h-screen p-8">

//       {/* Header */}
//       <div className="mb-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-3xl font-semibold text-[#2A2A2A]">
//             View Supplier Responses
//           </h1>

//           <div className="flex gap-4">
//             <button className="flex items-center gap-2 border border-[#43624A] text-[#43624A] px-5 py-2 rounded-lg hover:bg-[#43624A] hover:text-white transition">
//               <Download size={18} />
//               Download
//             </button>

//             <div className="relative">
//               <select
//                 value={selectedType}
//                 onChange={(e) => setSelectedType(e.target.value)}
//                 className="appearance-none border border-gray-300 rounded-lg px-4 py-2 pr-8 bg-white"
//               >
//                 <option value="">Please Select</option>
//                 <option value="RFQ">RFQ</option>
//                 <option value="RFP">RFP</option>
//               </select>
//               <ChevronDown
//                 size={16}
//                 className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Supplier Filter */}
//         <div className="flex justify-end mt-4">
//           <input
//             type="text"
//             placeholder="Filter By Supplier Organization"
//             value={supplierFilter}
//             onChange={(e) => setSupplierFilter(e.target.value)}
//             className="w-80 border border-gray-300 rounded-lg px-4 py-3 bg-white"
//           />
//         </div>
//       </div>

//       {/* Show & Search */}
//       <div className="flex justify-between items-center mb-6">
//         <div className="flex items-center gap-2">
//           <span>Show</span>
//           <select
//             value={entries}
//             onChange={(e) => setEntries(Number(e.target.value))}
//             className="border border-gray-300 rounded px-2 py-1"
//           >
//             <option value={5}>5</option>
//             <option value={10}>10</option>
//               <option value={15}>15</option> 
//                <option value={20}>20</option>
//           </select>
//           <span>entries</span>
//         </div>

//         <div>
//           <span className="mr-2">Search:</span>
//           <input
//             type="text"
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="border border-gray-300 rounded px-3 py-1"
//           />
//         </div>
//       </div>

//       {/* Table */}
//       <div className="bg-white rounded-xl shadow border overflow-x-auto">
//         <table className="min-w-full text-sm">
//           <thead className="bg-[#F5F2EA] text-gray-700">
//             <tr className="text-left border-b">
//               <th className="px-6 py-4">RFX # </th>
//               <th className="px-6 py-4">Type </th>
//               <th className="px-6 py-4">Bid Type </th>
//               <th className="px-6 py-4">RFX Title # </th>
//               <th className="px-6 py-4">Issue Date </th>
//               <th className="px-6 py-4">Closing Date </th>
//               <th className="px-6 py-4">Required Date </th>
//               <th className="px-6 py-4">Quotes Received </th>
//               <th className="px-6 py-4">Status</th>
//               <th className="px-6 py-4">Invited Suppliers</th>
//               <th className="px-6 py-4 text-center">
//                 <MessageCircle size={18} />
//               </th>
//             </tr>
//           </thead>

//           <tbody>
//             {currentData.map((row, index) => (
//               <tr key={index} className="border-t hover:bg-[#F5F2EA]">
//                 <td className="px-6 py-4">{row.id}</td>
//                 <td className="px-6 py-4">{row.type}</td>
//                 <td className="px-6 py-4">{row.bidType}</td>
//                 <td className="px-6 py-4 text-[#43624A] font-medium">
//                   {row.title}
//                 </td>
//                 <td className="px-6 py-4">{row.issue}</td>
//                 <td className="px-6 py-4">{row.closing}</td>
//                 <td className="px-6 py-4">{row.required}</td>
//                 <td className="px-6 py-4">{row.quotes}</td>

//                 <td className="px-6 py-4">
//                   <div className="flex items-center gap-2 text-blue-600 font-medium">
//                     <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
//                     Quotation Received
//                   </div>
//                 </td>

//                 <td className="px-6 py-4 text-blue-600 underline cursor-pointer font-semibold">
//                   {row.invited}
//                 </td>

//                 <td className="px-6 py-4 text-center">
//                   {row.messages}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>

//         {/* Pagination */}
//         <div className="flex justify-between items-center p-4 border-t bg-[#F5F2EA]">
//           <span>
//             Showing {indexOfFirst + 1} to{" "}
//             {Math.min(indexOfLast, filteredData.length)} of{" "}
//             {filteredData.length} entries
//           </span>

//           <div className="flex gap-2">
//             {[...Array(totalPages)].map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => setCurrentPage(i + 1)}
//                 className={`px-3 py-1 rounded ${
//                   currentPage === i + 1
//                     ? "bg-[#7A9C83] text-white"
//                     : "border text-[#43624A]"
//                 }`}
//               >
//                 {i + 1}
//               </button>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }