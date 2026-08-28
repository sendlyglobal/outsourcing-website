'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { X, CheckCircle2 } from 'lucide-react'
import { Input, Textarea, Button } from '@/components/ui'

interface CareerApplicationModalProps {
  isOpen: boolean
  onClose: () => void
}

interface CareerFormData {
  fullName: string
  position: string
  email: string
  github: string
  linkedin: string
  coverLetter: string
}

const INITIAL_FORM: CareerFormData = {
  fullName: '',
  position: '',
  email: '',
  github: '',
  linkedin: '',
  coverLetter: '',
}

export default function CareerApplicationModal({ isOpen, onClose }: CareerApplicationModalProps) {
  const [formData, setFormData] = useState<CareerFormData>(INITIAL_FORM)
  const [errors, setErrors] = useState<Partial<Record<keyof CareerFormData, string>>>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    const errs: Partial<Record<keyof CareerFormData, string>> = {}
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required'
    if (!formData.position.trim()) errs.position = 'Desired position is required'
    if (!formData.email.trim()) {
      errs.email = 'Email address is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address'
    }
    if (!formData.coverLetter.trim()) {
      errs.coverLetter = 'Please write a brief note or cover letter'
    }
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 900))
    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const handleReset = () => {
    setFormData(INITIAL_FORM)
    setErrors({})
    setIsSuccess(false)
    onClose()
  }

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-xl bg-white dark:bg-[#000000] border border-(--border-color) rounded-3xl p-6 sm:p-8 shadow-2xl z-10 my-8 overflow-hidden"
        >
          <div className="flex items-center justify-between pb-4 border-b border-(--border-color)">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-(--teal) font-semibold">
                General Application
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-(--text-primary) font-display mt-0.5">
                Join RiseUp Engineering
              </h3>
            </div>

            <button
              onClick={handleReset}
              className="w-8 h-8 rounded-full border border-(--border-color) hover:border-(--teal) flex items-center justify-center text-(--text-secondary) hover:text-(--text-primary) transition-colors cursor-pointer"
            >
              <X size={16} />
            </button>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-12 flex flex-col items-center text-center space-y-4"
            >
              <div className="w-16 h-16 rounded-full bg-(--teal)/15 text-(--teal) flex items-center justify-center">
                <CheckCircle2 size={36} />
              </div>
              <h4 className="text-2xl font-bold text-(--text-primary) font-display">
                Application Submitted!
              </h4>
              <p className="text-sm text-(--text-secondary) max-w-md leading-relaxed">
                Thank you for your interest in RiseUp Engineering. We review every profile carefully and will reach out if your background matches upcoming opportunities.
              </p>
              <Button
                variant="primary"
                size="md"
                onClick={handleReset}
                className="mt-4"
              >
                Close Window
              </Button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                    Full Name *
                  </label>
                  <Input
                    placeholder="Alex Morgan"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    error={errors.fullName}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                    Desired Position / Focus *
                  </label>
                  <Input
                    placeholder="e.g. Senior Full-Stack Engineer"
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    error={errors.position}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                  Email Address *
                </label>
                <Input
                  type="email"
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                    GitHub Profile URL
                  </label>
                  <Input
                    placeholder="https://github.com/username"
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                    LinkedIn Profile URL
                  </label>
                  <Input
                    placeholder="https://linkedin.com/in/username"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-(--text-secondary) mb-1.5">
                  Cover Note / About Yourself *
                </label>
                <Textarea
                  placeholder="Tell us about the systems you've built, your primary tech stack, and what type of engineering challenges excite you..."
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  error={errors.coverLetter}
                />
              </div>

              <div className="pt-3 flex items-center justify-end gap-3">
                <Button
                  type="button"
                  variant="secondary"
                  size="md"
                  onClick={handleReset}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  variant="primary"
                  size="md"
                  disabled={isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Profile'}
                </Button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
