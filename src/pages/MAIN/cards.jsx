import React from 'react';
import { FileText, TrendingUp, Clock, BarChart3 } from 'lucide-react';

const StatCard = ({ title, value, subtext, Icon }) => (
  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[120px] relative overflow-hidden group hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start">
      <span className="text-gray-500 font-medium text-sm">{title}</span>
      <div className="p-2 bg-[#E8F0E9] rounded-lg text-[#43624A]">
        <Icon size={20} />
      </div>
    </div>
    <div>
      <div className="text-3xl font-bold text-[#2A2A2A] mb-1">{value}</div>
      <div className="text-sm text-gray-400 font-medium">{subtext}</div>
    </div>
  </div>
);

export default function ProcurementHeader() {
  const stats = [
    {
      title: "Total Opportunities",
      value: "248",
      subtext: "+12 today",
      Icon: FileText
    },
    {
      title: "Open RFQs",
      value: "186",
      subtext: "75% of total",
      Icon: TrendingUp
    },
    {
      title: "Closing This Week",
      value: "34",
      subtext: "Action needed",
      Icon: Clock
    },
    {
      title: "New Today",
      value: "12",
      subtext: "vs 8 yesterday",
      Icon: BarChart3
    }
  ];

  return (
    <div className="w-full">
      {/* Green Header Section */}
<div className="w-full bg-[#43624A] pt-8 pb-12 pl-0 pr-4 md:pr-8">
          {/* <div className="max-w-[1000px] mx-auto"> */}
<div className="max-w-[1000px] ml-10">
     <h1 className="text-2xl font-bold text-white mb-3">B2B E-Procurement & Tender Portal</h1>
          <p className="text-[#E8F0E9]/80 text-lg max-w-2xl leading-relaxed">
Browse and bid on available opportunities. Find the right RFXs for your business           </p>
        </div>
      </div>

      {/* Stats Cards Section - Overlapping the green header */}
      <div className="max-w-[1600px] mx-auto px-4 md:px-8 -mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </div>
  );
}