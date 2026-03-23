'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'
import Lightbox from '@/components/Lightbox'
import TopBar from '@/components/Topbar'

interface GalleryImage {
  src: string
  alt: string
  filename: string
}

export default function PhotosPage() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  useEffect(() => {
    loadGalleryImages()
  }, [])

  const loadGalleryImages = async () => {
    try {
      // Try to load the manifest file
      const response = await fetch('/images/gallery/manifest.json')
      if (response.ok) {
        const manifest = await response.json()
        setImages(manifest.images || [])
      } else {
        // No manifest file found
        setImages([])
      }
    } catch (error) {
      console.error('Error loading gallery manifest:', error)
      setImages([])
    } finally {
      setLoading(false)
    }
  }

  // Generate masonry spans based on index for variety
  const getGridStyle = (index: number): React.CSSProperties => {
    const patterns = [
      { gridRow: 'span 2' }, // tall
      { gridColumn: 'span 2' }, // wide  
      {}, // square
      { gridRow: 'span 2' }, // tall
      {}, // square
      { gridColumn: 'span 2' }, // wide
      {}, // square
      { gridRow: 'span 2' }, // tall
      {}, // square
    ]
    return patterns[index % patterns.length] || {}
  }

  return (
    <PageLayout title="Photos">
      <div className="pb-16">
        {loading ? (
          <div className="text-center py-12">
            <p style={{ color: 'rgba(245,240,232,0.5)', fontSize: '0.9rem' }}>
              Loading gallery...
            </p>
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-12">
            <p
              style={{
                fontSize: '0.85rem',
                color: 'rgba(245,240,232,0.4)',
                fontStyle: 'italic',
                marginBottom: '1rem',
                letterSpacing: '0.05em',
              }}
            >
              No photos yet. Add images to <code style={{ color: 'rgba(210,105,30,0.6)', fontSize: '0.8rem' }}>public/images/gallery/</code> and they'll appear here automatically.
            </p>
            <p style={{ fontSize: '0.75rem', color: 'rgba(245,240,232,0.3)' }}>
              Supported formats: JPG, PNG, GIF, WebP, AVIF
            </p>
          </div>
        ) : (
          <>
            {/* Image count */}
            <p
              style={{
                fontSize: '0.75rem',
                color: 'rgba(245,240,232,0.3)',
                marginBottom: '2rem',
                letterSpacing: '0.05em',
              }}
            >
              {images.length} photos
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
              {images.map((img, i) => (
                <motion.div
                  key={img.filename}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightboxIndex(i)}
                  style={{
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: '1px solid rgba(210,105,30,0.12)',
                    ...getGridStyle(i),
                  }}
                  className="group"
                >
                  {/* Image */}
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
          </>
        )}
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
