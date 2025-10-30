'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Menu, X, Calendar, Users, Sparkles, Home } from 'lucide-react';
import Image from 'next/image';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home },
    { name: 'Events', href: '#events', icon: Sparkles },
    { name: 'Schedule', href: '#schedule', icon: Calendar },
    { name: 'Team', href: '#team', icon: Users },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect-strong shadow-2xl' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div
            className="flex items-center space-x-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            onClick={() => scrollToSection('#hero')}
          >
            <motion.div
              className="relative w-10 h-10 md:w-12 md:h-12"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Image 
                src="/circle logo.png" 
                alt="Ubuntu Logo" 
                width={48}
                height={48}
                className="w-full h-full object-contain"
                priority
              />
            </motion.div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold gradient-text">UBUNTU</h1>
              <p className="text-xs text-white/60">Panchtatva 2025</p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors relative group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-air-400 via-water-500 to-fire-500"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
      <motion.div
        className="md:hidden overflow-hidden"
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: 'auto', opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="glass-effect-strong border-t border-white/10">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors w-full text-left py-2"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>
      )}
    </motion.nav>
  );
}
