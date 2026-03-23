'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Menu', href: '/menu' },
  { label: 'Photos', href: '/photos' },
  { label: 'Directions', href: '/directions' },
  { label: 'Contact', href: '/contact' },
]

export default function SemicircleNav() {
  const [hovered, setHovered] = useState<number | null>(null)
  const pathname = usePathname()

  // Only render on the home page
  const isHome = pathname === '/' || pathname === ''
  if (!isHome) return null

  // Arc parameters — right-side semicircle curving around the coffee machine
  // The machine sits roughly at the vertical center, slightly right of screen center.
  // We arc from upper-right to lower-right, hugging the machine.
  const totalLinks = navLinks.length
  const arcStartDeg = -80   // top of arc (degrees from positive-x axis)
  const arcEndDeg = 80      // bottom of arc
  const arcRadius = 170     // px from the arc origin point

  return (
    <nav
      className="hidden md:block fixed z-40"
      style={{
        // Anchor the arc origin roughly where the coffee machine center is:
        // ~60% from left, ~52% from top. Links radiate outward (leftward) from here.
        right: '25%',
        top: '50%',
        transform: 'translateY(-50%)',
        width: `${arcRadius + 120}px`,
        height: `${arcRadius * 2 + 80}px`,
        pointerEvents: 'none',
      }}
    >
      {navLinks.map((link, i) => {
        const angle = arcStartDeg + (arcEndDeg - arcStartDeg) * (i / (totalLinks - 1))
        const rad = (angle * Math.PI) / 180

        // Origin is at the right edge, vertically centered
        // Links radiate leftward along the arc
        const x = Math.cos(rad) * arcRadius  // negative = left
        const y = Math.sin(rad) * arcRadius  // positive = down

        const isActive = pathname === link.href || pathname === link.href + '/'
        const isHov = hovered === i

        // Position: origin is at right:0, top:50%
        // x is leftward (cos is negative for angles near ±90), y shifts vertically
        return (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="absolute flex items-center justify-center"
            style={{
              // Place the box centered on the arc point
              right: `${-x + 20}px`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(0, -50%)',
              pointerEvents: 'all',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
              zIndex: isHov ? 10 : 5,
            }}
          >
            {/* Solid link box */}
            <span
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 20px',
                background: isActive
                  ? '#D2691E'
                  : isHov
                  ? 'rgba(245, 240, 232, 0.95)'
                  : 'rgba(10, 8, 6, 0.88)',
                border: isActive
                  ? '1px solid #D2691E'
                  : isHov
                  ? '1px solid rgba(245,240,232,0.8)'
                  : '1px solid rgba(210,105,30,0.45)',
                borderRadius: '3px',
                color: isActive
                  ? '#F5F0E8'
                  : isHov
                  ? '#1A0A08'
                  : 'rgba(245,240,232,0.85)',
                fontSize: isHov ? '0.95rem' : '0.85rem',
                fontFamily: 'inherit',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: isActive || isHov ? 600 : 400,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                boxShadow: isHov
                  ? '0 0 24px rgba(210,105,30,0.35), inset 0 0 0 0 transparent'
                  : isActive
                  ? '0 0 20px rgba(210,105,30,0.5)'
                  : '0 2px 12px rgba(0,0,0,0.5)',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isHov ? 'scale(1.06) translateX(-4px)' : 'scale(1) translateX(0)',
                backdropFilter: isActive || isHov ? 'none' : 'blur(4px)',
              }}
            >
              {link.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}