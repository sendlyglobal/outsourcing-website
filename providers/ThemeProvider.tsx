'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'dark' | 'light'

interface ThemeContextValue {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: 'dark',
  toggleTheme: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark')

  // On mount: read persisted preference or system preference
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null
    const preferred = stored
      ?? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    applyTheme(preferred)
    setTheme(preferred)
  }, [])

  function applyTheme(t: Theme) {
    const root = document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(t)
  }

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark'
      applyTheme(next)
      localStorage.setItem('theme', next)
      return next
    })
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
