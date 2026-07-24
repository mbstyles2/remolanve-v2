import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'clients' | 'contributors' | 'general';
}

export const FaqSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'clients' | 'contributors'>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      category: 'general',
      question: 'What is RemoLance and what services do you provide?',
      answer: 'RemoLance is a global AI data vendor and workforce solutions provider. We deliver high-quality, ethically sourced datasets (speech, text, image, video, and survey data) and managed crowdsourcing talent for organizations developing artificial intelligence and machine learning models.'
    },
    {
      category: 'clients',
      question: 'How do enterprise clients request a custom dataset?',
      answer: 'Clients can submit project specifications via our "Partner With Us" form or use our interactive Workforce Estimator. Our technical project management team reviews your requirements, defines collection guidelines, and provisions qualified contributors within 24 to 48 hours.'
    },
    {
      category: 'contributors',
      question: 'How do contributors join projects like the Global Selfie Collection?',
      answer: 'Contributors from all countries can sign up via our "Become a Contributor" page or apply directly to active projects like the Global Selfie Collection or Multilingual Voice Project. Once approved, you will receive clear task instructions and upload portals.'
    },
    {
      category: 'clients',
      question: 'What quality assurance measures guarantee data accuracy?',
      answer: 'We employ a 7-step quality control pipeline including multi-pass human reviewer auditing, inter-annotator agreement metrics, automated metadata validation, and rejection-correction loops to achieve our 99.8% precision standard.'
    },
    {
      category: 'contributors',
      question: 'How and when are contributors paid for completed tasks?',
      answer: 'Contributors are compensated promptly upon dataset validation via local bank transfers, PayPal, Wise, or digital mobile money, depending on regional preferences. Payments are processed on agreed project milestones.'
    },
    {
      category: 'general',
      question: 'Is contributor data handled ethically and with privacy compliance?',
      answer: 'Yes. RemoLance strictly adheres to international data protection standards (GDPR, CCPA). All contributors sign explicit informed consent agreements, and raw datasets are anonymized and encrypted prior to client delivery.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (item) => activeTab === 'all' || item.category === activeTab
  );

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 sm:p-12 space-y-8 shadow-2xl">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold">
          <HelpCircle className="w-3.5 h-3.5 text-cyan-400" />
          Clear Answers & Guidelines
        </span>
        <h2 className="text-3xl font-extrabold text-white tracking-tight">
          Frequently Asked Questions
        </h2>
        <p className="text-slate-400 text-sm">
          Everything you need to know about partnering with RemoLance or contributing to global AI datasets.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center items-center gap-2">
        {[
          { id: 'all', label: 'All Questions' },
          { id: 'clients', label: 'For AI Clients' },
          { id: 'contributors', label: 'For Contributors' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab.id
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-3 max-w-4xl mx-auto">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className={`border rounded-2xl transition-all overflow-hidden ${
                isOpen
                  ? 'bg-slate-950 border-cyan-500/50 shadow-lg'
                  : 'bg-slate-950/60 border-slate-800 hover:border-slate-700'
              }`}
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-cyan-400 shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-slate-800/60 mt-1 pt-3 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
