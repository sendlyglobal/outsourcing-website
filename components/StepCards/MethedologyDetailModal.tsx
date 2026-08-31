import React, { useState } from "react";
import {
  X,
  Copy,
  Check,
  CheckCircle2,
  Layers,
  Compass,
  Smartphone,
  Server,
  ShieldCheck,
  GitBranch,
  Activity,
  Zap,
  Database,
} from "lucide-react";
import { MethodologyStep } from "@/types/animation";

interface MethodologyDetailModalProps {
  step: MethodologyStep | null;
  onClose: () => void;
  onSelectNext?: () => void;
  onSelectPrev?: () => void;
  hasNext?: boolean;
  hasPrev?: boolean;
}

const iconMap: Record<
  string,
  React.FC<{ size?: number; className?: string }>
> = {
  Compass,
  Smartphone,
  Server,
  ShieldCheck,
  GitBranch,
  Activity,
  Layers,
  Zap,
  Database,
};

export const MethodologyDetailModal: React.FC<MethodologyDetailModalProps> = ({
  step,
  onClose,
  onSelectNext,
  onSelectPrev,
  hasNext,
  hasPrev,
}) => {
  const [copied, setCopied] = useState<boolean>(false);

  if (!step) return null;

  const IconComponent = iconMap[step.icon] || Layers;

  const handleCopy = () => {
    const text = `[SOFTWARE METHODOLOGY STEP ${step.code} - ${step.title}]\nCategory: ${step.categoryLabel}\nSummary: ${step.summary}\n\nKey Practices:\n${step.keyPractices.map((p) => `- ${p}`).join("\n")}\n\nDeliverables:\n${step.deliverables.map((d) => `- ${d}`).join("\n")}\n\nTech Stack:\n${step.techStack.join(", ")}`;
    navigator.clipboard?.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="methodology-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/75 dark:bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-black border-2 border-slate-900 dark:border-white rounded-2xl shadow-2xl dark:shadow-[0_0_80px_rgba(255,255,255,0.3)] text-slate-950 dark:text-white p-6 sm:p-8 flex flex-col justify-between select-text relative font-sans"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative z-10 flex items-start justify-between border-b border-slate-200 dark:border-white/15 pb-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-lg bg-slate-950 text-white dark:bg-white dark:text-black flex items-center justify-center font-black shadow-lg">
              <IconComponent size={22} className="stroke-[2.5]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                {/* <span className="font-mono text-xs font-bold tracking-widest text-white bg-slate-950 dark:text-black dark:bg-white px-2.5 py-0.5 rounded">
                  {step.code}
                </span> */}
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-white/50 font-bold">
                 {step.categoryLabel}
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-tighter text-slate-950 dark:text-white mt-1.5 leading-tight font-display">
                {step.title}
              </h2>
              <p className="font-mono text-xs text-slate-500 dark:text-white/60 uppercase tracking-widest font-semibold mt-0.5">
                 {step.subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleCopy}
              className="p-2 rounded-lg border border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-950 hover:text-white dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer text-xs font-mono flex items-center gap-1.5"
              title="Copy Specifications"
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span className="hidden sm:inline">
                {copied ? "COPIED" : "COPY"}
              </span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg border border-slate-300 bg-slate-100 text-slate-800 hover:bg-slate-950 hover:text-white dark:border-white/30 dark:bg-white/5 dark:text-white dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        <div className="relative z-10 my-6 space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/15">
            <div className="font-mono text-[10px] text-slate-500 dark:text-white/40 uppercase tracking-[0.2em] mb-1.5">
               METHODOLOGY SCOPE & PHASE SUMMARY
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-white/90 leading-relaxed font-sans">
              {step.summary}
            </p>
          </div>

          {/* <div>
            <div className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-(--teal) rounded-full animate-pulse" />
              OPERATIONAL BENCHMARKS & KPIS
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {step.kpis.map((kpi, i) => (
                <div
                  key={i}
                  className="p-3.5 rounded-lg bg-slate-50 dark:bg-black/80 border border-slate-200 dark:border-white/20 hover:border-slate-400 dark:hover:border-white transition-colors"
                >
                  <span className="font-mono text-[9px] text-slate-500 dark:text-white/50 uppercase tracking-wider block">
                    {kpi.label}
                  </span>
                  <span className="font-mono text-lg font-bold text-slate-950 dark:text-white mt-1 block">
                    {kpi.value}
                  </span>
                </div>
              ))}
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
                EXECUTION PRACTICES
              </div>
              <div className="space-y-2">
                {step.keyPractices.map((practice, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/15"
                  >
                    <span className="w-1.5 h-1.5 border border-slate-900 dark:border-white shrink-0 mt-1.5" />
                    <span className="text-xs text-slate-800 dark:text-white/90 font-mono leading-normal">
                      {practice}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="font-mono text-xs font-bold text-slate-900 dark:text-white uppercase tracking-[0.2em] mb-3 flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-900 dark:bg-white rounded-full" />
                KEY DELIVERABLES
              </div>
              <div className="space-y-2">
                {step.deliverables.map((deliv, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/15"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-(--teal) shrink-0 mt-0.5"
                    />
                    <span className="text-xs text-slate-800 dark:text-white/90 font-mono leading-normal">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 dark:bg-black/80 border border-slate-200 dark:border-white/20">
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-[0.2em] block mb-2">
                TECH STACK & TOOLING
              </span>
              <div className="flex flex-wrap gap-1.5">
                {step.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="font-mono text-xs text-slate-800 bg-slate-200/80 border-slate-300 dark:text-white dark:bg-white/10 dark:border-white/20 px-2.5 py-1 rounded border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 dark:bg-black/80 border border-slate-200 dark:border-white/20">
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-[0.2em] block mb-2">
                ENGINEERING BEST PRACTICES
              </span>
              <div className="space-y-1.5">
                {step.bestPractices.map((bp, i) => (
                  <p
                    key={i}
                    className="text-xs text-slate-700 dark:text-white/80 leading-relaxed font-sans"
                  >
                    • {bp}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 pt-4 border-t border-slate-200 dark:border-white/15 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {hasPrev && (
              <button
                type="button"
                onClick={onSelectPrev}
                className="font-mono text-xs text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border-slate-200 dark:text-white/80 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/15 dark:border-white/20 px-3 py-2 rounded-lg border cursor-pointer transition-colors"
              >
                ← PREV STEP
              </button>
            )}
            {hasNext && (
              <button
                type="button"
                onClick={onSelectNext}
                className="font-mono text-xs text-slate-700 hover:text-slate-950 bg-slate-100 hover:bg-slate-200 border-slate-200 dark:text-white/80 dark:hover:text-white dark:bg-white/5 dark:hover:bg-white/15 dark:border-white/20 px-3 py-2 rounded-lg border cursor-pointer transition-colors"
              >
                NEXT STEP →
              </button>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="font-mono text-xs font-bold text-white bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 px-6 py-2.5 rounded-lg border border-slate-950 dark:border-white transition-all cursor-pointer shadow-md"
          >
            CLOSE SPECIFICATIONS
          </button>
        </div>
      </div>
    </div>
  );
};
