// import React, { useState } from 'react';
// import BuyerSettingsSidebar from "./sidebar-settings";

// const BuyerPurchaseOrderDefault = () => {
//   const [enabled, setEnabled] = useState(false);

//   // Custom Colors from your palette
//   const colors = {
//     dark: '#2A2A2A',
//     deepGreen: '#43624A',
//     sage: '#7A9C83',
//     offWhite: '#F5F2EA',
//   };

//   return (
//     /* 1. Main Wrapper: flex ensures sidebar and content are side-by-side */
//     <div className="flex h-screen overflow-hidden" style={{ backgroundColor: colors.offWhite }}>
      
//       {/* Sidebar - Remains fixed width */}
//       <BuyerSettingsSidebar />

//       {/* 2. Content Area: flex-1 makes this section grow to fill the rest of the screen width */}
//       <div className="flex-1 overflow-y-auto">
//         <div className="p-4 md:p-8">
//           <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            
//             {/* Header Section */}
//             <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
//               <div>
//                 <h1 className="text-2xl font-semibold" style={{ color: colors.dark }}>
//                   Default Purchase Order Settings
//                 </h1>
//                 <p className="text-sm text-gray-500 mt-1">
//                   Enable or disable default values for Purchase Orders
//                 </p>
//               </div>
              
//               <div className="flex items-center gap-3">
//                 <span className="text-sm font-medium text-gray-600">
//                   {enabled ? 'Enabled' : 'Disabled'}
//                 </span>
//                 <button 
//                   onClick={() => setEnabled(!enabled)}
//                   className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
//                   style={{ backgroundColor: enabled ? colors.deepGreen : '#D1D5DB' }}
//                 >
//                   <span
//                     className={`${
//                       enabled ? 'translate-x-6' : 'translate-x-1'
//                     } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
//                   />
//                 </button>
//               </div>
//             </div>

//             {/* Form Content */}
//             <div className="p-6 md:p-8">
//               <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                
//                 {/* Left Column: Dropdowns */}
//                 <div className="lg:col-span-5 space-y-6">
//                   <h2 className="text-lg font-bold border-b-2 inline-block pb-1" 
//                       style={{ 
//                         color: colors.deepGreen, 
//                         borderImage: `linear-gradient(to right, ${colors.sage}, transparent) 1` 
//                       }}>
//                     Terms & Conditions
//                   </h2>

//                   <div className="space-y-4">
//                     <div>
//                       <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Payment Terms</label>
//                       <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none text-gray-600 appearance-none bg-no-repeat bg-[right_0.7rem_center] bg-[length:1em]" style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")' }}>
//                         <option>Select payment terms</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Delivery Terms</label>
//                       <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none text-gray-600 appearance-none bg-no-repeat bg-[right_0.7rem_center] bg-[length:1em]" style={{ backgroundImage: 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'currentColor\' stroke-width=\'2\' stroke-linecap=\'round\' stroke-linejoin=\'round\'%3e%3cpolyline points=\'6 9 12 15 18 9\'%3e%3c/polyline%3e%3c/svg%3e")' }}>
//                         <option>Select delivery terms</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Delivery Location</label>
//                       <input 
//                         type="text" 
//                         placeholder="Enter delivery location"
//                         className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 {/* Right Column: Rich Text Area */}
//                 <div className="lg:col-span-7">
//                   <label className="block text-sm font-semibold mb-2 text-gray-500">
//                     Additional Terms & Conditions <span className="font-normal">(Optional)</span>
//                   </label>
//                   <div className="border border-gray-200 rounded-lg overflow-hidden">
//                     <div className="bg-white border-b border-gray-200 p-2 flex gap-4 text-gray-600">
//                       <button className="hover:bg-gray-100 p-1 px-2 rounded font-bold">B</button>
//                       <button className="hover:bg-gray-100 p-1 px-2 rounded italic">I</button>
//                       <button className="hover:bg-gray-100 p-1 px-2 rounded">≣</button>
//                       <button className="hover:bg-gray-100 p-1 px-2 rounded">≡</button>
//                     </div>
//                     <textarea 
//                       className="w-full p-4 h-40 focus:outline-none resize-none text-gray-500"
//                       placeholder="Add any additional terms and conditions for suppliers..."
//                     ></textarea>
//                   </div>
//                 </div>
//               </div>

//               {/* Bottom Section */}
//               <div className="mt-12">
//                 <h2 className="text-lg font-bold border-b-2 inline-block pb-1 mb-6" 
//                     style={{ 
//                       color: colors.deepGreen, 
//                       borderImage: `linear-gradient(to right, ${colors.sage}, transparent) 1` 
//                     }}>
//                   Notes & Instructions
//                 </h2>
//                 <div className="border border-gray-200 rounded-lg overflow-hidden">
//                   <div className="bg-white border-b border-gray-200 p-2 flex gap-4 text-gray-600">
//                     <button className="hover:bg-gray-100 p-1 px-2 rounded font-bold">B</button>
//                     <button className="hover:bg-gray-100 p-1 px-2 rounded italic">I</button>
//                     <button className="hover:bg-gray-100 p-1 px-2 rounded">≣</button>
//                     <button className="hover:bg-gray-100 p-1 px-2 rounded">≡</button>
//                   </div>
//                   <textarea 
//                     className="w-full p-4 h-40 focus:outline-none resize-none text-gray-500"
//                     placeholder="Add notes, purchase terms, or instructions for suppliers..."
//                   ></textarea>
//                 </div>
//               </div>

//               {/* Action Button */}
//               <div className="mt-8 flex justify-end">
//                 <button 
//                   className="px-8 py-2.5 rounded-lg font-semibold text-white transition-all hover:opacity-90 active:scale-95"
//                   style={{ backgroundColor: colors.deepGreen }}
//                 >
//                   Save
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BuyerPurchaseOrderDefault;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerPurchaseOrderDefault = () => {
  const navigate = useNavigate();

  const [enabled, setEnabled] = useState(false);

  const colors = {
    dark: '#2A2A2A',
    deepGreen: '#43624A',
    sage: '#7A9C83',
    offWhite: '#F5F2EA',
  };

  return (
    <div className="relative flex h-screen overflow-hidden" style={{ backgroundColor: colors.offWhite }}>
      
      {/* 🔵 BLUR CONTENT */}
      <div className="flex w-full h-full blur-sm pointer-events-none select-none">

        <BuyerSettingsSidebar />

        <div className="flex-1 overflow-y-auto">
          <div className="p-4 md:p-8">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              
              {/* Header */}
              <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h1 className="text-2xl font-semibold" style={{ color: colors.dark }}>
                    Default Purchase Order Settings
                  </h1>
                  <p className="text-sm text-gray-500 mt-1">
                    Enable or disable default values for Purchase Orders
                  </p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-sm font-medium text-gray-600">
                    {enabled ? 'Enabled' : 'Disabled'}
                  </span>
                  <button 
                    onClick={() => setEnabled(!enabled)}
                    className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none"
                    style={{ backgroundColor: enabled ? colors.deepGreen : '#D1D5DB' }}
                  >
                    <span
                      className={`${
                        enabled ? 'translate-x-6' : 'translate-x-1'
                      } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                  
                  {/* Left */}
                  <div className="lg:col-span-5 space-y-6">
                    <h2 className="text-lg font-bold border-b-2 inline-block pb-1" 
                      style={{ 
                        color: colors.deepGreen, 
                        borderImage: `linear-gradient(to right, ${colors.sage}, transparent) 1` 
                      }}>
                      Terms & Conditions
                    </h2>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Payment Terms</label>
                        <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none text-gray-600">
                          <option>Select payment terms</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Delivery Terms</label>
                        <select className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none text-gray-600">
                          <option>Select delivery terms</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold mb-2" style={{ color: colors.dark }}>Delivery Location</label>
                        <input 
                          type="text" 
                          placeholder="Enter delivery location"
                          className="w-full p-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-7">
                    <label className="block text-sm font-semibold mb-2 text-gray-500">
                      Additional Terms & Conditions
                    </label>
                    <textarea 
                      className="w-full p-4 h-40 border border-gray-200 rounded-lg"
                      placeholder="Add any additional terms..."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button 
                    className="px-8 py-2.5 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: colors.deepGreen }}
                  >
                    Save
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* 🔴 POPUP */}
      <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
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

            {/* 🔙 BACK BUTTON */}
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition"
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

export default BuyerPurchaseOrderDefault;