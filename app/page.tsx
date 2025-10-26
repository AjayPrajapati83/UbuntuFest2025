'use client';

import dynamic from 'next/dynamic';
import Navigation from '@/components/Navigation';
import ElementalBackground from '@/components/ElementalBackground';
import HeroSection from '@/components/HeroSection';

// Lazy load heavy components
const EventsSection = dynamic(() => import('@/components/EventsSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white/50">Loading events...</div></div>,
});

const TeamSection = dynamic(() => import('@/components/TeamSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white/50">Loading team...</div></div>,
});

const ScheduleSection = dynamic(() => import('@/components/ScheduleSection'), {
  loading: () => <div className="min-h-screen flex items-center justify-center"><div className="text-white/50">Loading schedule...</div></div>,
});

const Footer = dynamic(() => import('@/components/Footer'));

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Elemental Background System - Fixed */}
      <ElementalBackground />
      
      {/* Navigation - Space Element */}
      <Navigation />
      
      {/* Hero Section - Air Element */}
      <HeroSection />
      
      {/* Events Section - Water Element */}
      <EventsSection />
      
      {/* Team Section - Fire Element */}
      <TeamSection />
      
      {/* Schedule Section - Earth Element */}
      <ScheduleSection />
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
