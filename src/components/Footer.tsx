import React from 'react';
import { BrandLogo } from './BrandLogo';
import { getContactConfig, getWhatsAppUrl } from '../data/config';
import { MessageCircle, Mail, Instagram } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const config = getContactConfig();

  const handleLink = (path: string) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`;
  const emailMailto = `mailto:${config.email}`;
  const instagramUrl = config.instagram;

  return (
    <footer className="bg-white border-t border-[#F0E7DE] text-[#6B7280] text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Dizozet Logo & Short Description */}
          <div className="lg:col-span-2 space-y-3.5">
            <button
              onClick={() => handleLink('/')}
              className="focus:outline-none text-left"
              aria-label="Dizozet Home"
            >
              <BrandLogo size="md" />
            </button>
            <p className="text-xs sm:text-sm text-[#6B7280] max-w-sm leading-relaxed">
              Same Subscriptions, Smarter Prices & Trusted Digital Services. A reliable digital platform connecting Indian creators, freelancers, and businesses with affordable digital subscriptions and professional web services.
            </p>
          </div>

          {/* Column 2: Quick Links / Navigation */}
          <div>
            <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3.5 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('/')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/subscriptions')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  Subscriptions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/products')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  Products (Coming Soon)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/services')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/about')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/contact')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/faq')}
                  className="hover:text-[#F28C28] transition-colors text-left"
                >
                  FAQ
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Trust */}
          <div>
            <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3.5 font-mono">
              Legal & Trust
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => handleLink('/terms')}
                  className="hover:text-[#252525] transition-colors text-left"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/privacy')}
                  className="hover:text-[#252525] transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleLink('/refund-policy')}
                  className="hover:text-[#252525] transition-colors text-left"
                >
                  Refund & Cancellation Policy
                </button>
              </li>
              <li className="pt-2">
                <span className="inline-block text-[11px] text-[#6B7280] bg-[#FFF5EB] border border-[#F0E7DE] px-2.5 py-1 rounded-md">
                  100% Genuine Plan Warranty
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Dedicated Contact Us Section (Exact requested format) */}
          <div className="lg:col-span-1">
            <h4 className="text-xs font-bold text-[#252525] uppercase tracking-wider mb-3.5 font-mono">
              Contact Us
            </h4>
            <div className="space-y-3.5 text-xs">
              {/* WhatsApp icon — WhatsApp Support: +91 78957 68118 */}
              <div>
                <div className="text-[11px] text-[#6B7280] uppercase tracking-wider font-medium mb-1">
                  WhatsApp Support
                </div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#252525] hover:text-[#25D366] transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366] shrink-0 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                  </span>
                  <span className="font-mono font-medium">{config.whatsappDisplay}</span>
                </a>
              </div>

              {/* Email icon — Email Support: support.dizozet@gmail.com */}
              <div>
                <div className="text-[11px] text-[#6B7280] uppercase tracking-wider font-medium mb-1">
                  Email Support
                </div>
                <a
                  href={emailMailto}
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#252525] hover:text-[#F28C28] transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28] shrink-0 group-hover:border-[#F28C28]">
                    <Mail className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono font-medium break-all">{config.email}</span>
                </a>
              </div>

              {/* Instagram icon — Instagram: @dizo_zet */}
              <div>
                <div className="text-[11px] text-[#6B7280] uppercase tracking-wider font-medium mb-1">
                  Instagram
                </div>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium text-[#252525] hover:text-[#F28C28] transition-colors group"
                >
                  <span className="w-7 h-7 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28] shrink-0 group-hover:border-[#F28C28]">
                    <Instagram className="w-3.5 h-3.5" />
                  </span>
                  <span className="font-mono font-medium">{config.instagramHandle}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Clean copyright and guarantees */}
        <div className="pt-8 mt-10 border-t border-[#F0E7DE] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#6B7280]">
          <div>© 2026 Dizozet. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>Smarter Prices</span>
            <span>·</span>
            <span>Direct WhatsApp Ordering</span>
            <span>·</span>
            <span>Pan-India Delivery</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
