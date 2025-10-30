'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { useState, useEffect, useMemo } from 'react';

interface TeamMember {
  name: string;
}

interface TeamCategory {
  title: string;
  members: TeamMember[];
}

export default function TeamSection() {
  const [mounted, setMounted] = useState(false);
  
  // Generate fire particles once to avoid hydration mismatch
  const fireParticles = useMemo(() => 
    Array.from({ length: 15 }).map(() => ({
      width: Math.random() * 150 + 50,
      height: Math.random() * 150 + 50,
      left: Math.random() * 100,
      top: Math.random() * 100,
      opacity: Math.random() * 0.2 + 0.1,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * 2,
    })), []
  );
  
  useEffect(() => {
    setMounted(true);
  }, []);
  const teamStructure: TeamCategory[] = [
    {
      title: 'CL',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'ACL',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Registration Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Events Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Marketing Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Creative Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'PR Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Social Media Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Cultural Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
      ],
    },
    {
      title: 'Operations and Logistics Head',
      members: [
        { name: 'Member Name 1' },
        { name: 'Member Name 2' },
        { name: 'Member Name 3' },
        { name: 'Member Name 4' },
      ],
    },
  ];

  return (
    <section id="team" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 gradient-text"
            style={{
              textShadow: '0 0 30px rgba(255, 87, 34, 0.6)',
            } as React.CSSProperties}
          >
            Our Team
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Meet the passionate team behind Ubuntu 2025
          </p>
        </div>

        {/* Fire Background Effect - Static for performance */}
        {mounted && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {fireParticles.slice(0, 5).map((particle, i) => (
              <div
                key={`fire-bg-${i}`}
                className="absolute rounded-full"
                style={{
                  width: `${particle.width}px`,
                  height: `${particle.height}px`,
                  left: `${particle.left}%`,
                  top: `${particle.top}%`,
                  background: `radial-gradient(circle, rgba(255, 87, 34, ${particle.opacity}), transparent)`,
                  filter: 'blur(50px)',
                } as React.CSSProperties}
              />
            ))}
          </div>
        )}

        {/* Team Categories */}
        <div className="space-y-16 relative z-10">
          {teamStructure.map((category, categoryIndex) => (
            <div key={category.title}>
              {/* Category Title */}
              <h3 className="text-3xl md:text-4xl font-bold text-center mb-8 gradient-text">
                {category.title}
              </h3>

              {/* Members Grid */}
              <div className={`flex flex-wrap justify-center gap-x-48 gap-y-12 ${category.members.length === 4 ? 'max-w-7xl mx-auto' : 'max-w-6xl mx-auto'}`}>
                {category.members.map((member, memberIndex) => (
                  <motion.div
                    key={`${category.title}-${memberIndex}`}
                    className="group"
                    initial={{ opacity: 1, scale: 1 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  >
                    {/* Card Container */}
                    <motion.div
                      className="flex flex-col items-center"
                      whileHover={{ y: -10 }}
                    >
                      {/* Image Card */}
                      <motion.div
                        className="glass-effect-strong rounded-2xl p-8 border-2 border-white/20 hover:border-fire-500/60 transition-all duration-300 relative overflow-hidden mb-5"
                        whileHover={{
                          boxShadow: '0 0 30px rgba(255, 87, 34, 0.4)',
                        }}
                      >
                        {/* Placeholder Image */}
                        <div className="w-56 h-56 rounded-xl bg-gradient-to-br from-fire-500/30 to-water-500/30 flex items-center justify-center relative overflow-hidden">
                          <User className="w-28 h-28 text-white/40" />
                          
                          {/* Static Gradient Overlay */}
                          <div
                            className="absolute inset-0 bg-gradient-to-br from-fire-500/20 to-transparent opacity-40"
                          />
                        </div>
                      </motion.div>

                      {/* Member Name */}
                      <p className="text-lg font-semibold text-white text-center">
                        {member.name}
                      </p>
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
