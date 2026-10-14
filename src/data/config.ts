import { ContactConfig } from '../types';

export const DEFAULT_CONTACT_CONFIG: ContactConfig = {
  brandName: 'Dizozet',
  tagline: 'Same Subscriptions, Smarter Prices & Trusted Digital Services.',
  subtitle: 'Discover digital subscriptions, useful online products, and professional services at affordable prices.',
  whatsappNumber: '917895768118', // Centralized WhatsApp: 7895768118
  whatsappDisplay: '+91 78957 68118',
  email: 'dizozet.org@gmail.com', // Official email: dizozet.org@gmail.com
  instagram: 'https://www.instagram.com/dizo_zet/', // Exact requested profile link
  instagramHandle: '@dizo_zet', // Exact requested username: @dizo_zet
  telegram: 'https://t.me/dizozet',
  workingHours: 'Mon - Sun: 9:00 AM - 11:00 PM IST',
  addressPlaceholder: 'Pan-India Delivery via WhatsApp',
};

/**
 * Returns current contact configuration, checking localStorage first for any user edits.
 */
export function getContactConfig(): ContactConfig {
  try {
    const saved = localStorage.getItem('dizozet_contact_config');
    if (saved) {
      const parsed = JSON.parse(saved);
      // Ensure the exact requested defaults are kept unless specifically updated
      return {
        ...DEFAULT_CONTACT_CONFIG,
        ...parsed,
        // Enforce required contact details if older keys were saved
        email: 'dizozet.org@gmail.com',
        instagram: parsed.instagram || DEFAULT_CONTACT_CONFIG.instagram,
        instagramHandle: parsed.instagramHandle || DEFAULT_CONTACT_CONFIG.instagramHandle,
        whatsappNumber: parsed.whatsappNumber || DEFAULT_CONTACT_CONFIG.whatsappNumber,
        whatsappDisplay: parsed.whatsappDisplay || DEFAULT_CONTACT_CONFIG.whatsappDisplay,
      };
    }
  } catch {
    // fallback to default
  }
  return DEFAULT_CONTACT_CONFIG;
}

/**
 * Save updated contact configuration
 */
export function saveContactConfig(config: Partial<ContactConfig>): void {
  const current = getContactConfig();
  const updated = { ...current, ...config };
  localStorage.setItem('dizozet_contact_config', JSON.stringify(updated));
}

/**
 * Generates an encoded WhatsApp link for Subscription "Buy Now":
 * “Hello Dizozet, I want to purchase [Product Name] — [Duration] — ₹[Price]. Please share the next steps.”
 */
export function getSubscriptionBuyWhatsAppUrl(
  productName: string,
  duration: string,
  price: number
): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Dizozet, I want to purchase ${productName} — ${duration} — ₹${price}. Please share the next steps.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp link for Subscription "Get All Details":
 * “Hello Dizozet, I want details about [Product Name] — [Duration] — ₹[Price]. Please share the features and activation process.”
 */
export function getSubscriptionDetailsWhatsAppUrl(
  productName: string,
  duration: string,
  price: number
): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Dizozet, I want details about ${productName} — ${duration} — ₹${price}. Please share the features and activation process.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp link for general help:
 * “Hello Dizozet, I need help choosing a subscription plan / digital service. Please assist me.”
 */
export function getSubscriptionHelpWhatsAppUrl(productName?: string): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const message = productName
    ? `Hello Dizozet, I need help regarding ${productName}. Please guide me on WhatsApp.`
    : `Hello Dizozet, I need help choosing the right subscription plan. Please assist me on WhatsApp.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp link for digital products:
 * “Hello Dizozet, I want to purchase [Product Name] — ₹[Price]. Please share the download details and next steps.”
 */
export function getProductBuyWhatsAppUrl(productName: string, price: number): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const message = `Hello Dizozet, I want to purchase ${productName} — ₹${price}. Please share the download details and next steps.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp link for digital services:
 * Includes service name, starting price if applicable, and request for further details.
 */
export function getServiceWhatsAppUrl(serviceName: string, startingPrice?: number): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');
  const priceText = startingPrice !== undefined ? ` (starting at ₹${startingPrice})` : '';
  const message = `Hello Dizozet, I am interested in ${serviceName}${priceText}. Please share further details, proposal, and timeline.`;
  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
}

/**
 * Generates an encoded WhatsApp link for general contact:
 */
export function getWhatsAppUrl(topic?: string, details?: string): string {
  const config = getContactConfig();
  const cleanNumber = config.whatsappNumber.replace(/[^0-9]/g, '');

  let text = '';
  if (topic) {
    text = `Hello Dizozet, I am inquiring about ${topic}. Please share the details.`;
    if (details) {
      text += ` (${details})`;
    }
  } else {
    text = `Hello Dizozet, I want to inquire about your subscriptions, products, and digital services.`;
  }

  return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(text)}`;
}
