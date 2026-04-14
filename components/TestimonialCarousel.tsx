'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Testimonial {
  id: number
  name: string
  role: string
  quote: string
  rating: number
  emoji: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setCurrent(
      (prev) => (prev + newDirection + testimonials.length) % testimonials.length,
    )
  }

  const getVisibleTestimonials = () => {
    const visible = []
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(current + i) % testimonials.length])
    }
    return visible
  }

  return (
    <div className="w-full py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {getVisibleTestimonials().map((testimonial, idx) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group"
          >
            <div className="h-full p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl">{testimonial.emoji}</span>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-primary">⭐</span>
                  ))}
                </div>
              </div>
              <p className="text-muted-foreground mb-6 italic font-poppins leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-border pt-4">
                <h4 className="font-bold text-white font-poppins">{testimonial.name}</h4>
                <p className="text-sm text-primary font-poppins">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-4 mt-8">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(-1)}
          className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </motion.button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`h-2 rounded-full transition-all ${
                i === current ? 'bg-primary w-8' : 'bg-primary/30 w-2 hover:bg-primary/50'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => paginate(1)}
          className="p-3 rounded-full bg-primary/20 hover:bg-primary/40 text-primary transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.button>
      </div>
    </div>
  )
}
