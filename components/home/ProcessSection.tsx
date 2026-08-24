'use client'

import React from 'react'
import { motion } from 'motion/react'
import { Search, Code2, ShieldCheck, Rocket } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01. Discovery',
    title: 'System Analysis',
    desc: 'Deep technical audit, architecture planning, and rigorous requirement gathering.',
    icon: Search,
  },
  {
    step: '02. Engineering',
    title: 'Agile Build',
    desc: 'Iterative development focusing on clean code, scalability, and performance metrics.',
    icon: Code2,
  },
  {
    step: '03. QA',
    title: 'Rigorous Testing',
    desc: 'Automated and manual testing regimens ensuring security and zero-defect delivery.',
    icon: ShieldCheck,
  },
  {
    step: '04. Deployment',
    title: 'Launch & Scale',
    desc: 'Seamless CI/CD deployment followed by active monitoring and scaling support.',
    icon: Rocket,
  },
]

const CODE_WATERMARK = `function initArchitecture(config: SystemConfig) {
  const services = deployMicroservices(config.nodes);
  const mesh = configureServiceMesh(services);
  return optimizeLatency(mesh, 'global');
}

async function syncData(cluster: Cluster) {
  while (cluster.active) {
    await replicate(cluster.primary, cluster.replicas);
    verifyIntegrity(cluster);
  }
}`

export default function ProcessSection() {
  return (
    <section className="relative w-full py-20 sm:py-28 bg-[#071a30] overflow-hidden border-t border-[var(--border-color)]">
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.12] flex items-center justify-center">
        <pre className="font-mono text-xs sm:text-sm text-teal-300 font-medium leading-relaxed transform -rotate-3 scale-110 sm:scale-125 whitespace-pre">
          {CODE_WATERMARK}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16 sm:mb-20 text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-display">
            The Engineering Process
          </h2>
          <p className="mt-3.5 text-base sm:text-lg text-white font-medium">
            A systematic, transparent approach to delivering robust software architectures.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-slate-700/80 z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-6 relative z-10">
            {PROCESS_STEPS.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.55, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-[#0b2545] border border-slate-600 group-hover:border-teal-400 flex items-center justify-center text-teal-400 mb-5 transition-all duration-300 shadow-md group-hover:shadow-[0_0_20px_rgba(10,138,158,0.35)]">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-teal-400 font-bold mb-2">
                    {item.step}
                  </span>

                  <h3 className="text-xl font-bold text-white font-display mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-sm sm:text-base text-(--text-secondary) leading-relaxed max-w-xs">
                    {item.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
