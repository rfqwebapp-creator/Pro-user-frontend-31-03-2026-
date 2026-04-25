import React, { useState } from "react";
import {
  Search,
  Filter,
  Plus,
  ChevronDown,
  RotateCcw,
  Eye,
  Trash2,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import BuyerSettingsSidebar from "./sidebar-settings";

const BuyerSupplierDirectory = () => {
  const navigate = useNavigate();
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const suppliers = [
    {
      id: 1,
      name: ".HYPEWAVE MEDIA",
      cr: "134150-3",
      vat: "N/A",
      country: "Bahrain",
      quotations: 0,
      contact: "hype@media.com",
      initial: "H",
      color: "bg-purple-400",
    },
    {
      id: 2,
      name: "ARVENTA TECHNIS W.L.L",
      cr: "191373-1",
      vat: "200011536600002",
      country: "Bahrain",
      quotations: 0,
      contact: "+973 33445566",
      initial: "A",
      color: "bg-blue-500",
    },
    {
      id: 3,
      name: "BRONZE FIX SPARE PARTS & REPAIR",
      cr: "22755-4",
      vat: "000000000000000",
      country: "Bahrain",
      quotations: 0,
      contact: "info@bronzefix.com",
      initial: "B",
      color: "bg-pink-500",
    },
    {
      id: 4,
      name: "CENTURY TRADING HOUSE CO W.L.L",
      cr: "58747-1",
      vat: "200011536600002",
      country: "Bahrain",
      quotations: 0,
      contact: "-",
      initial: "C",
      color: "bg-teal-500",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#F5F2EA] text-[#2A2A2A]">
      {/* Mobile overlay for settings sidebar */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Second Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen transform transition-transform duration-300 lg:static lg:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <BuyerSettingsSidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 min-w-0 px-4 py-4 sm:px-6 lg:px-8 lg:py-6">
        <div className="w-full">
          {/* Mobile sidebar button */}
          <div className="mb-4 flex items-center gap-3 lg:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="rounded-lg border border-gray-200 bg-white p-2 text-gray-700 shadow-sm"
            >
              {sidebarOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

            <span className="text-sm font-semibold text-gray-700">
              Settings Menu
            </span>
          </div>

          {/* Header */}
          <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#222] lg:text-4xl">
                Supplier Directory
              </h1>
              <p className="mt-1 text-sm text-gray-600">
                Manage your supplier relationships, contacts, and vetting
                status.
              </p>
            </div>

            <button
              onClick={() => navigate("/add-supplier")}
              className="inline-flex w-fit items-center justify-center gap-2 rounded-xl bg-[#43624A] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#354d3a]"
            >
              <Plus size={18} />
              Add Supplier
            </button>
          </div>

          {/* Main Card */}
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            {/* Tabs and Filter */}
            <div className="border-b border-gray-100 p-4 sm:p-5">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex gap-6 overflow-x-auto">
                  <button className="border-b-2 border-[#43624A] pb-2 text-sm font-semibold text-[#43624A]">
                    All
                  </button>

                  <button className="pb-2 text-sm font-semibold text-gray-400 transition hover:text-[#43624A]">
                    My Suppliers
                  </button>

                  <button className="pb-2 text-sm font-semibold text-gray-400 transition hover:text-[#43624A]">
                    Deleted
                  </button>
                </div>

                <button
                  onClick={() => setShowAdvanced(!showAdvanced)}
                  className={`inline-flex w-fit items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                    showAdvanced
                      ? "border-[#43624A] bg-[#43624A] text-white"
                      : "border-[#43624A] bg-white text-[#43624A] hover:bg-[#F5F2EA]"
                  }`}
                >
                  <Filter size={18} />
                  Filters
                  <ChevronDown
                    size={16}
                    className={`transition ${showAdvanced ? "rotate-180" : ""}`}
                  />
                </button>
              </div>

              {/* Advanced Filters */}
              {showAdvanced && (
                <div className="mt-5 rounded-2xl border border-gray-100 bg-gray-50 p-4">
                  <div className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:items-end">
                    <div>
                      <label className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-700">
                        Classification
                        <Search size={14} className="text-gray-400" />
                      </label>

                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#7A9C83] focus:ring-2 focus:ring-[#7A9C83]/20">
                          <option>No options selected</option>
                        </select>

                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-3.5 text-gray-400"
                          size={16}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm hover:bg-blue-50">
                        <Search size={16} />
                      </button>

                      <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-100 bg-white text-blue-600 shadow-sm hover:bg-blue-50">
                        <RotateCcw size={16} />
                      </button>
                    </div>

                    <div>
                      <label className="mb-2 block text-sm font-semibold text-gray-700">
                        Vetting Status
                      </label>

                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-600 outline-none focus:border-[#7A9C83] focus:ring-2 focus:ring-[#7A9C83]/20">
                          <option>Select vetting status</option>
                          <option>Blacklist</option>
                          <option>Watchlist</option>
                        </select>

                        <ChevronDown
                          className="pointer-events-none absolute right-3 top-3.5 text-gray-400"
                          size={16}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Desktop Table */}
            <div className="hidden overflow-x-auto md:block">
              <table className="w-full min-w-[850px] text-left">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50 text-xs uppercase tracking-wider text-gray-500">
                    <th className="px-6 py-4 font-bold">Supplier</th>
                    <th className="px-6 py-4 font-bold">Country</th>
                    <th className="px-6 py-4 text-center font-bold">Quotes</th>
                    <th className="px-6 py-4 font-bold">Contact</th>
                    <th className="px-6 py-4 font-bold">Vetting</th>
                    <th className="px-6 py-4 text-right font-bold">Actions</th>
                  </tr>
                </thead>

                <tbody className="divide-y divide-gray-100">
                  {suppliers.map((s) => (
                    <tr
                      key={s.id}
                      className="transition hover:bg-[#F5F2EA]/60"
                    >
                      <td className="px-6 py-5">
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-11 w-11 items-center justify-center rounded-full ${s.color} text-sm font-bold text-white shadow-sm`}
                          >
                            {s.initial}
                          </div>

                          <div>
                            <p className="font-bold text-gray-900">{s.name}</p>
                            <p className="text-xs text-gray-500">CR: {s.cr}</p>
                            <p className="text-xs text-gray-500">
                              VAT: {s.vat}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <span className="h-3 w-3 rounded-[2px] bg-[#BE1E2D]" />
                          {s.country}
                        </div>
                      </td>

                      <td className="px-6 py-5 text-center">
                        <span className="inline-flex rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                          {s.quotations}
                        </span>
                      </td>

                      <td className="px-6 py-5">
                        <p className="max-w-[180px] truncate text-sm text-gray-600">
                          {s.contact}
                        </p>
                      </td>

                      <td className="px-6 py-5">
                        <div className="relative max-w-[160px]">
                          <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2 pr-8 text-xs text-gray-600 outline-none focus:border-[#7A9C83]">
                            <option value="">Select Status</option>
                            <option>Blacklist</option>
                            <option>Watchlist</option>
                          </select>

                          <ChevronDown
                            size={14}
                            className="pointer-events-none absolute right-3 top-2.5 text-gray-400"
                          />
                        </div>
                      </td>

                      <td className="px-6 py-5">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => navigate(`/view-supplier/${s.id}`)}
                            className="rounded-full p-2 text-gray-400 hover:bg-[#43624A]/10 hover:text-[#43624A]"
                          >
                            <Eye size={17} />
                          </button>

                          <button className="rounded-full p-2 text-gray-400 hover:bg-red-50 hover:text-red-600">
                            <Trash2 size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards */}
            <div className="space-y-4 p-4 md:hidden">
              {suppliers.map((s) => (
                <div
                  key={s.id}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3 border-b border-gray-100 pb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-11 w-11 items-center justify-center rounded-full ${s.color} text-sm font-bold text-white`}
                      >
                        {s.initial}
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-gray-900">
                          {s.name}
                        </h3>
                        <p className="text-xs text-gray-500">CR: {s.cr}</p>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <button
                        onClick={() => navigate(`/view-supplier/${s.id}`)}
                        className="rounded-full p-2 text-gray-400 hover:bg-[#43624A]/10 hover:text-[#43624A]"
                      >
                        <Eye size={16} />
                      </button>

                      <button className="rounded-full p-2 text-gray-400 hover:bg-red-50 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm">
                    <div className="flex justify-between gap-3">
                      <span className="font-semibold text-gray-500">
                        Country
                      </span>
                      <span className="flex items-center gap-2 text-gray-800">
                        <span className="h-3 w-3 rounded-[2px] bg-[#BE1E2D]" />
                        {s.country}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="font-semibold text-gray-500">VAT</span>
                      <span className="text-right text-gray-800">{s.vat}</span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="font-semibold text-gray-500">
                        Quotes
                      </span>
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        {s.quotations}
                      </span>
                    </div>

                    <div className="flex justify-between gap-3">
                      <span className="font-semibold text-gray-500">
                        Contact
                      </span>
                      <span className="break-all text-right text-gray-800">
                        {s.contact}
                      </span>
                    </div>

                    <div>
                      <span className="mb-2 block font-semibold text-gray-500">
                        Vetting
                      </span>

                      <div className="relative">
                        <select className="w-full appearance-none rounded-xl border border-gray-200 bg-white px-3 py-2 pr-8 text-xs text-gray-600 outline-none focus:border-[#7A9C83]">
                          <option value="">Select Status</option>
                          <option>Blacklist</option>
                          <option>Watchlist</option>
                        </select>

                        <ChevronDown
                          size={14}
                          className="pointer-events-none absolute right-3 top-2.5 text-gray-400"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Pagination */}
            <div className="flex flex-col gap-4 border-t border-gray-100 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <p className="text-center text-sm font-medium text-gray-500 sm:text-left">
                Showing 1 to 10 of 3,185 entries
              </p>

              <div className="flex justify-center overflow-x-auto">
                <div className="inline-flex overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
                  <button className="px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50">
                    Prev
                  </button>

                  {[1, 2, 3, 4, 5].map((page) => (
                    <button
                      key={page}
                      className={`border-l border-gray-200 px-4 py-2 text-sm font-bold ${
                        page === 1
                          ? "bg-blue-600 text-white"
                          : "text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {page}
                    </button>
                  ))}

                  <button className="border-l border-gray-200 px-4 py-2 text-sm font-bold text-blue-600 hover:bg-blue-50">
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BuyerSupplierDirectory;