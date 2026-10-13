import React from 'react';
import { ShieldCheck, MessageCircle, Headphones, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      number: '01',
      title: 'Clear Product Information',
      description: 'Transparent plan durations, prices, and terms without confusing fine print or hidden fees.',
      icon: ShieldCheck,
    },
    {
      number: '02',
      title: 'Easy WhatsApp Ordering',
      description: 'Contact our team directly on WhatsApp (+91 78957 68118) to discuss products, plans, and services.',
      icon: MessageCircle,
    },
    {
      number: '03',
      title: 'Customer Support',
      description: 'Get responsive assistance with order setup, queries, and digital service milestones.',
      icon: Headphones,
    },
    {
      number: '04',
      title: 'Transparent Pricing',
      description: 'Understand the plan, price, duration, and applicable terms before ordering with zero surprises.',
      icon: CheckCircle2,
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FFF5EB]/30 border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider font-mono">
            The Dizozet Advantage
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight mt-1 text-balance">
            Why Choose Dizozet?
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            A reliable marketplace tailored for creators, developers, and businesses seeking genuine value.
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.number}
                className="rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] p-5 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#F28C28]">
                      {feat.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center p-2 text-[#F28C28]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#252525] mb-2 group-hover:text-[#F28C28] transition-colors">
                    {feat.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
