'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Workflow,
  Smartphone,
  Layout,
  Code2,
  GitMerge,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react'

const CAPABILITIES = [
  {
    id: 'modernization',
    title: 'Modernization & Migration',
    desc: 'De-risking the transition from legacy monoliths to high-performance microservices architectures.',
    href: '/services/custom-software',
    icon: GitMerge,
    isDark: false,
    included: [
      'Monolith Decomposition',
      'Database Refactoring',
      'API Gateway Implementation',
    ],
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    desc: 'Hardening enterprise assets with SOC2-compliant security frameworks and zero-trust architecture.',
    href: '/services/custom-software',
    icon: ShieldCheck,
    isDark: true,
    included: [
      'End-to-end Encryption',
      'RBAC & IAM Integration',
      'Automated Vulnerability Scans',
    ],
  },
  {
    id: 'erp',
    title: 'ERP Development',
    desc: 'Custom enterprise resource planning architectures designed to unify disparate operations and streamline massive data flows.',
    href: '/services/erp-development',
    icon: Workflow,
    isDark: true,
    included: [
      'Custom ERP Architecture',
      'Real-time Inventory & Financials',
      'Third-party ERP Integrations',
    ],
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    desc: 'High-performance native and cross-platform mobile applications prioritizing responsive UI and complex device integration.',
    href: '/services/mobile-development',
    icon: Smartphone,
    isDark: false,
    included: [
      'iOS & Android (Flutter / React Native)',
      'Offline Data Synchronization',
      'Biometric Security & Push Telemetry',
    ],
  },
  {
    id: 'web',
    title: 'Web Platforms',
    desc: 'Scalable, secure, and robust web applications leveraging modern frameworks and microservices architectures.',
    href: '/services/web-development',
    icon: Layout,
    isDark: false,
    included: [
      'Next.js & React Architectures',
      'Micro-frontends & High TPS APIs',
      'Global Edge CDN & Cloud Deployment',
    ],
  },
  {
    id: 'custom',
    title: 'Custom Systems',
    desc: 'Bespoke software engineering solving unique technical challenges that off-the-shelf solutions cannot address.',
    href: '/services/custom-software',
    icon: Code2,
    isDark: true,
    included: [
      'Distributed Message Queues',
      'Complex Algorithm Pipelines',
      'Legacy Bridge Adapters',
    ],
  },
]

export default function ServicesCapabilities() {
  return (
    <section id="capabilities" className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-14 text-center w-full max-w-2xl mx-auto"
        >

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Core Services We Provide
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-(--text-secondary)">
            Purpose-built solutions engineered for performance, security, and scalable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`p-5 sm:p-6 rounded-xl sm:rounded-2xl border transition-all duration-300 flex flex-col justify-between group ${
                  item.isDark
                    ? 'bg-[#071a30] text-white border-slate-700/80 hover:border-teal-400 shadow-xl shadow-black/25 dark:shadow-[0_12px_36px_rgba(7,26,48,0.7)] hover:shadow-2xl hover:shadow-[0_18px_48px_rgba(10,138,158,0.25)]'
                    : 'bg-white dark:bg-black border-(--border-color) hover:border-(--teal) shadow-md shadow-black/5 dark:shadow-[0_10px_30px_rgba(0,0,0,0.6)] hover:shadow-xl hover:shadow-[0_16px_36px_rgba(10,138,158,0.14)]'
                }`}
              >
                <div>
                  {/* <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center mb-4 ${
                      item.isDark
                        ? 'bg-teal-500/10 text-teal-400 border border-teal-500/20'
                        : 'bg-(--teal)/5 text-(--teal) border border-(--teal)/30 group-hover:bg-(--teal)/10 transition-colors'
                    }`}
                  >
                    <Icon className="w-4.5 h-4.5" />
                  </div> */}

                  <h3
                    className={`text-base sm:text-lg font-bold font-display ${
                      item.isDark ? 'text-white' : 'text-(--text-primary)'
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`mt-1.5 text-xs sm:text-sm leading-relaxed ${
                      item.isDark ? 'text-slate-300' : 'text-(--text-secondary)'
                    }`}
                  >
                    {item.desc}
                  </p>

                  <div className="mt-3.5 pt-3 border-t border-current/10">
                    <span
                      className={`font-mono text-[10px] sm:text-[11px] uppercase tracking-wider font-semibold block mb-2 ${
                        item.isDark ? 'text-teal-400' : 'text-(--teal)'
                      }`}
                    >
                      What&apos;s included:
                    </span>

                    <ul className="space-y-1.5">
                      {item.included.map((inc) => (
                        <li
                          key={inc}
                          className={`flex items-center gap-2 text-xs font-medium ${
                            item.isDark ? 'text-slate-200' : 'text-(--text-primary)'
                          }`}
                        >
                          <CheckCircle2
                            className={`w-3.5 h-3.5 shrink-0 ${
                              item.isDark ? 'text-teal-400' : 'text-(--teal)'
                            }`}
                          />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <Link
                    href={item.href}
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold transition-all group-hover:gap-2 ${
                      item.isDark
                        ? 'text-teal-400 hover:text-teal-300'
                        : 'text-(--teal) hover:text-(--aqua)'
                    }`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
