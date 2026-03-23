'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Menu',       href: '/menu',       size: 'tall' },
  { label: 'Photos',     href: '/photos',     size: 'wide' },
  { label: 'Directions', href: '/directions', size: 'wide' },
  { label: 'Contact',    href: '/contact',    size: 'tall' },
]

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const [hovered, setHovered] = useState<number | null>(null)
  const pathname = usePathname()
  const isHome = pathname === '/' || pathname === ''

  // Don't render on non-home pages
  if (!isHome) {
    return null
  }

  return (
    <>
      {/* ── Hamburger button ── */}
      <button
        onClick={() => setOpen(!open)}
        className="lg:hidden fixed top-4 right-4 z-[60] flex flex-col justify-center items-center w-11 h-11 rounded-full"
        style={{
          background: open ? 'rgba(210,105,30,0.15)' : 'rgba(10,8,6,0.75)',
          border: '1px solid rgba(210,105,30,0.45)',
          backdropFilter: 'blur(10px)',
          transition: 'background 0.3s ease',
        }}
        aria-label="Toggle navigation"
      >
        <span style={{
          display: 'block', width: '20px', height: '1.5px',
          background: '#F5F0E8', marginBottom: '5px',
          transition: 'transform 0.35s ease, opacity 0.35s ease',
          transform: open ? 'rotate(45deg) translate(4.5px, 4.5px)' : 'none',
        }} />
        <span style={{
          display: 'block', width: '20px', height: '1.5px',
          background: '#F5F0E8', marginBottom: '5px',
          transition: 'opacity 0.2s ease',
          opacity: open ? 0 : 1,
        }} />
        <span style={{
          display: 'block', width: '20px', height: '1.5px',
          background: '#F5F0E8',
          transition: 'transform 0.35s ease',
          transform: open ? 'rotate(-45deg) translate(4.5px, -4.5px)' : 'none',
        }} />
      </button>

      {/* ── Fullscreen overlay ── */}
      <div
        className="lg:hidden fixed inset-0 z-50"
        style={{
          background: 'rgba(6, 4, 3, 0.82)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Decorative grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`,
            opacity: 0.4,
          }}
        />

        {/* Accent line — top */}
        <div style={{
          position: 'absolute', top: 0, left: '10%', right: '10%',
          height: '1px', background: 'rgba(210,105,30,0.2)',
        }} />
        {/* Accent line — bottom */}
        <div style={{
          position: 'absolute', bottom: 0, left: '10%', right: '10%',
          height: '1px', background: 'rgba(210,105,30,0.2)',
        }} />

        <div
          className="absolute inset-0 flex flex-col justify-center items-center"
          style={{ padding: '80px 28px 60px' }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.4fr',
              gridTemplateRows: '1.4fr 1fr',
              gap: '12px',
              width: '100%',
              maxWidth: '480px',
              height: '100%',
              maxHeight: '560px',
            }}
          >
            {navLinks.map((link, i) => {
              const isActive = pathname === link.href || pathname === link.href + '/'
              const isHov = hovered === i

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    padding: '20px 22px',
                    background: isActive
                      ? 'rgba(210,105,30,0.22)'
                      : isHov
                      ? 'rgba(210,105,30,0.10)'
                      : 'rgba(245,240,232,0.04)',
                    border: isActive
                      ? '1px solid rgba(210,105,30,0.70)'
                      : isHov
                      ? '1px solid rgba(210,105,30,0.45)'
                      : '1px solid rgba(245,240,232,0.10)',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    overflow: 'hidden',
                    transition: 'background 0.3s ease, border-color 0.3s ease, transform 0.3s cubic-bezier(0.34,1.56,0.64,1)',
                    transform: isHov ? 'scale(1.02)' : 'scale(1)',
                    // Stagger entrance animation
                    transitionDelay: open ? `${i * 0.06}s` : '0s',
                    opacity: open ? 1 : 0,
                    transitionProperty: 'background, border-color, transform, opacity',
                  }}
                >
                  {/* Corner dot */}
                  <span style={{
                    position: 'absolute',
                    top: '14px',
                    right: '14px',
                    width: isActive ? '8px' : '5px',
                    height: isActive ? '8px' : '5px',
                    borderRadius: '50%',
                    background: isActive ? '#D2691E' : 'rgba(210,105,30,0.4)',
                    transition: 'all 0.3s ease',
                    boxShadow: isActive ? '0 0 10px rgba(210,105,30,0.7)' : 'none',
                  }} />

                  {/* Link label */}
                  <span style={{
                    fontSize: '1.4rem',
                    fontFamily: 'inherit',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    fontWeight: 300,
                    color: isActive
                      ? '#D2691E'
                      : isHov
                      ? '#F5F0E8'
                      : 'rgba(245,240,232,0.70)',
                    transition: 'color 0.25s ease',
                    lineHeight: 1,
                  }}>
                    {link.label}
                  </span>

                  {/* Bottom-left accent line — grows on hover */}
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    height: '2px',
                    background: '#D2691E',
                    width: isActive ? '100%' : isHov ? '60%' : '0%',
                    transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
                  }} />
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}