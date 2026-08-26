'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Globe, Smartphone, Layers, Cpu } from 'lucide-react'
import TechImage from '@/public/technologies.png'

const DOMAINS = [
  { id: 'web', label: 'Web', href: '/technologies/web', icon: Globe },
  { id: 'mobile', label: 'Mobile', href: '/technologies/mobile', icon: Smartphone },
  { id: 'erp', label: 'ERP', href: '/technologies/erp', icon: Layers },
  { id: 'custom', label: 'Custom', href: '/technologies/custom', icon: Cpu },
]

export default function TechnologiesHeroBanner() {
  return (
    <section className="relative w-full overflow-hidden pt-12 pb-10 sm:pt-16 sm:pb-14 md:pt-20 md:pb-16 bg-white dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-b border-(--border-color)">
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-[550px] h-[550px] bg-(--teal)/15 dark:bg-(--teal)/20 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-6 flex flex-col items-center text-center lg:items-start lg:text-left max-w-2xl mx-auto lg:mx-0">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-(--text-primary) leading-[1.12] font-display"
            >
              Enterprise Technology Ecosystem
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-5 sm:mt-6 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed"
            >
              Explore our production-grade technology clusters engineered for sub-second query latency, zero-downtime scalability, and enterprise compliance across Web, Mobile, ERP, and Custom systems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-2.5"
            >
              {DOMAINS.map((d) => {
                const Icon = d.icon
                return (
                  <Link
                    key={d.id}
                    href={d.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-(--border-color) hover:border-(--teal) bg-white/60 dark:bg-black/60 backdrop-blur-md text-xs font-semibold text-(--text-primary) hover:text-(--teal) transition-all group shadow-xs hover:shadow-md"
                  >
                    <Icon className="w-3.5 h-3.5 text-(--teal)" />
                    <span>{d.label}</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                )
              })}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center w-full"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[560px] lg:max-w-[640px] xl:max-w-[700px] h-[340px] sm:h-[420px] lg:h-[480px] xl:h-[540px] flex items-center justify-center bg-transparent">
              <Image
                src={TechImage}
                alt="Enterprise Technology Architecture"
                fill
                priority
                className="object-contain transition-transform duration-700 hover:scale-105 drop-shadow-[0_20px_45px_rgba(0,0,0,0.2)] dark:drop-shadow-[0_25px_60px_rgba(10,138,158,0.35)]"
                sizes="(max-width: 640px) 480px, (max-width: 1024px) 560px, 700px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
