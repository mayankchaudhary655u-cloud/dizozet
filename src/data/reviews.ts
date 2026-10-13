import { ReviewItem } from '../types';

export const SAMPLE_REVIEWS: ReviewItem[] = [
  {
    id: 'sample-1',
    author: 'Aarav Sharma',
    location: 'Bengaluru, Karnataka',
    productOrService: 'Canva Pro 1-Year',
    rating: 5,
    comment: 'Instant activation within 15 minutes of connecting on WhatsApp. The pricing is super budget-friendly for freelance designers like me. Renewed smoothly.',
    date: '2026-03-28',
    isSampleReview: true,
    verifiedPurchase: false
  },
  {
    id: 'sample-2',
    author: 'Priya Mehta',
    location: 'Mumbai, Maharashtra',
    productOrService: 'Website Development (₹999)',
    rating: 5,
    comment: 'Ordered a portfolio site for my consulting services. Clean, responsive, and completed within 3 days. Dizozet team assisted with domain setup too.',
    date: '2026-03-15',
    isSampleReview: true,
    verifiedPurchase: false
  },
  {
    id: 'sample-3',
    author: 'Rohan Verma',
    location: 'Delhi NCR',
    productOrService: 'ChatGPT Plus',
    rating: 5,
    comment: 'Using GPT-4o for coding tasks every day. Straightforward WhatsApp ordering and friendly customer support whenever I had queries.',
    date: '2026-02-20',
    isSampleReview: true,
    verifiedPurchase: false
  },
  {
    id: 'sample-4',
    author: 'Neha Kapoor',
    location: 'Pune, Maharashtra',
    productOrService: 'Landing Page Development',
    rating: 5,
    comment: 'The landing page built by Dizozet converted 2x better for our local event registration. Very transparent pricing without hidden surprises.',
    date: '2026-01-14',
    isSampleReview: true,
    verifiedPurchase: false
  }
];

export function getReviews(): ReviewItem[] {
  try {
    const saved = localStorage.getItem('dizozet_reviews');
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {
    // fallback
  }
  return SAMPLE_REVIEWS;
}

export function addReview(newReview: Omit<ReviewItem, 'id' | 'date'>): ReviewItem {
  const current = getReviews();
  const created: ReviewItem = {
    ...newReview,
    id: `review-${Date.now()}`,
    date: new Date().toISOString().split('T')[0],
    isSampleReview: false,
    verifiedPurchase: false, // Honest label until verified by staff
  };
  const updated = [created, ...current];
  localStorage.setItem('dizozet_reviews', JSON.stringify(updated));
  return created;
}
