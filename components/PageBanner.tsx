'use client'

import { motion } from 'framer-motion'

interface PageBannerProps {
  title: string
  subtitle?: string
  emoji?: string
  image?: string
}

export default function PageBanner({
  title,
  subtitle,
  emoji = '⚽',
  image,
}: PageBannerProps) {
  return (
    <div className="relative w-full h-96 overflow-hidden bg-gradient-to-br from-secondary via-background to-background mt-20">
      {image && (
        <div
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

      <motion.div
        className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div
          className="text-6xl sm:text-7xl md:text-8xl mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 100 }}
        >
          {emoji}
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center font-poppins mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {title}
        </motion.h1>

        {subtitle && (
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-primary font-poppins max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {subtitle}
          </motion.p>
        )}

        <motion.div
          className="mt-8 flex gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          <div
            className="w-3 h-3 rounded-full bg-primary animate-pulse"
            style={{ animationDelay: '0.2s' }}
          />
          <div
            className="w-3 h-3 rounded-full bg-primary animate-pulse"
            style={{ animationDelay: '0.4s' }}
          />
        </motion.div>
      </motion.div>
    </div>
  )
}
