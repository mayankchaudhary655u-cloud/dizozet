import React from 'react';

// Official Sony LIV Brand Logo matching the genuine brand mark asset
export const SonyLIVLogo: React.FC<{ className?: string }> = ({
  className = 'w-6 h-6',
}) => {
  return (
    <div
      className={"relative flex items-center justify-center overflow-hidden rounded-lg bg-black shadow-xs " + className}
      title="Sony LIV"
      role="img"
      aria-label="Official Sony LIV Logo"
    >
      <img
        src="/sonyliv-logo.png"
        alt="Sony LIV Official Logo"
        className="w-full h-full object-contain rounded-lg"
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};

export default SonyLIVLogo;
