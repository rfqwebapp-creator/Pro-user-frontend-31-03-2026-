import React, { useEffect, useState } from "react";
import {
  Eye,
  Edit2,
  Trash2,
  Plus,
   
  ChevronDown,
} from "lucide-react";
 
import BuyerSettingsSidebar from "./sidebar-settings";
import API from "../../api";

const BuyerCostCenterApp = () => {
 
  const [costCenters, setCostCenters] = useState([]);
 
const fetchCostCenters = async () => {
  try {
    console.log("TOKEN:", localStorage.getItem("token"));

    const res = await API.get("/rfq/cost-centers/list");

    console.log("API RESPONSE:", res.data);

    if (res.data.success) {
      setCostCenters(
        (res.data.data || []).map((name, index) => ({
          id: index + 1,
          name,
        }))
      );
    }
  } catch (error) {
    console.error("FETCH COST CENTERS ERROR:", error);
  }
};

// ✅ ADD THIS
useEffect(() => {
  fetchCostCenters();
}, []);
  // ✅ Add new cost center
  const handleAddCostCenter = async () => {
    const name = prompt("Enter cost center name");

    if (!name || !name.trim()) return;

    try {
      await API.post("/rfq/cost-centers/add", {
        name: name.trim(),
      });

      fetchCostCenters();
    } catch (error) {
      console.error("ADD COST CENTER ERROR:", error);
      alert("Failed to add cost center");
    }
  };

  // ✅ Edit existing cost center
  const handleEditCostCenter = async (oldName) => {
    const newName = prompt("Edit cost center", oldName);

    if (!newName || !newName.trim()) return;

    try {
      await API.put("/rfq/cost-centers/update", {
        oldName,
        newName: newName.trim(),
      });

      fetchCostCenters();
    } catch (error) {
      console.error("EDIT COST CENTER ERROR:", error);
      alert("Failed to edit cost center");
    }
  };

  // ✅ Delete existing cost center
  const handleDeleteCostCenter = async (name) => {
    const confirmDelete = window.confirm("Delete this cost center?");

    if (!confirmDelete) return;

    try {
      await API.delete("/rfq/cost-centers/delete", {
        data: { name },
      });

      fetchCostCenters();
    } catch (error) {
      console.error("DELETE COST CENTER ERROR:", error);
      alert("Failed to delete cost center");
    }
  };

  

  const ActionButtons = ({ item }) => (
    <div className="flex items-center gap-2 mr-3 text-[#2A2A2A]">
      <Eye size={16} className="cursor-pointer hover:text-[#43624A]" />

      <Edit2
        size={16}
        className="cursor-pointer hover:text-[#43624A]"
        onClick={() => handleEditCostCenter(item.name)}
      />

      <Trash2
        size={16}
        className="cursor-pointer hover:text-red-600"
        onClick={() => handleDeleteCostCenter(item.name)}
      />
    </div>
  );

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      {/* Sidebar */}
      <BuyerSettingsSidebar />

      <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-8 font-sans w-full">
        <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <h1 className="text-2xl font-bold text-[#2A2A2A]">
              Cost Centers
            </h1>

            <div className="flex flex-wrap gap-3">
              

              <button
                onClick={handleAddCostCenter}
                className="flex items-center gap-2 bg-white border-2 border-[#43624A] text-[#43624A] px-4 py-2 rounded-md hover:bg-[#43624A] hover:text-white transition-colors text-sm font-semibold"
              >
                <Plus size={18} />
                Add a Cost Center
              </button>

             
            </div>
          </div>

          {/* Info and Toggle Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6">
            {/* Left Text */}
            <div className="lg:col-span-4 text-sm text-gray-600 space-y-4">
              <p>
                Define the cost centers and classifications structure for the
                goods and services you procure.
              </p>

              <p>
                The products and services you include in your catalog can be
                mapped to these cost centers for easier clustering and
                reporting.
              </p>
            </div>

             
              {/* Cost Center List */}
              <div className="space-y-3">
                {costCenters.length === 0 ? (
                  <p className="text-sm text-gray-500">
                    No cost centers found.
                  </p>
                ) : (
                  costCenters.map((item) => (
                    <div key={item.id} className="group">
                      <div className="flex items-center text-sm py-1">
                        <div className="w-6 flex justify-center text-[#7A9C83]">
                          <ChevronDown size={18} />
                        </div>

                        <ActionButtons item={item} />

                        <span className="text-[#2A2A2A]">{item.name}</span>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerCostCenterApp;