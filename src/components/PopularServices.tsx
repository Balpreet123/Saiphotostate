import React from 'react';
import { ShieldCheck, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ALL_SERVICES } from '../data/businessData';
import { ServiceCard } from './ServiceCard';
import { getGeneralWhatsAppUrl, getPhoneCallUrl } from '../utils/links';

interface PopularServicesProps {
  onSelectService?: (serviceName: string) => void;
}

export const PopularServices: React.FC<PopularServicesProps> = () => {
  // Extract the popular government services
  const govtServices = ALL_SERVICES.filter((s) => s.featuredInGovt);

  const topTwo = govtServices.filter(
    (s) => s.id === 'aadhaar-card-services' || s.id === 'voter-id'
  );
  const remainingGovt = govtServices.filter(
    (s) => s.id !== 'aadhaar-card-services' && s.id !== 'voter-id'
  );

  return (
    <section id="popular-services" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
            <span>Essential Citizen &amp; Identity Documentation</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Popular Government Services
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Most frequently requested government IDs, certificates and verification services in Amloh.
            Walk in with your details or connect with us on WhatsApp for exact requirements.
          </p>
        </div>

        {/* TOP TWO: Aadhaar Card Services & Voter ID - Extra Visual Prominence */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
              Primary Citizen Identification Services
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {topTwo.map((service) => (
              <ServiceCard key={service.id} service={service} featured={true} />
            ))}
          </div>
        </div>

        {/* Other 8 Government Documents */}
        <div>
          <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-4">
            Additional Certificates &amp; Citizen Licences
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {remainingGovt.map((service) => (
              <ServiceCard key={service.id} service={service} featured={false} />
            ))}
          </div>
        </div>

        {/* Helpful Assistance Banner */}
        <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 mb-1">
              Need assistance with document requirements or eligibility?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600">
              Every certificate has specific document prerequisites. Ask us directly before visiting to save time.
            </p>
          </div>

          <div className="flex items-center gap-2.5 flex-shrink-0 w-full sm:w-auto">
            <a
              href={getGeneralWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={getPhoneCallUrl()}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-slate-800 text-white transition-all active:scale-95"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Centre</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
