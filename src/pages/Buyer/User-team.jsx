import React, { useEffect, useState } from "react";
import { Eye, Copy, Trash2, Search, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import BuyerSettingsSidebar from "./sidebar-settings";
import API from "../../api";

const BuyerUserRolesPage = () => {
  const navigate = useNavigate();

  const [roles, setRoles] = useState([]);

  useEffect(() => {
    fetchRoles();
  }, []);

  const fetchRoles = async () => {
    try {
      const res = await API.get("/roles/all");
      setRoles(res.data);
    } catch (error) {
      console.error("Error fetching roles:", error);
    }
  };

  const formatData = (data) => {
    if (!data) return "No data";

    let parsedData = data;

    if (typeof data === "string") {
      try {
        parsedData = JSON.parse(data);
      } catch {
        return data;
      }
    }

    if (Array.isArray(parsedData)) {
      return parsedData
        .map((item, index) => {
          if (typeof item === "object") {
            return `${index + 1}. ${
              item.module ||
              item.name ||
              item.permission ||
              item.menu ||
              item.page ||
              JSON.stringify(item)
            }`;
          }

          return `${index + 1}. ${item}`;
        })
        .join("\n");
    }

    if (typeof parsedData === "object") {
      return JSON.stringify(parsedData, null, 2);
    }

    return parsedData;
  };

  const handleView = (role) => {
    alert(
      `Role Name: ${role.name}

Description: ${role.description || "No description provided"}

Permissions:
${formatData(role.permissions)}

Field Permissions:
${formatData(role.field_permissions)}`
    );
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this role?"
    );

    if (!confirmDelete) return;

    try {
      await API.delete(`/roles/${id}`);
      alert("Role deleted successfully");
      fetchRoles();
    } catch (error) {
      console.error("Delete error:", error);
      alert("Error deleting role");
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
      <BuyerSettingsSidebar />

      <div className="flex-1 p-6 md:p-10 font-sans text-[#2A2A2A]">
        <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header Section */}
          <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="max-w-md">
              <h1 className="text-2xl font-bold mb-2">User Roles</h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                User roles and their corresponding privileges define the usage
                permissions and functionality available to a user. Each user
                account needs to be mapped to a user role.
              </p>
            </div>

            <button
              onClick={() => navigate("/buyer/add-user")}
              className="flex items-center justify-center gap-2 bg-[#43624A] hover:bg-[#2A2A2A] text-white px-6 py-2.5 rounded-lg transition-colors duration-200 font-medium whitespace-nowrap"
            >
              <Plus size={18} />
              Add a User Role
            </button>
          </div>

          {/* Controls Section */}
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm">
              <span>Show</span>
              <select className="border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-[#7A9C83]">
                <option>50</option>
                <option>100</option>
              </select>
              <span>entries</span>
            </div>

            <div className="relative w-full sm:w-64">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                size={16}
              />
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A9C83] text-sm"
              />
            </div>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#F5F2EA]/50 border-y border-gray-100">
                  <th className="px-6 py-4 font-semibold text-sm cursor-pointer hover:text-[#43624A]">
                    User Roles <span className="text-[10px] ml-1">▲</span>
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm">
                    Roles Description
                  </th>
                  <th className="px-6 py-4 font-semibold text-sm text-right">
                    Actions
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-100">
                {roles.length > 0 ? (
                  roles.map((role) => (
                    <tr
                      key={role.id}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-medium">
                        {role.name}
                      </td>

                      <td className="px-6 py-4 text-sm text-gray-500 italic">
                        {role.description || "No description provided"}
                      </td>

                      <td className="px-6 py-4">
                        <div className="flex justify-end items-center gap-3 text-gray-400">
                          <button
                            onClick={() => handleView(role)}
                            className="hover:text-[#43624A] transition-colors"
                            title="View"
                          >
                            <Eye size={18} />
                          </button>

                          {!role.system && (
                            <>
                              <span className="text-gray-200">|</span>

                              <button
                                className="hover:text-[#7A9C83] transition-colors"
                                title="Duplicate"
                              >
                                <Copy size={17} />
                              </button>

                              <span className="text-gray-200">|</span>

                              <button
                                onClick={() => handleDelete(role.id)}
                                className="hover:text-red-500 transition-colors"
                                title="Delete"
                              >
                                <Trash2 size={17} />
                              </button>
                            </>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="px-6 py-8 text-center text-gray-500 text-sm"
                    >
                      No roles found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Footer / Pagination */}
          <div className="p-6 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-gray-100">
            <p className="text-sm text-gray-500">
              Showing {roles.length > 0 ? 1 : 0} to {roles.length} of{" "}
              {roles.length} entries
            </p>

            <div className="flex items-center gap-1">
              <button className="px-4 py-2 text-sm text-gray-400 cursor-not-allowed">
                Previous
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-[#7A9C83] text-white text-sm">
                1
              </button>
              <button className="px-4 py-2 text-sm text-[#43624A] hover:bg-[#F5F2EA] rounded transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerUserRolesPage;