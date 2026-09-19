import React from 'react';
import { MessageCircle, Phone, ArrowUpRight } from 'lucide-react';
import { ServiceItem } from '../types';
import { ServiceIcon } from './ServiceIcon';
import { getServiceEnquiryWhatsAppUrl, getPhoneCallUrl } from '../utils/links';

interface ServiceCardProps {
  service: ServiceItem;
  featured?: boolean;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, featured = false }) => {
  const isAadhaarOrVoter =
    service.id === 'aadhaar-card-services' || service.id === 'voter-id';

  return (
    <div
      id={`service-card-${service.id}`}
      className={`group relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 border ${
        isAadhaarOrVoter
          ? 'bg-gradient-to-br from-white via-sky-50/40 to-sky-100/30 border-sky-300 shadow-md hover:shadow-lg hover:border-sky-400 ring-1 ring-sky-200/50'
          : featured
          ? 'bg-white border-slate-200/90 shadow-sm hover:shadow-md hover:border-sky-300'
          : 'bg-white border-slate-200/80 hover:shadow-sm hover:border-slate-300'
      }`}
    >
      <div>
        {/* Top Bar: Icon + Category Badge */}
        <div className="flex items-start justify-between gap-3 mb-3.5">
          <div
            className={`p-3 rounded-xl transition-colors ${
              isAadhaarOrVoter
                ? 'bg-sky-600 text-white shadow-sm shadow-sky-600/30 group-hover:bg-sky-700'
                : 'bg-sky-50 text-sky-700 border border-sky-100 group-hover:bg-sky-100 group-hover:text-sky-800'
            }`}
          >
            <ServiceIcon name={service.iconName} className="w-6 h-6" />
          </div>

          <div className="flex flex-col items-end gap-1">
            {isAadhaarOrVoter && (
              <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-200">
                High Demand
              </span>
            )}
            <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">
              {service.categoryName}
            </span>
          </div>
        </div>

        {/* Service Name */}
        <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2 group-hover:text-sky-700 transition-colors">
          {service.name}
        </h3>

        {/* Short Description */}
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
          {service.description}
        </p>
      </div>

      {/* Action Footer: WhatsApp Enquiry & Call for Details */}
      <div className="pt-3.5 border-t border-slate-100 flex items-center gap-2">
        <a
          href={getServiceEnquiryWhatsAppUrl(service.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`WhatsApp Enquiry for ${service.name}`}
          className={`flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
            isAadhaarOrVoter
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs shadow-emerald-600/30'
              : 'bg-slate-900 hover:bg-sky-700 text-white'
          }`}
        >
          <MessageCircle className="w-3.5 h-3.5 fill-current" />
          <span>WhatsApp Enquiry</span>
        </a>

        <a
          href={getPhoneCallUrl()}
          aria-label={`Call for Details about ${service.name}`}
          title="Call for Details"
          className="inline-flex items-center justify-center p-2.5 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-sky-50 hover:text-sky-700 border border-slate-200/80 transition-colors active:scale-95"
        >
          <Phone className="w-3.5 h-3.5 text-sky-600 mr-1" />
          <span className="hidden sm:inline">Call</span>
        </a>
      </div>
    </div>
  );
};
