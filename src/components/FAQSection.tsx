import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-12 md:py-16 bg-[#FFF5EB]/30 border-b border-[#F0E7DE]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] bg-[#FFF5EB] border border-[#F0E7DE] px-3 py-1 rounded-full mb-2.5">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight text-balance">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-3">
            <p className="text-sm sm:text-base text-[#6B7280]">
              Quick answers about plans, payments, activation timelines, and services.
            </p>
            <a
              href={getWhatsAppUrl('FAQ Assistance')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg shadow-2xs transition-colors shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Ask on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-2.5">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-xl bg-white border border-[#F0E7DE] overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleAccordion(item.id)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="text-sm font-semibold text-[#252525]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#6B7280] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#F28C28]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-[#6B7280] leading-relaxed border-t border-[#F0E7DE]">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Ask on WhatsApp CTA below FAQs */}
        <div className="mt-10 text-center p-6 rounded-2xl bg-white border border-[#F0E7DE] shadow-2xs">
          <h3 className="text-base font-bold text-[#252525] mb-1.5">
            Have a question that isn't answered here?
          </h3>
          <p className="text-xs sm:text-sm text-[#6B7280] mb-4 max-w-md mx-auto">
            Our team is available daily on WhatsApp (+91 78957 68118) to assist you with any questions.
          </p>
          <a
            href={getWhatsAppUrl('FAQ Assistance')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg shadow-2xs transition-all active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Ask on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
