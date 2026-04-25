import React, { useState } from "react";
import { ChevronDown, ChevronRight, FileText, ArrowLeft } from "lucide-react";
import BuyerSettingsSidebar from "./sidebar-settings";
import API from "../../api";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

const BuyerAddUserRole = () => {
  const navigate = useNavigate();

  const colors = {
    background: "#FDFCF9",
  };

  const [openSections, setOpenSections] = useState({});
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [selectedFieldPermissions, setSelectedFieldPermissions] = useState([]);
  const [roleName, setRoleName] = useState("");
  const [roleDescription, setRoleDescription] = useState("");

  const permissionsData = [
    { id: "pr", name: "Purchase Request", count: "0 / 3", subs: ["Manage", "View", "Approve"] },
    { id: "rfx", name: "RFX", count: "0 / 3", subs: ["Manage", "View", "Approve"] },
    { id: "sr", name: "Supplier Responses", count: "0 / 4", subs: ["Manage", "View", "Approve", "Reveal"] },
    { id: "po", name: "Purchase Order", count: "0 / 3", subs: ["Manage", "View", "Approve"] },
    { id: "dn", name: "Delivery Note", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "bills", name: "Bills", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "analytics", name: "Analytics", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "offline", name: "Offline transactions", count: "0 / 3", subs: ["Manage", "View", "Approve"] },
    { id: "settings", name: "Account Settings", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "users", name: "Users & Teams", count: "0 / 3", subs: ["Invite", "View", "Manage Cost Centres"] },
    { id: "userroles", name: "User Roles", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "cost", name: "Cost centers", count: "0 / 3", subs: ["Manage", "View", "Close"] },
    { id: "cat", name: "Catalog", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "supty", name: "Supplier types", count: "0 / 1", subs: ["View"] },
    { id: "supdi", name: "Supplier Directory", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "ms", name: "Messages", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "supque", name: "Supplier Questionnaire", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "quest", name: "Questionnaire Responses", count: "0 / 3", subs: ["Manage", "View", "Close"] },
    { id: "def", name: "Default", count: "0 / 2", subs: ["Manage", "View"] },
  ];

  const fieldPermissionsData = [
    { id: "fp1", name: "budget", page: "Cost centers", count: "0 / 2", subs: ["Manage", "View"] },
    { id: "fp2", name: "Bid Type", page: "Request for Quotation", count: "0 / 1", subs: ["Manage"] },
    { id: "fp3", name: "TCV_Permission", page: "Users & Teams", count: "0 / 2", subs: ["Manage", "View"] },
  ];

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAllPermissions = (checked) => {
    if (checked) {
      const allPermissions = permissionsData.map((item) => ({
        module: item.name,
        actions: item.subs,
      }));

      setSelectedPermissions(allPermissions);
    } else {
      setSelectedPermissions([]);
    }
  };

  const handleSelectAllFieldPermissions = (checked) => {
    if (checked) {
      const allFieldPermissions = fieldPermissionsData.map((item) => ({
        field: item.name,
        page: item.page,
        actions: item.subs,
      }));

      setSelectedFieldPermissions(allFieldPermissions);
    } else {
      setSelectedFieldPermissions([]);
    }
  };

  const handlePermissionChange = (module, action, checked) => {
    setSelectedPermissions((prev) => {
      let updated = [...prev];
      const index = updated.findIndex((p) => p.module === module);

      if (index === -1) {
        if (checked) {
          updated.push({ module, actions: [action] });
        }
      } else {
        if (checked) {
          if (!updated[index].actions.includes(action)) {
            updated[index].actions.push(action);
          }
        } else {
          updated[index].actions = updated[index].actions.filter((a) => a !== action);

          if (updated[index].actions.length === 0) {
            updated.splice(index, 1);
          }
        }
      }

      return updated;
    });
  };

  const handleFieldPermissionChange = (field, page, action, checked) => {
    setSelectedFieldPermissions((prev) => {
      let updated = [...prev];

      const index = updated.findIndex(
        (f) => f.field === field && f.page === page
      );

      if (index === -1) {
        if (checked) {
          updated.push({ field, page, actions: [action] });
        }
      } else {
        if (checked) {
          if (!updated[index].actions.includes(action)) {
            updated[index].actions.push(action);
          }
        } else {
          updated[index].actions = updated[index].actions.filter((a) => a !== action);

          if (updated[index].actions.length === 0) {
            updated.splice(index, 1);
          }
        }
      }

      return updated;
    });
  };

  const isPermissionChecked = (module, action) => {
    return selectedPermissions.some(
      (p) => p.module === module && p.actions.includes(action)
    );
  };

  const isFieldPermissionChecked = (field, page, action) => {
    return selectedFieldPermissions.some(
      (fp) =>
        fp.field === field &&
        fp.page === page &&
        fp.actions.includes(action)
    );
  };

  const isAllPermissionsChecked =
    selectedPermissions.length === permissionsData.length &&
    permissionsData.every((item) =>
      selectedPermissions.some(
        (p) =>
          p.module === item.name &&
          item.subs.every((sub) => p.actions.includes(sub))
      )
    );

  const isAllFieldPermissionsChecked =
    selectedFieldPermissions.length === fieldPermissionsData.length &&
    fieldPermissionsData.every((item) =>
      selectedFieldPermissions.some(
        (fp) =>
          fp.field === item.name &&
          fp.page === item.page &&
          item.subs.every((sub) => fp.actions.includes(sub))
      )
    );

  const handleSave = async () => {
    try {
      const payload = {
        name: roleName,
        description: roleDescription,
        permissions: selectedPermissions,
        fieldPermissions: selectedFieldPermissions,
      };

      await API.post("/roles/create", payload);

      toast.success("Role added successfully ✅");

      setTimeout(() => {
        navigate("/buyer/user-teams");
      }, 1500);

      setRoleName("");
      setRoleDescription("");
      setSelectedPermissions([]);
      setSelectedFieldPermissions([]);
    } catch (error) {
      console.error(error);
      toast.error("Failed to add role ❌");
    }
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: colors.background }}>
      <ToastContainer position="top-right" autoClose={3000} />
      <BuyerSettingsSidebar />

      <div className="min-h-screen bg-[#FDFCF9] p-4 md:p-8 font-sans text-[#2A2A2A] w-full overflow-y-auto">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/3 bg-[#F8F9FA] p-8 border-r border-gray-100">
              <button
                onClick={() => navigate("/buyer/user-teams")}
                className="flex items-center gap-2 text-[#43624A] font-medium mb-6 hover:opacity-80"
              >
                <ArrowLeft size={18} /> Back to Roles
              </button>

              <h1 className="text-2xl font-bold mb-4">Add User Role</h1>

              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                Tailor the permissions and privileges associated with a user role.
                Changes apply to all assigned users.
              </p>

              <div className="space-y-4 text-[13px] text-gray-600 bg-white p-4 rounded-lg border border-gray-100">
                <p><b className="text-[#43624A]">Manage:</b> Rights to create, update, delete and view.</p>
                <p><b className="text-[#43624A]">View:</b> Rights to view only.</p>
                <p><b className="text-[#43624A]">Approve:</b> Rights to approve the selected case.</p>
                <p><b className="text-[#43624A]">Reveal:</b> Ability to reveal Closed Bid quotations.</p>
              </div>
            </div>

            <div className="lg:w-2/3 p-8">
              <div className="grid gap-6 mb-10">
                <div>
                  <label className="block text-sm font-semibold mb-2">User Role</label>
                  <input
                    type="text"
                    value={roleName}
                    onChange={(e) => setRoleName(e.target.value)}
                    className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#43624A]/20 outline-none transition-all"
                    placeholder="e.g. Finance Manager"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Role Description</label>
                  <textarea
                    rows="3"
                    value={roleDescription}
                    onChange={(e) => setRoleDescription(e.target.value)}
                    className="w-full p-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#43624A]/20 outline-none transition-all"
                    placeholder="Briefly describe this role's purpose"
                  />
                </div>
              </div>

              <div className="mb-10">
                <h2 className="text-[#2563EB] font-bold text-lg mb-4">Permissions</h2>

                <div className="flex items-center space-x-3 mb-6">
                  <input
                    type="checkbox"
                    checked={isAllPermissionsChecked}
                    onChange={(e) => handleSelectAllPermissions(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#43624A]"
                    id="select-all"
                  />

                  <label htmlFor="select-all" className="text-slate-700 font-medium cursor-pointer">
                    Select All Permissions
                  </label>
                </div>

                <div className="space-y-3">
                  {permissionsData.map((item) => (
                    <PermissionRow
                      key={item.id}
                      item={item}
                      isOpen={openSections[item.id]}
                      onToggle={() => toggleSection(item.id)}
                      handlePermissionChange={handlePermissionChange}
                      isPermissionChecked={isPermissionChecked}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h2 className="text-[#2563EB] font-bold text-lg mb-4">
                  Fields Permissions on Pages
                </h2>

                <div className="flex items-center space-x-3 mb-6">
                  <input
                    type="checkbox"
                    checked={isAllFieldPermissionsChecked}
                    onChange={(e) => handleSelectAllFieldPermissions(e.target.checked)}
                    className="w-4 h-4 rounded accent-[#43624A]"
                    id="select-all-fields"
                  />

                  <label htmlFor="select-all-fields" className="text-slate-700 font-medium cursor-pointer">
                    Select All Permissions
                  </label>
                </div>

                <div className="space-y-3">
                  {fieldPermissionsData.map((item) => (
                    <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div
                        className="flex items-center justify-between p-3 bg-white cursor-pointer hover:bg-gray-50"
                        onClick={() => toggleSection(item.id)}
                      >
                        <div className="flex items-center space-x-4">
                          <div className="text-gray-400">
                            {openSections[item.id] ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
                          </div>

                          <div className="flex items-center space-x-2">
                            <FileText size={16} className="text-gray-400" />
                            <span className="text-sm font-medium text-slate-600">
                              {item.name} -
                              <span className="text-gray-500 font-normal"> Page: {item.page}</span>
                            </span>
                          </div>
                        </div>

                        <span className="text-xs font-mono text-gray-500">{item.count}</span>
                      </div>

                      {openSections[item.id] && (
                        <div className="bg-gray-50 border-t border-gray-100 px-12 py-2">
                          {item.subs.map((sub, idx) => (
                            <div key={idx} className="flex items-center space-x-3 py-2">
                              <input
                                type="checkbox"
                                className="w-4 h-4 rounded accent-[#43624A]"
                                checked={isFieldPermissionChecked(item.name, item.page, sub)}
                                onChange={(e) =>
                                  handleFieldPermissionChange(
                                    item.name,
                                    item.page,
                                    sub,
                                    e.target.checked
                                  )
                                }
                              />
                              <span className="text-sm text-slate-600">{sub}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10 pt-6 border-t border-gray-100 flex justify-end gap-3">
                <button
                  onClick={() => navigate("/buyer/user-teams")}
                  className="px-6 py-2 text-gray-500 font-medium hover:bg-gray-50 rounded-lg border border-gray-200"
                >
                  Cancel
                </button>

                <button
                  onClick={handleSave}
                  className="px-10 py-2 bg-[#2563EB] text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm transition-all"
                >
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

const PermissionRow = ({
  item,
  isOpen,
  onToggle,
  handlePermissionChange,
  isPermissionChecked,
}) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <div
      className="flex items-center justify-between p-3 bg-white cursor-pointer hover:bg-gray-50"
      onClick={onToggle}
    >
      <div className="flex items-center space-x-4">
        <div className="text-gray-400">
          {isOpen ? <ChevronDown size={18} /> : <ChevronRight size={18} />}
        </div>

        <div className="flex items-center space-x-2">
          <FileText size={16} className="text-gray-400" />
          <span className="text-sm font-semibold text-slate-700">
            {item.name}
          </span>
        </div>
      </div>

      <span className="text-xs font-mono text-gray-400">{item.count}</span>
    </div>

    {isOpen && (
      <div className="bg-gray-50 border-t border-gray-100 px-12 py-2">
        {item.subs.map((sub, idx) => (
          <div key={idx} className="flex items-center space-x-3 py-2">
            <input
              type="checkbox"
              className="w-4 h-4 rounded accent-[#43624A]"
              checked={isPermissionChecked(item.name, sub)}
              onChange={(e) =>
                handlePermissionChange(item.name, sub, e.target.checked)
              }
            />

            <span className="text-sm text-slate-600">{sub}</span>
          </div>
        ))}
      </div>
    )}
  </div>
);

export default BuyerAddUserRole;