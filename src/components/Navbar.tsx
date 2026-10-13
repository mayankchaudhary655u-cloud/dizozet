import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { getContactConfig, getWhatsAppUrl } from '../data/config';
import { MessageCircle, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const config = getContactConfig();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // EXACT NAVBAR ORDER REQUESTED:
  // DIZOZET Logo | Home | Subscriptions | Products | Services | About Us | Contact | FAQ | WhatsApp Chat
  // NOTE: Reviews & Blogs removed from navbar (they are displayed further down homepage).
  // NOTE: All Manage systems, buttons, dropdowns removed.
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Subscriptions', path: '/subscriptions' },
    { label: 'Products', path: '/products' },
    { label: 'Services', path: '/services' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
    { label: 'FAQ', path: '/faq' },
  ];

  const handleLinkClick = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-[#F0E7DE] shadow-xs'
          : 'bg-white border-[#F0E7DE]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-17 gap-4 md:gap-6">
          {/* 1. DIZOZET Logo on Left */}
          <button
            onClick={() => handleLinkClick('/')}
            className="flex items-center text-left focus:outline-none shrink-0 group"
            aria-label="Dizozet Home"
          >
            <BrandLogo size="md" />
          </button>

          {/* 2. Navigation Links in Exact Order: Home | Subscriptions | Products | Services | About Us | Contact | FAQ */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-[#252525]">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`whitespace-nowrap shrink-0 transition-colors py-1 relative ${
                    isActive
                      ? 'text-[#F28C28] font-semibold'
                      : 'text-[#252525] hover:text-[#F28C28]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F28C28] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* 3. WhatsApp Chat button visible on the right side of desktop navbar */}
          <div className="flex items-center gap-2.5 shrink-0">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs md:text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg shadow-xs transition-all active:scale-95 whitespace-nowrap shrink-0"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat</span>
            </a>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#252525] hover:bg-[#FFF5EB] rounded-lg focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-[#252525]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation (clean, working hamburger menu) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#F0E7DE] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-1 pb-3 border-b border-[#F0E7DE]">
            {navLinks.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.path}
                  onClick={() => handleLinkClick(item.path)}
                  className={`text-left px-3.5 py-2.5 text-sm rounded-lg transition-colors font-medium ${
                    isActive
                      ? 'bg-[#FFF5EB] text-[#F28C28] font-semibold'
                      : 'text-[#252525] hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <div className="pt-1">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#25D366] hover:bg-[#128C7E] rounded-lg shadow-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp Chat ({config.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
