import React from 'react';
import { CanvaLogo } from './CanvaLogo';
import { CapCutLogo } from './CapCutLogo';
import { DisneyHotstarLogo } from './DisneyHotstarLogo';
import { JioHotstarLogo } from './JioHotstarLogo';
import { PrimeVideoLogo } from './PrimeVideoLogo';
import { SonyLIVLogo } from './SonyLIVLogo';
import { SpotifyLogo } from './SpotifyLogo';
import {
  Sparkles,
  Bot,
  Palette,
  Layers,
  PlayCircle,
  Music,
  Film,
  Briefcase,
  Package,
  Layout,
  ShoppingCart,
  Globe,
  Search,
  Share2,
  TrendingUp,
  BarChart2,
  PenTool,
  Code,
  ShieldCheck,
  Clock,
  Headphones,
  Zap,
} from 'lucide-react';

interface BrandIconProps {
  name: string;
  className?: string;
  color?: string;
}

/**
 * High-fidelity, official brand SVG logos with accurate brand geometry and colors.
 * Used for all subscription plans across Homepage, Popular Subscriptions, and Full Subscriptions page.
 */

// 1. Google AI Pro / Google Official "G" Multi-color Brand Logo
export const GoogleLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Google AI Pro Logo" role="img">
    <path
      fill="#EA4335"
      d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
    />
    <path
      fill="#4285F4"
      d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
    />
    <path
      fill="#FBBC05"
      d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.55 10.78l7.98-6.19z"
    />
    <path
      fill="#34A853"
      d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
    />
  </svg>
);

// 2. Google Gemini (Gemini Pro / Gemini Advanced) Official Four-Point Gradient Sparkle Star Logo
export const GeminiLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Google Gemini Logo" role="img">
    <defs>
      <linearGradient id="geminiGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#1B72E8" />
        <stop offset="35%" stopColor="#4285F4" />
        <stop offset="70%" stopColor="#9B72CB" />
        <stop offset="100%" stopColor="#D96570" />
      </linearGradient>
      <radialGradient id="geminiGradGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#1A73E8" stopOpacity="0.25" />
        <stop offset="100%" stopColor="#9B72CB" stopOpacity="0" />
      </radialGradient>
    </defs>
    <rect width="48" height="48" rx="10" fill="url(#geminiGradGlow)" />
    <path
      d="M24 3C24 14.598 14.598 24 3 24C14.598 24 24 33.402 24 45C24 33.402 33.402 24 45 24C33.402 24 24 14.598 24 3Z"
      fill="url(#geminiGrad1)"
    />
  </svg>
);

// 3. OpenAI ChatGPT Official Spiral Rosette Logo
export const ChatGPTLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 48 48"
    className={className}
    aria-label="Official ChatGPT Logo"
    role="img"
  >
    {/* Official ChatGPT Emerald / Teal Rounded Tile */}
    <rect width="48" height="48" rx="11" fill="#10A37F" />
    {/* Official OpenAI / ChatGPT White Spiral Knot */}
    <g transform="translate(9, 9) scale(1.25)">
      <path
        fill="#FFFFFF"
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
      />
    </g>
  </svg>
);

// 4. Anthropic Claude Official Starburst / Spark Logo (Claude AI & Claude Pro)
export const ClaudeLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 160 160"
    className={className}
    aria-label="Official Claude Pro Logo"
    role="img"
  >
    {/* Official Anthropic Claude Terracotta Starburst / Spark Geometry */}
    <g transform="translate(6, 6) translate(-75.96, -223.53)">
      <path
        fill="#D97757"
        d="m 105.01,322.07 29.14,-16.35 0.49,-1.42 -0.49,-0.79 h -1.42 l -4.87,-0.3 -16.65,-0.45 -14.44,-0.6 -13.99,-0.75 -3.52,-0.75 -3.3,-4.35 0.34,-2.17 2.96,-1.99 4.24,0.37 9.37,0.64 14.06,0.97 10.2,0.6 15.11,1.57 h 2.4 l 0.34,-0.97 -0.82,-0.6 -0.64,-0.6 -14.55,-9.86 -15.75,-10.42 -8.25,-6 -4.46,-3.04 -2.25,-2.85 -0.97,-6.22 4.05,-4.46 5.44,0.37 1.39,0.37 5.51,4.24 11.77,9.11 15.37,11.32 2.25,1.87 0.9,-0.64 0.11,-0.45 -1.01,-1.69 -8.36,-15.11 -8.92,-15.37 -3.97,-6.37 -1.05,-3.82 c -0.37,-1.57 -0.64,-2.89 -0.64,-4.5 l 4.61,-6.26 2.55,-0.82 6.15,0.82 2.59,2.25 3.82,8.74 6.19,13.76 9.6,18.71 2.81,5.55 1.5,5.14 0.56,1.57 h 0.97 v -0.9 l 0.79,-10.54 1.46,-12.94 1.42,-16.65 0.49,-4.69 2.32,-5.62 4.61,-3.04 3.6,1.72 2.96,4.24 -0.41,2.74 -1.76,11.44 -3.45,17.92 -2.25,12 h 1.31 l 1.5,-1.5 6.07,-8.06 10.2,-12.75 4.5,-5.06 5.25,-5.59 3.37,-2.66 h 6.37 l 4.69,6.97 -2.1,7.2 -6.56,8.32 -5.44,7.05 -7.8,10.5 -4.87,8.4 0.45,0.67 1.16,-0.11 17.62,-3.75 9.52,-1.72 11.36,-1.95 5.14,2.4 0.56,2.44 -2.02,4.99 -12.15,3 -14.25,2.85 -21.22,5.02 -0.26,0.19 0.3,0.37 9.56,0.9 4.09,0.22 h 10.01 l 18.64,1.39 4.87,3.22 2.92,3.94 -0.49,3 -7.5,3.82 -10.12,-2.4 -23.62,-5.62 -8.1,-2.02 h -1.12 v 0.67 l 6.75,6.6 12.37,11.17 15.49,14.4 0.79,3.56 -1.99,2.81 -2.1,-0.3 -13.61,-10.24 -5.25,-4.61 -11.89,-10.01 h -0.79 v 1.05 l 2.74,4.01 14.47,21.75 0.75,6.67 -1.05,2.17 -3.75,1.31 -4.12,-0.75 -8.47,-11.89 -8.74,-13.39 -7.05,-12 -0.86,0.49 -4.16,44.81 -1.95,2.29 -4.5,1.72 -3.75,-2.85 -1.99,-4.61 1.99,-9.11 2.4,-11.89 1.95,-9.45 1.76,-11.74 1.05,-3.9 -0.07,-0.26 -0.86,0.11 -8.85,12.15 -13.46,18.19 -10.65,11.4 -2.55,1.01 -4.42,-2.29 0.41,-4.09 2.47,-3.64 14.74,-18.75 8.89,-11.62 5.74,-6.71 -0.04,-0.97 h -0.34 l -39.15,25.42 -6.97,0.9 -3,-2.81 0.37,-4.61 1.42,-1.5 11.77,-8.1 -0.04,0.04 z"
        shapeRendering="geometricPrecision"
      />
    </g>
  </svg>
);

// 5. Official Canva Brand Logo
export { CanvaLogo };

// 6. Official CapCut Brand Logo
export { CapCutLogo };

// 7. Adobe Creative Cloud Official Infinity Cloud Logo
export const AdobeCCLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Adobe Creative Cloud Logo" role="img">
    <defs>
      <linearGradient id="adobeCCGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FA0F00" />
        <stop offset="50%" stopColor="#E31A60" />
        <stop offset="100%" stopColor="#6C19F2" />
      </linearGradient>
    </defs>
    <rect width="48" height="48" rx="12" fill="url(#adobeCCGrad)" />
    <path
      d="M27.5 17.5c-1.3 0-2.5.5-3.5 1.4-1-.9-2.2-1.4-3.5-1.4-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c1.3 0 2.5-.5 3.5-1.4 1 .9 2.2 1.4 3.5 1.4 3.6 0 6.5-2.9 6.5-6.5s-2.9-6.5-6.5-6.5zm-7 10.2c-2.1 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7zm7 0c-2.1 0-3.7-1.6-3.7-3.7s1.6-3.7 3.7-3.7 3.7 1.6 3.7 3.7-1.6 3.7-3.7 3.7z"
      fill="#FFFFFF"
    />
  </svg>
);

// 8. Microsoft 365 (Office 365) Official Six-Segment Ribbon Loop Logo
export const Microsoft365Logo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Microsoft Office 365 Logo" role="img">
    <rect width="48" height="48" rx="12" fill="#FFFFFF" />
    <rect width="48" height="48" rx="12" fill="#F8FAFC" stroke="#E2E8F0" strokeWidth="1" />
    <path
      d="M24 10.5c-4.2 0-7.5 2.8-7.5 6.8 0 4.2 3.1 6.1 6.8 7.3l2.2.7c3.1 1 4.5 2.1 4.5 4.3 0 2.5-2.2 4.1-5 4.1-3.2 0-5.4-1.9-5.7-4.4h-3.4c.4 4.3 3.8 7.2 9.1 7.2 4.6 0 8.3-2.9 8.3-7.2 0-4-2.8-6-6.6-7.2l-2.2-.7c-3.1-1-4.7-2-4.7-4.2 0-2.3 1.9-3.9 4.3-3.9 2.6 0 4.4 1.5 4.8 3.7h3.3C31.8 13.5 28.5 10.5 24 10.5z"
      fill="#D83B01"
    />
    <rect x="11" y="11" width="11" height="11" rx="1.5" fill="#F25022" />
    <rect x="26" y="11" width="11" height="11" rx="1.5" fill="#7FBA00" />
    <rect x="11" y="26" width="11" height="11" rx="1.5" fill="#00A4EF" />
    <rect x="26" y="26" width="11" height="11" rx="1.5" fill="#FFB900" />
  </svg>
);

// 9. ZEE5 Official Multicolored Circular Brand Logo
export const ZEE5Logo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    aria-label="Official ZEE5 Logo"
    role="img"
  >
    {/* Black background matching official brand asset */}
    <rect width="100" height="100" rx="18" fill="#000000" />

    {/* Concentric multicolored arc orbits around the left side of the disk */}
    {/* 1. Outermost Cyan Arc (#00B5D6) */}
    <path
      d="M 53 91 A 41 41 0 0 1 53 9"
      fill="none"
      stroke="#00B5D6"
      strokeWidth="4.2"
      strokeLinecap="butt"
    />

    {/* 2. Lime Green Arc (#8CC63F) */}
    <path
      d="M 67.05 84.77 A 37.5 37.5 0 1 1 62.71 13.78"
      fill="none"
      stroke="#8CC63F"
      strokeWidth="4.2"
      strokeLinecap="butt"
    />

    {/* 3. Golden Yellow Arc (#FFBA00) */}
    <path
      d="M 72.50 77.85 A 34 34 0 1 1 72.50 22.15"
      fill="none"
      stroke="#FFBA00"
      strokeWidth="4.2"
      strokeLinecap="butt"
    />

    {/* 4. Vivid Orange Arc (#F37023) */}
    <path
      d="M 75.67 70.41 A 30.5 30.5 0 1 1 77.98 32.51"
      fill="none"
      stroke="#F37023"
      strokeWidth="4.2"
      strokeLinecap="butt"
    />

    {/* 5. Deep Magenta/Purple Arc (#A21B7C) */}
    <path
      d="M 63.11 75.03 A 27 27 0 1 1 79.08 43.01"
      fill="none"
      stroke="#A21B7C"
      strokeWidth="4.2"
      strokeLinecap="butt"
    />

    {/* Center White Circular Disk */}
    <circle cx="53" cy="50" r="26" fill="#FFFFFF" />

    {/* Official Bold Geometric "ZEE5" Lettering */}
    <g fill="#000000">
      {/* 'Z' */}
      <path d="M 39 43.5 L 49.5 43.5 L 49.5 46.2 L 42.6 53.6 L 49.8 53.6 L 49.8 56.5 L 38.8 56.5 L 38.8 53.8 L 45.7 46.4 L 39 46.4 Z" />

      {/* First 'E' */}
      <path d="M 52 43.5 L 61 43.5 L 61 46.3 L 55.4 46.3 L 55.4 48.6 L 60.2 48.6 L 60.2 51.3 L 55.4 51.3 L 55.4 53.7 L 61.2 53.7 L 61.2 56.5 L 52 56.5 Z" />

      {/* Second 'E' */}
      <path d="M 63.2 43.5 L 72.2 43.5 L 72.2 46.3 L 66.6 46.3 L 66.6 48.6 L 71.4 48.6 L 71.4 51.3 L 66.6 51.3 L 66.6 53.7 L 72.4 53.7 L 72.4 56.5 L 63.2 56.5 Z" />

      {/* '5' — Bold, straight-top geometric 5 extending slightly beyond the white circle */}
      <path d="M 76.5 43.5 L 89 43.5 L 89 46.3 L 79.8 46.3 L 79.4 49.5 C 80.6 48.9 82.2 48.5 84 48.5 C 87.8 48.5 90.5 50.8 90.5 54.5 C 90.5 58.2 87.5 60.8 83.2 60.8 C 79.8 60.8 77.2 59.2 76.4 56.5 L 79.5 55.3 C 80.1 56.9 81.5 57.9 83.2 57.9 C 85.3 57.9 87 56.6 87 54.5 C 87 52.4 85.3 51.2 83.1 51.2 C 81.4 51.2 80 51.8 79.2 52.8 L 76.5 52.1 Z" />
    </g>
  </svg>
);

// 10. Official JioHotstar (Disney+ Hotstar) Brand Logo
export { DisneyHotstarLogo, JioHotstarLogo };

// 11. Official Sony LIV Brand Logo
export { SonyLIVLogo };

// 12. YouTube Premium Official Red Play Button Logo
export const YouTubePremiumLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="YouTube Premium Logo" role="img">
    <rect width="48" height="48" rx="12" fill="#FF0000" />
    {/* YouTube Play Icon Triangle */}
    <path d="M20 16L32 24L20 32V16Z" fill="#FFFFFF" />
  </svg>
);

// 13. Official Spotify Brand Logo
export { SpotifyLogo };
export const SpotifyPremiumLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <SpotifyLogo className={className} />
);

// 14. Official Prime Video Brand Logo
export { PrimeVideoLogo };
export const AmazonPrimeLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <PrimeVideoLogo className={className} />
);

// 15. Netflix Official Iconic Red Ribbon "N" Logo
export const NetflixLogo: React.FC<{ className?: string }> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Netflix Logo" role="img">
    <rect width="48" height="48" rx="12" fill="#000000" />
    <g>
      {/* Left upright */}
      <path d="M14 9h6v30h-6z" fill="#B81D24" />
      {/* Right upright */}
      <path d="M28 9h6v30h-6z" fill="#B81D24" />
      {/* Center diagonal with shadow gradient */}
      <path d="M14 9h6l14 30h-6L14 9z" fill="#E50914" />
    </g>
  </svg>
);

/**
 * Universal BrandIcon component:
 * 1. Matches subscription slugs and names directly to real brand logos.
 * 2. Falls back gracefully to Lucide icons for custom digital assets or generic services.
 */
export const BrandIcon: React.FC<BrandIconProps> = ({ name, className = 'w-6 h-6', color }) => {
  const normalized = (name || '').toLowerCase().trim();

  // --- Real Subscription Brand Logos ---
  // 1. Google AI Pro
  if (normalized === 'google-ai-pro' || normalized === 'google ai pro' || normalized === 'google-ai') {
    return <GoogleLogo className={className} />;
  }

  // 2. Gemini Pro & Gemini Advanced
  if (
    normalized === 'gemini-pro' ||
    normalized === 'gemini pro' ||
    normalized === 'gemini-advanced' ||
    normalized === 'gemini advanced' ||
    normalized === 'gemini'
  ) {
    return <GeminiLogo className={className} />;
  }

  // 3. ChatGPT Plus
  if (
    normalized === 'chatgpt-plus' ||
    normalized === 'chatgpt plus' ||
    normalized === 'chatgpt' ||
    normalized === 'openai'
  ) {
    return <ChatGPTLogo className={className} />;
  }

  // 4. Claude Pro & Claude AI
  if (
    normalized === 'claude-pro' ||
    normalized === 'claude pro' ||
    normalized === 'claude-ai' ||
    normalized === 'claude ai' ||
    normalized === 'claude' ||
    normalized === 'anthropic'
  ) {
    return <ClaudeLogo className={className} />;
  }

  // 5. Canva Pro
  if (
    normalized === 'canva-pro' ||
    normalized === 'canva pro' ||
    normalized === 'canva'
  ) {
    return <CanvaLogo className={className} />;
  }

  // 6. CapCut Pro
  if (
    normalized === 'capcut-pro' ||
    normalized === 'capcut pro' ||
    normalized === 'capcut'
  ) {
    return <CapCutLogo className={className} />;
  }

  // 7. Adobe Creative Cloud
  if (
    normalized === 'adobe-creative-cloud' ||
    normalized === 'adobe creative cloud' ||
    normalized === 'adobe' ||
    normalized === 'creative-cloud'
  ) {
    return <AdobeCCLogo className={className} />;
  }

  // 8. Microsoft Office 365
  if (
    normalized === 'ms-office-365' ||
    normalized === 'ms office 365' ||
    normalized === 'microsoft-office-365' ||
    normalized === 'office-365' ||
    normalized === 'microsoft 365' ||
    normalized === 'office 365'
  ) {
    return <Microsoft365Logo className={className} />;
  }

  // 9. ZEE5
  if (normalized === 'zee5' || normalized === 'zee 5') {
    return <ZEE5Logo className={className} />;
  }

  // 10. JioHotstar / Disney+ Hotstar
  if (
    normalized === 'disney-hotstar' ||
    normalized === 'disney+ hotstar' ||
    normalized === 'disney plus hotstar' ||
    normalized === 'jiohotstar' ||
    normalized === 'jio-hotstar' ||
    normalized === 'jio hotstar' ||
    normalized === 'hotstar'
  ) {
    return <DisneyHotstarLogo className={className} />;
  }

  // 11. Sony LIV
  if (
    normalized === 'sony-liv' ||
    normalized === 'sony liv' ||
    normalized === 'sonyliv'
  ) {
    return <SonyLIVLogo className={className} />;
  }

  // 12. YouTube Premium
  if (
    normalized === 'youtube-premium' ||
    normalized === 'youtube premium' ||
    normalized === 'youtube'
  ) {
    return <YouTubePremiumLogo className={className} />;
  }

  // 13. Spotify Premium
  if (
    normalized === 'spotify-premium' ||
    normalized === 'spotify premium' ||
    normalized === 'spotify'
  ) {
    return <SpotifyPremiumLogo className={className} />;
  }

  // 14. Prime Video (Amazon Prime)
  if (
    normalized === 'prime-video' ||
    normalized === 'prime video' ||
    normalized === 'primevideo' ||
    normalized === 'amazon-prime' ||
    normalized === 'amazon prime' ||
    normalized === 'amazon'
  ) {
    return <PrimeVideoLogo className={className} />;
  }

  // 15. Netflix
  if (normalized === 'netflix') {
    return <NetflixLogo className={className} />;
  }

  // --- Fallback icons for services, features, and generic items ---
  switch (name) {
    case 'Sparkles':
      return <Sparkles className={className} style={{ color: color || '#4285F4' }} />;
    case 'Bot':
      return <Bot className={className} style={{ color: color || '#38BDF8' }} />;
    case 'Palette':
      return <Palette className={className} style={{ color: color || '#00C4CC' }} />;
    case 'Layers':
      return <Layers className={className} style={{ color: color || '#EF4444' }} />;
    case 'PlayCircle':
      return <PlayCircle className={className} style={{ color: color || '#EF4444' }} />;
    case 'Music':
      return <Music className={className} style={{ color: color || '#22C55E' }} />;
    case 'Film':
      return <Film className={className} style={{ color: color || '#E50914' }} />;
    case 'Briefcase':
      return <Briefcase className={className} style={{ color: color || '#0A66C2' }} />;
    case 'Layout':
      return <Layout className={className} style={{ color: color || '#38BDF8' }} />;
    case 'ShoppingCart':
      return <ShoppingCart className={className} style={{ color: color || '#818CF8' }} />;
    case 'Globe':
      return <Globe className={className} style={{ color: color || '#34D399' }} />;
    case 'Search':
      return <Search className={className} style={{ color: color || '#FBBF24' }} />;
    case 'Share2':
      return <Share2 className={className} style={{ color: color || '#EC4899' }} />;
    case 'TrendingUp':
      return <TrendingUp className={className} style={{ color: color || '#6366F1' }} />;
    case 'BarChart2':
      return <BarChart2 className={className} style={{ color: color || '#F59E0B' }} />;
    case 'PenTool':
      return <PenTool className={className} style={{ color: color || '#A855F7' }} />;
    case 'Code':
      return <Code className={className} style={{ color: color || '#22D3EE' }} />;
    case 'ShieldCheck':
      return <ShieldCheck className={className} style={{ color: color || '#10B981' }} />;
    case 'Clock':
      return <Clock className={className} style={{ color: color || '#60A5FA' }} />;
    case 'Headphones':
      return <Headphones className={className} style={{ color: color || '#F43F5E' }} />;
    case 'Zap':
      return <Zap className={className} style={{ color: color || '#EAB308' }} />;
    default:
      return <Package className={className} style={{ color: color || '#A855F7' }} />;
  }
};
