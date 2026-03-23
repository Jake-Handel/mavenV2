'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'
import TopBar from '@/components/Topbar'

const inputStyle = {
  width: '100%',
  background: 'rgba(0,0,0,0.3)',
  border: '1px solid rgba(210,105,30,0.25)',
  borderRadius: '2px',
  padding: '12px 16px',
  color: '#F5F0E8',
  fontSize: '0.9rem',
  fontFamily: 'Georgia, serif',
  outline: 'none',
  transition: 'border-color 0.2s ease',
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = () => {
    const subject = encodeURIComponent(`Message from ${form.name} via Maven website`)
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`)
    window.location.href = `mailto:contact@maven-coffee.com?subject=${subject}&body=${body}`
  }

  return (
    <PageLayout title="Contact">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 pb-16">

        {/* Left — Contact details */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-10"
        >
          {/* Visit */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              VISIT US
            </h3>
            <p style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 1.8, fontSize: '0.95rem' }}>
              18 Marcus Clarke St<br />
              Canberra ACT 2601<br />
              Australia
            </p>
          </div>

          {/* Hours */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              HOURS
            </h3>
            <div style={{ color: 'rgba(245,240,232,0.75)', lineHeight: 2, fontSize: '0.9rem' }}>
              <div className="flex justify-between" style={{ maxWidth: '220px' }}>
                <span>Mon – Fri</span><span style={{ color: '#F5F0E8' }}>7:30 – 12:00</span>
              </div>
              <div className="flex justify-between" style={{ maxWidth: '220px' }}>
                <span>Weekends</span><span style={{ color: '#F5F0E8' }}>Closed</span>
              </div>
            </div>
          </div>

          {/* Get in touch */}
          <div>
            <h3
              className="font-maven mb-4"
              style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
            >
              GET IN TOUCH
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@maven-coffee.com"
                className="flex items-center gap-3 group"
                style={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D2691E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
              >
                <span style={{ fontSize: '1rem' }}>✉</span>
                contact@maven-coffee.com
              </a>
              <a
                href="tel:+61406830768"
                className="flex items-center gap-3 group"
                style={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D2691E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
              >
                <span style={{ fontSize: '1rem' }}>☎</span>
                0406 830 768
              </a>
              <a
                href="https://www.instagram.com/maven_cbr/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
                style={{ color: 'rgba(245,240,232,0.75)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#D2691E')}
                onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.75)')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                @mavencoffee
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right — mailto form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h3
            className="font-maven mb-6"
            style={{ fontSize: '0.7rem', letterSpacing: '0.25em', color: '#D2691E' }}
          >
            SEND A MESSAGE
          </h3>

          <div className="space-y-5">
            <div>
              <label
                className="font-maven block mb-2"
                style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.5)' }}
              >
                YOUR NAME
              </label>
              <input
                type="text"
                value={form.name}
                onChange={e => setForm({ ...form, name: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'rgba(210,105,30,0.7)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(210,105,30,0.25)')}
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                className="font-maven block mb-2"
                style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.5)' }}
              >
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={form.email}
                onChange={e => setForm({ ...form, email: e.target.value })}
                style={inputStyle}
                onFocus={e => (e.target.style.borderColor = 'rgba(210,105,30,0.7)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(210,105,30,0.25)')}
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                className="font-maven block mb-2"
                style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(245,240,232,0.5)' }}
              >
                MESSAGE
              </label>
              <textarea
                value={form.message}
                onChange={e => setForm({ ...form, message: e.target.value })}
                rows={6}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => (e.target.style.borderColor = 'rgba(210,105,30,0.7)')}
                onBlur={e => (e.target.style.borderColor = 'rgba(210,105,30,0.25)')}
                placeholder="How can we help?"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="font-maven w-full"
              style={{
                padding: '14px',
                background: 'rgba(210,105,30,0.15)',
                border: '1px solid rgba(210,105,30,0.5)',
                color: '#F5F0E8',
                fontSize: '0.8rem',
                letterSpacing: '0.2em',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(210,105,30,0.3)'
                el.style.borderColor = '#D2691E'
                el.style.color = '#D2691E'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget
                el.style.background = 'rgba(210,105,30,0.15)'
                el.style.borderColor = 'rgba(210,105,30,0.5)'
                el.style.color = '#F5F0E8'
              }}
            >
              SEND MESSAGE
            </button>
            <p
              style={{
                fontSize: '0.72rem',
                color: 'rgba(245,240,232,0.3)',
                textAlign: 'center',
                fontStyle: 'italic',
              }}
            >
              Opens your default mail client
            </p>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  )
}
