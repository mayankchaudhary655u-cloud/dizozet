import React from 'react';
import { DigitalProductItem } from '../types';
import { X, MessageCircle, Download, CheckCircle2, ArrowRight, Sparkles, ShieldCheck, Zap } from 'lucide-react';
import { getProductBuyWhatsAppUrl } from '../data/config';
import { AIVideoStylesCollage } from './AIVideoStylesCollage';

interface ProductProcessModalProps {
  product: DigitalProductItem | null;
  onClose: () => void;
}

export const ProductProcessModal: React.FC<ProductProcessModalProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  const whatsappBuyUrl = getProductBuyWhatsAppUrl(product.name, product.price);

  const steps = product.processSteps || [
    { step: 1, title: 'Pay ₹99', desc: 'Confirm order on WhatsApp (+91 7895768118) and complete quick UPI payment.' },
    { step: 2, title: 'Download Videos', desc: 'Get instant high-speed Google Drive download link for 2000+ AI videos.' },
    { step: 3, title: 'Use & Upload', desc: 'Ready to post on Instagram Reels, YouTube Shorts, and TikTok with zero watermarks.' },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-[#F0E7DE] rounded-2xl p-5 sm:p-7 shadow-2xl overflow-y-auto max-h-[92vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Highly Visible × (Cross) Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/95 hover:bg-[#F28C28] text-[#252525] hover:text-white border border-[#F0E7DE] hover:border-[#F28C28] shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close details"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Product Image Banner */}
        {product.image && (
          <div className="relative rounded-xl overflow-hidden mb-5 border border-[#F0E7DE] bg-black aspect-16/9 shadow-xs">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 right-3 bg-black/80 backdrop-blur-xs text-white text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5 border border-white/20">
              <Download className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>{product.format}</span>
            </span>
          </div>
        )}

        {/* Header Title & Pricing */}
        <div className="mb-5">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="text-xs font-bold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-2.5 py-0.5 rounded-md">
              {product.category}
            </span>
            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] border border-[#BBF7D0] px-2.5 py-0.5 rounded-md">
              100% Watermark-Free
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight">
            {product.name}
          </h3>

          <div className="flex items-baseline gap-2.5 mt-2">
            <span className="text-3xl sm:text-4xl font-extrabold text-[#252525] font-mono">
              ₹{product.price}
            </span>
            {product.originalPrice && (
              <span className="text-base text-[#94A3B8] line-through font-mono">
                ₹{product.originalPrice}
              </span>
            )}
            <span className="text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-1 rounded-md">
              Special 90% OFF Limited Deal
            </span>
          </div>
        </div>

        {/* How It Works / Process Section */}
        <div className="bg-[#FFF5EB] border border-[#F0E7DE] rounded-xl p-4 sm:p-5 mb-6">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 text-[#F28C28]" />
            <h4 className="text-xs sm:text-sm font-extrabold text-[#252525] uppercase tracking-wider">
              3-Step Instant Process:
            </h4>
          </div>

          {/* Process Timeline */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {steps.map((s, idx) => (
              <div key={s.step} className="p-3 rounded-lg bg-white border border-[#F0E7DE] flex items-start gap-2.5 shadow-2xs">
                <div className="w-6 h-6 rounded-full bg-[#F28C28] text-white flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {s.step}
                </div>
                <div>
                  <h5 className="text-xs font-bold text-[#252525]">{s.title}</h5>
                  <p className="text-[11px] text-[#6B7280] mt-0.5 leading-snug">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Multi-Style Visual Collage Showcase */}
        <div className="mb-6">
          <AIVideoStylesCollage />
        </div>

        {/* Key Features Bullet points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6 bg-gray-50 border border-[#F0E7DE] rounded-xl p-4">
          <div className="flex items-center gap-2 text-xs text-[#252525]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Over 2,000+ ready-to-use AI Reels &amp; Shorts in Full HD / 4K</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#252525]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>100% Commercial rights with zero watermarks or logos</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#252525]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Trending viral topics: Motivation, Tech, Luxury, Finance, Stories</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#252525]">
            <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0" />
            <span>Lifetime access via Google Drive with fast download speeds</span>
          </div>
        </div>

        {/* Action Buttons: WhatsApp Buy Now */}
        <div className="space-y-2.5">
          <a
            href={whatsappBuyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all shadow-md active:scale-98"
            aria-label={`Buy Now on WhatsApp for ₹${product.price}`}
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Buy Now on WhatsApp (₹{product.price})</span>
          </a>

          <p className="text-[11px] text-center text-[#6B7280] flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>Official WhatsApp Support: +91 7895768118 • Instant Drive Delivery</span>
          </p>
        </div>
      </div>
    </div>
  );
};
