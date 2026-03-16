'use client'

import { motion } from 'framer-motion'
import PageLayout from '@/components/PageLayout'

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
  {
    title: 'Food',
    emoji: '🥐',
    items: [
      { name: 'Butter Croissant', description: 'Baked fresh daily, house butter', price: '$5.50' },
      { name: 'Banana Bread', description: 'Toasted with whipped butter', price: '$6.00' },
      { name: 'Avocado Toast', description: 'Sourdough, chilli flakes, lemon', price: '$14.00' },
      { name: 'Seasonal Pastry', description: 'Ask us what\'s in today', price: '$6.50' },
      { name: 'Granola Bowl', description: 'House granola, yoghurt, seasonal fruit', price: '$13.00' },
    ],
  },
]

export default function MenuPage() {
  return (
    <PageLayout title="Menu">
      <div className="space-y-16 pb-16">
        {menuSections.map((section, si) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * si }}
          >
            {/* Section header */}
            <div className="flex items-center gap-4 mb-6">
              <span style={{ fontSize: '1.4rem' }}>{section.emoji}</span>
              <h2
                className="font-maven"
                style={{
                  fontSize: 'clamp(1.1rem, 3vw, 1.6rem)',
                  color: '#D2691E',
                  letterSpacing: '0.1em',
                }}
              >
                {section.title}
              </h2>
              <div style={{ flex: 1, height: '1px', background: 'rgba(210,105,30,0.2)', marginLeft: '8px' }} />
            </div>

            {/* Items grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {section.items.map((item, ii) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * ii + 0.1 * si }}
                  className="flex items-start justify-between py-4 px-0 group"
                  style={{
                    borderBottom: '1px solid rgba(245,240,232,0.07)',
                  }}
                >
                  <div style={{ flex: 1, paddingRight: '24px' }}>
                    <div
                      className="font-maven"
                      style={{
                        fontSize: '0.9rem',
                        color: '#F5F0E8',
                        letterSpacing: '0.06em',
                        marginBottom: '4px',
                        transition: 'color 0.2s ease',
                      }}
                    >
                      {item.name}
                    </div>
                    <div
                      style={{
                        fontSize: '0.78rem',
                        color: 'rgba(245,240,232,0.45)',
                        fontStyle: 'italic',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {item.description}
                    </div>
                  </div>
                  <div
                    className="font-maven"
                    style={{
                      fontSize: '0.85rem',
                      color: '#D2691E',
                      letterSpacing: '0.05em',
                      flexShrink: 0,
                      paddingTop: '2px',
                    }}
                  >
                    {item.price}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

        {/* Note */}
        <p
          style={{
            fontSize: '0.75rem',
            color: 'rgba(245,240,232,0.3)',
            fontStyle: 'italic',
            letterSpacing: '0.05em',
            paddingTop: '1rem',
          }}
        >
          * Prices are placeholder. Menu and pricing subject to change. Ask our team about today&apos;s specials.
        </p>
      </div>
    </PageLayout>
  )
}
