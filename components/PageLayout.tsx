'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SemicircleNav from './SemicircleNav'
import MobileNav from './MobileNav'

interface PageLayoutProps {
  title: string
  children: React.ReactNode
}

export default function PageLayout({ title, children }: PageLayoutProps) {
  return (
    <div
      className="grain min-h-screen relative"
      style={{ background: 'var(--primary)' }}
    >
      <SemicircleNav />
      <MobileNav />

      {/* Decorative corner lines */}
      <div className="fixed top-6 left-6 pointer-events-none" style={{ opacity: 0.3 }}>
        <div style={{ width: '40px', height: '2px', background: 'var(--accent)', marginBottom: '6px' }} />
        <div style={{ width: '2px', height: '40px', background: 'var(--accent)' }} />
      </div>
      <div className="fixed bottom-6 left-6 pointer-events-none" style={{ opacity: 0.3 }}>
        <div style={{ width: '2px', height: '40px', background: 'var(--accent)', marginBottom: '6px' }} />
        <div style={{ width: '40px', height: '2px', background: 'var(--accent)' }} />
      </div>

      <div className="min-h-screen flex flex-col px-6 md:px-12 lg:px-16 py-12 lg:pr-64">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/"
            className="font-maven inline-flex items-center gap-2 mb-12"
            style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.75rem', letterSpacing: '0.15em' }}
          >
            <span style={{ fontSize: '1rem' }}>←</span> MAVEN
          </Link>
        </motion.div>

        {/* Page title */}
        <motion.h1
          className="font-maven"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(2.5rem, 7vw, 5rem)',
            color: 'var(--text-light)',
            lineHeight: 1,
            marginBottom: '3rem',
            borderBottom: '1px solid rgba(210,105,30,0.3)',
            paddingBottom: '1.5rem',
          }}
        >
          {title}
        </motion.h1>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex-1"
        >
          {children}
        </motion.div>
      </div>
    </div>
  )
}
