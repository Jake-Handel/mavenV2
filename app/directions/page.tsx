'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'

export default function DirectionsPage() {
  return (
    <PageLayout title="Directions">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">

        {/* Left — Address & transport info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Address */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              ADDRESS
            </h3>
            <address style={{ fontStyle: 'normal', color: 'rgba(245,240,232,0.85)', lineHeight: 2, fontSize: '1rem' }}>
              123 Placeholder Street<br />
              Canberra ACT 2601<br />
              Australia
            </address>
            <a
              href="https://maps.google.com/?q=Canberra+ACT+2601"
              target="_blank"
              rel="noopener noreferrer"
              className="font-maven inline-flex items-center gap-2 mt-4"
              style={{
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                color: '#D2691E',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.7')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
            >
              OPEN IN GOOGLE MAPS →
            </a>
          </div>

          {/* Parking */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              PARKING
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              Street parking is available on Placeholder Street and surrounding streets. 
              A public car park is located one block north on Example Avenue — 
              the first two hours are free.
            </p>
          </div>

          {/* Public Transport */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              PUBLIC TRANSPORT
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.65)', lineHeight: 1.8, fontSize: '0.9rem' }}>
              We&apos;re a 5-minute walk from the City Bus Interchange. 
              Buses 1, 3, and 7 stop directly on Placeholder Street.
            </p>
          </div>

          {/* Hours reminder */}
          <div
            style={{
              padding: '20px 24px',
              border: '1px solid rgba(210,105,30,0.2)',
              background: 'rgba(0,0,0,0.2)',
            }}
          >
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              TRADING HOURS
            </h3>
            <div style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 2.2, fontSize: '0.88rem' }}>
              {[
                ['Mon – Fri', '7:00 – 16:00'],
                ['Saturday', '8:00 – 15:00'],
                ['Sunday', '8:00 – 14:00'],
              ].map(([day, hours]) => (
                <div key={day} className="flex justify-between" style={{ maxWidth: '240px' }}>
                  <span>{day}</span>
                  <span style={{ color: '#F5F0E8' }}>{hours}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right — Google Maps embed */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col"
        >
          <h3
            className="font-maven mb-4"
            style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
          >
            FIND US
          </h3>

          <div
            style={{
              flex: 1,
              minHeight: '380px',
              border: '1px solid rgba(210,105,30,0.25)',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            {/* TODO: Replace src with your actual Google Maps embed URL for your address */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52327.39950579069!2d149.0785!3d-35.2809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d69b05c9021%3A0x500ea6ea7695660!2sCanberra%20ACT%202601!5e0!3m2!1sen!2sau!4v1234567890"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.85)',
                minHeight: '380px',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Maven Coffee location map"
            />
          </div>

          <p
            style={{
              marginTop: '10px',
              fontSize: '0.72rem',
              color: 'rgba(245,240,232,0.3)',
              fontStyle: 'italic',
              textAlign: 'right',
            }}
          >
            * Map location is a placeholder — update the embed URL with your actual address.
          </p>
        </motion.div>
      </div>
    </PageLayout>
  )
}
