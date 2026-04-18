// import React, { useState } from "react";
// import {
//   Calendar,
//   FileText,
//   ArrowRight,
//   Plus,
//   ChevronLeft,
//   Search,
//   Trash2,
//   Mail,
//   Globe,
//   Users,
//   Star,
// } from "lucide-react";

// const BuyerRFXcreate = () => {
//   const [procurementType, setProcurementType] = useState("spot");
//   const [requisitionType, setRequisitionType] = useState("rfq");
//   const [bidType, setBidType] = useState("Open");

//   const [purpose, setPurpose] = useState("procurement");
//   const [evaluationMethod, setEvaluationMethod] = useState("");

//   const [currentStep, setCurrentStep] = useState(0);
//   const [activeInfoTab, setActiveInfoTab] = useState("general");

//   const [classification, setClassification] = useState("");
//   const [costCenters, setCostCenters] = useState([]);
//   const [publishDate, setPublishDate] = useState("09/03/2026 03:22");
//   const [closingDate, setClosingDate] = useState("11/03/2026 03:22");

//   const [heading, setHeading] = useState("");
//   const [description, setDescription] = useState("");

//   const [selectedIndustry, setSelectedIndustry] = useState("");
//   const [selectedSubItems, setSelectedSubItems] = useState([]);

//   const [items, setItems] = useState([
//     {
//       slNo: 1,
//       itemDescription: "",
//       quantity: "",
//       description: "",
//       deliveryTime: "",
//       paymentTerms: "",
//     },
//   ]);

//   const [supplierOption, setSupplierOption] = useState("search");
//   const [searchSupplierText, setSearchSupplierText] = useState("");
//   const [favouriteSuppliers, setFavouriteSuppliers] = useState([]);
//   const [inviteEmails, setInviteEmails] = useState([""]);
//   const [rfxVisibility, setRfxVisibility] = useState("public");

//   const colors = {
//     dark: "#2A2A2A",
//     deepGreen: "#43624A",
//     mutedGreen: "#7A9C83",
//     offWhite: "#F5F2EA",
//   };

//   const steps = ["RFQ Information", "RFQ Details", "Review & Submit"];

//   const industryData = {
//     "Construction & General Consumables": [
//       "Structural: TMT Bars (Steel), Cement, Fine Sand, Aggregates, Bricks/Blocks",
//       "Fasteners: Anchor Bolts, Threaded Rods, Hex Bolts, Screws, Washers",
//       "Safety (PPE): Helmets, High-Vis Vests, Safety Shoes, Gloves, Safety Harnesses",
//       "Chemicals: Waterproofing Compounds, Adhesives, Sealants",
//       "Others",
//     ],
//     "Mechanical & HVAC": [
//       "Air Distribution: GI Ducts, PI Ducts, Grills, Diffusers, Dampers",
//       "Refrigeration: Copper Tubes, Insulation, Refrigerant Gases",
//       "Equipment: FCUs, AHUs, Chiller Units, VRF Systems, Split ACs",
//       "Ventilation: Axial Fans, Inline Fans, Kitchen Hoods, Fresh Air Handling Units",
//       "Valves & Gauges: Ball Valves, Butterfly Valves, Pressure Gauges, Thermometers",
//       "Others",
//     ],
//     "Plumbing & Firefighting": [
//       "Piping Systems: CPVC, UPVC, HDPE, PPR Pipes",
//       "Fittings: Elbows, Tees, Couplers, Unions, Reducers",
//       "Firefighting: MS Black Pipes, Sprinklers, Hydrants, Hose Reels",
//       "Pumps & Tanks: Booster Pumps, Submersible Pumps, GRP Water Tanks",
//       "Sanitaryware: CP Fittings, Closets, Wash Basins, Water Heaters",
//       "Others",
//     ],
//     "Electrical & Power": [
//       "Containment: GI Trunking, PVC Conduits, EMT Pipes, Cable Trays",
//       "Wires & Cables: FRLS Wires, Armored Power Cables, Control Cables",
//       "Switchgear: MCBs, RCCBs, Distribution Boards, Main Panels",
//       "Wiring Accessories: Modular Switches, Sockets, Industrial Plugs",
//       "Lighting: LED Panels, Street Lights, Emergency Lights, Batten Fittings",
//       "Others",
//     ],
//     "Smart Building & Home Automation": [
//       "Security & Surveillance",
//       "Biometric Access Control",
//       "Smart Video Door Phones",
//       "Home Automation Controllers",
//       "Others",
//     ],
//     "Renewable Energy & Solar": [
//       "Solar Panels",
//       "Solar Inverters",
//       "Mounting Structures",
//       "Cables and Connectors",
//       "Others",
//     ],
//     "Green & Sustainable Building Materials": [
//       "Eco-friendly blocks",
//       "Recycled materials",
//       "Low VOC products",
//       "Insulation systems",
//       "Others",
//     ],
//     "Interior Fit-Out & Facades": [
//       "Gypsum products",
//       "Partitions",
//       "Ceiling systems",
//       "Facade materials",
//       "Others",
//     ],
//     "Tools & Hardware": [
//       "Power tools",
//       "Hand tools",
//       "Fastening tools",
//       "Site tools",
//       "Others",
//     ],
//     "Project Work": [
//       "Civil work",
//       "MEP work",
//       "Finishing work",
//       "Site execution work",
//       "Others",
//     ],
//     Others: ["Others"],
//   };

//   const handleToggleSubItem = (subItem) => {
//     setSelectedSubItems((prev) =>
//       prev.includes(subItem)
//         ? prev.filter((item) => item !== subItem)
//         : [...prev, subItem]
//     );
//   };

//   const handleItemChange = (index, field, value) => {
//     const updatedItems = [...items];
//     updatedItems[index][field] = value;
//     setItems(updatedItems);
//   };

//   const handleAddItem = () => {
//     setItems((prevItems) => [
//       ...prevItems,
//       {
//         slNo: prevItems.length + 1,
//         itemDescription: "",
//         quantity: "",
//         description: "",
//         deliveryTime: "",
//         paymentTerms: "",
//       },
//     ]);
//   };

//   const handleRemoveItem = (index) => {
//     if (items.length === 1) return;

//     const updatedItems = items
//       .filter((_, i) => i !== index)
//       .map((item, idx) => ({
//         ...item,
//         slNo: idx + 1,
//       }));

//     setItems(updatedItems);
//   };

//   const handleInviteEmailChange = (index, value) => {
//     const updatedEmails = [...inviteEmails];
//     updatedEmails[index] = value;
//     setInviteEmails(updatedEmails);
//   };

//   const handleAddInviteEmail = () => {
//     setInviteEmails([...inviteEmails, ""]);
//   };

//   const handleRemoveInviteEmail = (index) => {
//     if (inviteEmails.length === 1) return;
//     const updatedEmails = inviteEmails.filter((_, i) => i !== index);
//     setInviteEmails(updatedEmails);
//   };

//   const handleSaveNext = () => {
//     if (currentStep < 2) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 0) {
//       setCurrentStep((prev) => prev - 1);
//     }
//   };

//   const handleSubmitRFX = () => {
//     const payload = {
//       procurementType,
//       requisitionType,
//       bidType,
//       purpose,
//       evaluationMethod,
//       classification,
//       costCenters,
//       publishDate,
//       closingDate,
//       heading,
//       description,
//       selectedIndustry,
//       selectedSubItems,
//       items,
//       supplierOption,
//       searchSupplierText,
//       favouriteSuppliers,
//       inviteEmails,
//       rfxVisibility,
//     };

//     console.log("FINAL RFX PAYLOAD:", payload);
//     alert("RFX Submitted successfully");
//   };

//   const renderStepHeader = () => {
//     return (
//       <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
//         <button
//           type="button"
//           onClick={handleBack}
//           className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide"
//           style={{ color: colors.deepGreen }}
//         >
//           <ChevronLeft size={20} /> Back
//         </button>

//         <div className="flex items-center grow justify-center max-w-3xl">
//           {steps.map((step, i, arr) => (
//             <React.Fragment key={step}>
//               <div className="flex flex-col items-center relative">
//                 <div
//                   className="w-5 h-5 rounded-full border-2 z-10"
//                   style={{
//                     backgroundColor:
//                       i <= currentStep ? colors.mutedGreen : "#FFF",
//                     borderColor:
//                       i <= currentStep
//                         ? colors.mutedGreen
//                         : colors.mutedGreen + "44",
//                   }}
//                 />
//                 <span className="absolute -bottom-6 whitespace-nowrap text-[11px] font-bold">
//                   {step}
//                 </span>
//               </div>

//               {i !== arr.length - 1 && (
//                 <div
//                   className="h-[2px] grow mx-2"
//                   style={{
//                     backgroundColor:
//                       i < currentStep
//                         ? colors.mutedGreen
//                         : colors.mutedGreen + "33",
//                   }}
//                 />
//               )}
//             </React.Fragment>
//           ))}
//         </div>

//         <div className="w-20" />
//       </header>
//     );
//   };

//   const renderRFQInformation = () => {
//     return (
//       <>
//         <div className="flex bg-gray-50 p-2 gap-2 border-b border-gray-100">
//           <button
//             type="button"
//             onClick={() => setActiveInfoTab("general")}
//             className={`flex-1 py-3 rounded text-sm font-bold text-center ${
//               activeInfoTab === "general"
//                 ? "bg-white shadow-sm text-gray-600"
//                 : "text-gray-500"
//             }`}
//           >
//             General Info
//           </button>
//           <button
//             type="button"
//             onClick={() => setActiveInfoTab("main")}
//             className={`flex-1 py-3 rounded text-sm font-bold text-center ${
//               activeInfoTab === "main"
//                 ? "bg-white shadow-sm text-gray-600"
//                 : "text-gray-500"
//             }`}
//           >
//             Main Info
//           </button>
//         </div>

//         <div className="p-10 space-y-12">
//           {activeInfoTab === "general" && (
//             <>
//               <section className="grid grid-cols-3 gap-8">
//                 <div className="col-span-2 space-y-8">
//                   <div>
//                     <label
//                       className="block text-sm font-bold mb-3"
//                       style={{ color: colors.deepGreen }}
//                     >
//                       Purpose
//                     </label>

//                     <div className="flex gap-10">
//                       {["procurement", "tender"].map((item) => (
//                         <label
//                           key={item}
//                           className="flex items-center gap-2 cursor-pointer"
//                         >
//                           <div
//                             onClick={() => setPurpose(item)}
//                             className="w-4 h-4 rounded-full border flex items-center justify-center"
//                             style={{
//                               borderColor:
//                                 purpose === item
//                                   ? colors.deepGreen
//                                   : "#9CA3AF",
//                             }}
//                           >
//                             {purpose === item && (
//                               <div
//                                 className="w-2 h-2 rounded-full"
//                                 style={{
//                                   backgroundColor: colors.deepGreen,
//                                 }}
//                               />
//                             )}
//                           </div>

//                           <span className="text-sm capitalize">{item}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               <hr />

//               <section className="grid grid-cols-3 gap-8">
//                 <div className="col-span-1">
//                   <h2
//                     className="text-lg font-bold flex items-center gap-2"
//                     style={{ color: colors.deepGreen }}
//                   >
//                     <FileText size={20} /> RFX
//                   </h2>
//                 </div>

//                 <div className="col-span-2">
//                   <div className="grid grid-cols-2 gap-4">
//                     <div
//                       onClick={() => setRequisitionType("rfq")}
//                       className="p-5 border-2 rounded-lg cursor-pointer"
//                       style={{
//                         backgroundColor:
//                           requisitionType === "rfq"
//                             ? colors.offWhite
//                             : "#FFF",
//                         borderColor:
//                           requisitionType === "rfq"
//                             ? colors.deepGreen
//                             : "#E5E7EB",
//                       }}
//                     >
//                       <strong>Request for Quotation (RFQ)</strong>
//                       <p>
//                         Focuses on Price. Use this when you know exactly what
//                         you want and just need to know how much it will cost.
//                       </p>
//                     </div>

//                     <div
//                       onClick={() => setRequisitionType("rfp")}
//                       className="p-5 border-2 rounded-lg cursor-pointer"
//                       style={{
//                         backgroundColor:
//                           requisitionType === "rfp"
//                             ? colors.offWhite
//                             : "#FFF",
//                         borderColor:
//                           requisitionType === "rfp"
//                             ? colors.deepGreen
//                             : "#E5E7EB",
//                       }}
//                     >
//                       <strong>Request for Proposal (RFP)</strong>
//                       <p>
//                         Focuses on Value and Strategy. Use this when you have a
//                         problem to solve but want the vendor to propose the best
//                         solution and methodology.
//                       </p>
//                     </div>
//                   </div>

//                   <div className="mt-8 max-w-md">
//                     <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
//                       Classification
//                       <Search size={14} className="text-gray-400" />
//                     </label>

//                     <div className="w-full p-3 border border-gray-300 rounded text-sm text-gray-400">
//                       No option(s) selected
//                     </div>
//                   </div>

//                   <div className="mt-4">
//                     <button
//                       type="button"
//                       className="flex items-center gap-2 text-sm font-semibold text-gray-700"
//                     >
//                       Cost Center(s)
//                       <Plus size={16} />
//                     </button>
//                   </div>

//                   <div className="mt-6">
//                     <label className="block text-sm font-semibold text-gray-700 mb-3">
//                       Award Type
//                     </label>

//                     <label className="flex items-center gap-2 cursor-pointer">
//                       <input type="radio" name="award" defaultChecked />
//                       <span className="text-sm">Purchase Order</span>
//                     </label>

//                     <label className="flex items-center gap-2 cursor-pointer mt-2">
//                       <input type="radio" name="award" />
//                       <span className="text-sm">Work Order</span>
//                     </label>
//                   </div>

//                   <div className="mt-6">
//                     <label className="block text-sm font-semibold text-gray-700 mb-3">
//                       Bid Award / Evaluation Criteria
//                     </label>

//                     <div className="flex flex-wrap gap-6">
//                       {[
//                         "Negotiation",
//                         "Best & Final Offer (BAFO)",
//                         "Reverse Auction",
//                         "Weighted Scoring Model",
//                       ].map((method) => (
//                         <label
//                           key={method}
//                           className="flex items-center gap-2 cursor-pointer"
//                         >
//                           <input
//                             type="radio"
//                             name="evaluation"
//                             value={method}
//                             onChange={(e) =>
//                               setEvaluationMethod(e.target.value)
//                             }
//                           />
//                           <span className="text-sm">{method}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </section>

//               <hr />

//               <section className="grid grid-cols-3 gap-8">
//                 <div>
//                   <h2
//                     className="text-lg font-bold flex items-center gap-2"
//                     style={{ color: colors.deepGreen }}
//                   >
//                     <Calendar size={20} /> RFX Timeline
//                   </h2>
//                 </div>

//                 <div className="col-span-2 grid grid-cols-2 gap-6">
//                   <div>
//                     <label className="text-xs font-bold text-gray-500 uppercase">
//                       Publish Date
//                     </label>

//                     <div className="flex justify-between p-3 border rounded">
//                       <span>{publishDate}</span>
//                       <Calendar size={16} />
//                     </div>
//                   </div>

//                   <div>
//                     <label className="text-xs font-bold text-gray-500 uppercase">
//                       Closing Date
//                     </label>

//                     <div className="flex justify-between p-3 border rounded">
//                       <span>{closingDate}</span>
//                       <Calendar size={16} />
//                     </div>
//                   </div>
//                 </div>
//               </section>
//             </>
//           )}

//           {activeInfoTab === "main" && (
//             <>
//               <section className="space-y-8">
//                 <div>
//                   <label className="block text-2xl font-bold text-black mb-2">
//                     RFX/RFQ Heading
//                   </label>
//                   <input
//                     type="text"
//                     placeholder="Enter RFX/RFQ title"
//                     value={heading}
//                     onChange={(e) => setHeading(e.target.value)}
//                     className="w-full border border-gray-300 rounded px-4 py-3"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-2xl font-bold text-black mb-2">
//                     Description
//                   </label>
//                   <textarea
//                     rows="4"
//                     placeholder="Enter project description"
//                     value={description}
//                     onChange={(e) => setDescription(e.target.value)}
//                     className="w-full border border-gray-300 rounded px-4 py-3"
//                   />
//                 </div>

//                 <div>
//                   <label className="block text-sm font-bold text-gray-700 mb-3">
//                     Industry
//                   </label>
//                   <select
//                     value={selectedIndustry}
//                     onChange={(e) => {
//                       setSelectedIndustry(e.target.value);
//                       setSelectedSubItems([]);
//                     }}
//                     className="w-full max-w-md border border-gray-300 rounded px-4 py-3"
//                   >
//                     <option value="">Select Industry</option>
//                     {Object.keys(industryData).map((industry) => (
//                       <option key={industry} value={industry}>
//                         {industry}
//                       </option>
//                     ))}
//                   </select>
//                 </div>

//                 {selectedIndustry && (
//                   <div>
//                     <label className="block text-sm font-bold text-gray-700 mb-3">
//                       Sub Items
//                     </label>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                       {industryData[selectedIndustry].map((subItem) => (
//                         <label
//                           key={subItem}
//                           className="flex items-start gap-2 border border-gray-200 rounded p-3 cursor-pointer"
//                         >
//                           <input
//                             type="checkbox"
//                             checked={selectedSubItems.includes(subItem)}
//                             onChange={() => handleToggleSubItem(subItem)}
//                             className="mt-1"
//                           />
//                           <span className="text-sm">{subItem}</span>
//                         </label>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </section>
//             </>
//           )}
//         </div>
//       </>
//     );
//   };

//   const renderRFQDetails = () => {
//     return (
//       <div className="p-10 space-y-8">
//         <div>
//           <h1
//             className="text-2xl font-bold"
//             style={{ color: colors.deepGreen }}
//           >
//             RFQ Details
//           </h1>
//         </div>

//         <div className="flex items-center justify-between">
//           <h2 className="text-2xl font-bold text-black">Items</h2>

//           <button
//             type="button"
//             onClick={handleAddItem}
//             className="flex items-center gap-2 px-4 py-2 text-white rounded"
//             style={{ backgroundColor: colors.deepGreen }}
//           >
//             <Plus size={16} />
//             Add
//           </button>
//         </div>

//         {items.map((item, index) => (
//           <div key={index} className="border border-gray-200 rounded-lg p-6">
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-bold mb-2">SL No</label>
//                 <input
//                   type="text"
//                   value={item.slNo}
//                   readOnly
//                   className="w-full border border-gray-300 rounded px-4 py-3 bg-gray-100"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold mb-2">
//                   Item Description
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="Enter item description"
//                   value={item.itemDescription}
//                   onChange={(e) =>
//                     handleItemChange(index, "itemDescription", e.target.value)
//                   }
//                   className="w-full border border-gray-300 rounded px-4 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold mb-2">Quantity</label>
//                 <input
//                   type="text"
//                   placeholder="Enter quantity"
//                   value={item.quantity}
//                   onChange={(e) =>
//                     handleItemChange(index, "quantity", e.target.value)
//                   }
//                   className="w-full border border-gray-300 rounded px-4 py-3"
//                 />
//               </div>
//             </div>

//             <div className="mt-4">
//               <label className="block text-sm font-bold mb-2">Description</label>
//               <textarea
//                 rows="4"
//                 placeholder="Enter item description"
//                 value={item.description}
//                 onChange={(e) =>
//                   handleItemChange(index, "description", e.target.value)
//                 }
//                 className="w-full border border-gray-300 rounded px-4 py-3"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
//               <div>
//                 <label className="block text-sm font-bold mb-2">
//                   Delivery Time
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g. 2 Weeks"
//                   value={item.deliveryTime}
//                   onChange={(e) =>
//                     handleItemChange(index, "deliveryTime", e.target.value)
//                   }
//                   className="w-full border border-gray-300 rounded px-4 py-3"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-bold mb-2">
//                   Payment Terms
//                 </label>
//                 <input
//                   type="text"
//                   placeholder="e.g. 30% Advance, 70% After Delivery"
//                   value={item.paymentTerms}
//                   onChange={(e) =>
//                     handleItemChange(index, "paymentTerms", e.target.value)
//                   }
//                   className="w-full border border-gray-300 rounded px-4 py-3"
//                 />
//               </div>
//             </div>

//             {items.length > 1 && (
//               <div className="mt-4 flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => handleRemoveItem(index)}
//                   className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded"
//                 >
//                   <Trash2 size={16} />
//                   Remove
//                 </button>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     );
//   };

//   const renderReviewAndSubmit = () => {
//     return (
//       <div className="p-10 space-y-10">
//         <section className="border border-gray-200 rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Summary</h2>

//           <div className="space-y-2 text-sm">
//             <p>
//               <strong>Purpose:</strong> {purpose}
//             </p>
//             <p>
//               <strong>RFX Type:</strong> {requisitionType.toUpperCase()}
//             </p>
//             <p>
//               <strong>Heading:</strong> {heading || "-"}
//             </p>
//             <p>
//               <strong>Description:</strong> {description || "-"}
//             </p>
//             <p>
//               <strong>Industry:</strong> {selectedIndustry || "-"}
//             </p>
//             <p>
//               <strong>Selected Sub Items:</strong>{" "}
//               {selectedSubItems.length > 0
//                 ? selectedSubItems.join(", ")
//                 : "-"}
//             </p>
//           </div>
//         </section>

//         <section className="border border-gray-200 rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">Search Suppliers</h2>

//           <div className="grid md:grid-cols-3 gap-4">
//             <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
//               <input
//                 type="radio"
//                 name="supplierOption"
//                 checked={supplierOption === "search"}
//                 onChange={() => setSupplierOption("search")}
//               />
//               <div>
//                 <div className="flex items-center gap-2 font-bold">
//                   <Search size={18} />
//                   Search Supplier
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Search suppliers from directory
//                 </p>
//               </div>
//             </label>

//             <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
//               <input
//                 type="radio"
//                 name="supplierOption"
//                 checked={supplierOption === "favourite"}
//                 onChange={() => setSupplierOption("favourite")}
//               />
//               <div>
//                 <div className="flex items-center gap-2 font-bold">
//                   <Star size={18} />
//                   Favourite Suppliers
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Select favourite suppliers
//                 </p>
//               </div>
//             </label>

//             <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
//               <input
//                 type="radio"
//                 name="supplierOption"
//                 checked={supplierOption === "invite"}
//                 onChange={() => setSupplierOption("invite")}
//               />
//               <div>
//                 <div className="flex items-center gap-2 font-bold">
//                   <Mail size={18} />
//                   Invite Suppliers
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Add supplier email manually
//                 </p>
//               </div>
//             </label>
//           </div>

//           {supplierOption === "search" && (
//             <div className="mt-6">
//               <label className="block text-sm font-bold mb-2">
//                 Search Supplier
//               </label>
//               <input
//                 type="text"
//                 placeholder="Search suppliers..."
//                 value={searchSupplierText}
//                 onChange={(e) => setSearchSupplierText(e.target.value)}
//                 className="w-full border border-gray-300 rounded px-4 py-3"
//               />
//             </div>
//           )}

//           {supplierOption === "favourite" && (
//             <div className="mt-6 p-4 border border-gray-200 rounded bg-gray-50 text-sm text-gray-600">
//               Favourite suppliers list can be connected here.
//             </div>
//           )}

//           {supplierOption === "invite" && (
//             <div className="mt-6 space-y-3">
//               <label className="block text-sm font-bold">
//                 Invite Supplier Emails
//               </label>

//               {inviteEmails.map((email, index) => (
//                 <div key={index} className="flex gap-3">
//                   <input
//                     type="email"
//                     placeholder="Enter supplier email"
//                     value={email}
//                     onChange={(e) =>
//                       handleInviteEmailChange(index, e.target.value)
//                     }
//                     className="flex-1 border border-gray-300 rounded px-4 py-3"
//                   />

//                   <button
//                     type="button"
//                     onClick={() => handleRemoveInviteEmail(index)}
//                     className="px-4 py-3 border border-red-300 text-red-600 rounded"
//                   >
//                     <Trash2 size={16} />
//                   </button>
//                 </div>
//               ))}

//               <button
//                 type="button"
//                 onClick={handleAddInviteEmail}
//                 className="flex items-center gap-2 px-4 py-2 text-white rounded"
//                 style={{ backgroundColor: colors.deepGreen }}
//               >
//                 <Plus size={16} />
//                 Add Email
//               </button>
//             </div>
//           )}
//         </section>

//         <section className="border border-gray-200 rounded-lg p-6">
//           <h2 className="text-xl font-bold mb-4">RFX Visibility</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
//               <input
//                 type="radio"
//                 name="rfxVisibility"
//                 checked={rfxVisibility === "public"}
//                 onChange={() => setRfxVisibility("public")}
//               />
//               <div>
//                 <div className="flex items-center gap-2 font-bold">
//                   <Globe size={18} />
//                   Public
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">
//                   This RFX will be public
//                 </p>
//               </div>
//             </label>

//             <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
//               <input
//                 type="radio"
//                 name="rfxVisibility"
//                 checked={rfxVisibility === "invited"}
//                 onChange={() => setRfxVisibility("invited")}
//               />
//               <div>
//                 <div className="flex items-center gap-2 font-bold">
//                   <Users size={18} />
//                   Invited Suppliers
//                 </div>
//                 <p className="text-sm text-gray-600 mt-1">
//                   Only invited suppliers can view this RFX
//                 </p>
//               </div>
//             </label>
//           </div>
//         </section>
//       </div>
//     );
//   };

//   return (
//     <div className="min-h-screen font-sans bg-gray-50">
//       {renderStepHeader()}

//       <main className="max-w-6xl mx-auto mt-12 mb-20 px-4">
//         <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
//           {currentStep === 0 && renderRFQInformation()}
//           {currentStep === 1 && renderRFQDetails()}
//           {currentStep === 2 && renderReviewAndSubmit()}

//           <div className="p-6 flex justify-end gap-3 border-t flex-wrap">
//             <button
//               type="button"
//               className="px-6 py-2 border rounded"
//               style={{
//                 color: colors.deepGreen,
//                 borderColor: colors.deepGreen,
//               }}
//             >
//               Cancel
//             </button>

//             <button
//               type="button"
//               className="px-6 py-2 border rounded"
//               style={{
//                 color: colors.deepGreen,
//                 borderColor: colors.deepGreen,
//               }}
//             >
//               Save Draft
//             </button>

//             {currentStep < 2 ? (
//               <button
//                 type="button"
//                 onClick={handleSaveNext}
//                 className="px-6 py-2 text-white rounded flex items-center gap-2"
//                 style={{ backgroundColor: colors.deepGreen }}
//               >
//                 <ArrowRight size={18} />
//                 Save & Next
//               </button>
//             ) : (
//               <button
//                 type="button"
//                 onClick={handleSubmitRFX}
//                 className="px-6 py-2 text-white rounded flex items-center gap-2"
//                 style={{ backgroundColor: colors.deepGreen }}
//               >
//                 Submit RFX
//               </button>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default BuyerRFXcreate;
import React, { useState } from "react";
import {
  Calendar,
  FileText,
  ArrowRight,
  Plus,
  ChevronLeft,
  Search,
  Trash2,
  Mail,
  Globe,
  Users,
  Star,
} from "lucide-react";

const BuyerRFXcreate = () => {
  const [procurementType, setProcurementType] = useState("spot");
  const [requisitionType, setRequisitionType] = useState("rfq");
  const [bidType, setBidType] = useState("Open");

  const [purpose, setPurpose] = useState("procurement");
  const [evaluationMethod, setEvaluationMethod] = useState("");

  const [currentStep, setCurrentStep] = useState(0);

  const [classification, setClassification] = useState("");
  const [costCenters, setCostCenters] = useState([]);
  const [publishDate, setPublishDate] = useState("09/03/2026 03:22");
  const [closingDate, setClosingDate] = useState("11/03/2026 03:22");

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSubItems, setSelectedSubItems] = useState([]);

  const [items, setItems] = useState([
    {
      slNo: 1,
      itemDescription: "",
      quantity: "",
      description: "",
      deliveryTime: "",
      paymentTerms: "",
    },
  ]);

  const [supplierOption, setSupplierOption] = useState("search");
  const [searchSupplierText, setSearchSupplierText] = useState("");
  const [favouriteSuppliers, setFavouriteSuppliers] = useState([]);
  const [inviteEmails, setInviteEmails] = useState([""]);
  const [rfxVisibility, setRfxVisibility] = useState("public");

  const colors = {
    dark: "#2A2A2A",
    deepGreen: "#43624A",
    mutedGreen: "#7A9C83",
    offWhite: "#F5F2EA",
  };

  const steps = ["RFQ Information", "RFQ Details", "Review & Submit"];

  const industryData = {
    "Construction & General Consumables": [
      "Structural: TMT Bars (Steel), Cement, Fine Sand, Aggregates, Bricks/Blocks",
      "Fasteners: Anchor Bolts, Threaded Rods, Hex Bolts, Screws, Washers",
      "Safety (PPE): Helmets, High-Vis Vests, Safety Shoes, Gloves, Safety Harnesses",
      "Chemicals: Waterproofing Compounds, Adhesives, Sealants",
      "Others",
    ],
    "Mechanical & HVAC": [
      "Air Distribution: GI Ducts, PI Ducts, Grills, Diffusers, Dampers",
      "Refrigeration: Copper Tubes, Insulation, Refrigerant Gases",
      "Equipment: FCUs, AHUs, Chiller Units, VRF Systems, Split ACs",
      "Ventilation: Axial Fans, Inline Fans, Kitchen Hoods, Fresh Air Handling Units",
      "Valves & Gauges: Ball Valves, Butterfly Valves, Pressure Gauges, Thermometers",
      "Others",
    ],
    "Plumbing & Firefighting": [
      "Piping Systems: CPVC, UPVC, HDPE, PPR Pipes",
      "Fittings: Elbows, Tees, Couplers, Unions, Reducers",
      "Firefighting: MS Black Pipes, Sprinklers, Hydrants, Hose Reels",
      "Pumps & Tanks: Booster Pumps, Submersible Pumps, GRP Water Tanks",
      "Sanitaryware: CP Fittings, Closets, Wash Basins, Water Heaters",
      "Others",
    ],
    "Electrical & Power": [
      "Containment: GI Trunking, PVC Conduits, EMT Pipes, Cable Trays",
      "Wires & Cables: FRLS Wires, Armored Power Cables, Control Cables",
      "Switchgear: MCBs, RCCBs, Distribution Boards, Main Panels",
      "Wiring Accessories: Modular Switches, Sockets, Industrial Plugs",
      "Lighting: LED Panels, Street Lights, Emergency Lights, Batten Fittings",
      "Others",
    ],
    "Smart Building & Home Automation": [
      "Security & Surveillance",
      "Biometric Access Control",
      "Smart Video Door Phones",
      "Home Automation Controllers",
      "Others",
    ],
    "Renewable Energy & Solar": [
      "Solar Panels",
      "Solar Inverters",
      "Mounting Structures",
      "Cables and Connectors",
      "Others",
    ],
    "Green & Sustainable Building Materials": [
      "Eco-friendly blocks",
      "Recycled materials",
      "Low VOC products",
      "Insulation systems",
      "Others",
    ],
    "Interior Fit-Out & Facades": [
      "Gypsum products",
      "Partitions",
      "Ceiling systems",
      "Facade materials",
      "Others",
    ],
    "Tools & Hardware": [
      "Power tools",
      "Hand tools",
      "Fastening tools",
      "Site tools",
      "Others",
    ],
    "Project Work": [
      "Civil work",
      "MEP work",
      "Finishing work",
      "Site execution work",
      "Others",
    ],
    Others: ["Others"],
  };

  const handleToggleSubItem = (subItem) => {
    setSelectedSubItems((prev) =>
      prev.includes(subItem)
        ? prev.filter((item) => item !== subItem)
        : [...prev, subItem]
    );
  };

  const handleItemChange = (index, field, value) => {
    const updatedItems = [...items];
    updatedItems[index][field] = value;
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems((prevItems) => [
      ...prevItems,
      {
        slNo: prevItems.length + 1,
        itemDescription: "",
        quantity: "",
        description: "",
        deliveryTime: "",
        paymentTerms: "",
      },
    ]);
  };

  const handleRemoveItem = (index) => {
    if (items.length === 1) return;

    const updatedItems = items
      .filter((_, i) => i !== index)
      .map((item, idx) => ({
        ...item,
        slNo: idx + 1,
      }));

    setItems(updatedItems);
  };

  const handleInviteEmailChange = (index, value) => {
    const updatedEmails = [...inviteEmails];
    updatedEmails[index] = value;
    setInviteEmails(updatedEmails);
  };

  const handleAddInviteEmail = () => {
    setInviteEmails([...inviteEmails, ""]);
  };

  const handleRemoveInviteEmail = (index) => {
    if (inviteEmails.length === 1) return;
    const updatedEmails = inviteEmails.filter((_, i) => i !== index);
    setInviteEmails(updatedEmails);
  };

  const handleSaveNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmitRFX = () => {
    const payload = {
      procurementType,
      requisitionType,
      bidType,
      purpose,
      evaluationMethod,
      classification,
      costCenters,
      publishDate,
      closingDate,
      heading,
      description,
      selectedIndustry,
      selectedSubItems,
      items,
      supplierOption,
      searchSupplierText,
      favouriteSuppliers,
      inviteEmails,
      rfxVisibility,
    };

    console.log("FINAL RFX PAYLOAD:", payload);
    alert("RFX Submitted successfully");
  };

  const renderStepHeader = () => {
    return (
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <button
          type="button"
          onClick={handleBack}
          className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide"
          style={{ color: colors.deepGreen }}
        >
          <ChevronLeft size={20} /> Back
        </button>

        <div className="flex items-center grow justify-center max-w-3xl">
          {steps.map((step, i, arr) => (
            <React.Fragment key={step}>
              <div className="flex flex-col items-center relative">
                <div
                  className="w-5 h-5 rounded-full border-2 z-10"
                  style={{
                    backgroundColor:
                      i <= currentStep ? colors.mutedGreen : "#FFF",
                    borderColor:
                      i <= currentStep
                        ? colors.mutedGreen
                        : colors.mutedGreen + "44",
                  }}
                />
                <span className="absolute -bottom-6 whitespace-nowrap text-[11px] font-bold">
                  {step}
                </span>
              </div>

              {i !== arr.length - 1 && (
                <div
                  className="h-[2px] grow mx-2"
                  style={{
                    backgroundColor:
                      i < currentStep
                        ? colors.mutedGreen
                        : colors.mutedGreen + "33",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="w-20" />
      </header>
    );
  };

  const renderRFQInformation = () => {
    return (
      <div className="p-10 space-y-12">
           <div>
            <label className="block text-2xl font-bold text-black mb-2">
              RFX/RFQ Heading
            </label>
            <input
              type="text"
              placeholder="Enter RFX/RFQ title"
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3"
            />
          </div>

          {/* <div>
            <label className="block text-2xl font-bold text-black mb-2">
              Description
            </label>
            <textarea
              rows="4"
              placeholder="Enter project description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => {
                setSelectedIndustry(e.target.value);
                setSelectedSubItems([]);
              }}
              className="w-full max-w-md border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Industry</option>
              {Object.keys(industryData).map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          {selectedIndustry && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Sub Items
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industryData[selectedIndustry].map((subItem) => (
                  <label
                    key={subItem}
                    className="flex items-start gap-2 border border-gray-200 rounded p-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubItems.includes(subItem)}
                      onChange={() => handleToggleSubItem(subItem)}
                      className="mt-1"
                    />
                    <span className="text-sm">{subItem}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </section>

        <hr /> */}

        <section className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-8">
            <div>
              <label
                className="block text-sm font-bold mb-3"
                style={{ color: colors.deepGreen }}
              >
                Purpose
              </label>

              <div className="flex gap-10">
                {["procurement", "tender"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <div
                      onClick={() => setPurpose(item)}
                      className="w-4 h-4 rounded-full border flex items-center justify-center"
                      style={{
                        borderColor:
                          purpose === item ? colors.deepGreen : "#9CA3AF",
                      }}
                    >
                      {purpose === item && (
                        <div
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor: colors.deepGreen,
                          }}
                        />
                      )}
                    </div>

                    <span className="text-sm capitalize">{item}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="grid grid-cols-3 gap-8">
          <div className="col-span-1">
            <h2
              className="text-lg font-bold flex items-center gap-2"
              style={{ color: colors.deepGreen }}
            >
              <FileText size={20} /> RFX
            </h2>
          </div>

          <div className="col-span-2">
            <div className="grid grid-cols-2 gap-4">
              <div
                onClick={() => setRequisitionType("rfq")}
                className="p-5 border-2 rounded-lg cursor-pointer"
                style={{
                  backgroundColor:
                    requisitionType === "rfq" ? colors.offWhite : "#FFF",
                  borderColor:
                    requisitionType === "rfq"
                      ? colors.deepGreen
                      : "#E5E7EB",
                }}
              >
                <strong>Request for Quotation (RFQ)</strong>
                <p>
                  Focuses on Price. Use this when you know exactly what
                  you want and just need to know how much it will cost.
                </p>
              </div>

              <div
                onClick={() => setRequisitionType("rfp")}
                className="p-5 border-2 rounded-lg cursor-pointer"
                style={{
                  backgroundColor:
                    requisitionType === "rfp" ? colors.offWhite : "#FFF",
                  borderColor:
                    requisitionType === "rfp"
                      ? colors.deepGreen
                      : "#E5E7EB",
                }}
              >
                <strong>Request for Proposal (RFP)</strong>
                <p>
                  Focuses on Value and Strategy. Use this when you have a
                  problem to solve but want the vendor to propose the best
                  solution and methodology.
                </p>
              </div>
            </div>

            <div className="mt-8 max-w-md">
              <label className="flex items-center gap-2 text-sm font-semibold text-gray-700 mb-2">
                Classification
                <Search size={14} className="text-gray-400" />
              </label>

              <div className="w-full p-3 border border-gray-300 rounded text-sm text-gray-400">
                No option(s) selected
              </div>
            </div>

            <div className="mt-4">
              <button
                type="button"
                className="flex items-center gap-2 text-sm font-semibold text-gray-700"
              >
                Cost Center(s)
                <Plus size={16} />
              </button>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Award Type
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="award" defaultChecked />
                <span className="text-sm">Purchase Order</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer mt-2">
                <input type="radio" name="award" />
                <span className="text-sm">Work Order</span>
              </label>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Bid Award / Evaluation Criteria
              </label>

              <div className="flex flex-wrap gap-6">
                {[
                  "Negotiation",
                  "Best & Final Offer (BAFO)",
                  "Reverse Auction",
                  "Weighted Scoring Model",
                ].map((method) => (
                  <label
                    key={method}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="evaluation"
                      value={method}
                      onChange={(e) =>
                        setEvaluationMethod(e.target.value)
                      }
                    />
                    <span className="text-sm">{method}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr />

        <section className="grid grid-cols-3 gap-8">
          <div>
            <h2
              className="text-lg font-bold flex items-center gap-2"
              style={{ color: colors.deepGreen }}
            >
              <Calendar size={20} /> RFX Timeline
            </h2>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Publish Date
              </label>

              <div className="flex justify-between p-3 border rounded">
                <span>{publishDate}</span>
                <Calendar size={16} />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-gray-500 uppercase">
                Closing Date
              </label>

              <div className="flex justify-between p-3 border rounded">
                <span>{closingDate}</span>
                <Calendar size={16} />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };

  const renderRFQDetails = () => {
    return (
      <div className="p-10 space-y-8">
        <div>
          <h1
            className="text-2xl font-bold"
            style={{ color: colors.deepGreen }}
          >
            RFQ Details
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Items</h2>

          <button
            type="button"
            onClick={handleAddItem}
            className="flex items-center gap-2 px-4 py-2 text-white rounded"
            style={{ backgroundColor: colors.deepGreen }}
          >
            <Plus size={16} />
            Add
          </button>
        </div>

        {items.map((item, index) => (
          <div key={index} className="border border-gray-200 rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-bold mb-2">SL No</label>
                <input
                  type="text"
                  value={item.slNo}
                  readOnly
                  className="w-full border border-gray-300 rounded px-4 py-3 bg-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Item Description
                </label>
                <input
                  type="text"
                  placeholder="Enter item description"
                  value={item.itemDescription}
                  onChange={(e) =>
                    handleItemChange(index, "itemDescription", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">Quantity</label>
                <input
                  type="text"
                  placeholder="Enter quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">Description</label>
              <textarea
                rows="4"
                placeholder="Enter item description"
                value={item.description}
                onChange={(e) =>
                  handleItemChange(index, "description", e.target.value)
                }
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <label className="block text-sm font-bold mb-2">
                  Delivery Time
                </label>
                <input
                  type="text"
                  placeholder="e.g. 2 Weeks"
                  value={item.deliveryTime}
                  onChange={(e) =>
                    handleItemChange(index, "deliveryTime", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>

              <div>
                <label className="block text-sm font-bold mb-2">
                  Payment Terms
                </label>
                <input
                  type="text"
                  placeholder="e.g. 30% Advance, 70% After Delivery"
                  value={item.paymentTerms}
                  onChange={(e) =>
                    handleItemChange(index, "paymentTerms", e.target.value)
                  }
                  className="w-full border border-gray-300 rounded px-4 py-3"
                />
              </div>
            </div>

            {items.length > 1 && (
              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(index)}
                  className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };

  const renderReviewAndSubmit = () => {
    return (
      <div className="p-10 space-y-10">
        {/* <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Summary</h2>

          <div className="space-y-2 text-sm">
            <p>
              <strong>Purpose:</strong> {purpose}
            </p>
            <p>
              <strong>RFX Type:</strong> {requisitionType.toUpperCase()}
            </p>
            <p>
              <strong>Heading:</strong> {heading || "-"}
            </p>
            <p>
              <strong>Description:</strong> {description || "-"}
            </p>
            <p>
              <strong>Industry:</strong> {selectedIndustry || "-"}
            </p>
            <p>
              <strong>Selected Sub Items:</strong>{" "}
              {selectedSubItems.length > 0
                ? selectedSubItems.join(", ")
                : "-"}
            </p>
          </div>
        </section> */}
         <section className="border border-gray-200 rounded-lg p-6">
<div>
            <label className="block text-sm font-bold text-gray-700 mb-3">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => {
                setSelectedIndustry(e.target.value);
                setSelectedSubItems([]);
              }}
              className="w-full max-w-md border border-gray-300 rounded px-4 py-3"
            >
              <option value="">Select Industry</option>
              {Object.keys(industryData).map((industry) => (
                <option key={industry} value={industry}>
                  {industry}
                </option>
              ))}
            </select>
          </div>

          {selectedIndustry && (
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-3">
                Sub Items
              </label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {industryData[selectedIndustry].map((subItem) => (
                  <label
                    key={subItem}
                    className="flex items-start gap-2 border border-gray-200 rounded p-3 cursor-pointer"
                  >
                    <input
                      type="checkbox"
                      checked={selectedSubItems.includes(subItem)}
                      onChange={() => handleToggleSubItem(subItem)}
                      className="mt-1"
                    />
                    <span className="text-sm">{subItem}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
          </section>
        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Search Suppliers</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="supplierOption"
                checked={supplierOption === "search"}
                onChange={() => setSupplierOption("search")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Search size={18} />
                  Search Supplier
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Search  Sellers from directory
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="supplierOption"
                checked={supplierOption === "favourite"}
                onChange={() => setSupplierOption("favourite")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Star size={18} />
                  Favourite Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Select favourite suppliers
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="supplierOption"
                checked={supplierOption === "invite"}
                onChange={() => setSupplierOption("invite")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Mail size={18} />
                  Invite Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Add supplier email manually
                </p>
              </div>
            </label>
          </div>

          {supplierOption === "search" && (
            <div className="mt-6">
              <label className="block text-sm font-bold mb-2">
                Search Supplier
              </label>
              <input
                type="text"
                placeholder="Search suppliers..."
                value={searchSupplierText}
                onChange={(e) => setSearchSupplierText(e.target.value)}
                className="w-full border border-gray-300 rounded px-4 py-3"
              />
            </div>
          )}

          {supplierOption === "favourite" && (
            <div className="mt-6 p-4 border border-gray-200 rounded bg-gray-50 text-sm text-gray-600">
              Favourite  Sellers list can be connected here.
            </div>
          )}

          {supplierOption === "invite" && (
            <div className="mt-6 space-y-3">
              <label className="block text-sm font-bold">
                Invite Supplier Emails
              </label>

              {inviteEmails.map((email, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter supplier email"
                    value={email}
                    onChange={(e) =>
                      handleInviteEmailChange(index, e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded px-4 py-3"
                  />

                  <button
                    type="button"
                    onClick={() => handleRemoveInviteEmail(index)}
                    className="px-4 py-3 border border-red-300 text-red-600 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <button
                type="button"
                onClick={handleAddInviteEmail}
                className="flex items-center gap-2 px-4 py-2 text-white rounded"
                style={{ backgroundColor: colors.deepGreen }}
              >
                <Plus size={16} />
                Add Email
              </button>
            </div>
          )}
        </section>

        <section className="border border-gray-200 rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">RFX Visibility</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="rfxVisibility"
                checked={rfxVisibility === "public"}
                onChange={() => setRfxVisibility("public")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Globe size={18} />
                  Public
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  This RFX will be public
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 flex items-start gap-3 cursor-pointer">
              <input
                type="radio"
                name="rfxVisibility"
                checked={rfxVisibility === "invited"}
                onChange={() => setRfxVisibility("invited")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Users size={18} />
                  Invited Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Only invited  Sellers can view this RFX
                </p>
              </div>
            </label>
          </div>
        </section>
      </div>
    );
  };

  return (
    <div className="min-h-screen font-sans bg-gray-50">
      {renderStepHeader()}

      <main className="max-w-6xl mx-auto mt-12 mb-20 px-4">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          {currentStep === 0 && renderRFQInformation()}
          {currentStep === 1 && renderRFQDetails()}
          {currentStep === 2 && renderReviewAndSubmit()}

          <div className="p-6 flex justify-end gap-3 border-t flex-wrap">
            <button
              type="button"
              className="px-6 py-2 border rounded"
              style={{
                color: colors.deepGreen,
                borderColor: colors.deepGreen,
              }}
            >
              Cancel
            </button>

            <button
              type="button"
              className="px-6 py-2 border rounded"
              style={{
                color: colors.deepGreen,
                borderColor: colors.deepGreen,
              }}
            >
              Save Draft
            </button>

            {currentStep < 2 ? (
              <button
                type="button"
                onClick={handleSaveNext}
                className="px-6 py-2 text-white rounded flex items-center gap-2"
                style={{ backgroundColor: colors.deepGreen }}
              >
                <ArrowRight size={18} />
                Save & Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmitRFX}
                className="px-6 py-2 text-white rounded flex items-center gap-2"
                style={{ backgroundColor: colors.deepGreen }}
              >
                Submit RFX
              </button>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerRFXcreate;