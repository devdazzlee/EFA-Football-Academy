export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
            Pakistan&apos;s Most Dedicated Football Academy
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Elite Football Academy was built with one goal: to produce national-level football players from Pakistan.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slide-up">
            <h3 className="text-2xl font-bold mb-4 text-accent">Our Mission</h3>
            <p className="text-foreground leading-relaxed mb-4">
              Elite Football Academy (EFA) was built with one goal: to produce national-level football players from Pakistan. We are not just a training ground — we are a development ecosystem for teens and young adults who are serious about making football their career.
            </p>
            <p className="text-foreground leading-relaxed">
              Our players train under experienced coaches using internationally proven methods, structured progression pathways, and a culture of discipline, teamwork, and ambition. Whether you are stepping into structured football for the first time or pushing toward professional selection, EFA gives you the platform to grow.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-accent text-4xl">🏆</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">National-Level Graduates</h4>
                  <p className="text-sm text-muted-foreground">Players who have gone on to represent Pakistan in regional and national competitions</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-accent text-4xl">👟</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Expert Coaches</h4>
                  <p className="text-sm text-muted-foreground">Experienced coaching staff with professional playing and coaching backgrounds</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-card border border-border rounded-xl hover:border-accent transition-all duration-300 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="text-accent text-4xl">📅</div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Year-Round Programs</h4>
                  <p className="text-sm text-muted-foreground">Structured training, competitive fixtures, and development camps running throughout the year</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Core Values</h3>
          <div className="grid md:grid-cols-5 gap-6">
            {[
              { title: 'Excellence', description: 'Highest standards every day' },
              { title: 'Discipline', description: 'Consistency is non-negotiable' },
              { title: 'Respect', description: 'For teammates and opponents' },
              { title: 'Ambition', description: 'Dream big, work relentlessly' },
              { title: 'Unity', description: 'Together we grow stronger' },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-lg text-center hover:border-accent hover:bg-accent/5 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-bold text-accent text-lg mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
