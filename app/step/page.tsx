"use client";

import React, { useState, useRef, useEffect } from "react";
import { MethodologyStep } from "@/types/animation";
import { METHODOLOGY_PRESETS } from "@/components/StepCards/methedologyData";
import { SteppedCardItem } from "@/components/StepCards/SteppedCardItem";
import { MethodologyDetailModal } from "@/components/StepCards/MethedologyDetailModal";

export default function StepPage() {
  const [activeSteps] = useState<MethodologyStep[]>(
    METHODOLOGY_PRESETS.all.steps,
  );
  const [inspectingStep, setInspectingStep] = useState<MethodologyStep | null>(
    null,
  );

  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!trackWrapperRef.current || !horizontalTrackRef.current) return;

      const rect = trackWrapperRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const totalScrollableDistance = rect.height - windowHeight;

      if (totalScrollableDistance <= 0) {
        setScrollProgress(0);
        return;
      }

      const currentScroll = -rect.top;
      const progress = Math.max(
        0,
        Math.min(1, currentScroll / totalScrollableDistance),
      );
      setScrollProgress(progress);

      const track = horizontalTrackRef.current;
      const maxHorizontalTranslate = Math.max(
        0,
        track.scrollWidth - window.innerWidth + 60,
      );

      if (maxHorizontalTranslate > 0) {
        const translateX = -progress * maxHorizontalTranslate;
        track.style.transform = `translateX(${translateX}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSteps]);

  const currentStepIndex = Math.min(
    activeSteps.length - 1,
    Math.floor(scrollProgress * activeSteps.length),
  );

  const wrapperHeightVh = Math.max(260, activeSteps.length * 85);

  return (
    <div
      id="methodologies-page-root"
      className="min-h-screen bg-white dark:bg-black text-slate-950 dark:text-white selection:bg-(--teal) selection:text-white transition-colors duration-300 font-sans"
    >
      <section
        ref={trackWrapperRef}
        className="relative w-full"
        style={{
          height: `${wrapperHeightVh}vh`,
        }}
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-center">
          <div
            ref={horizontalTrackRef}
            className="flex items-center gap-6 sm:gap-10 md:gap-14 lg:gap-16 will-change-transform transition-transform duration-100 ease-out"
            style={{
              paddingLeft: "max(32px, calc(50vw - 180px))",
              paddingRight: "max(96px, calc(50vw - 120px))",
              transform: "translateX(0px)",
            }}
          >
            {activeSteps.map((step, idx) => (
              <SteppedCardItem
                key={step.id}
                step={step}
                index={idx}
                totalSteps={activeSteps.length}
                isSelected={idx === currentStepIndex}
                onInspect={(s) => setInspectingStep(s)}
                scrollProgress={scrollProgress}
              />
            ))}
          </div>

          <div className="absolute bottom-8 left-6 sm:left-12 right-6 sm:right-12 z-20 pointer-events-none flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500">
                SCROLL PROGRESS
              </span>
              <div className="w-32 sm:w-48 h-1 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-(--teal) transition-all duration-150"
                  style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                />
              </div>
              <span className="font-mono text-xs font-bold text-(--teal)">
                {Math.round(scrollProgress * 100)}%
              </span>
            </div>

            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 dark:text-zinc-500 hidden sm:inline">
              USE SCROLL / TOUCH TO NAVIGATE
            </span>
          </div>
        </div>
      </section>

      <MethodologyDetailModal
        step={inspectingStep}
        onClose={() => setInspectingStep(null)}
        hasNext={
          inspectingStep
            ? activeSteps.findIndex((s) => s.id === inspectingStep.id) <
              activeSteps.length - 1
            : false
        }
        hasPrev={
          inspectingStep
            ? activeSteps.findIndex((s) => s.id === inspectingStep.id) > 0
            : false
        }
        onSelectNext={() => {
          if (!inspectingStep) return;
          const currIdx = activeSteps.findIndex(
            (s) => s.id === inspectingStep.id,
          );
          if (currIdx < activeSteps.length - 1) {
            setInspectingStep(activeSteps[currIdx + 1]);
          }
        }}
        onSelectPrev={() => {
          if (!inspectingStep) return;
          const currIdx = activeSteps.findIndex(
            (s) => s.id === inspectingStep.id,
          );
          if (currIdx > 0) {
            setInspectingStep(activeSteps[currIdx - 1]);
          }
        }}
      />
    </div>
  );
}
