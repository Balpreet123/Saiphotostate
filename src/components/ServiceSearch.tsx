import React from 'react';
import { Search, X, Sparkles } from 'lucide-react';

interface ServiceSearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  resultCount?: number;
  totalCount?: number;
}

export const ServiceSearch: React.FC<ServiceSearchProps> = ({
  searchQuery,
  setSearchQuery,
  resultCount,
  totalCount,
}) => {
  const quickFilters = [
    'Aadhaar',
    'Voter ID',
    'PAN',
    'Passport',
    'Printing',
    'CSC',
    'ITR / Tax',
    'Resume',
    'Scanning',
    'Lamination',
  ];

  const handleChipClick = (keyword: string) => {
    if (searchQuery.toLowerCase() === keyword.toLowerCase()) {
      setSearchQuery('');
    } else {
      // Map display tags to effective search strings
      if (keyword === 'ITR / Tax') {
        setSearchQuery('tax');
      } else {
        setSearchQuery(keyword);
      }
    }
  };

  return (
    <section id="service-search-section" className="relative z-20 -mt-6 sm:-mt-8 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg shadow-slate-900/5 border border-slate-200/90 p-4 sm:p-6">
        {/* Search Bar Input Container */}
        <div className="relative flex items-center">
          <div className="absolute left-4 sm:left-5 pointer-events-none text-slate-400">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-sky-600" />
          </div>

          <input
            id="service-search-input"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="What service do you need? (e.g. Aadhaar, Voter, PAN, Printing, Tax...)"
            aria-label="Search available services"
            className="w-full pl-12 sm:pl-14 pr-12 py-3.5 sm:py-4 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 font-medium bg-slate-50 hover:bg-slate-100/70 focus:bg-white rounded-xl sm:rounded-2xl border border-slate-200 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/15 focus:outline-none transition-all"
          />

          {searchQuery && (
            <button
              id="clear-search-btn"
              type="button"
              onClick={() => setSearchQuery('')}
              aria-label="Clear search input"
              className="absolute right-3.5 sm:right-4 p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Chips */}
        <div className="mt-3.5 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 sm:gap-2">
          <div className="flex items-center gap-1 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 mr-1 select-none">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>Quick:</span>
          </div>

          {quickFilters.map((tag) => {
            const isActive =
              (tag === 'ITR / Tax' && searchQuery.toLowerCase() === 'tax') ||
              searchQuery.toLowerCase() === tag.toLowerCase();

            return (
              <button
                key={tag}
                type="button"
                onClick={() => handleChipClick(tag)}
                className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-all active:scale-95 ${
                  isActive
                    ? 'bg-sky-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-700 hover:bg-sky-100 hover:text-sky-800'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>

        {/* Search Feedback Indicator */}
        {searchQuery.trim() !== '' && typeof resultCount === 'number' && (
          <div className="mt-2.5 text-xs font-medium text-slate-500 flex items-center justify-between">
            <span>
              Showing {resultCount} {resultCount === 1 ? 'service' : 'services'} matching &ldquo;
              <strong className="text-slate-800">{searchQuery}</strong>&rdquo;
            </span>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-sky-600 hover:underline font-semibold"
            >
              Reset Search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
