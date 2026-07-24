import React, { useState, useEffect } from 'react';
import { Page } from '../types';
import { 
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Phone,
  Mail,
  Globe
} from 'lucide-react';
import { companyDetails } from '../data/companyData';

interface NavbarProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
  onOpenSelfieProject: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage, onOpenSelfieProject }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems: { id: Page; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'partner', label: 'For Clients' },
    { id: 'contributor', label: 'Contributors' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (page: Page) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      
      {/* Top micro contact banner */}
      <div className="bg-[#070A12] text-slate-300 text-xs py-1.5 px-4 border-b border-slate-800/60 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[11px]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-amber-400 font-medium">
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              {companyDetails.headquarters}
            </span>
            <a 
              href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} 
              className="flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3 h-3 text-amber-400" />
              {companyDetails.phone}
            </a>
            <a 
              href={`mailto:${companyDetails.ceoEmail}`} 
              className="hidden md:flex items-center gap-1 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3 h-3 text-amber-400" />
              CEO Direct: {companyDetails.ceoEmail}
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenSelfieProject}
              className="flex items-center gap-1.5 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 px-3 py-0.5 rounded-full border border-amber-500/40 text-[11px] font-semibold transition-all"
            >
              <Sparkles className="w-3 h-3 text-amber-400 animate-pulse" />
              <span>Active Project: Global Selfie Collection</span>
              <span className="bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase">
                Apply
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav 
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-[#0B0F19]/95 backdrop-blur-md border-b border-slate-800/80 shadow-2xl py-3' 
            : 'bg-[#0B0F19] border-b border-slate-800/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand matching reference image */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 text-left group"
          >
            <div className="w-11 h-11 rounded-full bg-slate-950 border-2 border-amber-500/80 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400 transition-all">
              <span className="text-amber-400 font-black text-xl font-serif">R</span>
            </div>
            <div>
              <span className="text-xl font-black tracking-tight text-white block leading-none">
                RemoLance
              </span>
              <span className="block text-[9px] font-bold text-amber-400 uppercase tracking-widest mt-1">
                AI DATA • WORKFORCE
              </span>
            </div>
          </button>

          {/* Nav Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3.5 py-2 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-slate-800/80 border border-amber-500/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/40'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* CTA Button matching reference image */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => handleNavClick('partner')}
              className="px-6 py-2.5 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-all transform hover:scale-105 flex items-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white bg-slate-800/80 rounded-xl"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0B0F19] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 mt-3 animate-in slide-in-from-top duration-200">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-colors flex items-center justify-between ${
                  currentPage === item.id
                    ? 'text-amber-300 bg-amber-950/40 border border-amber-500/40 font-bold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                <span>{item.label}</span>
              </button>
            ))}

            <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
              <button
                onClick={() => handleNavClick('partner')}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-full shadow-lg"
              >
                <span>Request a Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => handleNavClick('contributor')}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-amber-300 border border-amber-500/60 rounded-full hover:bg-amber-500/10"
              >
                <span>Become a Contributor</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
