import React, { useState } from 'react';
import { Layers, Phone, MessageCircle } from 'lucide-react';
import { ALL_SERVICES, SERVICE_CATEGORIES, BUSINESS_DATA } from '../data/businessData';
import { ServiceCategoryKey } from '../types';
import { ServiceCard } from './ServiceCard';
import { ServiceIcon } from './ServiceIcon';
import { getPhoneCallUrl, getGeneralWhatsAppUrl } from '../utils/links';

interface AllServicesProps {
  searchQuery: string;
  onClearSearch: () => void;
}

export const AllServices: React.FC<AllServicesProps> = ({ searchQuery, onClearSearch }) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategoryKey | 'all'>('all');

  // Filter services by search query
  const queryNormalized = searchQuery.trim().toLowerCase();

  const filteredServices = ALL_SERVICES.filter((service) => {
    // If there is a search query
    if (queryNormalized) {
      const matchName = service.name.toLowerCase().includes(queryNormalized);
      const matchDesc = service.description.toLowerCase().includes(queryNormalized);
      const matchCategory = service.categoryName.toLowerCase().includes(queryNormalized);
      const matchKeywords = service.keywords.some((kw) => kw.toLowerCase().includes(queryNormalized));

      // Specific mapped aliases for user search expectations:
      // "print" -> Printing, Colour Printing, B&W Printing, Photocopy
      // "photo" -> Passport-size Photos
      // "tax" -> ITR Filing, GST Services
      // "voter" -> Voter ID
      // "aadhaar" -> Aadhaar Card Services
      return matchName || matchDesc || matchCategory || matchKeywords;
    }

    // If no search query, filter by category tab if selected
    if (selectedCategory !== 'all') {
      return service.category === selectedCategory;
    }

    return true;
  });

  const isSearchActive = queryNormalized.length > 0;

  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-800 mb-3 border border-slate-200">
            <Layers className="w-3.5 h-3.5 text-sky-600" />
            <span>Complete Range of Solutions</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            All Services Under One Roof
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            From essential identity papers and state portals to computer typing and instant laser printing,
            browse our complete catalogue of digital services.
          </p>
        </div>

        {/* Category Navigation Pills (When not actively searching) */}
        {!isSearchActive && (
          <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`flex-shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all active:scale-95 ${
                selectedCategory === 'all'
                  ? 'bg-sky-600 text-white shadow-xs shadow-sky-600/25'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Services ({ALL_SERVICES.length})
            </button>

            {SERVICE_CATEGORIES.map((cat) => {
              const count = ALL_SERVICES.filter((s) => s.category === cat.id).length;
              const isSelected = selectedCategory === cat.id;

              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all active:scale-95 ${
                    isSelected
                      ? 'bg-sky-600 text-white shadow-xs shadow-sky-600/25'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  <ServiceIcon name={cat.iconName} className="w-4 h-4" />
                  <span>{cat.title}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        )}

        {/* Search Results / Grouped Services */}
        {isSearchActive ? (
          <div>
            {filteredServices.length > 0 ? (
              <div>
                <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100">
                  <div className="text-sm font-bold text-slate-700">
                    Search Results ({filteredServices.length})
                  </div>
                  <button
                    type="button"
                    onClick={onClearSearch}
                    className="text-xs text-sky-600 font-semibold hover:underline"
                  >
                    Clear Filter
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredServices.map((service) => (
                    <ServiceCard key={service.id} service={service} />
                  ))}
                </div>
              </div>
            ) : (
              /* REQUIRED EXACT EMPTY STATE SPECIFIED IN PROMPT */
              <div
                id="search-empty-state"
                className="my-8 p-8 sm:p-12 text-center rounded-3xl bg-slate-50 border border-dashed border-slate-300 max-w-xl mx-auto"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto mb-4">
                  <Layers className="w-6 h-6" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  No matching service found.
                </h3>

                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Call us at <strong className="text-slate-900 font-bold">{BUSINESS_DATA.phone}</strong> and we&apos;ll help you find the right service.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={getPhoneCallUrl()}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all"
                  >
                    <Phone className="w-4 h-4 text-sky-400" />
                    <span>Call {BUSINESS_DATA.phone}</span>
                  </a>

                  <a
                    href={getGeneralWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Ask on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={onClearSearch}
                    className="w-full sm:w-auto px-4 py-3 rounded-xl text-sm font-semibold text-slate-600 hover:text-slate-900 bg-white border border-slate-200"
                  >
                    View All Services
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          /* Normal Grouped View by Categories */
          <div className="space-y-12">
            {SERVICE_CATEGORIES.filter(
              (cat) => selectedCategory === 'all' || selectedCategory === cat.id
            ).map((category) => {
              const servicesInCat = ALL_SERVICES.filter((s) => s.category === category.id);

              return (
                <div key={category.id} className="pt-2">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-slate-100">
                    <div className="p-2.5 rounded-xl bg-sky-50 text-sky-700 border border-sky-100">
                      <ServiceIcon name={category.iconName} className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight">
                        {category.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Category Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {servicesInCat.map((service) => (
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};
