'use client'

import React from 'react'
import Link from 'next/link'
import { notFound, useParams } from 'next/navigation'
import { motion } from 'motion/react'
import { ArrowLeft, CheckCircle2, Cpu, ShieldCheck, Zap } from 'lucide-react'
import { Button } from '@/components/ui'
import { SERVICES } from '@/lib/services'
import { useQuoteModal } from '@/providers/QuoteModalProvider'
import DeliveryMethodology from '@/components/services/DeliveryMethodology'
import TransformationForm from '@/components/services/TransformationForm'

export default function ServiceDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const { openQuoteModal } = useQuoteModal()

  const service = SERVICES.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="w-full flex flex-col">
      <section className="relative w-full overflow-hidden pt-16 pb-14 sm:pt-20 sm:pb-18 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
        <div className="max-w-5xl mx-auto">
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

      <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
            <div className="p-6 sm:p-8 rounded-2xl border border-(--border-color) bg-white dark:bg-black shadow-md">
              <h2 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display mb-4">
                What We Deliver
              </h2>
              <ul className="space-y-3.5">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-xs sm:text-sm text-(--text-secondary)">
                    <CheckCircle2 className="w-4 h-4 text-(--teal) shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-slate-700/80 bg-[#071a30] text-white shadow-xl">
              <h2 className="text-xl sm:text-2xl font-bold text-white font-display mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-teal-400" />
                <span>Technology Stack</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                Battle-tested production technologies selected for zero-latency, enterprise security, and long-term maintainability.
              </p>
              <div className="flex flex-wrap gap-2.5">
                {service.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-3 py-1.5 rounded-lg bg-slate-800/90 border border-slate-700 text-teal-300 font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-(--text-primary) font-display">
              Strategic Advantages
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-(--text-secondary)">
              Engineered for quantifiable enterprise performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="p-6 rounded-2xl border border-(--border-color) bg-white dark:bg-black shadow-xs hover:border-(--teal) transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-(--teal)/10 text-(--teal) border border-(--teal)/20 flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-(--text-primary) font-display mb-2">
                  {b.title}
                </h3>
                <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DeliveryMethodology />
      <TransformationForm />
    </div>
  )
}