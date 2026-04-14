export default function News() {
  const news = [
    {
      title: 'EFA Youth Program Shines at Regional Tournament',
      excerpt: 'Our academy players delivered standout performances at the regional championships — proving that structured development at EFA creates real results on match day.',
      date: 'March 2024',
      image: '🎯',
    },
    {
      title: 'New Training Methods Now Active at EFA',
      excerpt: 'Elite Football Academy has introduced modern performance analysis tools and position-specific drills to sharpen every player\'s game intelligence and technical edge.',
      date: 'February 2024',
      image: '⚽',
    },
    {
      title: 'EFA Graduate Signs His First Professional Contract',
      excerpt: 'Another EFA success story — a former academy player has secured professional terms, marking yet another step in our mission to produce Pakistan\'s next generation of footballers.',
      date: 'January 2024',
      image: '🏆',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Latest from the Academy</h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-8 hover:border-accent hover:shadow-xl transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.image}
              </div>
              <p className="text-sm text-accent font-semibold mb-3">{item.date}</p>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors duration-300">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.excerpt}
              </p>
              <button className="mt-6 text-accent font-semibold hover:gap-2 flex items-center gap-1 group-hover:translate-x-1 transition-all duration-300">
                Read More →
              </button>
            </div>
          ))}
        </div>

        {/* CTA Link */}
        <div className="text-center mt-12">
          <button className="text-accent font-bold text-lg hover:text-accent/80 transition-colors duration-300">
            View All Updates →
          </button>
        </div>
      </div>
    </section>
  );
}
