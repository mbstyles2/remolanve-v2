import React from 'react';
import { Page } from '../types';
import { coreServices, companyDetails } from '../data/companyData';
import { 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Database,
  Camera,
  Mic,
  FileText,
  Video,
  Code2
} from 'lucide-react';

interface ServicesPageProps {
  setCurrentPage: (page: Page) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ setCurrentPage }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 bg-[#070A12] text-slate-100">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
          <Layers className="w-3.5 h-3.5 text-amber-400" />
          Full-Stack AI Data Vendor
        </span>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Our Data Collection & Annotation <span className="text-amber-400">Services</span>
        </h1>
        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          From uncompressed 4K computer vision datasets to multi-accent speech transcripts and RLHF model evaluations, RemoLance powers your entire training lifecycle.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreServices.map((service) => (
          <div 
            key={service.id}
            className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                <Database className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-300 text-xs leading-relaxed mt-2">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="space-y-4 pt-4 border-t border-slate-800/80">
              <span className="text-[11px] font-bold text-amber-400 uppercase tracking-wider block">
                Key Features & Deliverables:
              </span>
              <ul className="space-y-2">
                {service.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  setCurrentPage('partner');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full py-2.5 bg-slate-950 hover:bg-slate-800 border border-slate-800 hover:border-amber-500/40 text-amber-300 font-bold text-xs rounded-xl transition-all flex items-center justify-center gap-2 mt-2"
              >
                <span>Request {service.title} Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Delivery Guarantee Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-amber-950/20 to-slate-900 border border-amber-500/40 rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left items-center">
        <div className="md:col-span-2 space-y-2">
          <h2 className="text-2xl font-extrabold text-white">Custom Schema & Direct Cloud Bucket Delivery</h2>
          <p className="text-slate-300 text-xs sm:text-sm">
            We deliver raw and annotated datasets directly to your Amazon S3, Google Cloud Storage, or Azure Blob containers, properly formatted for immediate ML pipeline training.
          </p>
        </div>
        <div className="flex justify-center md:justify-end">
          <button
            onClick={() => {
              setCurrentPage('partner');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-xl transition-all hover:scale-105 flex items-center gap-2"
          >
            <span>Request Custom Dataset</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
};
