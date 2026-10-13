import { ServiceItem } from '../types';

export const INITIAL_SERVICES: ServiceItem[] = [
  {
    id: 'website-development',
    slug: 'website-development',
    name: 'Website Development',
    category: 'Development',
    shortDescription: 'Modern, responsive websites built for businesses, creators, and personal brands.',
    fullDescription: 'Custom website development tailored to your brand identity. Built using modern, fast frameworks that look stunning on phones, tablets, laptops, and ultra-wide desktops. Includes clean code, speed optimization, and ongoing maintenance support.',
    startingPrice: 999,
    timeline: '3 - 5 Days',
    popular: true,
    iconName: 'Layout',
    features: [
      'Modern Designs',
      'Mobile Responsive',
      'Fast Performance',
      'Ongoing Support'
    ],
    deliverables: [
      'Responsive multi-page or single-page architecture',
      'Fast loading speed & SEO basics included',
      'Free domain & hosting setup assistance',
      'Direct WhatsApp and contact form integration',
      '14 days post-launch technical support'
    ]
  },
  {
    id: 'ecommerce-website',
    slug: 'ecommerce-website',
    name: 'E-commerce Website',
    category: 'Development',
    shortDescription: 'A professional online store designed to showcase products and help businesses sell online.',
    fullDescription: 'Launch a high-converting digital storefront or physical product marketplace. Complete with product catalogs, shopping cart, UPI/card payment gateway integration, order tracking, and an intuitive dashboard to manage your products effortlessly.',
    startingPrice: 2999,
    timeline: '5 - 7 Days',
    popular: true,
    iconName: 'ShoppingCart',
    features: [
      'Modern Design',
      'Mobile Responsive',
      'Secure Payment Integration',
      'Product Management'
    ],
    deliverables: [
      'Full product catalog with category filters',
      'Indian payment gateway setup (Razorpay, Cashfree, UPI)',
      'Automated WhatsApp order notifications',
      'Mobile-first checkout experience',
      '30 days post-launch maintenance'
    ]
  },
  {
    id: 'landing-page-development',
    slug: 'landing-page-development',
    name: 'Landing Page Development',
    category: 'Development',
    shortDescription: 'Professional landing pages for products, services, marketing campaigns, and lead generation.',
    fullDescription: 'High-converting sales funnels and single-page landing pages designed specifically to turn ad clicks into paying customers or qualified inquiries. Crafted with persuasive copy hierarchy, speed optimization, and frictionless lead forms.',
    startingPrice: 999,
    timeline: '2 - 3 Days',
    popular: true,
    iconName: 'Globe',
    features: [
      'Conversion-Optimized Layout',
      'Lightning Fast Load Time',
      'Lead Capture & WhatsApp Integration',
      'Analytics & Pixel Setup'
    ],
    deliverables: [
      'Single-page focused landing page',
      'Headline and copywriting structure',
      'Direct WhatsApp / form lead routing',
      'Meta Pixel and Google Analytics tag setup'
    ]
  },
  {
    id: 'seo-services',
    slug: 'seo-services',
    name: 'SEO Services',
    category: 'Marketing',
    shortDescription: 'Improve your Google search rankings, increase organic visitors, and build long-term online visibility.',
    fullDescription: 'Complete Search Engine Optimization for businesses looking to generate organic customers without paying for every click. Includes keyword research, on-page optimization, Google Search Console indexing, technical audits, and local Google My Business optimization.',
    startingPrice: 1499,
    timeline: 'Monthly Engagement',
    popular: false,
    iconName: 'Search',
    features: [
      'Targeted Keyword Research',
      'On-Page Meta & Content SEO',
      'Google Search Console Setup',
      'Local Business SEO Optimization'
    ],
    deliverables: [
      'Keyword ranking audit report',
      'Title, meta tags, and alt tag corrections',
      'Site speed & mobile usability fixes',
      'Monthly performance progress reporting'
    ]
  },
  {
    id: 'social-media-marketing',
    slug: 'social-media-marketing',
    name: 'Social Media Marketing',
    category: 'Marketing',
    shortDescription: 'Strategic social media management, brand positioning, engaging content calendars, and growth.',
    fullDescription: 'Build an authoritative social presence across Instagram, LinkedIn, and Facebook. We design branded templates, write engaging captions, research trending audio, and execute consistent posting schedules to grow your brand followers and organic leads.',
    startingPrice: 1999,
    timeline: 'Monthly Plans Available',
    popular: false,
    iconName: 'Share2',
    features: [
      'Branded Post & Reel Creatives',
      'Content Calendar & Scheduling',
      'Hashtag & Audience Research',
      'Profile Bio & Link Optimization'
    ],
    deliverables: [
      '12 to 24 customized posts/reels per month',
      'Consistent brand aesthetic and typography',
      'Community engagement strategies'
    ]
  },
  {
    id: 'meta-ads-management',
    slug: 'meta-ads-management',
    name: 'Meta Ads Management',
    category: 'Marketing',
    shortDescription: 'High-ROI paid advertising campaigns on Instagram and Facebook targeting ready-to-buy audiences.',
    fullDescription: 'Laser-focused paid advertising campaigns engineered to generate leads, WhatsApp inquiries, or e-commerce purchases. We handle audience segmentation, ad creatives, copy testing, retargeting funnels, and ROAS optimization.',
    startingPrice: 2499,
    timeline: 'Campaign Basis',
    popular: true,
    iconName: 'TrendingUp',
    features: [
      'Target Audience & Lookalike Setup',
      'High-CTR Ad Copy & Visuals',
      'A/B Split Testing',
      'ROAS & Budget Optimization'
    ],
    deliverables: [
      'Complete Ads Manager campaign setup',
      'Lead generation or direct WhatsApp click ads',
      'Pixel tracking & custom conversion events',
      'Weekly performance metrics & audit'
    ]
  },
  {
    id: 'google-ads-management',
    slug: 'google-ads-management',
    name: 'Google Ads Management',
    category: 'Marketing',
    shortDescription: 'Capture high-intent buyers actively searching for your services on Google Search and YouTube.',
    fullDescription: 'Get your business shown at the very top of Google when potential clients search for your exact services. Search campaigns, negative keyword filtering, bidding optimization, and conversion tracking to ensure every rupee spent produces tangible inquiries.',
    startingPrice: 2499,
    timeline: 'Campaign Basis',
    popular: false,
    iconName: 'BarChart2',
    features: [
      'High-Intent Search Ads',
      'Negative Keyword Filtering',
      'Conversion Tracking Setup',
      'Quality Score & Cost Reduction'
    ],
    deliverables: [
      'Google Ads account setup and campaign build',
      'Keyword bid strategy & match types',
      'Ad extension and sitelinks setup',
      'Conversion tracking verification'
    ]
  },
  {
    id: 'graphic-design',
    slug: 'graphic-design',
    name: 'Graphic Design',
    category: 'Design',
    shortDescription: 'Eye-catching social media posts, brand logos, banners, flyers, and digital marketing creatives.',
    fullDescription: 'Professional visual design assets that command attention. Whether you need a memorable logo mark, promo banners for Instagram, YouTube thumbnails, or brochures, we deliver crisp vector and high-resolution files ready for digital and print use.',
    startingPrice: 799,
    timeline: '1 - 2 Days',
    popular: false,
    iconName: 'PenTool',
    features: [
      'Custom Logo & Brand Kits',
      'Social Media Ad Creatives',
      'Flyers, Banners & Posters',
      'High-Res Source Files Provided'
    ],
    deliverables: [
      'Multiple design concepts and revisions',
      'Exported in PNG, JPG, SVG, and PDF formats',
      'Print-ready & web-ready specifications'
    ]
  },
  {
    id: 'custom-website-solutions',
    slug: 'custom-website-solutions',
    name: 'Custom Website Solutions',
    category: 'Custom',
    shortDescription: 'Specialized web applications, custom CMS integrations, API workflows, and portal builds.',
    fullDescription: 'Have a unique idea, marketplace concept, booking platform, or custom web tool? We engineer scalable, secure custom web solutions with database architecture, user authentication, and third-party integrations tailored to your business rules.',
    startingPrice: 4999,
    timeline: '1 - 2 Weeks',
    popular: false,
    iconName: 'Code',
    features: [
      'Custom React / Modern Frameworks',
      'Database & Backend Logic',
      'Third-party API Integrations',
      'Full Source Code Ownership'
    ],
    deliverables: [
      'Custom architecture consultation',
      'Milestone-based delivery & testing',
      'Complete deployment to live server',
      'Technical documentation and handover'
    ]
  }
];

export function getServices(): ServiceItem[] {
  try {
    const saved = localStorage.getItem('dizozet_services');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback
  }
  return INITIAL_SERVICES;
}

export function saveServices(items: ServiceItem[]): void {
  localStorage.setItem('dizozet_services', JSON.stringify(items));
}
