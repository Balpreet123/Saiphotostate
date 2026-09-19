import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, Navigation, Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';
import { getPhoneCallUrl, getGeneralWhatsAppUrl, getGoogleMapsUrl } from '../utils/links';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Services', href: '#services' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About', href: '#about' },
    { label: 'Location', href: '#location' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-2.5'
          : 'bg-white border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#hero"
            aria-label="Sai Photo State - Home"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg"
          >
            <Logo variant="full" size="md" />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-navigation"
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-700 hover:text-sky-600 transition-colors py-1"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Direct CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              id="header-call-btn"
              href={getPhoneCallUrl()}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-sky-600" />
              <span>Call Now</span>
            </a>

            <a
              id="header-whatsapp-btn"
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-sm shadow-emerald-500/20 transition-all active:scale-95"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <a
              id="header-directions-btn"
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Directions to Sai Photo State on Google Maps"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-all"
            >
              <Navigation className="w-3.5 h-3.5 text-sky-600" />
              <span className="hidden xl:inline">Directions</span>
            </a>
          </div>

          {/* Mobile Right Bar: Quick Call & Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              id="mobile-quick-call-btn"
              href={getPhoneCallUrl()}
              aria-label="Call Sai Photo State directly"
              className="p-2 rounded-xl bg-sky-50 text-sky-700 border border-sky-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
            </a>

            <a
              id="mobile-quick-wa-btn"
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Sai Photo State"
              className="p-2 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
            </a>

            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav-menu"
              aria-label="Toggle navigation menu"
              className="p-2 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200"
        >
          <div className="flex flex-col space-y-2 mb-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-semibold text-slate-800 hover:bg-sky-50 hover:text-sky-700 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href={getPhoneCallUrl()}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-slate-900 text-white shadow-sm active:scale-98"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Call Now: {BUSINESS_DATA.phone}</span>
            </a>

            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-sm bg-emerald-600 text-white shadow-sm shadow-emerald-600/20 active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 9888999354</span>
            </a>

            <a
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-semibold text-sm bg-sky-50 text-sky-800 border border-sky-200 active:scale-98"
            >
              <Navigation className="w-4 h-4 text-sky-600" />
              <span>Get Directions (Near Court, Amloh)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
