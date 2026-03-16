'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Menu', href: '/menu' },
  { label: 'Photos', href: '/photos' },
  { label: 'Directions', href: '/directions' },
  { label: 'Contact', href: '/contact' },
]

export default function SemicircleNav() {
  const [hovered, setHovered] = useState<number | null>(null)
  const pathname = usePathname()

  // Position links along the left arc of the semicircle
  // Semicircle sits on right edge; links arc from top-right to bottom-right
  const totalLinks = navLinks.length
  const arcStart = -100 // degrees from right horizontal
  const arcEnd = 100
  const radius = 160

  return (
    <nav className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50"
         style={{ width: `${radius + 60}px`, height: `${radius * 2 + 80}px` }}>
      {/* Semicircle background shape */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2"
        style={{
          width: `${radius + 40}px`,
          height: `${radius * 2 + 40}px`,
          background: `radial-gradient(ellipse at right, rgba(61,9,6,0.92) 0%, rgba(61,9,6,0.7) 60%, transparent 100%)`,
          borderRadius: `${radius + 20}px 0 0 ${radius + 20}px`,
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(210,105,30,0.2)',
          borderRight: 'none',
        }}
      />

      {/* Nav links positioned along the arc */}
      {navLinks.map((link, i) => {
        // Calculate position along the arc with consistent distance from edge
        const angle = arcStart + (arcEnd - arcStart) * (i / (totalLinks - 1))
        const rad = (angle * Math.PI) / 180
        // Position along the arc, but offset inward by consistent amount
        const arcRadius = radius - 30 // Move 30px inside the semicircle
        const x = Math.abs(Math.cos(rad)) * arcRadius // Use absolute value for consistent distance
        const y = Math.sin(rad) * arcRadius
        const isActive = pathname === link.href
        const isHov = hovered === i

        return (
          <Link
            key={link.href}
            href={link.href}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            className="absolute flex items-center group"
            style={{
              right: `${x - 10}px`,
              top: `calc(50% + ${y}px)`,
              transform: 'translateY(-50%)',
              transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            {/* Dot indicator */}
            <span
              style={{
                display: 'block',
                width: isHov || isActive ? '18px' : '14px',
                height: isHov || isActive ? '18px' : '14px',
                borderRadius: '50%',
                background: isActive ? '#D2691E' : isHov ? '#F5F0E8' : 'rgba(210,105,30,0.5)',
                marginRight: '16px',
                flexShrink: 0,
                transition: 'all 0.3s ease',
                boxShadow: isHov || isActive ? '0 0 20px rgba(210,105,30,0.8)' : 'none',
              }}
            />
            {/* Label */}
            <span
              className="font-maven whitespace-nowrap"
              style={{
                fontSize: isHov ? '1.4rem' : isActive ? '1.25rem' : '1.1rem',
                color: isActive ? '#D2691E' : isHov ? '#F5F0E8' : 'rgba(245,240,232,0.7)',
                textShadow: isHov ? '0 0 25px rgba(210,105,30,0.6)' : 'none',
                transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                transform: isHov ? 'translateX(-8px)' : 'translateX(0)',
                display: 'block',
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
