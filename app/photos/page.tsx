'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'
import Lightbox from '@/components/Lightbox'

// Placeholder images using abstract colour blocks — replace with real photos
// Each item: src, alt, and span (for masonry sizing variety)
const placeholderImages = [
  { src: '', alt: 'The bar at Maven', color: '#2a0f0d', span: 'tall' },
  { src: '', alt: 'Single origin pour over', color: '#3d1a0a', span: 'wide' },
  { src: '', alt: 'Morning light through the window', color: '#1a0d08', span: 'square' },
  { src: '', alt: 'Espresso extraction close-up', color: '#4a1c0b', span: 'tall' },
  { src: '', alt: 'Seasonal pastry selection', color: '#2e1205', span: 'square' },
  { src: '', alt: 'Latte art by our baristas', color: '#3a1508', span: 'wide' },
  { src: '', alt: 'The Maven interior', color: '#251009', span: 'square' },
  { src: '', alt: 'Cold brew on ice', color: '#1e0e07', span: 'tall' },
  { src: '', alt: 'Coffee beans in a bowl', color: '#4d1f0c', span: 'square' },
]

// Placeholder tile when no real image is provided
function PlaceholderTile({ color, alt }: { color: string; alt: string }) {
  return (
    <div
      className="w-full h-full flex flex-col items-center justify-center"
      style={{ background: color, minHeight: '100%' }}
    >
      <div style={{ opacity: 0.25, marginBottom: '12px' }}>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D2691E" strokeWidth="1">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <circle cx="8.5" cy="8.5" r="1.5"/>
          <polyline points="21 15 16 10 5 21"/>
        </svg>
      </div>
      <p
        className="font-maven text-center px-4"
        style={{ fontSize: '0.6rem', color: 'rgba(210,105,30,0.4)', letterSpacing: '0.1em', maxWidth: '120px' }}
      >
        {alt}
      </p>
    </div>
  )
}

export default function PhotosPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const images = placeholderImages.map(img => ({
    src: img.src || '',
    alt: img.alt,
  }))

  // Grid span classes based on type for masonry-like feel
  const getGridStyle = (span: string, index: number): React.CSSProperties => {
    const styles: Record<string, React.CSSProperties> = {
      tall: { gridRow: 'span 2' },
      wide: { gridColumn: 'span 2' },
      square: {},
    }
    return styles[span] || {}
  }

  return (
    <PageLayout title="Photos">
      <div className="pb-16">
        {/* Placeholder notice */}
        <p
          style={{
            fontSize: '0.75rem',
            color: 'rgba(245,240,232,0.3)',
            fontStyle: 'italic',
            marginBottom: '2rem',
            letterSpacing: '0.05em',
          }}
        >
          * Photo gallery placeholder — add your images to <code style={{ color: 'rgba(210,105,30,0.6)', fontSize: '0.7rem' }}>/public/images/gallery/</code> and update the image paths above.
        </p>

        {/* Masonry grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
            gridAutoRows: '200px',
            gap: '8px',
          }}
        >
          {placeholderImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              onClick={() => setLightboxIndex(i)}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                border: '1px solid rgba(210,105,30,0.12)',
                ...getGridStyle(img.span, i),
              }}
              className="group"
            >
              {/* Image or placeholder */}
              {img.src ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                    display: 'block',
                  }}
                  className="group-hover:scale-105"
                />
              ) : (
                <PlaceholderTile color={img.color} alt={img.alt} />
              )}

              {/* Hover overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(61,9,6,0)',
                  transition: 'background 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                className="group-hover:bg-[rgba(61,9,6,0.55)]"
              >
                <div
                  style={{
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    color: '#F5F0E8',
                    textAlign: 'center',
                  }}
                  className="group-hover:opacity-100"
                >
                  <div style={{ fontSize: '1.5rem', marginBottom: '6px' }}>⊕</div>
                  <p
                    className="font-maven"
                    style={{ fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.8)' }}
                  >
                    VIEW
                  </p>
                </div>
              </div>

              {/* Bottom caption bar on hover */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '8px 12px',
                  background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
                  transform: 'translateY(100%)',
                  transition: 'transform 0.3s ease',
                  pointerEvents: 'none',
                }}
                className="group-hover:translate-y-0"
              >
                <p
                  className="font-maven"
                  style={{ fontSize: '0.6rem', color: 'rgba(245,240,232,0.7)', letterSpacing: '0.08em' }}
                >
                  {img.alt}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
        />
      )}
    </PageLayout>
  )
}
