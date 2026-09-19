import { BUSINESS_DATA } from '../data/businessData';

/**
 * Builds the WhatsApp enquiry URL for a specific service card.
 */
export function getServiceEnquiryWhatsAppUrl(serviceName: string): string {
  const message = `Hello Sai Photo State,\n\nI would like to enquire about:\n${serviceName}\n\nPlease let me know the required documents, process and charges.\n\nThank you.`;
  return `https://wa.me/91${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(message)}`;
}

/**
 * Builds the WhatsApp URL for customer service request form submission.
 */
export function getFormSubmissionWhatsAppUrl(params: {
  name: string;
  mobile: string;
  service: string;
  message?: string;
}): string {
  const msgContent = params.message?.trim() ? params.message.trim() : 'None provided';
  const text = `New Service Request – Sai Photo State\n\nName: ${params.name}\nContact Number: ${params.mobile}\nService Required: ${params.service}\nMessage: ${msgContent}\n\nFor faster assistance and better service, please call Sai Photo State at ${BUSINESS_DATA.phone}.`;
  return `https://wa.me/91${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Generic WhatsApp chat link
 */
export function getGeneralWhatsAppUrl(): string {
  const text = `Hello Sai Photo State, I would like to enquire about your services.`;
  return `https://wa.me/91${BUSINESS_DATA.whatsapp}?text=${encodeURIComponent(text)}`;
}

/**
 * Direct tel link
 */
export function getPhoneCallUrl(): string {
  return `tel:${BUSINESS_DATA.phone}`;
}

/**
 * Direct Google Maps link
 */
export function getGoogleMapsUrl(): string {
  return BUSINESS_DATA.googleMapsUrl;
}
