'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [currentElement, setCurrentElement] = useState(0);
  const [isMobile, setIsMobile] = useState(true); // Start with true to match SSR
  const [mounted, setMounted] = useState(false);
  
  const elements = [
    { name: 'Air', color: 'text-air-300', emoji: '💨' },
    { name: 'Water', color: 'text-water-300', emoji: '💧' },
    { name: 'Earth', color: 'text-earth-300', emoji: '🌍' },
    { name: 'Fire', color: 'text-fire-300', emoji: '🔥' },
    { name: 'Space', color: 'text-space-400', emoji: '🚀' },
  ];

  useEffect(() => {
    setMounted(true);
    
    // Detect mobile
    setIsMobile(window.innerWidth < 768);
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    const interval = setInterval(() => {
      setCurrentElement((prev) => (prev + 1) % 5);
    }, 2000);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-20">
      <div className="text-center max-w-6xl mx-auto">
        {/* Floating Elemental Orbs - Reduced on Mobile */}
        {!isMobile && (
        <div className="absolute left-0 right-0 pointer-events-none" style={{ top: '120px', height: '500px', zIndex: -1 }}>
          {elements.map((element, index) => {
            // Adjust positioning to avoid button overlap and heading
            const leftPositions = [8, 12, 88, 92, 50]; // Spread out more, avoid center buttons
            const topPositions = [25, 70, 30, 75, 15]; // Positioned below heading, around buttons
            
            return (
              <motion.div
                key={element.name}
                className={`absolute text-4xl md:text-6xl`}
                style={{
                  left: `${leftPositions[index]}%`,
                  top: `${topPositions[index]}%`,
                  zIndex: -1,
                } as React.CSSProperties}
                animate={{
                  y: [0, -30, 0],
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 5 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5,
                }}
              >
                {element.emoji}
              </motion.div>
            );
          })}
        </div>
        )}

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-8 relative z-10"
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-4 elemental-text-shadow"
          >
            <span className="text-[#FF1744]">U</span>
            <span className="text-white">B</span>
            <span className="text-[#FFD600]">U</span>
            <span className="text-white">NT</span>
            <span className="text-[#00E5CC]">U</span>
          </motion.h1>

          <motion.div
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white/90 flex items-center justify-center gap-4 flex-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="font-bold">2025</span>
            <span className="text-white/40">|</span>
            <motion.div
              key={currentElement}
              className={`flex items-center gap-2 ${elements[currentElement].color}`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="text-4xl">{elements[currentElement].emoji}</span>
              <span>{elements[currentElement].name}</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Subtitle - Panchtatva */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4 text-white/80">
            पंचतत्व - Panchtatva
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed">
            Where the <span className="air-text font-semibold">Air</span> whispers creativity,{' '}
            <span className="water-text font-semibold">Water</span> flows with rhythm,{' '}
            <span className="earth-text font-semibold">Earth</span> grounds our spirit,{' '}
            <span className="fire-text font-semibold">Fire</span> ignites passion, and{' '}
            <span className="space-text font-semibold">Space</span> holds infinite possibilities
          </p>
        </motion.div>

        {/* Event Details */}
        <motion.div
          className="mb-12 flex flex-wrap justify-center gap-6 text-white/60"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <div className="glass-effect px-6 py-3 rounded-full">
            <span className="font-semibold">📅 Date:</span> 12th & 13th of December 2025
          </div>
          <div className="glass-effect px-6 py-3 rounded-full">
            <span className="font-semibold">📍 Venue:</span> Patkar Varde College, Goregaon(West)
          </div>
          <div className="glass-effect px-6 py-3 rounded-full">
            <span className="font-semibold">🎯 Events:</span> 28+ Competitions
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 sm:gap-6 justify-center flex-wrap mb-16 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.button
            className="relative overflow-hidden px-8 py-4 text-lg font-bold rounded-full text-white shadow-2xl group"
            style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
            }}
            whileHover={{
              scale: 1.08,
              boxShadow: '0 20px 40px rgba(102, 126, 234, 0.4), 0 0 30px rgba(246, 147, 251, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#events')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-2xl">🎪</span>
              <span>Explore Events</span>
            </span>
          </motion.button>

          <motion.button
            className="relative overflow-hidden px-8 py-4 text-lg font-bold rounded-full text-white shadow-2xl backdrop-blur-sm border-2 group"
            style={{
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.2), rgba(59, 130, 246, 0.3))',
              borderColor: 'rgba(147, 197, 253, 0.5)',
            }}
            whileHover={{
              scale: 1.08,
              background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.4), rgba(59, 130, 246, 0.5))',
              borderColor: 'rgba(147, 197, 253, 0.8)',
              boxShadow: '0 20px 40px rgba(56, 189, 248, 0.3), 0 0 30px rgba(59, 130, 246, 0.2)',
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#schedule')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              animate={{
                x: ['-200%', '200%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-2xl">📅</span>
              <span>View Schedule</span>
            </span>
          </motion.button>
        </motion.div>

        {/* About Ubuntu Section */}
        <motion.div
          className="mt-20 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.h3 
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 gradient-text"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            About Ubuntu
          </motion.h3>
          
          <div className="glass-effect-strong rounded-2xl p-6 sm:p-8 md:p-10 text-left space-y-4">
            <motion.p 
              className="text-base sm:text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.6, duration: 0.6 }}
            >
              The annual Fest at Patkar-Varde College - <span className="gradient-text font-semibold">&apos;Ubuntu&apos;</span> serves as a vibrant celebration,
              encompassing a myriad of activities and opportunities for students to showcase their unique talents and abilities.
              More than just a fest, it stands as a cornerstone in the holistic development of students, offering a respite from the usual academic routine and evaluations.
            </motion.p>

            <motion.p 
              className="text-base sm:text-lg text-white/80 leading-relaxed"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              This fest isn&apos;t merely about entertainment; it&apos;s a platform for students to immerse themselves in various activities that foster personal growth.
              It focuses on enhancing students&apos; personalities, nurturing teamwork abilities, stimulating creativity, refining communication skills, and honing management expertise.
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-8 h-8 text-white/40" />
        </motion.div>
      </div>
    </section>
  );
}
