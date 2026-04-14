'use client'

import { motion } from 'framer-motion'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
}: AnimatedTextProps) {
  const words = text.split(' ')

  return (
    <div className={className}>
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{
            duration: 0.6,
            delay: delay + index * 0.05,
            ease: 'easeOut',
          }}
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </div>
  )
}
