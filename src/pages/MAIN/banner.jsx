import { useState, useEffect } from "react";
import { XMarkIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function PremiumBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 200);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
  <div className="w-full">
  <div className="w-full bg-[#F5F2EA] border border-[#7A9C83]/30 shadow-sm relative">
        {/* Gradient Line */}
        <div className="h-1 w-full bg-gradient-to-r from-[#43624A] via-[#7A9C83] to-[#43624A]" />

        {/* Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-3 right-3 p-1 rounded-lg hover:bg-[#7A9C83]/20 transition z-10"
        >
          <XMarkIcon className="w-5 h-5 text-[#2A2A2A]" />
        </button>

        {/* Content */}
        <div className="px-6 py-5 flex flex-col items-center text-center">
          <div className="mb-3 flex flex-col items-center gap-1">
            <span className="flex items-center font-bold text-[#2A2A2A] text-xl">
              <SparklesIcon className="w-6 h-6 text-[#43624A] mr-2" />
              Need more credits?
            </span>

            <span className="text-base text-[#43624A]">
              Unlock even more possibilities! Explore our credit packages and boost your account today.
            </span>

            <span className="text-xs text-[#7A9C83] italic">
              Don't miss our limited-time offers. Click here to Buy Credits now!
            </span>
          </div>

          <button className="bg-[#43624A] text-white font-medium px-8 py-2.5 rounded-lg hover:bg-[#2A2A2A] transition-all duration-300 shadow-md transform hover:scale-105">
            Explore Features
          </button>
        </div>

      </div>
    </div>
  );
}