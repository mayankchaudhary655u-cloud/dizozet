import React from 'react';
import { TERMS_AND_CONDITIONS, PRIVACY_POLICY, REFUND_POLICY } from '../data/legal';
import { ArrowLeft, Shield } from 'lucide-react';

interface LegalPageProps {
  type: 'terms' | 'privacy' | 'refund-policy';
  onBack: () => void;
}

export const LegalPage: React.FC<LegalPageProps> = ({ type, onBack }) => {
  const getDocument = () => {
    switch (type) {
      case 'terms':
        return TERMS_AND_CONDITIONS;
      case 'privacy':
        return PRIVACY_POLICY;
      case 'refund-policy':
        return REFUND_POLICY;
    }
  };

  const doc = getDocument();

  return (
    <div className="py-12 md:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#F28C28] hover:underline mb-6"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Back to Home</span>
      </button>

      <div className="rounded-2xl bg-white border border-[#F0E7DE] p-6 sm:p-10 shadow-2xs space-y-6">
        <div className="border-b border-[#F0E7DE] pb-5">
          <div className="flex items-center gap-1.5 text-xs text-[#F28C28] mb-2 font-mono">
            <Shield className="w-4 h-4" />
            <span>Policy Documentation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight">
            {doc.title}
          </h1>
          <p className="text-xs text-[#6B7280] mt-1.5">
            Last Updated: {doc.lastUpdated} · Dizozet
          </p>
        </div>

        <div className="space-y-5 text-[#252525] text-sm leading-relaxed">
          {doc.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h3 className="text-base font-bold text-[#252525]">
                {sec.heading}
              </h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">{sec.content}</p>
            </div>
          ))}
        </div>

        <div className="pt-6 border-t border-[#F0E7DE] text-xs text-[#6B7280] flex flex-col sm:flex-row items-center justify-between gap-3">
          <span>Questions? Contact dizozet.org@gmail.com or WhatsApp (+91 78957 68118)</span>
          <button
            onClick={onBack}
            className="px-4 py-2 bg-[#FFF5EB] hover:bg-[#FEEDD9] text-[#252525] font-medium rounded-lg border border-[#F0E7DE]"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};
