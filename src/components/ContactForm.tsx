import React, { useState } from 'react';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation,
} from 'lucide-react';
import { BUSINESS_DATA, ALL_SERVICES } from '../data/businessData';
import {
  getFormSubmissionWhatsAppUrl,
  getPhoneCallUrl,
  getGeneralWhatsAppUrl,
  getGoogleMapsUrl,
} from '../utils/links';

export const ContactForm: React.FC = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [service, setService] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState<{
    name?: string;
    mobile?: string;
    service?: string;
  }>({});

  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  // Validate Indian mobile number
  const validateMobile = (num: string): boolean => {
    // Strips spaces, hyphens, and +91 prefix
    const cleaned = num.replace(/[\s\-+]/g, '');
    const tenDigit = cleaned.startsWith('91') && cleaned.length === 12 ? cleaned.slice(2) : cleaned;
    // Standard Indian 10-digit mobile check: starts with 6, 7, 8, or 9
    return /^[6-9]\d{9}$/.test(tenDigit);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { name?: string; mobile?: string; service?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!mobile.trim()) {
      newErrors.mobile = 'Please enter your mobile number';
    } else if (!validateMobile(mobile.trim())) {
      newErrors.mobile = 'Please enter a valid 10-digit Indian mobile number (e.g. 9888999354)';
    }

    if (!service.trim()) {
      newErrors.service = 'Please select a service from the list';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmittedSuccess(false);
      return;
    }

    setErrors({});

    // Clean mobile number for message
    const cleanedMobile = mobile.trim();

    // Construct exact format requested in prompt:
    const whatsappUrl = getFormSubmissionWhatsAppUrl({
      name: name.trim(),
      mobile: cleanedMobile,
      service: service.trim(),
      message: message.trim(),
    });

    // Mark as submitted
    setSubmittedSuccess(true);

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-sky-100 text-sky-800 mb-3 border border-sky-200">
            <MessageCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Service Request &amp; Contact</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight mb-3">
            Get in Touch with Sai Photo State
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Fill out your details below to prepare your service inquiry directly on WhatsApp, or reach out
            via call or email.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Direct Business Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-slate-900 text-white p-6 sm:p-8 shadow-xl">
              <h3 className="text-xl font-black tracking-tight text-white mb-1">
                {BUSINESS_DATA.name}
              </h3>
              <p className="text-xs text-sky-300 font-medium mb-6">
                Proprietor: {BUSINESS_DATA.owner}
              </p>

              <div className="space-y-4 text-sm text-slate-200">
                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-sky-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Phone</div>
                    <a
                      href={getPhoneCallUrl()}
                      className="text-base font-bold text-white hover:text-sky-300 transition-colors"
                    >
                      {BUSINESS_DATA.phone}
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-emerald-400">
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">WhatsApp</div>
                    <a
                      href={getGeneralWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:text-emerald-300 transition-colors"
                    >
                      {BUSINESS_DATA.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-amber-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Email</div>
                    <a
                      href={`mailto:${BUSINESS_DATA.email}`}
                      className="text-sm font-semibold text-white hover:text-amber-300 transition-colors break-all"
                    >
                      {BUSINESS_DATA.email}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-slate-800 text-sky-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] text-slate-400 uppercase font-semibold">Address</div>
                    <div className="text-sm font-medium text-slate-200 leading-snug">
                      Near Court, Amloh, Punjab – 147203
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={getPhoneCallUrl()}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-bold bg-sky-600 hover:bg-sky-500 text-white transition-all active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Now</span>
                </a>

                <a
                  href={getGeneralWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  <span>WhatsApp Us</span>
                </a>

                <a
                  href={getGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center p-3 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 transition-all active:scale-95"
                  title="Get Directions"
                >
                  <Navigation className="w-4 h-4 text-sky-400" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Customer Service Request Form (Exactly 4 Fields) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/90 bg-slate-50/70 p-6 sm:p-8 shadow-xs">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                  Customer Service Request
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Send your enquiry straight to WhatsApp without waiting.
                </p>
              </div>

              {/* Success Notification Banner */}
              {submittedSuccess && (
                <div
                  id="form-success-banner"
                  className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 flex items-start gap-3 animate-in fade-in duration-300"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <p className="font-bold">
                      Your WhatsApp message is ready. Please send it to Sai Photo State.
                    </p>
                    <p className="text-emerald-700 mt-0.5">
                      If WhatsApp did not launch automatically,{' '}
                      <a
                        href={getFormSubmissionWhatsAppUrl({
                          name,
                          mobile,
                          service,
                          message,
                        })}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline font-bold"
                      >
                        tap here to send
                      </a>
                      .
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                {/* Field 1: Name */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    1. Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    id="client-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors({ ...errors, name: undefined });
                    }}
                    placeholder="Enter your full name"
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                      errors.name
                        ? 'border-rose-400 ring-2 ring-rose-100'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10'
                    } focus:outline-none transition-all`}
                  />
                  {errors.name && (
                    <p className="text-xs font-medium text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Field 2: Mobile Number */}
                <div>
                  <label
                    htmlFor="client-mobile"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    2. Mobile Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      id="client-mobile"
                      type="tel"
                      value={mobile}
                      onChange={(e) => {
                        setMobile(e.target.value);
                        if (errors.mobile) setErrors({ ...errors, mobile: undefined });
                      }}
                      placeholder="e.g. 9888999354"
                      maxLength={14}
                      className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                        errors.mobile
                          ? 'border-rose-400 ring-2 ring-rose-100'
                          : 'border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10'
                      } focus:outline-none transition-all`}
                    />
                  </div>
                  {errors.mobile ? (
                    <p className="text-xs font-medium text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.mobile}</span>
                    </p>
                  ) : (
                    <p className="text-[11px] text-slate-500 mt-1">
                      Accepts 10-digit Indian mobile number format.
                    </p>
                  )}
                </div>

                {/* Field 3: Select Service */}
                <div>
                  <label
                    htmlFor="client-service"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    3. Select Service <span className="text-rose-500">*</span>
                  </label>
                  <select
                    id="client-service"
                    value={service}
                    onChange={(e) => {
                      setService(e.target.value);
                      if (errors.service) setErrors({ ...errors, service: undefined });
                    }}
                    className={`w-full px-4 py-3 rounded-xl text-sm bg-white border ${
                      errors.service
                        ? 'border-rose-400 ring-2 ring-rose-100'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10'
                    } focus:outline-none transition-all text-slate-800`}
                  >
                    <option value="">-- Choose a service --</option>
                    {ALL_SERVICES.map((s) => (
                      <option key={s.id} value={s.name}>
                        {s.name} ({s.categoryName})
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-xs font-medium text-rose-600 mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.service}</span>
                    </p>
                  )}
                </div>

                {/* Field 4: Message / Requirement */}
                <div>
                  <label
                    htmlFor="client-message"
                    className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5"
                  >
                    4. Message / Requirement <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="client-message"
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you need help with (e.g. required documents, urgency, correction details)..."
                    className="w-full px-4 py-3 rounded-xl text-sm bg-white border border-slate-300 focus:border-sky-500 focus:ring-4 focus:ring-sky-500/10 focus:outline-none transition-all text-slate-800 resize-y"
                  />
                </div>

                {/* Privacy & Fast Assistance Note */}
                <div className="p-3 rounded-xl bg-sky-50/80 border border-sky-100 text-[11px] text-slate-600">
                  <p>
                    <strong>Note:</strong> Submitting this form directly generates your inquiry in WhatsApp. No sensitive personal files or documents are collected on this site.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  id="submit-service-request-btn"
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 rounded-2xl font-bold text-sm sm:text-base bg-emerald-600 hover:bg-emerald-700 text-white shadow-md shadow-emerald-600/25 active:scale-[0.99] transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Request via WhatsApp</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
