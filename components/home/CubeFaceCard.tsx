'use client'

import React from "react";
import {
  Users,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
  Box,
  Sparkles,
} from "lucide-react";
import { OutsourcingBlock } from "@/types/animation";

interface CubeFaceCardProps {
  block: OutsourcingBlock;
  isSelected?: boolean;
  onInspect?: (block: OutsourcingBlock) => void;
  isExploded?: boolean;
}

const iconMap = {
  Users,
  Layers,
  Cpu,
  ShieldCheck,
  Zap,
  Lock,
  Box,
  Activity: Sparkles,
  Terminal: Sparkles,
};

export const CubeFaceCard: React.FC<CubeFaceCardProps> = ({
  block,
  isSelected,
}) => {
  const IconComponent = iconMap[block.iconName] || Box;

  return (
    <div
      id={`cube-face-${block.code}`}
      className={`w-full h-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between select-none relative overflow-hidden transition-all duration-300 bg-white dark:bg-black ${
        isSelected
          ? "border-2 border-slate-900 dark:border-white shadow-[0_0_35px_rgba(0,0,0,0.18)] dark:shadow-[0_0_35px_rgba(255,255,255,0.4)] ring-1 ring-slate-900/40 dark:ring-white/60"
          : "border border-slate-300 dark:border-white/30 hover:border-slate-900 dark:hover:border-white shadow-[0_12px_32px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
      }`}
      style={{
        backfaceVisibility: "visible",
      }}
    >
      <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/20 pb-2.5 relative z-10">
        <div className="w-6 h-6 rounded bg-slate-900 text-white dark:bg-white dark:text-black flex items-center justify-center font-bold">
          <IconComponent size={13} className="text-white dark:text-black" />
        </div>

        <span className="text-[9px] font-mono text-slate-800 dark:text-white/90 bg-slate-100 dark:bg-white/10 px-2 py-0.5 rounded border border-slate-300 dark:border-white/20 uppercase tracking-wider font-bold">
          {block.tag}
        </span>
      </div>

      <div className="my-auto py-2 relative z-10">
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-slate-950 dark:text-white uppercase leading-snug">
          {block.title}
        </h3>
        
        <p className="text-[9px] font-mono tracking-wider uppercase text-slate-500 dark:text-zinc-400 font-semibold mt-0.5 mb-3">
          {block.subtitle}
        </p>

        <ul className="space-y-2 my-1">
          {block.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[9px] sm:text-[10px] text-slate-700 dark:text-zinc-300 font-sans leading-tight"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white shrink-0" />
              <span className="truncate">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
