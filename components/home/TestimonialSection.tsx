"use client";

import React, { useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "TechNexus doesn't just write code; they engineer solutions that fundamentally improve how our business operates. Their technical transparency and ability to scale complex architectures is unmatched in the outsourcing space.",
    name: "Marcus Vance",
    role: "CTO",
    company: "Nexcorp Global",
    initials: "MV",
    industry: "Enterprise Software",
  },
  {
    id: 2,
    quote:
      "Re-architecting our monolithic legacy ERP into event-driven microservices reduced global warehouse data latency by 42%. TechNexus brought senior staff engineers who owned the delivery from sprint zero.",
    name: "Klaus Reinhardt",
    role: "VP of Engineering",
    company: "TransGlobal Logistics",
    initials: "KR",
    industry: "Global Supply Chain",
  },
  {
    id: 3,
    quote:
      "We needed a zero-trust mobile neo-banking platform processing millions of daily transactions under strict FCA audit. TechNexus delivered ahead of schedule with zero security audit findings.",
    name: "Sophie Laurent",
    role: "Head of Mobile",
    company: "Aura Financial",
    initials: "SL",
    industry: "FinTech & Banking",
  },
  {
    id: 4,
    quote:
      "Their FHIR-compliant clinical integration cut diagnostics synchronization latency by 10x while ensuring 100% HIPAA compliance. Our clinicians and hospitals rely on the platform 24/7 without friction.",
    name: "Dr. David Sterling",
    role: "Chief Medical Information Officer",
    company: "NorthEast Health",
    initials: "DS",
    industry: "Healthcare Systems",
  },
];

export default function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === TESTIMONIALS.length - 1 ? 0 : prev + 1,
    );
  };

  return (
    <section className="w-full py-20 sm:py-28 bg-white dark:bg-black overflow-hidden border-t border-(--border-color)">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 text-center max-w-2xl mx-auto"
        >
          <div className="w-12 h-12 rounded-2xl bg-(--teal)/10 text-(--teal) flex items-center justify-center mx-auto mb-4 border border-(--teal)/20 shadow-xs">
            <Quote className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--text-primary) font-display">
            Trusted by Engineering Leaders
          </h2>
          <p className="mt-3 text-sm sm:text-base text-(--text-secondary)">
            How CTOs, VPs of Engineering, and founders evaluate our technical
            delivery.
          </p>
        </motion.div>

        <div className="relative w-full flex flex-col items-center">
          <div
            className="relative w-full max-w-5xl h-95 sm:h-100 flex items-center justify-center"
            style={{ perspective: 1200 }}
          >
            {TESTIMONIALS.map((item, index) => {
              const offset = index - currentIndex;
              const isActive = offset === 0;

              let x = offset * 260;
              let rotateY = offset * -30;
              let scale = isActive ? 1 : 0.88;
              let opacity = isActive ? 1 : Math.abs(offset) === 1 ? 0.3 : 0;
              let zIndex = isActive ? 30 : 10 - Math.abs(offset);

              return (
                <motion.div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    x,
                    rotateY,
                    scale,
                    opacity,
                    zIndex,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 26,
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                  className={`absolute w-full max-w-85 sm:max-w-120 md:max-w-140 p-6 sm:p-9 rounded-2xl sm:rounded-3xl border select-none cursor-pointer bg-white dark:bg-black transition-colors duration-200 ${
                    isActive
                      ? "border-(--teal) shadow-2xl shadow-black/10 dark:shadow-[0_20px_50px_rgba(10,138,158,0.25)]"
                      : "border-(--border-color) hover:border-(--teal)/50 shadow-md pointer-events-auto"
                  }`}
                >
                  <div className="flex items-end justify-end mb-5">
                    <span className="font-mono text-xs text-(--text-muted)">
                      0{index + 1} / 0{TESTIMONIALS.length}
                    </span>
                  </div>

                  <p className="text-sm sm:text-base md:text-lg text-(--text-primary) font-medium leading-relaxed mb-7 sm:mb-8 font-display">
                    &ldquo;{item.quote}&rdquo;
                  </p>

                  <div className="flex items-center gap-3.5 pt-4 border-t border-(--border-color)">
                    <div className="w-10 h-10 rounded-full bg-(--teal) text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-(--text-primary)">
                        {item.name}
                      </div>
                      <div className="text-xs font-mono text-(--text-secondary)">
                        {item.role},{" "}
                        <span className="text-(--teal)">{item.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              onClick={handlePrev}
              aria-label="Previous testimonial"
              className="w-10 h-10 rounded-full border border-(--border-color) bg-white dark:bg-black flex items-center justify-center text-(--text-primary) hover:border-(--teal) hover:text-(--teal) transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "w-7 bg-(--teal)"
                      : "w-2 bg-(--border-color) hover:bg-(--text-muted)"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next testimonial"
              className="w-10 h-10 rounded-full border border-(--border-color) bg-white dark:bg-black flex items-center justify-center text-(--text-primary) hover:border-(--teal) hover:text-(--teal) transition-all cursor-pointer shadow-xs active:scale-95"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
