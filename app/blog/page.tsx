'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
}

export default function BlogPage() {
  const articles = [
    {
      slug: 'efa-players-win-national-championship',
      emoji: '🏆',
      title: 'EFA Players Win National Championship!',
      date: 'December 15, 2024',
      category: 'Achievement',
      excerpt: 'Our academy team brings home the prestigious national youth football championship in an exciting final match.',
      image: '/team.jpg',
      content:
        'In an thrilling display of skill and determination, Elite Football Academy players secured victory in the national youth championship. The team demonstrated exceptional teamwork and technical excellence throughout the tournament.',
    },
    {
      slug: 'success-story-academy-to-professional',
      emoji: '🌟',
      title: 'Success Story: From Academy to Professional',
      date: 'December 10, 2024',
      category: 'Success Story',
      excerpt: 'Meet Ahmed Hassan, who graduated from our program and now plays for a top professional league.',
      image: '/coaching.jpg',
      content:
        'Ahmed joined EFA three years ago as a promising young talent. Through dedication and excellent coaching, he has transformed into a professional player, inspiring current students at the academy.',
    },
    {
      slug: 'new-advanced-training-facilities',
      emoji: '🚀',
      title: 'New Advanced Training Facilities Opened',
      date: 'December 5, 2024',
      category: 'Facilities',
      excerpt: 'Elite Football Academy unveils state-of-the-art gym and recovery center with latest technology.',
      image: '/facilities.jpg',
      content:
        'Our newly expanded facilities now include an advanced gym with modern equipment, recovery technology, and dedicated spaces for sports science research, ensuring players have access to world-class training environments.',
    },
    {
      slug: 'international-scout-visit',
      emoji: '👥',
      title: 'International Scout Visit Highlights Academy',
      date: 'November 28, 2024',
      category: 'News',
      excerpt: 'International talent scouts visit EFA, impressed by the caliber of training and player development.',
      image: '/training-field.jpg',
      content:
        'Scouts from international football clubs visited our academy this week, praising our coaching methods and player development programs. Several players have been identified for potential international opportunities.',
    },
    {
      slug: 'performance-analytics-future-football',
      emoji: '📊',
      title: 'Performance Analytics: The Future of Football Training',
      date: 'November 22, 2024',
      category: 'Training',
      excerpt: 'Exploring how EFA uses data and analytics to optimize player performance and development.',
      image: '/coaching.jpg',
      content:
        'Elite Football Academy now employs advanced performance analytics to track every aspect of player development. From biometric data to tactical positioning, technology helps us create personalized training programs.',
    },
    {
      slug: 'certificate-programs-available',
      emoji: '🎓',
      title: 'Certificate Programs Now Available',
      date: 'November 15, 2024',
      category: 'Programs',
      excerpt: 'New coaching certification and advanced training programs launched for aspiring football professionals.',
      image: '/facilities.jpg',
      content:
        'Recognizing the need for comprehensive development, EFA now offers advanced certificate programs in coaching, sports psychology, and football management alongside our player training programs.',
    },
  ]

  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner title="Latest News & Blog" subtitle="📰 Updates from Elite Football Academy" emoji="📰" />

      <div className="pt-16" />

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">📚 Latest Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-poppins">
              Stay updated with the latest news, success stories, and insights from Elite Football Academy.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {articles.map((article, index) => (
              <AnimatedCard key={index} index={index}>
                <Link href={`/blog/${article.slug}`}>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 cursor-pointer h-full"
                  >
                    {/* Image */}
                    <div className="md:col-span-1">
                      <div className="relative h-48 rounded-lg overflow-hidden border border-primary/20">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <div className="absolute top-4 right-4 text-4xl">{article.emoji}</div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-semibold font-poppins">
                            {article.category}
                          </span>
                          <span className="text-sm text-muted-foreground font-poppins">📅 {article.date}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-3 font-poppins hover:text-primary transition-colors">{article.title}</h3>

                        <p className="text-muted-foreground mb-4 leading-relaxed font-poppins">{article.excerpt}</p>

                        <p className="text-muted-foreground text-sm font-poppins">{article.content.substring(0, 100)}...</p>
                      </div>

                      <motion.div
                        whileHover={{ x: 5 }}
                        className="w-fit flex items-center gap-2 text-primary hover:text-accent transition-colors duration-300 font-semibold mt-4 font-poppins"
                      >
                        Read More →
                      </motion.div>
                    </div>
                  </motion.div>
                </Link>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">🏷️ Article Categories</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { emoji: '🏆', name: 'Achievements', count: '12 articles' },
              { emoji: '📚', name: 'Training Tips', count: '18 articles' },
              { emoji: '⭐', name: 'Success Stories', count: '8 articles' },
              { emoji: '🏗️', name: 'Facilities', count: '6 articles' },
              { emoji: '🎓', name: 'Programs', count: '14 articles' },
              { emoji: '📰', name: 'News & Updates', count: '25 articles' },
            ].map((category, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 text-center group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {category.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">{category.name}</h3>
                  <p className="text-sm text-muted-foreground font-poppins">{category.count}</p>
                </motion.button>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/30 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-poppins">✉️ Subscribe to Our Newsletter</h2>

            <p className="text-muted-foreground mb-8 font-poppins">
              Get the latest news, training tips, and success stories delivered to your inbox monthly.
            </p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-white placeholder-muted-foreground focus:border-primary focus:outline-none transition-colors duration-300 font-poppins"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Subscribe 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
