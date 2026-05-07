// import React, { useState } from 'react';
// import BuyerSettingsSidebar from "./sidebar-settings";

// const BuyerBidSettingsPage = () => {
//   const colors = {
//     dark: '#2A2A2A',
//     primary: '#43624A',
//     secondary: '#7A9C83',
//     background: '#F5F2EA',
//   };

//   const [bidStatus, setBidStatus] = useState('Open');
//   const [minAuthorizers, setMinAuthorizers] = useState(1);
  
//   const [authorizers, setAuthorizers] = useState([
//     { id: 1, name: 'das shanty', email: 'das.shanty@yateemac.net', isMandatory: false },
//     { id: 2, name: 'raid aljaabi', email: 'raid.aljaabi@yateemac.net', isMandatory: false },
//     { id: 3, name: 'ramani rengaraman', email: 'ramani@yateemac.net', isMandatory: false },
//     { id: 4, name: 'rosita evora', email: 'rosita.evora@yateemac.net', isMandatory: false },
//     { id: 5, name: 'odessa sioting', email: 'odessa.sioting@yateemac.net', isMandatory: false },
//     { id: 6, name: 'santosh chaubey', email: 'santosh.chaubey@yateemac.net', isMandatory: false },
//     { id: 7, name: 'Abijith Anil', email: 'abijith.a@yateemac.net', isMandatory: false },
//   ]);

//   const toggleMandatory = (id) => {
//     setAuthorizers(authorizers.map(auth => 
//       auth.id === id ? { ...auth, isMandatory: !auth.isMandatory } : auth
//     ));
//   };

//   return (
//     /* 1. Added h-screen and overflow-hidden to the wrapper */
//     <div className="flex h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
      
//       {/* Sidebar - assuming it has its own width defined internally */}
//       <BuyerSettingsSidebar />

//       {/* 2. Added flex-1 to take up remaining width and overflow-y-auto for scrolling */}
//       <main className="flex-1 h-full overflow-y-auto p-4 md:p-8 lg:p-12">
        
//         {/* 3. Changed max-w-4xl to max-w-full or a larger container if you want it to stretch more */}
//         <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          
//           <div className="p-6 md:p-10 space-y-8">
//             {/* BID Section */}
//             <section>
//               <h2 className="text-sm font-bold mb-4 tracking-wide" style={{ color: colors.dark }}>BID</h2>
//               <div className="flex flex-wrap gap-6 md:gap-12">
//                 {['Open', 'Close With OTP', 'Close Without OTP'].map((option) => (
//                   <label key={option} className="flex items-center cursor-pointer group">
//                     <div className="relative flex items-center justify-center">
//                       <input
//                         type="radio"
//                         className="sr-only"
//                         name="bid"
//                         value={option}
//                         checked={bidStatus === option}
//                         onChange={(e) => setBidStatus(e.target.value)}
//                       />
//                       <div className={`w-5 h-5 border-2 rounded-full transition-all ${bidStatus === option ? 'border-[#43624A]' : 'border-gray-300'}`}></div>
//                       {bidStatus === option && (
//                         <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
//                       )}
//                     </div>
//                     <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
//                       {option}
//                     </span>
//                   </label>
//                 ))}
//               </div>
//             </section>

//             <hr className="border-gray-100" />

//             {/* Minimum Required Authorizer Section */}
//             <section className="max-w-xs">
//               <label className="block text-sm font-semibold mb-3" style={{ color: colors.dark }}>
//                 Minimum Required Authorizer(s)
//               </label>
//               <input
//                 type="number"
//                 value={minAuthorizers}
//                 onChange={(e) => setMinAuthorizers(e.target.value)}
//                 className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all"
//                 style={{ focusRingColor: colors.secondary }}
//               />
//             </section>

//             {/* List of Authorizers Section */}
//             <section>
//               <div className="flex justify-between items-end mb-6">
//                 <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>List of Authorizer(s)</h2>
//                 <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
//                   <span>Is Mandatory</span>
//                   <input type="checkbox" className="rounded border-gray-300 shadow-none" disabled />
//                 </div>
//               </div>

//               <div className="divide-y divide-gray-100 border-t border-gray-100">
//                 {authorizers.map((auth) => (
//                   <div key={auth.id} className="py-4 flex justify-between items-center hover:bg-gray-50 transition-colors px-2 rounded-lg">
//                     <div>
//                       <p className="font-bold text-gray-800 capitalize">{auth.name}</p>
//                       <p className="text-sm text-gray-500">{auth.email}</p>
//                     </div>
//                     <input
//                       type="checkbox"
//                       checked={auth.isMandatory}
//                       onChange={() => toggleMandatory(auth.id)}
//                       className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83] cursor-pointer"
//                     />
//                   </div>
//                 ))}
//               </div>
//             </section>
//           </div>

//           {/* Footer Actions */}
//           <div className="bg-gray-50 px-6 py-4 flex justify-end gap-4 border-t border-gray-200">
//             <button className="px-6 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-200 transition-colors border border-gray-300 bg-white">
//               Cancel
//             </button>
//             <button 
//               className="px-8 py-2 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition-all transform active:scale-95"
//               style={{ backgroundColor: colors.primary }}
//             >
//               Save
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

export default BuyerBidSettingsPage;




import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerBidSettingsPage = () => {
  const navigate = useNavigate();

  const colors = {
    dark: '#2A2A2A',
    primary: '#43624A',
    secondary: '#7A9C83',
    background: '#F5F2EA',
  };

  const [bidStatus, setBidStatus] = useState('Open');
  const [minAuthorizers, setMinAuthorizers] = useState(1);
  
  const [authorizers, setAuthorizers] = useState([
    { id: 1, name: 'das shanty', email: 'das.shanty@yateemac.net', isMandatory: false },
    { id: 2, name: 'raid aljaabi', email: 'raid.aljaabi@yateemac.net', isMandatory: false },
    { id: 3, name: 'ramani rengaraman', email: 'ramani@yateemac.net', isMandatory: false },
    { id: 4, name: 'rosita evora', email: 'rosita.evora@yateemac.net', isMandatory: false },
    { id: 5, name: 'odessa sioting', email: 'odessa.sioting@yateemac.net', isMandatory: false },
    { id: 6, name: 'santosh chaubey', email: 'santosh.chaubey@yateemac.net', isMandatory: false },
    { id: 7, name: 'Abijith Anil', email: 'abijith.a@yateemac.net', isMandatory: false },
  ]);

  const toggleMandatory = (id) => {
    setAuthorizers(authorizers.map(auth => 
      auth.id === id ? { ...auth, isMandatory: !auth.isMandatory } : auth
    ));
  };

  return (
    <div className="relative flex h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>

      {/* BLURRED PAGE CONTENT */}
      <div className="flex w-full h-full blur-sm pointer-events-none select-none">

        <BuyerSettingsSidebar />

        <main className="flex-1 h-full overflow-y-auto p-4 md:p-8 lg:p-12">
          
          <div className="mx-auto max-w-5xl bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            
            <div className="p-6 md:p-10 space-y-8">

              <section>
                <h2 className="text-sm font-bold mb-4 tracking-wide" style={{ color: colors.dark }}>
                  BID
                </h2>

                <div className="flex flex-wrap gap-6 md:gap-12">
                  {['Open', 'Close With OTP', 'Close Without OTP'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          className="sr-only"
                          name="bid"
                          value={option}
                          checked={bidStatus === option}
                          onChange={(e) => setBidStatus(e.target.value)}
                        />
                        <div className={`w-5 h-5 border-2 rounded-full transition-all ${bidStatus === option ? 'border-[#43624A]' : 'border-gray-300'}`}></div>
                        {bidStatus === option && (
                          <div className="absolute w-2.5 h-2.5 rounded-full" style={{ backgroundColor: colors.primary }}></div>
                        )}
                      </div>

                      <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                        {option}
                      </span>
                    </label>
                  ))}
                </div>
              </section>

              <hr className="border-gray-100" />

              <section className="max-w-xs">
                <label className="block text-sm font-semibold mb-3" style={{ color: colors.dark }}>
                  Minimum Required Authorizer(s)
                </label>

                <input
                  type="number"
                  value={minAuthorizers}
                  onChange={(e) => setMinAuthorizers(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 transition-all"
                />
              </section>

              <section>
                <div className="flex justify-between items-end mb-6">
                  <h2 className="text-2xl font-bold" style={{ color: colors.dark }}>
                    List of Authorizer(s)
                  </h2>

                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
                    <span>Is Mandatory</span>
                    <input type="checkbox" className="rounded border-gray-300 shadow-none" disabled />
                  </div>
                </div>

                <div className="divide-y divide-gray-100 border-t border-gray-100">
                  {authorizers.map((auth) => (
                    <div key={auth.id} className="py-4 flex justify-between items-center hover:bg-gray-50 transition-colors px-2 rounded-lg">
                      <div>
                        <p className="font-bold text-gray-800 capitalize">{auth.name}</p>
                        <p className="text-sm text-gray-500">{auth.email}</p>
                      </div>

                      <input
                        type="checkbox"
                        checked={auth.isMandatory}
                        onChange={() => toggleMandatory(auth.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83] cursor-pointer"
                      />
                    </div>
                  ))}
                </div>
              </section>
            </div>

            <div className="bg-gray-50 px-6 py-4 flex justify-end gap-4 border-t border-gray-200">
              <button className="px-6 py-2 rounded-lg font-semibold text-gray-600 hover:bg-gray-200 transition-colors border border-gray-300 bg-white">
                Cancel
              </button>

              <button 
                className="px-8 py-2 rounded-lg font-semibold text-white shadow-md hover:opacity-90 transition-all transform active:scale-95"
                style={{ backgroundColor: colors.primary }}
              >
                Save
              </button>
            </div>

          </div>
        </main>
      </div>

      {/* POPUP OVERLAY */}
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

export default BuyerBidSettingsPage;