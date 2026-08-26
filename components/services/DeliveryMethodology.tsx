'use client'

import React from 'react'
import { motion } from 'motion/react'

const PHASES = [
  {
    phase: 'Phase 1',
    title: 'Discovery & Requirements',
    desc: 'We run structured workshops with stakeholders and end users to map current workflows, pain points, and success criteria.',
    output: 'A requirements document and a project brief both sides sign off on before scoping.',
    duration: '1–2 weeks',
  },
  {
    phase: 'Phase 2',
    title: 'Solution Architecture and Planning',
    desc: 'Our architects define the technical approach, system architecture, integrations, data model, and tech stack, and translate it into a sprint plan with milestones and estimates.',
    output: 'Architecture document, sprint roadmap, fixed or capped estimate.',
    duration: '1–2 weeks',
  },
  {
    phase: 'Phase 3',
    title: 'UI/UX Design',
    desc: 'Wireframes are built first for structure and flow, then refined into high-fidelity mockups and an interactive prototype. Client review happens at both stages before development starts.',
    output: 'Wireframes, UI kit, clickable prototype.',
    duration: '2–3 weeks, can run in parallel with late architecture work',
  },
  {
    phase: 'Phase 4',
    title: 'Development (Agile Sprints)',
    desc: 'Engineering proceeds in 1–2 week sprints, each ending with a working build the client can review. Sprint demos and a shared project board keep progress visible in real time rather than behind a black box.',
    output: 'Production-ready code, sprint demo builds, shared Jira/GitHub board access.',
    duration: 'Varies by scope, this is the longest phase',
  },
  {
    phase: 'Phase 5',
    title: 'QA & Continuous Testing',
    desc: 'Testing runs continuously alongside development, not just at the end: unit tests, integration tests, and manual QA on each sprint build. A dedicated hardening phase covers performance, security, and cross-device testing before launch.',
    output: 'Automated test suites, security audit reports, zero-defect release candidate.',
    duration: 'Ongoing, plus 1–2 weeks dedicated pre-launch',
  },
  {
    phase: 'Phase 6',
    title: 'Deployment & Migration',
    desc: 'We handle staged deployment — staging environment first, then a controlled production release, often with a soft launch or phased rollout for higher-risk systems.',
    output: 'Live system, deployment documentation, rollback plan.',
    duration: '3–5 days',
  },
  {
    phase: 'Phase 7',
    title: 'Post-Launch Support & Handover',
    desc: 'A defined warranty/hypercare period follows launch to catch real-world issues fast, followed by an ongoing support arrangement if needed (bug fixes, monitoring, feature iterations). Full documentation and codebase ownership are handed over regardless of whether support continues.',
    output: 'Complete IP ownership, codebase handover, SLA monitoring.',
    duration: '2–4 weeks hypercare, then ongoing as agreed',
  },
]

export default function DeliveryMethodology() {
  return (
    <section className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Delivery Methodology
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            A structured 7-stage delivery pipeline ensuring architectural rigor, predictable timelines, and zero surprises.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 top-4 bottom-8 -translate-x-1/2 w-[2px] bg-(--border-color)" />
          <div className="block md:hidden absolute left-[9px] top-4 bottom-8 w-[2px] bg-(--border-color)" />

          <div className="space-y-8 sm:space-y-10">
            {PHASES.map((item, index) => {
              const isEven = index % 2 === 0
              return (
                <div
                  key={item.phase}
                  className="relative flex flex-col md:flex-row items-center w-full"
                >
                  <div className="hidden md:block absolute left-1/2 top-6 -translate-x-1/2 w-5 h-5 rounded-full bg-(--teal) border-[4px] border-white dark:border-black z-10 shadow-xs" />
                  <div className="block md:hidden absolute left-[0px] top-5 w-4.5 h-4.5 rounded-full bg-(--teal) border-[3px] border-white dark:border-black z-10 shadow-xs" />

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -24 : 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.55, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className={`w-full md:w-[calc(50%-2.5rem)] pl-8 md:pl-0 ${
                      isEven ? 'md:mr-auto' : 'md:ml-auto'
                    }`}
                  >
                    <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-xs hover:shadow-md group">
                      <span className="font-mono text-xs uppercase tracking-wider text-(--teal) font-semibold block mb-1">
                        {item.phase}
                      </span>

                      <h3 className="text-base sm:text-lg font-bold text-(--text-primary) font-display">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="mt-3.5 pt-3 border-t border-(--border-color)/60 space-y-1">
                        <p className="text-xs text-(--text-primary)">
                          <strong className="font-semibold text-(--text-primary)">Output:</strong>{' '}
                          <span className="text-(--text-secondary)">{item.output}</span>
                        </p>

                        <p className="font-mono text-[11px] sm:text-xs text-(--teal)">
                          <strong>Typical duration:</strong> {item.duration}.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
