'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import {
  ArrowRight,
  Globe,
  Smartphone,
  Server,
  Workflow,
  Cloud,
  Sparkles,
  Palette,
  ShieldCheck,
} from 'lucide-react'

const CAPABILITIES = [
  {
    id: 'web',
    title: 'Web Development',
    desc: 'Responsive web applications, portals, dashboards, internal tools, and SaaS platforms built with modern frontend frameworks.',
    href: '/services/web-development',
    icon: Globe,
  },
  {
    id: 'mobile',
    title: 'Mobile Development',
    desc: 'Native iOS and Android mobile apps alongside cross-platform Flutter and React Native solutions tailored for seamless performance.',
    href: '/services/mobile-development',
    icon: Smartphone,
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    desc: 'High-throughput microservices, robust REST & gRPC APIs, payment integrations, and secure authentication systems.',
    href: '/services/backend-api-development',
    icon: Server,
  },
  {
    id: 'enterprise',
    title: 'Enterprise Software',
    desc: 'Business-critical systems, custom ERP architectures, workflow automation tools, and complex multi-system integrations.',
    href: '/services/enterprise-software',
    icon: Workflow,
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    desc: 'Infrastructure as code, containerization, automated CI/CD deployment pipelines, and active monitoring for maximum uptime.',
    href: '/services/cloud-devops',
    icon: Cloud,
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    desc: 'Practical AI implementations, intelligent assistants, document parsing, workflow automation, and custom model integrations.',
    href: '/services/ai-automation',
    icon: Sparkles,
  },
  {
    id: 'design',
    title: 'UI/UX Design',
    desc: 'Intuitive interface design, interactive prototypes, design systems, and user journeys crafted for clarity and conversion.',
    href: '/services/web-development',
    icon: Palette,
  },
  {
    id: 'qa',
    title: 'QA & Testing',
    desc: 'Comprehensive automated, functional, API, integration, and performance testing regimens guaranteeing release reliability.',
    href: '/services/qa-testing',
    icon: ShieldCheck,
  },
]

export default function CapabilitiesSection() {
  return (
    <section className="w-full py-16 sm:py-24 dark:bg-black px-6 sm:px-10 md:px-14 lg:px-20 border-t border-(--border-color)">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12 sm:mb-16 text-center w-full max-w-3xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-(--teal) font-semibold block mb-2">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-(--text-primary) font-display">
            Full-Lifecycle Software Services
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-(--text-secondary) leading-relaxed">
            We work across the software development lifecycle. We can build a new product, improve an existing application, modernize an older system, or provide engineers to support an existing team.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {CAPABILITIES.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="p-5 sm:p-6 rounded-2xl border border-(--border-color) bg-white dark:bg-black hover:border-(--teal) transition-all duration-300 shadow-xs hover:shadow-lg flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl border border-(--teal)/30 bg-(--teal)/5 flex items-center justify-center text-(--teal) mb-4 group-hover:bg-(--teal) group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-bold text-(--text-primary) font-display">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-(--border-color)/50">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-(--teal) hover:text-(--aqua) group-hover:gap-2 transition-all"
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
