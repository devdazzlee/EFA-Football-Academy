'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-border font-poppins">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 relative">
                <Image
                  src="/logo.png"
                  alt="EFA Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-accent">EFA</h3>
                <p className="text-xs text-muted-foreground">Elite Football Academy</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Developing Pakistan&apos;s next generation of national-level football players.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-foreground font-poppins">Programs 📚</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/programs" className="hover:text-accent transition-colors font-poppins">⚽ Goalkeeper Program</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors font-poppins">🛡️ Defender Training</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors font-poppins">⚙️ Midfielder Course</Link></li>
              <li><Link href="/programs" className="hover:text-accent transition-colors font-poppins">⚡ Forward Academy</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-foreground font-poppins">Company 🏢</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-accent transition-colors font-poppins">About Us</Link></li>
              <li><Link href="/blog" className="hover:text-accent transition-colors font-poppins">News & Updates</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors font-poppins">Contact Us</Link></li>
              <li><Link href="/apply" className="hover:text-accent transition-colors font-poppins">Apply Now</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-foreground">Get In Touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-accent mt-1">📍</span>
                <span>Elite Football Academy<br />Karachi, Pakistan</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">📞</span>
                <a href="tel:+923250498494" className="hover:text-accent transition-colors">+92 325 0498494</a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-accent">📧</span>
                <a href="mailto:info@efacademy.pk" className="hover:text-accent transition-colors">info@efacademy.pk</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8 py-8 border-t border-border">
          {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((social) => (
            <a
              key={social}
              href="#"
              className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              aria-label={social}
            >
              {social === 'Facebook' && '📘'}
              {social === 'Twitter' && '𝕏'}
              {social === 'Instagram' && '📷'}
              {social === 'YouTube' && '▶️'}
            </a>
          ))}
        </div>

        {/* Bottom */}
        <div className="text-center pt-8 border-t border-border text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p>© 2024 Elite Football Academy. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
