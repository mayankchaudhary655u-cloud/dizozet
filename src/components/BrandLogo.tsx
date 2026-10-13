import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  lightText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  lightText = false,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-11 h-11',
    xl: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl',
  };

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Official Dizozet Circular Emblem with Silver D and Gold Z Monogram */}
      <div
        className={`relative ${iconSizes[size]} shrink-0 rounded-full overflow-hidden shadow-lg shadow-amber-500/10 border border-amber-500/20 bg-[#0A0D14] flex items-center justify-center group-hover:scale-105 transition-transform duration-200`}
      >
        <svg
          viewBox="0 0 500 500"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="dz-embed-inner" cx="45%" cy="40%" r="55%">
              <stop offset="0%" stopColor="#1E2433" />
              <stop offset="65%" stopColor="#0D111A" />
              <stop offset="100%" stopColor="#05070B" />
            </radialGradient>

            <linearGradient id="dz-embed-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE885" />
              <stop offset="25%" stopColor="#F5B82E" />
              <stop offset="50%" stopColor="#E29A10" />
              <stop offset="75%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#9E6800" />
            </linearGradient>

            <linearGradient id="dz-embed-gold-dark" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#805300" />
              <stop offset="40%" stopColor="#C9860A" />
              <stop offset="70%" stopColor="#F5C042" />
              <stop offset="100%" stopColor="#FFEBB0" />
            </linearGradient>

            <linearGradient id="dz-embed-ring" x1="20%" y1="0%" x2="80%" y2="100%">
              <stop offset="0%" stopColor="#F5B82E" />
              <stop offset="30%" stopColor="#FFE885" />
              <stop offset="55%" stopColor="#B87B08" />
              <stop offset="75%" stopColor="#4A3408" />
              <stop offset="90%" stopColor="#F5B82E" />
              <stop offset="100%" stopColor="#FFEBB0" />
            </linearGradient>

            <linearGradient id="dz-embed-silver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="20%" stopColor="#E2E8F0" />
              <stop offset="45%" stopColor="#CBD5E1" />
              <stop offset="70%" stopColor="#94A3B8" />
              <stop offset="90%" stopColor="#64748B" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
          </defs>

          {/* Dark Inner Circular Plate */}
          <circle cx="250" cy="250" r="235" fill="url(#dz-embed-inner)" stroke="#1F2937" strokeWidth="4" />

          {/* Outer Golden Ring Frame */}
          <path
            d="M 250 25 A 225 225 0 1 1 80 395 A 235 235 0 0 0 250 25 Z"
            fill="url(#dz-embed-ring)"
          />

          {/* Silver "D" Monogram */}
          <g>
            <path
              d="M 105 130
                 L 230 130
                 C 285 130 330 170 330 225
                 C 330 250 318 272 298 288
                 L 245 288
                 L 262 268
                 C 278 255 288 238 288 220
                 C 288 185 258 166 220 166
                 L 165 166
                 L 165 305
                 C 165 330 150 355 125 368
                 L 125 170
                 L 105 170
                 Z"
              fill="url(#dz-embed-silver)"
            />
            {/* Top Bevel */}
            <path
              d="M 105 130 L 138 145 L 230 145 C 275 145 315 178 315 225 C 315 245 305 264 288 278 L 272 260 C 282 250 288 236 288 220 C 288 185 258 166 220 166 L 165 166 L 138 145 Z"
              fill="#FFFFFF"
              opacity="0.28"
            />
          </g>

          {/* Golden "Z" Monogram with Sharp Extended Tips */}
          <g>
            <path
              d="M 210 190
                 L 370 168
                 L 425 164
                 L 335 212
                 L 250 212
                 L 162 312
                 L 360 312
                 L 405 298
                 L 345 345
                 L 170 345
                 L 145 330
                 L 290 215
                 Z"
              fill="url(#dz-embed-gold)"
            />
            {/* Upper Wing Highlight */}
            <path
              d="M 210 190 L 425 164 L 375 185 L 235 198 Z"
              fill="#FFFBEB"
              opacity="0.8"
            />
            {/* Lower Shadow Edge */}
            <path
              d="M 162 312 L 360 312 L 405 298 L 365 325 L 185 325 Z"
              fill="#B45309"
              opacity="0.8"
            />
            {/* Diagonal Slash Bevel */}
            <path
              d="M 305 215 L 155 330 L 165 340 L 325 225 Z"
              fill="#FDE68A"
              opacity="0.95"
            />
          </g>

          {/* Highlights */}
          <circle cx="218" cy="192" r="4" fill="#FFFFFF" opacity="0.9" />
          <circle cx="423" cy="165" r="3.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="165" cy="312" r="3.5" fill="#FFFFFF" opacity="0.9" />
          <circle cx="403" cy="299" r="3.5" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col">
          <span className={`font-extrabold tracking-tight ${lightText ? 'text-white' : 'text-[#252525]'} uppercase font-sans ${textSizes[size]}`}>
            DIZOZET
          </span>
        </div>
      )}
    </div>
  );
};
