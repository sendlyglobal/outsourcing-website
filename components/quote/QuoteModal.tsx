'use client'

import React, { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  X, 
  ChevronLeft,
  ChevronDown,
  CheckCircle2
} from 'lucide-react'
import { Button, Input } from '@/components/ui'

const Cal = dynamic(
  () => import('@calcom/embed-react').then((mod) => mod.default),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[420px] flex items-center justify-center text-xs font-mono text-(--text-muted)">
        Loading scheduler...
      </div>
    ),
  }
)

export type ProjectType = 'erp' | 'mobile' | 'web' | 'custom'

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
  initialProjectType?: string
}

interface ProjectOption {
  id: ProjectType
  title: string
  desc: string
  eventSlug: string
}

const PROJECT_OPTIONS: ProjectOption[] = [
  {
    id: 'erp',
    title: 'ERP Development',
    desc: 'Supply chain, SAP/Odoo/custom integrations',
    eventSlug: 'globnetics',
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    desc: 'Native iOS/Android or cross-platform apps',
    eventSlug: 'globnetics',
  },
  {
    id: 'web',
    title: 'Web Platform',
    desc: 'High-throughput portals & cloud architecture',
    eventSlug: 'globnetics',
  },
  {
    id: 'custom',
    title: 'Custom Systems',
    desc: 'Bespoke architectures & complex workflows',
    eventSlug: 'globnetics',
  },
]

const qualifySchema = z.object({
  name: z.string().min(2, 'Please enter your full name'),
  email: z.string().email('Please enter a valid work email address'),
  company: z.string().min(2, 'Please enter your company name'),
  projectType: z.enum(['erp', 'mobile', 'web', 'custom']),
  notes: z.string().optional(),
})

type QualifyFormData = z.infer<typeof qualifySchema>

export default function QuoteModal({ isOpen, onClose, initialProjectType = 'erp' }: QuoteModalProps) {
  const router = useRouter()
  const modalRef = useRef<HTMLDivElement>(null)

  const [step, setStep] = useState<'qualify' | 'schedule' | 'confirmed'>('qualify')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validProjectType = (['erp', 'mobile', 'web', 'custom'].includes(initialProjectType)
    ? initialProjectType
    : 'erp') as ProjectType

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm<QualifyFormData>({
    resolver: zodResolver(qualifySchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      projectType: validProjectType,
      notes: '',
    },
  })

  const watchedProjectType = watch('projectType')
  const watchedName = watch('name')
  const watchedEmail = watch('email')
  const watchedCompany = watch('company')
  const watchedNotes = watch('notes')

  useEffect(() => {
    if (initialProjectType && ['erp', 'mobile', 'web', 'custom'].includes(initialProjectType)) {
      setValue('projectType', initialProjectType as ProjectType)
    }
  }, [initialProjectType, setValue])

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const onQualifySubmit = () => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('schedule')
    }, 300)
  }

  const handleNavigateToContact = () => {
    onClose()
    router.push('/contact')
  }

  const handleResetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep('qualify')
      reset()
    }, 300)
  }

  const activeOption = PROJECT_OPTIONS.find((p) => p.id === watchedProjectType) || PROJECT_OPTIONS[0]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleResetAndClose()
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
    >
      <div
        ref={modalRef}
        className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl shadow-black/40 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-white dark:bg-black border-(--border-color) ${
          step === 'schedule' ? 'max-w-4xl' : 'max-w-2xl'
        }`}
      >
        <div className="flex items-center justify-between border-b border-(--border-color) px-6 py-4 bg-white dark:bg-black">
          <div className="flex items-center gap-2">
            {step === 'schedule' && (
              <button
                type="button"
                onClick={() => setStep('qualify')}
                className="mr-1 p-1 rounded-md text-(--text-secondary) hover:text-(--text-primary) hover:bg-(--border-color)/30 transition-colors cursor-pointer"
                aria-label="Back to details"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="font-mono text-xs tracking-wider uppercase text-(--teal) font-medium">
                {step === 'qualify' ? 'Step 1 of 2: Requirements' : step === 'schedule' ? 'Step 2 of 2: Select a Time Slot' : 'Booking Confirmed'}
              </span>
              <h2 id="quote-modal-title" className="text-lg font-bold text-(--text-primary) font-display">
                {step === 'qualify' && 'Request a Scoped Architecture Estimate'}
                {step === 'schedule' && `${activeOption.title} Discovery Session`}
                {step === 'confirmed' && 'Discovery Call Scheduled'}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-(--text-muted) hover:text-(--text-primary) hover:bg-(--border-color)/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-white dark:bg-black">
          {step === 'qualify' && (
            <form onSubmit={handleSubmit(onQualifySubmit)} className="space-y-4">
              <p className="text-xs sm:text-sm text-(--text-secondary) leading-relaxed">
                Tell us what you&apos;re building. We&apos;ll review your requirements and prepare a realistic architecture &amp; cost estimate for your discovery call.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="w-full flex flex-col gap-1.5">
                  <label
                    htmlFor="quote-project-type"
                    className="text-xs font-mono font-medium uppercase tracking-wider text-(--text-secondary) flex items-center"
                  >
                    <span>Project Domain</span>
                    <span className="text-(--teal) ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="quote-project-type"
                      {...register('projectType')}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl border border-(--border-color) text-sm bg-white dark:bg-black text-(--text-primary) transition-all duration-200 outline-none focus:border-(--teal) focus:ring-1 focus:ring-(--teal) cursor-pointer appearance-none"
                    >
                      {PROJECT_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id} className="bg-white dark:bg-black text-(--text-primary)">
                          {opt.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-(--text-muted) absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                  </div>
                  {errors.projectType?.message && (
                    <span className="text-xs text-red-400 font-medium pl-0.5">{errors.projectType.message}</span>
                  )}
                </div>

                <Input
                  label="Company / Organization"
                  required
                  placeholder=""
                  error={errors.company?.message}
                  {...register('company')}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <Input
                  label="Your Name"
                  required
                  placeholder=""
                  error={errors.name?.message}
                  {...register('name')}
                />
                <Input
                  label="Work Email"
                  type="email"
                  required
                  placeholder=""
                  error={errors.email?.message}
                  {...register('email')}
                />
              </div>

              <Input
                label="Brief Project Overview (Optional)"
                isTextarea
                rows={2}
                placeholder="Current stack, core pain points, target launch date..."
                error={errors.notes?.message}
                {...register('notes')}
              />

              <div className="pt-2">
                <Button
                  type="submit"
                  fullWidth
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Continue to Schedule Discovery Call'}
                </Button>
              </div>

              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="text-xs text-(--teal) hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Prefer email? Send us a message instead
                </button>
              </div>
            </form>
          )}

          {step === 'schedule' && (
            <div className="w-full space-y-3">
              <div className="w-full h-[420px] sm:h-[450px] rounded-xl overflow-hidden border border-(--border-color) bg-white dark:bg-black">
                <Cal
                  calLink={activeOption.eventSlug || 'globnetics'}
                  style={{ width: '100%', height: '100%', overflow: 'auto' }}
                  config={{
                    name: watchedName,
                    email: watchedEmail,
                    notes: `${watchedCompany ? `Company: ${watchedCompany}. ` : ''}${watchedNotes || ''}`,
                    theme: 'auto',
                  }}
                />
              </div>

              <div className="flex items-center justify-between pt-0.5 text-xs text-(--text-muted)">
                <span>Direct 30-minute discovery session with Principal Solutions Architect.</span>
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="text-(--teal) hover:underline font-medium cursor-pointer"
                >
                  Need a custom time? Contact us
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 rounded-full bg-(--teal)/10 text-(--teal) flex items-center justify-center mx-auto border border-(--teal)/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-(--text-primary) font-display">
                  Discovery Session Confirmed!
                </h3>
                <p className="text-xs sm:text-sm text-(--text-secondary) mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <span className="font-semibold text-(--text-primary)">{watchedName || 'there'}</span>. A calendar invitation and video conference link have been sent to <span className="font-mono font-medium text-(--teal)">{watchedEmail}</span>.
                </p>
              </div>

              <div className="pt-4">
                <Button
                  type="button"
                  size="md"
                  onClick={handleResetAndClose}
                >
                  Done
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
