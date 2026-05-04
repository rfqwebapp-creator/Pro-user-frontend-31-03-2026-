import React, { useState, useEffect, useRef } from "react";
import { ChevronDown, Trash2, Plus } from "lucide-react";
import BuyerSettingsSidebar from "./sidebar-settings";
import moment from "moment-timezone";
import API from "../api";

const BuyerRegionSettings = () => {
  const getUserTZ = () => {
    const tz = moment.tz.guess();
    const offset = moment.tz(tz).format("Z");
    return `${tz} (GMT${offset})`;
  };

  const timeZones = moment.tz.names().map((tz) => {
    const offset = moment.tz(tz).format("Z");
    return `${tz} (GMT${offset})`;
  });

  const [taxRows, setTaxRows] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTZ, setSelectedTZ] = useState(getUserTZ());
  const [primaryCurrency, setPrimaryCurrency] = useState("Bahraini Dinar (BHD)");
  const [loading, setLoading] = useState(false);

  const dropdownRef = useRef();

  const addTaxRow = () => {
    setTaxRows([
      ...taxRows,
      {
        id: Date.now(),
        name: "",
        value: "",
      },
    ]);
  };

  const removeTaxRow = (id) => {
    const updatedRows = taxRows.filter((row) => row.id !== id);

    if (updatedRows.length === 0) {
      setTaxRows([{ id: Date.now(), name: "", value: "" }]);
    } else {
      setTaxRows(updatedRows);
    }
  };

  const updateTaxRow = (id, field, value) => {
    setTaxRows(
      taxRows.map((row) =>
        row.id === id ? { ...row, [field]: value } : row
      )
    );
  };

  const fetchRegionSettings = async () => {
    try {
      const res = await API.get("/buyer-region-settings");

      console.log("FETCH REGION SETTINGS RESPONSE:", res.data);

      if (res.data.success && res.data.data) {
        setSelectedTZ(res.data.data.time_zone || getUserTZ());

        setPrimaryCurrency(
          res.data.data.primary_currency || "Bahraini Dinar (BHD)"
        );

        if (Array.isArray(res.data.data.taxes)) {
          const mappedTaxes = res.data.data.taxes.map((tax, index) => ({
            id: tax.id || Date.now() + index,
            name: tax.name || "",
            value: String(tax.value || ""),
          }));

          console.log("LOADED TAXES:", mappedTaxes);

          setTaxRows(
            mappedTaxes.length > 0
              ? mappedTaxes
              : [{ id: Date.now(), name: "", value: "" }]
          );
        } else {
          setTaxRows([{ id: Date.now(), name: "", value: "" }]);
        }
      } else {
        setTaxRows([{ id: Date.now(), name: "VAT", value: "10" }]);
      }
    } catch (error) {
      console.log("FETCH REGION SETTINGS ERROR:", error);
      setTaxRows([{ id: Date.now(), name: "VAT", value: "10" }]);
    }
  };

  const handleSave = async () => {
    try {
      setLoading(true);

      const cleanTaxes = taxRows
        .map((tax) => ({
          id: tax.id,
          name: String(tax.name || "").trim(),
          value: String(tax.value || "").trim(),
        }))
        .filter((tax) => tax.name !== "" && tax.value !== "");

      const payload = {
        time_zone: selectedTZ,
        primary_currency: primaryCurrency,
        taxes: cleanTaxes,
      };

      console.log("SAVE REGION SETTINGS PAYLOAD:", payload);

      const res = await API.post("/buyer-region-settings", payload);

      if (res.data.success) {
        alert("Region settings saved successfully");
        fetchRegionSettings();
      } else {
        alert(res.data.message || "Failed to save region settings");
      }
    } catch (error) {
      console.log("SAVE REGION SETTINGS ERROR:", error);
      alert(error.response?.data?.message || "Failed to save region settings");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRegionSettings();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />

      <div className="min-h-screen bg-gray-50 p-4 md:p-8 flex justify-center items-start flex-1">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column: Description */}
            <div className="md:w-1/3">
              <h2 className="text-xl font-bold text-[#2A2A2A] mb-4">
                Region Settings
              </h2>

              <p className="text-[#6B715E] leading-relaxed text-sm md:text-base">
                Set the time zone, transaction currencies, and applicable taxes
                for your region. Your procurement documents will all utilize
                these default settings.
              </p>
            </div>

            {/* Right Column: Form */}
            <div className="md:w-2/3 space-y-6">
              {/* Time Zone */}
              <div className="relative" ref={dropdownRef}>
                <label className="block text-sm font-medium text-[#7A9C83] mb-2">
                  Time Zone
                </label>

                <div className="relative">
                  <div
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full border border-gray-200 rounded-lg p-3 flex items-center justify-between bg-white cursor-pointer"
                  >
                    <span className="text-sm text-[#2A2A2A]">
                      {selectedTZ}
                    </span>

                    <ChevronDown
                      className={`transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      size={18}
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute z-50 mt-1 w-full max-h-60 overflow-y-auto bg-white border border-gray-200 rounded-lg shadow-lg">
                      {timeZones.map((tz, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedTZ(tz);
                            setIsOpen(false);
                          }}
                          className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                        >
                          {tz}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Primary Currency */}
              <div>
                <label className="block text-sm font-medium text-[#7A9C83] mb-2">
                  Primary Currency
                </label>

                <div className="relative">
                  <select
                    value={primaryCurrency}
                    onChange={(e) => setPrimaryCurrency(e.target.value)}
                    className="w-full min-h-[48px] appearance-none border border-gray-200 rounded-lg px-4 py-3 pr-10 bg-[#F5F2EA]/30 text-[#2A2A2A] focus:outline-none focus:ring-2 focus:ring-[#7A9C83]/20 cursor-pointer"
                  >
                    <option value="Bahraini Dinar (BHD)">
                      Bahraini Dinar (BHD)
                    </option>
                    <option value="Indian Rupee (INR)">
                      Indian Rupee (INR)
                    </option>
                    <option value="US Dollar (USD)">US Dollar (USD)</option>
                    <option value="UAE Dirham (AED)">
                      UAE Dirham (AED)
                    </option>
                    <option value="Saudi Riyal (SAR)">
                      Saudi Riyal (SAR)
                    </option>
                    <option value="Euro (EUR)">Euro (EUR)</option>
                    <option value="British Pound (GBP)">
                      British Pound (GBP)
                    </option>
                    <option value="Kuwaiti Dinar (KWD)">
                      Kuwaiti Dinar (KWD)
                    </option>
                    <option value="Omani Rial (OMR)">Omani Rial (OMR)</option>
                    <option value="Qatari Riyal (QAR)">
                      Qatari Riyal (QAR)
                    </option>
                  </select>

                  <ChevronDown
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                    size={18}
                  />
                </div>
              </div>

              {/* Applicable Tax */}
              <div className="space-y-3">
                <label className="block text-sm font-medium text-[#7A9C83]">
                  Applicable Tax on Purchases
                </label>

                {taxRows.map((row) => (
                  <div
                    key={row.id}
                    className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
                  >
                    <input
                      type="text"
                      value={row.name}
                      onChange={(e) =>
                        updateTaxRow(row.id, "name", e.target.value)
                      }
                      placeholder="Tax Name"
                      className="flex-grow w-full border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-[#7A9C83]"
                    />

                    <div className="flex w-full sm:w-44 border border-gray-200 rounded-lg overflow-hidden focus-within:border-[#7A9C83]">
                      <input
                        type="number"
                        value={row.value}
                        onChange={(e) =>
                          updateTaxRow(row.id, "value", e.target.value)
                        }
                        placeholder="0"
                        className="w-full min-w-0 px-4 py-3 focus:outline-none text-[#2A2A2A]"
                      />

                      <span className="bg-[#F5F2EA] px-4 flex items-center text-[#2A2A2A] border-l border-gray-200">
                        %
                      </span>
                    </div>

                    {taxRows.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeTaxRow(row.id)}
                        className="text-gray-400 hover:text-red-500 p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    )}
                  </div>
                ))}

                <div className="flex flex-col items-end gap-2 mt-2">
                  <button
                    type="button"
                    onClick={addTaxRow}
                    className="flex items-center gap-1 text-sm font-medium text-[#43624A] hover:underline"
                  >
                    <Plus size={16} />
                    Add More Tax
                  </button>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-4 pt-6 border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => window.history.back()}
                  className="px-8 py-2.5 rounded-lg border border-[#43624A] text-[#43624A] font-medium hover:bg-[#F5F2EA] transition-colors"
                >
                  Cancel
                </button>

                <button
                  type="button"
                  onClick={handleSave}
                  disabled={loading}
                  className="px-8 py-2.5 rounded-lg bg-[#43624A] text-white font-medium hover:bg-[#2A2A2A] transition-transform active:scale-95 shadow-md disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Saving..." : "Save"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerRegionSettings;