// import React, { useState } from 'react';
// import { Camera, Upload, Globe, Phone, Mail, Search, X, Calendar, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
// import SettingsSidebar from "./SettingsSidebar";

// const CompanyProfile = () => {
//   const [formData, setFormData] = useState({
//     legalName: 'YATEEM AIRCONDITIONING COMPANY W.L.L',
//     address: 'SHK ISA AVENUE PO BOX 60',
//     country: 'Bahrain',
//     phone: '17253177',
//     email: 'yatmain@yateemac.net',
//     type: 'Services',
//     size: 'Please Select',
//     industry: ['Heating Ventilation & Airconditioning supplier'],
//     regNumber: '17810-1',
//     vat: '200000288700002',
//     incDate: '',
//     procurementCount: 44,
//     about: 'yateem airconditioning was established 75 years ago and is a Premier Airconditioning supplies and contracting company.',
//     socials: { linkedin: '', twitter: '', facebook: '', instagram: '', youtube: '' }
//   });

//   return (
//      <div className="flex min-h-screen bg-[#F5F2EA]">
//           {/* Sidebar - Your existing component */}
//           <SettingsSidebar />
//     <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
//       <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
//         {/* SECTION 1: Company Information */}
//         <div className="flex flex-col md:flex-row border-b border-gray-100">
//           <div className="md:w-1/3 p-8 bg-gray-50/30">
//             <h2 className="text-2xl font-bold mb-6">Company Information</h2>
//             <div className="space-y-6 text-sm text-gray-500 leading-relaxed">
//               <p>Accounts are created and maintained against an organization or corporate entity. The company name and details provided by the administrator at the time of account creation are listed here.</p>
//               <p>Manage information about the size and nature of your business to tailor your usage experience.</p>
//             </div>
//           </div>

//           <div className="md:w-2/3 p-8">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Company Legal Name</label>
//                 <input type="text" readOnly value={formData.legalName} className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 cursor-not-allowed" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Registered Address</label>
//                 <input type="text" value={formData.address} className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7A9C83] outline-none" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Country</label>
//                 <select className="w-full p-3 border border-gray-200 rounded-lg outline-none">
//                   <option>Bahrain</option>
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Company Phone</label>
//                 <input type="text" value={formData.phone} className="w-full p-3 border border-gray-200 rounded-lg" />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Industry Sector</label>
//                 <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-200 rounded-lg min-h-[50px] bg-white">
//                   {formData.industry.map((tag, i) => (
//                     <span key={i} className="flex items-center gap-2 bg-[#43624A] text-white px-3 py-1.5 rounded text-sm">
//                       <X size={14} className="cursor-pointer" /> {tag}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">VAT/GST</label>
//                 <input type="text" value={formData.vat} className="w-full p-3 border border-gray-200 rounded-lg" />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">Incorporated On</label>
//                 <div className="relative">
//                   <input type="text" placeholder="dd/mm/yyyy" className="w-full p-3 border border-gray-200 rounded-lg" />
//                   <Calendar size={18} className="absolute right-3 top-3.5 text-gray-400" />
//                 </div>
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600 mb-1.5">About Company</label>
//                 <textarea rows="3" value={formData.about} className="w-full p-3 border border-gray-200 rounded-lg resize-none" />
//               </div>

//               {/* Social Media Links Sub-section */}
//               <div className="md:col-span-2 mt-4">
//                 <label className="block text-sm font-medium text-gray-600 mb-3">Social Media Links</label>
//                 <div className="space-y-3">
//                   {[
//                     { icon: <Linkedin size={18} />, label: 'linkedin' },
//                     { icon: <Twitter size={18} />, label: 'twitter' },
//                     { icon: <Facebook size={18} />, label: 'facebook' },
//                     { icon: <Instagram size={18} />, label: 'instagram' },
//                     { icon: <Youtube size={18} />, label: 'youtube' }
//                   ].map((social) => (
//                     <div key={social.label} className="flex rounded-lg overflow-hidden border border-gray-200">
//                       <div className="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-200 text-gray-500">
//                         {social.icon}
//                       </div>
//                       <input type="text" className="w-full p-2.5 outline-none focus:bg-gray-50 transition" placeholder={`${social.label} link`} />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Requirement Checkboxes */}
//               <div className="md:col-span-2 space-y-3 mt-4">
//                 <label className="flex items-center gap-3 cursor-pointer group">
//                   <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83]" />
//                   <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">Is NDA Required?</span>
//                 </label>
//                 <label className="flex items-center gap-3 cursor-pointer group">
//                   <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83]" />
//                   <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">Is Vendor Onboarding Form Required?</span>
//                 </label>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* SECTION 2: Branding */}
//         <div className="flex flex-col md:flex-row border-b border-gray-100">
//           <div className="md:w-1/3 p-8 bg-gray-50/30">
//             <h2 className="text-2xl font-bold mb-4">Branding</h2>
//             <p className="text-sm text-gray-500">Manage your corporate logo to ensure communication documents represent your brand correctly.</p>
//           </div>
//           <div className="md:w-2/3 p-8">
//             <label className="block text-sm font-medium text-gray-600 mb-3">Company Logo</label>
//             <div className="w-full max-w-sm aspect-video border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative bg-gray-50 group hover:border-[#7A9C83] transition">
//               <div className="text-center p-6">
//                 <img src="/api/placeholder/200/80" alt="Logo" className="mx-auto mb-4 grayscale opacity-50" />
//                 <p className="text-xs text-gray-400 font-medium">Click or drag to upload logo</p>
//               </div>
//               <button className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition">
//                 <X size={16} />
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* SECTION 3: Profile Background */}
//         <div className="flex flex-col md:flex-row">
//           <div className="md:w-1/3 p-8 bg-gray-50/30">
//             <h2 className="text-2xl font-bold mb-4">Profile background</h2>
//             <p className="text-sm text-gray-500 leading-relaxed">
//               Add a cover image that represents your organization. Recommended dimensions: 1200 x 400 pixels.
//             </p>
//           </div>
//           <div className="md:w-2/3 p-8">
//             <label className="block text-sm font-medium text-gray-600 mb-3">Cover Image</label>
//             <div className="w-full h-48 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center group hover:bg-[#F5F2EA]/50 transition-colors cursor-pointer">
//               <Upload className="text-gray-300 mb-2 group-hover:text-[#7A9C83] transition" size={40} />
//               <p className="text-sm font-semibold text-gray-600">Upload Cover Image</p>
//             </div>
//           </div>
//         </div>

//         {/* STICKY FOOTER */}
//         <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 z-10">
//           <button className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-white transition">
//             Cancel
//           </button>
//           <button className="px-6 py-2.5 rounded-lg bg-[#7A9C83] text-white font-semibold hover:bg-[#43624A] transition">
//             Save
//           </button>
//           <button className="px-6 py-2.5 rounded-lg bg-[#2A2A2A] text-white font-semibold hover:bg-black transition shadow-md">
//             Save and View My Profile
//           </button>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default CompanyProfile;

import React, { useState,useEffect } from 'react';
 import { Camera, Upload, Globe, Phone, Mail, Search, X, Calendar, Linkedin, Twitter, Facebook, Instagram, Youtube } from 'lucide-react';
import SettingsSidebar from "./SettingsSidebar";

const CompanyProfile = () => {
  const [logo, setLogo] = useState(null);
const [cover, setCover] = useState(null);
const handleLogoUpload = (e) => {
  const file = e.target.files[0];
  setLogo(file);
};

const handleCoverUpload = (e) => {
  const file = e.target.files[0];
  setCover(file);
};
  const [formData, setFormData] = useState({
    legalName: 'YATEEM AIRCONDITIONING COMPANY W.L.L',
    address: 'SHK ISA AVENUE PO BOX 60',
    country: 'Bahrain',
    phone: '17253177',
    email: 'yatmain@yateemac.net',
    type: 'Services',
    size: 'Please Select',
    industry: ['Heating Ventilation & Airconditioning supplier'],
    regNumber: '17810-1',
    vat: '200000288700002',
    incDate: '',
    procurementCount: 44,
    about: 'yateem airconditioning was established 75 years ago and is a Premier Airconditioning supplies and contracting company.',
    socials: { linkedin: '', twitter: '', facebook: '', instagram: '', youtube: '' }
  });


  const industryOptions = [
  "Construction & General Consumables",
  "Mechanical & HVAC",
  "Plumbing & Firefighting",
  "Electrical & Power",
  "Smart Building & Home Automation",
  "Renewable Energy & Solar",
  "Green & Sustainable Building Materials",
  "Interior Fit-Out & Facades",
  "Tools & Hardware",
  "Project Work",
  "Others"
];
// Add industry
const addIndustry = (value) => {
  if (!value) return; // 👈 important
  if (!formData.industry.includes(value)) {
    setFormData({
      ...formData,
      industry: [...formData.industry, value],
    });
  }
};

// Remove industry
const removeIndustry = (value) => {
  setFormData({
    ...formData,
    industry: formData.industry.filter((item) => item !== value),
  });
};


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value,
  });
};
const handleSubmit = async () => {
  try {
    const form = new FormData();
const user = JSON.parse(localStorage.getItem("user"));
    form.append("user_id", user.id);
    // append text fields
Object.keys(formData).forEach((key) => {
  if (!key) return; // ✅ skip empty keys

  const value = formData[key];

  if (value === undefined || value === null) return; // ✅ skip invalid

  if (key === "industry" || key === "socials") {
    form.append(key, JSON.stringify(value));
  } else {
    form.append(key, value);
  }
});

    // append files
    if (logo instanceof File) {
      form.append("logo", logo);
    }

    if (cover instanceof File) {
      form.append("cover", cover);
    }

    // ✅ 👉 ADD THIS DEBUG BLOCK HERE
    console.log("===== FORM DATA =====");
    for (let pair of form.entries()) {
      console.log(pair[0], pair[1]);
    }
    console.log("=====================");

    // 👉 THEN FETCH
    const response = await fetch("https://api.procubid.com/api/company", {
      method: "POST",
      body: form,
    });

    const data = await response.json();
    console.log(data);

    alert("Saved successfully!");
  } catch (error) {
    console.error(error);
    alert("Error saving data");
  }
};
const handleSocialChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    socials: {
      ...prev.socials,
      [name]: value,
    },
  }));
};
useEffect(() => {
  const user = JSON.parse(localStorage.getItem("user"));

  console.log("USER:", user);

  fetch(`https://api.procubid.com/api/company/me?user_id=${user.id}`)
    .then(res => res.json())
    .then(data => {
      console.log("API RESPONSE:", data); // 🔥 IMPORTANT

      if (data.success) {
        const d = data.data;

        setFormData({
          legalName: d.legal_name || "",
          address: d.address || "",
          country: d.country || "",
          phone: d.phone || "",
          email: d.email || "",
          type: d.company_type || "",
          size: d.company_size || "",
          industry: d.industry ? JSON.parse(d.industry) : [],
          regNumber: d.reg_number || "",
          vat: d.vat || "",
          incDate: d.inc_date || "",
          procurementCount: d.procurement_count || 0,
          about: d.about || "",
          socials: d.socials ? JSON.parse(d.socials) : {},
        });
      } else {
        console.log("NO DATA FOUND ❌");
      }
    })
    .catch(err => {
      console.error("FETCH ERROR:", err);
    });
}, []);
  return (
     <div className="flex min-h-screen bg-[#F5F2EA]">
          {/* Sidebar - Your existing component */}
          <SettingsSidebar />
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A]">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* SECTION 1: Company Information */}
        <div className="flex flex-col md:flex-row border-b border-gray-100">
          <div className="md:w-1/3 p-8 bg-gray-50/30">
            <h2 className="text-2xl font-bold mb-6">Company Information</h2>
            <div className="space-y-6 text-sm text-gray-500 leading-relaxed">
              <p>Accounts are created and maintained against an organization or corporate entity. The company name and details provided by the administrator at the time of account creation are listed here.</p>
              <p>Manage information about the size and nature of your business to tailor your usage experience.</p>
            </div>
          </div>

          <div className="md:w-2/3 p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Company Legal Name</label>
               <input
  type="text"
  name="legalName"
  value={formData.legalName}
  onChange={handleChange}
   className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-800 cursor-not-allowed" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Registered Address</label>
            <input
  type="text"
  name="address"
  value={formData.address}
  onChange={handleChange}
 className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#7A9C83] outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Country</label>
              <select
  name="country"
  value={formData.country}
  onChange={handleChange} className="w-full p-3 border border-gray-200 rounded-lg outline-none">
                  <option>Bahrain</option>
                  <option>India</option>
                  <option>UAE</option>
                  <option>Qatar </option>
                  <option>Bahrain </option>
                  <option>Saudhi Arabia </option>
                  <option>USA</option>
                  <option>UK</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">Company Phone</label>
               <input
  type="text"
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  className="w-full p-3 border border-gray-200 rounded-lg" />
              </div>
              <div className="md:col-span-2">
  <label className="block text-sm font-medium text-gray-600 mb-1.5">
    Industry Sector
  </label>

  {/* Dropdown */}
  <select
    onChange={(e) => addIndustry(e.target.value)}
    className="w-full p-3 mb-2 border border-gray-200 rounded-lg"
  >
    <option value="">Select Industry</option>
    {industryOptions.map((item, index) => (
      <option key={index} value={item}>
        {item}
      </option>
    ))}
  </select>

  {/* Selected Tags */}
  <div className="flex flex-wrap items-center gap-2 p-2 border border-gray-200 rounded-lg min-h-[50px] bg-white">
    {formData.industry.map((tag, i) => (
      <span
        key={i}
        className="flex items-center gap-2 bg-[#43624A] text-white px-3 py-1.5 rounded text-sm"
      >
        {tag}
        <X
          size={14}
          className="cursor-pointer"
          onClick={() => removeIndustry(tag)}
        />
      </span>
    ))}
  </div>
</div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1.5">VAT/GST</label>
             <input
  type="text"
  name="vat"
  value={formData.vat}
  onChange={handleChange}
 className="w-full p-3 border border-gray-200 rounded-lg" />
              </div>
              <div>
  <label className="block text-sm font-medium text-gray-600 mb-1.5">
    Incorporated On
  </label>
  <div className="relative">
    <input
      type="date"
      name="incDate"
      value={formData.incDate || ""}
      onChange={(e) =>
        setFormData({
          ...formData,
          incDate: e.target.value,
        })
      }
      className="w-full p-3 border border-gray-200 rounded-lg"
    />
    <Calendar
      size={18}
      className="absolute right-3 top-3.5 text-gray-400 pointer-events-none"
    />
  </div>
</div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600 mb-1.5">About Company</label>
              <textarea
  name="about"
  value={formData.about}
  onChange={handleChange} rows="3"  className="w-full p-3 border border-gray-200 rounded-lg resize-none" />
              </div>

              {/* Social Media Links Sub-section */}
              <div className="md:col-span-2 mt-4">
                <label className="block text-sm font-medium text-gray-600 mb-3">Social Media Links</label>
                <div className="space-y-3">
                  {[
                    { icon: <Linkedin size={18} />, label: 'linkedin' },
                    { icon: <Twitter size={18} />, label: 'twitter' },
                    { icon: <Facebook size={18} />, label: 'facebook' },
                    { icon: <Instagram size={18} />, label: 'instagram' },
                    { icon: <Youtube size={18} />, label: 'youtube' }
                  ].map((social) => (
                    <div key={social.label} className="flex rounded-lg overflow-hidden border border-gray-200">
                      <div className="bg-gray-50 px-4 flex items-center justify-center border-r border-gray-200 text-gray-500">
                        {social.icon}
                      </div>
                      <input
  type="text"
  name={social.label}
  value={formData.socials[social.label]}
  onChange={handleSocialChange}
  className="w-full p-2.5 outline-none focus:bg-gray-50 transition"
  placeholder={`${social.label} link`}/>
                     </div>
                  ))}
                </div>
              </div>

              {/* Requirement Checkboxes
              <div className="md:col-span-2 space-y-3 mt-4">
                <label className="flex items-center gap-3 cursor-pointer group">
                <input
  type="checkbox"
  name="ndaRequired"
  onChange={(e) =>
    setFormData({
      ...formData,
      ndaRequired: e.target.checked,
    })
  }

 className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83]" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">Is NDA Required?</span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
              <input
  type="checkbox"
  name="vendorFormRequired"    
  onChange={(e) =>
    setFormData({
      ...formData,
      vendorFormRequired: e.target.checked,
    })
  }

 className="w-5 h-5 rounded border-gray-300 text-[#43624A] focus:ring-[#7A9C83]" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-black transition">Is Vendor Onboarding Form Required?</span>
                </label>
              </div>*/}
            </div>
          </div>
        </div> 

        {/* SECTION 2: Branding */}
        <div className="flex flex-col md:flex-row border-b border-gray-100">
          <div className="md:w-1/3 p-8 bg-gray-50/30">
            <h2 className="text-2xl font-bold mb-4">Branding</h2>
            <p className="text-sm text-gray-500">Manage your corporate logo to ensure communication documents represent your brand correctly.</p>
          </div>
          <div className="md:w-2/3 p-8">
            <label className="block text-sm font-medium text-gray-600 mb-3">Company Logo</label>
            <div className="w-full max-w-sm aspect-video border-2 border-dashed border-gray-200 rounded-xl flex items-center justify-center relative bg-gray-50 group hover:border-[#7A9C83] transition">
              <div className="text-center p-6">
                <input type="file"   name="logo"  accept="image/*" onChange={handleLogoUpload}   
 className="absolute inset-0 opacity-0 cursor-pointer z-10" />
{logo ? (
  <img src={URL.createObjectURL(logo)} className="mx-auto mb-4" />
) : (
  <img src="/api/placeholder/200/80" className="mx-auto mb-4 grayscale opacity-50" />
)}                <p className="text-xs text-gray-400 font-medium">Click or drag to upload logo</p>
              </div>
              <button className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1 shadow-lg hover:bg-red-600 transition">
                <X size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* SECTION 3: Profile Background */}
{/* SECTION 3: Profile Background */}
<div className="flex flex-col md:flex-row">
  <div className="md:w-1/3 p-8 bg-gray-50/30">
    <h2 className="text-2xl font-bold mb-4">Profile background</h2>
    <p className="text-sm text-gray-500 leading-relaxed">
      Add a cover image that represents your organization. Recommended dimensions: 1200 x 400 pixels.
    </p>
  </div>

  <div className="md:w-2/3 p-8">
    <label className="block text-sm font-medium text-gray-600 mb-3">
      Cover Image
    </label>

    {/* 🔥 IMPORTANT: added relative */}
    <div className="relative w-full h-48 border-2 border-dashed border-gray-200 rounded-xl bg-gray-50 flex flex-col items-center justify-center group hover:bg-[#F5F2EA]/50 transition-colors cursor-pointer">

      {/* 🔥 FILE INPUT (THIS WAS MISSING) */}
      <input
        type="file"  name="cover"  
        accept="image/*"
        onChange={handleCoverUpload}
        className="absolute inset-0 opacity-0 cursor-pointer z-10"
      />

      {/* UI (UNCHANGED) */}
      {cover ? (
        <img
          src={URL.createObjectURL(cover)}
          alt="Cover"
          className="w-full h-full object-cover rounded-xl"
        />
      ) : (
        <>
          <Upload
            className="text-gray-300 mb-2 group-hover:text-[#7A9C83] transition"
            size={40}
          />
          <p className="text-sm font-semibold text-gray-600">
            Upload Cover Image
          </p>
        </>
      )}
    </div>
  </div>
</div>

        {/* STICKY FOOTER */}
        <div className="px-8 py-6 bg-gray-50 border-t border-gray-100 flex flex-col sm:flex-row justify-end gap-3 sticky bottom-0 z-10">
          <button className="px-6 py-2.5 rounded-lg border border-gray-300 text-gray-600 font-semibold hover:bg-white transition">
            Cancel
          </button>
          <button  onClick={handleSubmit} className="px-6 py-2.5 rounded-lg bg-[#7A9C83] text-white font-semibold hover:bg-[#43624A] transition">
          
  Save
</button>
          
          <button className="px-6 py-2.5 rounded-lg bg-[#2A2A2A] text-white font-semibold hover:bg-black transition shadow-md">
            Save and View My Profile
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CompanyProfile