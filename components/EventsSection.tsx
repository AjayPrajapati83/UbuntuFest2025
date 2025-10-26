'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { events, Event } from '@/data/events';
import { getElementColor, getElementIcon } from '@/lib/utils';
import { Sparkles, Users, User, Calendar, Info } from 'lucide-react';
import EventDialog from './EventDialog';

export default function EventsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedElement, setSelectedElement] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleEventClick = (event: Event) => {
    setSelectedEvent(event);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setTimeout(() => setSelectedEvent(null), 300);
  };

  const categories = ['All', 'Flagship', 'Large', 'Small'];
  const elementFilters = [
    { name: 'All', value: 'all', icon: '⭐' },
    { name: 'Air', value: 'air', icon: '💨' },
    { name: 'Water', value: 'water', icon: '💧' },
    { name: 'Earth', value: 'earth', icon: '🌍' },
    { name: 'Fire', value: 'fire', icon: '🔥' },
    { name: 'Space', value: 'space', icon: '🚀' },
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.eventType === selectedCategory;
    const elementMatch = selectedElement === 'all' || event.element === selectedElement;
    return categoryMatch && elementMatch;
  });

  return (
    <section id="events" className="section-padding relative z-10">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 relative z-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 relative z-20"
            style={{
              backgroundSize: '200% auto',
            } as React.CSSProperties}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <span className="text-2xl sm:text-4xl md:text-5xl">💧</span>
              <span className="gradient-text whitespace-nowrap">Elemental Events</span>
              <span className="text-2xl sm:text-4xl md:text-5xl">💧</span>
            </div>
          </motion.h2>
          <p className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto">
            Dive into the flow of creativity and competition. Each event embodies the essence of the five elements.
          </p>
        </motion.div>

        {/* Element Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {elementFilters.map((filter) => (
            <motion.button
              key={filter.value}
              onClick={() => setSelectedElement(filter.value)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedElement === filter.value
                  ? 'bg-gradient-to-r from-water-500 to-water-600 text-white shadow-lg shadow-water-500/30'
                  : 'glass-effect text-white/70 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="mr-2">{filter.icon}</span>
              {filter.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white/20 text-white border-2 border-white/40'
                  : 'glass-effect text-white/60 hover:text-white border border-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          layout
        >
          {filteredEvents.map((event, index) => {
            const elementColor = getElementColor(event.element);
            const elementIcon = getElementIcon(event.element);

            return (
              <motion.div
                key={event.name}
                className={`card-base-static glass-effect border-2 border-${event.element}-500/30 hover:border-${event.element}-500/60`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.3 }}
              >
                {/* Event Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-3xl">
                      {elementIcon}
                    </span>
                    <div>
                      <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-${event.element}-500/20 text-${event.element}-300`}>
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
                <p className={`text-sm font-medium text-${event.element}-300 mb-3 italic`}>
                  {event.themedName}
                </p>

                {/* Description */}
                <p className="text-sm text-white/60 mb-4 line-clamp-3">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    Day {event.day}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70 flex items-center gap-1">
                    {event.soloPrice ? <User className="w-3 h-3" /> : <Users className="w-3 h-3" />}
                    {event.soloPrice ? 'Solo' : 'Group'}
                  </span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 text-white/70">
                    {event.category}
                  </span>
                </div>

                {/* Register Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEventClick(event);
                  }}
                  className="w-full py-3 rounded-lg font-semibold text-white transition-colors duration-200 mt-2 active:opacity-90 touch-manipulation"
                  style={{
                    background: elementColor.gradientStyle,
                  }}
                >
                  Register Now
                </button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* No Results */}
        {filteredEvents.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-2xl text-white/50">No events found for the selected filters</p>
          </motion.div>
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
