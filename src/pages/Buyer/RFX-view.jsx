import React, { useEffect, useState } from "react";
import API from "../../api";

const BuyerRFQView = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [rfqs, setRfqs] = useState([]);

  const tabs = [
    { name: "ALL", value: "ALL" },
    { name: "DRAFT", value: "DRAFT" },
    { name: "IN REVIEW", value: "IN_REVIEW" },
    { name: "PURCHASE ORDER ISSUED", value: "PURCHASE_ORDER_ISSUED" },
    { name: "ACCEPTED", value: "ACCEPTED" },
    { name: "REJECTED", value: "REJECTED" },
    { name: "DELIVERY PENDING", value: "DELIVERY_PENDING" },
    { name: "SHIPMENT RECEIVED", value: "SHIPMENT_RECEIVED" },
    { name: "INVOICE RECEIVED", value: "INVOICE_RECEIVED" },
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
    if (isNaN(d)) return date;

    const day = String(d.getDate()).padStart(2, "0");
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const year = d.getFullYear();

    return `${day}.${month}.${year}`;
  };

  const formatStatus = (status) => {
    if (!status) return "-";

    const statusMap = {
      DRAFT: "Awaiting Seller Quotation",
      IN_REVIEW: "Quotation Received",
      PURCHASE_ORDER_ISSUED: "Purchase Order Issued",
      ACCEPTED: "Closed: Accepted by Bidder",
      REJECTED: "Closed: Selected Lowest Bidder",
      DELIVERY_PENDING: "Delivery Pending",
      SHIPMENT_RECEIVED: "Shipment Received",
      INVOICE_RECEIVED: "Invoice Received",
    };

    return statusMap[status] || status;
  };

  return (
    <div className="min-h-screen bg-white p-6 font-sans text-[#2A2A2A]">
      {/* Tabs */}
      <div className="flex flex-wrap border border-gray-200 w-full max-w-fit mb-10">
        {tabs.map((tab) => (
          <button
            key={tab.value}
            onClick={() => setActiveTab(tab.value)}
            className={`px-10 py-4 text-xs font-bold border-r border-gray-200 last:border-r-0 min-w-[155px] ${
              activeTab === tab.value
                ? "bg-[#7A9C83] text-white"
                : "bg-[#F8F8F8] text-gray-600"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left font-bold text-black">
              <th className="py-3 pr-6 whitespace-nowrap">RFX #</th>
              <th className="py-3 pr-6 whitespace-nowrap">RFQ/RFP Heading</th>
              <th className="py-3 pr-6 whitespace-nowrap">Cost Center</th>
              <th className="py-3 pr-6 whitespace-nowrap">Created On</th>
              <th className="py-3 pr-6 whitespace-nowrap">Closing Date</th>
              <th className="py-3 pr-6 whitespace-nowrap">Status</th>
              <th className="py-3 pr-6 whitespace-nowrap">Quotes Received</th>
              <th className="py-3 pr-6 whitespace-nowrap">Invited Suppliers</th>
              <th className="py-3 pr-6 whitespace-nowrap">RFX Purchased</th>
              <th className="py-3 pr-6 whitespace-nowrap">Chat</th>
            </tr>
          </thead>

          <tbody>
            {rfqs.length > 0 ? (
              rfqs.map((row, index) => (
                <tr key={row.id} className="align-top">
                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    RFQ-{String(index + 1).padStart(3, "0")}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.heading || "-"}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.cost_center || row.costCenter || "-"}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {formatDate(row.created_at)}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {formatDate(row.closing_date)}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {formatStatus(row.status)}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.quotes_received ?? 0}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.invited_suppliers ?? 0}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.rfx_purchased ?? 0}
                  </td>

                  <td className="py-1 pr-6 whitespace-nowrap text-gray-700">
                    {row.chat_count ?? 0}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="py-6 text-gray-500 text-center">
                  No RFQs found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BuyerRFQView;