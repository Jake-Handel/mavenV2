'use client'

import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface LightboxProps {
  images: { src: string; alt: string }[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ images, currentIndex, onClose, onNext, onPrev }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowRight') onNext()
    if (e.key === 'ArrowLeft') onPrev()
  }, [onClose, onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [handleKey])

  // Touch swipe
  let touchStartX = 0
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) diff > 0 ? onNext() : onPrev()
  }

  const image = images[currentIndex]

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(12px)' }}
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 font-maven"
          style={{
            color: '#F5F0E8',
            fontSize: '1.5rem',
            background: 'rgba(61,9,6,0.8)',
            border: '1px solid rgba(210,105,30,0.4)',
            width: '44px', height: '44px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
          aria-label="Close"
        >
          ✕
        </button>

        {/* Counter */}
        <div
          className="absolute top-6 left-1/2 -translate-x-1/2 font-maven"
          style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.75rem', letterSpacing: '0.2em' }}
        >
          {currentIndex + 1} / {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={e => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 md:left-8"
          style={{
            color: '#F5F0E8',
            fontSize: '1.5rem',
            background: 'rgba(61,9,6,0.7)',
            border: '1px solid rgba(210,105,30,0.3)',
            width: '48px', height: '48px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          aria-label="Previous"
        >
          ←
        </button>

        {/* Image */}
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.25 }}
          onClick={e => e.stopPropagation()}
          style={{ maxWidth: '85vw', maxHeight: '85vh', position: 'relative' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image.src}
            alt={image.alt}
            style={{
              maxWidth: '85vw',
              maxHeight: '85vh',
              objectFit: 'contain',
              borderRadius: '4px',
              border: '1px solid rgba(210,105,30,0.2)',
            }}
          />
        </motion.div>

        {/* Next */}
        <button
          onClick={e => { e.stopPropagation(); onNext() }}
          className="absolute right-4 md:right-8"
          style={{
            color: '#F5F0E8',
            fontSize: '1.5rem',
            background: 'rgba(61,9,6,0.7)',
            border: '1px solid rgba(210,105,30,0.3)',
            width: '48px', height: '48px',
            borderRadius: '50%',
            cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.2s ease',
          }}
          aria-label="Next"
        >
          →
        </button>

        {/* Alt text caption */}
        {image.alt && (
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 font-maven text-center"
            style={{
              color: 'rgba(245,240,232,0.5)',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              maxWidth: '60vw',
            }}
          >
            {image.alt}
          </div>
        )}
      </motion.div>
    </AnimatePresence>
  )
}
