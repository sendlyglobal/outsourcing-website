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
      className={`w-full h-full rounded-2xl p-4 sm:p-5 flex flex-col justify-between select-none relative overflow-hidden transition-all duration-300 bg-black ${
        isSelected
          ? "border-2 border-white shadow-[0_0_35px_rgba(255,255,255,0.4)] ring-1 ring-white/60"
          : "border border-white/30 hover:border-white shadow-[0_12px_40px_rgba(0,0,0,0.95)]"
      }`}
      style={{
        backfaceVisibility: "visible",
        backgroundColor: "#000000",
      }}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between border-b border-white/20 pb-2.5 relative z-10">
        <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center font-bold">
          <IconComponent size={13} className="text-black" />
        </div>

        <span className="text-[9px] font-mono text-white/90 bg-white/10 px-2 py-0.5 rounded border border-white/20 uppercase tracking-wider font-bold">
          {block.tag}
        </span>
      </div>

      {/* Main Core Content Area */}
      <div className="my-auto py-2 relative z-10">
        {/* Title */}
        <h3 className="text-xs sm:text-sm font-bold tracking-tight text-white uppercase leading-snug">
          {block.title}
        </h3>
        
        {/* Subtitle */}
        <p className="text-[9px] font-mono tracking-wider uppercase text-zinc-400 font-semibold mt-0.5 mb-3">
          {block.subtitle}
        </p>

        {/* Bullets */}
        <ul className="space-y-2 my-1">
          {block.bullets.map((b, i) => (
            <li
              key={i}
              className="flex items-center gap-2 text-[9px] sm:text-[10px] text-zinc-300 font-sans leading-tight"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
              <span className="truncate">{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
