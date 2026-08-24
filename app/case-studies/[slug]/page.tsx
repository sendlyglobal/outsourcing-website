import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CASE_STUDIES } from '@/lib/case-studies'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'

export function generateStaticParams() {
  return CASE_STUDIES.map((c) => ({ slug: c.slug }))
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const study = CASE_STUDIES.find((c) => c.slug === slug)
  if (!study) notFound()

  return (
    <div className="w-full py-16 sm:py-24">
      <div className="container-site max-w-4xl">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-(--teal) hover:underline mb-8"
        >
          <ArrowLeft size={16} />
          <span>Back to Case Studies</span>
        </Link>

        <span
          style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
          className="text-xs font-semibold uppercase tracking-wider text-(--teal)"
        >
          {study.industry} &bull; {study.location}
        </span>
        <h1
          style={{ fontFamily: 'var(--font-display, "Space Grotesk", sans-serif)' }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-(--text-primary) mt-2"
        >
          {study.title}
        </h1>
        <p className="mt-4 text-lg text-(--text-secondary) leading-relaxed">
          {study.summary}
        </p>

        {/* Key Metrics Strip */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {study.key_results.map((res) => (
            <div
              key={res.label}
              className="p-6 rounded-2xl border border-(--border-subtle) bg-(--surface-raised) text-center"
            >
              <div
                style={{ fontFamily: 'var(--font-mono, "JetBrains Mono", monospace)' }}
                className="text-3xl font-bold text-(--teal)"
              >
                {res.metric}
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-(--text-secondary) mt-1">
                {res.label}
              </div>
            </div>
          ))}
        </div>

        {/* Situation / Solution / Result narrative */}
        <div className="mt-14 space-y-10">
          <div className="p-8 rounded-2xl border border-(--border-subtle) bg-(--surface-raised)">
            <h2 className="text-xl font-bold text-(--text-primary)">{study.situation.heading}</h2>
            <p className="mt-3 text-sm text-(--text-secondary) leading-relaxed">{study.situation.detail}</p>
          </div>

          <div className="p-8 rounded-2xl border border-(--border-subtle) bg-(--surface-raised)">
            <h2 className="text-xl font-bold text-(--text-primary)">{study.solution.heading}</h2>
            <p className="mt-3 text-sm text-(--text-secondary) leading-relaxed">{study.solution.detail}</p>
          </div>

          <div className="p-8 rounded-2xl border border-(--border-subtle) bg-(--surface-raised)">
            <h2 className="text-xl font-bold text-(--text-primary)">{study.result.heading}</h2>
            <p className="mt-3 text-sm text-(--text-secondary) leading-relaxed">{study.result.detail}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
