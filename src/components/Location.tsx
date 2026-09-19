import React from 'react';
import { MapPin, Navigation, Clock, Phone, MessageCircle, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { getGoogleMapsUrl, getPhoneCallUrl, getGeneralWhatsAppUrl } from '../utils/links';

export const Location: React.FC = () => {
  return (
    <section id="location" className="py-14 sm:py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <Compass className="w-3.5 h-3.5 text-sky-600" />
            <span>Map &amp; Timing</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Visit Sai Photo State
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Conveniently located Near Court in Amloh, readily reachable by road with parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Location Info Card */}
          <div className="lg:col-span-5 flex flex-col justify-between rounded-3xl bg-white p-6 sm:p-8 border border-slate-200/90 shadow-sm">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Open Daily
                </span>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4">
                {BUSINESS_DATA.name}
              </h3>

              {/* Address Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex-shrink-0">
                    <MapPin className="w-5 h-5 text-sky-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Address
                    </div>
                    <div className="text-base font-semibold text-slate-800 leading-snug mt-0.5">
                      Sai Photo State,
                      <br />
                      Near Court,
                      <br />
                      Amloh, Punjab – 147203
                    </div>
                    <div className="mt-1 text-xs text-sky-700 font-medium">
                      Landmark: Near Court Complex
                    </div>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex-shrink-0">
                    <Clock className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Opening Hours
                    </div>
                    <div className="text-base font-bold text-slate-800 mt-0.5">
                      {BUSINESS_DATA.openingHours}
                    </div>
                    <div className="text-xs text-slate-500">
                      Citizen assistance throughout working hours
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-6 border-t border-slate-100">
              <a
                id="location-get-directions-btn"
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm shadow-sky-600/20 active:scale-98 transition-all"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Get Directions on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1 opacity-70" />
              </a>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href={getPhoneCallUrl()}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-slate-900 text-white hover:bg-slate-800 transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>Call {BUSINESS_DATA.phone}</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs bg-emerald-600 text-white hover:bg-emerald-700 transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Us</span>
                </a>
              </div>
            </div>
          </div>

          {/* Embedded Google Maps View */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-sm bg-slate-100 flex flex-col min-h-[380px]">
            <div className="bg-white px-4 py-3 border-b border-slate-200 flex items-center justify-between text-xs">
              <span className="font-bold text-slate-700 flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-sky-600" />
                <span>Amloh, Punjab – 147203</span>
              </span>
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:underline font-semibold flex items-center gap-1"
              >
                <span>Open in Maps App</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="relative flex-1 w-full h-full min-h-[350px]">
              <iframe
                title="Sai Photo State Location Map"
                src="https://maps.google.com/maps?q=Sai+Photo+State+Near+Court+Amloh+Punjab+147203&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full absolute inset-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
