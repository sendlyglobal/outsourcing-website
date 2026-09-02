"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Gauge,
  Lock,
  Rocket,
  ShieldCheck,
  Target,
  Terminal,
  Zap,
} from "lucide-react";
import { Button, Accordion } from "@/components/ui";
import { SERVICES } from "@/lib/services";
import { useQuoteModal } from "@/providers/QuoteModalProvider";
import TransformationForm from "@/components/services/TransformationForm";

const BENEFIT_ICONS = [Zap, Gauge, ShieldCheck, Rocket, Lock, Cpu];

function getTechDomainHref(slug: string): string {
  if (slug.includes("web")) return "/technologies/web";
  if (slug.includes("mobile")) return "/technologies/mobile";
  if (slug.includes("erp") || slug.includes("enterprise")) return "/technologies/erp";
  if (slug.includes("backend") || slug.includes("cloud") || slug.includes("custom") || slug.includes("ai")) return "/technologies/custom";
  return "/technologies";
}

function NodeCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldReduce = useReducedMotion();

  useEffect(() => {
    if (shouldReduce) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0,
      h = 0;
    let nodes: { x: number; y: number; vx: number; vy: number; r: number }[] = [];
    let raf = 0;

    function resize() {
      const parent = canvas!.parentElement;
      w = parent ? parent.clientWidth : window.innerWidth;
      h = parent ? parent.clientHeight : 400;
      canvas!.width = w * devicePixelRatio;
      canvas!.height = h * devicePixelRatio;
      ctx!.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }

    function initNodes() {
      const count = Math.max(12, Math.floor((w * h) / 32000));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.15,
        vy: (Math.random() - 0.5) * 0.15,
        r: Math.random() * 1.4 + 1,
      }));
    }

    function tick() {
      ctx!.clearRect(0, 0, w, h);
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i],
            b = nodes[j];
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 140) {
            ctx!.strokeStyle = `rgba(10,138,158,${0.14 * (1 - d / 140)})`;
            ctx!.lineWidth = 1;
            ctx!.beginPath();
            ctx!.moveTo(a.x, a.y);
            ctx!.lineTo(b.x, b.y);
            ctx!.stroke();
          }
        }
      }
      for (const n of nodes) {
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx!.fillStyle = "rgba(111,227,214,0.6)";
        ctx!.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    initNodes();
    tick();
    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [shouldReduce]);

  if (shouldReduce) return null;
  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none opacity-70"
    />
  );
}

function StackTerminal({
  technologies,
  serviceSlug,
}: {
  technologies: string[];
  serviceSlug: string;
}) {
  const techHref = getTechDomainHref(serviceSlug);

  return (
    <div className="rounded-2xl overflow-hidden border border-slate-700/80 bg-(--navy-deep) shadow-xl">
      <div className="flex items-center gap-2 px-4 py-3 bg-black/20 border-b border-slate-700/60">
        <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
        <span className="ml-3 font-mono text-[11px] text-slate-400">
          stack.config.ts
        </span>
      </div>

      <div className="p-5 sm:p-6 font-mono text-[12.5px] sm:text-[13px] leading-relaxed">
        <p className="text-slate-500">
          export const stack = &#123;
        </p>
        {technologies.map((tech, i) => (
          <p key={tech} className="pl-4">
            <span className="text-slate-400">{`"${String(i + 1).padStart(2, "0")}"`}</span>
            <span className="text-slate-500">:</span>{" "}
            <span className="text-emerald-300">{`"${tech}"`}</span>
            <span className="text-slate-500">,</span>
          </p>
        ))}
        <p className="text-slate-500">&#125;</p>
        <p className="mt-3 text-slate-500">
          <span className="text-(--teal)">&gt;</span> ready for production
          <span className="inline-block w-[7px] h-[14px] bg-(--teal) ml-1 align-middle animate-pulse" />
        </p>
      </div>

      <div className="px-5 sm:px-6 pb-5 sm:pb-6 -mt-1">
        <Link
          href={techHref}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-(--teal) hover:underline"
        >
          <Terminal className="w-3.5 h-3.5" />
          <span>Explore the full stack in detail</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const { openQuoteModal } = useQuoteModal();

  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="w-full flex flex-col">
      <section className="relative w-full overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-18 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
        <NodeCanvas />

        <div className="relative max-w-5xl mx-auto">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-(--teal) hover:underline mb-6 cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Services</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-3">
              {service.eyebrow}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--text-primary) font-display leading-[1.15]">
              {service.title}
            </h1>

            <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed max-w-3xl">
              {service.longDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                variant="primary"
                size="md"
                onClick={() => openQuoteModal(service.id)}
                className="w-full sm:w-auto min-w-40"
              >
                Schedule Consultation
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/case-studies"
                className="w-full sm:w-auto min-w-40"
              >
                View Relevant Case Studies
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {service.whoItsFor && (
        <section className="w-full py-8 sm:py-10 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
          <div className="max-w-5xl mx-auto">
            <div className="p-6 sm:p-7 rounded-2xl border border-(--teal)/25 bg-(--teal)/5 dark:bg-(--teal)/8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 shadow-xs">
              <div className="w-10 h-10 rounded-xl bg-(--teal)/15 border border-(--teal)/30 flex items-center justify-center text-(--teal) shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-[11px] uppercase tracking-wider font-bold text-(--teal) block mb-1">
                  IDEAL CLIENT FIT
                </span>
                <p className="text-xs sm:text-sm text-(--text-primary) leading-relaxed">
                  {service.whoItsFor}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="p-6 sm:p-8 rounded-2xl border border-(--border-color) bg-white dark:bg-black shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display mb-4">
                What We Deliver
              </h2>
              <ul className="space-y-3.5">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-xs sm:text-sm text-(--text-secondary)"
                  >
                    <CheckCircle2 className="w-4 h-4 text-(--teal) shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <StackTerminal
              technologies={service.technologies}
              serviceSlug={service.slug}
            />
          </div>
        </div>
      </section>

      <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display">
              Why This Matters For Your Project
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-(--text-secondary)">
              Not generic benefits — specific trade-offs we make deliberately, for this service line.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.benefits.map((b, i) => {
              const Icon = BENEFIT_ICONS[i % BENEFIT_ICONS.length];
              return (
                <div
                  key={b.title}
                  className="p-6 rounded-2xl border border-(--border-color) bg-white dark:bg-black shadow-xs hover:border-(--teal) hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-xl bg-(--teal)/10 text-(--teal) border border-(--teal)/20 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-(--text-primary) font-display mb-2">
                    {b.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {b.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {service.faqs && service.faqs.length > 0 && (
        <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10 sm:mb-14">
              <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display">
                Common Questions About {service.title}
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-(--text-secondary)">
                Direct answers about scope, timelines, ownership, and technical delivery.
              </p>
            </div>

            <Accordion
              items={service.faqs}
              defaultOpenIndex={0}
              className="max-w-3xl mx-auto"
            />
          </div>
        </section>
      )}

      <TransformationForm />
    </div>
  );
}
