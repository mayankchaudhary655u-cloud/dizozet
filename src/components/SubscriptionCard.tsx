import React from 'react';
import { SubscriptionItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { MessageCircle, ShieldCheck, AlertCircle, Clock, Info } from 'lucide-react';
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
  // "Hello Dizozet, I want details about [Product Name] — [Duration] — ₹[Price]. Please share the features and activation process."
  const detailsWhatsAppUrl = getSubscriptionDetailsWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  // 2. "Buy Now" WhatsApp URL:
  // "Hello Dizozet, I want to purchase [Product Name] — [Duration] — ₹[Price]. Please share the next steps."
  const buyNowWhatsAppUrl = getSubscriptionBuyWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  // 3. "Need help? Contact us on WhatsApp" Link URL
  const helpWhatsAppUrl = getSubscriptionHelpWhatsAppUrl(
    `${subscription.name} (${subscription.planDuration})`
  );

  return (
    <div className="relative rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 p-5 flex flex-col justify-between group shadow-2xs hover:shadow-xs">
      {/* Top Header: Logo + Category */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="w-14 h-14 rounded-xl bg-white border border-[#F0E7DE] shadow-2xs flex items-center justify-center p-1.5 shrink-0 group-hover:scale-105 group-hover:border-[#F28C28]/40 transition-all duration-200">
            <BrandIcon
              name={subscription.slug}
              className="w-11 h-11 object-contain"
              color={subscription.brandColor}
            />
          </div>

          <div className="flex flex-col items-end">
            <span className="text-[11px] font-medium text-[#6B7280] bg-[#FFF5EB] border border-[#F0E7DE] px-2 py-0.5 rounded-md">
              {subscription.category}
            </span>
          </div>
        </div>

        {/* Product Title */}
        <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-1.5">
          {subscription.name}
        </h3>

        {/* Plan Duration Badge */}
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#FFF5EB] border border-[#F0E7DE] text-xs font-semibold text-[#F28C28] mb-3">
          <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
          <span>{subscription.planDuration}</span>
        </div>

        {/* Warranty Note if specified */}
        {subscription.warrantyInfo && (
          <div className="mb-3">
            {subscription.warrantyInfo.toLowerCase().includes('without') ? (
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-50 border border-amber-200 text-[11px] font-medium text-amber-800">
                <AlertCircle className="w-3 h-3 text-amber-600" />
                <span>{subscription.warrantyInfo}</span>
              </div>
            ) : (
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-[11px] font-medium text-emerald-800">
                <ShieldCheck className="w-3 h-3 text-emerald-600" />
                <span>{subscription.warrantyInfo}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Bottom Footer: Price + Dual Action Buttons + Help Link */}
      <div className="pt-3 border-t border-[#F0E7DE] mt-3">
        <div className="flex items-baseline justify-between mb-3">
          <div>
            <span className="text-[10px] text-[#6B7280] block font-medium uppercase tracking-wider">Price</span>
            <span className="text-2xl font-extrabold text-[#252525] font-mono tabular-nums">
              ₹{subscription.sellingPrice}
            </span>
          </div>

          <span className="text-xs text-[#6B7280]">
            {subscription.planDuration}
          </span>
        </div>

        {/* Actions Container: Primary Buy Now + Secondary Get All Details */}
        {/* On desktop: 2 buttons side-by-side or stacked cleanly; on mobile: stacked vertically */}
        <div className="flex flex-col sm:flex-row gap-2">
          {/* 1. Get All Details (Secondary Button) */}
          <a
            href={detailsWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-colors shadow-2xs text-center"
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
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-colors shadow-2xs active:scale-98 text-center"
            aria-label={`Buy Now ${subscription.name} ${subscription.planDuration} for ₹${subscription.sellingPrice}`}
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
            <span>Buy Now</span>
          </a>
        </div>

        {/* Directly below both buttons: smaller clickable text link */}
        <div className="mt-2 text-center">
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
