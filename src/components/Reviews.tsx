import React from 'react';
import { MessageSquare, ExternalLink, MapPin } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { getGoogleMapsUrl } from '../utils/links';

export const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <MessageSquare className="w-3.5 h-3.5 text-sky-600" />
            <span>Community Feedback</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            What Our Customers Say
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            We value genuine relationships with residents, advocates, and students across Amloh.
          </p>
        </div>

        {/* Clean Empty / Review-Ready Design (No fabricated names, no fake star ratings) */}
        <div className="max-w-2xl mx-auto bg-slate-50 border border-dashed border-slate-300 rounded-3xl p-8 sm:p-12 text-center">
          <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-700 flex items-center justify-center mx-auto mb-4">
            <MessageSquare className="w-7 h-7" />
          </div>

          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Customer reviews will appear here.
          </h3>

          <p className="text-sm text-slate-600 mb-6 max-w-md mx-auto leading-relaxed">
            Have you recently visited Sai Photo State for online work, government documents, or printing?
            Your direct feedback helps us serve Amloh even better.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              id="share-experience-btn"
              href={getGoogleMapsUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm bg-sky-600 hover:bg-sky-700 text-white shadow-sm shadow-sky-600/20 active:scale-95 transition-all"
            >
              <span>Share Your Experience</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href="#location"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-white hover:bg-slate-100 text-slate-700 border border-slate-300 active:scale-95 transition-all"
            >
              <MapPin className="w-4 h-4 text-sky-600" />
              <span>Find Us Near Court</span>
            </a>
          </div>

          <div className="mt-6 pt-5 border-t border-slate-200/80 text-xs text-slate-500">
            Official Google Business Profile • Sai Photo State, Amloh
          </div>
        </div>
      </div>
    </section>
  );
};
