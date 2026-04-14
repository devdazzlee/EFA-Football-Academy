'use client'

import { motion } from 'framer-motion'
import Navigation from '@/components/Navigation'
import PageBanner from '@/components/PageBanner'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'

const blogArticles = [
  {
    slug: 'efa-players-win-national-championship',
    emoji: '🏆',
    title: 'EFA Players Win National Championship!',
    date: 'December 15, 2024',
    category: 'Achievement',
    excerpt: 'Our academy team brings home the prestigious national youth football championship in an exciting final match.',
    image: '/team.jpg',
    author: 'Coach Hassan Ahmed',
    readTime: '5 min read',
    content: `
      <h2>An Unforgettable Victory</h2>
      <p>In a thrilling display of skill and determination, Elite Football Academy players secured victory in the national youth championship. The team demonstrated exceptional teamwork and technical excellence throughout the tournament, defeating some of the toughest competitions in the country.</p>
      
      <h2>Championship Highlights</h2>
      <p>Our players showcased remarkable progress from the beginning of the season. The final match was particularly impressive, with our academy team playing against the defending champions. The performance demonstrated the effectiveness of our comprehensive training programs and coaching methodology.</p>
      
      <h3>Key Moments:</h3>
      <ul>
        <li>Flawless defensive coordination in critical moments</li>
        <li>Strategic midfield control throughout the match</li>
        <li>Clinical finishing in the attacking third</li>
        <li>Exceptional teamwork and communication</li>
      </ul>
      
      <h2>Player Performances</h2>
      <p>Every player contributed significantly to this achievement. The goalkeeper made several crucial saves, the defensive line was impenetrable, midfielders controlled the pace of the game, and forwards executed plays with precision. This victory is a testament to the hard work and dedication of every team member.</p>
      
      <h2>What's Next</h2>
      <p>With this championship under their belt, our players are now preparing for international competitions. This victory has boosted their confidence and opened doors for further opportunities at professional and international levels. We're proud of their achievement and excited about their future prospects.</p>
      
      <h2>Congratulations</h2>
      <p>On behalf of Elite Football Academy, we congratulate all the players, coaching staff, and supporting team who made this championship possible. This is just the beginning of greater achievements to come!</p>
    `,
  },
  {
    slug: 'success-story-academy-to-professional',
    emoji: '🌟',
    title: 'Success Story: From Academy to Professional',
    date: 'December 10, 2024',
    category: 'Success Story',
    excerpt: 'Meet Ahmed Hassan, who graduated from our program and now plays for a top professional league.',
    image: '/coaching.jpg',
    author: 'Marketing Team',
    readTime: '4 min read',
    content: `
      <h2>A Transformational Journey</h2>
      <p>Ahmed Hassan's journey from a promising young talent to a professional footballer is an inspiring example of what dedication and proper guidance can achieve. Three years ago, Ahmed joined Elite Football Academy with a dream and the determination to succeed.</p>
      
      <h2>Early Days at EFA</h2>
      <p>When Ahmed first came to the academy, he showed potential but lacked the technical refinement and mental strength needed for professional football. Our coaching staff immediately developed a personalized training plan tailored to his strengths and areas for improvement.</p>
      
      <h2>The Transformation</h2>
      <p>Over the three-year period at EFA, Ahmed underwent remarkable transformation:</p>
      <ul>
        <li>Improved technical skills through intensive daily training</li>
        <li>Developed tactical awareness and game intelligence</li>
        <li>Strengthened mental resilience and confidence</li>
        <li>Enhanced physical fitness and conditioning</li>
      </ul>
      
      <h2>Professional Success</h2>
      <p>Today, Ahmed plays for one of the top professional leagues in the country. His performances have earned him recognition and he's now a key player in his club's lineup. He credits much of his success to the foundation provided by Elite Football Academy.</p>
      
      <h2>Ahmed's Message to Current Students</h2>
      <p>"The journey at EFA taught me that with proper guidance, dedication, and hard work, any dream is achievable. The coaches believed in me even when I doubted myself. If you're serious about becoming a professional footballer, EFA is the place to be."</p>
      
      <h2>Looking Forward</h2>
      <p>Ahmed continues to train hard and aims to represent the national team internationally. His success story inspires hundreds of current students at the academy to push their limits and pursue their dreams.</p>
    `,
  },
  {
    slug: 'new-advanced-training-facilities',
    emoji: '🚀',
    title: 'New Advanced Training Facilities Opened',
    date: 'December 5, 2024',
    category: 'Facilities',
    excerpt: 'Elite Football Academy unveils state-of-the-art gym and recovery center with latest technology.',
    image: '/facilities.jpg',
    author: 'Director Hassan Ahmed',
    readTime: '6 min read',
    content: `
      <h2>A Major Milestone for EFA</h2>
      <p>Elite Football Academy is proud to announce the opening of our newly expanded and renovated training facilities. This significant investment represents our commitment to providing world-class infrastructure for player development.</p>
      
      <h2>What's New</h2>
      <p>Our newly expanded facilities include:</p>
      <ul>
        <li>Advanced gym with modern equipment worth millions</li>
        <li>Cutting-edge recovery technology (ice baths, massage chairs, etc.)</li>
        <li>Sports science research lab for performance analysis</li>
        <li>Enhanced video analysis center for tactical review</li>
        <li>Expanded medical clinic with state-of-the-art equipment</li>
        <li>Improved player accommodation with modern amenities</li>
      </ul>
      
      <h2>Technology Integration</h2>
      <p>Every piece of equipment in our new facilities is selected with player development in mind. We use advanced biometric tracking, performance analytics, and AI-powered coaching systems to optimize training effectiveness.</p>
      
      <h2>Benefits for Players</h2>
      <p>With these facilities, our players now have access to:</p>
      <ul>
        <li>Personalized training programs based on data analysis</li>
        <li>Faster recovery and injury prevention</li>
        <li>Better medical support and treatment options</li>
        <li>Enhanced tactical understanding through video analysis</li>
      </ul>
      
      <h2>Looking to the Future</h2>
      <p>These facilities position Elite Football Academy as one of the best-equipped academies in the region. We believe this will accelerate the development of our players and help them achieve higher levels of success.</p>
    `,
  },
  {
    slug: 'international-scout-visit',
    emoji: '👥',
    title: 'International Scout Visit Highlights Academy',
    date: 'November 28, 2024',
    category: 'News',
    excerpt: 'International talent scouts visit EFA, impressed by the caliber of training and player development.',
    image: '/training-field.jpg',
    author: 'Communications Team',
    readTime: '4 min read',
    content: `
      <h2>Global Recognition for EFA</h2>
      <p>This week, Elite Football Academy received a prestigious visit from international scouts representing top European football clubs. The visit highlighted the quality of our training programs and the caliber of our players.</p>
      
      <h2>Scout Impressions</h2>
      <p>The international scouts were impressed by several aspects of our academy:</p>
      <ul>
        <li>High level of tactical understanding among players</li>
        <li>Excellent coaching methodology and player development systems</li>
        <li>Professional training environment and facilities</li>
        <li>Strong emphasis on character development alongside skills</li>
      </ul>
      
      <h2>Player Opportunities</h2>
      <p>Following the visit, several of our players have been identified for potential opportunities at international clubs. These scouts have invited select players to participate in trial matches and training camps in Europe.</p>
      
      <h2>International Pathways</h2>
      <p>This visit reinforces Elite Football Academy's position as a pathway to international football. We're excited about the opportunities this creates for our players and the global recognition of our programs.</p>
      
      <h2>Next Steps</h2>
      <p>We are currently coordinating with the scouts to arrange trials and training sessions for interested players. This is a historic moment for our academy and our players.</p>
    `,
  },
  {
    slug: 'performance-analytics-future-football',
    emoji: '📊',
    title: 'Performance Analytics: The Future of Football Training',
    date: 'November 22, 2024',
    category: 'Training',
    excerpt: 'Exploring how EFA uses data and analytics to optimize player performance and development.',
    image: '/coaching.jpg',
    author: 'Technical Director',
    readTime: '7 min read',
    content: `
      <h2>Data-Driven Football Training</h2>
      <p>Elite Football Academy has embraced modern technology and data analytics to revolutionize how we train our players. Every aspect of player performance is now tracked, analyzed, and optimized.</p>
      
      <h2>What We Track</h2>
      <p>Our analytics team monitors:</p>
      <ul>
        <li>Biometric data (heart rate, GPS tracking, acceleration)</li>
        <li>Technical performance metrics (pass accuracy, shot precision)</li>
        <li>Tactical positioning and movement patterns</li>
        <li>Recovery and fatigue levels</li>
        <li>Mental performance indicators</li>
      </ul>
      
      <h2>Personalized Training Programs</h2>
      <p>Using this data, we create individualized training programs that address each player's specific needs. Rather than one-size-fits-all training, every player gets a customized approach based on their strengths and weaknesses.</p>
      
      <h2>Injury Prevention</h2>
      <p>Analytics help us identify injury risks before they become serious. By monitoring load, recovery, and movement patterns, we can prevent injuries and keep players healthy throughout the season.</p>
      
      <h2>Competitive Advantage</h2>
      <p>This data-driven approach gives our players a significant competitive advantage. They understand their body better, train more efficiently, and make smarter decisions on the field.</p>
      
      <h2>The Future</h2>
      <p>As technology continues to evolve, Elite Football Academy is committed to staying at the forefront of innovation in football training and player development.</p>
    `,
  },
  {
    slug: 'certificate-programs-available',
    emoji: '🎓',
    title: 'Certificate Programs Now Available',
    date: 'November 15, 2024',
    category: 'Programs',
    excerpt: 'New coaching certification and advanced training programs launched for aspiring football professionals.',
    image: '/facilities.jpg',
    author: 'Director Hassan Ahmed',
    readTime: '5 min read',
    content: `
      <h2>Expanding Our Programs</h2>
      <p>Elite Football Academy is excited to announce the launch of new certificate programs designed for aspiring coaches and advanced football professionals.</p>
      
      <h2>Program Offerings</h2>
      <p>We now offer comprehensive programs in:</p>
      <ul>
        <li>Coaching Certification (Basic to Advanced levels)</li>
        <li>Sports Psychology and Mental Training</li>
        <li>Sports Science and Performance Analytics</li>
        <li>Tactical Analysis and Strategic Planning</li>
        <li>Youth Development and Academy Management</li>
      </ul>
      
      <h2>Program Benefits</h2>
      <ul>
        <li>Learn from world-class coaches and specialists</li>
        <li>Internationally recognized certifications</li>
        <li>Hands-on training with our academy teams</li>
        <li>Networking with football professionals</li>
        <li>Career advancement opportunities</li>
      </ul>
      
      <h2>Who Should Apply</h2>
      <p>These programs are ideal for:</p>
      <ul>
        <li>Aspiring football coaches</li>
        <li>Former players looking to transition into coaching</li>
        <li>Sports professionals seeking specialization</li>
        <li>Football academy managers</li>
      </ul>
      
      <h2>Enrollment</h2>
      <p>Enrollment for the next batch of programs begins next month. Interested candidates should contact our admissions team for detailed information and application procedures.</p>
    `,
  },
]

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const article = blogArticles.find((a) => a.slug === params.slug)

  if (!article) {
    return (
      <main className="min-h-screen bg-background font-poppins">
        <Navigation />
        <PageBanner
          title="Article Not Found"
          subtitle="The blog post you're looking for doesn't exist"
          emoji="❌"
          image="/training-field.jpg"
        />
        <div className="pt-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center py-20">
            <h2 className="text-4xl font-bold text-white mb-6 font-poppins">Article Not Found</h2>
            <p className="text-lg text-muted-foreground mb-8 font-poppins">
              Sorry, the blog post you're looking for doesn't exist or has been removed.
            </p>
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-bold hover:scale-105 transition-transform font-poppins"
            >
              Back to Blog
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  const relatedArticles = blogArticles.filter((a) => a.slug !== params.slug && a.category === article.category).slice(0, 3)

  return (
    <main className="min-h-screen bg-background font-poppins">
      <Navigation />

      <PageBanner
        title={article.title}
        subtitle={article.date}
        emoji={article.emoji}
        image={article.image}
      />

      <div className="pt-16" />

      <article className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Article Meta */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8 pb-8 border-b border-border"
          >
            <div className="flex flex-wrap items-center gap-4 mb-6 font-poppins">
              <span className="px-4 py-2 bg-primary/20 text-primary rounded-full text-sm font-semibold">
                {article.category}
              </span>
              <span className="text-muted-foreground font-poppins">By {article.author}</span>
              <span className="text-muted-foreground font-poppins">•</span>
              <span className="text-muted-foreground font-poppins">{article.readTime}</span>
            </div>
          </motion.div>

          {/* Article Featured Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12 rounded-xl overflow-hidden"
          >
            <div className="relative h-96 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-invert max-w-none mb-16 font-poppins"
          >
            <div className="text-white space-y-6 font-poppins">
              <div dangerouslySetInnerHTML={{ __html: article.content }} className="prose-content" />
            </div>
          </motion.div>

          {/* Article Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 border-t border-b border-border mb-12"
          >
            <div className="flex flex-wrap gap-4 font-poppins">
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:scale-105 transition-transform">
                Share Article
              </button>
              <button className="px-6 py-2 border border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-colors">
                Save Article
              </button>
            </div>
          </motion.div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold text-white mb-8 font-poppins">Related Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedArticles.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="group p-6 rounded-xl bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                  >
                    <div className="text-4xl mb-3">{related.emoji}</div>
                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors font-poppins">
                      {related.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4 font-poppins">{related.date}</p>
                    <p className="text-muted-foreground font-poppins line-clamp-2">{related.excerpt}</p>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          {/* Back to Blog */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 text-center"
          >
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-secondary text-foreground rounded-lg font-bold hover:bg-secondary/80 transition-colors font-poppins"
            >
              ← Back to All Articles
            </Link>
          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
