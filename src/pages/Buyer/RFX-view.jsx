import React, { useEffect, useState } from "react";
import API from "../../api";
import { 
  FiMessageSquare, 
  FiFileText, 
  FiUsers, 
  FiShoppingCart, 
  FiSearch,
  FiFilter
} from "react-icons/fi";

const BuyerRFQView = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [rfqs, setRfqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const tabs = [
    { name: "All Requests", value: "ALL" },
    { name: "Drafts", value: "DRAFT" },
    { name: "In Review", value: "IN_REVIEW" },
  ];

  const fetchRFQs = async (status = "ALL") => {
    setLoading(true);
    try {
      const url = status === "ALL" ? "/rfq" : `/rfq?status=${status}`;
      const res = await API.get(url);
      setRfqs(res.data.data || []);
    } catch (error) {
      console.error("FETCH RFQS ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRFQs(activeTab);
  }, [activeTab]);

  const formatDate = (date) => {
    if (!date) return "-";
    const d = new Date(date);
    return isNaN(d) ? "-" : d.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const getStatusStyles = (status) => {
    switch (status) {
      case "DRAFT":
        return "bg-amber-50 text-amber-700 border-amber-100";
      case "IN_REVIEW":
        return "bg-blue-50 text-blue-700 border-blue-100";
      case "PUBLISHED":
        return "bg-[#F5F2EA] text-[#43624A] border-[#7A9C83]/30";
      default:
        return "bg-gray-50 text-gray-600 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F2EA]/30 p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#2A2A2A] tracking-tight">RFQ Management</h1>
            <p className="text-sm text-gray-500 mt-1">Monitor and manage your Request for Quotations</p>
          </div>
          <button className="bg-[#43624A] hover:bg-[#2A2A2A] text-white px-6 py-2.5 rounded-lg font-medium transition-all shadow-sm flex items-center justify-center gap-2">
            <span>+ Create New RFQ</span>
          </button>
        </div>

        {/* Filters & Tabs Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 mb-6 p-2">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <nav className="flex space-x-1">
              {tabs.map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value)}
                  className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all ${
                    activeTab === tab.value
                      ? "bg-[#7A9C83] text-white shadow-sm"
                      : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {tab.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center gap-2 px-2 w-full md:w-auto">
                <div className="relative w-full md:w-64">
                    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input 
                        type="text" 
                        placeholder="Search RFQs..." 
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#7A9C83]/50 transition-all"
                    />
                </div>
            </div>
          </div>
        </div>

        {/* Main Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left hidden md:table">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">RFQ #</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">RFQ/RFP Heading</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Cost Center</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Created On</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Closing Date</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Quotes Received</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Invited Suppliers</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">RFX Purchased</th>
                  <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Chat</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-50">
                {loading ? (
                  Array(5).fill(0).map((_, i) => (
                    <tr key={i} className="animate-pulse">
                      <td colSpan="6" className="px-6 py-6 bg-gray-50/20"></td>
                    </tr>
                  ))
                ) : rfqs.length > 0 ? (
                  rfqs.map((row, index) => (
                    <tr key={row.id} className="hover:bg-[#F5F2EA]/20 transition-colors group">
                      <td className="px-6 py-5">
                        <span className="font-mono text-xs font-bold text-[#43624A] bg-[#7A9C83]/10 px-2 py-1 rounded">
                          RFQ-{String(index + 1).padStart(3, "0")}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="font-semibold text-[#2A2A2A] group-hover:text-[#43624A] transition-colors">
                          {row.heading || "Untitled RFQ"}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <span className="text-sm text-gray-600">{row.cost_center || row.costCenter || "No Center"}</span>
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-700">
                        {formatDate(row.created_at)}
                      </td>

                      <td className="px-6 py-5 text-sm text-gray-700">
                        {formatDate(row.closing_date)}
                      </td>

                      <td className="px-6 py-5">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(row.status)}`}>
                          {row.status?.replace("_", " ")}
                        </span>
                      </td>

                      <td className="px-6 py-5 text-sm font-semibold text-[#2A2A2A]">{row.quotes_received ?? 0}</td>
                      <td className="px-6 py-5 text-sm font-semibold text-[#2A2A2A]">{row.invited_suppliers ?? 0}</td>
                      <td className="px-6 py-5 text-sm font-semibold text-[#2A2A2A]">{row.rfx_purchased ?? row.rfq_purchased ?? row.purchased_count ?? 0}</td>
                      <td className="px-6 py-5 text-right text-sm font-semibold text-[#2A2A2A]">{row.chat_count ?? 0}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="10" className="px-6 py-20 text-center">
                      <div className="flex flex-col items-center justify-center text-gray-400">
                        <FiFileText size={48} className="mb-4 opacity-20" />
                        <p className="text-lg font-medium">No RFQs found</p>
                        <p className="text-sm">Try adjusting your filters or create a new request.</p>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            <div className="md:hidden px-4 py-3 space-y-4">
              {loading ? (
                Array(3).fill(0).map((_, i) => (
                  <div key={i} className="animate-pulse bg-gray-50 rounded-2xl p-4" />
                ))
              ) : rfqs.length > 0 ? (
                rfqs.map((row, index) => (
                  <div key={row.id} className="border border-gray-200 rounded-3xl bg-white p-4 shadow-sm">
                    <div className="flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Reference</p>
                          <p className="text-sm font-semibold text-[#2A2A2A]">RFQ-{String(index + 1).padStart(3, "0")}</p>
                        </div>
                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold border ${getStatusStyles(row.status)}`}>
                          {row.status?.replace("_", " ")}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <p className="text-sm font-semibold text-[#2A2A2A]">{row.heading || "Untitled RFQ"}</p>
                        <p className="text-xs text-gray-500 uppercase">{row.cost_center || row.costCenter || "No Center"}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Created</p>
                          <p className="font-medium text-gray-900">{formatDate(row.created_at)}</p>
                        </div>
                        <div>
                          <p className="text-[11px] uppercase tracking-[0.2em] text-gray-400">Closing</p>
                          <p className="font-medium text-gray-900">{formatDate(row.closing_date)}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm text-gray-600">
                        <div className="rounded-2xl bg-[#F5F2EA] p-3 text-center">
                          <p className="text-xs text-gray-500">Quotes</p>
                          <p className="text-sm font-semibold text-[#2A2A2A]">{row.quotes_received ?? 0}</p>
                        </div>
                        <div className="rounded-2xl bg-[#F5F2EA] p-3 text-center">
                          <p className="text-xs text-gray-500">Suppliers</p>
                          <p className="text-sm font-semibold text-[#2A2A2A]">{row.invited_suppliers ?? 0}</p>
                        </div>
                        <div className="rounded-2xl bg-[#F5F2EA] p-3 text-center">
                          <p className="text-xs text-gray-500">Purchased</p>
                          <p className="text-sm font-semibold text-[#2A2A2A]">{row.rfx_purchased ?? row.rfq_purchased ?? row.purchased_count ?? 0}</p>
                        </div>
                        <div className="rounded-2xl bg-[#F5F2EA] p-3 text-center">
                          <p className="text-xs text-gray-500">Chat</p>
                          <p className="text-sm font-semibold text-[#2A2A2A]">{row.chat_count ?? 0}</p>
                        </div>
                      </div>

                      <div className="pt-2">
                        <button className="w-full rounded-lg border border-[#43624A] px-4 py-2 text-sm font-semibold text-[#43624A] hover:bg-[#43624A]/10 transition">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="rounded-3xl border border-gray-200 bg-gray-50 p-6 text-center">
                  <FiFileText size={48} className="mx-auto mb-4 text-gray-300" />
                  <p className="text-lg font-medium text-gray-700">No RFQs found</p>
                  <p className="text-sm text-gray-500">Try adjusting your filters or create a new request.</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Pagination Placeholder */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
             <span className="text-xs text-gray-500 font-medium">Showing {rfqs.length} results</span>
             <div className="flex gap-2 justify-center sm:justify-end">
                <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white disabled:opacity-50">Prev</button>
                <button className="px-3 py-1 text-xs border border-gray-300 rounded bg-white hover:bg-gray-50">Next</button>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerRFQView;