import React from 'react';
import { Page } from '../types';
import { companyDetails } from '../data/companyData';
import { 
  Building2, 
  Users, 
  ShieldCheck, 
  Award, 
  Globe, 
  Mail, 
  Phone, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  Target,
  Eye,
  Heart
} from 'lucide-react';

interface AboutPageProps {
  setCurrentPage: (page: Page) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20 bg-[#070A12] text-slate-100">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <Building2 className="w-3.5 h-3.5 text-amber-400" />
          Empowering AI Through Global Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          About <span className="text-amber-400">{companyDetails.name}</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          {companyDetails.subtitle} — {companyDetails.tagline}
        </p>
      </div>

      {/* Main Mission & Vision Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Core Mission</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            To bridge the gap between artificial intelligence models and real-world human diversity. RemoLance delivers ethically sourced, highly accurate, and demographic-inclusive datasets while providing dignified remote earning opportunities across developing and global economies.
          </p>
        </div>

        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-8 space-y-4 shadow-xl">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Eye className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold text-white">Our Vision</h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            To become the premier global AI data partner recognized for ethical transparency, zero-bias dataset collection, and unrivaled 99.8% precision across speech, computer vision, and generative AI evaluation.
          </p>
        </div>
      </div>

      {/* Leadership & CEO Section */}
      <div className="bg-slate-900 border border-slate-800/80 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 text-center md:text-left">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-950 to-blue-950 border-2 border-amber-500/60 mx-auto md:mx-0 shadow-2xl flex flex-col items-center justify-center space-y-2 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                EJ
              </div>
              <span className="text-xs font-mono font-extrabold text-amber-300 tracking-widest uppercase pt-1">
                EXECUTIVE SEAL
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                RemoLance Directorate
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Founder & Managing Director Spotlight
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              {companyDetails.founder.name}
            </h2>
            <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">
              {companyDetails.founder.role} • RemoLance AI Data & Workforce Solutions
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "{companyDetails.founder.bio}"
            </p>

            <div className="p-4 bg-slate-950 border border-slate-800/80 rounded-2xl space-y-2 text-xs">
              <span className="font-bold text-slate-200 block">Direct Executive Contact:</span>
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-slate-300">
                <a 
                  href={`mailto:${companyDetails.ceoEmail}`}
                  className="text-amber-300 hover:underline font-bold flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  CEO Email: {companyDetails.ceoEmail}
                </a>
                <a 
                  href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                  className="hover:text-white font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  Phone: {companyDetails.phone}
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Why RemoLance - Core Pillars */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-extrabold text-white">Our 4 Operational Pillars</h2>
          <p className="text-slate-400 text-xs sm:text-sm">Why global technology leaders choose RemoLance.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'Ethical Sourcing & Consent',
              desc: '100% compliant informed consent, transparent compensation, and strict GDPR/CCPA data privacy protection.',
              icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
            },
            {
              title: '99.8% Precision Quality',
              desc: 'Multi-pass human auditing, inter-annotator agreement metrics, and automated metadata validation.',
              icon: <Award className="w-6 h-6 text-amber-400" />
            },
            {
              title: 'Global Contributor Crowd',
              desc: 'Over 25,000+ verified contributors spanning Africa, Asia, Latin America, Europe, and North America.',
              icon: <Globe className="w-6 h-6 text-amber-400" />
            },
            {
              title: 'Rapid Deployment SLA',
              desc: 'Custom dataset collection pipelines provisioned and recruiting within 24 to 48 hours.',
              icon: <Sparkles className="w-6 h-6 text-amber-400" />
            },
          ].map((pillar, idx) => (
            <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
                {pillar.icon}
              </div>
              <h3 className="text-base font-bold text-white">{pillar.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Page CTA */}
      <div className="bg-gradient-to-r from-blue-950/60 via-slate-900 to-amber-950/40 border border-amber-500/40 rounded-3xl p-8 sm:p-10 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Partner with RemoLance Today</h2>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto">
          Experience ethical data collection and workforce solutions built for production AI.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => {
              setCurrentPage('partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-lg flex items-center gap-2"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full text-xs font-bold text-amber-300 border border-amber-500/60 hover:bg-amber-500/10"
          >
            <span>Contact CEO Direct</span>
          </button>
        </div>
      </div>

    </div>
  );
};
