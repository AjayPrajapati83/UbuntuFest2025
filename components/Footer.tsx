'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Footer() {
  const [particles, setParticles] = useState<Array<{ left: string; top: string; duration: number; delay: number }>>([]);
  const socialLinks = [
    { icon: Instagram, href: 'https://www.instagram.com/ubuntu.pvc/', color: 'hover:text-pink-400' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Events', href: '#events' },
    { name: 'Schedule', href: '#schedule' },
    { name: 'Team', href: '#team' },
  ];

  useEffect(() => {
    setParticles(
      Array.from({ length: 20 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2,
      }))
    );
  }, []);

  return (
    <footer className="relative z-10 bg-gradient-to-b from-space-900 to-space-950 border-t border-white/10">
      <div className="container-custom px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">UBUNTU 2025</h3>
            <p className="text-white/60 mb-4">
              Experience the convergence of five elements - Air, Water, Earth, Fire, and Space at the most spectacular college fest.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-10 h-10 rounded-full glass-effect flex items-center justify-center text-white/70 ${social.color} transition-colors`}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors flex items-center gap-2"
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    <span className="text-air-400">→</span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60">
                <Mail className="w-5 h-5 text-water-400 mt-1" />
                <div>
                  <p className="text-sm">ubuntu.pvc@gmail.com</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Phone className="w-5 h-5 text-fire-400 mt-1" />
                <div>
                  <p className="text-sm">+91 73043 83036 (Shree Pillay)</p>
                  <p className="text-sm">+91 8369564372 (Ajay Prajapati)</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-earth-400 mt-1" />
                <p className="text-sm">Patkar Varde College<br />Goregaon West, Mumbai, Maharashtra - 400104</p>
              </li>
            </ul>
          </motion.div>

        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-white/10 pt-8 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex flex-col items-center gap-4 text-white/50 text-sm">
            <p>© 2025 Ubuntu - Panchtatva. All rights reserved.</p>
            <motion.div 
              className="mt-4 glass-effect px-6 py-3 rounded-full border border-white/20"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.4)' }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-white/90 text-base">
                Developed with ❤️ by{' '}
                <a 
                  href="https://www.linkedin.com/in/ajayprajapatii/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="gradient-text font-bold text-lg hover:opacity-80 transition-all"
                  style={{
                    textShadow: '0 0 20px rgba(135, 206, 235, 0.5)',
                  } as React.CSSProperties}
                >
                  Ajay Prajapati
                </a>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        {particles.map((particle, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            } as React.CSSProperties}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>
    </footer>
  );
}
