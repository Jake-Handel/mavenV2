'use client'

import Image from 'next/image'
import SemicircleNav from '@/components/SemicircleNav'
import MobileNav from '@/components/MobileNav'
import TopBar from '@/components/Topbar'

export default function HomePage() {
  return (
    <main
      className="grain relative min-h-screen overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      <TopBar />

      <SemicircleNav />

      <MobileNav />

      {/* ── Hero background ── */}
      <div className="absolute inset-0">

        {/* Mobile */}
        <div className="absolute inset-0 block md:hidden">
          <Image
            src="/images/phoneCoffee.jpg"
            alt="Maven Coffee Shop"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
            quality={85}
            priority
          />
        </div>

        {/* Desktop */}
        <div className="absolute inset-0 hidden md:block">
          <Image
            src="/images/desktopCoffee.png"
            alt="Maven Coffee Shop"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
              objectPosition: 'left center',
            }}
            quality={90}
            priority
          />
        </div>

        {/* Darkening overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(10,10,10,0.60) 0%, rgba(26,10,8,0.28) 50%, rgba(10,10,10,0.50) 100%)',
          }}
        />
      </div>

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 35% 50%, transparent 25%, rgba(0,0,0,0.60) 100%)',
        }}
      />

      {/* Accent lines — top-left */}
      <div className="absolute top-8 left-8 pointer-events-none" style={{ opacity: 0.25 }}>
        <div style={{ width: '60px', height: '1px', background: '#D2691E', marginBottom: '8px' }} />
        <div style={{ width: '1px', height: '60px', background: '#D2691E' }} />
      </div>

      {/* Accent lines — bottom-left */}
      <div className="absolute bottom-8 left-8 pointer-events-none" style={{ opacity: 0.25 }}>
        <div style={{ width: '1px', height: '60px', background: '#D2691E', marginBottom: '8px' }} />
        <div style={{ width: '60px', height: '1px', background: '#D2691E' }} />
      </div>
    </main>
  )
}