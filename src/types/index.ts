export interface SubscriptionItem {
  id: string;
  slug: string;
  name: string;
  category: 'AI Subscriptions' | 'Design & Creative' | 'Entertainment' | 'Productivity';
  planDuration: string;
  sellingPrice: number;
  originalPrice?: number;
  discountBadge?: string;
  warrantyInfo?: string; // Only where specified e.g. "Without warranty" or "With warranty"
  shortDescription?: string;
  benefits?: string[];
  popular?: boolean;
  brandColor?: string;
  iconName: string;
}

export interface DigitalProductItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  format: string; // e.g. "Instant Download" / "Digital Asset"
  category: 'Developer Tools' | 'Design Assets' | 'Templates' | 'Guides' | 'AI Video Bundles';
  popular?: boolean;
  iconName: string;
  image?: string;
  badge?: string;
  processSteps?: { step: number; title: string; desc: string }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  startingPrice: number;
  timeline: string;
  features: string[];
  deliverables: string[];
  category: 'Development' | 'Marketing' | 'Design' | 'Custom';
  popular?: boolean;
  iconName: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  location?: string;
  productOrService: string;
  rating: number; // 1 to 5
  comment: string;
  date: string;
  isSampleReview?: boolean;
  verifiedPurchase?: boolean;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: 'AI & Productivity' | 'Digital Subscriptions' | 'Technology' | 'Website Development' | 'Digital Marketing' | 'Online Business';
  summary: string;
  readTime: string;
  author: string;
  publishedAt: string;
  content: string[];
  keyTakeaways?: string[];
  imageUrl?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Ordering' | 'Payment' | 'Delivery' | 'Services' | 'Support';
}

export interface ContactConfig {
  brandName: string;
  tagline: string;
  subtitle: string;
  whatsappNumber: string; // "917895768118"
  whatsappDisplay: string; // "+91 78957 68118"
  email: string;
  instagram: string;
  instagramHandle: string;
  telegram?: string;
  workingHours: string;
  addressPlaceholder: string;
}
