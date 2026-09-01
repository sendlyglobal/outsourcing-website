'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Search, Palette, Code2, ShieldCheck, Rocket, HeartHandshake } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01. Discover',
    title: 'Discovery',
    desc: 'Understanding product scope, business requirements, and sprint roadmaps.',
    icon: Search,
  },
  {
    step: '02. Design',
    title: 'Design',
    desc: 'Interface prototyping, architecture decision records, and schema modeling.',
    icon: Palette,
  },
  {
    step: '03. Build',
    title: 'Build',
    desc: 'Agile development with clean code, modern frameworks, and regular sprint reviews.',
    icon: Code2,
  },
  {
    step: '04. Test',
    title: 'Test',
    desc: 'Automated testing, unit/integration verification, and regression guardrails.',
    icon: ShieldCheck,
  },
  {
    step: '05. Deploy',
    title: 'Deploy',
    desc: 'Continuous integration, cloud infrastructure automation, and staged rollouts.',
    icon: Rocket,
  },
  {
    step: '06. Support',
    title: 'Support',
    desc: 'Ongoing observability, proactive monitoring, telemetry, and scaling support.',
    icon: HeartHandshake,
  },
]

export default function ProcessSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#071a30] text-white overflow-hidden border-t border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 md:px-14 lg:px-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-18 text-center max-w-2xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-teal-400 font-semibold block mb-2">
            HOW WE WORK
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            Our Delivery Workflow
          </h2>
          <p className="mt-3.5 text-sm sm:text-base text-slate-300">
            A structured six-phase engineering methodology taking your vision from idea to production.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 relative z-10">
          {PROCESS_STEPS.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 rounded-2xl bg-[#0b2545]/70 border border-slate-700/70 hover:border-teal-400 flex flex-col justify-between transition-all duration-300 group shadow-md"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#071a30] border border-slate-600 group-hover:border-teal-400 flex items-center justify-center text-teal-400 mb-4 transition-all duration-300 shadow-sm">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="font-mono text-[11px] uppercase tracking-wider text-teal-400 font-bold block mb-1">
                    {item.step}
                  </span>

                  <h3 className="text-lg font-bold text-white font-display mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
