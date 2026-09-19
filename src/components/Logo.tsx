import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'symbol-only';
  theme?: 'default' | 'white' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'full',
  theme = 'default',
  className = '',
  size = 'md',
}) => {
  const isWhite = theme === 'white';
  const isDark = theme === 'dark';

  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base font-bold',
    md: 'text-lg font-extrabold tracking-tight',
    lg: 'text-2xl font-black tracking-tight',
  };

  const subtitleSizes = {
    sm: 'text-[10px] tracking-wide',
    md: 'text-xs tracking-wider',
    lg: 'text-xs tracking-widest',
  };

  return (
    <div id="site-logo" className={`flex items-center gap-3 select-none ${className}`}>
      {/* Symbol Emblem */}
      <div className={`relative flex-shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="logo-bg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0284c7" />
              <stop offset="50%" stopColor="#0369a1" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
            <linearGradient id="logo-accent-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="logo-leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
          </defs>

          {/* Base rounded shield container */}
          <rect width="48" height="48" rx="12" fill="url(#logo-bg-grad)" />

          {/* Subtle outer tech frame grid */}
          <rect
            x="3"
            y="3"
            width="42"
            height="42"
            rx="9"
            stroke="#ffffff"
            strokeOpacity="0.15"
            strokeWidth="1"
          />

          {/* Document outline layer (Documentation & CSC) */}
          <path
            d="M13 12H27L35 20V36C35 37.1046 34.1046 38 33 38H13C11.8954 38 11 37.1046 11 36V14C11 12.8954 11.8954 12 13 12Z"
            fill="#ffffff"
            fillOpacity="0.12"
            stroke="#e0f2fe"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Document Fold Tab */}
          <path
            d="M27 12V20H35"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Aperture / Lens Optical Ring (Photography & Imaging) */}
          <circle
            cx="23"
            cy="27"
            r="6.5"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.2"
            strokeDasharray="4 1.5"
          />

          {/* Central Optical Core & Digital Spark (Online / Connectivity) */}
          <circle cx="23" cy="27" r="3.2" fill="#ffffff" />
          <circle cx="23" cy="27" r="1.3" fill="#0284c7" />

          {/* Golden CSC / Digital India Spark Accent at top right */}
          <circle cx="34" cy="14" r="3" fill="url(#logo-leaf-grad)" />
          <path
            d="M34 11V17M31 14H37"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Document data lines (Online Work & Forms) */}
          <line x1="16" y1="34" x2="28" y2="34" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text Hierarchy */}
      {variant !== 'symbol-only' && (
        <div className="flex flex-col leading-none">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-sans ${titleSizes[size]} ${
                isWhite
                  ? 'text-white'
                  : isDark
                  ? 'text-slate-100'
                  : 'text-slate-900'
              }`}
            >
              Sai <span className="text-sky-600">Photo State</span>
            </span>
          </div>

          {variant === 'full' && (
            <span
              className={`font-semibold uppercase mt-0.5 ${subtitleSizes[size]} ${
                isWhite
                  ? 'text-sky-200'
                  : isDark
                  ? 'text-slate-400'
                  : 'text-slate-500'
              }`}
            >
              Digital &amp; CSC Centre • Amloh
            </span>
          )}
        </div>
      )}
    </div>
  );
};
