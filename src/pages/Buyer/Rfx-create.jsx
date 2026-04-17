import React, { useMemo, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  Calendar,
  Plus,
  Trash2,
  Search,
  Mail,
  Globe,
  Users,
  Star,
  FileText,
} from "lucide-react";

const BuyerRFXcreate = () => {
  const colors = {
    dark: "#2A2A2A",
    deepGreen: "#43624A",
    mutedGreen: "#7A9C83",
    offWhite: "#F5F2EA",
    lightBorder: "#E5E7EB",
  };

  const [activeTopTab, setActiveTopTab] = useState("general");
  const [currentStep, setCurrentStep] = useState(0);

  const [purpose, setPurpose] = useState("tender");
  const [requisitionType, setRequisitionType] = useState("rfq");

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    industry: "",
    subItems: [],
    publishDate: "",
    closingDate: "",
    supplierMode: "search",
    invitedEmails: [""],
    visibility: "public",
  });

  const [items, setItems] = useState([
    {
      itemId: "",
      itemName: "",
      quantity: "",
      deliveryTime: "",
      paymentTerms: "",
    },
  ]);

  const industryOptions = {
    "Construction & General Consumables": [
      "Structural: TMT Bars (Steel)",
      "Cement",
      "Fine Sand",
      "Aggregates",
      "Bricks/Blocks",
      "Fasteners",
      "Safety (PPE)",
      "Chemicals",
      "Others",
    ],
    "Mechanical & HVAC": [
      "Air Distribution",
      "Refrigeration",
      "Equipment",
      "Ventilation",
      "Valves & Gauges",
      "Others",
    ],
    "Plumbing & Firefighting": [
      "Piping Systems",
      "Fittings",
      "Firefighting",
      "Pumps & Tanks",
      "Sanitaryware",
      "Others",
    ],
    "Electrical & Power": [
      "Containment",
      "Wires & Cables",
      "Switchgear",
      "Wiring Accessories",
      "Lighting",
      "Others",
    ],
    "Smart Building & Home Automation": [
      "Security & Surveillance",
      "Access Control",
      "Home Automation",
      "Audio/Video Systems",
      "Others",
    ],
    "Renewable Energy & Solar": [
      "Solar Panels",
      "Inverters",
      "Mounting Structures",
      "Batteries",
      "Accessories",
      "Others",
    ],
    "Green & Sustainable Building Materials": [
      "Eco Blocks",
      "Low VOC Paints",
      "Recycled Materials",
      "Insulation",
      "Water Saving Products",
      "Others",
    ],
    "Interior Fit-Out & Facades": [
      "Ceiling Materials",
      "Partitions",
      "Flooring",
      "Cladding",
      "Glass & Aluminium",
      "Others",
    ],
    "Tools & Hardware": [
      "Hand Tools",
      "Power Tools",
      "Fixing Materials",
      "Hardware Accessories",
      "Safety Tools",
      "Others",
    ],
    "Project Work": [
      "Civil Works",
      "MEP Works",
      "Interior Works",
      "Maintenance Works",
      "Specialized Contracting",
      "Others",
    ],
    Others: ["General Items", "Custom Requirement"],
  };

  const currentSubItems = useMemo(() => {
    return industryOptions[formData.industry] || [];
  }, [formData.industry]);

  const steps = [
    "RFQ Information",
    "RFQ Details",
    "Review & Submit",
  ];

  const handleFormChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const toggleSubItem = (subItem) => {
    setFormData((prev) => {
      const exists = prev.subItems.includes(subItem);
      return {
        ...prev,
        subItems: exists
          ? prev.subItems.filter((item) => item !== subItem)
          : [...prev.subItems, subItem],
      };
    });
  };

  const handleIndustryChange = (value) => {
    setFormData((prev) => ({
      ...prev,
      industry: value,
      subItems: [],
    }));
  };

  const handleItemChange = (index, field, value) => {
    const updated = [...items];
    updated[index][field] = value;
    setItems(updated);
  };

  const addItemRow = () => {
    setItems((prev) => [
      ...prev,
      {
        itemId: "",
        itemName: "",
        quantity: "",
        deliveryTime: "",
        paymentTerms: "",
      },
    ]);
  };

  const removeItemRow = (index) => {
    if (items.length === 1) return;
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  const handleInviteEmailChange = (index, value) => {
    const updated = [...formData.invitedEmails];
    updated[index] = value;
    setFormData((prev) => ({
      ...prev,
      invitedEmails: updated,
    }));
  };

  const addInviteEmail = () => {
    setFormData((prev) => ({
      ...prev,
      invitedEmails: [...prev.invitedEmails, ""],
    }));
  };

  const removeInviteEmail = (index) => {
    if (formData.invitedEmails.length === 1) return;
    const updated = formData.invitedEmails.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      invitedEmails: updated,
    }));
  };

  const goNext = () => {
    if (currentStep < 2) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    const payload = {
      ...formData,
      requisitionType,
      purpose,
      items,
    };

    console.log("SUBMIT RFX DATA:", payload);
    alert("RFX ready to submit. Check console for payload.");
  };

  const renderStepIndicator = () => {
    return (
      <div className="flex items-center grow justify-center max-w-3xl">
        {steps.map((step, i) => (
          <React.Fragment key={step}>
            <div className="flex flex-col items-center relative">
              <div
                className="w-6 h-6 rounded-full border-2 z-10"
                style={{
                  backgroundColor:
                    i <= currentStep ? colors.mutedGreen : "#FFF",
                  borderColor:
                    i <= currentStep
                      ? colors.mutedGreen
                      : `${colors.mutedGreen}44`,
                }}
              />
              <span className="absolute -bottom-7 whitespace-nowrap text-[11px] font-bold text-gray-600">
                {step}
              </span>
            </div>

            {i !== steps.length - 1 && (
              <div
                className="h-[2px] grow mx-2"
                style={{
                  backgroundColor:
                    i < currentStep
                      ? colors.mutedGreen
                      : `${colors.mutedGreen}33`,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  const renderInformationStep = () => {
    return (
      <div className="p-6 md:p-10 space-y-8">
        <div className="flex bg-gray-50 p-2 gap-2 rounded-lg border border-gray-100">
          <button
            onClick={() => setActiveTopTab("general")}
            className={`flex-1 py-3 rounded text-sm font-bold ${
              activeTopTab === "general"
                ? "bg-white shadow-sm text-gray-700"
                : "text-gray-500"
            }`}
          >
            General Info
          </button>
          <button
            onClick={() => setActiveTopTab("main")}
            className={`flex-1 py-3 rounded text-sm font-bold ${
              activeTopTab === "main"
                ? "bg-white shadow-sm text-gray-700"
                : "text-gray-500"
            }`}
          >
            Main Info
          </button>
        </div>

        {activeTopTab === "general" && (
          <>
            <div>
              <label
                className="block text-sm font-bold mb-3"
                style={{ color: colors.deepGreen }}
              >
                Purpose
              </label>

              <div className="flex gap-8">
                {["procurement", "tender"].map((item) => (
                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="purpose"
                      checked={purpose === item}
                      onChange={() => setPurpose(item)}
                    />
                    <span className="capitalize text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-2xl font-bold text-black mb-2">
                RFX/RFQ Heading
              </label>
              <input
                type="text"
                placeholder="Enter RFX/RFQ title"
                value={formData.title}
                onChange={(e) => handleFormChange("title", e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
              />
            </div>

            <div>
              <label className="block text-2xl font-bold text-black mb-2">
                Description
              </label>
              <textarea
                rows="4"
                placeholder="Enter project description"
                value={formData.description}
                onChange={(e) =>
                  handleFormChange("description", e.target.value)
                }
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none resize-none"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Industry
                </label>
                <select
                  value={formData.industry}
                  onChange={(e) => handleIndustryChange(e.target.value)}
                  className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                >
                  <option value="">Select Industry</option>
                  {Object.keys(industryOptions).map((industry) => (
                    <option key={industry} value={industry}>
                      {industry}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  RFX Type
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setRequisitionType("rfq")}
                    className="p-4 border-2 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor:
                        requisitionType === "rfq" ? colors.offWhite : "#FFF",
                      borderColor:
                        requisitionType === "rfq"
                          ? colors.deepGreen
                          : colors.lightBorder,
                    }}
                  >
                    <strong>RFQ</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Price focused request
                    </p>
                  </div>

                  <div
                    onClick={() => setRequisitionType("rfp")}
                    className="p-4 border-2 rounded-lg cursor-pointer"
                    style={{
                      backgroundColor:
                        requisitionType === "rfp" ? colors.offWhite : "#FFF",
                      borderColor:
                        requisitionType === "rfp"
                          ? colors.deepGreen
                          : colors.lightBorder,
                    }}
                  >
                    <strong>RFP</strong>
                    <p className="text-sm text-gray-600 mt-1">
                      Proposal focused request
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {formData.industry && (
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-3">
                  Sub Items
                </label>

                <div className="grid md:grid-cols-2 gap-3">
                  {currentSubItems.map((subItem) => (
                    <label
                      key={subItem}
                      className="flex items-start gap-2 border border-gray-200 rounded-md p-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={formData.subItems.includes(subItem)}
                        onChange={() => toggleSubItem(subItem)}
                        className="mt-1"
                      />
                      <span className="text-sm text-gray-700">{subItem}</span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Publish Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.publishDate}
                    onChange={(e) =>
                      handleFormChange("publishDate", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                  <Calendar
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Closing Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={formData.closingDate}
                    onChange={(e) =>
                      handleFormChange("closingDate", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                  <Calendar
                    size={18}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
              </div>
            </div>
          </>
        )}

        {activeTopTab === "main" && (
          <div className="space-y-6">
            <div className="p-5 border rounded-lg bg-gray-50">
              <h3
                className="text-lg font-bold mb-2"
                style={{ color: colors.deepGreen }}
              >
                Main Info
              </h3>
              <p className="text-sm text-gray-600">
                You can keep additional main information fields here later if
                needed.
              </p>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderDetailsStep = () => {
    return (
      <div className="p-6 md:p-10 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-black">Items</h2>
          <button
            onClick={addItemRow}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white"
            style={{ backgroundColor: colors.deepGreen }}
          >
            <Plus size={16} />
            Add Item
          </button>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl overflow-hidden"
            >
              <div
                className="px-4 py-3 text-white font-bold"
                style={{ backgroundColor: "#1976E8" }}
              >
                Item {index + 1}
              </div>

              <div className="p-4 grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold mb-2">Item ID</label>
                  <input
                    type="text"
                    placeholder="Enter item ID"
                    value={item.itemId}
                    onChange={(e) =>
                      handleItemChange(index, "itemId", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Item Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter item name"
                    value={item.itemName}
                    onChange={(e) =>
                      handleItemChange(index, "itemName", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold mb-2">
                    Quantity
                  </label>
                  <input
                    type="text"
                    placeholder="Enter quantity"
                    value={item.quantity}
                    onChange={(e) =>
                      handleItemChange(index, "quantity", e.target.value)
                    }
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                </div>

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
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                </div>

                <div className="md:col-span-2">
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
                    className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                </div>
              </div>

              <div className="px-4 pb-4 flex justify-end">
                <button
                  onClick={() => removeItemRow(index)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-red-300 text-red-600"
                >
                  <Trash2 size={16} />
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderReviewStep = () => {
    return (
      <div className="p-6 md:p-10 space-y-10">
        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Review Summary</h2>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-bold">Title:</span> {formData.title || "-"}
            </div>
            <div>
              <span className="font-bold">Purpose:</span> {purpose}
            </div>
            <div>
              <span className="font-bold">RFX Type:</span> {requisitionType.toUpperCase()}
            </div>
            <div>
              <span className="font-bold">Industry:</span> {formData.industry || "-"}
            </div>
            <div className="md:col-span-2">
              <span className="font-bold">Description:</span>{" "}
              {formData.description || "-"}
            </div>
            <div className="md:col-span-2">
              <span className="font-bold">Selected Sub Items:</span>{" "}
              {formData.subItems.length > 0
                ? formData.subItems.join(", ")
                : "-"}
            </div>
          </div>
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">Search Suppliers</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <label className="border rounded-lg p-4 cursor-pointer flex items-start gap-3">
              <input
                type="radio"
                name="supplierMode"
                checked={formData.supplierMode === "search"}
                onChange={() => handleFormChange("supplierMode", "search")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Search size={18} />
                  Search Supplier
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Search and choose suppliers
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 cursor-pointer flex items-start gap-3">
              <input
                type="radio"
                name="supplierMode"
                checked={formData.supplierMode === "favourite"}
                onChange={() => handleFormChange("supplierMode", "favourite")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Star size={18} />
                  Favourite Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Select from saved favourite suppliers
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 cursor-pointer flex items-start gap-3">
              <input
                type="radio"
                name="supplierMode"
                checked={formData.supplierMode === "invite"}
                onChange={() => handleFormChange("supplierMode", "invite")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Mail size={18} />
                  Invite Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Add supplier email IDs manually
                </p>
              </div>
            </label>
          </div>

          {formData.supplierMode === "search" && (
            <div className="mt-6">
              <label className="block text-sm font-bold mb-2">
                Search Supplier
              </label>
              <input
                type="text"
                placeholder="Search supplier name, company, or category"
                className="w-full border border-gray-300 rounded-md px-4 py-3 outline-none"
              />
            </div>
          )}

          {formData.supplierMode === "favourite" && (
            <div className="mt-6 p-4 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-600">
              Favourite suppliers list can be connected here.
            </div>
          )}

          {formData.supplierMode === "invite" && (
            <div className="mt-6 space-y-3">
              <label className="block text-sm font-bold">
                Invite Supplier Emails
              </label>

              {formData.invitedEmails.map((email, index) => (
                <div key={index} className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter supplier email"
                    value={email}
                    onChange={(e) =>
                      handleInviteEmailChange(index, e.target.value)
                    }
                    className="flex-1 border border-gray-300 rounded-md px-4 py-3 outline-none"
                  />
                  <button
                    onClick={() => removeInviteEmail(index)}
                    className="px-4 py-3 border border-red-300 text-red-600 rounded-md"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}

              <button
                onClick={addInviteEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white"
                style={{ backgroundColor: colors.deepGreen }}
              >
                <Plus size={16} />
                Add Email
              </button>
            </div>
          )}
        </div>

        <div className="border border-gray-200 rounded-xl p-6">
          <h2 className="text-xl font-bold mb-5">RFX Visibility</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <label className="border rounded-lg p-4 cursor-pointer flex items-start gap-3">
              <input
                type="radio"
                name="visibility"
                checked={formData.visibility === "public"}
                onChange={() => handleFormChange("visibility", "public")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Globe size={18} />
                  Public
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  This RFX will be visible publicly
                </p>
              </div>
            </label>

            <label className="border rounded-lg p-4 cursor-pointer flex items-start gap-3">
              <input
                type="radio"
                name="visibility"
                checked={formData.visibility === "invited"}
                onChange={() => handleFormChange("visibility", "invited")}
              />
              <div>
                <div className="flex items-center gap-2 font-bold">
                  <Users size={18} />
                  Invited Suppliers
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Only invited suppliers can view this RFX
                </p>
              </div>
            </label>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <button
          onClick={goBack}
          className="flex items-center gap-1 font-bold text-sm uppercase tracking-wide"
          style={{ color: colors.deepGreen }}
        >
          <ChevronLeft size={20} />
          Back
        </button>

        {renderStepIndicator()}

        <div className="w-20" />
      </header>

      <main className="max-w-6xl mx-auto mt-10 mb-20 px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="border-b border-gray-100 px-6 py-4 flex items-center gap-2">
            <FileText size={20} style={{ color: colors.deepGreen }} />
            <h1
              className="text-lg md:text-xl font-bold"
              style={{ color: colors.deepGreen }}
            >
              Buyer RFX Create
            </h1>
          </div>

          {currentStep === 0 && renderInformationStep()}
          {currentStep === 1 && renderDetailsStep()}
          {currentStep === 2 && renderReviewStep()}

          <div className="p-6 flex flex-wrap justify-end gap-3 border-t">
            <button
              className="px-6 py-2 border rounded-md"
              style={{
                color: colors.deepGreen,
                borderColor: colors.deepGreen,
              }}
            >
              Cancel
            </button>

            {currentStep < 2 && (
              <button
                className="px-6 py-2 border rounded-md"
                style={{
                  color: colors.deepGreen,
                  borderColor: colors.deepGreen,
                }}
              >
                Save Draft
              </button>
            )}

            {currentStep < 2 ? (
              <button
                onClick={goNext}
                className="px-6 py-2 text-white rounded-md flex items-center gap-2"
                style={{ backgroundColor: colors.deepGreen }}
              >
                <ArrowRight size={18} />
                Save & Next
              </button>
            ) : (
              <>
                <button
                  className="px-6 py-2 border rounded-md"
                  style={{
                    color: colors.deepGreen,
                    borderColor: colors.deepGreen,
                  }}
                >
                  Save Draft
                </button>

                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 text-white rounded-md flex items-center gap-2"
                  style={{ backgroundColor: colors.deepGreen }}
                >
                  Submit RFX
                </button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerRFXcreate;