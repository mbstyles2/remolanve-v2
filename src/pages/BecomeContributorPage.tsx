import React, { useState } from 'react';
import { Page, ContributorApplication } from '../types';
import { activeProjects, companyDetails } from '../data/companyData';
import { ProjectCard } from '../components/ProjectCard';
import { 
  UserPlus, 
  Sparkles, 
  CheckCircle2, 
  Globe, 
  Smartphone, 
  ShieldCheck, 
  HelpCircle,
  ChevronDown,
  Upload,
  Clock,
  Send,
  Award,
  DollarSign
} from 'lucide-react';

interface BecomeContributorPageProps {
  setCurrentPage: (page: Page) => void;
  onOpenSelfieProject: () => void;
}

export const BecomeContributorPage: React.FC<BecomeContributorPageProps> = ({ 
  setCurrentPage, 
  onOpenSelfieProject 
}) => {
  const [formData, setFormData] = useState<ContributorApplication>({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    primaryLanguage: '',
    otherLanguages: '',
    deviceTypes: [],
    interestedProjects: ['Global Selfie Collection Project'],
    experienceLevel: 'Beginner',
    additionalNotes: '',
    agreedToTerms: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [contributorId, setContributorId] = useState('');

  const deviceOptions = [
    'Android Smartphone', 
    'iPhone / iOS', 
    'Windows PC / Laptop', 
    'MacBook / macOS', 
    'Tablet / iPad', 
    'External Microphone / Headset'
  ];

  const projectOptions = [
    'Global Selfie Collection Project (Active)',
    'Speech & Voice Recording (Accents/Dialects)',
    'Video & Action Capture',
    'LLM Chatbot Response & Safety Evaluation',
    'Text Translation & Localized Surveys'
  ];

  const handleDeviceToggle = (device: string) => {
    setFormData(prev => {
      const exists = prev.deviceTypes.includes(device);
      return {
        ...prev,
        deviceTypes: exists 
          ? prev.deviceTypes.filter(d => d !== device)
          : [...prev.deviceTypes, device]
      };
    });
  };

  const handleProjectToggle = (project: string) => {
    setFormData(prev => {
      const exists = prev.interestedProjects.includes(project);
      return {
        ...prev,
        interestedProjects: exists 
          ? prev.interestedProjects.filter(p => p !== project)
          : [...prev.interestedProjects, project]
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.country || !formData.agreedToTerms) return;

    const newId = 'RML-CTR-' + Math.floor(100000 + Math.random() * 900000);
    setContributorId(newId);

    const existing = JSON.parse(localStorage.getItem('remolance_contributor_applications') || '[]');
    existing.push({
      ...formData,
      contributorId: newId,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('remolance_contributor_applications', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#070A12] text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <UserPlus className="w-3.5 h-3.5 text-amber-400" />
          Join Our 25,000+ Global Contributor Crowd
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Become a <span className="text-amber-400">RemoLance Contributor</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Earn competitive remote income by providing data for AI speech, image, video, and language projects using your phone or computer.
        </p>
      </div>

      {/* Featured Selfie Project Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/30 to-slate-900 border border-amber-500/50 rounded-3xl p-8 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        <div className="md:col-span-8 space-y-3">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-amber-400" /> Primary Open Project
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Global Selfie & Demographics Collection Project
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            We are accepting selfies and short face video submissions from all demographics, ages, and geographical regions to train computer vision models.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-amber-300 pt-1 font-semibold">
            <span>• Pay: $10.00 – $50.00 / verified task</span>
            <span>• Fast Approval within 24h</span>
            <span>• Mobile Friendly</span>
          </div>
        </div>

        <div className="md:col-span-4 text-center md:text-right">
          <button
            onClick={onOpenSelfieProject}
            className="w-full md:w-auto px-8 py-3.5 rounded-full text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 shadow-xl uppercase tracking-wider transition-all transform hover:scale-105"
          >
            Apply to Selfie Project Now
          </button>
        </div>
      </div>

      {/* Contributor Benefits */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            title: 'Flexible Remote Hours',
            desc: 'Work whenever and wherever you want on your smartphone, PC, or tablet.',
            icon: <Clock className="w-6 h-6 text-amber-400" />
          },
          {
            title: 'Prompt Payments',
            desc: 'Get paid reliably via bank transfer, PayPal, Wise, or mobile money upon task approval.',
            icon: <DollarSign className="w-6 h-6 text-amber-400" />
          },
          {
            title: 'Global Community',
            desc: 'Join contributors across Africa, Asia, Americas, Europe, and Oceania.',
            icon: <Globe className="w-6 h-6 text-amber-400" />
          },
          {
            title: 'Privacy Protected',
            desc: 'Your personal information is strictly encrypted and handled under GDPR compliance.',
            icon: <ShieldCheck className="w-6 h-6 text-amber-400" />
          },
        ].map((benefit, idx) => (
          <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              {benefit.icon}
            </div>
            <h3 className="text-base font-bold text-white">{benefit.title}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{benefit.desc}</p>
          </div>
        ))}
      </div>

      {/* Live Open Projects */}
      <div className="space-y-6">
        <h2 className="text-2xl font-extrabold text-white text-center sm:text-left">
          Currently Recruiting AI Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeProjects.map((proj) => (
            <ProjectCard 
              key={proj.id} 
              project={proj} 
              onApply={() => {
                if (proj.id === 'proj-001') {
                  onOpenSelfieProject();
                } else {
                  const element = document.getElementById('contributor-form');
                  element?.scrollIntoView({ behavior: 'smooth' });
                }
              }} 
            />
          ))}
        </div>
      </div>

      {/* Contributor Registration Form */}
      <div id="contributor-form" className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
        <div className="border-b border-slate-800 pb-4 space-y-2">
          <h2 className="text-2xl font-bold text-white">General Contributor Application</h2>
          <p className="text-slate-400 text-xs">Register your profile to be invited to paid collection tasks matching your country and languages.</p>
        </div>

        {submitted ? (
          <div className="bg-amber-950/40 border border-amber-500/60 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in duration-300">
            <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto">
              ✓
            </div>
            <h3 className="text-2xl font-bold text-white">Application Received!</h3>
            <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
              Your contributor profile has been created with ID:
            </p>
            <div className="inline-block px-6 py-3 bg-slate-950 border border-amber-500 text-amber-300 font-mono font-bold rounded-xl text-xl">
              {contributorId}
            </div>
            <p className="text-xs text-slate-400">
              We have dispatched confirmation details to <strong className="text-white">{formData.email}</strong>. Our onboarding team will notify you when matching projects open.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
            >
              Submit Another Application
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. sarah@example.com"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +234 812 345 6789"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Country of Residence *
                </label>
                <input
                  type="text"
                  required
                  value={formData.country}
                  onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                  placeholder="e.g. Nigeria, Kenya, India, Philippines, USA..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Native / Primary Language
                </label>
                <input
                  type="text"
                  value={formData.primaryLanguage}
                  onChange={(e) => setFormData({ ...formData, primaryLanguage: e.target.value })}
                  placeholder="e.g. English, Yoruba, Swahili, Hindi, Spanish..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Other Fluent Languages / Dialects
                </label>
                <input
                  type="text"
                  value={formData.otherLanguages}
                  onChange={(e) => setFormData({ ...formData, otherLanguages: e.target.value })}
                  placeholder="e.g. French, Hausa, Pidgin, Tagalog..."
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                />
              </div>
            </div>

            {/* Devices Selection */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Which Devices Do You Have Access To?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {deviceOptions.map((dev) => {
                  const isSelected = formData.deviceTypes.includes(dev);
                  return (
                    <button
                      key={dev}
                      type="button"
                      onClick={() => handleDeviceToggle(dev)}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-left flex items-center justify-between ${
                        isSelected
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      <span>{dev}</span>
                      {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                required
                checked={formData.agreedToTerms}
                onChange={(e) => setFormData({ ...formData, agreedToTerms: e.target.checked })}
                className="mt-0.5 accent-amber-500 rounded"
              />
              <label htmlFor="terms" className="text-xs text-slate-400">
                I agree to RemoLance's Contributor Code of Conduct and confirm that all submitted data will be authentic and accurately represented.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Contributor Application</span>
            </button>

          </form>
        )}
      </div>

    </div>
  );
};
