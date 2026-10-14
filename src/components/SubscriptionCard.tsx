import React from 'react';
import { SubscriptionItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { MessageCircle, ShieldCheck, AlertCircle, Clock, Info, Check } from 'lucide-react';
import {
  getSubscriptionBuyWhatsAppUrl,
  getSubscriptionDetailsWhatsAppUrl,
  getSubscriptionHelpWhatsAppUrl,
} from '../data/config';

interface SubscriptionCardProps {
  subscription: SubscriptionItem;
}

export const SubscriptionCard: React.FC<SubscriptionCardProps> = ({ subscription }) => {
  // 1. "Get All Details" WhatsApp URL:
  const detailsWhatsAppUrl = getSubscriptionDetailsWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  // 2. "Buy Now" WhatsApp URL:
  const buyNowWhatsAppUrl = getSubscriptionBuyWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  // 3. "Need help? Contact us on WhatsApp" Link URL
  const helpWhatsAppUrl = getSubscriptionHelpWhatsAppUrl(
    `${subscription.name} (${subscription.planDuration})`
  );

  // Deriving 2-3 clean, relevant benefit badges based on category/data
  const getCategoryHighlights = () => {
    if (subscription.category === 'AI Subscriptions') {
      return ['Instant WhatsApp Setup', 'Full Pro Reasoning & Features', '100% Guaranteed Support'];
    }
    if (subscription.category === 'Design & Creative') {
      return ['Premium Templates & Export', 'Instant Account Activation', 'High Speed Unlimited Downloads'];
    }
    if (subscription.category === 'Entertainment') {
      return ['Ultra HD / 4K Streaming', 'Instant WhatsApp Activation', 'Ad-Free / Multi-Device Access'];
    }
    return ['Genuine Verified Plan', 'Instant WhatsApp Support', 'Full Duration Access'];
  };

  const highlights = subscription.benefits && subscription.benefits.length > 0
    ? subscription.benefits
    : getCategoryHighlights();

  return (
    <div className="relative rounded-2xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 p-5 sm:p-6 flex flex-col justify-between group shadow-2xs hover:shadow-xs">
      <div>
        {/* Top Header: Prominent Brand Logo + Category Pill */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Prominent, Clearly Visible Official Brand Logo */}
          <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-white border border-[#F0E7DE] shadow-2xs flex items-center justify-center p-2 shrink-0 group-hover:scale-102 group-hover:border-[#F28C28]/40 transition-all duration-200">
            <BrandIcon
              name={subscription.slug}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              color={subscription.brandColor}
            />
          </div>

          <div className="flex flex-col items-end gap-1.5">
            <span className="text-[11px] font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-2.5 py-1 rounded-md">
              {subscription.category}
            </span>
            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[#FFF5EB] border border-[#F0E7DE] text-[11px] font-bold text-[#F28C28]">
              <Clock className="w-3 h-3 text-[#F28C28]" />
              <span>{subscription.planDuration}</span>
            </div>
          </div>
        </div>

        {/* Subscription Title */}
        <h3 className="text-lg font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-2">
          {subscription.name}
        </h3>

        {/* Warranty Tag if specified */}
        {subscription.warrantyInfo && (
          <div className="mb-3">
            {subscription.warrantyInfo.toLowerCase().includes('without') ? (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-xs font-medium text-amber-800">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>{subscription.warrantyInfo}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>{subscription.warrantyInfo}</span>
              </div>
            )}
          </div>
        )}

        {/* Key Features / Benefits List */}
        <div className="space-y-1.5 py-2.5 border-t border-b border-[#F0E7DE] my-3">
          {highlights.slice(0, 3).map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-xs text-[#252525]">
              <Check className="w-3.5 h-3.5 text-[#16A34A] shrink-0" />
              <span className="line-clamp-1">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer: Price + Dual Action Buttons + Help Link */}
      <div className="pt-3 border-t border-[#F0E7DE] mt-2">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] text-[#6B7280] block font-medium uppercase tracking-wider">Selling Price</span>
            <span className="text-2xl sm:text-3xl font-extrabold text-[#252525] font-mono tabular-nums">
              ₹{subscription.sellingPrice}
            </span>
          </div>

          <span className="text-xs font-semibold text-[#6B7280] bg-gray-50 border border-[#F0E7DE] px-2 py-0.5 rounded-md">
            {subscription.planDuration}
          </span>
        </div>

        {/* Actions Container: Primary Buy Now + Secondary Get All Details */}
        <div className="flex flex-col sm:flex-row gap-2">
          {/* 1. Get All Details (Secondary Button) */}
          <a
            href={detailsWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-all shadow-2xs text-center"
            aria-label={`Get All Details about ${subscription.name} ${subscription.planDuration}`}
          >
            <Info className="w-3.5 h-3.5 text-[#F28C28] shrink-0" />
            <span className="truncate">Get All Details</span>
          </a>

          {/* 2. Buy Now (Primary Orange Button) */}
          <a
            href={buyNowWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-all shadow-2xs active:scale-98 text-center"
            aria-label={`Buy Now ${subscription.name} ${subscription.planDuration} for ₹${subscription.sellingPrice}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Buy Now</span>
          </a>
        </div>

        {/* Directly below both buttons: smaller clickable WhatsApp text link */}
        <div className="mt-2.5 text-center">
          <a
            href={helpWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-[#6B7280] hover:text-[#25D366] transition-colors hover:underline"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>Need help? Contact us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
