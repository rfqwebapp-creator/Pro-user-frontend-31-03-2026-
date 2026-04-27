import React, { useState, useEffect } from 'react';import { Search, UserPlus, ChevronLeft, ChevronRight } from 'lucide-react';
import BuyerSettingsSidebar from "./sidebar-settings"; // Uncomment in your project

const BuyerUserManagement = () => {
  // 1. Move users to state to allow checkbox interaction
 const [userData, setUserData] = useState([]);
const user = JSON.parse(localStorage.getItem("user"));
const gst = user?.gst;

useEffect(() => {
  if (gst) {
    API.get(`/users/by-gst/${gst}`)
      .then(res => {
        setUserData(res.data);
      })
      .catch(err => console.log(err));
  }
}, [gst]);
  const invites = [
    { email: "surendra@yateemac.net", name: "surendra", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 11:22 AM" },
    { email: "shine@yateemac.net", name: "shine", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 11:33 AM" },
    { email: "manzoor.ahamad@yateemac.net", name: "manzoor", role: "Purchaser", invitedBy: "ramani rengaraman", date: "06-Aug-2024 2:19 PM" },
  ];

  // 2. Handle Checkbox Toggle
  const handleCheckboxChange = (id, field) => {
    setUserData(prev => prev.map(user => 
      user.id === id ? { ...user, [field]: !user[field] } : user
    ));
  };

  return (
    <div className="flex min-h-screen bg-[#F5F2EA]">
       <BuyerSettingsSidebar />  

      <div className="flex-1 p-4 md:p-8 font-sans text-[#2A2A2A]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          {/* --- USERS SECTION --- */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Users</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Manage the different users in your company or in your team. Grant users permissions and privileges based on their roles.
              </p>
            </div>

            <div className="lg:col-span-3 space-y-4">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
                {/* Table Controls */}
                <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <span>Show</span>
                    <select className="border rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#43624A]">
                      <option>10</option>
                      <option>25</option>
                    </select>
                    <span>opportunities per page</span>
                  </div>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Enter Keyword(s)" 
                      className="pl-3 pr-10 py-2 border rounded-md w-full md:w-64 outline-none focus:ring-1 focus:ring-[#43624A]"
                    />
                    <Search className="absolute right-3 top-2.5 text-gray-400 w-4 h-4" />
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm border-collapse">
                    <thead>
                      <tr className="bg-gray-50 text-gray-500 uppercase text-xs">
                        <th className="px-6 py-4 font-semibold">Name</th>
                        <th className="px-6 py-4 font-semibold">Email</th>
                        <th className="px-6 py-4 font-semibold">Phone</th>
                        <th className="px-6 py-4 font-semibold">User Role</th>
                        <th className="px-6 py-4 font-semibold text-center">Buyer</th>
                        <th className="px-6 py-4 font-semibold text-center">Seller</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {userData.map((user) => (
                        <tr key={user.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 font-medium">{user.name}</td>
                          <td className="px-6 py-4 text-gray-600">{user.email}</td>
                          <td className="px-6 py-4 text-gray-600">{user.phone || '-'}</td>
                          <td className="px-6 py-4">
                            <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold">{user.role}</span>
                          </td>
                          <td className="px-6 py-4 text-center">
                            <input 
                              type="checkbox" 
                              checked={user.buyer} 
                              onChange={() => handleCheckboxChange(user.id, 'buyer')}
                              className="accent-[#43624A] h-4 w-4 cursor-pointer" 
                            />
                          </td>
                          <td className="px-6 py-4 text-center">
                            <input 
                              type="checkbox" 
                              checked={user.seller} 
                              onChange={() => handleCheckboxChange(user.id, 'seller')}
                              className="accent-[#43624A] h-4 w-4 cursor-pointer" 
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                <div className="p-4 flex flex-col sm:flex-row items-center justify-between border-t border-gray-100 gap-4">
                  <p className="text-xs text-gray-500">Showing 1 to {userData.length} of 20 entries</p>
                  <div className="flex gap-1">
                    <button className="p-2 rounded hover:bg-gray-100"><ChevronLeft className="w-4 h-4"/></button>
                    <button className="px-3 py-1 rounded bg-[#7A9C83] text-white text-xs font-bold">1</button>
                    <button className="px-3 py-1 rounded hover:bg-gray-100 text-xs">2</button>
                    <button className="p-2 rounded hover:bg-gray-100"><ChevronRight className="w-4 h-4"/></button>
                  </div>
                </div>
              </div>

              {/* INVITE BUTTON - Placed below the first table, aligned right */}
              <div className="flex justify-end">
                <button className="flex items-center gap-2 bg-white border border-blue-500 text-blue-600 px-6 py-2 rounded-md font-medium text-sm hover:bg-blue-50 transition-all shadow-sm">
                  Invite Team Member
                </button>
              </div>
            </div>
          </section>

          {/* --- INVITES SECTION --- */}
          <section className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-4">Invites</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                Grow your team on Procural by sending invites and assigning them with suitable roles.
              </p>
            </div>

            <div className="lg:col-span-3 bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100">
              <div className="p-4 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-sm">
                  <span>Show</span>
                  <select className="border rounded px-2 py-1 outline-none">
                    <option>50</option>
                  </select>
                  <span>entries</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span>Search:</span>
                  <input type="text" className="border rounded px-2 py-1 outline-none focus:ring-1 focus:ring-[#43624A]" />
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-sm border-collapse">
                  <thead className="bg-gray-50">
                    <tr className="text-gray-500 uppercase text-xs">
                      <th className="px-6 py-4 font-semibold">Email</th>
                      <th className="px-6 py-4 font-semibold">Name</th>
                      <th className="px-6 py-4 font-semibold">Role</th>
                      <th className="px-6 py-4 font-semibold">Invited By</th>
                      <th className="px-6 py-4 font-semibold">Invited On</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {invites.map((invite, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-blue-600 hover:underline cursor-pointer">{invite.email}</td>
                        <td className="px-6 py-4">{invite.name}</td>
                        <td className="px-6 py-4">{invite.role}</td>
                        <td className="px-6 py-4 text-gray-500">{invite.invitedBy}</td>
                        <td className="px-6 py-4 text-gray-400 italic whitespace-nowrap">{invite.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 border-t border-gray-100 flex justify-between items-center">
                 <p className="text-xs text-gray-500">Showing 1 to 3 of 3 entries</p>
                 <div className="flex gap-1">
                    <button className="px-3 py-1 rounded bg-[#9eb4ff] text-white text-xs font-bold cursor-not-allowed">Previous</button>
                    <button className="px-3 py-1 rounded bg-blue-600 text-white text-xs font-bold">1</button>
                    <button className="px-3 py-1 rounded bg-[#9eb4ff] text-white text-xs font-bold cursor-not-allowed">Next</button>
                 </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default BuyerUserManagement;