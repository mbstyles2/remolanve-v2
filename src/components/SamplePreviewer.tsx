import React, { useState } from 'react';
import { Database, Eye, FileCode, CheckCircle2, Mic, Camera, FileText, Code2 } from 'lucide-react';

export const SamplePreviewer: React.FC = () => {
  const [activeType, setActiveType] = useState<'selfie' | 'audio' | 'rlhf'>('selfie');

  const sampleData = {
    selfie: {
      title: 'Global Selfie Dataset Spec (JSON)',
      type: 'Computer Vision / Facial AI',
      format: 'JSON + JPG (Uncompressed 4K)',
      json: `{
  "item_id": "RML-IMG-882190",
  "contributor_id": "CNT-AFR-0419",
  "demographics": {
    "age_range": "25-34",
    "gender": "Female",
    "ethnicity": "African / Black",
    "country": "Nigeria"
  },
  "environment": {
    "lighting": "Natural Indoor Soft",
    "camera_model": "Samsung S22 Ultra",
    "resolution": "4000x3000",
    "file_size": "4.2MB"
  },
  "quality_checks": {
    "blur_score": 0.99,
    "face_detected": true,
    "filter_detected": false,
    "consent_verified": true
  }
}`
    },
    audio: {
      title: 'Multilingual Voice Dataset Spec (JSON + WAV)',
      type: 'Speech Recognition & Acoustic AI',
      format: '16kHz 24-bit PCM Mono WAV',
      json: `{
  "audio_id": "RML-AUD-991204",
  "language": "English (Accented - West African)",
  "script_prompt": "Please navigate to my account settings and update billing details.",
  "duration_sec": 4.85,
  "acoustic_environment": "Quiet Room (SNR > 25dB)",
  "transcription": "Please navigate to my account settings and update billing details.",
  "phonetic_alignment": "pliz nævəɡeɪt tu maɪ əkaʊnt...",
  "qa_status": "APPROVED_STAGE_2"
}`
    },
    rlhf: {
      title: 'LLM RLHF Safety & Preference Annotation',
      type: 'Generative AI & LLM Alignment',
      format: 'JSONL / Parquet',
      json: `{
  "prompt_id": "RML-LLM-33019",
  "user_prompt": "Explain how multi-stage data annotation improves model accuracy.",
  "model_response_a": "Multi-stage annotation uses initial labeling followed by expert QA review...",
  "model_response_b": "It is good because people check the work many times.",
  "human_preference": "model_response_a",
  "scoring": {
    "helpfulness": 5,
    "factual_accuracy": 5,
    "harmlessness": 5
  },
  "annotator_notes": "Response A provides structured technical explanation."
}`
    }
  };

  const current = sampleData[activeType];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 space-y-6 shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-cyan-400" /> Standardized Delivery Formats
          </span>
          <h3 className="text-2xl font-bold text-white">Interactive Dataset Spec Inspector</h3>
          <p className="text-slate-400 text-xs mt-1">
            Explore how RemoLance structures metadata, quality audit tags, and schemas for client delivery.
          </p>
        </div>

        {/* Dataset selector tabs */}
        <div className="flex items-center gap-2 bg-slate-950 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => setActiveType('selfie')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeType === 'selfie'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Camera className="w-3.5 h-3.5" />
            <span>Selfie / Image</span>
          </button>

          <button
            onClick={() => setActiveType('audio')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeType === 'audio'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Mic className="w-3.5 h-3.5" />
            <span>Voice / Speech</span>
          </button>

          <button
            onClick={() => setActiveType('rlhf')}
            className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
              activeType === 'rlhf'
                ? 'bg-cyan-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <FileText className="w-3.5 h-3.5" />
            <span>LLM / RLHF</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        <div className="lg:col-span-5 space-y-4">
          <div className="p-4 bg-slate-950 border border-slate-800 rounded-2xl space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-cyan-400 font-bold">{current.type}</span>
              <span className="text-[10px] bg-cyan-950 text-cyan-300 border border-cyan-800 px-2 py-0.5 rounded">
                Verified Standard
              </span>
            </div>
            <h4 className="text-lg font-bold text-white">{current.title}</h4>
            <p className="text-xs text-slate-400">
              Format Spec: <strong className="text-slate-200">{current.format}</strong>
            </p>
          </div>

          <div className="p-4 bg-cyan-950/40 border border-cyan-800/60 rounded-2xl space-y-2 text-xs">
            <div className="flex items-center gap-2 text-cyan-300 font-bold">
              <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              <span>Key Dataset Guarantee</span>
            </div>
            <ul className="space-y-1 text-slate-300 text-[11px] list-disc list-inside">
              <li>100% Anonymized contributor PII</li>
              <li>Validated JSON schemas with custom field mapping</li>
              <li>Secure S3 / GCP Cloud Bucket direct delivery</li>
            </ul>
          </div>
        </div>

        <div className="lg:col-span-7 bg-slate-950 border border-slate-800 rounded-2xl p-4 font-mono text-xs overflow-x-auto relative group">
          <div className="flex items-center justify-between text-[11px] text-slate-400 border-b border-slate-800/80 pb-2 mb-3">
            <span className="flex items-center gap-1.5 text-cyan-400 font-bold">
              <Code2 className="w-3.5 h-3.5" /> sample_schema_output.json
            </span>
            <span>JSON Validation Passed</span>
          </div>

          <pre className="text-slate-300 leading-relaxed text-[11px] font-mono whitespace-pre-wrap">
            {current.json}
          </pre>
        </div>

      </div>
    </div>
  );
};
