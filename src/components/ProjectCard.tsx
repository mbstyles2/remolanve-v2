import React from 'react';
import { ProjectItem } from '../types';
import { 
  Sparkles, 
  MapPin, 
  DollarSign, 
  Users, 
  CheckCircle, 
  ArrowUpRight,
  Camera,
  Mic,
  FileText,
  Scan,
  Activity,
  Brain
} from 'lucide-react';

interface ProjectCardProps {
  project: ProjectItem;
  onApply: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onApply }) => {
  const renderVectorVisual = () => {
    switch (project.image) {
      case 'camera':
        return (
          <div className="w-full h-full bg-gradient-to-br from-amber-950/40 via-slate-950 to-blue-950/60 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            {/* Tech grid mesh lines */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                <Scan className="w-6 h-6 animate-pulse" />
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-500/40">
                CV DATASET
              </span>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-xs text-amber-300 font-mono font-bold">
              <Camera className="w-4 h-4 text-amber-400" />
              <span>FACIAL LANDMARK MATRIX</span>
            </div>
          </div>
        );
      case 'speech':
        return (
          <div className="w-full h-full bg-gradient-to-br from-blue-950/60 via-slate-950 to-slate-900 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-blue-500/20 border border-blue-500/50 flex items-center justify-center text-blue-400">
                <Mic className="w-6 h-6 animate-bounce" />
              </div>
              <span className="text-[10px] font-mono font-bold text-blue-400 bg-blue-950/80 px-2.5 py-1 rounded-full border border-blue-500/40">
                SPEECH DATASET
              </span>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-xs text-blue-300 font-mono font-bold">
              <Activity className="w-4 h-4 text-blue-400" />
              <span>ACOUSTIC WAVEFORM ANALYSIS</span>
            </div>
          </div>
        );
      case 'llm':
      default:
        return (
          <div className="w-full h-full bg-gradient-to-br from-indigo-950/60 via-slate-950 to-amber-950/30 p-6 flex flex-col justify-between relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:16px_16px] opacity-30"></div>
            <div className="relative z-10 flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/50 flex items-center justify-center text-amber-400">
                <Brain className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono font-bold text-amber-400 bg-amber-950/80 px-2.5 py-1 rounded-full border border-amber-500/40">
                RLHF & EVALUATION
              </span>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-xs text-amber-300 font-mono font-bold">
              <FileText className="w-4 h-4 text-amber-400" />
              <span>LLM PROMPT ANNOTATION</span>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="bg-[#0B0F19] border border-slate-800/80 hover:border-amber-500/50 rounded-2xl overflow-hidden shadow-xl transition-all hover:shadow-amber-500/10 flex flex-col justify-between group">
      <div>
        {/* Card Header Vector */}
        <div className="relative h-48 overflow-hidden bg-slate-950 border-b border-slate-800/80">
          {renderVectorVisual()}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] via-transparent to-transparent"></div>
          
          <div className="absolute top-3 left-3 flex gap-2 z-20">
            <span className="px-2.5 py-1 text-xs font-extrabold bg-amber-400 text-slate-950 rounded-full shadow-md">
              {project.badge}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 z-20">
            <span className="flex items-center gap-1 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-800">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              {project.location}
            </span>
            <span className="flex items-center gap-1 bg-emerald-950/90 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded-lg font-semibold">
              <DollarSign className="w-3.5 h-3.5" />
              {project.compensation}
            </span>
          </div>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors">
            {project.title}
          </h3>

          <p className="text-slate-300 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Progress bar */}
          <div className="space-y-1.5 pt-1">
            <div className="flex justify-between text-xs text-slate-400 font-medium">
              <span className="flex items-center gap-1">
                <Users className="w-3.5 h-3.5 text-amber-400" /> Goal: {project.targetCount}
              </span>
              <span className="text-amber-400 font-bold">{project.currentProgress}% Filled</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
              <div 
                className="bg-gradient-to-r from-amber-500 to-amber-300 h-full rounded-full transition-all duration-1000"
                style={{ width: `${project.currentProgress}%` }}
              ></div>
            </div>
          </div>

          {/* Key Requirements */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
              Key Requirements:
            </span>
            <ul className="space-y-1.5">
              {project.requirements.map((req, idx) => (
                <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card Footer Button */}
      <div className="p-6 pt-0">
        <button
          onClick={() => onApply(project)}
          className="w-full py-3 px-4 rounded-xl text-sm font-bold bg-amber-400 hover:bg-amber-300 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-md shadow-amber-500/20 group/btn"
        >
          <Sparkles className="w-4 h-4" />
          <span>Apply for this Project</span>
          <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </div>
  );
};
