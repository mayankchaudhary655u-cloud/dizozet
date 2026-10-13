import React, { useState } from 'react';
import { SubscriptionItem } from '../types';
import { SubscriptionCard } from './SubscriptionCard';
import { Search, Sparkles, ArrowRight } from 'lucide-react';

interface SubscriptionsSectionProps {
  subscriptions: SubscriptionItem[];
  onViewAll?: () => void;
  isFullCatalogPage?: boolean;
}

export const SubscriptionsSection: React.FC<SubscriptionsSectionProps> = ({
  subscriptions,
  onViewAll,
  isFullCatalogPage = false,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    'All',
    'AI Subscriptions',
    'Design & Creative',
    'Entertainment',
    'Productivity',
  ];

  const filteredSubscriptions = subscriptions.filter((sub) => {
    const matchesCategory =
      selectedCategory === 'All' || sub.category === selectedCategory;
    const matchesSearch =
      sub.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      sub.planDuration.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // HOMEPAGE REQUIREMENT: Display exactly these 4 cards in this order:
  // 1. Gemini Pro (18 months, ₹299)
  // 2. ZEE5 (1 year, ₹499)
  // 3. ChatGPT Plus (1 month, ₹1,499)
  // 4. Claude Pro (1 month, ₹1,499)
  const getHomepagePopularSubscriptions = (): SubscriptionItem[] => {
    const geminiPro = subscriptions.find(
      (s) => (s.slug === 'gemini-pro' || s.name.toLowerCase().includes('gemini pro')) && s.planDuration.includes('18')
    ) || {
      id: 'gemini-pro-18m',
      slug: 'gemini-pro',
      name: 'Gemini Pro',
      category: 'AI Subscriptions',
      planDuration: '18 months',
      sellingPrice: 299,
      popular: true,
      brandColor: '#38BDF8',
      iconName: 'gemini-pro',
    };

    const zee5 = subscriptions.find(
      (s) => s.slug === 'zee5' && s.planDuration.toLowerCase().includes('1 year')
    ) || {
      id: 'zee5-1y',
      slug: 'zee5',
      name: 'ZEE5',
      category: 'Entertainment',
      planDuration: '1 year',
      sellingPrice: 499,
      popular: true,
      brandColor: '#A855F7',
      iconName: 'zee5',
    };

    const chatGpt = subscriptions.find(
      (s) => s.slug === 'chatgpt-plus' && s.planDuration.toLowerCase().includes('1 month')
    ) || {
      id: 'chatgpt-plus-1m',
      slug: 'chatgpt-plus',
      name: 'ChatGPT Plus',
      category: 'AI Subscriptions',
      planDuration: '1 month',
      sellingPrice: 1499,
      popular: true,
      brandColor: '#10A37F',
      iconName: 'chatgpt-plus',
    };

    const claudePro = subscriptions.find(
      (s) => s.slug === 'claude-pro' && s.planDuration.toLowerCase().includes('1 month')
    ) || {
      id: 'claude-pro-1m',
      slug: 'claude-pro',
      name: 'Claude Pro',
      category: 'AI Subscriptions',
      planDuration: '1 month',
      sellingPrice: 1499,
      popular: true,
      brandColor: '#D97757',
      iconName: 'claude-pro',
    };

    return [geminiPro, zee5, chatGpt, claudePro];
  };

  const displayedSubscriptions = isFullCatalogPage
    ? filteredSubscriptions
    : getHomepagePopularSubscriptions();

  return (
    <section id="subscriptions" className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Digital Subscriptions</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight text-balance">
            {isFullCatalogPage ? 'All Subscription Plans' : 'Popular Subscriptions'}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Affordable plans with direct WhatsApp ordering (+91 78957 68118).
          </p>
        </div>

        {/* Filters & Search Toolbar (on Full Catalog Page or if searching) */}
        {isFullCatalogPage && (
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-[#FFF5EB] border border-[#F0E7DE] rounded-xl overflow-x-auto max-w-full">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap shrink-0 ${
                    selectedCategory === cat
                      ? 'bg-[#F28C28] text-white font-bold shadow-2xs'
                      : 'text-[#6B7280] hover:text-[#252525]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-68">
              <Search className="w-4 h-4 text-[#6B7280] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search plan..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2 bg-white border border-[#F0E7DE] rounded-lg text-xs text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9CA3AF] hover:text-[#252525] text-xs"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        )}

        {/* Product Grid (4 items on Homepage, all on full page) */}
        {displayedSubscriptions.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {displayedSubscriptions.map((sub) => (
              <SubscriptionCard
                key={sub.id}
                subscription={sub}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE]">
            <p className="text-sm text-[#6B7280] mb-2">No subscription plan matches your search query.</p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
              className="text-xs text-[#F28C28] hover:underline font-semibold"
            >
              Reset filters & search
            </button>
          </div>
        )}

        {/* "View More Subscriptions" Button (Homepage Only) */}
        {!isFullCatalogPage && onViewAll && (
          <div className="mt-10 text-center">
            <button
              onClick={onViewAll}
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] rounded-xl transition-all shadow-2xs group"
            >
              <span>View More Subscriptions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-[#F28C28]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
