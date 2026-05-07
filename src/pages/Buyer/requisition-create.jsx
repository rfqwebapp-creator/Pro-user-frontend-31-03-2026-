// import React from 'react';
// import { Search, Plus, Calendar, Paperclip, RefreshCcw } from 'lucide-react';

// const BuyerPurchaseRequestForm = () => {
//   return (
//     <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
//       <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
        
//         {/* Header / Stepper */}
//         <div className="border-b border-gray-100 p-6">
//           <div className="flex justify-between items-center mb-8">
//             <button className="text-[#43624A] font-semibold flex items-center gap-2 hover:opacity-80">
//               <span>&larr;</span> BACK
//             </button>
//             <button className="border border-[#43624A] text-[#43624A] px-4 py-1.5 rounded flex items-center gap-2 hover:bg-[#F5F2EA] transition-colors">
//               <span className="text-lg">↓</span> Import
//             </button>
//           </div>

//           <div className="relative flex justify-between max-w-2xl mx-auto">
//             <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
//             <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-[#7A9C83] -translate-y-1/2 z-0"></div>
            
//             <Step label="Requisition Information" active />
//             <Step label="Requisition Details" />
//             <Step label="Requisition Approval" />
//           </div>
//         </div>

//         <div className="p-8">
//           <h1 className="text-2xl font-bold text-[#43624A] mb-8">Purchase Request Info</h1>

//           {/* Form Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
//             <div>
//               <label className="block text-sm font-medium mb-2">PR #</label>
//               <input type="text" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
//             </div>
//             <div className="md:col-span-2">
//               <label className="block text-sm font-medium mb-2">Title <span className="text-red-500">*</span></label>
//               <div className="relative">
//                 <input type="text" className="w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
//                 <RefreshCcw className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer" />
//               </div>
//             </div>
            
//             <div>
//               <label className="block text-sm font-medium mb-2">Request Type <span className="text-red-500">*</span></label>
//               <select className="w-full border border-gray-300 rounded-lg p-2.5 bg-white outline-none">
//                 <option>Please Select</option>
//               </select>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2 flex items-center gap-2">
//                 Procurement Classification <Search className="w-4 h-4 text-gray-400" />
//               </label>
//               <div className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-gray-500">
//                 No option(s) selected
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium mb-2 flex items-center gap-2">
//                 Cost Center(s) <Plus className="w-4 h-4 text-[#43624A] cursor-pointer" />
//               </label>
//               <div className="h-[46px]"></div> {/* Spacer */}
//             </div>
//           </div>

//           <h3 className="text-lg font-semibold text-[#43624A] mb-4">Items to be purchased</h3>
          
//           {/* Empty State */}
//           <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-100 rounded-xl mb-10">
//             <div className="bg-[#F5F2EA] p-4 rounded-full mb-4">
//                <Paperclip className="w-12 h-12 text-[#7A9C83]" />
//             </div>
//             <p className="text-gray-500 mb-4">No items added</p>
//             <button className="bg-[#43624A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2A2A2A] transition-colors flex items-center gap-2">
//               <Plus className="w-4 h-4" /> Add Item
//             </button>
//           </div>

//           {/* Bottom Section */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-10">
//             <div>
//               <h4 className="font-bold mb-4">Document Upload</h4>
//               <button className="border-2 border-[#7A9C83] text-[#43624A] px-6 py-2 rounded-lg font-medium hover:bg-[#F5F2EA] transition-all">
//                 Upload File
//               </button>
//             </div>

//             <div className="space-y-6">
//               <div>
//                 <label className="block text-sm font-medium mb-2">Required by Date</label>
//                 <div className="relative">
//                   <input type="text" placeholder="dd/mm/yyyy --:-- --" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
//                   <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
//                 </div>
//               </div>
//               <label className="flex items-center gap-2 cursor-pointer">
//                 <input type="checkbox" className="w-4 h-4 accent-[#43624A]" />
//                 <span className="text-sm">Mark as Urgent</span>
//               </label>
//               <div>
//                 <label className="block text-sm font-medium mb-2">Reason to Purchase</label>
//                 <select className="w-full border border-gray-300 rounded-lg p-2.5 bg-white">
//                   <option>New Requirement</option>
//                 </select>
//               </div>
//             </div>

//             <div>
//               <h4 className="font-bold mb-4">Purchase Justification - Internal Use Only</h4>
//               <div className="border border-gray-300 rounded-lg overflow-hidden">
//                 <div className="bg-gray-50 border-b border-gray-300 p-2 flex gap-4 text-gray-600">
//                   <span className="font-bold border-r pr-4">B</span>
//                   <span className="italic border-r pr-4">I</span>
//                   <span className="text-xs">≡</span>
//                 </div>
//                 <textarea className="w-full p-4 h-32 outline-none text-sm" placeholder="Optional: Provide any additional notes."></textarea>
//               </div>
//             </div>
//           </div>

//           {/* Footer Actions */}
//           <div className="flex justify-end gap-4 mt-12">
//             <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
//             <button className="px-6 py-2 border border-[#43624A] text-[#43624A] rounded-lg font-medium hover:bg-[#F5F2EA]">Save</button>
//             <button className="px-8 py-2 bg-[#43624A] text-white rounded-lg font-medium hover:bg-[#2A2A2A] shadow-md transition-all">Save & Continue</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Step = ({ label, active }) => (
//   <div className="relative z-10 flex flex-col items-center">
//     <div className={`w-4 h-4 rounded-full border-2 ${active ? 'bg-[#7A9C83] border-[#7A9C83]' : 'bg-white border-gray-300'}`}></div>
//     <span className={`absolute top-6 whitespace-nowrap text-xs font-medium ${active ? 'text-[#43624A]' : 'text-gray-400'}`}>
//       {label}
//     </span>
//   </div>
// );

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Plus, Calendar, Paperclip, RefreshCcw } from 'lucide-react';

const BuyerPurchaseRequestForm = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden bg-[#F5F2EA]">

      {/* Blurred Page Content */}
      <div className="blur-sm pointer-events-none select-none">
        <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans text-[#2A2A2A]">
          <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
            
            {/* Header / Stepper */}
            <div className="border-b border-gray-100 p-6">
              <div className="flex justify-between items-center mb-8">
                <button className="text-[#43624A] font-semibold flex items-center gap-2 hover:opacity-80">
                  <span>&larr;</span> BACK
                </button>
                <button className="border border-[#43624A] text-[#43624A] px-4 py-1.5 rounded flex items-center gap-2 hover:bg-[#F5F2EA] transition-colors">
                  <span className="text-lg">↓</span> Import
                </button>
              </div>

              <div className="relative flex justify-between max-w-2xl mx-auto">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>
                <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-[#7A9C83] -translate-y-1/2 z-0"></div>
                
                <Step label="Requisition Information" active />
                <Step label="Requisition Details" />
                <Step label="Requisition Approval" />
              </div>
            </div>

            <div className="p-8">
              <h1 className="text-2xl font-bold text-[#43624A] mb-8">Purchase Request Info</h1>

              {/* Form Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                <div>
                  <label className="block text-sm font-medium mb-2">PR #</label>
                  <input type="text" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium mb-2">Title <span className="text-red-500">*</span></label>
                  <div className="relative">
                    <input type="text" className="w-full border border-gray-300 rounded-lg p-2.5 pr-10 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
                    <RefreshCcw className="absolute right-3 top-3 w-4 h-4 text-gray-400 cursor-pointer" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Request Type <span className="text-red-500">*</span></label>
                  <select className="w-full border border-gray-300 rounded-lg p-2.5 bg-white outline-none">
                    <option>Please Select</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    Procurement Classification <Search className="w-4 h-4 text-gray-400" />
                  </label>
                  <div className="w-full border border-gray-200 bg-gray-50 rounded-lg p-2.5 text-gray-500">
                    No option(s) selected
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 flex items-center gap-2">
                    Cost Center(s) <Plus className="w-4 h-4 text-[#43624A] cursor-pointer" />
                  </label>
                  <div className="h-[46px]"></div> {/* Spacer */}
                </div>
              </div>

              <h3 className="text-lg font-semibold text-[#43624A] mb-4">Items to be purchased</h3>
              
              {/* Empty State */}
              <div className="flex flex-col items-center justify-center py-12 border-2 border-dashed border-gray-100 rounded-xl mb-10">
                <div className="bg-[#F5F2EA] p-4 rounded-full mb-4">
                  <Paperclip className="w-12 h-12 text-[#7A9C83]" />
                </div>
                <p className="text-gray-500 mb-4">No items added</p>
                <button className="bg-[#43624A] text-white px-6 py-2 rounded-lg font-medium hover:bg-[#2A2A2A] transition-colors flex items-center gap-2">
                  <Plus className="w-4 h-4" /> Add Item
                </button>
              </div>

              {/* Bottom Section */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-10">
                <div>
                  <h4 className="font-bold mb-4">Document Upload</h4>
                  <button className="border-2 border-[#7A9C83] text-[#43624A] px-6 py-2 rounded-lg font-medium hover:bg-[#F5F2EA] transition-all">
                    Upload File
                  </button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Required by Date</label>
                    <div className="relative">
                      <input type="text" placeholder="dd/mm/yyyy --:-- --" className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-[#7A9C83] outline-none" />
                      <Calendar className="absolute right-3 top-3 w-4 h-4 text-gray-400" />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#43624A]" />
                    <span className="text-sm">Mark as Urgent</span>
                  </label>
                  <div>
                    <label className="block text-sm font-medium mb-2">Reason to Purchase</label>
                    <select className="w-full border border-gray-300 rounded-lg p-2.5 bg-white">
                      <option>New Requirement</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-4">Purchase Justification - Internal Use Only</h4>
                  <div className="border border-gray-300 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 border-b border-gray-300 p-2 flex gap-4 text-gray-600">
                      <span className="font-bold border-r pr-4">B</span>
                      <span className="italic border-r pr-4">I</span>
                      <span className="text-xs">≡</span>
                    </div>
                    <textarea className="w-full p-4 h-32 outline-none text-sm" placeholder="Optional: Provide any additional notes."></textarea>
                  </div>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end gap-4 mt-12">
                <button className="px-6 py-2 border border-gray-300 rounded-lg font-medium text-gray-600 hover:bg-gray-50">Cancel</button>
                <button className="px-6 py-2 border border-[#43624A] text-[#43624A] rounded-lg font-medium hover:bg-[#F5F2EA]">Save</button>
                <button className="px-8 py-2 bg-[#43624A] text-white rounded-lg font-medium hover:bg-[#2A2A2A] shadow-md transition-all">Save & Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>

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

const Step = ({ label, active }) => (
  <div className="relative z-10 flex flex-col items-center">
    <div className={`w-4 h-4 rounded-full border-2 ${active ? 'bg-[#7A9C83] border-[#7A9C83]' : 'bg-white border-gray-300'}`}></div>
    <span className={`absolute top-6 whitespace-nowrap text-xs font-medium ${active ? 'text-[#43624A]' : 'text-gray-400'}`}>
      {label}
    </span>
  </div>
);

export default BuyerPurchaseRequestForm;