import React from 'react';
import { Page } from '../types';
import { industriesServed, companyDetails } from '../data/companyData';
import { 
  Building2, 
  Cpu, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight,
  Stethoscope,
  Car,
  Landmark,
  ShoppingBag,
  MessageSquareCode
} from 'lucide-react';

interface IndustriesPageProps {
  setCurrentPage: (page: Page) => void;
}

export const IndustriesPage: React.FC<IndustriesPageProps> = ({ setCurrentPage }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Cpu: <Cpu className="w-6 h-6 text-amber-400" />,
    Stethoscope: <Stethoscope className="w-6 h-6 text-amber-400" />,
    Car: <Car className="w-6 h-6 text-amber-400" />,
    Landmark: <Landmark className="w-6 h-6 text-amber-400" />,
    ShoppingBag: <ShoppingBag className="w-6 h-6 text-amber-400" />,
    MessageSquareCode: <MessageSquareCode className="w-6 h-6 text-amber-400" />,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#070A12] text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          Cross-Domain AI Solutions
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Industries Powered by <span className="text-amber-400">RemoLance</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Delivering domain-specific datasets tailored for Computer Vision, Autonomous Mobility, Conversational AI, Healthcare AI, and Financial Fraud Detection.
        </p>
      </div>

      {/* Industries Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industriesServed.map((ind, idx) => (
          <div 
            key={idx}
            className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
              {iconMap[ind.iconName] || <Cpu className="w-6 h-6 text-amber-400" />}
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                {ind.title}
              </h3>
              <p className="text-slate-300 text-xs leading-relaxed">
                {ind.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 space-y-2">
              <span className="text-[11px] text-amber-400 font-bold uppercase tracking-wider block">
                Typical Dataset Deliverables:
              </span>
              <ul className="space-y-1 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Domain-Specific Metadata & Specs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Multi-Pass Expert Quality Review</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Strict PII Anonymization & Security</span>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>

      {/* Enterprise CTA */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/40 rounded-3xl p-8 sm:p-12 text-center space-y-6">
        <h2 className="text-3xl font-extrabold text-white">
          Need Custom Dataset Collection For Your Industry?
        </h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-2xl mx-auto">
          Contact CEO {companyDetails.founder.name} or our data solutions team to define custom collection parameters, demographic targets, and SLA timelines.
        </p>
        <button
          onClick={() => {
            setCurrentPage('partner');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="px-8 py-3.5 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-xl inline-flex items-center gap-2 transition-all transform hover:scale-105"
        >
          <span>Request Industry Quote</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
};
