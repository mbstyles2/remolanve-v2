import React, { useState } from 'react';
import { Calculator, Sparkles, ArrowRight, Shield, Clock, Users, Database } from 'lucide-react';

interface WorkforceCalculatorProps {
  onRequestProposal: (details: {
    modality: string;
    volume: string;
    regions: string;
    estimatedContributors: number;
    estimatedDays: number;
  }) => void;
}

export const WorkforceCalculator: React.FC<WorkforceCalculatorProps> = ({ onRequestProposal }) => {
  const [modality, setModality] = useState<string>('Image & Selfie Datasets');
  const [volume, setVolume] = useState<number>(10000);
  const [regions, setRegions] = useState<string>('Global (Multi-Continent)');
  const [urgency, setUrgency] = useState<string>('Standard (10-14 Days)');

  // Calculation heuristic
  const calculateEstimate = () => {
    let contributorRatio = 20; // submissions per contributor
    if (modality.includes('Speech')) contributorRatio = 5; // hours or clips
    if (modality.includes('Text')) contributorRatio = 50;
    if (modality.includes('Video')) contributorRatio = 10;

    const contributorsNeeded = Math.ceil(volume / contributorRatio);
    let baseDays = 12;
    if (urgency.includes('Rush')) baseDays = 4;
    if (urgency.includes('Expedited')) baseDays = 7;

    return {
      contributorsNeeded,
      baseDays,
      qualityScore: '99.8% Ground-Truth Guaranteed'
    };
  };

  const estimate = calculateEstimate();

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800 text-xs font-bold mb-2">
            <Calculator className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Workforce Estimator
          </span>
          <h3 className="text-2xl font-bold text-white">Dataset & Workforce Calculator</h3>
          <p className="text-slate-400 text-sm mt-1">
            Configure your AI project parameters to preview workforce deployment size and estimated delivery timeline.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controls */}
        <div className="space-y-5">
          {/* Modality */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Data Modality & Type
            </label>
            <select
              value={modality}
              onChange={(e) => setModality(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            >
              <option value="Image & Selfie Datasets">Image & Global Selfie Datasets (Computer Vision)</option>
              <option value="Speech & Voice Audio Recording">Speech & Voice Recording (Accents/Dialects)</option>
              <option value="Video & Motion Capture">Video & Action Recognition Collection</option>
              <option value="LLM Prompts & RLHF Text">Text & LLM RLHF Prompt/Safety Evaluation</option>
              <option value="Multilingual Translation & Survey">Multilingual Translation & Demographic Survey</option>
            </select>
          </div>

          {/* Volume slider */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-bold text-slate-300 uppercase tracking-wider">
              <span>Target Data Volume</span>
              <span className="text-cyan-400 font-extrabold text-sm">{volume.toLocaleString()} units</span>
            </div>
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full h-2 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>1,000</span>
              <span>25,000</span>
              <span>50,000</span>
              <span>100,000+</span>
            </div>
          </div>

          {/* Region selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Contributor Geographic Coverage
            </label>
            <select
              value={regions}
              onChange={(e) => setRegions(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-3 text-sm text-slate-200 outline-none transition-colors"
            >
              <option value="Global (Multi-Continent)">Global (Multi-Continent Coverage)</option>
              <option value="Africa Regional">Africa (Sub-Saharan & Regional Languages)</option>
              <option value="Asia Pacific & Middle East">Asia Pacific & Middle East</option>
              <option value="Latin America">Latin America & Caribbean</option>
              <option value="North America & Europe">North America & Europe</option>
            </select>
          </div>

          {/* Delivery Urgency */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
              Timeline & SLA Priority
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Standard (10-14 Days)', 'Expedited (7 Days)', 'Rush (72 Hours)'].map((u) => (
                <button
                  key={u}
                  type="button"
                  onClick={() => setUrgency(u)}
                  className={`p-2.5 rounded-xl text-xs font-semibold border transition-all text-center ${
                    urgency === u
                      ? 'bg-cyan-500/20 border-cyan-500 text-cyan-300 font-bold'
                      : 'bg-slate-950 border-slate-800 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {u.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Output Estimation Box */}
        <div className="bg-slate-950 border border-cyan-500/30 rounded-2xl p-6 flex flex-col justify-between space-y-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="space-y-6">
            <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" /> Projected Execution Specs
            </h4>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Users className="w-4 h-4 text-cyan-400" />
                  Required Workforce
                </div>
                <div className="text-2xl font-black text-white">
                  ~{estimate.contributorsNeeded.toLocaleString()}
                </div>
                <span className="text-[10px] text-slate-400">Vetted Contributors</span>
              </div>

              <div className="p-4 bg-slate-900/90 border border-slate-800 rounded-xl">
                <div className="flex items-center gap-2 text-slate-400 text-xs mb-1">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  Estimated Turnaround
                </div>
                <div className="text-2xl font-black text-white">
                  {estimate.baseDays} Days
                </div>
                <span className="text-[10px] text-slate-400">End-to-End QA</span>
              </div>
            </div>

            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-lg">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-cyan-400" /> Quality Guarantee
                </span>
                <span className="text-cyan-300 font-bold">{estimate.qualityScore}</span>
              </div>

              <div className="flex items-center justify-between p-3 bg-slate-900 border border-slate-800 rounded-lg">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Database className="w-3.5 h-3.5 text-cyan-400" /> Format Options
                </span>
                <span className="text-slate-200 font-semibold">JSON, CSV, TFRecord, S3, Parquet</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onRequestProposal({
              modality,
              volume: `${volume.toLocaleString()} units`,
              regions,
              estimatedContributors: estimate.contributorsNeeded,
              estimatedDays: estimate.baseDays
            })}
            className="w-full py-3.5 px-6 rounded-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-950 flex items-center justify-center gap-2 transition-all shadow-lg shadow-cyan-500/20"
          >
            <span>Request Custom Proposal With This Spec</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
