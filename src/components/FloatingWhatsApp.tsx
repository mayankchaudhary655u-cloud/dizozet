import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const whatsappUrl = getWhatsAppUrl();

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2.5">
      {/* Tooltip Prompt */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white border border-[#F0E7DE] text-[#252525] text-xs shadow-md animate-in fade-in slide-in-from-right-3 duration-200">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-medium">Need help? Chat on WhatsApp</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#9CA3AF] hover:text-[#252525] ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 rounded-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-all"
        aria-label="Chat directly on WhatsApp (+91 78957 68118)"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
