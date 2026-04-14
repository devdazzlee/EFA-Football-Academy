'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface Stat {
  number: number
  label: string
  icon: string
  description: string
  suffix?: string
}

interface StatsCounterProps {
  stats: Stat[]
}

export default function StatsCounter({ stats }: StatsCounterProps) {
  const [isVisible, setIsVisible] = useState(false)

  const Counter = ({ from, to, suffix = '' }: { from: number; to: number; suffix?: string }) => {
    const [count, setCount] = useState(from)

    useEffect(() => {
      if (!isVisible) return

      const duration = 2000
      const increment = (to - from) / (duration / 50)
      let current = from

      const timer = setInterval(() => {
        current += increment
        if (current >= to) {
          setCount(to)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, 50)

      return () => clearInterval(timer)
    }, [isVisible])

    return (
      <>
        {count}
        {suffix}
      </>
    )
  }

  return (
    <motion.div
      onViewportEnter={() => setIsVisible(true)}
      viewport={{ once: true, margin: '-100px' }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {stats.map((stat, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
          <motion.div
            whileHover={{ y: -10 }}
            className="relative p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 text-center h-full flex flex-col justify-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: 'spring', stiffness: 200, delay: i * 0.15 }}
              className="text-6xl mb-4"
            >
              {stat.icon}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.15 + 0.3 }}
              className="text-5xl font-bold text-primary mb-2 font-poppins"
            >
              {isVisible ? <Counter from={0} to={stat.number} suffix={stat.suffix} /> : 0}
            </motion.div>

            <p className="text-lg text-foreground font-bold mb-2 font-poppins">{stat.label}</p>
            <p className="text-sm text-muted-foreground font-poppins">{stat.description}</p>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}
