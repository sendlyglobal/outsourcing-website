'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight, Workflow, Smartphone, Layout, Code2 } from 'lucide-react'

const CAPABILITIES = [
  {
    id: 'erp',
    title: 'ERP Development',
    desc: 'Custom enterprise resource planning architectures designed to unify disparate operations and streamline massive data flows.',
    href: '/services/erp-development',
    icon: Workflow,
  },
  {
    id: 'mobile',
    title: 'Mobile Apps',
    desc: 'High-performance native and cross-platform mobile applications prioritizing responsive UI and complex device integration.',
    href: '/services/mobile-development',
    icon: Smartphone,
  },
  {
    id: 'web',
    title: 'Web Platforms',
    desc: 'Scalable, secure, and robust web applications leveraging modern frameworks and microservices architectures.',
    href: '/services/web-development',
    icon: Layout,
  },
  {
    id: 'custom',
    title: 'Custom Systems',
    desc: 'Bespoke software engineering solving unique technical challenges that off-the-shelf solutions cannot address.',
    href: '/services/custom-software',
    icon: Code2,
  },
]

export default function CapabilitiesSection() {
  return (
    <section className="w-full py-14 sm:py-20 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-12 text-center w-full max-w-2xl mx-auto"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Core Engineering Capabilities
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            Purpose-built solutions engineered for performance, security, and scalable growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl border border-(--border-color) dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between group"
              >
                <div>
                  <div className="w-9.5 h-9.5 rounded-lg border border-(--teal)/30 bg-(--teal)/5 flex items-center justify-center text-(--teal) mb-4 group-hover:bg-(--teal)/10 transition-colors">
                    <Icon className="w-4.5 h-4.5" />
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-(--text-primary) font-display">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-1">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[var(--teal)] hover:text-[var(--aqua)] group-hover:gap-2 transition-all"
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={14} />
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
