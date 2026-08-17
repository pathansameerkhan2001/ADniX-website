'use client';

import React, { useState, useEffect } from 'react';
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
    <div
      className={`fixed bottom-safe right-safe z-40 flex items-center gap-3 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      {/* Tooltip bubble on larger screens */}
      <div className="hidden md:flex items-center gap-2 bg-charcoal-900 px-3.5 py-2 rounded-xl shadow-soft-xl border border-charcoal-700 text-xs font-medium text-white animate-pulse-subtle">
        <span>Need quick consultation?</span>
        <button
          onClick={() => setHasDismissed(true)}
          className="text-muted hover:text-white p-1 min-w-[28px] min-h-[28px] flex items-center justify-center"
          aria-label="Dismiss message"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Floating Button with 48px+ touch target */}
      <a
        href={siteConfig.whatsappQuickMessage()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with ADNIX"
        className="w-12 h-12 sm:w-13 sm:h-13 min-w-[48px] min-h-[48px] p-3 rounded-2xl bg-[#059669] hover:bg-[#047857] text-white shadow-soft-xl hover:shadow-glow-gold flex items-center justify-center transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:ring-offset-2"
      >
        <MessageSquare className="w-6 h-6 fill-white" />
      </a>
    </div>
  );
}
