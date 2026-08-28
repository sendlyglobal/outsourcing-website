'use client'

import React from 'react'
import { motion } from 'motion/react'
import {
  Zap,
  Code2,
  Server,
  Cloud,
  Database,
  Smartphone,
  Cpu,
  ShieldCheck,
  Workflow
} from 'lucide-react'

interface TechBadge {
  name: string
  category: string
  icon?: React.ComponentType<{ className?: string; size?: number }>
}

const TECH_STACK_ROW_1: TechBadge[] = [
  { name: 'NEXT.JS 16 & REACT 19', category: 'Frontend', icon: Code2 },
  { name: 'TYPESCRIPT 5.8', category: 'Language', icon: Code2 },
  { name: 'GO (GOLANG) MICROSERVICES', category: 'Backend', icon: Server },
  { name: 'RUST ', category: 'High-Concurrency', icon: Cpu },
  { name: 'PYTHON FASTAPI ', category: 'Backend', icon: Server },
  { name: 'KUBERNETES & EKS CLUSTERS', category: 'DevOps', icon: Cloud },
  { name: 'TERRAFORM INFRASTRUCTURE', category: 'IaC', icon: Cloud },
  { name: 'POSTGRESQL', category: 'Database', icon: Database },
  { name: 'REDIS ENTERPRISE CLUSTERS', category: 'Cache', icon: Database },
  { name: 'GRAPHQL & GRPC SERVICES', category: 'API Protocol', icon: Server },
]

const TECH_STACK_ROW_2: TechBadge[] = [
  { name: 'REACT NATIVE & EXPO SDK', category: 'Mobile', icon: Smartphone },
  { name: 'FLUTTER & DART', category: 'Mobile', icon: Smartphone },
  { name: 'SWIFTUI & KOTLIN MULTIPLATFORM', category: 'Mobile', icon: Smartphone },
  { name: 'AWS • GCP • AZURE HYBRID', category: 'Cloud', icon: Cloud },
  { name: 'CLOUDFLARE WORKERS & EDGE', category: 'Edge Computing', icon: Zap },
  { name: 'DOCKER & CONTAINERD RUNTIME', category: 'Containers', icon: Cloud },
  { name: 'OPENAI & ANTHROPIC APIS', category: 'AI / LLM', icon: Cpu },
  { name: 'PYTORCH & LANGCHAIN', category: 'ML Fabric', icon: Cpu },
  { name: 'TAILWIND CSS V4', category: 'Styling', icon: Code2 },
  { name: 'PROMETHEUS & GRAFANA', category: 'Observability', icon: Workflow },
  { name: 'ZERO-DOWNTIME CI/CD PIPELINES', category: 'DevOps', icon: Zap },
]

export default function TechnologiesTicker() {
  return (
    <section className="relative w-full overflow-hidden py-6 sm:py-8 bg-white  dark:bg-black select-none">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-white dark:bg-black pointer-events-none" />

      <div className="space-y-3 sm:space-y-4">
        {/* Track 1 (Left to Right) */}
        <div className="flex w-max overflow-hidden group">
          <motion.div
            className="flex shrink-0 items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono uppercase tracking-wider"
            animate={{
              x: ['0%', '-50%'],
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 120,
            }}
          >
            {[...TECH_STACK_ROW_1, ...TECH_STACK_ROW_1].map((badge, idx) => {
              const Icon = badge.icon || Zap
              return (
                <div
                  key={`r1-${badge.name}-${idx}`}
                  className="px-4 py-2 rounded-full border border-[var(--border-color)] bg-white/80 dark:bg-white/5 hover:border-[var(--teal)] hover:bg-[var(--teal)]/15 text-[var(--text-primary)] dark:text-zinc-200 transition-all cursor-default flex items-center gap-2.5 shadow-xs hover:scale-105"
                >
                  <Icon className="w-3.5 h-3.5 text-[var(--teal)] dark:text-[var(--aqua)] shrink-0" />
                  <span className="font-semibold text-xs">{badge.name}</span>
                  <span className="text-[10px] text-[var(--text-muted)] dark:text-zinc-400 font-normal pl-1 border-l border-[var(--border-color)]">
                    {badge.category}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>

        {/* Track 2 (Right to Left) */}
        <div className="flex w-max overflow-hidden group">
          <motion.div
            className="flex shrink-0 items-center gap-3 sm:gap-4 text-xs sm:text-sm font-mono uppercase tracking-wider"
            animate={{
              x: ['-50%', '0%'],
            }}
            transition={{
              repeat: Infinity,
              ease: 'linear',
              duration: 130,
            }}
          >
            {[...TECH_STACK_ROW_2, ...TECH_STACK_ROW_2].map((badge, idx) => {
              const Icon = badge.icon || Zap
              return (
                <div
                  key={`r2-${badge.name}-${idx}`}
                  className="px-4 py-2 rounded-full border border-[var(--border-color)] bg-white/80 dark:bg-white/5 hover:border-[var(--teal)] hover:bg-[var(--teal)]/15 text-[var(--text-primary)] dark:text-zinc-200 transition-all cursor-default flex items-center gap-2.5 shadow-xs hover:scale-105"
                >
                  <Icon className="w-3.5 h-3.5 text-[var(--teal)] dark:text-[var(--aqua)] shrink-0" />
                  <span className="font-semibold text-xs">{badge.name}</span>
                  <span className="text-[10px] text-[var(--text-muted)] dark:text-zinc-400 font-normal pl-1 border-l border-[var(--border-color)]">
                    {badge.category}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
