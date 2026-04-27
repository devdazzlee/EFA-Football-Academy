'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import AnimatedCard from '@/components/AnimatedCard'
import ImageCarousel from '@/components/ImageCarousel'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import StatsCounter from '@/components/StatsCounter'
import Footer from '@/components/Footer'
import Gallery from '@/components/Gallery'
import Image from 'next/image'

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

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      {/* Hero Banner */}
      <PageBanner
        title="Elite Football Academy"
        subtitle="🏆 Shape Tomorrow's Champions Today"
        emoji="⚽"
        image="/training-field.jpg"
      />

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/5">
        <div className="max-w-7xl mx-auto">
          <StatsCounter
            stats={[
              { number: 500, label: 'Players Trained', icon: '🎓', description: 'Success Stories' },
              { number: 20, label: 'Expert Coaches', icon: '👨‍🏫', description: 'Professional Team' },
              { number: 7, label: 'Years', icon: '🏅', description: 'of Excellence' },
              { number: 95, label: 'Placement Rate', icon: '📈', description: 'Professional League', suffix: '%' },
            ]}
          />
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/team.jpg"
                  alt="Elite Team"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6 font-poppins">
                🎯 Welcome to Elite Football Academy
              </h2>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Elite Football Academy is Pakistan's premier football development center dedicated to nurturing passionate players of all ages. With over 7 years of excellence, we have transformed hundreds of passionate players into professional athletes competing at national and international levels.
              </p>
              <p className="text-lg text-muted-foreground mb-6 font-poppins leading-relaxed">
                Our commitment to excellence, combined with world-class facilities and expert coaching, ensures that every player receives the best possible training and mentorship to achieve their football dreams.
              </p>
              <motion.a
                href="/about"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Learn More About Us →
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose EFA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              🌟 Why Choose Elite Football Academy?
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Discover what makes us the best choice for young footballers</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { emoji: '🏃‍♂️', title: 'Professional Training', desc: 'World-class coaching techniques with personalized development plans for each player' },
              { emoji: '🎯', title: 'Career Development', desc: 'Clear pathway to professional football leagues with guaranteed opportunities' },
              { emoji: '👥', title: 'Elite Community', desc: 'Network with passionate young athletes and build lifelong friendships' },
              { emoji: '🏗️', title: 'Modern Facilities', desc: 'State-of-the-art training grounds, gyms, and recovery centers' },
              { emoji: '🧠', title: 'Holistic Growth', desc: 'Mental strength development and advanced tactical intelligence training' },
              { emoji: '⭐', title: 'Proven Success', desc: '95% player placement rate in professional leagues' },
            ].map((item, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="h-full p-8 rounded-xl bg-card border border-border hover:border-primary hover:shadow-lg hover:shadow-primary/20 transition-all duration-300">
                  <div className="text-5xl mb-4">{item.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-3 font-poppins">{item.title}</h3>
                  <p className="text-muted-foreground font-poppins">{item.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Training Programs Overview */}
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
              📚 Training Programs
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Comprehensive programs designed for different playing positions</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { emoji: '🥅', name: 'Goalkeeper Program', features: '• Reflexes & Positioning\n• Shot Stopping\n• Distribution' },
              { emoji: '🛡️', name: 'Defender Training', features: '• Defensive Tactics\n• Ball Control\n• Positioning' },
              { emoji: '⚙️', name: 'Midfielder Course', features: '• Game Vision\n• Passing Accuracy\n• Ball Control' },
              { emoji: '⚡', name: 'Forward Academy', features: '• Shooting Techniques\n• Positioning\n• Game Awareness' },
            ].map((prog, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-card to-secondary/30 border border-primary/20 hover:border-primary transition-all duration-300 h-full group"
                >
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {prog.emoji}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-poppins">{prog.name}</h3>
                  <p className="text-sm text-muted-foreground font-poppins whitespace-pre-line">{prog.features}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/programs"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
            >
              Explore All Programs in Detail →
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Training Gallery Carousel */}
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
              📸 Our Training Facilities & Activities
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Explore our world-class training environment</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <ImageCarousel
            images={[
              {
                src: '/training-field.jpg',
                alt: 'Training Field',
                title: 'Professional Training Fields',
                description: 'State-of-the-art grass and artificial pitches for optimal player development',
              },
              {
                src: '/coaching.jpg',
                alt: 'Coaching Session',
                title: 'Expert Coaching Sessions',
                description: 'Personalized training with our world-class coaching staff',
              },
              {
                src: '/team.jpg',
                alt: 'Team Photo',
                title: 'Elite Team Environment',
                description: 'Training alongside the best young football talents in Pakistan',
              },
              {
                src: '/facilities.jpg',
                alt: 'Facilities',
                title: 'Modern Facilities',
                description: 'Comprehensive facilities including gym, recovery center, and medical support',
              },
            ]}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Coaching Philosophy */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              👨‍🏫 Our Coaching Philosophy
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Proven methodologies that develop champions</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {[
              {
                title: '📖 Individual Development Plans',
                desc: 'Each player receives a customized training program tailored to their strengths, weaknesses, and career goals.',
              },
              {
                title: '🔄 Continuous Assessment',
                desc: 'Regular performance evaluations and feedback sessions ensure consistent progress and improvement.',
              },
              {
                title: '💡 Tactical Intelligence',
                desc: 'In-depth analysis of game strategies and opponent analysis to develop better decision-making skills.',
              },
              {
                title: '🏋️ Strength & Conditioning',
                desc: 'Scientific approach to fitness training ensuring peak physical condition and injury prevention.',
              },
              {
                title: '🧠 Mental Resilience',
                desc: 'Psychological training to develop confidence, focus, and resilience under pressure.',
              },
              {
                title: '🌍 International Standards',
                desc: 'Training aligned with international football standards and professional league requirements.',
              },
            ].map((philosophy, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-4 font-poppins">{philosophy.title}</h3>
                  <p className="text-muted-foreground font-poppins">{philosophy.desc}</p>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Facilities Showcase */}
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
              🏗️ World-Class Facilities
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Everything our players need to excel and succeed</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden border-2 border-primary/20">
                <Image
                  src="/facilities.jpg"
                  alt="Modern Facilities"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">Premium Training Environment</h3>
              <ul className="space-y-4 font-poppins">
                {[
                  '⚽ Professional grass and artificial pitches',
                  '💪 Modern gym and fitness center with latest equipment',
                  '🩺 Medical and recovery facilities with physiotherapy',
                  '🏢 Residential accommodation available for all players',
                  '🍎 Professional nutrition guidance and meal planning',
                  '📊 Advanced analytics and performance tracking systems',
                  '🎮 Video analysis center for game study',
                  '🌙 Recovery and wellness facilities',
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Training Methodology */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              🎓 Our Training Methodology
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Advanced techniques proven to develop elite athletes</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { step: '01', title: 'Assessment', desc: 'Initial evaluation of player skills, fitness, and potential' },
              { step: '02', title: 'Planning', desc: 'Customized training program based on goals and position' },
              { step: '03', title: 'Training', desc: 'Intensive daily sessions focusing on skill and fitness' },
              { step: '04', title: 'Monitoring', desc: 'Continuous tracking of progress and performance metrics' },
              { step: '05', title: 'Feedback', desc: 'Regular coaching sessions with constructive feedback' },
              { step: '06', title: 'Competition', desc: 'Match play and competitive experience preparation' },
            ].map((method, i) => (
              <AnimatedCard key={i} index={i}>
                <div className="p-6 rounded-lg bg-gradient-to-br from-card to-secondary/30 border border-primary/20 hover:border-primary transition-all duration-300 h-full">
                  <div className="text-4xl font-bold text-primary mb-3 font-poppins">{method.step}</div>
                  <h4 className="text-lg font-bold text-white mb-3 font-poppins">{method.title}</h4>
                  <p className="text-muted-foreground font-poppins">{method.desc}</p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Success Stories with Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              💬 Success Stories from Our Alumni
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Hear from players who transformed their careers at EFA</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <TestimonialCarousel
            testimonials={[
              {
                id: 1,
                name: 'Ahmed Hassan',
                role: 'Professional Player - National Team',
                quote: 'EFA transformed my football career. The coaching here is world-class and the facilities are incredible!',
                rating: 5,
                emoji: '⚽',
              },
              {
                id: 2,
                name: 'Fatima Khan',
                role: 'International Athlete - Dubai Club',
                quote: 'Best decision of my life. EFA gave me the foundation and confidence to compete at the highest level.',
                rating: 5,
                emoji: '🌟',
              },
              {
                id: 3,
                name: 'Ali Malik',
                role: 'Professional Goalkeeper - Premier League',
                quote: 'The personalized coaching and mental strength training at EFA set me apart from other players.',
                rating: 5,
                emoji: '🥅',
              },
              {
                id: 4,
                name: 'Sophia Williams',
                role: 'Football Scholar - International University',
                quote: 'EFA provided me with excellent training and helped me secure a scholarship abroad.',
                rating: 5,
                emoji: '🎓',
              },
              {
                id: 5,
                name: 'Hassan Khan',
                role: 'Professional Midfielder - Top Club',
                quote: 'The tactical training and match preparation at EFA is unmatched. Highly recommended!',
                rating: 5,
                emoji: '🎯',
              },
              {
                id: 6,
                name: 'Maria Gonzalez',
                role: 'Professional Forward - International Club',
                quote: 'EFA showed me what it takes to be a professional athlete and gave me the skills to succeed.',
                rating: 5,
                emoji: '⚡',
              },
            ]}
          />
        </div>
      </section>

      <Gallery />

      {/* Career Pathways */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/10">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
              🚀 Career Pathways & Opportunities
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Clear routes to professional football success</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {[
              {
                emoji: '🏆',
                title: 'Professional League Placement',
                items: ['• National League placement', '• International opportunities', '• Contract negotiations support', '• Career management guidance'],
              },
              {
                emoji: '🎓',
                title: 'Scholarship & Education',
                items: ['• International university scholarships', '• Dual education programs', '• Academic support', '• Career transition planning'],
              },
              {
                emoji: '🌍',
                title: 'International Exposure',
                items: ['• International tournaments', '• Exchange programs', '• Foreign club trials', '• Networking opportunities'],
              },
              {
                emoji: '💼',
                title: 'Coaching & Mentorship',
                items: ['• Mentorship programs', '• Coaching certifications', '• Player-to-coach transition', '• Leadership development'],
              },
            ].map((pathway, i) => (
              <AnimatedCard key={i} index={i}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="p-8 rounded-xl bg-gradient-to-br from-card to-secondary/30 border border-border hover:border-primary transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{pathway.emoji}</div>
                  <h3 className="text-xl font-bold text-white mb-6 font-poppins">{pathway.title}</h3>
                  <ul className="space-y-3 font-poppins">
                    {pathway.items.map((item, idx) => (
                      <li key={idx} className="text-muted-foreground flex items-center gap-2">
                        <span className="text-primary">→</span> {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </AnimatedCard>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Schedule & Admissions */}
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
              ⏰ Training Schedule & Admissions
            </h2>
            <p className="text-lg text-muted-foreground font-poppins">Join our next intake and begin your journey</p>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">📅 Weekly Schedule</h3>
              <ul className="space-y-4 font-poppins">
                {[
                  { day: 'Monday - Friday', time: '6:00 AM - 9:00 AM', activity: 'Morning Training Session' },
                  { day: 'Monday - Friday', time: '4:00 PM - 7:00 PM', activity: 'Evening Training Session' },
                  { day: 'Saturday', time: '8:00 AM - 12:00 PM', activity: 'Competitive Match Play' },
                  { day: 'Sunday', time: '10:00 AM - 1:00 PM', activity: 'Recovery & Analysis Session' },
                ].map((schedule, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="p-4 bg-secondary/20 rounded-lg border border-primary/20"
                  >
                    <p className="font-semibold text-white">{schedule.day}</p>
                    <p className="text-primary">{schedule.time}</p>
                    <p className="text-muted-foreground text-sm">{schedule.activity}</p>
                  </motion.div>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20 rounded-xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-6 font-poppins">✅ Admission Requirements</h3>
              <ul className="space-y-4 font-poppins">
                {[
                  '• Open to all age groups',
                  '• Basic football skills required',
                  '• Physical fitness assessment',
                  '• Medical clearance certificate',
                  '• School/college enrollment proof',
                  '• Passion for professional football',
                  '• Commitment to training schedule',
                  '• Fee structure varies by program',
                ].map((req, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="text-primary">✓</span> {req}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-poppins">
              🚀 Ready to Join Elite Football Academy?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-poppins">
              Start your journey to becoming a professional footballer today. Limited slots available for the next intake!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/apply"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Apply Now - Secure Your Spot →
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-10 py-4 bg-secondary text-foreground rounded-lg font-bold text-lg border border-primary hover:border-primary/60 transition-all duration-300 font-poppins"
              >
                Get More Information →
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4 font-poppins">📧 Stay Updated</h3>
            <p className="text-muted-foreground mb-6 font-poppins">Subscribe to our newsletter for latest news, training tips, and academy updates</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors font-poppins"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:shadow-lg hover:shadow-primary/50 transition-shadow duration-300 font-poppins"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
