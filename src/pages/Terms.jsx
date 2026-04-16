import React from 'react';

/**
 * PROCUBID BRAND COLORS
 * black: #2A2A2A
 * green-dark: #43624A
 * green-light: #7A9C83
 * cream: #F5F2EA
 */

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-[#F5F2EA] py-12 px-4 sm:px-6 lg:px-8 font-sans">
      {/* Using arbitrary values [color] ensures you don't need 
          to touch tailwind.config.js for this to work 
      */}
      <div className="max-w-4xl mx-auto bg-white shadow-sm rounded-xl overflow-hidden border border-[#7A9C83]/20">
        
        {/* Header Section */}
        <div className="p-8 border-b border-[#7A9C83]/30">
          <h1 className="text-4xl font-bold text-[#43624A] mb-2">
            Terms and Conditions
          </h1>
          <p className="text-[#7A9C83] font-medium uppercase tracking-wider text-sm">
            Last Updated: April 16, 2026
          </p>
        </div>

        {/* Content Section */}
        <div className="p-8 text-[#2A2A2A] space-y-8 leading-relaxed">
          
          <section>
            <p className="text-lg">
              Welcome to <span className="font-bold text-[#43624A]">Procubid</span>. 
              By clicking <span className="italic underline decoration-[#7A9C83]">"Sign Up,"</span> <span className="italic underline decoration-[#7A9C83]">"I Agree,"</span> or by accessing and using the platform, 
              you agree to be bound by these Terms and Conditions. Please read them carefully.
            </p>
          </section>

          {/* Section 1 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#43624A] mb-3">1. Scope of Service</h2>
            <p>
              Procubid provides a B2B e-tendering and procurement marketplace that connects buyers with sellers. 
              We provide the digital infrastructure for sourcing, bidding, and procurement management. 
              <span className="font-semibold text-[#43624A]"> Procubid is a facilitator</span> and is not a party to the actual 
              contracts or transactions between users.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#43624A] mb-3">2. Eligibility and Account Registration</h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#7A9C83]">
              <li><span className="font-bold">Business Entity:</span> You must represent a validly registered business entity to create an account.</li>
              <li><span className="font-bold">Accuracy:</span> You agree to provide accurate, current, and complete information during registration and to keep your account details updated.</li>
              <li><span className="font-bold">Security:</span> You are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#43624A] mb-3">3. Use of the Platform</h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#7A9C83]">
              <li><span className="font-bold">Compliance:</span> You agree to use the platform in compliance with all applicable local and international laws.</li>
              <li><span className="font-bold">Prohibited Conduct:</span> Users may not submit fraudulent bids, engage in price-fixing, or upload malicious code.</li>
              <li><span className="font-bold">Verification:</span> Procubid reserves the right to verify the credentials of any business entity on the platform.</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-2xl font-semibold text-[#43624A] mb-3">4. E-Tendering and Bidding</h2>
            <ul className="list-disc pl-6 space-y-3 marker:text-[#7A9C83]">
              <li><span className="font-bold">Binding Offers:</span> A bid submitted through Procubid constitutes a formal offer unless stated otherwise.</li>
              <li><span className="font-bold">Selection:</span> Final vendor selection is at the sole discretion of the buyer.</li>
            </ul>
          </section>

          {/* Remaining Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#7A9C83]/10">
            <section>
              <h2 className="text-xl font-semibold text-[#43624A] mb-2">5. Intellectual Property</h2>
              <p className="text-sm">Procubid retains all rights to the platform’s software and branding. Users grant a license for hosted content.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#43624A] mb-2">6. Limitation of Liability</h2>
              <p className="text-sm">Procubid is not liable for indirect damages or disputes between buyers and sellers.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#43624A] mb-2">7. Termination</h2>
              <p className="text-sm">We may suspend accounts that violate terms or harm marketplace integrity.</p>
            </section>
            <section>
              <h2 className="text-xl font-semibold text-[#43624A] mb-2">8. Governing Law</h2>
              <p className="text-sm">Governed by the laws of the jurisdiction of registration without regard to conflict principles.</p>
            </section>
          </div>

          <section className="bg-[#7A9C83]/5 p-6 rounded-lg border-l-4 border-[#7A9C83]">
            <h2 className="text-xl font-semibold text-[#43624A] mb-2">9. Changes to Terms</h2>
            <p>Procubid may update these terms from time to time. Continued use of the platform following any changes constitutes your acceptance of the new terms.</p>
          </section>
        </div>

        {/* Footer Note */}
        <div className="bg-[#43624A] p-8 text-center">
          <p className="text-[#F5F2EA] text-sm mb-4">
            By using our platform, you acknowledge you have read and understood these terms.
          </p>
          <button className="bg-[#7A9C83] hover:bg-[#7A9C83]/80 text-white px-8 py-2 rounded-full font-medium transition-colors">
            Questions? Contact Legal Team
          </button>
        </div>
      </div>
      
      <div className="text-center mt-8 text-[#7A9C83] text-xs">
        &copy; 2026 Procubid B2B Solutions. All rights reserved.
      </div>
    </div>
  );
};

export default TermsAndConditions;