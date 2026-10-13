import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Headphones, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';

interface HeroProps {
  onExploreSubscriptions: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreSubscriptions,
  onExploreServices,
}) => {
  return (
    <section className="relative overflow-hidden bg-white border-b border-[#F0E7DE] pt-8 pb-14 md:pt-12 md:pb-18">
      {/* Subtle light-orange decorative background area */}
      <div className="absolute top-0 right-0 -z-0 w-1/3 h-full bg-[#FFF5EB] rounded-bl-[80px] pointer-events-none hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Supporting Text & CTAs */}
          <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
            {/* Trusted Brand Badge */}
            <div className="flex justify-center lg:justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF5EB] border border-[#F0E7DE] text-xs font-semibold text-[#F28C28]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Affordable Subscriptions & Digital Services</span>
              </div>
            </div>

            {/* Main Headline (Exact text requested) */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#252525] tracking-tight leading-[1.18] text-balance">
              Same Subscriptions,{' '}
              <span className="text-[#F28C28]">
                Smarter Prices
              </span>{' '}
              & Trusted Digital Services.
            </h1>

            {/* Supporting Text (Exact text requested) */}
            <p className="text-base sm:text-lg text-[#6B7280] max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover digital subscriptions, useful online products, and professional services at affordable prices.
            </p>

            {/* Compact CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3">
              <button
                onClick={onExploreSubscriptions}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] rounded-xl shadow-xs transition-all flex items-center justify-center gap-2 active:scale-98"
              >
                <span>Explore Subscriptions</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-6 py-3 text-sm font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <span>Explore Services</span>
              </button>
            </div>

            {/* Proof Trust strip below CTA */}
            <div className="pt-4 border-t border-[#F0E7DE] grid grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <ShieldCheck className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>Clear Terms</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <Zap className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>WhatsApp Setup</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#6B7280]">
                <Headphones className="w-4 h-4 text-[#F28C28] shrink-0" />
                <span>Customer Help</span>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Compact Card with Actual Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="rounded-2xl bg-[#FFF5EB] border border-[#F0E7DE] p-5 sm:p-6 shadow-xs">
                {/* Header with Logo */}
                <div className="flex items-center justify-between pb-3.5 border-b border-[#F0E7DE]">
                  <div className="flex items-center gap-2">
                    <BrandLogo size="sm" showText={false} />
                    <span className="text-xs font-bold text-[#252525] uppercase tracking-wider font-sans">
                      Dizozet Marketplace
                    </span>
                  </div>
                  <span className="text-xs font-medium text-[#F28C28]">
                    +91 78957 68118
                  </span>
                </div>

                {/* Compact Sample Showcase Items */}
                <div className="space-y-2.5 pt-3.5">
                  <div className="p-3 rounded-xl bg-white border border-[#F0E7DE] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#252525]">Google AI Pro</div>
                      <div className="text-xs text-[#6B7280]">18 months access</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#F28C28] font-mono">₹299</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#F0E7DE] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#252525]">Canva Pro</div>
                      <div className="text-xs text-[#6B7280]">1 year access</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#F28C28] font-mono">₹299</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#F0E7DE] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#252525]">Disney+ Hotstar</div>
                      <div className="text-xs text-[#6B7280]">1 month access</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#F28C28] font-mono">₹99</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white border border-[#F0E7DE] flex items-center justify-between">
                    <div>
                      <div className="text-sm font-semibold text-[#252525]">Website Development</div>
                      <div className="text-xs text-[#6B7280]">Modern & responsive</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-[#F28C28] font-mono">From ₹999</div>
                    </div>
                  </div>
                </div>

                <div className="mt-3.5 pt-3 border-t border-[#F0E7DE] flex items-center justify-between text-xs text-[#6B7280]">
                  <span>Direct WhatsApp ordering</span>
                  <button
                    onClick={onExploreSubscriptions}
                    className="text-[#F28C28] hover:underline font-semibold"
                  >
                    View All Plans →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
