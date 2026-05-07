import React from 'react';
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerAddCompanyForm = () => {
  return (
     <div className="flex min-h-screen bg-[#F5F2EA] font-sans text-[#2A2A2A]">
    
          {/* IMPORTED SIDEBAR */}
          <BuyerSettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 flex justify-center items-start font-sans text-[#2A2A2A]">
      <div className="w-full max-w-5xl bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-10">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <div className="lg:w-1/3">
            <h1 className="text-2xl font-bold mb-4">Add a Company</h1>
            <p className="text-sm leading-relaxed text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Form Fields Section */}
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Company Legal Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Company Legal Name<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] focus:border-transparent outline-none transition" />
            </div>

            {/* Parent Company */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Parent Company</label>
              <select className="border border-gray-300 rounded-md p-2 bg-white focus:ring-2 focus:ring-[#43624A] outline-none">
                <option>YATEEM AIRCONDITIONING COMP...</option>
              </select>
            </div>

            {/* Registered Address */}
            <div className="flex flex-col gap-1.5 md:col-span-2">
              <label className="text-sm font-medium">Registered Address</label>
              <input type="text" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* Country */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Country<span className="text-red-500">*</span></label>
              <select className="border border-gray-300 rounded-md p-2 bg-white text-gray-500">
                <option>Please Select</option>
              </select>
            </div>

            {/* Company Phone */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium flex items-center gap-1">
                Company Phone <span className="text-gray-400 text-xs">ⓘ</span>
              </label>
              <input type="tel" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Company Email</label>
              <input type="email" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* Website */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Website</label>
              <input type="url" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* Type of Business */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Type of Business</label>
              <select className="border border-gray-300 rounded-md p-2 bg-white text-gray-500">
                <option>Please Select</option>
              </select>
            </div>

            {/* Size of Org */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Size of Organization</label>
              <select className="border border-gray-300 rounded-md p-2 bg-white text-gray-500">
                <option>Please Select</option>
              </select>
            </div>

            {/* Industry Sector */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Industry Sector<span className="text-red-500">*</span></label>
              <select className="border border-gray-300 rounded-md p-2 bg-white text-gray-500">
                <option>Please Select</option>
              </select>
            </div>

            {/* Reg Number */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Company Registration Number<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* VAT */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">VAT/GST<span className="text-red-500">*</span></label>
              <input type="text" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none" />
            </div>

            {/* Incorporated On */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Incorporated On</label>
              <input type="date" className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-[#43624A] outline-none uppercase text-xs" />
            </div>

            {/* Procurement Classification */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium flex items-center gap-1">
                Procurement Classification <span className="cursor-pointer text-gray-500">🔍</span>
              </label>
              <div className="border border-gray-300 rounded-md p-2 text-gray-500 text-sm bg-gray-50">
                No options(s) selected
              </div>
            </div>

            {/* Company Type */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium">Company Type</label>
              <select className="border border-gray-300 rounded-md p-2 bg-white text-gray-500">
                <option>Please Select</option>
              </select>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-4 mt-8 pt-6 border-t border-gray-100">
          <button className="px-8 py-2 border border-blue-600 text-blue-600 rounded-md font-medium hover:bg-blue-50 transition">
            Cancel
          </button>
          <button className="px-8 py-2 bg-[#43624A] text-white rounded-md font-medium hover:opacity-90 transition">
            Save
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BuyerAddCompanyForm;