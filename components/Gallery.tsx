'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import AnimatedCard from './AnimatedCard'

const images = [
  '/Players/1.jpg',
  '/Players/2.jpg',
  '/Players/3.jpg',
  '/Players/4.jpg',
  '/Players/5.jpg',
  '/Players/6.jpg',
  '/Players/7.jpg',
]

export default function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
            🎬 Academy in Action
          </h2>
          <p className="text-lg text-muted-foreground font-poppins">Experience the intensity, passion, and skill of our elite players</p>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Featured Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden border-2 border-primary/20 shadow-2xl group"
          >
            <video
              src="/Players/Website_Video.mp4"
              controls
              autoPlay
              muted
              loop
              className="w-full aspect-video object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end p-8">
              <p className="text-white font-semibold text-lg font-poppins">Training Session Highlights</p>
            </div>
          </motion.div>

          {/* Grid of Images */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {images.slice(0, 6).map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden border border-border group"
              >
                <Image
                  src={img}
                  alt={`Player ${i + 1}`}
                  fill
                  className="object-cover transition-all duration-500"
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Banner Image (Full Width) */}
        {images[6] && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="relative h-64 md:h-96 rounded-2xl overflow-hidden border-2 border-primary/20 group"
          >
            <Image
              src={images[6]}
              alt="Elite Performance"
              fill
              className="object-cover transition-all duration-700"
            />
          </motion.div>
        )}
      </div>
    </section>
  )
}
