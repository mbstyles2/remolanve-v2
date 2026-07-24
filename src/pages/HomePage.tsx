import React from 'react';
import { Page } from '../types';
import { activeProjects, coreServices } from '../data/companyData';
import { ProjectCard } from '../components/ProjectCard';
import { WorkflowTimeline } from '../components/WorkflowTimeline';
import { WorkforceCalculator } from '../components/WorkforceCalculator';
import { FaqSection } from '../components/FaqSection';
import { SamplePreviewer } from '../components/SamplePreviewer';
import { GlobalNetworkSphere } from '../components/GlobalNetworkSphere';
import { 
  Sparkles, 
  Globe, 
  ShieldCheck, 
  CheckCircle2, 
  Users, 
  Database, 
  ArrowRight, 
  Layers, 
  Clock, 
  Zap, 
  Award, 
  ExternalLink,
  ChevronRight,
  Building2,
  Mail,
  UserPlus,
  Briefcase,
  Mic,
  Camera,
  Video,
  FileText,
  Languages
} from 'lucide-react';
import { companyDetails } from '../data/companyData';

interface HomePageProps {
  setCurrentPage: (page: Page) => void;
  onOpenSelfieProject: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setCurrentPage, onOpenSelfieProject }) => {
  return (
    <div className="space-y-24 pb-20 bg-[#070A12] text-slate-100">
      
      {/* HERO SECTION matching reference design */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden border-b border-slate-800/80 bg-[#070A12]">
        
        {/* Interactive canvas global network sphere in background */}
        <GlobalNetworkSphere />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Top Gold Badge Pill */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-950/30 border border-amber-500/50 text-amber-300 text-xs font-bold tracking-wider shadow-xl shadow-amber-950/40 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span className="uppercase tracking-widest text-[11px]">
              GLOBAL AI DATA VENDOR & WORKFORCE SOLUTIONS
            </span>
          </div>

          {/* Main Hero Headlines */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-none">
              Global AI Data Collection
              <span className="block text-amber-400 mt-2 font-black">
                & Workforce Solutions
              </span>
            </h1>

            {/* Subhead in Warm Amber */}
            <p className="text-amber-400 font-bold text-lg sm:text-2xl tracking-wide">
              Powering Artificial Intelligence Through Global Human Intelligence.
            </p>

            {/* Paragraph Description */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto font-normal pt-2">
              RemoLance partners with AI companies, research institutions, and technology organizations worldwide to deliver scalable, ethical, and high-quality data collection solutions through a trusted global contributor network.
            </p>
          </div>

          {/* Action Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setCurrentPage('partner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-[0_0_25px_rgba(37,99,235,0.6)] hover:shadow-[0_0_35px_rgba(59,130,246,0.8)] transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => {
                setCurrentPage('contributor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-sm font-extrabold text-amber-300 border border-amber-500/80 hover:bg-amber-500/10 transition-all transform hover:scale-105 flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              <span>Become a Contributor</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          {/* METRIC CARDS ROW matching Picture 3 */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            <div className="bg-[#0B0F19] border border-slate-800/80 rounded-2xl p-6 text-center space-y-1 shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 font-serif tracking-tight">Growing</p>
              <p className="text-sm font-extrabold text-white">Countries</p>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">GLOBAL NETWORK</p>
            </div>

            <div className="bg-[#0B0F19] border border-slate-800/80 rounded-2xl p-6 text-center space-y-1 shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 font-serif tracking-tight">8+</p>
              <p className="text-sm font-extrabold text-white">Services</p>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">AI DATA SERVICES</p>
            </div>

            <div className="bg-[#0B0F19] border border-slate-800/80 rounded-2xl p-6 text-center space-y-1 shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 font-serif tracking-tight">Expanding</p>
              <p className="text-sm font-extrabold text-white">Contributors</p>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">COMMUNITY</p>
            </div>

            <div className="bg-[#0B0F19] border border-slate-800/80 rounded-2xl p-6 text-center space-y-1 shadow-lg">
              <p className="text-3xl sm:text-4xl font-black text-amber-400 font-serif tracking-tight">Multi</p>
              <p className="text-sm font-extrabold text-white">Languages</p>
              <p className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">MULTILINGUAL SUPPORT</p>
            </div>
          </div>

          {/* TRUSTED AI SERVICES ROW matching Picture 3 */}
          <div className="pt-10 space-y-6">
            <p className="text-xs font-mono font-bold text-slate-400 tracking-widest uppercase text-center">
              TRUSTED AI SERVICES
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { label: 'Voice Data', icon: <Mic className="w-5 h-5 text-amber-400" /> },
                { label: 'Image Data', icon: <Camera className="w-5 h-5 text-amber-400" /> },
                { label: 'Video Data', icon: <Video className="w-5 h-5 text-amber-400" /> },
                { label: 'Text Data', icon: <FileText className="w-5 h-5 text-amber-400" /> },
                { label: 'Multilingual Data', icon: <Languages className="w-5 h-5 text-amber-400" /> },
                { label: 'Quality Assurance', icon: <ShieldCheck className="w-5 h-5 text-amber-400" /> },
              ].map((serv, idx) => (
                <div key={idx} className="flex flex-col items-center justify-center p-4 bg-[#0B0F19] border border-slate-800/80 rounded-2xl hover:border-amber-500/50 transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                    {serv.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-200 text-center">{serv.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* BLUE CTA BANNER matching Picture 1 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-600 via-blue-600 to-indigo-700 rounded-3xl p-10 sm:p-14 text-center space-y-6 shadow-[0_0_50px_rgba(37,99,235,0.3)] border border-blue-500/30">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-400/50 text-amber-300 text-xs font-mono font-bold tracking-widest uppercase bg-amber-950/30 backdrop-blur-md">
            CONTRIBUTORS
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight max-w-3xl mx-auto">
            Join Our Global Contributor Network
          </h2>
          <p className="text-blue-100 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Contribute to AI projects from anywhere in the world while working with organizations shaping the future of technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => {
                setCurrentPage('contributor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 transition-all transform hover:scale-105 shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2"
            >
              <span>Apply Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setCurrentPage('about');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs font-bold text-white border border-blue-300/40 bg-blue-500/20 hover:bg-blue-500/30 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <span>Learn More</span>
            </button>
          </div>
        </div>
      </section>

      {/* FEATURED PROJECT BANNER: Global Selfie Collection */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-amber-500/40 bg-gradient-to-r from-slate-950 via-amber-950/20 to-slate-950 p-8 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Featured Global Collection Drive
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Global Selfie & Demographics Dataset Project
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Collecting high-resolution facial datasets across 50+ countries to train computer vision models for liveness verification, age estimation, and demographic bias reduction.
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300 pt-2">
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" />
                  Ethical Consent & PII Privacy
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Globe className="w-4 h-4 text-amber-400" />
                  Worldwide Contributors Needed
                </span>
                <span className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800">
                  <Award className="w-4 h-4 text-amber-400" />
                  Instant Direct Compensation
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center gap-3 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 text-center">
              <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                Active Worldwide Recruitment
              </span>
              <p className="text-2xl font-black text-white">$10.00 – $50.00 <span className="text-xs font-normal text-slate-400">/ submission</span></p>
              <button
                onClick={onOpenSelfieProject}
                className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all transform hover:scale-105"
              >
                Apply to Selfie Project
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dataset Spec Inspector */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SamplePreviewer />
      </section>

      {/* Core AI Data Capabilities */}
      <section className="bg-slate-900/40 border-y border-slate-800/80 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
              <Layers className="w-3.5 h-3.5 text-amber-400" />
              Comprehensive Data Modalities
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ethical AI Data Collection & Annotation
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              End-to-end data pipelines for Computer Vision, Speech AI, Natural Language, and Generative LLM Alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreServices.map((service) => (
              <div 
                key={service.id}
                className="bg-slate-900 border border-slate-800 hover:border-amber-500/50 rounded-3xl p-8 space-y-6 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2 border-t border-slate-800/80 pt-4">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Active Contributor Projects */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-amber-400" /> Active Global Work Opportunities
            </span>
            <h2 className="text-3xl font-extrabold text-white">Live Datasets Recruiting Now</h2>
          </div>
          <button
            onClick={() => {
              setCurrentPage('contributor');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1 hover:underline"
          >
            <span>View All Projects</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {activeProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              onApply={() => {
                if (project.id === 'proj-001') {
                  onOpenSelfieProject();
                } else {
                  setCurrentPage('contributor');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }} 
            />
          ))}
        </div>
      </section>

      {/* End to End Workflow Timeline matching Picture 2 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkflowTimeline />
      </section>

      {/* Interactive Workforce Calculator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <WorkforceCalculator 
          onOpenRfp={() => {
            setCurrentPage('partner');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />
      </section>

      {/* FAQ Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FaqSection />
      </section>

      {/* Leadership & Founder Spotlight */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B0F19] border border-slate-800/80 rounded-3xl p-8 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8 items-center shadow-xl">
          <div className="md:col-span-4 text-center md:text-left">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-950 to-blue-950 border-2 border-amber-500/60 mx-auto md:mx-0 shadow-2xl flex flex-col items-center justify-center space-y-2 p-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.15),transparent_70%)] pointer-events-none"></div>
              <div className="w-16 h-16 rounded-2xl bg-amber-400 text-slate-950 font-black text-2xl flex items-center justify-center shadow-lg shadow-amber-500/30">
                EJ
              </div>
              <span className="text-[11px] font-mono font-extrabold text-amber-300 tracking-widest uppercase pt-1">
                EXECUTIVE SEAL
              </span>
              <span className="text-[10px] text-slate-400 font-medium">
                RemoLance Directorate
              </span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-950/40 text-amber-300 border border-amber-500/40 text-xs font-bold">
              <Building2 className="w-3.5 h-3.5 text-amber-400" />
              Executive Leadership
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {companyDetails.founder.name}
            </h3>
            <p className="text-xs text-amber-400 font-mono font-bold uppercase tracking-wider">
              {companyDetails.founder.role} • RemoLance AI Data & Workforce
            </p>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
              "{companyDetails.founder.bio}"
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs">
              <a 
                href={`mailto:${companyDetails.ceoEmail}`}
                className="px-4 py-2 bg-slate-950 border border-slate-800 hover:border-amber-500/60 rounded-xl text-amber-300 font-bold flex items-center gap-2 transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                Direct Email: {companyDetails.ceoEmail}
              </a>
              <span className="text-slate-400 text-xs">Phone: <strong>{companyDetails.phone}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-900/60 via-slate-900 to-amber-950/40 border border-amber-500/40 rounded-3xl p-10 text-center space-y-6 shadow-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Ready to Scale Your AI Training Datasets?
          </h2>
          <p className="text-slate-300 text-sm max-w-2xl mx-auto leading-relaxed">
            Get in touch with our datasets team or join thousands of global contributors powering the next generation of artificial intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => {
                setCurrentPage('partner');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full text-xs font-extrabold text-white bg-blue-600 hover:bg-blue-500 shadow-xl flex items-center gap-2 transition-all hover:scale-105"
            >
              <Briefcase className="w-4 h-4" />
              <span>Partner With RemoLance</span>
            </button>
            <button
              onClick={() => {
                setCurrentPage('contributor');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-8 py-3.5 rounded-full text-xs font-extrabold text-amber-300 border border-amber-500/80 hover:bg-amber-500/10 flex items-center gap-2 transition-all hover:scale-105"
            >
              <UserPlus className="w-4 h-4" />
              <span>Join as Contributor</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
