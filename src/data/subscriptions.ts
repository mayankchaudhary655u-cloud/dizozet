import { SubscriptionItem } from '../types';

export const INITIAL_SUBSCRIPTIONS: SubscriptionItem[] = [
  // --- AI Subscriptions ---
  {
    id: 'google-ai-pro-18m',
    slug: 'google-ai-pro',
    name: 'Google AI Pro',
    category: 'AI Subscriptions',
    planDuration: '18 months',
    sellingPrice: 299,
    popular: true,
    brandColor: '#4285F4',
    iconName: 'google-ai-pro',
  },
  {
    id: 'gemini-pro-18m',
    slug: 'gemini-pro',
    name: 'Gemini Pro',
    category: 'AI Subscriptions',
    planDuration: '18 months',
    sellingPrice: 299,
    popular: true,
    brandColor: '#38BDF8',
    iconName: 'gemini-pro',
  },
  {
    id: 'chatgpt-plus-1m',
    slug: 'chatgpt-plus',
    name: 'ChatGPT Plus',
    category: 'AI Subscriptions',
    planDuration: '1 month',
    sellingPrice: 1499,
    popular: true,
    brandColor: '#10A37F',
    iconName: 'chatgpt-plus',
  },
  {
    id: 'claude-pro-1m',
    slug: 'claude-pro',
    name: 'Claude Pro',
    category: 'AI Subscriptions',
    planDuration: '1 month',
    sellingPrice: 1499,
    popular: true,
    brandColor: '#D97757',
    iconName: 'claude-pro',
  },

  // --- Design & Creative Software ---
  {
    id: 'canva-pro-6m',
    slug: 'canva-pro',
    name: 'Canva Pro',
    category: 'Design & Creative',
    planDuration: '6 months',
    sellingPrice: 149,
    popular: false,
    brandColor: '#00C4CC',
    iconName: 'canva-pro',
  },
  {
    id: 'canva-pro-1y',
    slug: 'canva-pro',
    name: 'Canva Pro',
    category: 'Design & Creative',
    planDuration: '1 year',
    sellingPrice: 299,
    popular: true,
    brandColor: '#00C4CC',
    iconName: 'canva-pro',
  },
  {
    id: 'capcut-pro-1m',
    slug: 'capcut-pro',
    name: 'CapCut Pro',
    category: 'Design & Creative',
    planDuration: '1 month',
    sellingPrice: 299,
    popular: false,
    brandColor: '#F43F5E',
    iconName: 'capcut-pro',
  },

  // --- Entertainment Subscriptions ---
  {
    id: 'zee5-1m',
    slug: 'zee5',
    name: 'ZEE5',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 119,
    popular: false,
    brandColor: '#A855F7',
    iconName: 'zee5',
  },
  {
    id: 'zee5-1y',
    slug: 'zee5',
    name: 'ZEE5',
    category: 'Entertainment',
    planDuration: '1 year',
    sellingPrice: 499,
    popular: false,
    brandColor: '#A855F7',
    iconName: 'zee5',
  },
  {
    id: 'disney-hotstar-1m',
    slug: 'disney-hotstar',
    name: 'Disney+ Hotstar',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 99,
    popular: true,
    brandColor: '#00147A',
    iconName: 'disney-hotstar',
  },
  {
    id: 'disney-hotstar-1y',
    slug: 'disney-hotstar',
    name: 'Disney+ Hotstar',
    category: 'Entertainment',
    planDuration: '1 year',
    sellingPrice: 799,
    popular: false,
    brandColor: '#00147A',
    iconName: 'disney-hotstar',
  },
  {
    id: 'sony-liv-1m',
    slug: 'sony-liv',
    name: 'Sony LIV',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 129,
    popular: false,
    brandColor: '#F59E0B',
    iconName: 'sony-liv',
  },
  {
    id: 'sony-liv-1y',
    slug: 'sony-liv',
    name: 'Sony LIV',
    category: 'Entertainment',
    planDuration: '1 year',
    sellingPrice: 599,
    popular: false,
    brandColor: '#F59E0B',
    iconName: 'sony-liv',
  },
  {
    id: 'youtube-premium-1m',
    slug: 'youtube-premium',
    name: 'YouTube Premium',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 119,
    popular: true,
    brandColor: '#EF4444',
    iconName: 'youtube-premium',
  },
  {
    id: 'spotify-premium-2m',
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'Entertainment',
    planDuration: '2 months',
    sellingPrice: 129,
    popular: false,
    brandColor: '#1ED760',
    iconName: 'spotify-premium',
  },
  {
    id: 'spotify-premium-3m',
    slug: 'spotify-premium',
    name: 'Spotify Premium',
    category: 'Entertainment',
    planDuration: '3 months',
    sellingPrice: 139,
    popular: true,
    brandColor: '#1ED760',
    iconName: 'spotify-premium',
  },
  {
    id: 'amazon-prime-1m',
    slug: 'prime-video',
    name: 'Prime Video',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 119,
    popular: false,
    brandColor: '#0073E6',
    iconName: 'prime-video',
  },
  {
    id: 'amazon-prime-3m',
    slug: 'prime-video',
    name: 'Prime Video',
    category: 'Entertainment',
    planDuration: '3 months',
    sellingPrice: 299,
    popular: false,
    brandColor: '#0073E6',
    iconName: 'prime-video',
  },
  {
    id: 'amazon-prime-6m',
    slug: 'prime-video',
    name: 'Prime Video',
    category: 'Entertainment',
    planDuration: '6 months',
    sellingPrice: 499,
    popular: true,
    brandColor: '#0073E6',
    iconName: 'prime-video',
  },
  {
    id: 'netflix-1m',
    slug: 'netflix',
    name: 'Netflix',
    category: 'Entertainment',
    planDuration: '1 month',
    sellingPrice: 299,
    popular: true,
    brandColor: '#E50914',
    iconName: 'netflix',
  },
];

const STORAGE_KEY = 'dizozet_subscriptions_exact_v4';

export function getSubscriptions(): SubscriptionItem[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch {
    // fallback
  }
  return INITIAL_SUBSCRIPTIONS;
}

export function saveSubscriptions(items: SubscriptionItem[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

export function updateSubscriptionItem(updated: SubscriptionItem): void {
  const current = getSubscriptions();
  const next = current.map((item) => (item.id === updated.id ? updated : item));
  saveSubscriptions(next);
}
