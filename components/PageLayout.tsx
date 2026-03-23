'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SemicircleNav from './SemicircleNav'
import MobileNav from './MobileNav'
import TopBar from './Topbar'

interface PageLayoutProps {
  title: string
  children: React.ReactNode
  fullWidth?: boolean
}

export default function PageLayout({ title, children, fullWidth }: PageLayoutProps) {
  return (
    <div
      className="grain min-h-screen relative"
      style={{ background: 'var(--primary)' }}
    >
      <TopBar />
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

      <div className={`min-h-screen flex flex-col px-6 md:px-12 lg:px-16 pt-[76px] pb-12 ${fullWidth ? '' : 'lg:pr-64'}`}>
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
