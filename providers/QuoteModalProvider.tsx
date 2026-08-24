'use client'

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react'
import QuoteModal from '@/components/quote/QuoteModal'

interface QuoteModalContextValue {
  isOpen: boolean
  projectType: string
  openQuoteModal: (projectType?: string) => void
  closeQuoteModal: () => void
}

const QuoteModalContext = createContext<QuoteModalContextValue | undefined>(undefined)

export function QuoteModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)
  const [projectType, setProjectType] = useState('erp')

  const openQuoteModal = useCallback((type?: string) => {
    if (type) {
      setProjectType(type)
    }
    setIsOpen(true)
  }, [])

  const closeQuoteModal = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <QuoteModalContext.Provider
      value={{
        isOpen,
        projectType,
        openQuoteModal,
        closeQuoteModal,
      }}
    >
      {children}
      <QuoteModal
        isOpen={isOpen}
        onClose={closeQuoteModal}
        initialProjectType={projectType}
      />
    </QuoteModalContext.Provider>
  )
}

export function useQuoteModal() {
  const context = useContext(QuoteModalContext)
  if (!context) {
    throw new Error('useQuoteModal must be used within a QuoteModalProvider')
  }
  return context
}
