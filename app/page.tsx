'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import SemicircleNav from '@/components/SemicircleNav'
import MobileNav from '@/components/MobileNav'

export default function HomePage() {
  return (
    <main
      className="grain relative min-h-screen overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <SemicircleNav />
      <MobileNav />

      {/* Hero background — black for now, replace with your image */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #0A0A0A 0%, #1a0a08 50%, #0A0A0A 100%)',
        }}
      />

      {/* Subtle vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 35% 50%, transparent 30%, rgba(0,0,0,0.7) 100%)',
        }}
      />

      {/* Decorative accent lines */}
      <div className="absolute top-8 left-8 pointer-events-none" style={{ opacity: 0.25 }}>
        <div style={{ width: '60px', height: '1px', background: '#D2691E', marginBottom: '8px' }} />
        <div style={{ width: '1px', height: '60px', background: '#D2691E' }} />
      </div>
      <div className="absolute bottom-8 left-8 pointer-events-none" style={{ opacity: 0.25 }}>
        <div style={{ width: '1px', height: '60px', background: '#D2691E', marginBottom: '8px' }} />
        <div style={{ width: '60px', height: '1px', background: '#D2691E' }} />
      </div>

      {/* Main content — left/centre aligned */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 lg:max-w-[60vw]">

        {/* Logo placeholder — replace with your SVG */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          {/* TODO: Replace this div with your <Image src="/logo.svg" ... /> */}
          <div
            className="font-maven"
            style={{
              fontSize: 'clamp(4rem, 14vw, 10rem)',
              color: '#F5F0E8',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              textShadow: '0 0 80px rgba(210,105,30,0.15)',
            }}
          >
            MAVEN
          </div>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="font-maven"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 'clamp(0.65rem, 1.5vw, 0.85rem)',
            color: '#D2691E',
            letterSpacing: '0.3em',
            marginBottom: '2rem',
          }}
        >
          SPECIALTY COFFEE · CANBERRA · EST. 2026
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0, originX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          style={{ width: '80px', height: '1px', background: 'rgba(210,105,30,0.5)', marginBottom: '2rem' }}
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.85rem, 1.5vw, 1rem)',
            color: 'rgba(245,240,232,0.7)',
            lineHeight: 1.8,
            maxWidth: '440px',
            marginBottom: '3rem',
          }}
        >
          Specialty coffee roasted with intention. A place to slow down, taste 
          something exceptional, and feel at home in Canberra&apos;s heart. We take 
          our craft seriously, so you don&apos;t have to.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
        >
          <Link
            href="/menu"
            className="font-maven inline-block"
            style={{
              fontSize: '0.8rem',
              letterSpacing: '0.2em',
              color: '#F5F0E8',
              padding: '14px 36px',
              border: '1px solid rgba(210,105,30,0.6)',
              background: 'rgba(61,9,6,0.4)',
              transition: 'all 0.3s ease',
              position: 'relative',
              overflow: 'hidden',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(210,105,30,0.2)'
              el.style.borderColor = '#D2691E'
              el.style.color = '#D2691E'
              el.style.transform = 'translateY(-2px)'
              el.style.boxShadow = '0 8px 30px rgba(210,105,30,0.2)'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.background = 'rgba(61,9,6,0.4)'
              el.style.borderColor = 'rgba(210,105,30,0.6)'
              el.style.color = '#F5F0E8'
              el.style.transform = 'translateY(0)'
              el.style.boxShadow = 'none'
            }}
          >
            EXPLORE THE MENU
          </Link>
        </motion.div>
      </div>

      {/* Est. year watermark */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute bottom-8 right-8 font-maven lg:hidden"
        style={{
          color: 'rgba(245,240,232,0.15)',
          fontSize: '0.7rem',
          letterSpacing: '0.3em',
          writingMode: 'vertical-rl',
        }}
      >
        EST. 2026
      </motion.div>
    </main>
  )
}
