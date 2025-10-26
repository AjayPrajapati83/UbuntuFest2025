'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ElementalBackgroundProps {
  currentSection?: string;
}

export default function ElementalBackground({ currentSection = 'hero' }: ElementalBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowWidth, setWindowWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [stars, setStars] = useState<Array<{ width: number; height: number; left: string; top: string; duration: number; delay: number }>>([]);
  const [shootingStars, setShootingStars] = useState<Array<{ left: string; top: string }>>([]);
  const [embers, setEmbers] = useState<Array<{ width: number; height: number; left: string; top: string; opacity: number; duration: number; delay: number }>>([]);
  const [airParticles, setAirParticles] = useState<Array<{ width: number; height: number; left: string; top: string; xOffset: number; duration: number; delay: number }>>([]);
  const [cosmicDust, setCosmicDust] = useState<Array<{ width: number; height: number; left: string; top: string; color: string; xMove: number; yMove: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    // Set window width and mobile detection on client side
    const checkMobile = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      const mobile = width < 768;
      setIsMobile(mobile);
      
      // Generate stars based on device type
      const starCount = mobile ? 30 : 150;
      setStars(
        Array.from({ length: starCount }).map(() => ({
          width: Math.random() * 3 + 1,
          height: Math.random() * 3 + 1,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        }))
      );
      
      // Generate shooting stars
      setShootingStars(
        Array.from({ length: 3 }).map(() => ({
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 50}%`,
        }))
      );
      
      // Generate embers
      const emberCount = mobile ? 8 : 25;
      setEmbers(
        Array.from({ length: emberCount }).map(() => ({
          width: Math.random() * 120 + 40,
          height: Math.random() * 120 + 40,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          opacity: Math.random() * 0.3 + 0.1,
          duration: Math.random() * 5 + 3,
          delay: Math.random() * 2,
        }))
      );
      
      // Generate air particles
      const airCount = mobile ? 10 : 30;
      setAirParticles(
        Array.from({ length: airCount }).map((_, i) => ({
          width: Math.random() * 8 + 2,
          height: Math.random() * 8 + 2,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          xOffset: Math.sin(i) * 100,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 5,
        }))
      );
      
      // Generate cosmic dust
      const dustCount = mobile ? 5 : 15;
      setCosmicDust(
        Array.from({ length: dustCount }).map(() => ({
          width: Math.random() * 200 + 100,
          height: Math.random() * 200 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          color: Math.random() > 0.5 ? '135, 206, 235' : '255, 87, 34',
          xMove: Math.random() * 100 - 50,
          yMove: Math.random() * 100 - 50,
          duration: Math.random() * 10 + 10,
          delay: Math.random() * 2,
        }))
      );
    };
    
    checkMobile();
    
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handleMouseMove = (e: MouseEvent) => {
      // Only track mouse on desktop
      if (window.innerWidth >= 768) {
        setMousePosition({ x: e.clientX, y: e.clientY });
      }
    };
    
    const handleResize = () => {
      checkMobile();
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Animated Gradient Background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(45deg, #0f0c29, #302b63, #24243e)',
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Space - Cosmic Background Base */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-950/80 via-space-900/60 to-space-800/80">
        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          {stars.map((star, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute bg-white rounded-full"
              style={{
                width: `${star.width}px`,
                height: `${star.height}px`,
                left: star.left,
                top: star.top,
              } as React.CSSProperties}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
              }}
            />
          ))}
        </div>

        {/* Shooting Stars */}
        {!isMobile && shootingStars.map((star, i) => (
          <motion.div
            key={`shooting-${i}`}
            className="absolute h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            style={{
              width: '100px',
              left: star.left,
              top: star.top,
            } as React.CSSProperties}
            animate={{
              x: [-100, windowWidth + 100],
              y: [0, 200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 5,
              repeatDelay: 10,
            }}
          />
        ))}
      </div>

      {/* Earth - Mountain Silhouettes at Bottom */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1/4"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="rgba(121, 85, 72, 0.3)"
            d="M0,160L48,176C96,192,192,224,288,224C384,224,480,192,576,165.3C672,139,768,117,864,122.7C960,128,1056,160,1152,165.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </svg>
        <svg className="absolute bottom-0 w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="rgba(93, 64, 55, 0.5)"
            d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,213.3C672,224,768,224,864,208C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
          />
        </svg>
      </motion.div>

      {/* Water - Flowing Waves */}
      <motion.div
        className="absolute bottom-1/4 left-0 right-0 h-32 opacity-30"
        animate={{
          x: [0, 100, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(33, 150, 243, 0.3), transparent)',
          backgroundSize: '200% 100%',
        } as React.CSSProperties}
      />

      {/* Fire - Glowing Embers and Heat Waves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {embers.map((ember, i) => (
          <motion.div
            key={`ember-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${ember.width}px`,
              height: `${ember.height}px`,
              left: ember.left,
              top: ember.top,
              background: `radial-gradient(circle, rgba(255, 87, 34, ${ember.opacity}), transparent)`,
              filter: 'blur(40px)',
            } as React.CSSProperties}
            animate={{
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.3, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: ember.duration,
              repeat: Infinity,
              delay: ember.delay,
            }}
          />
        ))}
      </div>

      {/* Air - Wind Currents and Floating Particles */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          x: ['-10%', '10%', '-10%'],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          background: 'linear-gradient(135deg, transparent, rgba(135, 206, 235, 0.15), transparent)',
          backgroundSize: '400% 400%',
        } as React.CSSProperties}
      />

      {/* Floating Air Particles */}
      {airParticles.map((particle, i) => (
        <motion.div
          key={`air-particle-${i}`}
          className="absolute rounded-full bg-air-300/20"
          style={{
            width: `${particle.width}px`,
            height: `${particle.height}px`,
            left: particle.left,
            top: particle.top,
          } as React.CSSProperties}
          animate={{
            y: [0, -100, -200],
            x: [0, particle.xOffset / 2, particle.xOffset],
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Interactive Mouse Follow Effect - Desktop Only */}
      {!isMobile && (
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: 'radial-gradient(circle, rgba(135, 206, 235, 0.1), transparent)',
            filter: 'blur(60px)',
          } as React.CSSProperties}
          animate={{
            x: mousePosition.x - 192,
            y: mousePosition.y - 192,
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 200,
          }}
        />
      )}

      {/* Large Pulsing Elemental Orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(135, 206, 235, 0.6), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/4 w-72 h-72 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(255, 87, 34, 0.6), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.4, 1],
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-80 h-80 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(33, 150, 243, 0.6), transparent)',
          filter: 'blur(80px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      {/* Cosmic Dust Particles */}
      <div className="absolute inset-0 opacity-40">
        {cosmicDust.map((dust, i) => (
          <motion.div
            key={`dust-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${dust.width}px`,
              height: `${dust.height}px`,
              left: dust.left,
              top: dust.top,
              background: `radial-gradient(circle, rgba(${dust.color}, 0.15), transparent)`,
              filter: 'blur(60px)',
            }}
            animate={{
              x: [0, dust.xMove, 0],
              y: [0, dust.yMove, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: dust.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: dust.delay,
            }}
          />
        ))}
      </div>
      
      {/* Animated Light Rays */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: 'linear-gradient(45deg, transparent 30%, rgba(135, 206, 235, 0.3) 50%, transparent 70%)',
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
      
      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-space-950/50" />
    </div>
  );
}
