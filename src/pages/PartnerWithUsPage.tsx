import React, { useState } from 'react';
import { Page, PartnerRFP } from '../types';
import { companyDetails } from '../data/companyData';
import { 
  Briefcase, 
  Sparkles, 
  CheckCircle2, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  Send, 
  ShieldCheck, 
  Clock,
  ArrowRight,
  Database
} from 'lucide-react';

interface PartnerWithUsPageProps {
  setCurrentPage: (page: Page) => void;
}

export const PartnerWithUsPage: React.FC<PartnerWithUsPageProps> = ({ setCurrentPage }) => {
  const [rfpData, setRfpData] = useState<PartnerRFP>({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    projectType: 'Computer Vision / Face & Image Collection',
    dataFormats: ['JSON + High-Res JPG'],
    estimatedVolume: '10,000 – 50,000 Items',
    timeline: '1 – 2 Weeks',
    budgetRange: '$5,000 – $25,000',
    projectDetails: '',
    requestCallWithCEO: true
  });

  const [submitted, setSubmitted] = useState(false);
  const [rfpId, setRfpId] = useState('');

  const projectTypes = [
    'Computer Vision / Face & Image Collection',
    'Multilingual Voice & Speech Dataset',
    'Video & Human Action Annotation',
    'LLM RLHF Safety & Fine-Tuning Evaluation',
    'Custom Demographic Survey / Data Sourcing'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rfpData.companyName || !rfpData.contactName || !rfpData.email) return;

    const newRfp = 'RML-RFP-' + Math.floor(100000 + Math.random() * 900000);
    setRfpId(newRfp);

    const existing = JSON.parse(localStorage.getItem('remolance_partner_rfps') || '[]');
    existing.push({
      ...rfpData,
      rfpId: newRfp,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('remolance_partner_rfps', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#070A12] text-slate-100">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <Briefcase className="w-3.5 h-3.5 text-amber-400" />
          Enterprise Data Vendor & Quote Request
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Partner With <span className="text-amber-400">RemoLance</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Request custom AI datasets, spec requirements, or schedule a technical dataset consultation directly with CEO {companyDetails.founder.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* CEO Direct Contact Card */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
          
          <div className="space-y-3 border-b border-slate-800 pb-6">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              Direct Executive Channel
            </span>
            <h2 className="text-2xl font-extrabold text-white">{companyDetails.name}</h2>
            <p className="text-xs text-amber-300 font-semibold">{companyDetails.subtitle}</p>
          </div>

          {/* CEO Bio & Email */}
          <div className="p-4 bg-amber-950/30 border border-amber-500/40 rounded-2xl space-y-3">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4 text-amber-400" />
              <span className="font-bold text-white text-sm">{companyDetails.founder.name}</span>
              <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono font-bold">
                {companyDetails.founder.role}
              </span>
            </div>
            <p className="text-slate-300 text-xs leading-relaxed">
              Fast-track your RFP directly to the CEO office for custom SLA quotes, enterprise NDA agreements, or pilot dataset trials.
            </p>
            <a 
              href={`mailto:${companyDetails.ceoEmail}`}
              className="text-amber-300 hover:underline font-bold text-xs flex items-center gap-1.5 pt-1"
            >
              <Mail className="w-4 h-4 text-amber-400" />
              CEO Email: {companyDetails.ceoEmail}
            </a>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <span className="text-slate-400 font-semibold block">Phone Consultation:</span>
              <a 
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                className="text-slate-200 hover:text-white font-bold flex items-center gap-1.5 text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                {companyDetails.phone}
              </a>
            </div>

            <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl space-y-1">
              <span className="text-slate-400 font-semibold block">Headquarters:</span>
              <p className="text-slate-300 font-medium">Remote-First HQ • Serving Clients Worldwide</p>
            </div>
          </div>

          <div className="p-4 bg-slate-950/80 border border-slate-800 rounded-2xl space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Enterprise Guarantees
            </div>
            <ul className="space-y-1 text-[11px] list-disc list-inside text-slate-400">
              <li>Custom NDA & IP Ownership Assignment</li>
              <li>100% Verified Informed Consent</li>
              <li>Multi-Pass Quality Audit Pipeline</li>
            </ul>
          </div>

        </div>

        {/* RFP Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
          <div className="border-b border-slate-800 pb-4 space-y-1">
            <h2 className="text-2xl font-bold text-white">Request AI Dataset Quote / RFP</h2>
            <p className="text-slate-400 text-xs">Specify your data collection guidelines, sample size, and timeline.</p>
          </div>

          {submitted ? (
            <div className="bg-amber-950/40 border border-amber-500/60 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">RFP Submitted Successfully!</h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                Your quote request has been routed directly to CEO {companyDetails.founder.name}. Reference RFP ID:
              </p>
              <div className="inline-block px-6 py-3 bg-slate-950 border border-amber-500 text-amber-300 font-mono font-bold rounded-xl text-xl">
                {rfpId}
              </div>
              <p className="text-xs text-slate-400">
                We will reply to <strong className="text-white">{rfpData.email}</strong> within 24 hours.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    required
                    value={rfpData.companyName}
                    onChange={(e) => setRfpData({ ...rfpData, companyName: e.target.value })}
                    placeholder="e.g. VisionAI Labs Inc."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={rfpData.contactName}
                    onChange={(e) => setRfpData({ ...rfpData, contactName: e.target.value })}
                    placeholder="e.g. Dr. Robert Chen"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={rfpData.email}
                    onChange={(e) => setRfpData({ ...rfpData, email: e.target.value })}
                    placeholder="e.g. robert@visionailabs.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={rfpData.phone}
                    onChange={(e) => setRfpData({ ...rfpData, phone: e.target.value })}
                    placeholder="e.g. +1 (555) 019-2831"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Primary Data Modality Required
                </label>
                <select
                  value={rfpData.projectType}
                  onChange={(e) => setRfpData({ ...rfpData, projectType: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                >
                  {projectTypes.map((pt) => (
                    <option key={pt} value={pt}>{pt}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Project Description & Demographic Specifications *
                </label>
                <textarea
                  rows={4}
                  required
                  value={rfpData.projectDetails}
                  onChange={(e) => setRfpData({ ...rfpData, projectDetails: e.target.value })}
                  placeholder="Describe your dataset requirements, target regions, demographics, format specs, or annotation rules..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-xs text-slate-200 outline-none"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="callCEO"
                  checked={rfpData.requestCallWithCEO}
                  onChange={(e) => setRfpData({ ...rfpData, requestCallWithCEO: e.target.checked })}
                  className="accent-amber-500 rounded"
                />
                <label htmlFor="callCEO" className="text-xs text-slate-300 font-medium">
                  Request a direct technical consultation call with Founder & CEO {companyDetails.founder.name}.
                </label>
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request / RFP</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
