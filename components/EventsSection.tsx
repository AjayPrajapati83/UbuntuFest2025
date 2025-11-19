'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { events, Event } from '@/data/events';
import { getElementColor, getElementIcon } from '@/lib/utils';
import { Sparkles, Users, User, Calendar, Info } from 'lucide-react';
import EventDialog from './EventDialog';

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEventCategory, setSelectedEventCategory] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleEventClick = (event: Event) => {
    console.log('Event clicked:', event.name);
    console.log('Setting selected event and opening dialog...');
    setSelectedEvent(event);
    setIsDialogOpen(true);
    console.log('Dialog state updated - isOpen:', true);
    console.log('Selected event:', event);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const categories = ['All', 'Flagship', 'Large', 'Small'];
  const categoryFilters = [
    { name: 'All', value: 'all', icon: '⭐' },
    { name: 'Online Games', value: 'Online Games', icon: '🎮' },
    { name: 'Performing Arts', value: 'Performing Arts', icon: '🎭' },
    { name: 'Creative Challenges', value: 'Creative Challenges', icon: '🧩' },
    { name: 'Fine Arts', value: 'Fine Arts', icon: '🎨' },
    { name: 'Sports', value: 'Sports', icon: '⚽' },
    { name: 'Digital/Media', value: 'Digital/Media', icon: '📱' },
    { name: 'Literary Arts', value: 'Literary Arts', icon: '📚' },
  ];

  const filteredEvents = events.filter(event => {
    const typeMatch = selectedCategory === 'All' || event.eventType === selectedCategory;
    const categoryMatch = selectedEventCategory === 'all' || event.category === selectedEventCategory;
    return typeMatch && categoryMatch;
  });

  return (
    <section id="events" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 relative"
            style={{
              backgroundSize: '200% auto',
            } as React.CSSProperties}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-4xl md:text-5xl">💧</span>
              <span className="gradient-text whitespace-nowrap">Elemental Events</span>
              <span className="text-2xl sm:text-4xl md:text-5xl">💧</span>
            </div>
          </h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Dive into the flow of creativity and competition. Each event embodies the essence of the five elements.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-4xl mx-auto">
          {categoryFilters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setSelectedEventCategory(filter.value)}
              className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base whitespace-nowrap ${
                selectedEventCategory === filter.value
                  ? 'bg-gradient-to-r from-water-500 to-water-600 text-white shadow-lg shadow-water-500/30'
                  : 'glass-effect text-white/70 hover:text-white'
              }`}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
            </button>
          ))}
        </div>

        {/* Event Type Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white/20 text-white border-2 border-white/40'
                  : 'glass-effect text-white/60 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event, index) => {
            const elementColor = getElementColor(event.element);
            const elementIcon = getElementIcon(event.element);

            return (
              <div
                key={event.name}
                className="card-base-static glass-effect border-2 transition-all"
                style={{
                  borderColor: `${elementColor.primary}33`,
                } as React.CSSProperties}
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">
                      {elementIcon}
                    </span>
                    <div>
                      <span 
                        className="text-xs font-semibold px-2 py-1 rounded-full"
                        style={{
                          backgroundColor: `${elementColor.primary}33`,
                          color: elementColor.primary,
                        }}
                      >
                        {event.element.toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <div className="text-xl font-bold" style={{ color: elementColor.primary }}>
                    {event.soloPrice || event.groupPrice || event.price}
                  </div>
                </div>

                {/* Event Name */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {event.name}
                </h3>

                {/* Themed Name */}
                <p className="text-sm font-medium mb-3 italic" style={{ color: elementColor.primary }}>
                  {event.themedName}
                </p>

                {/* Description */}
                <p className="text-sm text-white/80 mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Day {event.day}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white flex items-center gap-1">
                    {event.soloPrice ? <User className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                    {event.soloPrice ? 'Solo' : 'Group'}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/10 text-white">
                    {event.eventType}
                  </span>
                </div>

                {/* Register Button */}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    console.log('Button clicked:', event.name);
                    handleEventClick(event);
                  }}
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200 mt-2 active:opacity-90 touch-manipulation"
                  style={{
                    background: elementColor.gradientStyle,
                    WebkitTapHighlightColor: 'transparent',
                    cursor: 'pointer',
                    touchAction: 'manipulation',
                  } as React.CSSProperties}
                  type="button"
                >
                  Register Now
                </button>
              </div>
            );
          })}
        </div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-white/50">No events found for the selected filters</p>
          </div>
        )}
      </div>

      {/* Event Dialog */}
      <EventDialog
        event={selectedEvent}
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
      />
    </section>
  );
}
