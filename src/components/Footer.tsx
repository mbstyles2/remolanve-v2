import React from 'react';
import { Page } from '../types';
import { companyDetails } from '../data/companyData';
import { 
  Globe, 
  Mail, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  UserCheck,
  Building2,
  Lock
} from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: Page) => void;
  onOpenSelfieProject: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, onOpenSelfieProject }) => {
  const handleNav = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050810] text-slate-400 border-t border-slate-800">
      
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-[#0B0F19] via-amber-950/20 to-[#0B0F19] border-b border-slate-800/80 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-950/40 border border-amber-500/40 text-amber-300 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Ethical AI Data Collection & Workforce</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Ready to power your AI models or join our workforce?
            </h3>
            <p className="text-slate-400 text-sm mt-1 max-w-2xl">
              Connect with RemoLance to request custom datasets or join our global network of contributors.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => handleNav('contributor')}
              className="px-6 py-2.5 text-xs font-bold text-amber-300 border border-amber-500/80 hover:bg-amber-500/10 rounded-full transition-all flex items-center gap-2"
            >
              <UserCheck className="w-4 h-4 text-amber-400" />
              <span>Join as Contributor</span>
            </button>
            <button
              onClick={() => handleNav('partner')}
              className="px-6 py-2.5 text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 rounded-full transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] flex items-center gap-2"
            >
              <Building2 className="w-4 h-4" />
              <span>Request a Quote</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        
        {/* Brand Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-950 border-2 border-amber-500/80 flex items-center justify-center text-amber-400 font-black text-lg font-serif">
              R
            </div>
            <div>
              <span className="text-xl font-black text-white">{companyDetails.name}</span>
              <span className="block text-[10px] font-bold text-amber-400 uppercase tracking-widest">{companyDetails.subtitle}</span>
            </div>
          </div>

          <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
            {companyDetails.tagline}
          </p>
          <p className="text-[11px] text-slate-500 leading-relaxed max-w-sm">
            A global AI data vendor providing scalable data collection, speech, video, multilingual, and workforce solutions for modern AI technologies.
          </p>

          <div className="pt-2 flex flex-col gap-1.5 text-xs text-slate-400">
            <div className="flex items-center gap-2 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">Founder & Managing Director:</span> {companyDetails.founder.name}
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-4 h-4 text-amber-400" />
              <span className="font-semibold">Headquarters:</span> Remote-First (Serving Worldwide)
            </div>
          </div>
        </div>

        {/* Quick Pages Navigation */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-amber-500" /> Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-amber-500" /> About
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('services')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-amber-500" /> Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('partner')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                <ArrowRight className="w-3 h-3 text-amber-400" /> For Clients / Request Quote
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contributor')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-semibold">
                <ArrowRight className="w-3 h-3 text-amber-400" /> Contributors
              </button>
            </li>
            <li>
              <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                <ArrowRight className="w-3 h-3 text-amber-500" /> Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Featured Active Projects */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Active Drives</h4>
          <ul className="space-y-2.5 text-xs">
            <li>
              <button 
                onClick={onOpenSelfieProject}
                className="p-3 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-amber-500/50 text-left w-full transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-400 group-hover:text-amber-300">Global Selfie Project</span>
                  <span className="text-[9px] bg-amber-950 text-amber-300 border border-amber-800 px-1.5 py-0.2 rounded font-mono">Active</span>
                </div>
                <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                  Diverse selfie image dataset collection for computer vision models.
                </p>
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('contributor')}
                className="hover:text-amber-400 text-xs transition-colors flex items-center gap-1.5 text-slate-400"
              >
                <Sparkles className="w-3 h-3 text-amber-400" /> Multilingual Voice Recording
              </button>
            </li>
            <li>
              <button 
                onClick={() => handleNav('contributor')}
                className="hover:text-amber-400 text-xs transition-colors flex items-center gap-1.5 text-slate-400"
              >
                <Sparkles className="w-3 h-3 text-amber-400" /> LLM Safety & Prompt Evaluation
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact</h4>
          <div className="space-y-2 text-xs">
            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 font-semibold block mb-0.5">CEO Direct Email:</span>
              <a 
                href={`mailto:${companyDetails.ceoEmail}`} 
                className="text-amber-300 hover:underline font-bold text-xs flex items-center gap-1"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" /> {companyDetails.ceoEmail}
              </a>
            </div>

            <div className="p-2.5 rounded-xl bg-slate-900/80 border border-slate-800">
              <span className="text-slate-400 font-semibold block mb-0.5">Phone Line:</span>
              <a 
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`} 
                className="text-slate-200 hover:text-white font-bold flex items-center gap-1"
              >
                <Phone className="w-3.5 h-3.5 text-amber-400" /> {companyDetails.phone}
              </a>
            </div>

            <div className="space-y-1 pt-1 text-[11px] text-slate-400">
              <p><span className="text-slate-300 font-semibold">General Info:</span> {companyDetails.infoEmail}</p>
              <p><span className="text-slate-300 font-semibold">Partnerships:</span> {companyDetails.partnersEmail}</p>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-900 bg-[#03050a] py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} RemoLance. All rights reserved. Connecting Global Talent. Powering AI.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Lock className="w-3 h-3 text-amber-400" /> Strict Data Privacy & Ethical Compliance
            </span>
            <span>Remote-First HQ</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
