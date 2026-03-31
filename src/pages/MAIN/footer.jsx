import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1C1B] text-[#A3A3A3] pt-16 pb-8 px-6 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="bg-[#3D5A45] text-white w-8 h-8 flex items-center justify-center rounded font-bold text-lg">
                P
              </div>
              <span className="text-white text-2xl font-semibold tracking-tight">
                Procu<span className="text-[#3D5A45]">bid</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Streamlining procurement processes with a modern, transparent portal for businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider"> PRODUCT</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Portal</a></li>
               </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tutorials</a></li>
             </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-wider">LEGAL</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                
                <a href="mailto:info@procubid.com" className="hover:text-white transition-colors">Terms & Conditions
</a>
              </li>
              <li className="flex items-center gap-3">
                
                <a href="tel:+97317000000" className="hover:text-white transition-colors">Privacy Policy</a>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} Procubid. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;