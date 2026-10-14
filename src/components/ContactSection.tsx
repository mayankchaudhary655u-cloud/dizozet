import React, { useState } from 'react';
import { getContactConfig, getWhatsAppUrl } from '../data/config';
import { MessageCircle, Mail, Instagram, Send, Clock, MapPin, Check, ArrowRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const config = getContactConfig();
  const [userName, setUserName] = useState('');
  const [userInquiryType, setUserInquiryType] = useState('Subscription Inquiry');
  const [userMessage, setUserMessage] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  // Exact links requested:
  // WhatsApp: https://wa.me/917895768118
  const whatsappUrl = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}`;
  // Email: mailto:dizozet.org@gmail.com
  const emailMailto = `mailto:${config.email}`;
  // Instagram: https://www.instagram.com/dizo_zet/
  const instagramUrl = config.instagram;

  const handleSendViaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const fullMessage = `Hello Dizozet, my name is ${userName || 'Customer'}. [Topic: ${userInquiryType}] ${userMessage}`;
    const url = `https://wa.me/${config.whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(fullMessage)}`;
    window.open(url, '_blank');
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(config.email);
    setCopiedNotification(true);
    setTimeout(() => setCopiedNotification(false), 2000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-white border-b border-[#F0E7DE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-semibold text-[#F28C28] uppercase tracking-wider font-mono">
            Get In Touch
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#252525] tracking-tight mt-1 text-balance">
            Contact Dizozet
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6B7280]">
            Reach out directly for subscriptions, products, custom website requests, or general inquiries.
          </p>
        </div>

        {/* 3 Professional Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {/* Card 1: WhatsApp Support */}
          <div className="p-6 rounded-xl bg-[#25D366]/5 border border-[#25D366]/30 hover:border-[#25D366] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#25D366] mb-4 group-hover:scale-102 transition-transform">
                <MessageCircle className="w-6 h-6 fill-current" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#252525] group-hover:text-[#25D366] transition-colors">
                  WhatsApp Support
                </h3>
                <span className="text-[11px] font-mono text-[#128C7E] font-semibold bg-[#25D366]/15 px-2 py-0.5 rounded-md border border-[#25D366]/30">
                  Instant
                </span>
              </div>
              <p className="text-xs text-[#6B7280] mb-3">
                Direct connection for orders, plan activations, and immediate assistance.
              </p>
              <div className="mb-4">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm font-semibold font-mono text-[#252525] hover:text-[#25D366] transition-colors"
                  title="Click to message WhatsApp Support"
                >
                  {config.whatsappDisplay}
                </a>
              </div>
            </div>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] transition-colors shadow-2xs"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: Email Support */}
          <div className="p-6 rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28] mb-4 group-hover:scale-102 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors">
                  Email Support
                </h3>
                {copiedNotification && (
                  <span className="text-[11px] text-[#F28C28] flex items-center gap-1 font-semibold">
                    <Check className="w-3 h-3" /> Copied!
                  </span>
                )}
              </div>
              <p className="text-xs text-[#6B7280] mb-3">
                For official correspondence, invoicing, business proposals, and documentation.
              </p>
              <div className="text-sm font-medium font-mono text-[#252525] mb-4 truncate" title={config.email}>
                {config.email}
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={emailMailto}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-[#F28C28] hover:bg-[#E07B18] transition-colors shadow-2xs"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
              <button
                type="button"
                onClick={copyEmail}
                title="Copy Email Address"
                className="px-3 py-2.5 rounded-lg text-xs font-medium text-[#252525] bg-white border border-[#F0E7DE] hover:border-[#F28C28] hover:text-[#F28C28] transition-colors"
              >
                Copy
              </button>
            </div>
          </div>

          {/* Card 3: Instagram */}
          <div className="p-6 rounded-xl bg-white border border-[#F0E7DE] hover:border-[#F28C28] transition-all flex flex-col justify-between shadow-2xs group">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#FFF5EB] border border-[#F0E7DE] flex items-center justify-center text-[#F28C28] mb-4 group-hover:scale-102 transition-transform">
                <Instagram className="w-6 h-6" />
              </div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-base font-bold text-[#252525] group-hover:text-[#F28C28] transition-colors">
                  Instagram
                </h3>
                <span className="text-[11px] font-mono text-[#6B7280] bg-[#FFF5EB] px-2 py-0.5 rounded-md border border-[#F0E7DE]">
                  Official
                </span>
              </div>
              <p className="text-xs text-[#6B7280] mb-3">
                Follow for regular plan updates, offers, announcements, and tech tips.
              </p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-semibold font-mono text-[#F28C28] hover:underline mb-4"
              >
                {config.instagramHandle}
              </a>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg text-xs font-semibold text-[#252525] hover:text-[#F28C28] bg-white hover:bg-[#FFF5EB] border border-[#F0E7DE] hover:border-[#F28C28] transition-colors shadow-2xs"
            >
              <Instagram className="w-3.5 h-3.5 text-[#F28C28]" />
              <span>Follow on Instagram</span>
            </a>
          </div>
        </div>

        {/* Section 5 CTA Requirement:
            "Add this CTA below the cards:
            Need help choosing the right plan?
            “Contact Dizozet for subscription inquiries, product information, and custom service requests.”
            Button: Contact Us on WhatsApp" */}
        <div className="rounded-2xl bg-[#FFF5EB] border border-[#F0E7DE] p-8 sm:p-10 mb-10 text-center shadow-2xs">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#252525] mb-2">
              Need help choosing the right plan?
            </h3>
            <p className="text-sm text-[#6B7280] mb-6 leading-relaxed">
              Contact Dizozet for subscription inquiries, product information, and custom service requests.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] transition-all shadow-xs active:scale-98"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Contact Us on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Working Hours & Quick Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-5 space-y-3.5">
            <div className="p-5 rounded-xl bg-white border border-[#F0E7DE] space-y-3 text-xs text-[#6B7280]">
              <div className="flex items-center gap-2.5 text-[#252525] font-medium">
                <Clock className="w-4 h-4 text-[#F28C28]" />
                <span>Working Hours: {config.workingHours}</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#252525] font-medium">
                <MapPin className="w-4 h-4 text-[#F28C28]" />
                <span>{config.addressPlaceholder}</span>
              </div>
              <div className="pt-2 border-t border-[#F0E7DE] text-[11px] text-[#6B7280]">
                All subscription orders and logins are delivered digitally through WhatsApp directly to your number.
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#FFF5EB]/30 border border-[#F0E7DE] p-6 sm:p-8 shadow-2xs">
              <h4 className="text-base font-bold text-[#252525] mb-1">Custom Inquiry Message</h4>
              <p className="text-xs text-[#6B7280] mb-4">
                Have specific website or custom requirements? Send a message directly to WhatsApp.
              </p>

              <form onSubmit={handleSendViaWhatsApp} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Inquiry Topic *
                  </label>
                  <select
                    value={userInquiryType}
                    onChange={(e) => setUserInquiryType(e.target.value)}
                    className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] focus:outline-none focus:border-[#F28C28] transition-colors"
                  >
                    <option value="Subscription Inquiry">Digital Subscription Inquiry</option>
                    <option value="Digital Product Inquiry">Digital Product Inquiry</option>
                    <option value="Website Development (₹999)">Website Development (₹999)</option>
                    <option value="E-commerce Website (₹2,999)">E-commerce Website (₹2,999)</option>
                    <option value="Landing Page Development">Landing Page Development</option>
                    <option value="SEO & Marketing Services">SEO & Marketing Services</option>
                    <option value="Custom Project Quote">Custom Website / Specialized Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252525] mb-1">
                    Describe Your Requirements
                  </label>
                  <textarea
                    rows={3}
                    value={userMessage}
                    onChange={(e) => setUserMessage(e.target.value)}
                    placeholder="Tell us what plan, website feature, or question you have..."
                    className="w-full px-3.5 py-2 bg-white border border-[#F0E7DE] rounded-lg text-sm text-[#252525] placeholder-[#9CA3AF] focus:outline-none focus:border-[#F28C28] transition-colors"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg shadow-2xs transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
