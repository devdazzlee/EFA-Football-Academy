export default function CTA() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="relative bg-gradient-to-r from-secondary to-secondary/50 border border-accent rounded-2xl p-12 md:p-16 text-center overflow-hidden animate-fade-in">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent opacity-5 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
              Ready to Begin Your Journey?
            </h2>
            
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
              Applications are open for the upcoming training cycle. Limited spots available. Join Pakistan&apos;s elite football development program and turn your dreams into reality.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg animate-glow whitespace-nowrap">
                Apply Now →
              </button>
              
              <button className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-bold text-lg hover:bg-accent/10 transition-all duration-300 whitespace-nowrap">
                Contact Us →
              </button>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              📞 Call: +92-123-456-7890 | 📧 Email: apply@efacademy.pk
            </p>
          </div>
        </div>

        {/* Secondary CTA - Programs */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: '⭐',
              title: 'Elite Performance',
              desc: 'For serious players aged 18-22',
            },
            {
              icon: '🎯',
              title: 'Youth Development',
              desc: 'Ages 16-18 starting their journey',
            },
            {
              icon: '🥅',
              title: 'Goalkeeper Academy',
              desc: 'Specialist position training',
            },
          ].map((program, index) => (
            <div
              key={index}
              className="p-8 bg-card border border-border rounded-xl text-center hover:border-accent hover:bg-accent/5 transition-all duration-300 animate-slide-up group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {program.icon}
              </div>
              <h3 className="font-bold text-lg text-foreground mb-2">{program.title}</h3>
              <p className="text-sm text-muted-foreground">{program.desc}</p>
              <button className="mt-4 text-accent text-sm font-semibold hover:translate-x-1 transition-transform">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
