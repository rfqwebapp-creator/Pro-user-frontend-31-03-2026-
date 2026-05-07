// import React from "react";
// import { Search, Plus, ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import BuyerPurchaseOrderExtras from "./PurchaseOrder-create2";
export default function BuyerCreatePurchaseOrder() {

// const navigate = useNavigate();

// return (

// <div className="min-h-screen bg-[#F5F2EA] p-6">

// {/* Back */}
// <button
// onClick={() => navigate(-1)}
// className="flex items-center gap-2  text-[#43624A] font-medium mb-6"
// >
// <ArrowLeft size={18} />
// BACK
// </button>

// <div className="bg-white rounded-xl shadow p-8 space-y-10">

// {/* Top Fields */}

// <div className="grid grid-cols-2 gap-8">

// <div>
// <label className="text-sm  text-[#43624A]">PO#</label>
// <input
// type="text"
// className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
// />
// </div>

// <div>
// <label className="text-sm  text-[#43624A]">Request Type</label>
// <select className="w-full border rounded-lg p-3 mt-1 bg-gray-50">
// <option>Please Select</option>
// <option>RFQ</option>
// <option>RFP</option>
// <option>PR</option>
// </select>
// </div>

// </div>

// {/* Section Titles */}

// <div className="grid grid-cols-2 gap-10">

// <h2 className=" text-[#43624A] text-lg font-semibold">
// Supplier Information
// </h2>

// <h2 className="text-[#43624A] text-lg font-semibold">
// Requisition Info
// </h2>

// </div>

// {/* Fields */}

// <div className="grid grid-cols-4 gap-8">

// {/* Supplier */}

// <div>
// <label className="text-gray-600 text-sm mb-1 block">
// Supplier
// </label>

// <select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
// <option>Select Supplier</option>
// </select>
// </div>

// {/* Procurement */}

// <div>
// <label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
// Procurement Classification
// <Search size={16} className="text-gray-500"/>
// </label>

// <input
// type="text"
// placeholder="No options(s) selected"
// className="w-full border rounded-lg px-3 py-3 bg-gray-50"
// />
// </div>

// {/* Purchase Type */}

// <div>
// <label className="text-gray-600 text-sm mb-1 block">
// Purchase Type
// </label>

// <select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
// <option>Please Select</option>
// <option>Airline Ticket</option>
// <option>Goods/Products</option>
// <option>Services</option>
// <option>Sub-contract</option>
// </select>
// </div>

// {/* Cost Center */}

// <div>
// <label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
// Cost Center(s)
// <Plus size={16} className="text-gray-500"/>
// </label>

// <input
// type="text"
// className="w-full border rounded-lg px-3 py-3 bg-gray-50"
// />
// </div>

// </div>

// {/* Ordered Items */}

// <div>

// <h2 className=" text-[#43624A] text-lg font-semibold mb-6">
// Ordered Items
// </h2>

// <div className="border rounded-lg py-16 text-center bg-gray-50">

// <img
// src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
// alt="no items"
// className="w-20 mx-auto mb-4 opacity-40"
// />

// <p className="text-gray-500 text-lg mb-2">
// No items added
// </p>

// <p className="text-gray-400 mb-6">
// Select items from your catalog that you would like to request
// </p>

// <button className="border border-[#43624A] text-[#43624A] px-6 py-2 rounded-lg hover:bg-[#43624A] hover:text-white transition">
// + Add Item
// </button>

// </div>

// </div>

// </div> <br/>
// {/* EXTRA SECTION */}
// <BuyerPurchaseOrderExtras />
// </div>

// );
// }




import React from "react";
import { Search, Plus, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BuyerPurchaseOrderExtras from "./PurchaseOrder-create2";

export default function BuyerCreatePurchaseOrder() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen overflow-hidden bg-[#F5F2EA]">

      {/* Blurred Page Content */}
      <div className="blur-sm pointer-events-none select-none">
        <div className="min-h-screen bg-[#F5F2EA] p-6">

          {/* Back */}
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2  text-[#43624A] font-medium mb-6"
          >
            <ArrowLeft size={18} />
            BACKeeeessss
          </button>

          <div className="bg-white rounded-xl shadow p-8 space-y-10">

            {/* Top Fields */}

            <div className="grid grid-cols-2 gap-8">

              <div>
                <label className="text-sm  text-[#43624A]">PO#</label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-3 mt-1 bg-gray-50"
                />
              </div>

              <div>
                <label className="text-sm  text-[#43624A]">Request Type</label>
                <select className="w-full border rounded-lg p-3 mt-1 bg-gray-50">
                  <option>Please Select</option>
                  <option>RFQ</option>
                  <option>RFP</option>
                  <option>PR</option>
                </select>
              </div>

            </div>

            {/* Section Titles */}

            <div className="grid grid-cols-2 gap-10">

              <h2 className=" text-[#43624A] text-lg font-semibold">
                Supplier Information
              </h2>

              <h2 className="text-[#43624A] text-lg font-semibold">
                Requisition Info
              </h2>

            </div>

            {/* Fields */}

            <div className="grid grid-cols-4 gap-8">

              {/* Supplier */}

              <div>
                <label className="text-gray-600 text-sm mb-1 block">
                  Supplier
                </label>

                <select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
                  <option>Select Supplier</option>
                </select>
              </div>

              {/* Procurement */}

              <div>
                <label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
                  Procurement Classification
                  <Search size={16} className="text-gray-500"/>
                </label>

                <input
                  type="text"
                  placeholder="No options(s) selected"
                  className="w-full border rounded-lg px-3 py-3 bg-gray-50"
                />
              </div>

              {/* Purchase Type */}

              <div>
                <label className="text-gray-600 text-sm mb-1 block">
                  Purchase Type
                </label>

                <select className="w-full border rounded-lg px-3 py-3 bg-gray-50">
                  <option>Please Select</option>
                  <option>Airline Ticket</option>
                  <option>Goods/Products</option>
                  <option>Services</option>
                  <option>Sub-contract</option>
                </select>
              </div>

              {/* Cost Center */}

              <div>
                <label className="text-gray-600 text-sm mb-1 flex items-center gap-2">
                  Cost Center(s)
                  <Plus size={16} className="text-gray-500"/>
                </label>

                <input
                  type="text"
                  className="w-full border rounded-lg px-3 py-3 bg-gray-50"
                />
              </div>

            </div>

            {/* Ordered Items */}

            <div>

              <h2 className=" text-[#43624A] text-lg font-semibold mb-6">
                Ordered Items
              </h2>

              <div className="border rounded-lg py-16 text-center bg-gray-50">

                <img
                  src="https://cdn-icons-png.flaticon.com/512/4076/4076507.png"
                  alt="no items"
                  className="w-20 mx-auto mb-4 opacity-40"
                />

                <p className="text-gray-500 text-lg mb-2">
                  No items added
                </p>

                <p className="text-gray-400 mb-6">
                  Select items from your catalog that you would like to request
                </p>

                <button className="border border-[#43624A] text-[#43624A] px-6 py-2 rounded-lg hover:bg-[#43624A] hover:text-white transition">
                  + Add Item
                </button>

              </div>

            </div>

          </div> <br/>
          {/* EXTRA SECTION */}
          <BuyerPurchaseOrderExtras />
        </div>
      </div>

      {/* Popup Overlay */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center border border-gray-200">

          <h2 className="text-xl font-bold text-gray-800 mb-3">
            Feature Locked 🔒
          </h2>

          <p className="text-gray-600 text-sm leading-6 mb-6">
            Kindly mail us to{" "}
            <a
              href="mailto:hello@procubid.com"
              className="font-semibold text-[#43624A] underline"
            >
              hello@procubid.com
            </a>{" "}
            to activate this segment/feature.
          </p>

          <div className="flex gap-3 justify-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-100 transition font-semibold"
            >
              Cancel
            </button>

            <a
              href="mailto:hello@procubid.com"
              className="px-6 py-2 rounded-lg text-white font-semibold bg-[#43624A] hover:opacity-90 transition"
            >
              Mail Now
            </a>
          </div>

        </div>
      </div>

    </div>
  );
}