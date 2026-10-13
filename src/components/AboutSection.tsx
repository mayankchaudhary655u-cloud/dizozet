import React from 'react';
import { Target, Sparkles, MessageCircle, HeartHandshake } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';
import { BrandLogo } from './BrandLogo';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 flex flex-col items-center">
            <div className="mb-3">
              <BrandLogo size="lg" showText={false} />
            </div>
            <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider font-mono">
              About Us
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight mt-1 text-balance">
              About Dizozet
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6B7280] max-w-xl">
              Bringing digital subscriptions, digital products, and professional online services together in one convenient place.
            </p>
          </div>

          {/* Narrative Content */}
          <div className="rounded-2xl bg-[#FFF5EB]/30 border border-[#F0E7DE] p-6 sm:p-8 space-y-5 leading-relaxed text-[#6B7280] text-sm">
            <p>
              In today's digital era, creators, freelancers, and businesses depend on specialized software—from advanced AI reasoning engines to creative suites and streaming subscriptions. However, complicated international credit card billing and expensive individual memberships can be a hassle.
            </p>

            <p>
              <strong className="text-[#252525] font-semibold">Dizozet</strong> provides a dependable alternative where customers can access digital subscriptions, useful digital products, and web services with transparent pricing in Indian Rupees and direct WhatsApp customer support.
            </p>

            {/* Core Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#F0E7DE] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#252525]">Simplicity First</h4>
                <p className="text-xs text-[#6B7280]">
                  No complex checkout hoops. Select your tool or product and connect easily on WhatsApp.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E7DE] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28]">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#252525]">True Affordability</h4>
                <p className="text-xs text-[#6B7280]">
                  Smarter pricing to make essential software tools accessible for Indian creators and teams.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E7DE] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#252525]">Transparent Information</h4>
                <p className="text-xs text-[#6B7280]">
                  Accurate plan durations and terms displayed clearly before you purchase.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#F0E7DE] space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-[#252525]">Direct Assistance</h4>
                <p className="text-xs text-[#6B7280]">
                  Reach our team on WhatsApp (+91 78957 68118) for order help and service updates.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#F0E7DE]">
              <span className="text-xs text-[#6B7280]">
                Have a question or custom inquiry?
              </span>
              <a
                href={getWhatsAppUrl('About Us Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg transition-colors shadow-2xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
