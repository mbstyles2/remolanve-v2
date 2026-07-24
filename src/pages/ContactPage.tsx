import React, { useState } from 'react';
import { Page, ContactInquiry } from '../types';
import { companyDetails } from '../data/companyData';
import { 
  Phone, 
  Mail, 
  Globe, 
  Building2, 
  User, 
  Send, 
  ShieldCheck, 
  Sparkles,
  MessageSquare,
  Clock
} from 'lucide-react';

interface ContactPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ setCurrentPage }) => {
  const [inquiry, setInquiry] = useState<ContactInquiry>({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: 'general',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiry.fullName || !inquiry.email || !inquiry.message) return;

    const newTicket = 'RML-MSG-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(newTicket);

    const existing = JSON.parse(localStorage.getItem('remolance_contact_messages') || '[]');
    existing.push({
      ...inquiry,
      ticketId: newTicket,
      submittedAt: new Date().toISOString()
    });
    localStorage.setItem('remolance_contact_messages', JSON.stringify(existing));

    setSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#070A12] text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <MessageSquare className="w-3.5 h-3.5 text-amber-400" />
          Direct Communication & Support
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Contact <span className="text-amber-400">RemoLance</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Have a question about our datasets, contributor onboarding, or client solutions? Reach out directly to our team or CEO {companyDetails.founder.name}.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Contact Info Card */}
        <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-8 shadow-xl">
          
          <div className="space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Globe className="w-6 h-6" />
            </div>
            <h2 className="text-2xl font-bold text-white">{companyDetails.name}</h2>
            <p className="text-xs text-amber-400 font-semibold uppercase tracking-wider">
              {companyDetails.subtitle}
            </p>
            <p className="text-slate-400 text-xs italic">
              "{companyDetails.tagline}"
            </p>
          </div>

          <div className="space-y-4 text-xs">
            
            {/* CEO Direct Contact */}
            <div className="p-4 bg-amber-950/30 border border-amber-500/40 rounded-2xl space-y-2">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-amber-400" />
                <span className="font-bold text-white">{companyDetails.founder.name}</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded font-mono">
                  {companyDetails.founder.role}
                </span>
              </div>
              <p className="text-slate-300 text-[11px]">
                Direct Line for Client Executive Inquiries & Partnerships
              </p>
              <a 
                href={`mailto:${companyDetails.ceoEmail}`}
                className="text-amber-300 hover:underline font-bold text-xs flex items-center gap-1.5 pt-1"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                CEO Direct Email: {companyDetails.ceoEmail}
              </a>
            </div>

            {/* Phone */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-1">
              <span className="text-slate-400 font-semibold block">Phone Line:</span>
              <a 
                href={`tel:${companyDetails.phone.replace(/\s+/g, '')}`}
                className="text-slate-200 hover:text-white font-bold text-sm flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                {companyDetails.phone}
              </a>
            </div>

            {/* Emails */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
              <span className="text-slate-400 font-semibold block">Official Channels:</span>
              <div className="space-y-1 text-slate-300">
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>General Info: <strong>{companyDetails.infoEmail}</strong></span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <span>Partnerships: <strong>{companyDetails.partnersEmail}</strong></span>
                </p>
              </div>
            </div>

            {/* Headquarters & Web */}
            <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Building2 className="w-4 h-4 text-amber-400" />
                <span>Headquarters: <strong>Remote-First | Serving Clients Worldwide</strong></span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>Website: <strong>{companyDetails.website}</strong></span>
              </div>
            </div>

            <div className="p-3 bg-slate-950/60 border border-slate-800 rounded-xl flex items-center gap-2 text-[11px] text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Response SLA: Within 24 hours across all time zones.</span>
            </div>

          </div>

        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
          <div className="border-b border-slate-800 pb-4 space-y-1">
            <h2 className="text-2xl font-bold text-white">Send Us a Message</h2>
            <p className="text-slate-400 text-xs">Choose the topic that best matches your request.</p>
          </div>

          {submitted ? (
            <div className="bg-amber-950/40 border border-amber-500/60 rounded-2xl p-8 text-center space-y-4 animate-in zoom-in duration-300">
              <div className="w-16 h-16 rounded-full bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center mx-auto">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">Message Dispatched!</h3>
              <p className="text-slate-300 text-xs leading-relaxed max-w-md mx-auto">
                Your message has been received by the RemoLance communications team. Reference Ticket ID:
              </p>
              <div className="inline-block px-6 py-3 bg-slate-950 border border-amber-500 text-amber-300 font-mono font-bold rounded-xl text-xl">
                {ticketId}
              </div>
              <p className="text-xs text-slate-400">
                We will reply to <strong className="text-white">{inquiry.email}</strong> as soon as possible.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold rounded-xl"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Inquiry Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'general', label: 'General Info' },
                    { id: 'client', label: 'Client Dataset' },
                    { id: 'contributor', label: 'Contributor' },
                    { id: 'direct-ceo', label: 'Direct to CEO' },
                  ].map((cat) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => setInquiry({ ...inquiry, inquiryType: cat.id as any })}
                      className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                        inquiry.inquiryType === cat.id
                          ? 'bg-amber-500/20 border-amber-500 text-amber-300 font-bold'
                          : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiry.fullName}
                    onChange={(e) => setInquiry({ ...inquiry, fullName: e.target.value })}
                    placeholder="e.g. Michael Smith"
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
                    value={inquiry.email}
                    onChange={(e) => setInquiry({ ...inquiry, email: e.target.value })}
                    placeholder="e.g. michael@example.com"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Phone / WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={inquiry.phone}
                    onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                    placeholder="e.g. +234 902 588 3310"
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Subject Header
                  </label>
                  <input
                    type="text"
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    placeholder="e.g. Selfie Dataset Inquiry, Audio Specs..."
                    className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-xs text-slate-200 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Message Content *
                </label>
                <textarea
                  rows={4}
                  required
                  value={inquiry.message}
                  onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                  placeholder="How can RemoLance assist your project or contributor application?"
                  className="w-full bg-slate-950 border border-slate-800 focus:border-amber-500 rounded-xl p-3.5 text-xs text-slate-200 outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Submit Message</span>
              </button>

            </form>
          )}

        </div>

      </div>

    </div>
  );
};
