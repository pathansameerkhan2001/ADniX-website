'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250 && !hasDismissed) {
        setIsVisible(true);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasDismissed]);

  if (hasDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.9 }}
          transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
          className="fixed bottom-safe right-safe z-40 flex items-center gap-3"
        >
          {/* Tooltip bubble on larger screens */}
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="hidden md:flex items-center gap-2 bg-charcoal-900 px-3.5 py-2 rounded-xl shadow-soft-xl border border-charcoal-700 text-xs font-medium text-white"
          >
            <span>Need quick consultation?</span>
            <button
              onClick={() => setHasDismissed(true)}
              className="text-muted hover:text-white p-1 min-w-[28px] min-h-[28px] flex items-center justify-center rounded-lg hover:bg-charcoal-800 transition-colors"
              aria-label="Dismiss message"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </motion.div>

          {/* Floating Button with 48px+ touch target */}
          <motion.a
            href={siteConfig.whatsappQuickMessage()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp with ADNIX"
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.94 }}
            className="w-12 h-12 sm:w-13 sm:h-13 min-w-[48px] min-h-[48px] p-3 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white shadow-soft-xl hover:shadow-glow-gold flex items-center justify-center transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
          >
            <MessageSquare className="w-6 h-6 fill-white" />
          </motion.a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
