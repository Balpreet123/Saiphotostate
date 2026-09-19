import React from 'react';
import { Award, MapPin, Store, MessageSquare, ShieldCheck, Printer, Compass, CheckCircle } from 'lucide-react';
import { WHY_CHOOSE_US_POINTS } from '../data/businessData';
import { ServiceIcon } from './ServiceIcon';

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-14 sm:py-20 bg-slate-50 border-t border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Reliable Local Service</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Why Choose Sai Photo State
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            A trusted neighbourhood digital &amp; CSC centre dedicated to resolving your everyday online work
            and paperwork with clarity, speed, and accuracy.
          </p>
        </div>

        {/* 7 Factual Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US_POINTS.map((point, idx) => (
            <div
              key={point.title}
              className={`rounded-2xl p-6 bg-white border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between ${
                idx === 0 ? 'md:col-span-2 lg:col-span-1 border-sky-200 bg-gradient-to-br from-white to-sky-50/40' : ''
              }`}
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-sky-700 border border-sky-100 flex items-center justify-center mb-4">
                  <ServiceIcon name={point.iconName} className="w-5 h-5 text-sky-600" />
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {point.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {point.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-sky-700">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                <span>Verified Service Point</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
