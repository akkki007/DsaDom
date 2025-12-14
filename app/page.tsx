'use client'

import { useState, useEffect } from 'react'
import { programs } from '../programs'

const ProgramItem = ({ title, code }: { title: string; code: string }) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleTitleClick = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleTitleClick()
    }
  }

  const handleCopyKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCopy(e as any)
    }
  }

  return (
    <div className="flex items-start">
      <button
        onClick={handleTitleClick}
        onKeyDown={handleKeyDown}
        className="text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
        tabIndex={0}
      >
        <span className="dark:text-white text-black">{title}</span>
      </button>
      <button
        onClick={handleCopy}
        onKeyDown={handleCopyKeyDown}
        className="ml-4 px-2 py-1 bg-white  dark:bg-gray-200 text-grey-300 dark:text-black rounded hover:bg-gray-300 dark:hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Copy code"
        tabIndex={0}
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
    </div>
  )
}

export default function Home() {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const darkMode = localStorage.getItem('darkMode')
    if (darkMode !== null) {
      const isDarkMode = darkMode === 'true'
      setIsDark(isDarkMode)
      document.documentElement.classList.toggle('dark', isDarkMode)
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      document.documentElement.classList.toggle('dark', prefersDark)
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark
    setIsDark(newTheme)
    localStorage.setItem('darkMode', String(newTheme))
    document.documentElement.classList.toggle('dark', newTheme)
  }


  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-white text-black dark:text-white transition-colors">
      <div className="container px-1 text-sm max-w-4xl">
        {programs.map((program, index) => (
          <div key={`${program.title}-${index}`} className="mb-1">
            <ProgramItem title={program.title} code={program.code} />
          </div>
        ))}
      </div>
    </div>
  )
}
