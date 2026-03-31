import React, { useState } from 'react';
import { ChevronDown, CreditCard, Landmark, Wallet } from 'lucide-react';

const WalletHome = () => {
  const [paymentMethod, setPaymentMethod] = useState('debit');

  const packs = [
    { name: "Starter Pack", credits: 10, usd: 10, bhd: "3.700", total: "4.070", ribbon: "bg-gray-400" },
    { name: "Starter Plus", credits: 30, usd: 24, bhd: "9.000", total: "9.900", ribbon: "bg-gray-500" },
    { name: "Most Popular", credits: 110, usd: 50, bhd: "18.800", total: "20.680", bonus: "GET 1 FREE", ribbon: "bg-[#43624A]" },
    { name: "Best Value", credits: 270, usd: 119, bhd: "45.000", total: "49.500", bonus: "GET 2 FREE", ribbon: "bg-[#7A9C83]" },
    { name: "Power Pack", credits: 530, usd: 225, bhd: "84.900", total: "93.390", bonus: "GET 3 FREE", ribbon: "bg-[#43624A]" },
    { name: "Enterprise", credits: 640, usd: 265, bhd: "100.000", total: "110.000", bonus: "GET 4 FREE", ribbon: "bg-[#2A2A2A]" },
  ];

return (
  <div className="flex min-h-screen bg-[#F5F2EA] justify-center">
    <div className="min-h-screen bg-[#F5F2EA] p-4 md:p-10 font-sans text-[#2A2A2A] w-full">
      
      {/* 👇 Increased width + centered */}
      <div className="w-full max-w-[1600px] mx-auto space-y-10">

        {/* Top Section */}
        <div className="bg-white rounded-2xl shadow-md border border-[#7A9C83]/20 p-8 md:p-12 w-full">
          
          {/* 👇 Centered + bigger layout */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
            
            {/* You forgot content here OR remove this grid if not needed */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Wallet Overview
              </h2>
              <p className="text-gray-500 text-base md:text-lg">
                Manage your credits and purchase new RFX packs easily.
              </p>
            </div>

            {/* Payment Buttons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setPaymentMethod('debit')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                  paymentMethod === 'debit'
                    ? 'bg-[#43624A] text-white'
                    : 'bg-white'
                }`}
              >
                <CreditCard size={18} /> Debit
              </button>

              <button
                onClick={() => setPaymentMethod('bank')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg border transition-all ${
                  paymentMethod === 'bank'
                    ? 'bg-[#43624A] text-white'
                    : 'bg-white'
                }`}
              >
                <Landmark size={18} /> Bank
              </button>
            </div>

          </div>
        </div>

        {/* Credit Packs Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packs.map((pack, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-md border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-shadow">

              <div className={`absolute top-4 -left-12 -rotate-45 w-40 text-center text-[10px] font-bold text-white py-1 shadow-sm ${pack.ribbon}`}>
                {pack.name.toUpperCase()}
              </div>

              <div className="p-8 pt-12 flex items-center justify-between">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#43624A] mb-1">{pack.credits}</div>
                  <div className="text-sm font-bold text-[#7A9C83] tracking-widest">CREDITS</div>
                </div>

                <div className="text-right text-xs text-gray-500 space-y-1">
                  <p>Buy {pack.credits} RFX for {pack.usd} USD</p>
                  <p>/ {pack.bhd} BHD + VAT =</p>
                  <p className="font-bold text-[#2A2A2A]">({pack.total} BHD)</p>
                  {pack.bonus && <p className="text-[#43624A] font-bold mt-2">& {pack.bonus}</p>}
                </div>
              </div>

              <div className="p-4 bg-[#F5F2EA] flex justify-center">
                <button className="w-2/3 py-3 bg-[#43624A] hover:bg-[#2A2A2A] text-white font-bold rounded shadow-md transition-colors uppercase text-sm tracking-wider">
                  Select
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  </div>
);
};

export default WalletHome;