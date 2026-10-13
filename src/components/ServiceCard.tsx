import React from 'react';
import { ServiceItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { Check, MessageCircle, Clock } from 'lucide-react';
import { getServiceWhatsAppUrl } from '../data/config';

interface ServiceCardProps {
  service: ServiceItem;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  // Automatic WhatsApp message including service name, starting price, and request for further details:
  // "Hello Dizozet, I am interested in [Service Name] (starting at ₹[Price]). Please share further details, proposal, and timeline."
  const whatsappUrl = getServiceWhatsAppUrl(
    service.name,
    service.startingPrice
  );

  return (
    <div className="rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all duration-200 p-6 flex flex-col justify-between group shadow-2xs hover:shadow-xs">
      <div>
        {/* Top Header: Icon + Category + Timeline */}
        <div className="flex items-start justify-between gap-3 mb-4">
          <div className="w-11 h-11 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center p-2.5 shrink-0 group-hover:scale-102 transition-transform text-[#F28C28]">
            <BrandIcon name={service.iconName} className="w-6 h-6" color="#F28C28" />
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[#6B7280] bg-[#FFF5EB] px-2.5 py-1 rounded-md border border-[#F0E7DE] font-medium">
            <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
            <span>{service.timeline}</span>
          </div>
        </div>

        {/* Title & Short Description */}
        <h3 className="text-lg font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors mb-2">
          {service.name}
        </h3>
        <p className="text-xs sm:text-sm text-[#6B7280] line-clamp-3 mb-4 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Features Checklist */}
        <div className="space-y-2 py-3 border-t border-b border-[#F0E7DE] my-3">
          {service.features.map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2 text-xs text-[#252525]">
              <Check className="w-3.5 h-3.5 text-[#F28C28] shrink-0 mt-0.5" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Pricing & WhatsApp Action Button */}
      <div className="pt-4 border-t border-[#F0E7DE] mt-2">
        <div className="flex items-baseline justify-between mb-3.5">
          <div>
            <span className="text-[10px] text-[#6B7280] block font-medium uppercase tracking-wider">Starting from</span>
            <span className="text-2xl font-extrabold text-[#252525] font-mono tabular-nums">
              ₹{service.startingPrice}
            </span>
          </div>

          <span className="text-xs text-[#6B7280]">
            {service.category}
          </span>
        </div>

        {/* WhatsApp Inquiry Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-colors shadow-2xs active:scale-98"
          aria-label={`Get details for ${service.name} starting at ₹${service.startingPrice}`}
        >
          <MessageCircle className="w-4 h-4 fill-current" />
          <span>Get Details & Quote</span>
        </a>
      </div>
    </div>
  );
};
