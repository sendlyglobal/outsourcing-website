"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Button } from "@/components/ui";
import { useQuoteModal } from "@/providers/QuoteModalProvider";

export default function ServicesHero() {
  const { openQuoteModal } = useQuoteModal();

  return (
    <section className="relative w-full overflow-hidden pt-16 pb-12 sm:pt-20 sm:pb-14 md:pt-24 md:pb-16 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-b border-(--border-color)">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-10 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold mb-3"
            >
              ENGINEERING & CONSULTING SERVICES
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) leading-[1.12] font-display"
            >
              Software Development Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.2,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed max-w-xl"
            >
              We provide software development services across product development, enterprise systems, cloud, modernization, and technical support. We can own a complete project or work alongside an existing engineering team.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              <Button
                variant="primary"
                size="md"
                onClick={() => openQuoteModal()}
                className="w-full sm:w-auto min-w-[170px]"
              >
                Start a Project
              </Button>

              <Button
                variant="secondary"
                size="md"
                href="/case-studies"
                className="w-full sm:w-auto min-w-[170px]"
              >
                View Our Work
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center w-full"
          >
            <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden border border-(--border-color) shadow-2xl shadow-black/15 dark:shadow-[0_20px_50px_rgba(10,138,158,0.15)] bg-slate-900 group">
              <Image
                src="/images/services_erp_analytics.jpg"
                alt="Software Development Services"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
