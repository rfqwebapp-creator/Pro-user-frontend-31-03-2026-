import React, { useState } from 'react';
import { ChevronDown, ChevronsUpDown } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const EmailSubscription = () => {
  const [selectedEntries, setSelectedEntries] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
useEffect(() => {
  fetch("http://localhost:5000/api/subscriptions")
    .then(res => res.json())
    .then(data => {
      const enabledIds = data
        .filter(item => item.is_enabled)
        .map(item => {
          return Object.keys(eventMap).find(
            key => eventMap[key] === item.event
          );
        });

      setSelectedEntries(enabledIds.map(Number));
    });
}, []);

  const subscriptionItems = [
    { id: 0, label: "New Message Received" },
    { id: 1, label: "RFX Bought and requires quotation to be created" },
    { id: 2, label: "Quotation requires Approval" },
    { id: 3, label: "Quotation > Counter Offer is Received" },
    { id: 4, label: "Purchase Order is Received" },
    { id: 5, label: "Purchase Order is Accepted and requires Delivery Note to be created" },
    { id: 6, label: "Delivery Note requires Approval" },
    { id: 7, label: "Delivery Note confirmation – Items are received" },
    { id: 8, label: "Invoice requires Approval" },
    { id: 9, label: "Payment Confirmation is required" },
    { id: 10, label: "Daily New RFX Email" },
  ];

  const toggleAll = () => {
    if (selectedEntries.length === subscriptionItems.length) {
      setSelectedEntries([]);
    } else {
      setSelectedEntries(subscriptionItems.map(i => i.id));
    }
  };

  const toggleEntry = (id) => {
    setSelectedEntries(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };
const handleSave = async () => {
  const payload = subscriptionItems.map(item => ({
    event: eventMap[item.id],
    is_enabled: selectedEntries.includes(item.id)
  }));

  await fetch("http://localhost:5000/api/subscriptions/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  alert("Saved!");
};

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">

      <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-[#7A9C83]/20 overflow-hidden">
        
        <div className="flex flex-col lg:flex-row">
          {/* Sidebar Area */}
          <div className="w-full lg:w-64 p-8 border-b lg:border-b-0 lg:border-r border-gray-100">
            <h2 className="text-xl font-bold text-[#43624A] mb-4">Email Subscription</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Select cost centers to subscribe to email.
            </p>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6 md:p-8">
            {/* Top Controls */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span>Show</span>
                <select className="border border-[#7A9C83] rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#43624A]">
                  <option>50</option>
                  <option>25</option>
                  <option>10</option>
                </select>
                <span>entries</span>
              </div>
              <div className="flex items-center gap-2 text-sm w-full sm:w-auto">
                <span>Search:</span>
                <input 
                  type="text" 
                  className="border border-[#7A9C83] rounded px-3 py-1 flex-1 sm:w-64 outline-none focus:ring-1 focus:ring-[#43624A]" 
                />
              </div>
            </div>

            {/* List Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="border-b-2 border-[#43624A]">
                    <th className="px-4 py-4 w-16">
                      <div className="flex items-center gap-2">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-[#7A9C83] text-[#43624A] focus:ring-[#43624A] cursor-pointer"
                          checked={selectedEntries.length === subscriptionItems.length}
                          onChange={toggleAll}
                        />
                        <ChevronDown size={14} className="text-[#43624A] cursor-pointer" />
                      </div>
                    </th>
                    <th className="px-4 py-4 font-semibold text-[#43624A]">
                      <div className="flex items-center justify-between">
                        Email
                        <ChevronsUpDown size={14} className="text-[#7A9C83]" />
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {subscriptionItems.map((item) => (
                    <tr 
                      key={item.id} 
                      className={`transition-colors hover:bg-[#F5F2EA]/50 ${selectedEntries.includes(item.id) ? 'bg-[#F5F2EA]/20' : ''}`}
                    >
                      <td className="px-4 py-4">
                        <input 
                          type="checkbox" 
                          className="w-4 h-4 rounded border-[#7A9C83] text-[#43624A] focus:ring-[#43624A] cursor-pointer"
                          checked={selectedEntries.includes(item.id)}
                          onChange={() => toggleEntry(item.id)}
                        />
                      </td>
                      <td className="px-4 py-4 text-gray-700">
                        {item.label}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer and Pagination */}
            <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <p className="text-sm text-gray-500">
                Showing 1 to {subscriptionItems.length} of {subscriptionItems.length} entries
              </p>
              
              <div className="flex items-center gap-1">
                <button className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-50 rounded">First</button>
                <button className="px-3 py-1.5 text-xs font-medium text-gray-400 bg-gray-50 rounded">Previous</button>
                <button className="px-4 py-1.5 text-xs font-medium text-white bg-[#43624A] rounded">1</button>
                <button className="px-3 py-1.5 text-xs font-medium text-[#43624A] bg-[#F5F2EA] rounded hover:bg-[#7A9C83] hover:text-white">Next</button>
                <button className="px-3 py-1.5 text-xs font-medium text-[#43624A] bg-[#F5F2EA] rounded hover:bg-[#7A9C83] hover:text-white">Last</button>
              </div>
            </div>
            
            <div className="flex justify-end mt-8">
              <button onClick={handleSave} className="px-8 py-2.5 bg-[#43624A] text-white font-semibold rounded-md shadow-sm hover:opacity-90 transition-opacity focus:ring-2 focus:ring-offset-2 focus:ring-[#43624A]">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmailSubscription;