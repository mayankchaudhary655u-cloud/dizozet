import React, { useState } from 'react';
import { DigitalProductItem } from '../types';
import { ProductProcessModal } from './ProductProcessModal';
import { AIVideoStylesCollage } from './AIVideoStylesCollage';
import { getProductBuyWhatsAppUrl } from '../data/config';
import {
  Sparkles,
  MessageCircle,
  Download,
  Info,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Film,
  Flame,
  ArrowRight
} from 'lucide-react';

interface ProductsSectionProps {
  products: DigitalProductItem[];
  onViewAll?: () => void;
  isFullProductsPage?: boolean;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  products,
  isFullProductsPage = false,
}) => {
  const [selectedProduct, setSelectedProduct] = useState<DigitalProductItem | null>(null);

  // In the Products section, 2000+ AI Videos Bundle is the exclusive product
  const bundle = products.find((p) => p.id === 'prod-ai-videos-bundle-2000') || products[0];

  if (!bundle) return null;

  const whatsappUrl = getProductBuyWhatsAppUrl(bundle.name, bundle.price);

  return (
    <section id="products" className="py-14 md:py-20 bg-linear-to-b from-white via-[#FFF5EB]/40 to-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3.5 py-1.5 rounded-full mb-3 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>Digital Products • AI Creator Vault</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#252525] tracking-tight text-balance">
            {isFullProductsPage ? 'Exclusive Digital Products' : 'Featured Digital Product'}
          </h2>
          <p className="mt-3 text-base sm:text-lg text-[#6B7280] leading-relaxed">
            Get instant access to top-trending AI video collections formatted specifically for viral Instagram Reels, YouTube Shorts, and TikTok monetization.
          </p>
        </div>

        {/* Hero Product Card: Premium Standout Presentation */}
        <div className="rounded-3xl bg-white border-2 border-[#F28C28]/30 hover:border-[#F28C28] transition-all duration-300 p-5 sm:p-7 lg:p-9 shadow-xl relative overflow-hidden group">
          {/* Top Decorative Flare */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Banner Row: Badges & Category */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-white bg-linear-to-r from-amber-600 to-[#F28C28] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 fill-current" />
                <span>⏳ COMING SOON • LAUNCHING SOON</span>
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold text-[#6B7280] bg-[#FFF5EB] border border-[#F0E7DE]">
                {bundle.category}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-[#16A34A] bg-[#DCFCE7] border border-[#BBF7D0] px-3 py-1 rounded-full flex items-center gap-1.5">
                <Download className="w-3.5 h-3.5" />
                <span>Instant Google Drive Access</span>
              </span>
            </div>
          </div>

          {/* Main Content Grid: Left Title & Selling Proposition / Right Pricing Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-8 relative z-10">
            {/* Left 7 cols: Title, Descriptions, Key Features */}
            <div className="lg:col-span-8">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#252525] tracking-tight leading-tight mb-3 group-hover:text-[#F28C28] transition-colors">
                {bundle.name}
              </h3>
              <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed mb-5">
                Unlock <strong>2,000+ viral, ready-to-upload AI videos</strong> crafted in high definition (1080p &amp; 4K 9:16). Completely watermark-free, with commercial rights included. Perfect for creators, theme pages, agencies, and businesses looking to grow rapid organic reach without recording or editing footage from scratch.
              </p>

              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-2">
                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF5EB]/60 border border-[#F0E7DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#252525]">2000+ Ready-Made AI Reels</h5>
                    <p className="text-[11px] text-[#6B7280]">Cinema, Characters, 3D Cartoons, Surreal &amp; Viral Shorts.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF5EB]/60 border border-[#F0E7DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#252525]">100% Without Watermark</h5>
                    <p className="text-[11px] text-[#6B7280]">Add your own logo/handle, upload freely, and monetize.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF5EB]/60 border border-[#F0E7DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#252525]">Instant Drive Access</h5>
                    <p className="text-[11px] text-[#6B7280]">Organized Google Drive folders sorted by trending categories.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 p-3 rounded-xl bg-[#FFF5EB]/60 border border-[#F0E7DE]">
                  <CheckCircle2 className="w-4 h-4 text-[#16A34A] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-xs font-bold text-[#252525]">Commercial Use License</h5>
                    <p className="text-[11px] text-[#6B7280]">Full freedom to use for personal branding, clients, and ads.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 4 cols: Bold ₹99 Price Box & Actions */}
            <div className="lg:col-span-4 bg-linear-to-b from-[#FFF5EB] to-[#FDE8D4]/60 border-2 border-[#F28C28] rounded-2xl p-5 sm:p-6 text-center shadow-md">
              <span className="inline-block text-[11px] font-bold text-[#F28C28] uppercase tracking-wider bg-white border border-[#F0E7DE] px-3 py-1 rounded-full mb-3 shadow-2xs">
                Limited Time Offer
              </span>

              <div className="mb-4">
                <span className="text-xs text-[#6B7280] block font-medium uppercase tracking-wider mb-1">
                  Exclusive Bundle Price
                </span>
                <div className="flex items-baseline justify-center gap-2.5">
                  <span className="text-4xl sm:text-5xl font-black text-[#252525] font-mono tracking-tight">
                    ₹{bundle.price}
                  </span>
                  <span className="text-lg text-[#94A3B8] line-through font-mono">
                    ₹{bundle.originalPrice || 999}
                  </span>
                </div>
                <div className="inline-block mt-1 text-xs font-bold text-[#16A34A] bg-[#DCFCE7] px-2.5 py-0.5 rounded-md">
                  Save 90% Today
                </div>
              </div>

              {/* Process Step Highlights */}
              <div className="bg-white/80 rounded-xl p-3 border border-[#F0E7DE] mb-5 text-left space-y-1.5 text-xs text-[#4B5563]">
                <div className="flex items-center gap-2 font-bold text-[#252525]">
                  <Zap className="w-3.5 h-3.5 text-[#F28C28]" />
                  <span>3-Step Instant Process:</span>
                </div>
                <p className="text-[11px] text-[#6B7280] pl-5">
                  <strong>Pay ₹99</strong> → <strong>Download Videos</strong> → <strong>Use &amp; Upload</strong>
                </p>
              </div>

              {/* Action Buttons: View Details & Buy Now */}
              <div className="space-y-2.5">
                {/* Buy Now Button linked to WhatsApp +91 7895768118 */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-5 rounded-xl text-base font-bold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all shadow-md active:scale-98"
                  aria-label={`Buy Now ${bundle.name} on WhatsApp for ₹${bundle.price}`}
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  <span>Buy Now on WhatsApp</span>
                </a>

                {/* View Details Button */}
                <button
                  type="button"
                  onClick={() => setSelectedProduct(bundle)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-bold text-[#252525] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-all shadow-2xs active:scale-98 cursor-pointer"
                  aria-label="View Details of 2000+ AI Videos Bundle"
                >
                  <Info className="w-4 h-4 text-[#F28C28]" />
                  <span>View Details &amp; Process</span>
                </button>
              </div>

              <div className="mt-3.5 pt-3 border-t border-[#F0E7DE] flex items-center justify-center gap-1.5 text-[11px] text-[#6B7280]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#16A34A]" />
                <span>WhatsApp: +91 7895768118 • Instant delivery</span>
              </div>
            </div>
          </div>

          {/* Eye-Catching Multi-Style Image Collage Section */}
          <div className="relative z-10 pt-2">
            <AIVideoStylesCollage />
          </div>
        </div>
      </div>

      {/* Process / Details Modal (Shows: Pay ₹99 -> Download Videos -> Use & Upload) */}
      <ProductProcessModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
