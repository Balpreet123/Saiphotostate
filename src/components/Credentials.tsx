import React from 'react';
import { ShieldCheck, FileCheck, Award, Lock, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { getGeneralWhatsAppUrl } from '../utils/links';

export const Credentials: React.FC = () => {
  return (
    <section id="credentials" className="py-14 sm:py-18 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <Lock className="w-3.5 h-3.5 text-sky-600" />
            <span>Compliance &amp; Verification</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Official Credentials &amp; Certifications
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Sai Photo State operates as an active CSC &amp; digital citizen access point in Amloh, Punjab.
          </p>
        </div>

        {/* Credentials Grid: Clean Placeholder Area ready for verified certificates */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* CSC Certification Verified Slot */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                  CSC Active Point
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Common Services Center (CSC)
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Authorized citizen service facilitation for central and state online citizen documentation,
                application filings, and utility services.
              </p>

              {/* Explicit placeholder text requested */}
              <div className="p-3.5 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs text-slate-500 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-sky-600 flex-shrink-0" />
                <span>Verified business credentials can be displayed here.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Center Operator: {BUSINESS_DATA.owner}</span>
              <span className="font-semibold text-slate-700">Amloh, Punjab</span>
            </div>
          </div>

          {/* Digital Services & Documentation Competency Slot */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 border border-amber-100 flex items-center justify-center">
                  <Award className="w-6 h-6" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-sky-50 text-sky-700 border border-sky-200">
                  10+ Years Trust
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Digital &amp; Typing Documentation
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Proficient English and Punjabi (Gurmukhi) legal and general typing, tax portal submission assistance,
                and high-precision digital scanning &amp; printing.
              </p>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs text-slate-500 flex items-center gap-2">
                <FileCheck className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Original certificates available on-site at Near Court, Amloh.</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500 flex items-center justify-between">
              <span>Location: Near Court</span>
              <a
                href={getGeneralWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-600 hover:text-sky-800 font-semibold inline-flex items-center gap-1"
              >
                <span>Enquire</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
