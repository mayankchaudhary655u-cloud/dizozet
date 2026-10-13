import React from 'react';
import { ServiceItem } from '../types';
import { BrandIcon } from './BrandIcons';
import { X, Check, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  const whatsappUrl = getWhatsAppUrl(
    service.name,
    `Starting at ₹${service.startingPrice}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-white border border-[#F0E7DE] rounded-2xl p-6 sm:p-8 shadow-xl overflow-y-auto max-h-[90vh]">
        {/* Highly Visible × (Cross) Button in Top-Right Corner */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/95 hover:bg-[#F28C28] text-[#252525] hover:text-white border border-[#F0E7DE] hover:border-[#F28C28] shadow-md flex items-center justify-center transition-all cursor-pointer focus:outline-none"
          aria-label="Close details"
          title="Close (Esc)"
        >
          <X className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center p-3 shrink-0">
            <BrandIcon name={service.iconName} className="w-8 h-8" />
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#252525]">
              {service.name}
            </h3>
            <div className="flex items-center gap-3 text-xs text-[#6B7280] mt-1">
              <span className="text-[#F28C28] font-semibold">{service.category} Service</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#F28C28]" />
                {service.timeline}
              </span>
            </div>
          </div>
        </div>

        {/* Full Narrative Description */}
        <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
          {service.fullDescription}
        </p>

        {/* Pricing Box */}
        <div className="p-4 rounded-xl bg-[#FFF5EB] border border-[#F0E7DE] mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs text-[#6B7280] block">Starting Investment</span>
            <div className="text-3xl font-extrabold text-[#252525] font-mono tabular-nums mt-0.5">
              ₹{service.startingPrice}
            </div>
            <span className="text-xs text-[#6B7280]">Milestone-based delivery</span>
          </div>

          <div className="text-right">
            <span className="text-xs font-mono text-emerald-700 flex items-center justify-end gap-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Dedicated Indian Support
            </span>
            <span className="text-[11px] text-[#6B7280] mt-1 block">
              100% Mobile Responsive & Modern Code
            </span>
          </div>
        </div>

        {/* Deliverables Checklist */}
        <div className="mb-6">
          <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3 font-mono">
            Key Deliverables & Inclusions
          </h4>
          <div className="space-y-2">
            {service.deliverables.map((item, i) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#6B7280]">
                <Check className="w-4 h-4 text-[#F28C28] shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:flex-1 flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-all shadow-xs active:scale-98"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Discuss on WhatsApp (Starting ₹{service.startingPrice})</span>
          </a>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-5 py-3 text-xs font-semibold text-[#6B7280] hover:text-[#252525] bg-white hover:bg-[#FFF5EB] rounded-xl border border-[#F0E7DE]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
