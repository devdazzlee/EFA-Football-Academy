'use client'

import { motion } from 'framer-motion'

interface TimelineItem {
  year: string
  emoji: string
  title: string
  description: string
}

interface TimelineProps {
  items: TimelineItem[]
}

export default function Timeline({ items }: TimelineProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      className="space-y-8"
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          variants={itemVariants}
          className="relative flex gap-6 items-start"
        >
          {/* Vertical Line */}
          {i !== items.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="absolute left-8 top-20 w-1 h-12 bg-gradient-to-b from-primary to-primary/20 origin-top"
            />
          )}

          {/* Year Badge */}
          <motion.div
            whileHover={{ scale: 1.15, rotate: 5 }}
            className="flex-shrink-0"
          >
            <div className="flex items-center justify-center h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/60 text-accent-foreground font-bold text-lg font-poppins shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
              {item.year}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            whileHover={{ x: 5 }}
            className="flex-grow pt-2"
          >
            <div className="p-6 rounded-xl bg-gradient-to-br from-card to-secondary/20 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-start gap-3 mb-3">
                <motion.span
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 200, delay: i * 0.1 + 0.2 }}
                  className="text-3xl"
                >
                  {item.emoji}
                </motion.span>
                <h3 className="text-lg font-bold text-white font-poppins pt-1">{item.title}</h3>
              </div>
              <p className="text-muted-foreground font-poppins ml-12">{item.description}</p>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
