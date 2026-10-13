import { DigitalProductItem } from '../types';

export const INITIAL_PRODUCTS: DigitalProductItem[] = [
  {
    id: 'prod-ai-videos-bundle-2000',
    slug: '2000-ai-videos-bundle',
    name: '2000+ AI Videos Bundle',
    shortDescription: 'Mega collection of 2000+ viral, high-definition AI generated reels & videos ready to upload across Instagram, YouTube Shorts, and TikTok. Featuring cinematic scenes, realistic avatars, 3D animations, surreal creatures, and viral shorts.',
    price: 99,
    originalPrice: 999,
    format: 'Instant Drive Download',
    category: 'AI Video Bundles',
    popular: true,
    iconName: 'Film',
    image: '/ai-videos-bundle.svg',
    badge: '⏳ Coming Soon',
    processSteps: [
      { step: 1, title: 'Pay ₹99', desc: 'Confirm order on WhatsApp (+91 7895768118) and complete quick UPI payment.' },
      { step: 2, title: 'Download Videos', desc: 'Receive instant Google Drive access to download 2000+ HD AI videos without watermarks.' },
      { step: 3, title: 'Use & Upload', desc: 'Add your watermark or logo, post to Instagram Reels, YouTube Shorts, and monetize.' },
    ],
  },
];

const STORAGE_KEY = 'dizozet_digital_products';

export function getDigitalProducts(): DigitalProductItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        // Enforce keeping 2000+ AI Videos Bundle with Coming Soon status
        const aiVideosOnly = parsed.filter((p: DigitalProductItem) => p.id === 'prod-ai-videos-bundle-2000');
        if (aiVideosOnly.length > 0) {
          return [INITIAL_PRODUCTS[0]];
        }
      }
    }
  } catch {
    // fallback
  }
  return INITIAL_PRODUCTS;
}

export function saveDigitalProducts(items: DigitalProductItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}
