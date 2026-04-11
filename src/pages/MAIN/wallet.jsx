import React, { useState } from "react";
import { CreditCard, Landmark } from "lucide-react";
import MainNavbar from "./navbar";
import MainFooter from "./footer";

const WalletHome = () => {
  const [paymentMethod, setPaymentMethod] = useState("debit");

const packs = [
  {
    name: "Starter",
    credits: 10,
    price: 450,
    original: 900,
    rfq: "10 RFQ",
    validity: "90 Days",
    usd: 5,          // optional (adjust if needed)
    bhd: "1.900",
    total: "2.090",
    ribbon: "bg-gray-400",
  },
  {
    name: "Popular",
    credits: 25,
    price: 900,
    original: 1800,
    rfq: "25 RFQ",
    validity: "90 Days",
    usd: 10,
    bhd: "3.800",
    total: "4.180",
    ribbon: "bg-[#43624A]",
  },
  {
    name: "Unlimited",
    credits: "∞",
    price: 1300,
    original: 2700,
    rfq: "Unlimited RFQ",
    validity: "90 Days",
    usd: 15,
    bhd: "5.500",
    total: "6.050",
    ribbon: "bg-[#7A9C83]",
  },
  {
    name: "Unlimited Plus",
    credits: "∞",
    price: 4500,
    original: 9000,
    rfq: "Unlimited RFQ",
    validity: "1 Year",
    usd: 50,
    bhd: "18.800",
    total: "20.680",
    ribbon: "bg-[#2A2A2A]",
  },
];
  return (
    <>
      <MainNavbar />

      <div className="min-h-screen bg-[#F5F2EA] flex justify-center">
        <div className="w-full px-4 py-6 md:px-8 md:py-10">
          <div className="w-full max-w-[1600px] mx-auto space-y-10">
            {/* Top Section */}
            <div className="bg-white rounded-2xl shadow-md border border-[#7A9C83]/20 p-6 md:p-10 w-full">
              <div className="flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
                {/* Left Content */}
                <div className="space-y-3">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2A2A2A]">
                    Wallet Overview
                  </h2>
                  <p className="text-gray-500 text-sm md:text-base">
                  Be an early adopter of Procubid. We are waiving all platform fees for our first 1000 enterprise clients. Get full access to AI-powered bidding, vendor verification, and smart contracts at Rs. 0 /month for your first 3 Month
                  </p>
                </div>

                {/* Middle Summary */}
                <div className="bg-[#F5F2EA] border border-[#7A9C83]/20 rounded-xl px-6 py-4 min-w-[220px]">
                  <p className="text-sm text-gray-500">Available Balance</p>
                  <h3 className="text-3xl font-bold text-[#43624A] mt-1">
                    0 RFX
                  </h3>
                </div>

                {/* Payment Buttons */}
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod("debit")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all ${
                      paymentMethod === "debit"
                        ? "bg-[#43624A] text-white border-[#43624A]"
                        : "bg-white text-[#2A2A2A] border-gray-300 hover:border-[#43624A]"
                    }`}
                  >
                    <CreditCard size={18} />
                    Debit
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod("bank")}
                    className={`flex items-center gap-2 px-6 py-3 rounded-lg border font-medium transition-all ${
                      paymentMethod === "bank"
                        ? "bg-[#43624A] text-white border-[#43624A]"
                        : "bg-white text-[#2A2A2A] border-gray-300 hover:border-[#43624A]"
                    }`}
                  >
                    <Landmark size={18} />
                    Bank
                  </button>
                </div>
              </div>
            </div>

            {/* Credit Packs Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {packs.map((pack, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden relative group hover:shadow-xl transition-shadow"
                >
                  {/* Ribbon */}
                  <div
                    className={`absolute top-5 -left-10 -rotate-45 w-36 text-center text-[10px] font-bold text-white py-1 shadow-sm ${pack.ribbon}`}
                  >
                    {pack.name.toUpperCase()}
                  </div>

                  {/* Card Body */}
<div className="p-6 pt-14 text-center space-y-4">

  {/* Plan Name */}
  <h3 className="text-xl font-bold text-[#2A2A2A]">
    {pack.name}
  </h3>

  {/* Price */}
  <div>
    <span className="text-gray-400 line-through mr-2">
      ₹{pack.original}
    </span>
    <span className="text-3xl font-bold text-[#43624A]">
      ₹{pack.price}
    </span>
  </div>

  {/* RFQ Details */}
  <p className="text-sm text-gray-600 font-medium">
    {pack.rfq}
  </p>

  {/* Validity */}
  <p className="text-sm text-gray-500">
    {pack.validity} Validity
  </p>

</div>

                  {/* Footer Button */}
                  <div className="p-4 bg-[#F5F2EA] flex justify-center">
                    <button
                      type="button"
                      className="w-full sm:w-2/3 py-3 bg-[#43624A] hover:bg-[#2A2A2A] text-white font-bold rounded-lg shadow-md transition-colors uppercase text-sm tracking-wider"
                    >
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* ✅ ADD FOOTER HERE */}
<MainFooter />

    </>
  );
};

export default WalletHome;