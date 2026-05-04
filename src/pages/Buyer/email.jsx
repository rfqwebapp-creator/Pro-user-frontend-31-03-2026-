import React, { useEffect, useMemo, useState } from "react";
import {
  Plus,
  ChevronDown,
  ChevronUp,
  X,
  Maximize2,
} from "lucide-react";
import BuyerSettingsSidebar from "./sidebar-settings";
import API from "../api";

const CostCenterModal = ({
  isOpen,
  onClose,
  costCenters,
  selectedCostCenters,
  onSave,
}) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    if (isOpen) {
      setSelected(selectedCostCenters || []);
      setSearch("");
    }
  }, [isOpen, selectedCostCenters]);

  if (!isOpen) return null;

  const filteredCostCenters = costCenters.filter((cc) =>
    cc.toLowerCase().includes(search.toLowerCase())
  );

  const toggleCostCenter = (cc) => {
    setSelected((prev) =>
      prev.includes(cc) ? prev.filter((x) => x !== cc) : [...prev, cc]
    );
  };

  const toggleAll = () => {
    if (selected.length === costCenters.length) {
      setSelected([]);
    } else {
      setSelected(costCenters);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white w-full max-w-lg rounded-lg shadow-xl overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h2 className="font-semibold text-lg">Select Cost Centers</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="px-6 py-5">
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search cost center"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 rounded-md py-2 px-4 outline-none focus:ring-2 focus:ring-[#43624A]/20"
            />
            <Maximize2
              size={16}
              className="absolute right-3 top-3 text-gray-400"
            />
          </div>

          <label className="flex items-center gap-3 cursor-pointer mb-4 border-b pb-3">
            <input
              type="checkbox"
              checked={costCenters.length > 0 && selected.length === costCenters.length}
              onChange={toggleAll}
              className="w-4 h-4 accent-[#43624A]"
            />
            <span className="font-medium text-[#2A2A2A]">Select All</span>
          </label>

          <div className="max-h-[350px] overflow-y-auto pr-2">
            {filteredCostCenters.length === 0 ? (
              <p className="text-sm text-gray-500">No cost centers found</p>
            ) : (
              <div className="space-y-3">
                {filteredCostCenters.map((cc) => (
                  <label
                    key={cc}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <input
                      type="checkbox"
                      checked={selected.includes(cc)}
                      onChange={() => toggleCostCenter(cc)}
                      className="w-4 h-4 accent-[#43624A]"
                    />
                    <span className="text-[#2A2A2A] group-hover:text-[#43624A]">
                      {cc}
                    </span>
                  </label>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t bg-gray-50/50">
          <button
            onClick={onClose}
            className="px-6 py-2 border border-[#43624A] text-[#43624A] rounded hover:bg-[#F5F2EA]"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(selected)}
            className="px-8 py-2 bg-[#43624A] text-white rounded hover:bg-[#2A2A2A] shadow-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const BuyerEmailSubscription = () => {
  const [entries, setEntries] = useState(50);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [costCenters, setCostCenters] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const loadSubscriptions = async () => {
    try {
      setLoading(true);

      const res = await API.get("/email-subscriptions");

      if (res.data.success) {
        setCostCenters(res.data.costCenters || []);
        setSubscriptions(res.data.subscriptions || []);
      }
    } catch (error) {
      console.error("LOAD EMAIL SUBSCRIPTIONS ERROR:", error);
      alert("Failed to load email subscriptions");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadSubscriptions();
  }, []);

  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter((item) =>
      item.email_type.toLowerCase().includes(search.toLowerCase())
    );
  }, [subscriptions, search]);

  const visibleSubscriptions = filteredSubscriptions.slice(0, Number(entries));

  const updateSubscriptionEnabled = (emailType, checked) => {
    setSubscriptions((prev) =>
      prev.map((item) =>
        item.email_type === emailType
          ? { ...item, is_enabled: checked }
          : item
      )
    );
  };

  const toggleAllEmails = (checked) => {
    setSubscriptions((prev) =>
      prev.map((item) => ({
        ...item,
        is_enabled: checked,
      }))
    );
  };

  const openCostCenterModal = (emailType) => {
    const originalIndex = subscriptions.findIndex(
      (item) => item.email_type === emailType
    );
    setActiveIndex(originalIndex);
    setIsModalOpen(true);
  };

  const saveModalCostCenters = (selectedCostCenters) => {
    setSubscriptions((prev) =>
      prev.map((item, index) =>
        index === activeIndex
          ? { ...item, cost_centers: selectedCostCenters }
          : item
      )
    );

    setIsModalOpen(false);
    setActiveIndex(null);
  };

  const handleSave = async () => {
    try {
      setSaving(true);

      const res = await API.post("/email-subscriptions/save", {
        subscriptions,
      });

      if (res.data.success) {
        alert("Email subscriptions saved successfully");
      }
    } catch (error) {
      console.error("SAVE EMAIL SUBSCRIPTIONS ERROR:", error);
      alert("Failed to save email subscriptions");
    } finally {
      setSaving(false);
    }
  };

  const allChecked =
    subscriptions.length > 0 && subscriptions.every((item) => item.is_enabled);

  const activeSubscription =
    activeIndex !== null ? subscriptions[activeIndex] : null;

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />

      <div className="flex-1 p-4 md:p-8 font-sans text-[#2A2A2A]">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden p-6 border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <h1 className="text-2xl font-bold text-[#2A2A2A]">
                Email Subscriptions
              </h1>
              <p className="text-sm text-gray-500 mt-1">
                Select cost centers to subscribe to email
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span>Show</span>
                <select
                  value={entries}
                  onChange={(e) => setEntries(e.target.value)}
                  className="border border-gray-300 rounded px-2 py-1 focus:ring-2 focus:ring-[#43624A] outline-none"
                >
                  <option value="10">10</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
                <span>entries</span>
              </div>

              <div className="flex items-center gap-2">
                <span>Search:</span>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="border border-gray-300 rounded px-3 py-1 focus:ring-2 focus:ring-[#43624A] outline-none"
                />
              </div>
            </div>
          </div>

          {loading ? (
            <div className="py-10 text-center text-gray-500">Loading...</div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-100">
                      <th className="p-3 w-12 text-center">
                        <input
                          type="checkbox"
                          checked={allChecked}
                          onChange={(e) => toggleAllEmails(e.target.checked)}
                          className="w-4 h-4 accent-[#43624A]"
                        />
                      </th>

                      <th className="p-3 font-semibold">
                        <div className="flex items-center gap-1">
                          Email <ChevronDown size={16} />
                        </div>
                      </th>

                      <th className="p-3 font-semibold text-right">
                        <div className="flex items-center justify-end gap-4">
                          <span className="flex items-center gap-1">
                            Cost Center{" "}
                            <ChevronUp size={16} className="text-gray-300" />
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {visibleSubscriptions.map((item) => (
                      <tr
                        key={item.email_type}
                        className="border-b border-gray-100 hover:bg-[#F5F2EA]/40"
                      >
                        <td className="p-3 text-center">
                          <input
                            type="checkbox"
                            checked={item.is_enabled}
                            onChange={(e) =>
                              updateSubscriptionEnabled(
                                item.email_type,
                                e.target.checked
                              )
                            }
                            className="w-4 h-4 accent-[#43624A]"
                          />
                        </td>

                        <td className="p-3 text-sm md:text-base text-gray-700">
                          {item.email_type}
                        </td>

                        <td className="p-3 text-right">
                          <div className="flex items-center justify-end gap-3 text-gray-600">
                            <span className="text-sm font-medium">
                              {(item.cost_centers || []).length}/
                              {costCenters.length}
                            </span>

                            <button
                              type="button"
                              onClick={() =>
                                openCostCenterModal(item.email_type)
                              }
                              className="p-1 hover:bg-[#7A9C83] hover:text-white rounded-full transition-all active:scale-90"
                            >
                              <Plus size={18} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <p className="text-sm text-gray-600">
                  Showing 1 to {visibleSubscriptions.length} of{" "}
                  {filteredSubscriptions.length} entries
                </p>

                <div className="flex items-center gap-1">
                  {["First", "Previous", "1", "Next", "Last"].map((btn) => (
                    <button
                      key={btn}
                      className={`px-3 py-1 text-sm rounded ${
                        btn === "1"
                          ? "bg-[#43624A] text-white"
                          : "bg-gray-100 hover:bg-[#7A9C83] hover:text-white"
                      }`}
                    >
                      {btn}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="bg-[#43624A] hover:bg-[#2A2A2A] disabled:opacity-60 text-white px-8 py-2 rounded shadow-md"
                >
                  {saving ? "Saving..." : "Save"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>

      <CostCenterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        costCenters={costCenters}
        selectedCostCenters={activeSubscription?.cost_centers || []}
        onSave={saveModalCostCenters}
      />
    </div>
  );
};

export default BuyerEmailSubscription;