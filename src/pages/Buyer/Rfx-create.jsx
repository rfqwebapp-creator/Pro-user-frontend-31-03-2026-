import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../api";
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
  const { id } = useParams();        // ✅ add here
  const navigate = useNavigate();    // ✅ add here
  const isEditMode = !!id;           // ✅ add here

  const [procurementType, setProcurementType] = useState("spot");
  const [requisitionType, setRequisitionType] = useState("rfq");
  const [bidType, setBidType] = useState("Open");

  const [purpose, setPurpose] = useState("procurement");
  const [evaluationMethod, setEvaluationMethod] = useState("");

  const [currentStep, setCurrentStep] = useState(0);

  const [classification, setClassification] = useState("");
  const [costCenters, setCostCenters] = useState([]);
 

  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedSubItems, setSelectedSubItems] = useState([]);

const [items, setItems] = useState([
  {
    slNo: 1,
    itemDescription: "",
    quantity: "",
    unit: "",
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
      unit: "",
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

//   const handleSubmitRFX = async () => {
//   try {
//     const payload = {
//       procurementType,
//       requisitionType,
//       bidType,
//       purpose,
//       evaluationMethod,
//       classification,
//       costCenters,
//       publishDate: publishDate,
// closingDate: closingDate,
//       heading,
//       description,
//       selectedIndustry,
//       selectedSubItems,
//       items,
//       itemDescriptionNote,
//       documents,
//       deliveryTime,
//       paymentTerms,
//       supplierOption,
//       searchSupplierText,
//       favouriteSuppliers,
//       inviteEmails,
//       rfxVisibility,
//       status: "IN_REVIEW", // final submit status
//     };

//     const res = await API.post("/rfq/create", payload);

//     if (res.data.success) {
//       alert("RFX Submitted successfully");
//     }
//   } catch (error) {
//     console.error("SUBMIT ERROR:", error);
//     alert("Failed to submit RFQ");
//   }
// };
// const handleSubmitRFX = async () => {
//   try {
//     setIsSubmitting(true);

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
//       itemDescriptionNote,
//       documents,
//       deliveryTime,
//       paymentTerms,
//       supplierOption,
//       searchSupplierText,
//       favouriteSuppliers,
//       inviteEmails,
//       rfxVisibility,
//       status: "IN_REVIEW",
//     };

//     const res = await API.post("/rfq/create", payload);

//     if (res.data.success) {
//       alert("RFX Submitted successfully");
//       setShowSubmitPopup(false);
//     }
//   } catch (error) {
//     console.error("SUBMIT ERROR:", error);
//     alert("Failed to submit RFQ");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

const handleSubmitRFX = async () => {
  try {
    setIsSubmitting(true);

    const payload = {
      heading,
      description,
      procurementType,
      requisitionType,
      bidType,
      purpose,
      evaluationMethod,
      classification,
      publishDate,
      closingDate,
      selectedIndustry,
      selectedSubItems,
      items,
      itemDescriptionNote,
      documents,
      deliveryTime,
      paymentTerms,
      supplierOption,
      searchSupplierText,
      inviteEmails,
      rfxVisibility,
      costCenters,
      status: "IN_REVIEW",
    };

    let res;

    if (isEditMode) {
      res = await API.put(`/rfq/${id}`, payload);
      await API.put(`/rfq/${id}/status`, { status: "IN_REVIEW" });
    } else {
      res = await API.post("/rfq/create", payload);
    }

    if (res.data.success) {
      alert(isEditMode ? "Draft submitted successfully" : "RFX submitted successfully");
      setShowSubmitPopup(false);
      navigate("/buyer/rfq");
    }
  } catch (error) {
    console.error("SUBMIT ERROR:", error);
    alert("Failed to submit RFQ");
  } finally {
    setIsSubmitting(false);
  }
};
const handleSaveDraft = async () => {
  try {
    const payload = {
      heading,
      description,
      procurementType,
      requisitionType,
      bidType,
      purpose,
      evaluationMethod,
      classification,
      publishDate,
      closingDate,
      selectedIndustry,
      selectedSubItems,
      items,
      itemDescriptionNote,
      documents,
      deliveryTime,
      paymentTerms,
      supplierOption,
      searchSupplierText,
      inviteEmails,
      rfxVisibility,
      costCenters,
      status: "DRAFT",
    };

    let res;

    if (isEditMode) {
      res = await API.put(`/rfq/${id}`, payload);
      await API.put(`/rfq/${id}/status`, { status: "DRAFT" });
    } else {
      res = await API.post("/rfq/create", payload);
    }

    if (res.data.success) {
      alert("Draft saved successfully");
    }
  } catch (error) {
    console.error("SAVE DRAFT ERROR:", error);
    alert("Failed to save draft");
  }
};

   const [documents, setDocuments] = useState([
  { name: "", url: "", file: null },
]);
const handleDocChange = (index, field, value) => {
  const updated = [...documents];
  updated[index][field] = value;
  setDocuments(updated);
};

const handleAddDoc = () => {
  setDocuments([...documents, { name: "", url: "", file: null }]);
};
const handleRemoveDoc = (index) => {
  if (documents.length === 1) return;
  setDocuments(documents.filter((_, i) => i !== index));
};
const [itemDescriptionNote, setItemDescriptionNote] = useState("");
const [deliveryTime, setDeliveryTime] = useState("");
const [paymentTerms, setPaymentTerms] = useState("");
const [selectedCountry, setSelectedCountry] = useState("");
const [selectedState, setSelectedState] = useState("");
const [selectedDistrict, setSelectedDistrict] = useState("");
//for getting poup when clciking on submit rfx

const [showSubmitPopup, setShowSubmitPopup] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const openSubmitPopup = () => {
  setShowSubmitPopup(true);
};

const closeSubmitPopup = () => {
  setShowSubmitPopup(false);
};
const locationData = {
  India: {
    states: {
      Kerala: ["Ernakulam", "Kottayam", "Thrissur", "Kozhikode"],
      "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai"],
      Karnataka: ["Bengaluru", "Mysuru", "Mangaluru"],
      Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    },
  },
  Bahrain: {
    states: {
      Capital: ["Manama"],
      Muharraq: ["Muharraq"],
      Northern: ["Aali", "Budaiya"],
      Southern: ["Riffa", "Hamad Town"],
    },
  },
  Saudi: {
    states: {
      Riyadh: ["Riyadh City", "Al Kharj"],
      Makkah: ["Jeddah", "Makkah", "Taif"],
      Eastern: ["Dammam", "Khobar", "Jubail"],
    },
  },
  Qatar: {
    states: {
      Doha: ["Doha"],
      "Al Rayyan": ["Al Rayyan"],
      "Al Wakrah": ["Al Wakrah"],
      "Umm Salal": ["Umm Salal"],
    },
  },
  UAE: {
    states: {
      Dubai: ["Dubai"],
      "Abu Dhabi": ["Abu Dhabi", "Al Ain"],
      Sharjah: ["Sharjah", "Khor Fakkan"],
      Ajman: ["Ajman"],
    },
  },
  USA: {
    states: {
      California: ["Los Angeles", "San Diego", "San Francisco"],
      Texas: ["Houston", "Dallas", "Austin"],
      Florida: ["Miami", "Orlando", "Tampa"],
      "New York": ["New York City", "Buffalo", "Albany"],
    },
  },
};
const countryOptions = Object.keys(locationData);
const stateOptions = selectedCountry
  ? Object.keys(locationData[selectedCountry]?.states || {})
  : [];

const districtOptions =
  selectedCountry && selectedState
    ? locationData[selectedCountry]?.states?.[selectedState] || []
    : [];
const handleDocFileChange = (index, file) => {
  if (!file) return; // ✅ add this

  if (file.size > 10 * 1024 * 1024) {
    alert("File size should be less than 10MB");
    return;
  }

  const updated = [...documents];
  updated[index].file = file;
  setDocuments(updated);
};
 
const [publishDate, setPublishDate] = useState("");
const [closingDate, setClosingDate] = useState("");

const [costCenterInput, setCostCenterInput] = useState("");
const [costCenterSuggestions, setCostCenterSuggestions] = useState([]);

//draft
useEffect(() => {
  if (id) {
    fetchDraftRFQ();
  } else {
    resetForm();
  }
}, [id]);

const fetchDraftRFQ = async () => {
  try {
    const res = await API.get(`/rfq/${id}`);

    if (res.data.success) {
      const data = res.data.data;

      setHeading(data.heading || "");
      setDescription(data.description || "");
      setProcurementType(data.procurement_type || "spot");
      setRequisitionType(data.requisition_type || "rfq");
      setBidType(data.bid_type || "Open");
      setPurpose(data.purpose || "procurement");
      setEvaluationMethod(data.evaluation_method || "");
      setClassification(data.classification || "");
      setPublishDate(data.publish_date ? formatDateTimeLocal(data.publish_date) : "");
      setClosingDate(data.closing_date ? formatDateTimeLocal(data.closing_date) : "");
      setSelectedIndustry(data.selected_industry || "");
      setSelectedSubItems(data.selectedSubItems || []);
      setItemDescriptionNote(data.item_description_note || "");
      setDeliveryTime(data.delivery_time || "");
      setPaymentTerms(data.payment_terms || "");
      setSupplierOption(data.supplier_option || "search");
      setSearchSupplierText(data.search_supplier_text || "");
      setInviteEmails(data.inviteEmails?.length ? data.inviteEmails : [""]);
      setRfxVisibility(data.rfx_visibility || "public");
      setCostCenters(data.costCenters || []);
      setItems(
        data.items?.length
          ? data.items.map((item, index) => ({
              slNo: item.sl_no || index + 1,
              itemDescription: item.item_description || "",
              quantity: item.quantity || "",
              unit: item.unit || "",
            }))
          : [
              {
                slNo: 1,
                itemDescription: "",
                quantity: "",
                unit: "",
              },
            ]
      );

      setDocuments(
        data.documents?.length
          ? data.documents.map((doc) => ({
              name: doc.name || "",
              url: doc.url || "",
              file: null,
            }))
          : [{ name: "", url: "", file: null }]
      );
    }
  } catch (error) {
    console.error("FETCH DRAFT ERROR:", error);
    alert("Failed to load draft RFQ");
  }
};
const resetForm = () => {
  setProcurementType("spot");
  setRequisitionType("rfq");
  setBidType("Open");
  setPurpose("procurement");
  setEvaluationMethod("");
  setCurrentStep(0);
  setClassification("");
  setCostCenters([]);
  setHeading("");
  setDescription("");
  setSelectedIndustry("");
  setSelectedSubItems([]);
  setItems([
    {
      slNo: 1,
      itemDescription: "",
      quantity: "",
      unit: "",
    },
  ]);
  setSupplierOption("search");
  setSearchSupplierText("");
  setFavouriteSuppliers([]);
  setInviteEmails([""]);
  setRfxVisibility("public");
  setDocuments([{ name: "", url: "", file: null }]);
  setItemDescriptionNote("");
  setDeliveryTime("");
  setPaymentTerms("");
  setSelectedCountry("");
  setSelectedState("");
  setSelectedDistrict("");
  setPublishDate("");
  setClosingDate("");
};
const formatDateTimeLocal = (dateString) => {
  if (!dateString) return "";
  const date = new Date(dateString);
  const pad = (num) => String(num).padStart(2, "0");

  const year = date.getFullYear();
  const month = pad(date.getMonth() + 1);
  const day = pad(date.getDate());
  const hours = pad(date.getHours());
  const minutes = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
};
useEffect(() => {
  fetchCostCenterSuggestions();
}, []);

const fetchCostCenterSuggestions = async () => {
  try {
    const res = await API.get("/rfq/cost-centers/suggestions");
    if (res.data.success) {
      setCostCenterSuggestions(res.data.data || []);
    }
  } catch (error) {
    console.error("FETCH COST CENTERS ERROR:", error);
  }
};
const addCostCenter = (value) => {
  const cleanValue = value.trim();
  if (!cleanValue) return;

  if (!costCenters.map(c => c.toLowerCase()).includes(cleanValue.toLowerCase())) {
    setCostCenters([...costCenters, cleanValue]);
  }

  setCostCenterInput("");
};

const removeCostCenter = (index) => {
  setCostCenters(costCenters.filter((_, i) => i !== index));
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
              RFQ/RFP  Heading
            </label>
            <input
              type="text"
              placeholder="Enter RFQ/RFP  title"
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

        <section className="grid grid-cols-3 gap-12">
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

        <section className="grid grid-cols-3 gap-12">
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
<section className="border border-gray-200 rounded-lg p-6"><div>
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
 <section className="flex gap-12 items-start mt-6">
  {/* LEFT LABEL */}
  <div className="w-[220px] pt-2">
    <h2
      className="text-lg font-bold"
      style={{ color: colors.deepGreen }}
    >
      Cost Centers
    </h2>
  </div>

  {/* RIGHT INPUT */}
  <div className="flex-1">
    <input
      type="text"
      value={costCenterInput}
      placeholder="Enter cost center"
      onChange={(e) => {
        setCostCenterInput(e.target.value);
        if (costCenterSuggestions.includes(e.target.value)) {
          addCostCenter(e.target.value);
        }
      }}
      className="w-full border border-gray-300 rounded px-4 py-3"
    />

    <button
      type="button"
      onClick={() => addCostCenter(costCenterInput)}
      className="mt-3 px-4 py-2 text-white rounded"
      style={{ backgroundColor: colors.deepGreen }}
    >
      Add Cost Center
    </button>

    <div className="flex flex-wrap gap-2 mt-4">
      {costCenters.map((item, index) => (
        <span
          key={index}
          className="px-3 py-1 rounded-full bg-gray-100 border text-sm flex items-center gap-2"
        >
          {item}
          <button
            type="button"
            onClick={() => removeCostCenter(index)}
            className="text-red-500 font-bold"
          >
            ×
          </button>
        </span>
      ))}
    </div>
  </div>
</section>
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

      <section className="grid grid-cols-3 gap-12">
  <div>
    <h2
      className="text-lg font-bold flex items-center gap-2"
      style={{ color: colors.deepGreen }}
    >
      <Calendar size={20} /> RFX Timeline
    </h2>
  </div>

  <div className="col-span-2 grid grid-cols-2 gap-6">
    {/* Publish Date */}
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">
        Publish Date
      </label>

<input
  type="datetime-local"
  value={publishDate}
  onChange={(e) => setPublishDate(e.target.value)}
        className="w-full p-3 border rounded"
      />
    </div>

    {/* Closing Date */}
    <div>
      <label className="text-xs font-bold text-gray-500 uppercase mb-2 block">
        Closing Date
      </label>

      <input
        type="datetime-local"
        value={closingDate}
        onChange={(e) => setClosingDate(e.target.value)}
        className="w-full p-3 border rounded"
      />
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

<div className="border border-gray-200 rounded-lg overflow-hidden">
  <table className="w-full border-collapse">
    
    <thead className="bg-gray-100">
      <tr>
        <th className="border p-3 text-left">SL No</th>
        <th className="border p-3 text-left">Item Description</th>
        <th className="border p-3 text-left">Quantity</th>
        <th className="border p-3 text-left">Unit</th>
        <th className="border p-3 text-center">Action</th>
      </tr>
    </thead>

    <tbody>
      {items.map((item, index) => (
        <tr key={index}>
          <td className="border p-2">
            <input
              type="text"
              value={item.slNo}
              readOnly
              className="w-full bg-gray-100 p-2"
            />
          </td>

          <td className="border p-2">
            <input
              type="text"
              value={item.itemDescription}
              onChange={(e) =>
                handleItemChange(index, "itemDescription", e.target.value)
              }
              className="w-full p-2"
            />
          </td>

          <td className="border p-2">
            <input
              type="text"
              value={item.quantity}
              onChange={(e) =>
                handleItemChange(index, "quantity", e.target.value)
              }
              className="w-full p-2"
            />
          </td>

          <td className="border p-2">
            <input
              type="text"
              value={item.unit}
              onChange={(e) =>
                handleItemChange(index, "unit", e.target.value)
              }
              className="w-full p-2"
            />
          </td>

          <td className="border p-2 text-center">
            <button
              type="button"
              onClick={() => handleRemoveItem(index)}
              className="text-red-600"
            >
              Remove
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

      {/* One-time Description */}
      <div className="mt-4">
        <label className="block text-sm font-bold mb-2">Description</label>
        <textarea
          rows="4"
          placeholder="Enter item description"
          value={itemDescriptionNote}
          onChange={(e) => setItemDescriptionNote(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3"
        />
      </div>

      {/* One-time Attach Document */}
      <div className="border border-gray-200 rounded-lg p-6 mt-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Attach Document</h2>

          <button
            type="button"
            onClick={handleAddDoc}
            className="flex items-center gap-2 px-3 py-2 text-white rounded"
            style={{ backgroundColor: colors.deepGreen }}
          >
            <Plus size={16} /> Add
          </button>
        </div>

       {documents.map((doc, index) => (
  <div key={index} className="space-y-4 mb-4 border border-gray-200 rounded-lg p-4">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Attachment Name"
        value={doc.name}
        onChange={(e) =>
          handleDocChange(index, "name", e.target.value)
        }
        className="border border-gray-300 rounded px-4 py-2"
      />

      <input
        type="text"
        placeholder="URL"
        value={doc.url}
        onChange={(e) =>
          handleDocChange(index, "url", e.target.value)
        }
        className="border border-gray-300 rounded px-4 py-2"
      />

      <button
        type="button"
        onClick={() => handleRemoveDoc(index)}
        className="border border-red-300 text-red-600 rounded px-3"
      >
        Remove
      </button>
    </div>

    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        Attach File
      </label>

     <input
  type="file"
  accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg"
  onChange={(e) => handleDocFileChange(index, e.target.files[0])}
  className="w-full border border-gray-300 rounded px-4 py-2 bg-white"
/>

     {doc.file && (
  <p className="mt-2 text-sm text-gray-600">
    {doc.file.name} ({(doc.file.size / 1024 / 1024).toFixed(2)} MB)
  </p>
)}
    </div>
  </div>
))}
      </div>

      {/* One-time Delivery & Payment */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label className="block text-sm font-bold mb-2">Delivery Time</label>
          <input
            type="text"
            placeholder="e.g. 2 Weeks"
            value={deliveryTime}
            onChange={(e) => setDeliveryTime(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Payment Terms</label>
          <input
            type="text"
            placeholder="e.g. 30% Advance, 70% After Delivery"
            value={paymentTerms}
            onChange={(e) => setPaymentTerms(e.target.value)}
            className="w-full border border-gray-300 rounded px-4 py-3"
          />
        </div>
      </div>
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
  <div className="mt-6 space-y-6">
    <div>
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

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          Country
        </label>
        <select
          value={selectedCountry}
          onChange={(e) => {
            setSelectedCountry(e.target.value);
            setSelectedState("");
            setSelectedDistrict("");
          }}
          className="w-full border border-gray-300 rounded px-4 py-3 bg-white"
        >
          <option value="">All Countries</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          State
        </label>
        <select
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
            setSelectedDistrict("");
          }}
          className="w-full border border-gray-300 rounded px-4 py-3 bg-white"
          disabled={!selectedCountry}
        >
          <option value="">All States</option>
          {stateOptions.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-2">
          District
        </label>
        <select
          value={selectedDistrict}
          onChange={(e) => setSelectedDistrict(e.target.value)}
          className="w-full border border-gray-300 rounded px-4 py-3 bg-white"
          disabled={!selectedState}
        >
          <option value="">All Districts</option>
          {districtOptions.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
    </div>
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
  onClick={handleSaveDraft}
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
               onClick={openSubmitPopup}
                className="px-6 py-2 text-white rounded flex items-center gap-2"
                style={{ backgroundColor: colors.deepGreen }}
              >
                Submit RFX
              </button>
            )}
          </div>
        </div>
      </main>
       
 {showSubmitPopup && (
  <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-start justify-center overflow-y-auto p-6">
    <div className="bg-white w-full max-w-4xl max-h-[90vh] rounded-[24px] shadow-2xl overflow-y-auto my-8">
      
      <div className="flex items-start justify-between px-8 py-6 border-b border-gray-200 sticky top-0 bg-white z-10">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center">
            <FileText size={30} style={{ color: colors.deepGreen }} />
          </div>

          <div>
            <h2
              className="text-3xl font-semibold mb-2"
              style={{ color: colors.deepGreen }}
            >
              Confirm RFX Submission
            </h2>
            <p className="text-gray-600 text-lg">
              Please review the details below. Is this valid? Can I permit this submission?
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={closeSubmitPopup}
          className="text-gray-500 hover:text-black text-3xl leading-none"
        >
          ×
        </button>
      </div>

     <div className="px-8 py-6 bg-[#fcfcfb]">
  <div className="mb-6">
    <h3
      className="text-2xl font-semibold flex items-center gap-3"
      style={{ color: colors.deepGreen }}
    >
      <span className="text-xl">☰</span> RFX Summary
    </h3>
  </div>

  <div className="border border-gray-200 rounded-2xl bg-white p-8 mb-8">
    <div className="grid grid-cols-2 gap-x-16 gap-y-6 text-sm">
      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">Heading</span>
        <span>:</span>
        <span>{heading || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Publish Date</span>
        <span>:</span>
        <span>{publishDate || "-"}</span>
      </div>

      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">Purpose</span>
        <span>:</span>
        <span>{purpose || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Closing Date</span>
        <span>:</span>
        <span>{closingDate || "-"}</span>
      </div>

      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">RFX Type</span>
        <span>:</span>
        <span>{requisitionType?.toUpperCase() || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Delivery Time</span>
        <span>:</span>
        <span>{deliveryTime || "-"}</span>
      </div>

      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">Bid Type</span>
        <span>:</span>
        <span>{bidType || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Payment Terms</span>
        <span>:</span>
        <span>{paymentTerms || "-"}</span>
      </div>

      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">Industry</span>
        <span>:</span>
        <span>{selectedIndustry || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Total Items</span>
        <span>:</span>
        <span>{items.length}</span>
      </div>

      <div className="flex justify-between items-center border-r border-gray-200 pr-10">
        <span className="font-semibold">Evaluation Method</span>
        <span>:</span>
        <span>{evaluationMethod || "-"}</span>
      </div>

      <div className="flex justify-between items-center">
        <span className="font-semibold">Visibility</span>
        <span>:</span>
        <span className="px-4 py-1 rounded-full text-sm bg-green-100 text-green-700">
          {rfxVisibility || "-"}
        </span>
      </div>
    </div>
  </div>

  <div className="mb-6">
    <h3
      className="text-2xl font-semibold flex items-center gap-3 mb-4"
      style={{ color: colors.deepGreen }}
    >
      <span className="text-xl">⬡</span> Item Details ({items.length})
    </h3>

    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white">
      <table className="w-full text-sm border-collapse">
        <thead className="bg-gray-50">
          <tr>
            <th className="border-b border-r p-5 text-left">SL No</th>
            <th className="border-b border-r p-5 text-left">Item Description</th>
            <th className="border-b border-r p-5 text-left">Quantity</th>
            <th className="border-b p-5 text-left">Unit</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td className="border-r border-b p-5">{item.slNo}</td>
              <td className="border-r border-b p-5">{item.itemDescription || "-"}</td>
              <td className="border-r border-b p-5">{item.quantity || "-"}</td>
              <td className="border-b p-5">{item.unit || "-"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="mt-8 bg-green-50 border border-green-100 rounded-2xl px-6 py-5 text-green-800 text-sm">
    Once submitted, the RFX will be sent for review and cannot be edited.
  </div>
</div>

      <div className="flex justify-end gap-4 px-8 py-5 border-t border-gray-200 bg-white sticky bottom-0">
        <button
          type="button"
          onClick={closeSubmitPopup}
          className="px-6 py-3 rounded-lg border border-gray-300 text-gray-700 font-medium text-sm"
        >
          ✕ No, Go Back
        </button>

        <button
          type="button"
          onClick={handleSubmitRFX}
          disabled={isSubmitting}
          className="px-6 py-3 rounded-lg text-white font-medium text-sm"
          style={{ backgroundColor: colors.deepGreen }}
        >
          {isSubmitting ? "Submitting..." : "✓ Yes, Permit Submission"}
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
};

export default BuyerRFXcreate;