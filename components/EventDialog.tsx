'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Event } from '@/data/events';
import { getElementColor, getElementIcon } from '@/lib/utils';
import { useEffect } from 'react';

interface EventDialogProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDialog({ event, isOpen, onClose }: EventDialogProps) {
  // Lock body scroll when dialog is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  if (!event) return null;

  const elementColor = getElementColor(event.element);
  const elementIcon = getElementIcon(event.element);

  // Google Form links - will be updated later
  const inHouseFormLink = '#'; // TODO: Add Patkar College student form link
  const outHouseFormLink = '#'; // TODO: Add external student form link

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-4 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="glass-effect-strong rounded-xl sm:rounded-2xl max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto border-2 relative"
              style={{
                borderColor: `${elementColor.primary}66`,
              } as React.CSSProperties}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full glass-effect flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Header */}
              <div
                className="p-4 sm:p-6 border-b border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${elementColor.primary}22, transparent)`,
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <motion.div
                    className="text-3xl sm:text-5xl"
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    {elementIcon}
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">{event.name}</h2>
                    <p className={`text-sm sm:text-lg font-medium italic mb-2 truncate`} style={{ color: elementColor.primary }}>
                      {event.themedName}
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      <span
                        className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full font-semibold"
                        style={{
                          backgroundColor: `${elementColor.primary}33`,
                          color: elementColor.primary,
                        }}
                      >
                        {event.element.toUpperCase()}
                      </span>
                      <span className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white/70">
                        Day {event.day}
                      </span>
                      <span className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white/70">
                        {event.eventType}
                      </span>
                      <span className="text-xs px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 text-white/70">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
                {/* Price */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    💰 Registration Fee
                  </h3>
                  <div className="glass-effect rounded-lg p-3 sm:p-4">
                    {event.soloPrice && (
                      <p className="text-xl sm:text-2xl font-bold" style={{ color: elementColor.primary }}>
                        Solo: {event.soloPrice}
                      </p>
                    )}
                    {event.groupPrice && (
                      <p className="text-xl sm:text-2xl font-bold" style={{ color: elementColor.primary }}>
                        Group: {event.groupPrice}
                      </p>
                    )}
                    {!event.soloPrice && !event.groupPrice && (
                      <p className="text-xl sm:text-2xl font-bold" style={{ color: elementColor.primary }}>
                        {event.price}
                      </p>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    📝 Description
                  </h3>
                  <p className="text-sm sm:text-base text-white/70 leading-relaxed">{event.description}</p>
                </div>

                {/* Rules */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 flex items-center gap-2">
                    📋 Rules & Guidelines
                  </h3>
                  <div className="glass-effect rounded-lg p-3 sm:p-4">
                    {event.rules.length > 0 ? (
                      <ul className="space-y-2">
                        {event.rules.map((rule, index) => (
                          <li key={index} className="text-sm sm:text-base text-white/70 flex items-start gap-2">
                            <span className="text-white/40 mt-1">•</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-white/50 italic">Rules will be announced soon</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer - Registration Buttons */}
              <div className="p-4 sm:p-6 border-t border-white/10 space-y-2 sm:space-y-3">
                <motion.a
                  href={inHouseFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base text-center text-white transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${elementColor.primary}, ${elementColor.secondary})`,
                  } as React.CSSProperties}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🎓 Register In-House (Patkar College)
                </motion.a>

                <motion.a
                  href={outHouseFormLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-semibold text-sm sm:text-base text-center text-white border-2 glass-effect transition-all"
                  style={{
                    borderColor: elementColor.primary,
                  } as React.CSSProperties}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  🌍 Register Out-House (External)
                </motion.a>

                <motion.button
                  onClick={onClose}
                  className="w-full py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg font-medium text-sm sm:text-base text-center text-white/70 hover:text-white glass-effect border border-white/10 hover:border-white/30 transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
