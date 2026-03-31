 import { useState } from 'react';
 import { Link, useNavigate } from "react-router-dom";
import { ChevronDownIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../../assets/logo.png'; 
export default function MainNavbar() {
    const navigate = useNavigate(); // ✅ ADD THIS LINE
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'Explore Features', type: 'dropdown', items: ['About Us', 'Our Team', 'Culture'] },
    { name: 'About Us', type: 'dropdown', items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'] },
    { name: 'Pricing', type: 'link', href: '/pricing'},
    { name: 'Set Country', type: 'link', href: '#' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-1xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center py-1">
  <div className="flex items-center">
    <img 
      src={logo}
      alt="Procubid Logo" 
      className="h-10 w-auto mr-[5px] block"
    />

  <a href="/" className="flex items-center space-x-1 m-0 p-0">
    <span className="text-4xl font-black text-[#264E36]">PROCU</span>
    <span className="text-4xl font-black text-[#7A9C83] tracking-wide">
      BID
    </span>
  </a>
</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.type === 'dropdown' ? (
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="flex items-center text-gray-600 hover:text-[#43624A] font-medium transition-colors"
                  >
                    {link.name}
                    <ChevronDownIcon className={`ml-1 w-4 h-4 transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
        <Link
  to={link.href}
  className="text-gray-600 hover:text-[#43624A] font-medium transition-colors"
>
  {link.name}
</Link>         )}

                {/* Desktop Dropdown Menu */}
                {link.type === 'dropdown' && activeDropdown === link.name && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.items.map((item) => (
                      <a key={item} href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#F5F2EA] hover:text-[#43624A]">
                        {item}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button onClick={() => navigate("/login")} className="bg-[#43624A] text-white px-5 py-2 rounded-full hover:bg-black transition-all">
             Sign in
            </button>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white border-t border-gray-50">
          {navLinks.map((link) => (
            <div key={link.name}>
              {link.type === 'dropdown' ? (
                <>
                  <button
                    onClick={() => toggleDropdown(link.name)}
                    className="w-full flex justify-between items-center px-3 py-3 text-base font-medium text-gray-600 hover:bg-[#F5F2EA] rounded-lg"
                  >
                    {link.name}
                    <ChevronDownIcon className={`w-4 h-4 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                  </button>
                  {activeDropdown === link.name && (
                    <div className="pl-6 space-y-1">
                      {link.items.map((item) => (
                        <a key={item} href="#" className="block px-3 py-2 text-sm text-gray-500 hover:text-[#43624A]">
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <a href={link.href} className="block px-3 py-3 text-base font-medium text-gray-600 hover:bg-[#F5F2EA] rounded-lg">
                  {link.name}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}