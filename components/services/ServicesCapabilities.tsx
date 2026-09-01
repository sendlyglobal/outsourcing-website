'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  Globe,
  Smartphone,
  Server,
  Workflow,
  Cloud,
  Sparkles,
  GitMerge,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react'
import { useQuoteModal } from '@/providers/QuoteModalProvider'

const SERVICES_LIST = [
  {
    id: 'web-development',
    title: 'Web Development',
    desc: 'We build responsive web applications, customer portals, dashboards, internal tools, SaaS products, and other browser-based systems.',
    icon: Globe,
    included: [
      'Responsive Web Applications',
      'Customer Portals & Dashboards',
      'Internal Workflow Tools',
      'SaaS Platforms & Web Systems',
    ],
  },
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    desc: 'We build mobile applications for iOS and Android, including cross-platform applications when one shared codebase makes sense.',
    icon: Smartphone,
    included: [
      'iOS & Android Native Apps',
      'Cross-Platform Codebases (Flutter / React Native)',
      'Offline Data Synchronization',
      'Hardware & Biometric Integrations',
    ],
  },
  {
    id: 'backend-api-development',
    title: 'Backend & API Development',
    desc: 'We build APIs, microservices, integrations, authentication systems, business logic, and the backend services that power applications.',
    icon: Server,
    included: [
      'REST & gRPC Microservices',
      'Third-Party Integrations & Webhooks',
      'Authentication & Authorization (OAuth2/SSO)',
      'High-Throughput Data Pipelines',
    ],
  },
  {
    id: 'enterprise-software',
    title: 'Enterprise Software',
    desc: 'We build and improve business-critical systems, internal applications, workflow tools, financial platforms, and system integrations.',
    icon: Workflow,
    included: [
      'Custom ERP Architectures',
      'Financial & Transactional Ledgers',
      'Workflow Automation Engines',
      'Multi-Tenant Enterprise Platforms',
    ],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    desc: 'We help applications run reliably through cloud infrastructure, containers, CI/CD pipelines, deployment automation, monitoring, and scaling.',
    icon: Cloud,
    included: [
      'Infrastructure as Code (Terraform)',
      'Kubernetes & Container Orchestration',
      'Automated CI/CD Pipelines',
      'Monitoring, Alerting & Auto-Scaling',
    ],
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation',
    desc: 'We use AI and automation where they solve a real problem, including intelligent assistants, workflow automation, data processing, and AI integrations.',
    icon: Sparkles,
    included: [
      'Intelligent Assistants & Chatbots',
      'Automated Document Processing (OCR)',
      'Workflow & RPA Automation',
      'Custom LLM & API Integrations',
    ],
  },
  {
    id: 'software-modernization',
    title: 'Software Modernization',
    desc: 'We help modernize older applications by improving architecture, moving workloads to the cloud, introducing APIs or microservices, and replacing outdated technology.',
    icon: GitMerge,
    included: [
      'Monolith to Microservices Transition',
      'Cloud Migration & Containerization',
      'Database Optimization & Sharding',
      'Legacy Code Refactoring',
    ],
  },
  {
    id: 'qa-testing',
    title: 'QA & Testing',
    desc: 'We provide functional, API, integration, automated, performance, and end-to-end testing to improve release quality.',
    icon: ShieldCheck,
    included: [
      'Automated E2E Testing (Playwright / Cypress)',
      'Unit & Integration Test Suites',
      'Load & Stress Testing (k6)',
      'Security & Vulnerability Audits',
    ],
  },
]

export default function ServicesCapabilities() {
  const { openQuoteModal } = useQuoteModal()

  return (
    <section id="capabilities" className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 sm:mb-18 text-center w-full max-w-2xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-2">
            WHAT YOU CAN HIRE US TO DO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--text-primary) font-display">
            Core Engineering Offerings
          </h2>
          <p className="mt-3 text-sm sm:text-base text-(--text-secondary) leading-relaxed">
            Direct, practical software development capabilities tailored to your technical and business goals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES_LIST.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-6 sm:p-7 rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-(--teal)/10 border border-(--teal)/30 flex items-center justify-center text-(--teal) group-hover:bg-(--teal) group-hover:text-white transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-(--text-primary)">
                      {item.title}
                    </h3>
                  </div>

                  <p className="text-sm text-(--text-secondary) leading-relaxed mb-5">
                    {item.desc}
                  </p>

                  <div className="pt-4 border-t border-(--border-color)/60">
                    <span className="font-mono text-[10px] uppercase tracking-wider font-bold text-(--teal) block mb-2.5">
                      WHAT&apos;S INCLUDED:
                    </span>

                    <ul className="space-y-2">
                      {item.included.map((inc) => (
                        <li
                          key={inc}
                          className="flex items-center gap-2 text-xs text-(--text-secondary)"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-(--teal)" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-(--border-color)/40 flex items-center justify-between">
                  <Link
                    href={`/services/${item.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--teal) hover:text-(--aqua) group-hover:gap-2 transition-all"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={13} />
                  </Link>

                  <button
                    onClick={() => openQuoteModal(item.id)}
                    className="inline-flex items-center gap-1 text-xs font-mono font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                  >
                    <span>Request Service</span>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
