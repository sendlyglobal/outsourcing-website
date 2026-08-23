import React from 'react'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/case-studies'
import { ArrowRight } from 'lucide-react'

export default function WorkPage() {
  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container-site">
        <div className="max-w-3xl mb-16">
          <span
            style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
            className="text-xs font-semibold uppercase tracking-wider text-(--teal)"
          >
            Case Studies &amp; Outcomes
          </span>
          <h1
            style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}
            className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary) mt-2"
          >
            Featured Outcomes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-(--text-secondary) leading-relaxed">
            Discover how we engineer robust, scalable solutions for complex enterprise challenges across global supply chains and high-security financial systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CASE_STUDIES.map((study) => (
            <div
              key={study.slug}
              className="card-hover p-8 rounded-2xl border border-(--border-subtle) bg-(--surface-raised) flex flex-col justify-between"
            >
              <div>
                <span
                  style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
                  className="text-xs font-semibold uppercase tracking-wider text-(--teal)"
                >
                  {study.industry}
                </span>
                <h2
                  style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}
                  className="text-xl font-bold text-(--text-primary) tracking-tight mt-2"
                >
                  {study.title}
                </h2>
                <p className="mt-3 text-sm text-(--text-secondary) leading-relaxed">
                  {study.summary}
                </p>

                {/* Key results badge list */}
                <div className="mt-6 p-4 rounded-xl bg-teal-500/5 border border-teal-500/15 space-y-2">
                  {study.key_results.map((res) => (
                    <div key={res.label} className="flex items-center justify-between">
                      <span className="text-xs text-(--text-secondary)">{res.label}</span>
                      <span
                        style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
                        className="text-sm font-bold text-(--teal)"
                      >
                        {res.metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-(--border-subtle) flex items-center justify-between">
                <div className="flex gap-1.5 flex-wrap">
                  {study.technologies.slice(0, 3).map((t) => (
                    <span key={t} className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-500/10 text-(--text-primary)">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={`/work/${study.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-(--teal) hover:text-(--teal-bright)"
                >
                  <span>Read</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
