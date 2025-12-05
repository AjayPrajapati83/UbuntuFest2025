'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Event } from '@/data/events';
import { getElementColor, getElementIcon } from '@/lib/utils';

interface EventDialogProps {
  event: Event | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function EventDialog({ event, isOpen, onClose }: EventDialogProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    console.log('EventDialog state:', { mounted, isOpen, hasEvent: !!event });
    if (event) {
      console.log('Event data:', event);
      console.log('Event rules:', event.rules);
      console.log('Rules length:', event.rules?.length);
    }
  }, [mounted, isOpen, event]);

  // Enhanced body scroll lock for mobile
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      scrollPositionRef.current = window.pageYOffset || document.documentElement.scrollTop;
      
      // Lock scroll - iOS compatible
      const scrollY = scrollPositionRef.current;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.overflow = 'hidden';
      document.body.style.width = '100%';
      
      // Prevent touch move on body
      const preventScroll = (e: TouchEvent) => {
        if (dialogRef.current && !dialogRef.current.contains(e.target as Node)) {
          e.preventDefault();
        }
      };
      
      document.body.addEventListener('touchmove', preventScroll, { passive: false });
      
      return () => {
        document.body.removeEventListener('touchmove', preventScroll);
        
        // Restore scroll position
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        
        window.scrollTo(0, scrollPositionRef.current);
      };
    }
  }, [isOpen]);
  
  if (!mounted || !event || !isOpen) {
    return null;
  }

  const elementColor = getElementColor(event.element);
  const elementIcon = getElementIcon(event.element);

  // Google Form links
  const inHouseFormLink = 'https://forms.gle/CDhp38C4TRqG2TK8A'; // Patkar College student form
  const outHouseFormLink = 'https://forms.gle/Dvpok7x7W78qm853A'; // External student form

  const dialogContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        overflowY: 'auto',
        overflowX: 'hidden',
        WebkitOverflowScrolling: 'touch',
      } as React.CSSProperties}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
        <div
          ref={dialogRef}
          className="relative w-full max-w-3xl my-auto z-[10000]"
          style={{
            maxHeight: '85dvh',
          } as React.CSSProperties}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button - Positioned outside scrollable area */}
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white hover:scale-110 transition-all z-[10001] touch-manipulation active:scale-95 shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #ff4444, #cc0000)',
              boxShadow: '0 4px 12px rgba(255, 68, 68, 0.6), 0 0 0 3px rgba(255, 255, 255, 0.3)',
            } as React.CSSProperties}
            aria-label="Close dialog"
          >
            <X className="w-6 h-6 sm:w-7 sm:h-7" strokeWidth={3} />
          </button>

          <div
            className="rounded-xl sm:rounded-2xl overflow-hidden border-2 shadow-2xl"
            style={{
              borderColor: `${elementColor.primary}66`,
              background: 'rgb(26, 26, 46)',
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px ${elementColor.primary}33`,
            } as React.CSSProperties}
          >
            <div
              className="overflow-y-auto overflow-x-hidden"
              style={{
                maxHeight: '85dvh',
                WebkitOverflowScrolling: 'touch',
              } as React.CSSProperties}
            >

              {/* Header */}
              <div
                className="p-4 sm:p-5 border-b border-white/10"
                style={{
                  background: `linear-gradient(135deg, ${elementColor.primary}15, transparent)`,
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="text-4xl sm:text-5xl flex-shrink-0">
                    {elementIcon}
                  </div>
                  <div className="flex-1 min-w-0 pr-8">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-1 leading-tight">{event.name}</h2>
                    <p className={`text-sm sm:text-base font-medium italic mb-2.5`} style={{ color: elementColor.primary }}>
                      {event.themedName}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      <span
                        className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                        style={{
                          backgroundColor: `${elementColor.primary}33`,
                          color: elementColor.primary,
                        }}
                      >
                        {event.element.toUpperCase()}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        Day {event.day}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {event.eventType}
                      </span>
                      <span className="text-xs px-2.5 py-0.5 rounded-full bg-white/10 text-white/70">
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 space-y-4">
                {/* Price and Description Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Price */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-1.5 select-none">
                      💰 Registration Fee
                    </h3>
                    <div className="glass-effect rounded-lg p-3 sm:p-4">
                      {event.soloPrice && (
                        <p className="text-base sm:text-xl font-bold" style={{ color: elementColor.primary }}>
                          Solo: {event.soloPrice}
                        </p>
                      )}
                      {event.groupPrice && (
                        <p className="text-base sm:text-xl font-bold mt-0.5" style={{ color: elementColor.primary }}>
                          Group: {event.groupPrice}
                        </p>
                      )}
                      {!event.soloPrice && !event.groupPrice && (
                        <p className="text-base sm:text-xl font-bold" style={{ color: elementColor.primary }}>
                          {event.price}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-1.5 select-none">
                      📝 Description
                    </h3>
                    <div className="glass-effect rounded-lg p-3 sm:p-4">
                      <p className="text-sm sm:text-base text-white/70 leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>

                {/* Rules */}
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white mb-2 flex items-center gap-1.5 select-none">
                    📋 Rules & Guidelines
                  </h3>
                  <div className="glass-effect rounded-lg p-3 sm:p-4">
                    {event.rules && event.rules.length > 0 ? (
                      <ul className="space-y-2">
                        {event.rules.map((rule, index) => (
                          <li key={index} className="text-sm sm:text-base text-white/80 flex items-start gap-2.5 leading-relaxed">
                            <span className="font-bold mt-0.5" style={{ color: elementColor.primary }}>•</span>
                            <span className="flex-1">{rule}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-sm sm:text-base text-white/50 italic">Coming Soon</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Footer - Registration Buttons */}
              <div className="p-4 sm:p-5 border-t border-white/10 bg-black/20">
                {event.name === 'BGMI' ? (
                  // Single button for BGMI
                  <a
                    href="https://forms.gle/rPxuPmcijJixikzTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base text-center text-white transition-all hover:opacity-90 active:scale-98 touch-manipulation shadow-lg"
                    style={{
                      background: `linear-gradient(135deg, ${elementColor.primary}, ${elementColor.secondary})`,
                      WebkitTapHighlightColor: 'transparent',
                    } as React.CSSProperties}
                  >
                    🎮 Register for BGMI
                  </a>
                ) : (
                  // Two buttons for all other events
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    <a
                      href={inHouseFormLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base text-center text-white transition-all hover:opacity-90 active:scale-98 touch-manipulation shadow-lg"
                      style={{
                        background: `linear-gradient(135deg, ${elementColor.primary}, ${elementColor.secondary})`,
                        WebkitTapHighlightColor: 'transparent',
                      } as React.CSSProperties}
                    >
                      🎓 In-House Registration (Patkar College only)
                    </a>

                    <a
                      href={outHouseFormLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full py-2.5 sm:py-3 px-4 rounded-lg font-semibold text-sm sm:text-base text-center text-white border-2 transition-all hover:bg-white/5 active:scale-98 touch-manipulation"
                      style={{
                        borderColor: elementColor.primary,
                        background: 'rgba(255, 255, 255, 0.05)',
                        WebkitTapHighlightColor: 'transparent',
                      } as React.CSSProperties}
                    >
                      🌍 Out-House Registration
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
    </div>
  );

  return createPortal(dialogContent, document.body);
}
