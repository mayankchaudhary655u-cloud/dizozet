import React from 'react';
import { Search, MessageSquare, CreditCard, CheckCheck } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Choose Your Plan',
      description: 'Explore our catalog of digital subscriptions, tools, or professional services.',
      icon: Search,
    },
    {
      number: '02',
      title: 'Contact Us on WhatsApp',
      description: 'Click Buy Now or Get Started to connect directly on WhatsApp (+91 78957 68118).',
      icon: MessageSquare,
    },
    {
      number: '03',
      title: 'Confirm Details and Payment',
      description: 'Review final details and complete payment via secure Indian UPI/bank options.',
      icon: CreditCard,
    },
    {
      number: '04',
      title: 'Receive Your Product or Service',
      description: 'Receive prompt credential activation instructions or project milestone updates.',
      icon: CheckCheck,
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider font-mono">
            Simple 4-Step Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight mt-1 text-balance">
            How It Works
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Straightforward ordering from browsing to activation.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="rounded-xl bg-[#FFF5EB]/30 border border-[#F0E7DE] hover:border-[#F28C28] p-5 transition-all duration-200 flex flex-col justify-between group shadow-2xs"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-extrabold text-[#F28C28] font-mono tabular-nums">
                      {step.number}
                    </span>
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#F0E7DE] flex items-center justify-center p-2 text-[#F28C28]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#252525] mb-2 group-hover:text-[#F28C28] transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-xs text-[#6B7280] leading-relaxed">
                    {step.description}
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
