export type Page = 'home' | 'about' | 'services' | 'industries' | 'clients' | 'contributor' | 'partner' | 'contact' | 'selfie-project';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'data-collection' | 'processing-qa' | 'workforce';
  features: string[];
}

export interface IndustryItem {
  title: string;
  description: string;
  iconName: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  description: string;
  details: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  badge: string;
  status: 'Active' | 'Upcoming' | 'Urgent';
  location: string;
  description: string;
  compensation: string;
  requirements: string[];
  submissionTypes: string[];
  targetCount: string;
  currentProgress: number; // percentage 0-100
  image: string;
}

export interface ContributorApplication {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  primaryLanguage: string;
  otherLanguages: string;
  deviceTypes: string[];
  interestedProjects: string[];
  experienceLevel: string;
  additionalNotes?: string;
  agreedToTerms: boolean;
}

export interface PartnerRFP {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  projectType: string;
  dataFormats: string[];
  estimatedVolume: string;
  timeline: string;
  budgetRange: string;
  projectDetails: string;
  requestCallWithCEO: boolean;
}

export interface ContactInquiry {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  inquiryType: 'general' | 'client' | 'contributor' | 'partner' | 'direct-ceo';
  message: string;
}
