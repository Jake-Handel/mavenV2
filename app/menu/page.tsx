'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'
import TopBar from '@/components/Topbar'

const menuSections = [
  {
    title: 'Espresso Bar',
    emoji: '☕',
    items: [
      { name: 'Espresso', description: 'Single origin, seasonal rotation', price: '$4.50' },
      { name: 'Macchiato', description: 'Espresso with a touch of steamed milk', price: '$4.50' },
      { name: 'Flat White', description: 'Double ristretto, velvety microfoam', price: '$5.50' },
      { name: 'Cappuccino', description: 'Balanced espresso with thick foam', price: '$5.50' },
      { name: 'Latte', description: 'Smooth and silky, house blend', price: '$5.50' },
      { name: 'Long Black', description: 'Double espresso over hot water', price: '$5.00' },
      { name: 'Cold Brew', description: '18-hour steep, served over ice', price: '$6.50' },
      { name: 'Filter Coffee', description: 'Batch brew, rotates daily', price: '$5.00' },
    ],
  },
  {
    title: 'Alternatives',
    emoji: '🌿',
    items: [
      { name: 'Oat Milk', description: 'Add to any drink', price: '+$0.80' },
      { name: 'Almond Milk', description: 'Add to any drink', price: '+$0.80' },
      { name: 'Soy Milk', description: 'Add to any drink', price: '+$0.80' },
      { name: 'Matcha Latte', description: 'Ceremonial grade, oat milk', price: '$7.00' },
      { name: 'Chai Latte', description: 'House spiced, steamed milk', price: '$6.50' },
    ],
  },
]

export default function MenuPage() {
  return (
    <PageLayout title="Menu">
      <div className="flex-1 overflow-y-auto pb-8">
        <div className="space-y-8">
          {menuSections.map((section, si) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 * si }}
            >
              {/* Section header */}
              <div className="flex items-center gap-3 mb-4">
                <span style={{ fontSize: '1.3rem' }}>{section.emoji}</span>
                <h2
                  className="font-maven"
                  style={{
                    fontSize: 'clamp(0.9rem, 2vw, 1.3rem)',
                    color: '#D2691E',
                    letterSpacing: '0.08em',
                  }}
                >
                  {section.title}
                </h2>
                <div style={{ flex: 1, height: '1px', background: 'rgba(210,105,30,0.2)', marginLeft: '6px' }} />
              </div>

              {/* Items grid - more compact */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {section.items.map((item, ii) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.02 * ii + 0.05 * si }}
                    className="py-2 px-3 group"
                    style={{
                      borderBottom: '1px solid rgba(245,240,232,0.05)',
                    }}
                  >
                    <div className="flex items-start justify-between">
                      <div style={{ flex: 1, paddingRight: '12px' }}>
                        <div
                          className="font-maven"
                          style={{
                            fontSize: '1rem',
                            color: '#F5F0E8',
                            letterSpacing: '0.05em',
                            marginBottom: '2px',
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {item.name}
                        </div>
                        <div
                          style={{
                            fontSize: '0.65rem',
                            color: 'rgba(245,240,232,0.4)',
                            fontStyle: 'italic',
                            letterSpacing: '0.01em',
                            lineHeight: 1.3,
                          }}
                        >
                          {item.description}
                        </div>
                      </div>
                      <div
                        className="font-maven flex-shrink-0"
                        style={{
                          fontSize: '0.85rem',
                          color: '#F5F0E8',
                          letterSpacing: '0.04em',
                          paddingTop: '1px',
                        }}
                      >
                        {item.price}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
