import React from 'react';
import { SubscriptionItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { X, Check, MessageCircle, ShieldCheck, AlertCircle, Clock, Info } from 'lucide-react';
import {
  getSubscriptionBuyWhatsAppUrl,
  getSubscriptionDetailsWhatsAppUrl,
  getSubscriptionHelpWhatsAppUrl,
} from '../data/config';

interface ProductDetailModalProps {
  subscription: SubscriptionItem | null;
  onClose: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  subscription,
  onClose,
}) => {
  if (!subscription) return null;

  const detailsWhatsAppUrl = getSubscriptionDetailsWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  const buyNowWhatsAppUrl = getSubscriptionBuyWhatsAppUrl(
    subscription.name,
    subscription.planDuration,
    subscription.sellingPrice
  );

  const helpWhatsAppUrl = getSubscriptionHelpWhatsAppUrl(
    `${subscription.name} (${subscription.planDuration})`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Highly Visible × (Cross) Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-[#F28C28] text-[#252525] hover:text-white border border-[#F0E7DE] hover:border-[#F28C28] shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close details"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header: Brand Icon + Title + Category */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-white border border-[#F0E7DE] shadow-2xs flex items-center justify-center p-2 shrink-0">
            <BrandIcon
              name={subscription.slug}
              className="w-12 h-12 object-contain"
              color={subscription.brandColor}
            />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#252525]">
              {subscription.name}
            </h3>
            <p className="text-xs text-[#F28C28] font-semibold mt-0.5">
              {subscription.category}
            </p>
          </div>
        </div>

        {/* Pricing & Duration Card */}
        <div className="p-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#6B7280] block">Selling Price</span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl font-extrabold text-[#252525] font-mono tabular-nums">
                ₹{subscription.sellingPrice}
              </span>
            </div>
            <span className="text-xs text-[#F28C28] font-semibold mt-1 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Duration: {subscription.planDuration}
            </span>
          </div>

          <div className="text-left sm:text-right">
            {subscription.warrantyInfo ? (
              <span className={`text-xs font-mono inline-flex items-center gap-1 px-2.5 py-1 rounded-md ${
                subscription.warrantyInfo.toLowerCase().includes('without')
                  ? 'bg-amber-100 text-amber-900 border border-amber-200'
                  : 'bg-emerald-100 text-emerald-900 border border-emerald-200'
              }`}>
                {subscription.warrantyInfo.toLowerCase().includes('without') ? (
                  <AlertCircle className="w-3.5 h-3.5 text-amber-700" />
                ) : (
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                )}
                {subscription.warrantyInfo}
              </span>
            ) : (
              <span className="text-xs text-[#6B7280] block">
                Direct WhatsApp Setup
              </span>
            )}
            <span className="text-[11px] text-[#6B7280] mt-1 block">
              +91 78957 68118
            </span>
          </div>
        </div>

        {/* Benefits Checklist if provided */}
        {subscription.benefits && subscription.benefits.length > 0 && (
          <div className="mb-6">
            <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3 font-mono">
              Features
            </h4>
            <div className="space-y-2">
              {subscription.benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#6B7280]">
                  <Check className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dual Actions: Get All Details + Buy Now */}
        <div className="flex flex-col sm:flex-row gap-2.5 mb-3">
          {/* Secondary: Get All Details */}
          <a
            href={detailsWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-colors shadow-2xs text-center"
          >
            <Info className="w-4 h-4 text-[#F28C28]" />
            <span>Get All Details</span>
          </a>

          {/* Primary: Buy Now */}
          <a
            href={buyNowWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-all shadow-xs active:scale-98 text-center"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Buy Now (₹{subscription.sellingPrice})</span>
          </a>
        </div>

        {/* Need Help Link */}
        <div className="text-center pt-1">
          <a
            href={helpWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[#6B7280] hover:text-[#25D366] transition-colors hover:underline"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Need help? Contact us on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
