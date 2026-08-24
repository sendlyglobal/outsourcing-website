'use client'

import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { 
  X, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Video, 
  ChevronLeft,
  ChevronDown
} from 'lucide-react'
import { Button, Input } from '@/components/ui'

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
  calSlug: string
}

const PROJECT_OPTIONS: ProjectOption[] = [
  {
    id: 'erp',
    title: 'ERP Development',
    desc: 'Supply chain, SAP/Odoo/custom integrations',
    calSlug: 'erp-discovery-call',
  },
  {
    id: 'mobile',
    title: 'Mobile App',
    desc: 'Native iOS/Android or cross-platform apps',
    calSlug: 'mobile-discovery-call',
  },
  {
    id: 'web',
    title: 'Web Platform',
    desc: 'High-throughput portals & cloud architecture',
    calSlug: 'web-discovery-call',
  },
  {
    id: 'custom',
    title: 'Custom Systems',
    desc: 'Bespoke architectures & complex workflows',
    calSlug: 'custom-discovery-call',
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
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<string>('2026-08-25')

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

  const onQualifySubmit = (data: QualifyFormData) => {
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('schedule')
    }, 300)
  }

  const handleBookingConfirm = () => {
    if (!selectedSlot) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setStep('confirmed')
    }, 400)
  }

  const handleNavigateToContact = () => {
    onClose()
    router.push('/contact')
  }

  const handleResetAndClose = () => {
    onClose()
    setTimeout(() => {
      setStep('qualify')
      setSelectedSlot(null)
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
        className={`relative w-full overflow-hidden rounded-2xl border transition-all duration-300 shadow-2xl shadow-black/40 dark:shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] bg-white dark:bg-black border-[var(--border-color)] ${
          step === 'schedule' ? 'max-w-[760px]' : 'max-w-[640px]'
        }`}
      >
        <div className="flex items-center justify-between border-b border-[var(--border-color)] px-6 py-4 bg-white dark:bg-black">
          <div className="flex items-center gap-2">
            {step === 'schedule' && (
              <button
                type="button"
                onClick={() => setStep('qualify')}
                className="mr-1 p-1 rounded-md text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/30 transition-colors"
                aria-label="Back to details"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
            )}
            <div>
              <span className="font-mono text-xs tracking-wider uppercase text-[var(--teal)] font-medium">
                {step === 'qualify' ? 'Step 1 of 2' : step === 'schedule' ? 'Step 2 of 2' : 'Call Confirmed'}
              </span>
              <h2 id="quote-modal-title" className="text-lg font-bold text-[var(--text-primary)]">
                {step === 'qualify' && 'Request a Scoped Quote'}
                {step === 'schedule' && 'Pick a Discovery Call Slot'}
                {step === 'confirmed' && 'Discovery Call Scheduled'}
              </h2>
            </div>
          </div>
          <button
            type="button"
            onClick={handleResetAndClose}
            className="p-1.5 rounded-lg text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--border-color)]/30 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 bg-white dark:bg-black">
          {step === 'qualify' && (
            <form onSubmit={handleSubmit(onQualifySubmit)} className="space-y-4">
              <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                Tell us what you're building. We'll review your requirements and prepare a realistic architecture & cost estimate for your discovery call.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div className="w-full flex flex-col gap-1.5">
                  <label
                    htmlFor="quote-project-type"
                    className="text-xs font-mono font-medium uppercase tracking-wider text-[var(--text-secondary)] flex items-center"
                  >
                    <span>Project Domain</span>
                    <span className="text-[var(--teal)] ml-1">*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="quote-project-type"
                      {...register('projectType')}
                      className="w-full h-11 px-3.5 pr-10 rounded-xl border border-[var(--border-color)] text-sm bg-white dark:bg-black text-[var(--text-primary)] transition-all duration-200 outline-none focus:border-[var(--teal)] focus:ring-1 focus:ring-[var(--teal)] cursor-pointer appearance-none"
                    >
                      {PROJECT_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id} className="bg-white dark:bg-black text-[var(--text-primary)]">
                          {opt.title}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="w-4 h-4 text-[var(--text-muted)] absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
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
                  className="text-xs text-[var(--teal)] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Prefer email? Send us a message instead
                </button>
              </div>
            </form>
          )}

          {step === 'schedule' && (
            <div className="space-y-4">
              <div className="p-3.5 rounded-xl border border-[var(--teal)]/30 bg-[var(--teal)]/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[var(--teal)]/10 text-[var(--teal)]">
                    <Video className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-[var(--teal)] uppercase font-semibold">
                      {activeOption.title} Discovery Call
                    </div>
                    <div className="text-xs text-[var(--text-secondary)]">
                      30 mins via Zoom · Technical Lead & Solutions Architect
                    </div>
                  </div>
                </div>
                <span className="text-[11px] font-mono px-2 py-1 rounded bg-[var(--border-color)] text-[var(--text-secondary)]">
                  {watchedCompany || 'Direct'}
                </span>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] font-medium flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[var(--teal)]" /> Select Date & Time (UTC)
                  </span>
                  <div className="flex items-center gap-2">
                    {['2026-08-25', '2026-08-26', '2026-08-27'].map((d) => (
                      <button
                        key={d}
                        type="button"
                        onClick={() => {
                          setSelectedDate(d)
                          setSelectedSlot(null)
                        }}
                        className={`px-3 py-1.5 text-xs rounded-md border font-mono transition-colors cursor-pointer ${
                          selectedDate === d
                            ? 'bg-[var(--teal)] text-white border-[var(--teal)]'
                            : 'border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--teal)] bg-white dark:bg-black'
                        }`}
                      >
                        {d.slice(5)}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2.5">
                  {['09:00 AM', '11:30 AM', '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM'].map((slot) => {
                    const isSelected = selectedSlot === slot
                    return (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedSlot(slot)}
                        className={`flex items-center justify-center gap-1.5 py-3 px-3.5 rounded-lg border text-xs font-mono transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[var(--teal)] bg-[var(--teal)] text-white font-medium shadow'
                            : 'border-[var(--border-color)] text-[var(--text-primary)] hover:border-[var(--teal)]/60 bg-white dark:bg-black'
                        }`}
                      >
                        <Clock className="w-3.5 h-3.5 opacity-75" />
                        <span>{slot}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="text-xs text-[var(--text-muted)] bg-white dark:bg-black p-3 rounded-lg border border-[var(--border-color)] flex items-center gap-2">
                <Video className="w-4 h-4 text-[var(--teal)] shrink-0" />
                <span>A Zoom link and calendar invite will be automatically dispatched to <strong className="text-[var(--text-primary)]">{watchedEmail}</strong>.</span>
              </div>

              <div className="pt-1">
                <Button
                  type="button"
                  fullWidth
                  size="lg"
                  disabled={!selectedSlot || isSubmitting}
                  onClick={handleBookingConfirm}
                >
                  {isSubmitting ? 'Booking Discovery Session...' : `Confirm Call for ${selectedSlot || 'Select a time'}`}
                </Button>
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={handleNavigateToContact}
                  className="text-xs text-[var(--teal)] hover:underline font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  Need a custom time or async RFP? Contact us instead
                </button>
              </div>
            </div>
          )}

          {step === 'confirmed' && (
            <div className="text-center py-4 space-y-4">
              <div className="w-12 h-12 rounded-full bg-[var(--teal)]/10 text-[var(--teal)] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[var(--text-primary)] font-display">
                  We're Ready for You, {watchedName ? watchedName.split(' ')[0] : 'there'}!
                </h3>
                <p className="text-xs text-[var(--text-secondary)] mt-1.5 max-w-sm mx-auto leading-relaxed">
                  Your 30-minute discovery session for <span className="font-semibold text-[var(--text-primary)]">{activeOption.title}</span> has been confirmed for <span className="font-mono text-[var(--teal)]">{selectedDate} at {selectedSlot}</span>.
                </p>
              </div>

              <div className="p-3 bg-white dark:bg-black rounded-xl border border-[var(--border-color)] text-xs text-[var(--text-secondary)] space-y-1">
                <div>Calendar invitation sent to: <strong className="text-[var(--text-primary)] font-mono">{watchedEmail}</strong></div>
                <div>Format: Zoom Video Conference with Principal Engineer</div>
              </div>

              <div className="pt-2">
                <Button
                  type="button"
                  fullWidth
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
