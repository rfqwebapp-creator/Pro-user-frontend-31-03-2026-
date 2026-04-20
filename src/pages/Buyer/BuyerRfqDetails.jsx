import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import API from "../../api";
import {
  ArrowLeft,
  Calendar,
  FileText,
  Package,
  Truck,
  CreditCard,
  Paperclip,
  XCircle,
  Clock3,
  Hash,
  MessageCircle,
  ShoppingBag,
  Users,
  BadgeCheck,
  Building2,
  ReceiptText,
  PlusCircle,
  Target,
  Landmark,
} from "lucide-react";

const BuyerRfqDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [rfq, setRfq] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("date-change");

  const colors = {
    dark: "#2A2A2A",
    deepGreen: "#43624A",
    mutedGreen: "#7A9C83",
    offWhite: "#F5F2EA",
    danger: "#B42318",
    lightGreen: "#E8F0EA",
    borderSoft: "#E5E7EB",
  };

  const fetchRFQDetails = async () => {
    try {
      setLoading(true);

      const res = await API.get(`/rfq/${id}`);

      if (res?.data?.success) {
        setRfq(res.data.data);
      } else {
        setRfq(null);
      }
    } catch (error) {
      console.error("FETCH RFQ DETAILS ERROR:", error);
      setRfq(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchRFQDetails();
    }
  }, [id]);

  const formatDateTime = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    if (isNaN(d)) return "-";

    return d.toLocaleString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const formatDateOnly = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    if (isNaN(d)) return "-";

    return d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "DRAFT":
        return "bg-amber-50 text-amber-700 border-amber-200";
      case "IN_REVIEW":
        return "bg-blue-50 text-blue-700 border-blue-200";
      case "PUBLISHED":
        return "bg-[#F5F2EA] text-[#43624A] border-[#7A9C83]/30";
      case "ACCEPTED":
        return "bg-emerald-50 text-emerald-700 border-emerald-200";
      case "REJECTED":
        return "bg-red-50 text-red-700 border-red-200";
      case "CANCELLED":
        return "bg-red-50 text-red-700 border-red-200";
      case "QUOTATION_RECEIVED":
        return "bg-violet-50 text-violet-700 border-violet-200";
      case "PURCHASE_ORDER_ISSUED":
        return "bg-cyan-50 text-cyan-700 border-cyan-200";
      case "CLOSED_ACCEPTED_BY_BIDDER":
        return "bg-green-50 text-green-700 border-green-200";
      case "CLOSED_SELECTED_LOWEST_BIDDER":
        return "bg-lime-50 text-lime-700 border-lime-200";
      case "AWAITING_SELLER_QUOTATION":
        return "bg-orange-50 text-orange-700 border-orange-200";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  const parseArray = (value) => {
    if (!value) return [];
    if (Array.isArray(value)) return value;

    try {
      return JSON.parse(value);
    } catch {
      return [];
    }
  };

  const parseNumber = (value) => {
    if (value === null || value === undefined || value === "") return 0;
    const num = Number(value);
    return Number.isNaN(num) ? 0 : num;
  };

  const items = parseArray(rfq?.items);
  const documents = parseArray(rfq?.documents);
  const selectedSubItems = parseArray(
    rfq?.selected_sub_items || rfq?.selectedSubItems
  );
  const inviteEmails = parseArray(rfq?.invite_emails || rfq?.inviteEmails);
  const favouriteSuppliers = parseArray(
    rfq?.favourite_suppliers || rfq?.favouriteSuppliers
  );
  const costCenters = parseArray(rfq?.cost_centers || rfq?.costCenters);

  const quotesReceived =
    rfq?.quotes_received ??
    rfq?.quotesReceived ??
    rfq?.quotation_received_count ??
    rfq?.quotationReceivedCount ??
    rfq?.quote_count ??
    rfq?.quoteCount ??
    0;

  const invitedSuppliersCount =
    rfq?.invited_suppliers_count ??
    rfq?.invitedSuppliersCount ??
    rfq?.supplier_invited_count ??
    rfq?.supplierInvitedCount ??
    (inviteEmails?.length || 0);

  const rfxPurchased =
    rfq?.rfx_purchased ??
    rfq?.rfxPurchased ??
    rfq?.purchased_count ??
    rfq?.purchasedCount ??
    0;

  const chatCount =
    rfq?.chat_count ??
    rfq?.chatCount ??
    rfq?.message_count ??
    rfq?.messageCount ??
    0;

  const actionTabs = [
    {
      key: "date-change",
      label: "Date Change",
      icon: <Clock3 size={16} />,
      onClick: () => navigate(`/buyer/rfx/update/${id}?tab=date-change`),
    },
    {
      key: "add-supplier",
      label: "Add More Supplier",
      icon: <Users size={16} />,
      onClick: () => navigate(`/buyer/rfx/update/${id}?tab=add-supplier`),
    },
    {
      key: "purpose",
      label: "Purpose",
      icon: <Target size={16} />,
      onClick: () => navigate(`/buyer/rfx/update/${id}?tab=purpose`),
    },
    {
      key: "cost-center",
      label: "Cost Center",
      icon: <Landmark size={16} />,
      onClick: () => navigate(`/buyer/rfx/update/${id}?tab=cost-center`),
    },
    {
      key: "documents",
      label: "Add Documents",
      icon: <Paperclip size={16} />,
      onClick: () => navigate(`/buyer/rfx/update/${id}?tab=documents`),
    },
    {
      key: "cancel",
      label: "Cancel RFQ",
      icon: <XCircle size={16} />,
      onClick: () => handleCancelRfx(),
      danger: true,
    },
  ];

  const handleCancelRfx = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to cancel this RFQ?"
    );
    if (!confirmed) return;

    try {
      const res = await API.put(`/rfq/${id}/cancel`);

      if (res?.data?.success) {
        alert("RFQ cancelled successfully");
        fetchRFQDetails();
      } else {
        alert(res?.data?.message || "Failed to cancel RFQ");
      }
    } catch (error) {
      console.error("CANCEL RFQ ERROR:", error);
      alert("Error while cancelling RFQ");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F5F2EA]/30 p-6 md:p-10">
        <div className="max-w-7xl mx-auto animate-pulse space-y-6">
          <div className="h-10 w-40 bg-gray-200 rounded" />
          <div className="h-32 bg-white rounded-2xl" />
          <div className="h-44 bg-white rounded-2xl" />
          <div className="h-64 bg-white rounded-2xl" />
          <div className="h-64 bg-white rounded-2xl" />
        </div>
      </div>
    );
  }

  if (!rfq) {
    return (
      <div className="min-h-screen bg-[#F5F2EA]/30 p-6 md:p-10">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            RFQ Details Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The requested RFQ could not be loaded.
          </p>
          <button
            onClick={() => navigate("/buyer/rfx")}
            className="px-6 py-3 rounded-lg text-white font-medium"
            style={{ backgroundColor: colors.deepGreen }}
          >
            Back to RFQ List
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F2EA]/30 p-4 md:p-8 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Top */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-5">
          <div>
            <button
              onClick={() => navigate(-1)}
              className="inline-flex items-center gap-2 text-sm font-semibold mb-4 hover:opacity-80"
              style={{ color: colors.deepGreen }}
            >
              <ArrowLeft size={18} />
              Back
            </button>

            <h1 className="text-3xl font-bold tracking-tight">
              {rfq.heading || "Untitled RFQ"}
            </h1>

            <p className="text-sm text-gray-500 mt-2">
              Complete RFQ details view
            </p>
          </div>

          <div className="flex flex-col items-start lg:items-end gap-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold border ${getStatusStyles(
                rfq.status
              )}`}
            >
              {rfq.status?.replaceAll("_", " ") || "-"}
            </span>
          </div>
        </div>

        {/* 6 Tabs Section */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 md:p-6">
          <div className="flex items-center gap-2 mb-4">
            <ReceiptText size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">Manage RFQ</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3">
            {actionTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => {
                  setActiveTab(tab.key);
                  tab.onClick();
                }}
                className={`w-full rounded-xl border px-4 py-4 text-sm font-semibold transition flex flex-col items-center justify-center gap-2 ${
                  tab.danger
                    ? "border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
                    : activeTab === tab.key
                    ? "border-[#43624A] bg-[#E8F0EA] text-[#43624A]"
                    : "border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* RFX Summary */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <ReceiptText size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">RFQ Summary</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
            <SummaryCard
              icon={<Hash size={18} />}
              label="RFQ #"
              value={
                rfq.rfx_no ||
                rfq.rfxNo ||
                rfq.rfq_no ||
                rfq.rfqNo ||
                rfq.id ||
                "-"
              }
            />

            <SummaryCard
              icon={<Building2 size={18} />}
              label="Cost Center"
              value={
                costCenters.length > 0
                  ? costCenters.join(", ")
                  : rfq.cost_center || rfq.costCenter || "-"
              }
            />

            <SummaryCard
              icon={<Calendar size={18} />}
              label="Created On"
              value={formatDateOnly(rfq.created_at || rfq.createdAt)}
            />

            <SummaryCard
              icon={<Calendar size={18} />}
              label="Closing Date"
              value={formatDateOnly(rfq.closing_date || rfq.closingDate)}
            />

            <SummaryCard
              icon={<BadgeCheck size={18} />}
              label="Status"
              value={rfq.status?.replaceAll("_", " ") || "-"}
            />

            <SummaryCard
              icon={<FileText size={18} />}
              label="Quotes Received"
              value={String(parseNumber(quotesReceived))}
            />

            <SummaryCard
              icon={<Users size={18} />}
              label="Invited Suppliers"
              value={
                rfq.rfx_visibility === "PUBLIC" ||
                rfq.rfx_visibility === "Public" ||
                rfq.rfxVisibility === "PUBLIC" ||
                rfq.rfxVisibility === "Public"
                  ? "Public"
                  : String(parseNumber(invitedSuppliersCount))
              }
            />

            <SummaryCard
              icon={<ShoppingBag size={18} />}
              label="RFQ Purchased"
              value={String(parseNumber(rfxPurchased))}
            />

            <SummaryCard
              icon={<MessageCircle size={18} />}
              label="Chat"
              value={String(parseNumber(chatCount))}
            />

            <SummaryCard
              icon={<FileText size={18} />}
              label="Heading"
              value={rfq.heading || "-"}
            />
          </div>
        </div>

        {/* General Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <FileText size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">General Information</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InfoCard label="Heading" value={rfq.heading} />

            <InfoCard
              label="Purpose"
              value={rfq.purpose || "Procurement"}
              capitalize
            />

            <InfoCard
              label="Requisition Type"
              value={rfq.requisition_type || rfq.requisitionType}
              uppercase
            />

            <InfoCard label="Bid Type" value={rfq.bid_type || rfq.bidType} />

            <InfoCard
              label="Evaluation Method"
              value={rfq.evaluation_method || rfq.evaluationMethod}
            />

            <InfoCard
              label="Industry"
              value={rfq.selected_industry || rfq.selectedIndustry}
            />

            <InfoCard label="Description" value={rfq.description} fullWidth />

            <InfoCard
              label="Sub Items"
              value={
                selectedSubItems.length > 0 ? selectedSubItems.join(", ") : "-"
              }
              fullWidth
            />

            <InfoCard
              label="Cost Center"
              value={
                costCenters.length > 0
                  ? costCenters.join(", ")
                  : rfq.cost_center || rfq.costCenter || "-"
              }
              fullWidth
            />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Calendar size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">Timeline</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <InfoCard
              label="Publish Date"
              value={formatDateTime(rfq.publish_date || rfq.publishDate)}
            />
            <InfoCard
              label="Closing Date"
              value={formatDateTime(rfq.closing_date || rfq.closingDate)}
            />
            <InfoCard
              label="Created At"
              value={formatDateTime(rfq.created_at || rfq.createdAt)}
            />
          </div>
        </div>

        {/* Items */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Package size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">Items</h2>
          </div>

          {items.length > 0 ? (
            <div className="overflow-x-auto border border-gray-200 rounded-xl">
              <table className="w-full border-collapse">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="border-b p-3 text-left text-sm font-semibold">
                      SL No
                    </th>
                    <th className="border-b p-3 text-left text-sm font-semibold">
                      Item Description
                    </th>
                    <th className="border-b p-3 text-left text-sm font-semibold">
                      Quantity
                    </th>
                    <th className="border-b p-3 text-left text-sm font-semibold">
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-50/60">
                      <td className="border-b p-3">{item.slNo || index + 1}</td>
                      <td className="border-b p-3">
                        {item.itemDescription || item.description || "-"}
                      </td>
                      <td className="border-b p-3">{item.quantity || "-"}</td>
                      <td className="border-b p-3">{item.unit || "-"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="text-gray-500">No items available.</p>
          )}

          <div className="mt-6">
            <InfoCard
              label="Item Description Note"
              value={rfq.item_description_note || rfq.itemDescriptionNote}
              fullWidth
            />
          </div>
        </div>

        {/* Documents */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <div className="flex items-center gap-2 mb-6">
            <Paperclip size={20} style={{ color: colors.deepGreen }} />
            <h2 className="text-xl font-bold">Documents</h2>
          </div>

          {documents.length > 0 ? (
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-xl p-4 bg-gray-50/40"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InfoCard
                      label="Document Name"
                      value={doc.name || doc.documentName}
                    />
                    <InfoCard
                      label="URL"
                      value={doc.url || doc.fileUrl || "-"}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No documents attached.</p>
          )}
        </div>

        {/* Delivery / Payment */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <Truck size={20} style={{ color: colors.deepGreen }} />
              <h2 className="text-xl font-bold">Delivery</h2>
            </div>

            <InfoCard
              label="Delivery Time"
              value={rfq.delivery_time || rfq.deliveryTime}
              fullWidth
            />
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
            <div className="flex items-center gap-2 mb-6">
              <CreditCard size={20} style={{ color: colors.deepGreen }} />
              <h2 className="text-xl font-bold">Payment</h2>
            </div>

            <InfoCard
              label="Payment Terms"
              value={rfq.payment_terms || rfq.paymentTerms}
              fullWidth
            />
          </div>
        </div>

        {/* Supplier Info */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
          <h2 className="text-xl font-bold mb-6">Supplier & Visibility Details</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <InfoCard
              label="Supplier Option"
              value={rfq.supplier_option || rfq.supplierOption}
            />
            <InfoCard
              label="RFX Visibility"
              value={rfq.rfx_visibility || rfq.rfxVisibility}
            />
            <InfoCard
              label="Search Supplier Text"
              value={rfq.search_supplier_text || rfq.searchSupplierText}
            />
            <InfoCard
              label="Favourite Suppliers"
              value={
                favouriteSuppliers.length > 0
                  ? favouriteSuppliers.join(", ")
                  : "-"
              }
            />
            <InfoCard
              label="Invite Emails"
              value={inviteEmails.length > 0 ? inviteEmails.join(", ") : "-"}
              fullWidth
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ icon, label, value }) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-[#F9FAFB] p-4 shadow-sm hover:shadow-md transition">
      <div className="flex items-center gap-2 mb-2 text-[#43624A]">
        {icon}
        <p className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {label}
        </p>
      </div>
      <div className="text-sm md:text-base font-semibold text-[#2A2A2A] break-words">
        {value || "-"}
      </div>
    </div>
  );
};

const InfoCard = ({
  label,
  value,
  fullWidth = false,
  capitalize = false,
  uppercase = false,
}) => {
  let displayValue = value || "-";

  if (typeof displayValue === "string") {
    if (capitalize) {
      displayValue =
        displayValue.charAt(0).toUpperCase() + displayValue.slice(1).toLowerCase();
    }
    if (uppercase) displayValue = displayValue.toUpperCase();
  }

  return (
    <div className={fullWidth ? "md:col-span-2" : ""}>
      <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
        {label}
      </p>
      <div className="min-h-[48px] rounded-xl border border-gray-200 bg-gray-50/50 px-4 py-3 text-sm text-gray-800 break-words">
        {displayValue}
      </div>
    </div>
  );
};

export default BuyerRfqDetails;