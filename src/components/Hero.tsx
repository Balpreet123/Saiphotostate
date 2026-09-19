import React from 'react';
import {
  Phone,
  MessageCircle,
  Navigation,
  Clock,
  MapPin,
  Award,
  Search,
  X,
  Sparkles,
  ArrowRight,
  Fingerprint,
  Vote,
  CreditCard,
  Printer,
  Camera,
  Laptop,
  Car,
  FileCheck,
  CheckCircle2,
} from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import {
  getPhoneCallUrl,
  getGeneralWhatsAppUrl,
  getGoogleMapsUrl,
  getServiceEnquiryWhatsAppUrl,
} from '../utils/links';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  onSelectService?: (serviceName: string) => void;
}

const FIRST_PAGE_SERVICES = [
  {
    id: 'aadhaar-card-services',
    name: 'Aadhaar Card',
    fullName: 'Aadhaar Card Services',
    subtitle: 'Download, PVC & Updates',
    icon: Fingerprint,
    badge: 'High Demand',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
    iconColor: 'bg-sky-600 text-white',
    searchKeyword: 'Aadhaar',
  },
  {
    id: 'voter-id',
    name: 'Voter ID Card',
    fullName: 'Voter ID',
    subtitle: 'New Apply & Correction',
    icon: Vote,
    badge: 'High Demand',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
    iconColor: 'bg-indigo-600 text-white',
    searchKeyword: 'Voter ID',
  },
  {
    id: 'pan-card',
    name: 'PAN Card',
    fullName: 'PAN Card',
    subtitle: 'New Apply & Correction',
    icon: CreditCard,
    badge: 'Instant e-PAN',
    badgeBg: 'bg-emerald-100 text-emerald-900 border-emerald-200',
    iconColor: 'bg-emerald-600 text-white',
    searchKeyword: 'PAN',
  },
  {
    id: 'printing',
    name: 'Print & Xerox',
    fullName: 'Printing',
    subtitle: 'B&W, Colour & Lamination',
    icon: Printer,
    badge: 'Instant In-Shop',
    badgeBg: 'bg-sky-100 text-sky-900 border-sky-200',
    iconColor: 'bg-sky-700 text-white',
    searchKeyword: 'Printing',
  },
  {
    id: 'passport-size-photos',
    name: 'Passport Photos',
    fullName: 'Passport-size Photos',
    subtitle: 'Urgent 5-Minute Delivery',
    icon: Camera,
    badge: 'Ready in 5 Mins',
    badgeBg: 'bg-rose-100 text-rose-900 border-rose-200',
    iconColor: 'bg-rose-600 text-white',
    searchKeyword: 'photo',
  },
  {
    id: 'online-form-filling',
    name: 'Online Forms',
    fullName: 'Online Form Filling',
    subtitle: 'Govt Jobs & Admissions',
    icon: Laptop,
    badge: 'Recruitment',
    badgeBg: 'bg-purple-100 text-purple-900 border-purple-200',
    iconColor: 'bg-purple-600 text-white',
    searchKeyword: 'form',
  },
  {
    id: 'driving-licence-services',
    name: 'Driving Licence',
    fullName: 'Driving Licence Services',
    subtitle: 'Learner & Permanent DL',
    icon: Car,
    badge: 'Sarathi Portal',
    badgeBg: 'bg-slate-100 text-slate-800 border-slate-200',
    iconColor: 'bg-slate-700 text-white',
    searchKeyword: 'driving',
  },
  {
    id: 'itr-filing',
    name: 'ITR & GST / Tax',
    fullName: 'ITR Filing',
    subtitle: 'Returns & Citizen Accounts',
    icon: FileCheck,
    badge: 'Tax Support',
    badgeBg: 'bg-amber-100 text-amber-900 border-amber-200',
    iconColor: 'bg-amber-600 text-white',
    searchKeyword: 'tax',
  },
];

const QUICK_TAGS = [
  'Aadhaar',
  'Voter ID',
  'PAN',
  'Printing',
  'Photos',
  'Forms',
  'Driving Licence',
  'Tax / ITR',
];

export const Hero: React.FC<HeroProps> = ({ searchQuery, setSearchQuery }) => {
  const handleTagClick = (tag: string) => {
    let query = tag;
    if (tag === 'Photos') query = 'photo';
    if (tag === 'Forms') query = 'form';
    if (tag === 'Tax / ITR') query = 'tax';

    if (searchQuery.toLowerCase() === query.toLowerCase()) {
      setSearchQuery('');
    } else {
      setSearchQuery(query);
      const servicesEl = document.getElementById('services');
      if (servicesEl) {
        servicesEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCardClick = (serviceFullName: string, searchKeyword: string) => {
    setSearchQuery(searchKeyword);
    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-b from-sky-50/70 via-white to-slate-50 pt-5 pb-10 sm:pt-8 sm:pb-14 border-b border-slate-200/80"
    >
      {/* Background Subtle Tech & Mesh Accents */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-60">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Business Brand & Core Contact Actions */}
          <div className="lg:col-span-5 flex flex-col text-left">
            {/* Top Badge: 10+ Years of Trust & Business Name */}
            <div className="inline-flex flex-wrap items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-900 border border-sky-200/80 shadow-xs">
                <Award className="w-3.5 h-3.5 text-sky-700" />
                <span>{BUSINESS_DATA.experience} of Service</span>
              </span>

              <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-white/80 px-2.5 py-1 rounded-full border border-slate-200">
                <MapPin className="w-3.5 h-3.5 text-amber-600" />
                <span>Near Court, Amloh</span>
              </span>
            </div>

            {/* Business Brand Identifier */}
            <div className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-sky-700 mb-1">
              {BUSINESS_DATA.name}
            </div>

            {/* Primary Headline */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-[1.2] mb-3">
              {BUSINESS_DATA.tagline}
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-5">
              {BUSINESS_DATA.supportingText}
            </p>

            {/* Primary Action Buttons: Call Now, WhatsApp, Directions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mb-5">
              {/* Call Now */}
              <a
                id="hero-cta-call"
                href={getPhoneCallUrl()}
                className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-bold text-sm bg-slate-900 hover:bg-slate-800 text-white shadow-md active:scale-[0.98] transition-all"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS_DATA.phone}</span>
              </a>

              {/* WhatsApp Us */}
              <a
                id="hero-cta-whatsapp"
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3 sm:py-3.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Us</span>
              </a>

              {/* Get Directions */}
              <a
                id="hero-cta-directions"
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-4 py-3 sm:py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-sky-50 text-sky-800 border border-slate-300 hover:border-sky-300 shadow-xs active:scale-[0.98] transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-sky-600" />
                <span>Directions</span>
              </a>
            </div>

            {/* Quick Timing & Location Line */}
            <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-sky-600" />
                <span>Open: {BUSINESS_DATA.openingHours}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-semibold text-slate-700">In-Person &amp; Online Work</span>
              </span>
            </div>
          </div>

          {/* Right Column: INSTANT SERVICES ON FIRST PAGE (Directly Visible Without Rushing) */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-slate-200/90 shadow-lg shadow-slate-900/5">
              {/* Header of Services Panel */}
              <div className="flex items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-sky-50 text-sky-700">
                    <Sparkles className="w-4 h-4 text-sky-600" />
                  </div>
                  <div>
                    <h2 className="text-sm sm:text-base font-black text-slate-900 tracking-tight">
                      Quick Services on First Screen
                    </h2>
                    <p className="text-[11px] sm:text-xs text-slate-500">
                      Tap any service to enquire directly on WhatsApp
                    </p>
                  </div>
                </div>

                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Ready in Amloh</span>
                </span>
              </div>

              {/* Instant Search Bar directly on the First Page */}
              <div className="relative flex items-center mb-3">
                <div className="absolute left-3.5 pointer-events-none text-slate-400">
                  <Search className="w-4 h-4 text-sky-600" />
                </div>

                <input
                  id="hero-service-search-input"
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search 33 services (Aadhaar, Voter, PAN, Printing, Photos...)"
                  aria-label="Search available services on first page"
                  className="w-full pl-10 pr-10 py-2.5 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 font-medium bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all"
                />

                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search input"
                    className="absolute right-3 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Quick Tags for Instant 1-Tap Filtering */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-2.5 mb-3 no-scrollbar text-xs">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex-shrink-0">
                  Quick:
                </span>
                {QUICK_TAGS.map((tag) => {
                  let activeKey = tag.toLowerCase();
                  if (tag === 'Photos') activeKey = 'photo';
                  if (tag === 'Forms') activeKey = 'form';
                  if (tag === 'Tax / ITR') activeKey = 'tax';
                  const isActive = searchQuery.toLowerCase().includes(activeKey);

                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => handleTagClick(tag)}
                      className={`flex-shrink-0 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all active:scale-95 ${
                        isActive
                          ? 'bg-sky-600 text-white shadow-xs'
                          : 'bg-slate-100 text-slate-700 hover:bg-sky-50 hover:text-sky-800'
                      }`}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>

              {/* 8-Grid of High-Demand Everyday Services */}
              <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
                {FIRST_PAGE_SERVICES.map((item) => {
                  const IconComp = item.icon;
                  const isAadhaarOrVoter =
                    item.id === 'aadhaar-card-services' || item.id === 'voter-id';

                  return (
                    <div
                      key={item.id}
                      className={`group relative flex flex-col justify-between p-3 rounded-xl border transition-all duration-150 ${
                        isAadhaarOrVoter
                          ? 'bg-gradient-to-b from-sky-50/70 to-white border-sky-300 shadow-2xs hover:shadow-sm'
                          : 'bg-white border-slate-200/90 hover:border-sky-300 hover:shadow-2xs'
                      }`}
                    >
                      <div>
                        {/* Icon & Badge */}
                        <div className="flex items-start justify-between gap-1 mb-2">
                          <div
                            className={`p-2 rounded-lg ${item.iconColor} shadow-2xs`}
                          >
                            <IconComp className="w-4 h-4" />
                          </div>

                          <span
                            className={`text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border ${item.badgeBg}`}
                          >
                            {item.badge}
                          </span>
                        </div>

                        {/* Service Title */}
                        <button
                          type="button"
                          onClick={() => handleCardClick(item.fullName, item.searchKeyword)}
                          className="text-left w-full group-hover:text-sky-700 transition-colors"
                        >
                          <div className="text-xs sm:text-sm font-black text-slate-900 leading-snug">
                            {item.name}
                          </div>
                          <div className="text-[10px] sm:text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {item.subtitle}
                          </div>
                        </button>
                      </div>

                      {/* Direct 1-Tap Action: WhatsApp */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center gap-1.5">
                        <a
                          href={getServiceEnquiryWhatsAppUrl(item.fullName)}
                          target="_blank"
                          rel="noopener noreferrer"
                          title={`WhatsApp enquiry for ${item.name}`}
                          className="w-full inline-flex items-center justify-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-bold bg-emerald-600 hover:bg-emerald-700 text-white transition-all active:scale-95 shadow-2xs"
                        >
                          <MessageCircle className="w-3 h-3 fill-current" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Bottom Jump Link: Browse all 33 services */}
              <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  Showing top services. Complete 33-service catalogue available.
                </span>
                <a
                  href="#services"
                  className="inline-flex items-center gap-1 font-bold text-sky-700 hover:text-sky-900 transition-colors"
                >
                  <span>View All 33 Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

