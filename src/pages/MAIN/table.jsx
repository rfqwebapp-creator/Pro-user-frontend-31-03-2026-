import React from 'react';
import { Building2, Clock, ChevronLeft, ChevronRight } from 'lucide-react';

const opportunities = [
  {
    rfx: "78883",
    title: "Supply Distribution Control Panels — Bahrain Beach Facility Project",
    company: "Nass Contracting Company (W.L.L)",
    status: "Open",
    published: "26-Feb-2026",
    closing: "02-Mar-2026",
  },
  {
    rfx: "78877",
    title: "Printing of Letter Head",
    company: "Nass Sand Processing Plant B.S.C",
    status: "Open",
    published: "26-Feb-2026",
    closing: "01-Mar-2026",
  },
  {
    rfx: "78880",
    title: "Spare Part Rollup Banners (Ramadhan)",
    company: "Zayani Motors Co W.L.L",
    status: "Open",
    published: "26-Feb-2026",
    closing: "28-Feb-2026",
  },
];

export default function OpportunityTable() {
  return (
    <div className="w-full bg-[#F5F2EA] p-4 md:p-8">
      <div className="max-w-[1600px] mx-auto">
        <h2 className="text-2xl font-bold text-[#2A2A2A] mb-6 ml-2">Available Opportunities</h2>
        
        <div className="bg-white rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F2EA] border-b border-gray-200">
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500 w-32">RFX #</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500">Description </th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500 text-center">Status</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500">Published</th>
                  <th className="px-8 py-5 text-xs font-bold uppercase tracking-wider text-gray-500">Closing Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {opportunities.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50/50 transition-colors group">
                    <td className="px-8 py-6 align-top">
                      <span className="font-bold text-[#43624A] text-base">{item.rfx}</span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col gap-1.5">
                        <span className="font-semibold text-[#2A2A2A] text-lg leading-snug group-hover:text-[#43624A] transition-colors cursor-pointer">
                          {item.title}
                        </span>
                        <div className="flex items-center text-gray-500 text-sm">
                          <Building2 className="w-4 h-4 mr-2 opacity-60" />
                          {item.company}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-center">
                      <span className="inline-flex items-center px-4 py-1 rounded-full text-sm font-semibold bg-[#E8F0E9] text-[#43624A] border border-[#7A9C83]/20">
                        {item.status}
                      </span>
                    </td>
                    <td className="px-8 py-6 text-gray-600 font-medium">
                      {item.published}
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center font-bold text-[#2A2A2A]">
                        <Clock className="w-4 h-4 mr-2 text-orange-500" />
                        {item.closing}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Footer - Matches Image 2 */}
          <div className="px-8 py-5 bg-[#F9F7F2] border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              Showing <span className="font-bold text-[#2A2A2A]">10</span> of <span className="font-bold text-[#2A2A2A]">10</span> opportunities
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-400 hover:text-[#43624A] transition-colors disabled:opacity-30" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-[#43624A] text-white font-bold shadow-md">
                1
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 font-semibold hover:bg-gray-200/50 transition-colors">
                2
              </button>
              
              <button className="w-10 h-10 flex items-center justify-center rounded-lg text-gray-600 font-semibold hover:bg-gray-200/50 transition-colors">
                3
              </button>

              <button className="p-2 text-gray-600 hover:text-[#43624A] transition-colors">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}