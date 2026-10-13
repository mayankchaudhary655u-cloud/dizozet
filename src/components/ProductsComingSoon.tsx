import React from 'react';
import { Package, MessageCircle, ArrowLeft, Sparkles, Bell } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface ProductsComingSoonProps {
  onBackToHome: () => void;
}

export const ProductsComingSoon: React.FC<ProductsComingSoonProps> = ({ onBackToHome }) => {
  const whatsappUrl = getWhatsAppUrl(
    'Digital Products',
    'Inquiring about upcoming digital products collection and early access'
  );

  return (
    <section className="py-16 md:py-24 bg-white min-h-[65vh] flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Minimal Clean Illustration / Decorative Visual */}
        <div className="relative inline-flex items-center justify-center mb-8">
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28] shadow-xs">
            <Package className="w-10 h-10 sm:w-12 sm:h-12 stroke-[1.5]" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-white border border-[#F0E7DE] text-[#F28C28] flex items-center justify-center shadow-xs">
            <Sparkles className="w-4 h-4 fill-[#F28C28]" />
          </div>
        </div>

        {/* Small Pill Tag */}
        <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3.5 py-1 rounded-full mb-4">
          <Bell className="w-3.5 h-3.5" />
          <span>Under Preparation</span>
        </div>

        {/* Exact Requested Headline */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#252525] tracking-tight mb-4">
          Products Coming Soon
        </h1>

        {/* Exact Requested Description */}
        <p className="text-base sm:text-lg text-[#6B7280] max-w-lg mx-auto leading-relaxed mb-10">
          Something exciting is on the way! Our digital products collection will be available soon. Stay connected with Dizozet for updates.
        </p>

        {/* Both Requested Working Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
          {/* Back to Home Button */}
          <button
            onClick={onBackToHome}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[#252525] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-all shadow-2xs group"
          >
            <ArrowLeft className="w-4 h-4 text-[#F28C28] group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </button>

          {/* Contact Us on WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all shadow-xs active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Contact Us on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
