'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { events, getEventsByDay } from '@/data/events';

export default function ScheduleSection() {
  const day1Events = getEventsByDay(1);
  const day2Events = getEventsByDay(2);

  const scheduleData = [
    {
      day: 1,
      date: 'Day 1 - Coming Soon',
      events: day1Events,
      theme: 'earth',
      gradient: 'from-earth-600 to-earth-800',
    },
    {
      day: 2,
      date: 'Day 2 - Coming Soon',
      events: day2Events,
      theme: 'earth',
      gradient: 'from-earth-700 to-earth-900',
    },
  ];

  return (
    <section id="schedule" className="section-padding relative">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 relative inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <motion.span 
                className="text-2xl sm:text-4xl md:text-5xl"
                animate={{
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                🌍
              </motion.span>
              <span className="earth-text whitespace-nowrap relative">
                Grounded Schedule
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 rounded-full"
                  style={{
                    background: 'linear-gradient(90deg, #8B4513, #795548, #A0826D)',
                  }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                />
              </span>
              <motion.span 
                className="text-2xl sm:text-4xl md:text-5xl"
                animate={{
                  rotate: [0, -10, 10, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                🌍
              </motion.span>
            </div>
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl text-white/70 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Rooted in tradition, growing towards excellence. Your journey through the elements begins here.
          </motion.p>
        </motion.div>

        {/* Earth Background Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
          <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path
              fill="rgba(121, 85, 72, 0.3)"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            />
          </svg>
        </div>

        {/* Schedule Timeline */}
        <div className="space-y-12 relative">
          {scheduleData.map((schedule, dayIndex) => (
            <motion.div
              key={schedule.day}
              className="relative"
              initial={{ opacity: 0, x: dayIndex % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: dayIndex * 0.2 }}
            >
              {/* Day Header */}
              <motion.div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 mb-6 border-2 border-earth-500/40 shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, rgba(121, 85, 72, 0.3), rgba(93, 64, 55, 0.4))',
                  backdropFilter: 'blur(20px)',
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: '0 20px 40px rgba(121, 85, 72, 0.3)',
                }}
              >
                {/* Static background pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                
                <div className="relative z-10">
                  {/* Mobile Layout - Vertical Stack */}
                  <div className="flex flex-col items-center gap-4 sm:hidden">
                    <div className="flex items-center gap-4 w-full">
                      <div
                        className="w-20 h-20 rounded-full flex items-center justify-center text-4xl relative flex-shrink-0"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.4), rgba(121, 85, 72, 0.6))',
                          boxShadow: '0 8px 32px rgba(121, 85, 72, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        🌍
                      </div>
                      <div className="flex-1 text-left">
                        <motion.h3 
                          className="text-3xl font-bold text-white mb-1"
                          style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          }}
                        >
                          Day {schedule.day}
                        </motion.h3>
                        <p className="text-earth-100 flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4" />
                          {schedule.date}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      className="px-6 py-3 rounded-full relative overflow-hidden w-full max-w-[200px]"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.6), rgba(121, 85, 72, 0.8))',
                        boxShadow: '0 4px 15px rgba(121, 85, 72, 0.4)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 6px 20px rgba(139, 69, 19, 0.6)',
                      }}
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
                      <span className="relative z-10 text-white font-bold text-base text-center block">{schedule.events.length} Events</span>
                    </motion.div>
                  </div>

                  {/* Desktop Layout - Horizontal */}
                  <div className="hidden sm:flex items-center justify-between">
                    <div className="flex items-center gap-6">
                      <div
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center text-4xl sm:text-5xl relative"
                        style={{
                          background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.4), rgba(121, 85, 72, 0.6))',
                          boxShadow: '0 8px 32px rgba(121, 85, 72, 0.3), inset 0 0 20px rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        🌍
                      </div>
                      <div className="text-left">
                        <motion.h3 
                          className="text-4xl font-bold text-white mb-1"
                          style={{
                            textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                          }}
                        >
                          Day {schedule.day}
                        </motion.h3>
                        <p className="text-earth-100 flex items-center gap-2 text-base">
                          <Calendar className="w-4 h-4" />
                          {schedule.date}
                        </p>
                      </div>
                    </div>
                    <motion.div 
                      className="px-6 py-3 rounded-full relative overflow-hidden"
                      style={{
                        background: 'linear-gradient(135deg, rgba(139, 69, 19, 0.6), rgba(121, 85, 72, 0.8))',
                        boxShadow: '0 4px 15px rgba(121, 85, 72, 0.4)',
                      }}
                      whileHover={{
                        scale: 1.05,
                        boxShadow: '0 6px 20px rgba(139, 69, 19, 0.6)',
                      }}
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
                      <span className="relative z-10 text-white font-bold text-lg">{schedule.events.length} Events</span>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* Events List */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-0 md:pl-8">
                {schedule.events.map((event, eventIndex) => (
                  <motion.div
                    key={event.name}
                    className="glass-effect rounded-xl p-4 border transition-all duration-300 group"
                    style={{
                      borderColor: 'rgba(121, 85, 72, 0.2)',
                    } as React.CSSProperties}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.3, delay: eventIndex * 0.05 }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div className="text-2xl">
                        {event.element === 'air' && '💨'}
                        {event.element === 'water' && '💧'}
                        {event.element === 'earth' && '🌱'}
                        {event.element === 'fire' && '🔥'}
                        {event.element === 'space' && '🚀'}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-white group-hover:text-earth-300 transition-colors">
                          {event.name}
                        </h4>
                        <p className="text-xs text-white/50 italic">{event.themedName}</p>
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-white/60">
                        <Clock className="w-4 h-4" />
                        <span>Time: TBA</span>
                      </div>
                      <div className="flex items-center gap-2 text-white/60">
                        <MapPin className="w-4 h-4" />
                        <span>Venue: TBA</span>
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-white/10">
                        <span className="text-earth-300 font-semibold">{event.price}</span>
                        <span 
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            backgroundColor: 'rgba(121, 85, 72, 0.2)',
                            color: '#A0826D',
                          }}
                        >
                          {event.eventType}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
