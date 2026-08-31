import React from "react";
import { motion } from "motion/react";
import {
  Compass,
  Smartphone,
  Server,
  ShieldCheck,
  GitBranch,
  Activity,
  Layers,
  Zap,
  Database,
  ArrowUpRight,
} from "lucide-react";
import { MethodologyStep } from "@/types/animation";

interface SteppedCardItemProps {
  step: MethodologyStep;
  index: number;
  totalSteps: number;
  isSelected?: boolean;
  onInspect: (step: MethodologyStep) => void;
  scrollProgress: number;
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

export const SteppedCardItem: React.FC<SteppedCardItemProps> = ({
  step,
  index,
  totalSteps,
  isSelected,
  onInspect,
  scrollProgress,
}) => {
  const IconComponent = iconMap[step.icon] || Layers;

  const cardTargetProgress = totalSteps > 1 ? index / (totalSteps - 1) : 0;
  const diff = scrollProgress - cardTargetProgress;
  
  const isFocused =
    Math.abs(diff) < 0.14 ||
    (index === 0 && scrollProgress <= 0.12) ||
    (index === totalSteps - 1 && scrollProgress >= 0.88);

  const upcomingFactor = Math.max(0, Math.min(1, -diff * 3.5));
  const pastFactor = Math.max(0, Math.min(1, diff * 3.5));

  const targetY = isFocused
    ? 0
    : upcomingFactor > 0
      ? upcomingFactor * 90
      : pastFactor * 25;

  const targetScale = isFocused
    ? 1.02
    : Math.max(0.80, 1 - Math.abs(diff) * 1.5);

  const targetOpacity = isFocused
    ? 1.0
    : Math.max(0.4, 1 - Math.abs(diff) * 2.2);

  return (
    <motion.div
      id={`methodology-card-${step.code}`}
      initial={{ opacity: 0, y: 90, scale: 0.8 }}
      animate={{
        opacity: targetOpacity,
        y: targetY,
        scale: targetScale,
      }}
      transition={{
        type: "spring",
        stiffness: 190,
        damping: 22,
        mass: 0.75,
      }}
      className="relative shrink-0 w-[280px] sm:w-[320px] md:w-[350px] select-none group will-change-transform origin-bottom"
    >
      <div className="flex items-center gap-2 mb-2.5">
        <div
          className={`flex items-center gap-1.5 px-2.5 py-0.5 rounded font-mono text-[9px] font-bold uppercase tracking-widest transition-all duration-300 ${
            isFocused
              ? "bg-slate-950 text-white dark:bg-white dark:text-black shadow-md dark:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
              : "bg-slate-100 text-slate-700 border-slate-200 dark:bg-white/10 dark:text-white/70 dark:border-white/20"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
          <span>
            LEVEL 0{index + 1} // 0{step.stepNumber}
          </span>
        </div>

        <span className="text-[9px] font-mono text-slate-500 dark:text-white/40 uppercase tracking-widest hidden sm:inline">
          {step.phaseDuration}
        </span>
      </div>

      <div
        onClick={() => onInspect(step)}
        className={`w-full rounded-2xl p-5 sm:p-5.5 flex flex-col justify-between relative overflow-hidden transition-all duration-300 cursor-pointer border ${
          isSelected || isFocused
            ? "bg-white dark:bg-black border-2 border-slate-950 dark:border-white shadow-xl dark:shadow-[0_0_40px_rgba(255,255,255,0.3)] ring-1 ring-slate-950/20 dark:ring-white/40"
            : "bg-white/95 dark:bg-black/90 border-slate-200 dark:border-white/25 hover:border-slate-400 dark:hover:border-white shadow-md dark:shadow-[0_10px_35px_rgba(0,0,0,0.85)] hover:bg-white dark:hover:bg-black/95"
        }`}
      >
        <div className="flex items-start justify-between border-b border-slate-100 dark:border-white/15 pb-3 relative z-10">
          <div className="flex items-center gap-2.5">
            <span className="bg-slate-950 text-white dark:bg-white dark:text-black text-[11px] font-mono font-bold px-2 py-0.5 tracking-wider rounded">
              {step.code}
            </span>
            <div className="w-7 h-7 rounded bg-slate-100 text-slate-900 border border-slate-200 dark:bg-white/10 dark:text-white dark:border-white/20 group-hover:bg-slate-950 group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-colors flex items-center justify-center">
              <IconComponent size={14} className="stroke-[2.2]" />
            </div>
          </div>

          <div className="text-right">
            <span className="text-[8px] font-mono text-slate-400 dark:text-white/50 uppercase tracking-widest block">
              PHASE {index + 1}/{totalSteps}
            </span>
            <span className="text-[9px] font-mono text-slate-700 dark:text-white/80 uppercase tracking-wider font-semibold">
              {step.categoryLabel}
            </span>
          </div>
        </div>

        <div className="my-3.5 relative z-10">
          <h3 className="text-base sm:text-lg font-bold mb-1 tracking-tight text-slate-950 dark:text-white uppercase font-display leading-snug group-hover:text-(--teal) transition-colors">
            {step.title}
          </h3>
          <p className="text-[10px] font-mono tracking-wider uppercase text-slate-500 dark:text-white/60 font-semibold mb-2">
            // {step.subtitle}
          </p>

          <p className="text-[11px] text-slate-600 dark:text-white/80 leading-relaxed font-sans line-clamp-2 mb-3">
            {step.summary}
          </p>

          <div className="space-y-1.5 mb-3">
            {step.keyPractices.slice(0, 2).map((practice, i) => (
              <div
                key={i}
                className="flex items-start gap-2 text-[11px] text-slate-700 dark:text-white/85 font-mono border-b border-slate-100 dark:border-white/5 pb-1"
              >
                <span className="w-1 h-1 border border-slate-900 dark:border-white shrink-0 mt-1.5" />
                <span className="truncate uppercase text-[9px] tracking-wide text-slate-800 dark:text-white/90">
                  {practice}
                </span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1.5 border-t border-slate-100 dark:border-white/10">
            {step.kpis.slice(0, 2).map((kpi, kIdx) => (
              <div
                key={kIdx}
                className="bg-slate-50 dark:bg-white/5 p-1.5 rounded border border-slate-200 dark:border-white/10"
              >
                <span className="text-[7px] font-mono text-slate-500 dark:text-white/40 uppercase block tracking-wider">
                  {kpi.label}
                </span>
                <span className="text-xs font-mono font-bold text-slate-950 dark:text-white mt-0.5 block">
                  {kpi.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-white/15 relative z-10">
          <div className="flex flex-wrap gap-1">
            {step.techStack.slice(0, 2).map((tech, tIdx) => (
              <span
                key={tIdx}
                className="font-mono text-[7px] uppercase tracking-wider text-slate-700 dark:text-white/70 bg-slate-100 dark:bg-white/5 px-1.5 py-0.5 rounded border border-slate-200 dark:border-white/15"
              >
                {tech}
              </span>
            ))}
            {step.techStack.length > 2 && (
              <span className="font-mono text-[7px] text-slate-400 dark:text-white/40 px-1 py-0.5">
                +{step.techStack.length - 2}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onInspect(step);
            }}
            className="flex items-center gap-1 font-mono text-[9px] font-bold text-white bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-white/90 active:scale-95 px-2.5 py-1 rounded border border-slate-950 dark:border-white transition-all shadow-sm cursor-pointer"
          >
            <span>DEEP DIVE</span>
            <ArrowUpRight size={11} className="stroke-[2.5]" />
          </button>
        </div>

        <div className="absolute top-2 left-2 w-1.5 h-1.5 border-t border-l border-slate-300 dark:border-white/40 pointer-events-none" />
        <div className="absolute top-2 right-2 w-1.5 h-1.5 border-t border-r border-slate-300 dark:border-white/40 pointer-events-none" />
        <div className="absolute bottom-2 left-2 w-1.5 h-1.5 border-b border-l border-slate-300 dark:border-white/40 pointer-events-none" />
        <div className="absolute bottom-2 right-2 w-1.5 h-1.5 border-b border-r border-slate-300 dark:border-white/40 pointer-events-none" />
      </div>

      {index < totalSteps - 1 && (
        <div className="hidden md:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 items-center justify-center pointer-events-none">
          <div className="flex items-center gap-1 text-slate-300 dark:text-white/30 font-mono text-[9px]">
            <span className="w-3 h-[1px] bg-slate-300 dark:bg-white/30" />
            <span className="text-slate-600 dark:text-white/60 font-bold">▲</span>
          </div>
        </div>
      )}
    </motion.div>
  );
};
