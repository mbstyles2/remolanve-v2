import React, { useState } from 'react';
import { workflowSteps } from '../data/companyData';
import { CheckCircle2, ChevronRight, Layers, ArrowRight } from 'lucide-react';

export const WorkflowTimeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  return (
    <div className="space-y-12">
      {/* Section Header matching Picture 2 */}
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-amber-500/50 bg-amber-950/20 text-amber-400 text-xs font-mono font-bold tracking-widest uppercase">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          A repeatable, transparent process
        </h2>
        <p className="text-slate-300 text-sm sm:text-base">
          Our structured 7-stage quality assurance timeline guarantees precise data collection and delivery.
        </p>
      </div>

      {/* Horizontal / Grid Step Selectors */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {workflowSteps.map((step) => {
          const isCurrent = activeStep === step.stepNumber;
          return (
            <button
              key={step.stepNumber}
              onClick={() => setActiveStep(step.stepNumber)}
              className={`p-3.5 rounded-2xl border text-left transition-all relative flex flex-col justify-between ${
                isCurrent
                  ? 'bg-[#0B0F19] border-amber-500 text-amber-300 shadow-xl shadow-amber-500/10 scale-105 z-10'
                  : 'bg-slate-900/80 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isCurrent ? 'bg-amber-400 text-slate-950 font-black' : 'bg-slate-800 text-slate-300'
                }`}>
                  STEP 0{step.stepNumber}
                </span>
                {step.stepNumber < 7 && (
                  <ChevronRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                )}
              </div>
              <span className="text-xs font-bold mt-3 line-clamp-1">
                {step.title}
              </span>
            </button>
          );
        })}
      </div>

      {/* Selected Step Detailed View with Gold Timeline Nodes */}
      {(() => {
        const step = workflowSteps.find((s) => s.stepNumber === activeStep) || workflowSteps[0];
        return (
          <div className="bg-[#0B0F19] border border-slate-800/80 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-slate-800/80 pb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-amber-400 font-mono font-black text-2xl flex items-center justify-center shrink-0">
                    0{step.stepNumber}
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-amber-400 shadow-[0_0_12px_rgba(245,158,11,0.9)]"></div>
                </div>
                <div>
                  <span className="text-xs font-mono font-bold tracking-widest text-amber-400 uppercase">
                    STEP 0{step.stepNumber} OF 07
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-0.5">{step.title}</h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold disabled:opacity-40 hover:bg-slate-800 transition-colors"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === 7}
                  onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-amber-400 text-slate-950 text-xs font-bold disabled:opacity-40 hover:bg-amber-300 transition-colors flex items-center gap-1.5 shadow-md shadow-amber-500/20"
                >
                  Next Step <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <h4 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4 text-amber-400" />
                  Stage Objectives & Execution
                </h4>
                <p className="text-slate-200 text-base leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 space-y-3">
                <h5 className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">
                  Milestones & Deliverables
                </h5>
                <ul className="space-y-2.5">
                  {step.details.map((detail, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
