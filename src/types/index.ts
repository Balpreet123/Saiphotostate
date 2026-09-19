export type ServiceCategoryKey =
  | 'govt-id'
  | 'csc-online'
  | 'financial-tax'
  | 'documentation'
  | 'printing-photo';

export interface ServiceItem {
  id: string;
  name: string;
  category: ServiceCategoryKey;
  categoryName: string;
  description: string;
  iconName: string;
  isPopular?: boolean;
  featuredInGovt?: boolean;
  keywords: string[];
  documentsNeededNote?: string;
}

export interface ServiceCategory {
  id: ServiceCategoryKey;
  title: string;
  subtitle: string;
  iconName: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  supportingText: string;
  secondaryHeroPhrase: string;
  businessType: string;
  owner: string;
  experience: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  nearLandmark: string;
  town: string;
  state: string;
  pincode: string;
  openingHours: string;
  googleMapsUrl: string;
  googleMapsEmbedUrl: string;
}

export interface ContactFormData {
  name: string;
  mobile: string;
  service: string;
  message: string;
}
