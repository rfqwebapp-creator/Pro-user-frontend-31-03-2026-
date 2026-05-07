// import React, { useState } from "react";
// import { ArrowRight, ShieldCheck } from "lucide-react";
// import BuyerSettingsSidebar from "./sidebar-settings";

// const BuyerPOApprovalWorkflow = () => {
//   const [isEnabled, setIsEnabled] = useState(false);
//   const [requiredSignOffs, setRequiredSignOffs] = useState("3");
//   const [selectedApprovers, setSelectedApprovers] = useState([]);
//   const [approvalMode, setApprovalMode] = useState("sequential");

//   const directory = [
//     { id: 1, name: "das shanty", role: "Financial Controller" },
//     { id: 2, name: "raid aljaabi", role: "Operations Manager" },
//     { id: 3, name: "ramani rengaraman", role: "IT Head" },
//     { id: 4, name: "rosita evora", role: "Procurement Lead" },
//     { id: 5, name: "odessa sioting", role: "HR Director" },
//     { id: 6, name: "Shankar Durga Prasad Kadali", role: "General Manager" },
//     { id: 7, name: "Nishma B", role: "Audit Lead" },
//     { id: 8, name: "savio peters", role: "CEO" },
//   ];

//   const toggleApprover = (person) => {
//     if (selectedApprovers.find((a) => a.id === person.id)) {
//       setSelectedApprovers(
//         selectedApprovers.filter((a) => a.id !== person.id)
//       );
//     } else if (selectedApprovers.length < parseInt(requiredSignOffs)) {
//       setSelectedApprovers([...selectedApprovers, person]);
//     }
//   };

//   return (
//      /* 1. Added h-screen and overflow-hidden to the wrapper */
// <div className="flex h-screen overflow-hidden bg-[#F5F2EA]">          
//           {/* Sidebar - assuming it has its own width defined internally */}
//           <BuyerSettingsSidebar />
// <div className="flex-1 overflow-y-auto bg-[#F5F2EA] p-6 font-sans text-[#2A2A2A]">      <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

//         {/* Header */}
//         <div className="p-6 border-b border-gray-100">
//           <h1 className="text-2xl font-bold flex items-center gap-2">
//             <ShieldCheck className="text-[#43624A]" />
//             Purchase Order Approval Workflow
//           </h1>
//         </div>

//         <div className="p-6 space-y-8">

//           {/* Enable Workflow */}
//           <div className="flex items-center gap-3 p-4 bg-[#F5F2EA]/50 rounded-lg border border-[#7A9C83]/20">
//             <input
//               type="checkbox"
//               id="enable"
//               className="w-5 h-5 accent-[#43624A] cursor-pointer"
//               checked={isEnabled}
//               onChange={(e) => setIsEnabled(e.target.checked)}
//             />
//             <label htmlFor="enable" className="font-medium cursor-pointer">
//               Enable Approval Workflow
//             </label>
//           </div>

//           <div className={`${!isEnabled && "opacity-50 pointer-events-none"}`}>

//             {/* STEP 1 */}
//             <section className="space-y-4">
//               <div className="flex items-center gap-2">
//                 <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A2A2A] text-white text-xs">
//                   1
//                 </span>
//                 <h2 className="text-lg font-bold">Select Approvers</h2>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                 {/* Directory */}
//                 <div>
//                   <label className="block text-sm font-semibold text-gray-600 mb-2">
//                     Required sign-offs
//                   </label>

//                   <select
//                     value={requiredSignOffs}
//                     onChange={(e) => setRequiredSignOffs(e.target.value)}
//                     className="w-full p-2.5 border rounded-lg"
//                   >
//                     <option value="1">1 approval</option>
//                     <option value="2">2 approvals</option>
//                     <option value="3">3 approvals</option>
//                   </select>

//                   <p className="mt-2 text-xs text-gray-500 italic">
//                     Select up to {requiredSignOffs} approvers.
//                   </p>

//                   <div className="mt-4 border rounded-lg overflow-hidden">
//                     <div className="bg-gray-50 px-4 py-2 border-b text-xs font-bold uppercase text-gray-500">
//                       Organization Directory
//                     </div>

//                     <div className="max-h-60 overflow-y-auto divide-y">
//                       {directory.map((person) => (
//                         <label
//                           key={person.id}
//                           className="flex items-center gap-3 p-3 hover:bg-[#F5F2EA] cursor-pointer"
//                         >
//                           <input
//                             type="checkbox"
//                             className="w-4 h-4 accent-[#43624A]"
//                             checked={!!selectedApprovers.find(
//                               (a) => a.id === person.id
//                             )}
//                             onChange={() => toggleApprover(person)}
//                           />

//                           <span className="text-sm capitalize">
//                             {person.name}
//                           </span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Workflow Table */}
//                 <div className="border rounded-lg bg-white">
//                   <div className="bg-gray-50 px-4 py-2 border-b text-xs font-bold uppercase text-gray-500">
//                     Workflow Sequence
//                   </div>

//                   <table className="w-full text-sm">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="p-3">#</th>
//                         <th className="p-3">Approver</th>
//                         <th className="p-3">Order</th>
//                       </tr>
//                     </thead>

//                     <tbody>
//                       {selectedApprovers.length > 0 ? (
//                         selectedApprovers.map((app, idx) => (
//                           <tr key={app.id} className="border-t">
//                             <td className="p-3">{idx + 1}</td>
//                             <td className="p-3 capitalize">{app.name}</td>
//                             <td className="p-3">
//                               <span className="px-2 py-1 bg-[#7A9C83]/20 text-[#43624A] rounded text-xs">
//                                 Step {idx + 1}
//                               </span>
//                             </td>
//                           </tr>
//                         ))
//                       ) : (
//                         <tr>
//                           <td colSpan="3" className="p-6 text-center text-gray-400">
//                             No approvers selected
//                           </td>
//                         </tr>
//                       )}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </section>

//             {/* STEP 2 */}
//             <section className="space-y-4 mt-10">
//               <div className="flex items-center gap-2">
//                 <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A2A2A] text-white text-xs">
//                   2
//                 </span>
//                 <h2 className="text-lg font-bold">Approval Mode</h2>
//               </div>

//               <div className="grid gap-4">

//                 {/* Sequential */}
//                 <div
//                   onClick={() => setApprovalMode("sequential")}
//                   className={`p-4 rounded-xl border-2 cursor-pointer ${
//                     approvalMode === "sequential"
//                       ? "border-[#43624A] bg-[#F5F2EA]"
//                       : "border-gray-200"
//                   }`}
//                 >
//                   <p className="font-bold">Sequential Path</p>

//                   <p className="text-sm text-gray-600 flex items-center gap-1">
//                     Steps occur in order
//                     <ArrowRight size={14} />
//                     next approver notified after approval
//                   </p>
//                 </div>

//                 {/* Parallel */}
//                 <div
//                   onClick={() => setApprovalMode("parallel")}
//                   className={`p-4 rounded-xl border-2 cursor-pointer ${
//                     approvalMode === "parallel"
//                       ? "border-[#43624A] bg-[#F5F2EA]"
//                       : "border-gray-200"
//                   }`}
//                 >
//                   <p className="font-bold">Parallel Path</p>
//                   <p className="text-sm text-gray-600">
//                     All approvers notified at the same time.
//                   </p>
//                 </div>
//               </div>
//             </section>

//             {/* Workflow Summary */}
//             <section className="mt-12 space-y-4">
//               <h2 className="text-lg font-bold">Workflow Summary</h2>

//               <table className="w-full border rounded-xl overflow-hidden">
//                 <thead className="bg-gray-50">
//                   <tr>
//                     <th className="p-4 text-xs">Step</th>
//                     <th className="p-4 text-xs">Approver</th>
//                     <th className="p-4 text-xs">Role</th>
//                     <th className="p-4 text-xs">Logic</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {selectedApprovers.map((app, idx) => (
//                     <tr key={app.id} className="border-t">
//                       <td className="p-4">Step {idx + 1}</td>
//                       <td className="p-4 capitalize">{app.name}</td>
//                       <td className="p-4">{app.role}</td>
//                       <td className="p-4 text-xs">
//                         {approvalMode === "sequential"
//                           ? idx === 0
//                             ? "Initial Trigger"
//                             : `Wait for Step ${idx}`
//                           : "Immediate Notification"}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </section>
//           </div>
//         </div>

//         {/* Footer */}
//         <div className="bg-gray-50 p-6 flex justify-end">
//           <button className="px-8 py-2.5 bg-[#43624A] hover:bg-[#2A2A2A] text-white font-bold rounded-lg">
//             Save Configuration
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default BuyerPOApprovalWorkflow;



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerPOApprovalWorkflow = () => {
  const navigate = useNavigate();

  const [isEnabled, setIsEnabled] = useState(false);
  const [requiredSignOffs, setRequiredSignOffs] = useState("3");
  const [selectedApprovers, setSelectedApprovers] = useState([]);
  const [approvalMode, setApprovalMode] = useState("sequential");

  const directory = [
    { id: 1, name: "das shanty", role: "Financial Controller" },
    { id: 2, name: "raid aljaabi", role: "Operations Manager" },
    { id: 3, name: "ramani rengaraman", role: "IT Head" },
    { id: 4, name: "rosita evora", role: "Procurement Lead" },
    { id: 5, name: "odessa sioting", role: "HR Director" },
    { id: 6, name: "Shankar Durga Prasad Kadali", role: "General Manager" },
    { id: 7, name: "Nishma B", role: "Audit Lead" },
    { id: 8, name: "savio peters", role: "CEO" },
  ];

  const toggleApprover = (person) => {
    if (selectedApprovers.find((a) => a.id === person.id)) {
      setSelectedApprovers(
        selectedApprovers.filter((a) => a.id !== person.id)
      );
    } else if (selectedApprovers.length < parseInt(requiredSignOffs)) {
      setSelectedApprovers([...selectedApprovers, person]);
    }
  };

  return (
    <div className="relative flex h-screen overflow-hidden bg-[#F5F2EA]">

      {/* Blurred old page content */}
      <div className="flex w-full h-full blur-sm pointer-events-none select-none">

        {/* 1. Added h-screen and overflow-hidden to the wrapper */}
        <div className="flex h-screen overflow-hidden bg-[#F5F2EA]">          
          {/* Sidebar - assuming it has its own width defined internally */}
          <BuyerSettingsSidebar />

          <div className="flex-1 overflow-y-auto bg-[#F5F2EA] p-6 font-sans text-[#2A2A2A]">
            <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">

              {/* Header */}
              <div className="p-6 border-b border-gray-100">
                <h1 className="text-2xl font-bold flex items-center gap-2">
                  <ShieldCheck className="text-[#43624A]" />
                  Purchase Order Approval Workflow
                </h1>
              </div>

              <div className="p-6 space-y-8">

                {/* Enable Workflow */}
                <div className="flex items-center gap-3 p-4 bg-[#F5F2EA]/50 rounded-lg border border-[#7A9C83]/20">
                  <input
                    type="checkbox"
                    id="enable"
                    className="w-5 h-5 accent-[#43624A] cursor-pointer"
                    checked={isEnabled}
                    onChange={(e) => setIsEnabled(e.target.checked)}
                  />
                  <label htmlFor="enable" className="font-medium cursor-pointer">
                    Enable Approval Workflow
                  </label>
                </div>

                <div className={`${!isEnabled && "opacity-50 pointer-events-none"}`}>

                  {/* STEP 1 */}
                  <section className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A2A2A] text-white text-xs">
                        1
                      </span>
                      <h2 className="text-lg font-bold">Select Approvers</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                      {/* Directory */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-600 mb-2">
                          Required sign-offs
                        </label>

                        <select
                          value={requiredSignOffs}
                          onChange={(e) => setRequiredSignOffs(e.target.value)}
                          className="w-full p-2.5 border rounded-lg"
                        >
                          <option value="1">1 approval</option>
                          <option value="2">2 approvals</option>
                          <option value="3">3 approvals</option>
                        </select>

                        <p className="mt-2 text-xs text-gray-500 italic">
                          Select up to {requiredSignOffs} approvers.
                        </p>

                        <div className="mt-4 border rounded-lg overflow-hidden">
                          <div className="bg-gray-50 px-4 py-2 border-b text-xs font-bold uppercase text-gray-500">
                            Organization Directory
                          </div>

                          <div className="max-h-60 overflow-y-auto divide-y">
                            {directory.map((person) => (
                              <label
                                key={person.id}
                                className="flex items-center gap-3 p-3 hover:bg-[#F5F2EA] cursor-pointer"
                              >
                                <input
                                  type="checkbox"
                                  className="w-4 h-4 accent-[#43624A]"
                                  checked={!!selectedApprovers.find(
                                    (a) => a.id === person.id
                                  )}
                                  onChange={() => toggleApprover(person)}
                                />

                                <span className="text-sm capitalize">
                                  {person.name}
                                </span>
                              </label>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Workflow Table */}
                      <div className="border rounded-lg bg-white">
                        <div className="bg-gray-50 px-4 py-2 border-b text-xs font-bold uppercase text-gray-500">
                          Workflow Sequence
                        </div>

                        <table className="w-full text-sm">
                          <thead className="bg-gray-50">
                            <tr>
                              <th className="p-3">#</th>
                              <th className="p-3">Approver</th>
                              <th className="p-3">Order</th>
                            </tr>
                          </thead>

                          <tbody>
                            {selectedApprovers.length > 0 ? (
                              selectedApprovers.map((app, idx) => (
                                <tr key={app.id} className="border-t">
                                  <td className="p-3">{idx + 1}</td>
                                  <td className="p-3 capitalize">{app.name}</td>
                                  <td className="p-3">
                                    <span className="px-2 py-1 bg-[#7A9C83]/20 text-[#43624A] rounded text-xs">
                                      Step {idx + 1}
                                    </span>
                                  </td>
                                </tr>
                              ))
                            ) : (
                              <tr>
                                <td colSpan="3" className="p-6 text-center text-gray-400">
                                  No approvers selected
                                </td>
                              </tr>
                            )}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </section>

                  {/* STEP 2 */}
                  <section className="space-y-4 mt-10">
                    <div className="flex items-center gap-2">
                      <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#2A2A2A] text-white text-xs">
                        2
                      </span>
                      <h2 className="text-lg font-bold">Approval Mode</h2>
                    </div>

                    <div className="grid gap-4">

                      {/* Sequential */}
                      <div
                        onClick={() => setApprovalMode("sequential")}
                        className={`p-4 rounded-xl border-2 cursor-pointer ${
                          approvalMode === "sequential"
                            ? "border-[#43624A] bg-[#F5F2EA]"
                            : "border-gray-200"
                        }`}
                      >
                        <p className="font-bold">Sequential Path</p>

                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          Steps occur in order
                          <ArrowRight size={14} />
                          next approver notified after approval
                        </p>
                      </div>

                      {/* Parallel */}
                      <div
                        onClick={() => setApprovalMode("parallel")}
                        className={`p-4 rounded-xl border-2 cursor-pointer ${
                          approvalMode === "parallel"
                            ? "border-[#43624A] bg-[#F5F2EA]"
                            : "border-gray-200"
                        }`}
                      >
                        <p className="font-bold">Parallel Path</p>
                        <p className="text-sm text-gray-600">
                          All approvers notified at the same time.
                        </p>
                      </div>
                    </div>
                  </section>

                  {/* Workflow Summary */}
                  <section className="mt-12 space-y-4">
                    <h2 className="text-lg font-bold">Workflow Summary</h2>

                    <table className="w-full border rounded-xl overflow-hidden">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="p-4 text-xs">Step</th>
                          <th className="p-4 text-xs">Approver</th>
                          <th className="p-4 text-xs">Role</th>
                          <th className="p-4 text-xs">Logic</th>
                        </tr>
                      </thead>

                      <tbody>
                        {selectedApprovers.map((app, idx) => (
                          <tr key={app.id} className="border-t">
                            <td className="p-4">Step {idx + 1}</td>
                            <td className="p-4 capitalize">{app.name}</td>
                            <td className="p-4">{app.role}</td>
                            <td className="p-4 text-xs">
                              {approvalMode === "sequential"
                                ? idx === 0
                                  ? "Initial Trigger"
                                  : `Wait for Step ${idx}`
                                : "Immediate Notification"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </section>
                </div>
              </div>

              {/* Footer */}
              <div className="bg-gray-50 p-6 flex justify-end">
                <button className="px-8 py-2.5 bg-[#43624A] hover:bg-[#2A2A2A] text-white font-bold rounded-lg">
                  Save Configuration
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Overlay */}
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

export default BuyerPOApprovalWorkflow;