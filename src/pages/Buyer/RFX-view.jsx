import React, { useEffect, useState } from "react";
import API from "../../api";

const BuyerRFQView = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [rfqs, setRfqs] = useState([]);

  const tabs = [
    { name: "ALL", value: "ALL" },
    { name: "DRAFT", value: "DRAFT" },
  ];

  const fetchRFQs = async (status = "ALL") => {
    try {
      const url = status === "ALL" ? "/rfq" : `/rfq?status=${status}`;
      const res = await API.get(url);
      setRfqs(res.data.data || []);
    } catch (error) {
      console.error("FETCH RFQS ERROR:", error);
    }
  };

  useEffect(() => {
    fetchRFQs(activeTab);
  }, [activeTab]);

  const formatDate = (date) => {
    if (!date) return "-";

    const d = new Date(date);
    if (isNaN(d)) return "-";

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatStatus = (status) => {
    if (!status) return "-";

    const statusMap = {
      DRAFT: "Draft",
      IN_REVIEW: "In Review",
    };

    return statusMap[status] || status;
  };

  const getStatusClass = (status) => {
    switch (status) {
      case "DRAFT":
        return "text-[#B7791F] bg-[#FEF3C7]";
      case "IN_REVIEW":
        return "text-[#1D4ED8] bg-[#DBEAFE]";
      default:
        return "text-gray-700 bg-gray-100";
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F6EF] p-6 md:p-8 font-sans text-[#2A2A2A]">
      {/* Tabs */}
      <div className="mb-8">
        <div className="flex flex-wrap border border-gray-200 rounded-t-md overflow-hidden w-fit bg-white">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`px-12 py-4 text-xs font-bold tracking-wide border-r border-gray-200 last:border-r-0 min-w-[150px] transition ${
                activeTab === tab.value
                  ? "bg-[#7A9C83] text-white"
                  : "bg-white text-gray-600 hover:bg-gray-50"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white border border-gray-200 rounded-md shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[1200px] text-sm">
            <thead className="bg-white border-b border-gray-200">
              <tr className="text-left">
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  RFX #
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  RFQ/RFP Heading
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  Cost Center
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  Created On
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  Closing Date
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap">
                  Status
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap text-center">
                  Quotes Received
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap text-center">
                  Invited Suppliers
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap text-center">
                  RFX Purchased
                </th>
                <th className="px-6 py-4 font-semibold text-gray-800 whitespace-nowrap text-center">
                  Chat
                </th>
              </tr>
            </thead>

            <tbody>
              {rfqs.length > 0 ? (
                rfqs.map((row, index) => (
                  <tr
                    key={row.id}
                    className="border-b border-gray-100 hover:bg-gray-50 transition"
                  >
                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      RFQ-{String(index + 1).padStart(3, "0")}
                    </td>

                    <td className="px-6 py-4 text-gray-800 whitespace-nowrap font-medium">
                      {row.heading || "-"}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      {row.cost_center || row.costCenter || "-"}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      {formatDate(row.created_at)}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap">
                      {formatDate(row.closing_date)}
                    </td>

                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${getStatusClass(
                          row.status
                        )}`}
                      >
                        {formatStatus(row.status)}
                      </span>
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap text-center">
                      {row.quotes_received ?? 0}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap text-center">
                      {row.invited_suppliers ?? 0}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap text-center">
                      {row.rfx_purchased ?? 0}
                    </td>

                    <td className="px-6 py-4 text-gray-700 whitespace-nowrap text-center">
                      {row.chat_count ?? 0}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="10"
                    className="px-6 py-12 text-center text-gray-500"
                  >
                    No RFQs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BuyerRFQView;