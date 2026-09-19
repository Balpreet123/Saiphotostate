import React from 'react';
import { User, Award, MapPin, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../utils/links';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Business Bio & Highlights */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
              <span>About Sai Photo State</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-5">
              Serving the Amloh Community with Integrity for Over a Decade
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Sai Photo State is a local digital and CSC service centre in Amloh, providing a wide range of
                government, online, documentation, financial and digital services under one roof.
              </p>
              <p>
                With more than 10 years of service experience, our aim is to make everyday online and
                documentation work simple, convenient and accessible for everyone.
              </p>
            </div>

            {/* Quick Contact & Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={getPhoneCallUrl()}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-all active:scale-95"
              >
                <Phone className="w-4 h-4 text-sky-400" />
                <span>Call {BUSINESS_DATA.owner}: {BUSINESS_DATA.phone}</span>
              </a>

              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Enquiry</span>
              </a>
            </div>
          </div>

          {/* Right Column: Business Profile Card */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-sky-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-700/50">
              <div className="flex items-center justify-between pb-6 border-b border-slate-700">
                <div>
                  <h3 className="text-xl font-extrabold text-white tracking-tight">
                    {BUSINESS_DATA.name}
                  </h3>
                  <p className="text-xs text-sky-300 font-semibold tracking-wide mt-0.5">
                    {BUSINESS_DATA.businessType}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Est. 10+ Years
                </span>
              </div>

              <div className="mt-6 space-y-4 text-sm">
                {/* Owner */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-sky-400 border border-slate-700">
                    <User className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">
                      Owner / Proprietor
                    </div>
                    <div className="text-base font-bold text-white">
                      {BUSINESS_DATA.owner}
                    </div>
                  </div>
                </div>

                {/* Experience */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-amber-400 border border-slate-700">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">
                      Experience
                    </div>
                    <div className="text-base font-bold text-white">
                      {BUSINESS_DATA.experience}
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 uppercase font-semibold">
                      Address
                    </div>
                    <div className="text-sm font-medium text-slate-200">
                      {BUSINESS_DATA.address}
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Commitment */}
              <div className="mt-6 pt-5 border-t border-slate-700/80 flex items-center justify-between text-xs text-slate-400">
                <span>Direct Personal Support</span>
                <span className="text-sky-300 font-semibold">9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
