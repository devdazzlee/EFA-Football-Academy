'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="py-20 md:py-32 bg-secondary/5">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">
          Stay Connected with EFA
        </h2>
        
        <p className="text-lg text-muted-foreground mb-10">
          Get academy news, training tips, fixture updates, and player achievements delivered straight to your inbox.
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto animate-scale-in">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
          />
          
          <button
            type="submit"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-bold whitespace-nowrap hover:scale-105 transition-transform duration-300 animate-glow"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="mt-4 text-accent font-semibold animate-slide-down">
            ✓ Thank you for subscribing! Check your email for updates.
          </p>
        )}
      </div>
    </section>
  );
}
