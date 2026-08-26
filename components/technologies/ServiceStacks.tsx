'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Layers,
  Smartphone,
  Globe,
  Cpu,
} from 'lucide-react'

const STACKS = [
  {
    id: 'erp',
    category: 'ENTERPRISE RESOURCE',
    icon: Layers,
    title: 'ERP Systems',
    desc: 'Architected with modern backend runtimes and distributed SQL systems, we build robust enterprise systems designed for complex transactional logic and high-volume data processing.',
    techs: ['PostgreSQL', 'Apache Kafka', 'Docker', '.NET / Go'],
    href: '/technologies/erp',
  },
  {
    id: 'mobile',
    category: 'NATIVE & CROSS-PLATFORM',
    icon: Smartphone,
    title: 'Mobile Development',
    desc: 'Delivering seamless native experiences utilizing Swift and Kotlin, alongside high-performance cross-platform solutions in Flutter and React Native.',
    techs: ['Flutter', 'React Native', 'Swift', 'Kotlin'],
    href: '/technologies/mobile',
  },
  {
    id: 'web',
    category: 'FRONTEND & API',
    icon: Globe,
    title: 'Web Platforms',
    desc: 'Building highly responsive, SEO-optimized web applications leveraging React, Next.js, and Node.js for modern, decoupled microservices architectures.',
    techs: ['React', 'Next.js', 'TypeScript', 'Node.js'],
    href: '/technologies/web',
  },
  {
    id: 'custom',
    category: 'CORE INFRASTRUCTURE',
    icon: Cpu,
    title: 'Custom Software',
    desc: 'Engineering complex, distributed systems using Python, Go, and Rust, tailored specifically for unique business logic and heavy computational workloads.',
    techs: ['Python', 'Go', 'Rust', 'Kubernetes'],
    href: '/technologies/custom',
  },
]

export default function ServiceStacks() {
  return (
    <section id="stacks" className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 max-w-xl"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-(--text-primary) font-display">
            Service Stacks
          </h2>
          <p className="mt-2 text-xs sm:text-sm md:text-base text-(--text-secondary)">
            Purpose-built technology clusters for enterprise scalability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {STACKS.map((stack, idx) => {
            const Icon = stack.icon
            return (
              <motion.div
                key={stack.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative p-7 sm:p-8 rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between overflow-hidden group"
              >
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity pointer-events-none text-(--teal)">
                  <Icon className="w-20 h-20" />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Icon className="w-4 h-4 text-(--teal)" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-(--teal)">
                      {stack.category}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display">
                    {stack.title}
                  </h3>

                  <p className="mt-3 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {stack.desc}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {stack.techs.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-xs px-3 py-1.5 rounded-lg bg-(--border-color)/25 border border-(--border-color) text-(--text-primary) font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-(--border-color)/60">
                  <Link
                    href={stack.href}
                    className="inline-flex items-center justify-center gap-2 h-10 px-5 rounded-xl border border-(--border-color) hover:border-(--teal) hover:bg-(--teal)/5 text-xs font-semibold text-(--text-primary) hover:text-(--teal) transition-all group/btn"
                  >
                    <span>View Details</span>
                    <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
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
