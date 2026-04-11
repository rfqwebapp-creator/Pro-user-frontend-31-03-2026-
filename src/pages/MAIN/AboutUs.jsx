import React from 'react';
import { ShieldCheck, Zap, BarChart3, Users, Eye, Link } from 'lucide-react';
import MainNavbar from "./navbar";
import MainFooter from "./pages/MAIN/footer";

const AboutUs = () => {
  // Hex Map for reference:
  // Dark: #2A2A2A
  // Green: #43624A
  // Sage: #7A9C83
  // Off-white: #F5F2EA

  return (
    <div className="min-h-screen font-sans bg-[#F5F2EA] text-[#2A2A2A]">
      {/* Navbar Component */}
      <MainNavbar />

      <main className="max-w-6xl mx-auto px-6 md:px-12 py-16">
        {/* Hero Section */}
        <section className="grid lg:grid-cols-3 gap-16 mb-24 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-5xl md:text-6xl font-extrabold text-[#43624A] mb-8 tracking-tight">
              About Us
            </h2>
            <h3 className="text-2xl font-bold mb-6 text-[#2A2A2A]/80 italic">
              Bidding & Procurement Simplified.
            </h3>
            <div className="space-y-6 text-lg text-[#2A2A2A]/90 leading-relaxed">
              <p>
                The traditional bidding process is broken. It’s buried in endless email threads, 
                opaque pricing, and missed opportunities. We built <span className="font-bold text-[#43624A]">PROCUBID</span> to fix it.
              </p>
              <p>
                We are a team of Estimators, Procurement experts and tech enthusiasts who got 
                tired of the "old way" of doing things. PROCUBID is our answer: a sleek, 
                intuitive platform that makes sourcing goods and services as easy as a few 
                clicks, without sacrificing the rigor that professional procurement demands.
              </p>
            </div>
          </div>
          
          {/* Brand Illustration Card */}
          <div className="bg-[#7A9C83]/10 rounded-3xl p-10 flex flex-col items-center justify-center border-2 border-[#7A9C83]/20 shadow-sm aspect-square lg:aspect-auto">
             <div className="bg-white p-6 rounded-full shadow-inner mb-6">
                <Users size={56} className="text-[#43624A]" />
             </div>
             <div className="flex flex-wrap justify-center gap-3">
                {['ESTIMATORS', 'PROCUREMENT', 'TECH'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#43624A] text-white text-[10px] font-black rounded-full tracking-widest">
                    {tag}
                  </span>
                ))}
             </div>
          </div>
        </section>

        {/* Value Proposition Grid */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter">Why PROCUBID?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#7A9C83] p-8 rounded-2xl text-white shadow-lg transform transition hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-2 rounded-lg"><Zap size={28} /></div>
                <h4 className="font-bold text-xl uppercase italic">Efficiency First</h4>
              </div>
              <p className="text-sm leading-loose opacity-90">
                Automated RFX workflows that eliminate the manual paper trail and save weeks of administrative time.
              </p>
            </div>

            <div className="bg-[#7A9C83] p-8 rounded-2xl text-white shadow-lg transform transition hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-2 rounded-lg"><ShieldCheck size={28} /></div>
                <h4 className="font-bold text-xl uppercase italic">Integrity</h4>
              </div>
              <p className="text-sm leading-loose opacity-90">
                Our proprietary bidding engine ensures a level playing field and fair shots at growth for all suppliers.
              </p>
            </div>

            <div className="bg-[#7A9C83] p-8 rounded-2xl text-white shadow-lg transform transition hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-2 rounded-lg"><BarChart3 size={28} /></div>
                <h4 className="font-bold text-xl uppercase italic">Insights</h4>
              </div>
              <p className="text-sm leading-loose opacity-90">
                Actionable analytics to optimize spend, mitigate risk, and move beyond the simple transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="mb-24 bg-[#2A2A2A] p-12 rounded-[2rem] text-[#F5F2EA] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-sm font-black text-[#7A9C83] uppercase tracking-[0.3em] mb-4">Our Mission</h2>
            <p className="text-2xl md:text-4xl font-light leading-tight max-w-4xl italic">
              "To streamline the global supply chain by providing a secure, <span className="text-[#7A9C83] font-medium">data-driven platform</span> where every bid is fair, every contract is transparent, and every partnership is built to last."
            </p>
          </div>
          <div className="absolute -right-20 -bottom-20 text-white/5 rotate-12">
            <ShieldCheck size={300} />
          </div>
        </section>

        {/* Philosophy List */}
        <section className="mb-24">
          <h2 className="text-3xl font-black mb-10 uppercase tracking-tighter">The PROCUBID Philosophy</h2>
          <div className="grid gap-4">
            {[
              { id: '01', title: 'Transparency', icon: <Eye size={24}/>, desc: 'No hidden agendas. Just clear specs and honest bids.' },
              { id: '02', title: 'Speed', icon: <Zap size={24}/>, desc: 'Real-time communication tools that keep projects moving.' },
              { id: '03', title: 'Connection', icon: <Link size={24}/>, desc: "We don't just facilitate transactions; we build networks." },
            ].map((item) => (
              <div key={item.id} className="group flex flex-col md:flex-row md:items-center justify-between bg-white border border-[#7A9C83]/20 p-6 rounded-xl hover:border-[#43624A] transition-all shadow-sm hover:shadow-md">
                <div className="flex items-center gap-6">
                  <span className="text-3xl font-black text-[#7A9C83]/30 group-hover:text-[#43624A] transition-colors">{item.id}</span>
                  <div>
                    <h4 className="text-xl font-bold text-[#2A2A2A]">{item.title}</h4>
                    <p className="text-sm text-[#2A2A2A]/60">{item.desc}</p>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-[#43624A] bg-[#7A9C83]/10 p-3 rounded-full group-hover:bg-[#43624A] group-hover:text-white transition-all">
                  {item.icon}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
    <MainFooter />
    </div>
  );
};

export default AboutUs;