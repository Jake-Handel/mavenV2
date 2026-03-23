'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'
import TopBar from '@/components/Topbar'

export default function DirectionsPage() {
  return (
    <PageLayout title="Directions">
      <div className="pb-16">
        {/* Top row: Address and Hours */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          
          {/* Left — Address */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
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
                18 Marcus Clarke St<br />
                Canberra ACT 2601<br />
                Australia
              </address>
              <a
                href="https://maps.app.goo.gl/FNNKr2sjJPj9A2gu5"
                target="_blank"
                rel="noopener noreferrer"
                className="font-maven inline-flex items-center gap-2 mt-4"
                style={{
                  fontSize: '0.92rem',
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
          </motion.div>

          {/* Right — Hours */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
                  ['Mon – Fri', '7:30 – 12:00'],
                  ['Weekends', 'Closed'],
                  ['Public Holidays', 'Closed']
                ].map(([day, hours]) => (
                  <div key={day} className="flex justify-between" style={{ maxWidth: '240px' }}>
                    <span>{day}</span>
                    <span style={{ color: '#F5F0E8' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom: Full-width Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          style={{
            height: 'calc(40vh)', // Adjust height to leave space for top content
            border: '1px solid rgba(210,105,30,0.25)',
            overflow: 'hidden',
            position: 'relative',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7852.578013860067!2d149.12106864358287!3d-35.280951430906896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b164d9a37aea4cf%3A0x6b30c24d2874ad80!2sMaven!5e1!3m2!1sen!2sau!4v1773697253968!5m2!1sen!2sau"
            style={{
              border: 0,
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </div>
    </PageLayout>
  )
}