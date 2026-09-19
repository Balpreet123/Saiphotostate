import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Navigation, ArrowUp } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { getPhoneCallUrl, getGeneralWhatsAppUrl, getGoogleMapsUrl } from '../utils/links';

export const FloatingActions: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Subtle Back to Top Button (Appears after 300px scroll) */}
      {showBackToTop && (
        <button
          id="back-to-top-btn"
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll back to top of page"
          className="fixed bottom-20 sm:bottom-8 left-4 z-40 p-3 rounded-full bg-white/95 text-slate-700 shadow-md border border-slate-200/80 hover:bg-slate-50 hover:text-sky-600 active:scale-95 transition-all backdrop-blur-xs"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Desktop Floating WhatsApp Button (Visible while scrolling on sm+ screens) */}
      <div className="hidden sm:block fixed bottom-8 right-6 z-40">
        <a
          id="floating-whatsapp-btn"
          href={getGeneralWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Sai Photo State on WhatsApp"
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-900/20 active:scale-95 transition-all"
        >
          {/* Pulsing online badge indicator */}
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-100" />
          </span>

          <MessageCircle className="w-5 h-5 fill-current" />
          <span className="text-sm font-bold tracking-tight">WhatsApp Us</span>
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar: Call, WhatsApp, Directions */}
      <div
        id="mobile-floating-action-bar"
        className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2 shadow-2xl"
      >
        <div className="grid grid-cols-3 gap-2">
          {/* Mobile Call */}
          <a
            id="mobile-bottom-call"
            href={getPhoneCallUrl()}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-900 text-white active:scale-95 transition-all"
          >
            <Phone className="w-4 h-4 text-sky-400 mb-0.5" />
            <span className="text-[11px] font-bold">Call Now</span>
          </a>

          {/* Mobile WhatsApp */}
          <a
            id="mobile-bottom-whatsapp"
            href={getGeneralWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 text-white active:scale-95 transition-all shadow-xs"
          >
            <MessageCircle className="w-4 h-4 fill-current mb-0.5" />
            <span className="text-[11px] font-bold">WhatsApp</span>
          </a>

          {/* Mobile Directions */}
          <a
            id="mobile-bottom-directions"
            href={getGoogleMapsUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-sky-50 text-sky-800 border border-sky-200 active:scale-95 transition-all"
          >
            <Navigation className="w-4 h-4 text-sky-600 mb-0.5" />
            <span className="text-[11px] font-bold">Directions</span>
          </a>
        </div>
      </div>
    </>
  );
};
