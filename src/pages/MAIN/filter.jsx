import React, { useState } from 'react';
import { Search, SlidersHorizontal, Calendar } from 'lucide-react';

// Sample hierarchical data for countries, states, and districts
const locationData = {
  countries: [
    { id: 'BH', name: 'Bahrain' },
    { id: 'SA', name: 'Saudi Arabia' },
    { id: 'AE', name: 'United Arab Emirates' },
    { id: 'KW', name: 'Kuwait' },
    { id: 'QA', name: 'Qatar' },
  ],
  states: {
    BH: [
      { id: 'MH', name: 'Muharraq' },
      { id: 'CA', name: 'Capital' },
      { id: 'NS', name: 'Northern' },
      { id: 'SB', name: 'Southern' },
    ],
    SA: [
      { id: 'RJ', name: 'Riyadh' },
      { id: 'JE', name: 'Jeddah' },
      { id: 'DQ', name: 'Dammam' },
    ],
    AE: [
      { id: 'DU', name: 'Dubai' },
      { id: 'AB', name: 'Abu Dhabi' },
      { id: 'SH', name: 'Sharjah' },
    ],
    KW: [
      { id: 'KW-CA', name: 'Capital' },
      { id: 'KW-HA', name: 'Hawally' },
    ],
    QA: [
      { id: 'DO', name: 'Doha' },
      { id: 'RA', name: 'Al Rayyan' },
    ],
  },
  districts: {
    MH: ['Muharraq City', 'Diplomatic Area', 'Arad', 'Qalali'],
    CA: ['Manama', 'Juffair', 'Adliya', 'Seef'],
    NS: ['Saar', 'Jidhafs', 'Barbar', 'Dar Kulaib'],
    SB: ['Riffa', 'Sakhir', 'Zallaq', 'Al Awaj'],
    RJ: ['Riyadh City', 'Al Malaz', 'Al Olaya', 'Al Batha'],
    JE: ['Jeddah Corniche', 'Al Hamra', 'Al Rawdah', 'Al Salamah'],
    DQ: ['Al Khobar', 'Al Dhahran', 'Dammam City', 'Qatif'],
    DU: ['Downtown Dubai', 'Marina', 'JLT', 'Deira', 'Bur Dubai'],
    AB: ['Al Reem Island', 'Yas Island', 'Corniche', 'Khalifa City'],
    SH: ['Al Majaz', 'Al Nahda', 'Muwaileh', 'Al Qasba'],
    'KW-CA': ['Al-Asema', 'Al-Idi', 'Al-Mansour', 'Al-Naseem'],
    'KW-HA': ['Al-Maghrib', 'Al-Ghazali', 'Al-Hamra', 'Al-Salmiya'],
    DO: ['West Bay', 'The Pearl', 'Doha City', 'Al Wakrah'],
    RA: ['Al Rayyan City', 'Al Shahaniya', 'Al Khor'],
  },
};

const OpportunityFilter = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');

  // Location filter states
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const tabs = ['All', 'Open', 'Closed', 'Awarded', 'Cancelled'];

  // Get states for selected country
  const availableStates = selectedCountry ? locationData.states[selectedCountry] || [] : [];
  
  // Get districts for selected state
  const availableDistricts = selectedState ? locationData.districts[selectedState] || [] : [];

  // Handle country change - reset state and district
  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState('');
    setSelectedDistrict('');
  };

  // Handle state change - reset district
  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedDistrict('');
  };

  return (
    /* 1. Full Screen Wrapper - Removed padding to allow the box to grow */
    <div className="w-full bg-[#F9F7F2]-50 min-h-[200px] p-2 md:p-4">
      
      {/* 2. Increased Width: Changed max-w-7xl to max-w-[98%] or max-w-full */}
      <div className="max-w-[1600px] mx-auto bg-[#F9F7F2] rounded-2xl border border-gray-200 shadow-lg overflow-hidden">
        
        <div className="p-4 md:p-6"> {/* Increased internal padding for the wider look */}
          
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search opportunities by RFX #, company, or keywords..."
                className="w-full pl-12 pr-4 py-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-700/20 focus:border-emerald-700 transition-all text-gray-700 shadow-sm"
              />
            </div>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className={`flex items-center justify-center gap-2 px-8 py-4 border rounded-xl transition-all font-semibold shadow-sm ${
                isFilterOpen 
                ? 'bg-[#3D5A45] text-white border-[#3D5A45]' 
                : 'bg-white text-gray-800 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${
                  activeTab === tab
                    ? 'bg-[#3D5A45] text-white shadow-md'
                    : 'bg-[#E8E4D8] text-[#3D5A45] hover:bg-[#DED9C8]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

{isFilterOpen && (
            <div className="pt-8 border-t border-gray-200 grid grid-cols-1 md:grid-cols-3 gap-8 animate-in fade-in slide-in-from-top-4 duration-300">
              {/* Row 1 */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Classification</label>
                <select className="w-full p-4 bg-white border border-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-emerald-700 shadow-sm bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]">
                  <option>All Classifications</option>
                  <option>Construction</option>
                  <option>Services</option>
                  <option>IT</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">Country</label>
                <select 
                  value={selectedCountry}
                  onChange={handleCountryChange}
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-emerald-700 shadow-sm bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
                >
                  <option value="">All Countries</option>
                  {locationData.countries.map((country) => (
                    <option key={country.id} value={country.id}>{country.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">State</label>
                <select 
                  value={selectedState}
                  onChange={handleStateChange}
                  disabled={!selectedCountry}
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-emerald-700 shadow-sm bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
                >
                  <option value="">All States</option>
                  {availableStates.map((state) => (
                    <option key={state.id} value={state.id}>{state.name}</option>
                  ))}
                </select>
              </div>

              {/* Row 2 */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">District</label>
                <select 
                  value={selectedDistrict}
                  onChange={(e) => setSelectedDistrict(e.target.value)}
                  disabled={!selectedState}
                  className="w-full p-4 bg-white border border-gray-300 rounded-xl appearance-none cursor-pointer focus:outline-none focus:border-emerald-700 shadow-sm bg-no-repeat bg-[right_1rem_center] bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23666%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpath%20d%3D%22m6%209%206%206%206-6%22%2F%3E%3C%2Fsvg%3E')]"
                >
                  <option value="">All Districts</option>
                  {availableDistricts.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">From Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-700 shadow-sm"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 ml-1">To Date</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="w-full p-4 bg-white border border-gray-300 rounded-xl focus:outline-none focus:border-emerald-700 shadow-sm"
                  />
                  <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OpportunityFilter;