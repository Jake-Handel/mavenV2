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

export default function MobileNav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="lg:hidden fixed top-4 right-4 z-50">
      {/* Hamburger button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center items-center w-11 h-11 rounded-full"
        style={{
          background: 'rgba(61,9,6,0.92)',
          border: '1px solid rgba(210,105,30,0.4)',
          backdropFilter: 'blur(8px)',
        }}
        aria-label="Toggle navigation"
      >
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: '#F5F0E8',
            marginBottom: '5px',
            transition: 'all 0.3s ease',
            transform: open ? 'rotate(45deg) translate(5px, 5px)' : 'none',
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: '#F5F0E8',
            marginBottom: '5px',
            transition: 'all 0.3s ease',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          style={{
            display: 'block',
            width: '20px',
            height: '2px',
            background: '#F5F0E8',
            transition: 'all 0.3s ease',
            transform: open ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
          }}
        />
      </button>

      {/* Dropdown menu */}
      <div
        style={{
          position: 'absolute',
          top: '56px',
          right: 0,
          minWidth: '180px',
          background: 'rgba(61,9,6,0.96)',
          border: '1px solid rgba(210,105,30,0.3)',
          borderRadius: '4px',
          backdropFilter: 'blur(12px)',
          overflow: 'hidden',
          maxHeight: open ? '400px' : '0',
          opacity: open ? 1 : 0,
          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
          pointerEvents: open ? 'all' : 'none',
        }}
      >
        {navLinks.map((link, i) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="font-maven block px-6 py-4"
              style={{
                color: isActive ? '#D2691E' : '#F5F0E8',
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                borderBottom: i < navLinks.length - 1 ? '1px solid rgba(210,105,30,0.15)' : 'none',
                transition: 'color 0.2s ease, background 0.2s ease',
                background: isActive ? 'rgba(210,105,30,0.1)' : 'transparent',
              }}
              onMouseEnter={e => {
                if (!isActive) {
                  (e.target as HTMLElement).style.color = '#D2691E'
                  ;(e.target as HTMLElement).style.background = 'rgba(210,105,30,0.08)'
                }
              }}
              onMouseLeave={e => {
                if (!isActive) {
                  (e.target as HTMLElement).style.color = '#F5F0E8'
                  ;(e.target as HTMLElement).style.background = 'transparent'
                }
              }}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 -z-10"
          onClick={() => setOpen(false)}
        />
      )}
    </nav>
  )
}
