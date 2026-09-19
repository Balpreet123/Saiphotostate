import React from 'react';
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_DATA } from '../data/businessData';
import { getPhoneCallUrl, getGeneralWhatsAppUrl, getGoogleMapsUrl } from '../utils/links';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-slate-950 text-slate-300 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-4">
            <Logo variant="full" theme="white" size="md" />

            <p className="text-sm sm:text-base font-medium text-slate-300 italic">
              &ldquo;{BUSINESS_DATA.tagline}&rdquo;
            </p>

            <p className="text-xs sm:text-sm text-slate-400 max-w-md leading-relaxed">
              Fast, reliable and convenient digital, government and documentation services — all at Sai Photo State, Near Court, Amloh, Punjab.
            </p>

            {/* Direct WhatsApp Badge - ONLY WhatsApp as requested */}
            <div className="pt-2">
              <a
                id="footer-whatsapp-btn"
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp: {BUSINESS_DATA.whatsapp}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Quick Links
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#popular-services" className="hover:text-white transition-colors">
                  Popular Government Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  All Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-white transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Centre
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">
                  Location &amp; Hours
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact &amp; Enquiry
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-100">
              Contact Centre
            </div>

            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 flex-shrink-0" />
                <a href={getPhoneCallUrl()} className="hover:text-white font-medium">
                  {BUSINESS_DATA.phone}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 fill-current" />
                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white font-medium"
                >
                  {BUSINESS_DATA.whatsapp}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${BUSINESS_DATA.email}`} className="hover:text-white break-all font-medium">
                  {BUSINESS_DATA.email}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <a
                  href={getGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white leading-relaxed text-xs"
                >
                  Near Court, Amloh, Punjab – 147203
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Sai Photo State. All Rights Reserved.</p>
          <p className="text-[11px] text-slate-400">
            Proprietor: Baljit Singh (Binni) • 10+ Years of Service in Amloh
          </p>
        </div>
      </div>
    </footer>
  );
};
