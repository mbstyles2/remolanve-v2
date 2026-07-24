import React, { useState } from 'react';
import { 
  X, 
  Sparkles, 
  Camera, 
  CheckCircle, 
  Upload, 
  ShieldCheck, 
  DollarSign, 
  Globe, 
  Info,
  Check,
  Smartphone,
  AlertCircle
} from 'lucide-react';
import { currentProjects, companyDetails } from '../data/companyData';

interface SelfieProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SelfieProjectModal: React.FC<SelfieProjectModalProps> = ({ isOpen, onClose }) => {
  const project = currentProjects.find(p => p.id === 'global-selfie-collection') || currentProjects[0];

  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantCountry, setApplicantCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [deviceModel, setDeviceModel] = useState('');
  const [agreedConsent, setAgreedConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantCountry || !agreedConsent) return;

    const newId = 'RML-SLF-' + Math.floor(100000 + Math.random() * 900000);
    setApplicationId(newId);

    // Save submission locally
    const existing = JSON.parse(localStorage.getItem('remolance_selfie_applications') || '[]');
    existing.push({
      id: newId,
      name: applicantName,
      email: applicantEmail,
      country: applicantCountry,
      phone,
      deviceModel,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('remolance_selfie_applications', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative">
        
        {/* Modal Header */}
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 p-6 flex items-center justify-between z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-cyan-400 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-cyan-400" /> Active Global Project
              </span>
              <h2 className="text-xl font-bold text-white">{project.title}</h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8">
          
          {/* Banner */}
          <div className="relative rounded-2xl overflow-hidden h-48 bg-gradient-to-r from-amber-950/40 via-slate-950 to-blue-950/60 border border-slate-800/80 p-6 flex flex-col justify-between">
            {/* Tech grid background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                  <Camera className="w-5 h-5 animate-pulse" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-300">
                  CV_DATASET_FACIAL_MESH_NODE
                </span>
              </div>
              <span className="px-3 py-1 bg-amber-400 text-slate-950 font-black text-xs rounded-full">
                {project.badge}
              </span>
            </div>
            
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 border-t border-slate-800/80 pt-3">
              <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-amber-400" />
                Multi-Angle Demographic Collection
              </span>
              <span className="px-3 py-1 bg-emerald-950/90 text-emerald-300 border border-emerald-800 text-xs font-bold rounded-full flex items-center gap-1">
                <DollarSign className="w-3.5 h-3.5" />
                Compensation: {project.compensation}
              </span>
            </div>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" /> Project Objective
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-400 space-y-1">
                <p><strong className="text-slate-200">Target Volume:</strong> {project.targetCount}</p>
                <p><strong className="text-slate-200">Locations:</strong> Worldwide (All Countries)</p>
                <p><strong className="text-slate-200">Eligibility:</strong> Smartphone owners (Android/iOS)</p>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-cyan-400" /> Required Photo Types
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {project.submissionTypes.map((type, idx) => (
                  <li key={idx} className="p-2.5 bg-slate-950 border border-slate-800 rounded-lg flex items-center justify-between">
                    <span className="font-semibold text-slate-200">{type}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Set 0{idx + 1}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Rules & Guidelines */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 space-y-3">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" /> Photo Quality & Ethical Guidelines
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Original photos directly from smartphone camera</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>No digital face beauty filters or heavy makeup alterations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Clear focus without motion blur</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Explicit model consent for AI training usage</span>
              </div>
            </div>
          </div>

          {/* Application Form */}
          <div className="border-t border-slate-800 pt-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Upload className="w-5 h-5 text-cyan-400" />
                Apply for Global Selfie Project
              </h3>
              <span className="text-xs text-slate-400">Takes under 2 minutes</span>
            </div>

            {submitted ? (
              <div className="bg-cyan-950/80 border border-cyan-500/50 rounded-2xl p-6 text-center space-y-3 animate-in zoom-in duration-300">
                <div className="w-12 h-12 rounded-full bg-cyan-400 text-slate-950 font-bold flex items-center justify-center mx-auto text-xl">
                  ✓
                </div>
                <h4 className="text-xl font-bold text-white">Application Received!</h4>
                <p className="text-slate-300 text-xs max-w-md mx-auto">
                  Thank you for applying to the Global Selfie Collection Project. Your application reference code is:
                </p>
                <div className="inline-block px-4 py-2 bg-slate-900 border border-cyan-500 text-cyan-300 font-mono font-bold rounded-xl text-lg">
                  {applicationId}
                </div>
                <p className="text-[11px] text-slate-400">
                  Our workforce coordination team will email instructions to <strong className="text-white">{applicantEmail}</strong> within 24 hours.
                </p>
                <div className="pt-3">
                  <button
                    onClick={onClose}
                    className="px-6 py-2.5 bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-300 transition-colors"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Jane Doe"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      placeholder="e.g. jane@example.com"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Country of Residence *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantCountry}
                      onChange={(e) => setApplicantCountry(e.target.value)}
                      placeholder="e.g. Nigeria, United States, Kenya..."
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone Number (WhatsApp preferred)
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. +234 800 000 0000"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Smartphone Model (Used for camera specs verification)
                  </label>
                  <input
                    type="text"
                    value={deviceModel}
                    onChange={(e) => setDeviceModel(e.target.value)}
                    placeholder="e.g. Samsung Galaxy S23, iPhone 14, Redmi Note 12..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-3.5 py-2.5 text-sm text-slate-200 outline-none"
                  />
                </div>

                <div className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={agreedConsent}
                    onChange={(e) => setAgreedConsent(e.target.checked)}
                    className="mt-1 accent-cyan-400 w-4 h-4"
                  />
                  <label htmlFor="consent" className="text-xs text-slate-400 leading-normal">
                    I confirm I am 18 years or older and grant permission to RemoLance to review my photos for AI model training dataset evaluation in accordance with ethical privacy standards.
                  </label>
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl text-xs font-bold bg-cyan-400 hover:bg-cyan-300 text-slate-950 transition-all shadow-md shadow-cyan-500/20"
                  >
                    Submit Application for Selfie Project
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};
