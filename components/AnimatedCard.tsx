'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  delay?: number
  index?: number
}

export default function AnimatedCard({
  children,
  delay = 0,
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: delay || index * 0.1,
        ease: 'easeOut',
      }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className="h-full"
    >
      {children}
    </motion.div>
  )
}
